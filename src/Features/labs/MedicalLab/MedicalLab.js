import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Loader } from '@react-three/drei';
import { NavLink } from 'react-router-dom';
import './MedicalLab.css';
import * as THREE from 'three';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong with the 3D viewer.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const Model = ({ url, onError }) => {
  const groupRef = useRef();
  const [loadError, setLoadError] = useState(null);
  const { scene, error } = useGLTF(url, undefined, (loader) => {
    loader.load(
      url,
      () => {},
      undefined,
      (err) => {
        console.error("Loader error:", err);
        setLoadError(err);
        onError(err.message);
      }
    );
  });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (error) {
      console.error("Model load error:", error);
      setLoadError(error);
      onError(error.message);
    }
  }, [error, onError]);

  if (loadError || !scene) return null;

  return (
    <group ref={groupRef} position={[0, 1, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} dispose={null} />
    </group>
  );
};

const SceneSetup = () => {
  const { scene } = useThree();
  
  useEffect(() => {
    // Setup scene lighting
    scene.add(new THREE.AmbientLight(0x404040));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    return () => {
      // Cleanup lights when component unmounts
      scene.remove(directionalLight);
    };
  }, [scene]);

  return null;
};

const MedicalLab = () => {
  const [webGLError, setWebGLError] = useState(null);
  const [modelError, setModelError] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  // Verify the Firebase Storage URL format
  const modelUrl = "https://firebasestorage.googleapis.com/v0/b/vr-science-lab.appspot.com/o/realistic_human_heart.glb?alt=media&token=83b0eb9a-e9d2-425d-8187-7bd952092ba3";

  const isWebGLSupported = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    setIsMounted(true);
    if (!isWebGLSupported()) {
      setWebGLError('WebGL is not supported in your browser. Please use Chrome, Firefox, or Edge.');
    }
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const controller = new AbortController();
      const preloadModel = async () => {
        try {
          await useGLTF.preload(modelUrl, {
            signal: controller.signal,
          });
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.error("Preload error:", err);
            setModelError(err.message || 'Failed to load 3D model');
          }
        }
      };
      preloadModel();
      return () => controller.abort();
    }
  }, [isMounted, modelUrl, retryCount]);

  const handleRetry = () => {
    setModelError(null);
    setRetryCount(prev => prev + 1);
  };

  if (webGLError) {
    return (
      <div className="medical-lab-error">
        <h2>Graphics Error</h2>
        <p>{webGLError}</p>
        <NavLink to="/" className="return-button">
          Return to Home
        </NavLink>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="medical-lab-container">
        <NavLink to="/virtual-labs" className="return-link">
          &larr; Back to Labs
        </NavLink>

        {modelError && (
          <div className="model-error">
            <p>Error loading model: {modelError}</p>
            <div>
              <button onClick={handleRetry}>Retry Load</button>
              <NavLink to="/support" className="support-link">
                Contact Support
              </NavLink>
            </div>
          </div>
        )}

        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
          gl={{ preserveDrawingBuffer: true }}
          style={{ touchAction: 'none' }}
        >
          <Suspense fallback={null}>
            <SceneSetup />
            {isMounted && (
              <Model
                key={retryCount}
                url={modelUrl}
                onError={setModelError}
              />
            )}
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            dampingFactor={0.05}
            enableDamping
          />
        </Canvas>
        <Loader />
      </div>
    </ErrorBoundary>
  );
};

export default MedicalLab;
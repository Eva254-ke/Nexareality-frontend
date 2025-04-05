import * as THREE from 'three';

// Patch for removed exports
if (!THREE.LinearEncoding) {
  THREE.LinearEncoding = 3000;
  THREE.sRGBEncoding = 3001;
}

// Patch for BatchedMesh if needed
if (!THREE.BatchedMesh) {
  THREE.BatchedMesh = class extends THREE.Mesh {};
}

export default THREE;
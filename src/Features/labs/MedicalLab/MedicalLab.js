// src/components/labs/MedicalLab.js
import React from 'react';
import { Entity, Scene } from 'aframe-react';
import TutorPanel from '../../../components/TutorPanel';

export default function CardiacLab() {
  return (
    <div className="lab-container">
      <Scene 
        vr-mode-ui="enterVRButton: #enterVR"
        physics="debug: false; workerUrl: js/aframe-physics-system.min.js"
      >
        {/* Environment */}
        <a-sky color="#ECECEC"></a-sky>
        <a-light type="ambient" intensity="0.5"></a-light>
        
        {/* Interactive Heart */}
        <Entity 
          gltf-model="/models/medical/heart.glb"
          position="0 1.6 -2"
          rotation="0 180 0"
          scale="0.01 0.01 0.01"
          class="clickable"
          events={{
            click: () => console.log("Heart clicked!")
          }}
        />
        
        {/* Surgical Tools */}
        <Entity 
          gltf-model="/models/medical/surgical-tools/scalpel.glb"
          position="-0.5 1.5 -1"
          class="clickable"
          events={{
            click: () => console.log("Scalpel used!")
          }}
        />
        
        {/* VR Camera */}
        <Entity camera look-controls position="0 1.6 0">
          <Entity cursor animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"></Entity>
        </Entity>
      </Scene>
      
      {/* UI Overlay */}
      <div className="lab-ui">
        <button id="enterVR">Enter VR</button>
        <TutorPanel context="cardiac" />
      </div>
    </div>
  );
}
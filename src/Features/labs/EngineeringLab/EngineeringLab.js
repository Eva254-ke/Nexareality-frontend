// src/components/labs/EngineeringLab.js
import React from 'react';
import { Entity, Scene } from 'aframe-react';

export default function EngineeringLab() {
  return (
    <Scene>
      <a-assets>
        <a-asset-item id="robot-model" src="/models/engineering/robot.glb"></a-asset-item>
      </a-assets>

      <Entity 
        gltf-model="#robot-model"
        position="0 1 -2"
        rotation="0 45 0"
        class="clickable"
        events={{
          click: () => console.log("Robot selected")
        }}
      />

      <a-text 
        value="Robotics Engineering Lab" 
        position="0 2 -1.5"
        color="black"
      ></a-text>
    </Scene>
  );
}
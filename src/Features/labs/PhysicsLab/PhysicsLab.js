// src/components/labs/PhysicsLab.js
import React from 'react';
import { Entity, Scene } from 'aframe-react';

export default function PhysicsLab() {
  return (
    <Scene physics>
      <a-sphere 
        position="0 1.25 -5" 
        radius="1.25" 
        color="#EF2D5E"
        dynamic-body
      ></a-sphere>
      
      <a-plane 
        position="0 0 -4" 
        rotation="-90 0 0" 
        width="4" 
        height="4" 
        color="#7BC8A4"
        static-body
      ></a-plane>

      <a-text 
        value="Physics Simulation Lab" 
        position="0 2 -1.5"
        color="black"
      ></a-text>
    </Scene>
  );
}
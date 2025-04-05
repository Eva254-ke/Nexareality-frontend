// src/components/collaboration/CollaborationSpace.js
import React from 'react';
import 'aframe';
import { Scene } from 'aframe-react';

export default function CollaborationSpace() {
  return (
    <Scene>
      <a-text 
        value="Multi-User Collaboration Space" 
        position="0 2 -1.5"
        color="black"
      ></a-text>
      
      {/* Avatar entities would be dynamically added here */}
      <a-entity 
        id="remote-user-1"
        position="1 0 -3"
        gltf-model="#avatar-model"
      ></a-entity>
    </Scene>
  );
}
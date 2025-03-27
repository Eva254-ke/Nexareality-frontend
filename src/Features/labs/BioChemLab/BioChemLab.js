// src/components/labs/BioChemLab.js
import { Scene, Entity } from 'aframe-react';

export default function DNALab() {
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="dna-model" src="/models/biochem/dna.glb"></a-asset-item>
        </a-assets>
  
        <Entity 
          gltf-model="#dna-model"
          position="0 1.5 -2"
          rotation="0 45 0"
          dna-component="colorA: #FF6B6B; colorB: #4ECDC4"
        />
  
        <a-text 
          value="Click base pairs to separate strands" 
          position="0 2 -1.5"
          color="black"
        ></a-text>
      </Scene>
    );
  }
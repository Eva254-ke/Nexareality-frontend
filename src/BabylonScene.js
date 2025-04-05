if (!BABYLON.Engine.isSupported()) {
  console.error("WebGL is not supported on this browser.");
  return;
}
// Initialize Babylon.js engine and scene
const engine = new BABYLON.Engine(canvas, true);

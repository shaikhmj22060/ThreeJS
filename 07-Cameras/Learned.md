# What I Learned About ThreeJS Cameras

## Key Concepts
- **Cameras** are objects that define the viewpoint for rendering the 3D scene in Three.js.
- They determine what part of the scene is visible and how it's projected onto the screen.

## Types of Cameras
- **PerspectiveCamera**: Mimics human vision with perspective distortion. Objects farther away appear smaller.
  - Parameters: field of view (fov), aspect ratio, near and far clipping planes.
  - Example: `const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);`
- **OrthographicCamera**: Uses parallel projection, no perspective distortion. Good for 2D-like views or technical drawings.
  - Parameters: left, right, top, bottom, near, far.
  - Example: `const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 100);`

## Positioning and Controlling Cameras
- Set position: `camera.position.set(x, y, z);`
- Look at a point: `camera.lookAt(new THREE.Vector3(x, y, z));`
- Update projection matrix after changes: `camera.updateProjectionMatrix();`

## Camera Controls
- Use controls like `OrbitControls` for mouse interaction (rotate, zoom, pan).
- Example: `const controls = new THREE.OrbitControls(camera, renderer.domElement);`

## Best Practices
- Always update the camera's aspect ratio on window resize to avoid distortion.
- Position the camera appropriately for the scene (e.g., pull back for overview).
- Experiment with different camera types for different effects.
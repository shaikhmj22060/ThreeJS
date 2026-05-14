# Debug UI - Three.js Learnings

## Overview
Debug UI is essential for development and testing 3D scenes. It allows real-time parameter adjustment and visualization control.

## Key Concepts

### 1. GUI Libraries
- **dat.GUI**: Popular library for creating debug panels
- **Lil-gui**: Modern alternative to dat.GUI with better performance
- Used to expose variables and controls for scene manipulation

### 2. Adding Controls
- Create folders for organization
- Add different control types:
  - `add()`: numeric sliders
  - `addColor()`: color pickers
  - `add()` with object: dropdowns
  - `add()` with boolean: checkboxes

### 3. Common Debug Parameters
- **Mesh properties**: position, rotation, scale
- **Material properties**: color, metalness, roughness
- **Light properties**: intensity, position
- **Camera controls**: FOV, near/far planes
- **Animation parameters**: speed, duration

### 4. Event Listeners
- `onChange()`: trigger when value changes
- `onFinishChange()`: trigger when interaction completes
- Update scene properties in real-time

### 5. Best Practices
- Organize controls in folders
- Name parameters clearly
- Set appropriate min/max ranges
- Close panels by default in production
- Remove from production builds

## Implementation Pattern
```javascript
const gui = new dat.GUI();
const folder = gui.addFolder('Mesh');
folder.add(mesh.position, 'x', -10, 10).onChange(() => { /* update */ });
folder.addColor(material, 'color');
folder.close();
```

## Performance Considerations
- Debug UI impacts performance slightly
- Hide/remove in production
- Use for development only
- Monitor frame rates when adding many controls
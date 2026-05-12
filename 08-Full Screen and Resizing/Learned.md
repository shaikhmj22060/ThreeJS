# Full Screen and Resizing - What I Learned

## Window Resizing
- Use `window.addEventListener('resize', callback)` to detect window size changes
- Update camera aspect ratio: `camera.aspect = window.innerWidth / window.innerHeight`
- Recalculate camera frustum: `camera.updateProjectionMatrix()`
- Resize renderer: `renderer.setSize(window.innerWidth, window.innerHeight)`

## Full Screen Implementation
- Request full screen: `canvas.requestFullscreen()` or vendor-prefixed versions
- Handle full screen on double-click for better UX
- Use `document.fullscreenElement` to check full screen state
- Exit full screen: `document.exitFullscreen()`

## Pixel Ratio Handling
- Set device pixel ratio for crisp rendering on high-DPI screens
- Use `renderer.setPixelRatio(window.devicePixelRatio)`
- Prevents blurry rendering on retina displays

## Canvas Setup
- Get canvas reference from renderer: `renderer.domElement`
- Set canvas to fill viewport with `width: 100%; height: 100%` CSS
- Remove default body margins: `body { margin: 0; }`

## Best Practices
- Handle resize events efficiently (debounce if needed for heavy scenes)
- Support both keyboard (ESC) and double-click for full screen exit
- Always update all Three.js components that depend on window dimensions
- Test on different screen sizes and pixel densities
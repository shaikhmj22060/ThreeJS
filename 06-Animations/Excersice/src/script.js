import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//Clock for the same speed of animation on different devices
const clock = new THREE.Clock()
//animations 

const tick = () => {
    //clock
    const elapsedTime = clock.getElapsedTime()
    //update objects
    mesh.rotation.y =Math.cos(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.y = Math.sin(elapsedTime)
      
    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()
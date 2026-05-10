import './style.css'
import * as THREE from 'three'


// Scene
const scene = new THREE.Scene();

// Red Cube 

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const size = {
    width: 800,
    height: 600
};

//camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera)

// Canvas
const canvas = document.querySelector(".webgl");
// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(size.width, size.height)
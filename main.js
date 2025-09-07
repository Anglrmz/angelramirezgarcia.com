import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('bg');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f7fb);

const camera = new THREE.PerspectiveCamera(60, 2, 0.1, 100);
camera.position.set(2.5, 1.8, 3.5);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(3,4,5);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.45));

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshStandardMaterial({ color: 0x3a6cf4, roughness: 0.35, metalness: 0.1 })
);
scene.add(cube);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize); resize();

function animate(t=0){
  cube.rotation.y = t*0.0012;
  cube.rotation.x = t*0.0007;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
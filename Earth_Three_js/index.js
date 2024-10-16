import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"
console.log(`THREE REVISION %c${THREE.REVISION}`,"color: #FFFF00");
window.THREE = THREE;

const w = window.innerWidth;
const h = window.innerHeight;

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,w/h,0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
    color : 0xffff00,
});

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.02 ;

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const hemiLight = new THREE.HemisphereLight(0x0099ff,0xaa5500);
scene.add(hemiLight);

function animate(t = 0 ){
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    renderer.render(scene , camera);
    controls.update();
    renderer.render(scene, camera);
    
}

animate();
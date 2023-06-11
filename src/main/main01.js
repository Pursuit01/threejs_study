import * as THREE from "three";
// console.log(THREE);

// 目的：了解threeJS最基本的内容

// 1. 创建一个场景
const scene = new THREE.Scene();

// 2. 创建一个相机[透视相机]
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 3. 设置相机位置
camera.position.set(0, 0, 10);

// 4. 添加相机到场景中
scene.add(camera);

// 5. 添加物体
// 创建几何体对象
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "skyblue" });

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// 将物体添加到场景中
scene.add(cube);

// 6. 初始化渲染器
const renderer = new THREE.WebGL1Renderer();
// 设置渲染的尺寸和大小
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(renderer);

// 7. 将webGL渲染的内容添加到玻璃上
document.body.appendChild(renderer.domElement);

// 8. 使用渲染器通过相机将场景渲染进来
renderer.render(scene, camera);

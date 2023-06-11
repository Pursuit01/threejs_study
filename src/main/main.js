import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// console.log(THREE);

// 目标： 控制3d物体移动

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
const cubeGeometry = new THREE.BoxGeometry(2, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "skyblue" });

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 设置几何体的位置
// 定义坐标轴
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
// cube.position.set(5, 0, 0);

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
// renderer.render(scene, camera);

// 9. 创建轨道控制器
// 传入控制器需要控制的相机和物体
const controls = new OrbitControls(camera, renderer.domElement);

const render = () => {
  // 移动物体的x y z坐标
  cube.position.x += 0.01;
  cube.position.y += 0.01;
  cube.position.z += 0.01;
  // 到达阈值后重置
  if (cube.position.x >= 5) {
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
render();

//
// controls.update();

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "skyblue" });

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 定义坐标轴
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 设置几何体的缩放比例
// cube.scale.set(3, 2, 1);
//  旋转
// cube.rotation.set(Math.PI / 2, 0, 0);

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
// 设置阻尼
controls.enableDamping = true;

const render = () => {
  // cube.rotation.z += Math.PI / 180; // 物体旋转
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
render();

// 监听窗口大小的变化
window.addEventListener("resize", () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新摄像机的投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});

window.addEventListener("dblclick", () => {
  // 双击 进入/退出 全屏
  const fullScreenElement = document.fullscreenElement;
  if (fullScreenElement) {
    // 退出全屏
    document.exitFullscreen();
  } else {
    // 让画布对象全屏
    renderer.domElement.requestFullscreen();
  }
});

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
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

const clock = new THREE.Clock();

// 使用gsap动画库实现物体的移动
const animate1 = gsap.to(cube.position, {
  x: 5,
  y: 2,
  duration: 3,
  repeat: -1,
  yoyo: true,
});
gsap.to(cube.rotation, {
  x: Math.PI * 2,
  ease: "power1.inOut", // 动效
  duration: 3, // 时长
  repeat: -1, //重复次数，无限次循环 -1
  yoyo: true, // 是否往返
  delay: 2, //延迟
  onComplete() {
    console.log("动画完成的回调执行了！！");
  },
  onStart() {
    console.log("动画开始");
  },
});

window.addEventListener("dblclick", () => {
  if (animate1.isActive()) {
    animate1.pause();
  } else {
    animate1.resume();
  }
  console.log(animate1);
});

const render = () => {
  // cube.rotation.z += Math.PI / 180; // 物体旋转
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
render();

//
// controls.update();

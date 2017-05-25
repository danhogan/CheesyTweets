// var width = window.innerWidth;
// var height = window.innerHeight;
var width = 300;
var height = 300;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
//document.body.appendChild(renderer.domElement);
$('#cheese').append(renderer.domElement);
 
var scene = new THREE.Scene;

var cubeGeometry = new THREE.BoxGeometry(80, 80, 80);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc55 });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.rotation.y = Math.PI * 45 / 180;
scene.add(cube);

//camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.y = 160;
camera.position.z = 400;
camera.lookAt(cube.position);
scene.add(camera);

//skybox
var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

//light
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add(pointLight);


var clock = new THREE.Clock;

function render() {
    requestAnimationFrame(render);
     
    var delta = clock.getDelta();
    cube.rotation.y -= delta;
    
    renderer.render(scene, camera);
}
 
render();
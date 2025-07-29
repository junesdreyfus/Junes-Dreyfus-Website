
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 750 / 500, 0.1, 1000);

const threedeeDiv = document.getElementById('threedee');

const renderer = new THREE.WebGLRenderer();

renderer.setSize(1920, 1920);
threedeeDiv.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight('rgba(243, 241, 220, 1)', 1); 
scene.add(ambientLight);

let rotation1 = false; // Flag to control rotation
let rotation2 = false; // Flag to control rotation
let rotation3 = false; // Flag to control rotation
let rotation4 = false; // Flag to control rotation

//I don't know why we needed two, feel free to add it again<3
// const ambientLightTwo = new THREE.AmbientLight('rgb(255, 255, 255)', 0.3); 
// scene.add(ambientLightTwo);

const loader = new THREE.GLTFLoader();
let model;



loader.load('3Dmodel/skingrafting.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);

    //maybe we can have buttons to adjust the height of the viewpoint/
     model.position.set(2, -1, -11.2);
    model.scale.set(0.1, 0.1, 0.1);
    
    camera.position.set(1, -4, 1);

    model.traverse((child) => {
        if (child.isMesh) {
            if (child.material && child.material.map) {
                child.material = child.material;  // Use the original material (with texture)
            } else {
                child.material = new THREE.MeshStandardMaterial({
                    color: '0xffffff',
                    metalness: 0.0,
                    roughness: 1.0
                });
            }
        }
    });

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = cubeTextureLoader.load([
        'px.jpg', 'nx.jpg',
        'py.jpg', 'ny.jpg',
        'pz.jpg', 'nz.jpg'
    ]);
    scene.environment = envMap;
     animate();
}, undefined, function (error) {
    console.error(error);
});

    
let velocity = new THREE.Vector3();  // Speed of movement
let speed = 0.005; // Movement speed

let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;

let isUnlocked = false;
let mouseMovement = { x: 0, y: 0 };

// Function to calculate the forward direction of the camera
function getForwardVector() {
    const forward = new THREE.Vector3(0, 0, -1);  // Default forward direction (along Z-axis)
    // Apply camera rotation to the vector
    forward.applyQuaternion(camera.quaternion);
    return forward;
}

// Moving the camera
function animate() {
    	  requestAnimationFrame( animate );

          
        // const forward = getForwardVector(); // Get the forward direction relative to the camera
        // const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)); // Right direction (perpendicular to forward)

//         // Set velocity based on where the camera's looking rather than just general static directions
//         if (moveForward) velocity.add(forward.multiplyScalar(speed));  // Move forward
//         if (moveBackward) velocity.add(forward.multiplyScalar(-speed));  // Move backward
//         if (moveLeft) velocity.add(right.multiplyScalar(-speed));  // Move left
//         if (moveRight) velocity.add(right.multiplyScalar(speed));  // Move right
    

//     // Update the camera position
//     camera.position.add(velocity);
//     velocity.set(0, 0, 0);
// // I can use this when I'll do the collisions/
//     // console.log(camera.position)

//     // collision();
 if (rotation1) {
    //model.rotation.axis += (goalangle - model.rotation.axis) * speed
     model.rotation.y += (2 - model.rotation.y) * 0.03;
 }
 if (rotation2) {
    //model.rotation.axis += (goalangle - model.rotation.axis) * speed
     model.rotation.x += (2 - model.rotation.x) * 0.03;
 }
   if (rotation3) {
    model.rotation.y += (-3 -  model.rotation.y) * 0.05;
 }
   if (rotation4) {
    model.rotation.y -= 0.01;
 } else {
    model.rotation.y += (0 -  model.rotation.y) * 0.05;
    model.rotation.x += (0 -  model.rotation.x) * 0.05;
    model.rotation.z += (0 -  model.rotation.z) * 0.05;
 } 
    renderer.render(scene, camera);


}
["mouseover", "mouseout"].forEach(event => {
     
  
    document.getElementById("button1").addEventListener(event, () => {
        rotation1 = !rotation1;

    });
    document.getElementById("button2").addEventListener(event, () => {
        rotation2 = !rotation2;
    });
     document.getElementById("button3").addEventListener(event, () => {
        rotation3 = !rotation3;
    });
     document.getElementById("button4").addEventListener(event, () => {
        rotation4 = !rotation4;
    });
});

//     console.log("Rotation in degrees:", {
//   x: THREE.MathUtils.radToDeg(model.rotation.x),
//   y: THREE.MathUtils.radToDeg(model.rotation.y),
//   z: THREE.MathUtils.radToDeg(model.rotation.z)
// });



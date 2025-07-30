
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 750 / 500, 0.1, 1000);

const threedeeDiv = document.getElementById('threedee');

const renderer = new THREE.WebGLRenderer();

//3D window size (scales the model!!!)

renderer.setSize(1920, 1920);
threedeeDiv.appendChild(renderer.domElement);

//ambient light

const ambientLight = new THREE.AmbientLight('rgba(250, 237, 193, 1)', 1); 
scene.add(ambientLight);

// boolean to control rotation
let rotation1 = false; 
let rotation2 = false;
let rotation3 = false; 
let rotation4 = false; 

const loader = new THREE.GLTFLoader();

let model;

//loading the 3D model/
loader.load('3Dmodel/skingrafting.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);
 
//initial angle of station
        let station={
        posx : 2,
        posy : -2,
        posz : -12.2,

        angx : 0.2,
        angy : 0,
        angz : 0,

        scax : 0.1,
        scay : 0.1,
        scaz : 0.1,
        }  ;

    //coordonates of model, its scale, and camera position/
    model.position.set(station.posx, station.posy, station.posz);
    model.rotation.set(station.angx, station.angy, station.angz);
    model.scale.set(station.scax, station.scay, station.scaz);
    
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

let animationspeed = 0.05;

 if (rotation1) {
    //model.rotation.axis += (goalangle - model.rotation.axis) * speed
     model.rotation.y += (5 - model.rotation.y) * animationspeed;
     model.position.x += (-7 - model.position.x) * animationspeed
     model.position.y += (-5.5 - model.position.y) * animationspeed
     model.position.z += (10 - model.position.z) * animationspeed
 }
 if (rotation2) {
    //model.rotation.axis += (goalangle - model.rotation.axis) * speed
     model.rotation.x += (3.5 - model.rotation.x) * animationspeed;
     model.position.x += (-15 - model.position.x)*animationspeed;
     model.position.y += (5 - model.position.y)*animationspeed;
     model.position.z += (-30 - model.position.z)*animationspeed;
 }
   if (rotation3) {
    model.rotation.y += (-5 -  model.rotation.y) * animationspeed;
    model.position.z += (7.5 - model.position.z) * animationspeed
     model.position.y += (-5 - model.position.y) * animationspeed
 }
   if (rotation4) {
     model.rotation.y += (1.5 - model.rotation.y) * animationspeed;
     model.position.x += (1 - model.position.x) * animationspeed
     model.position.y += (-3.2 - model.position.y) * animationspeed
     model.position.z += (-4.8 - model.position.z) * animationspeed

 } else {
    //should make a function for this. this resets the changes into the original value.
    model.rotation.x += (0.2-  model.rotation.x) * animationspeed;
    model.rotation.y += (0 -  model.rotation.y) * animationspeed;
    model.rotation.z += (0 -  model.rotation.z) * animationspeed;

    model.position.x += (2 - model.position.x) * animationspeed
    model.position.y += (-2 - model.position.y) * animationspeed
    model.position.z += (-12.2 - model.position.z) * animationspeed
 } 
    renderer.render(scene, camera);


}
["mouseover", "mouseout"].forEach(event => {
     
  //triggers rotation each time mouse hover in or out.
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



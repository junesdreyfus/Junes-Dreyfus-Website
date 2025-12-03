const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

const threedeeDiv = document.getElementById('threedee');

const renderer = new THREE.WebGLRenderer({ antialias: false }); // disable AA on mobile
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
threedeeDiv.appendChild(renderer.domElement);

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;   
    camera.updateProjectionMatrix();  

    renderer.setSize(width, height);
}



window.addEventListener('resize', onWindowResize);

// Run it once at start
onWindowResize();

//initial angle of station
        let station={
        posx : 2.9,
        posy : -6,
        posz : -8,

        angx : -0.1,
        angy : -0.1,
        angz : 0,

        scax : 0.1,
        scay : 0.1,
        scaz : 0.08,

        light1 : 1.3,

        bgred : 0,
        }  ;
function responsiveScript() {
  if (window.innerWidth <= 700) {
    station.posx = 2.8;
    station.posz = -11;
    station.posy = -7;  // Adjust posz for mobile devices
  } else {
    station.posz = -8;   // Default posz for larger screens
    station.posy = -6;
    station.posx = 2.9;
  }
}
responsiveScript();
//ambient light
const ambientLight = new THREE.AmbientLight('rgba(255, 255, 255, 1)', 0); 
scene.add(ambientLight);
scene.background


// boolean to control rotation
let rotation1 = false; 
let rotation2 = false;
let rotation3 = false; 
let rotation4 = false; 

const loader = new THREE.GLTFLoader();

let model;

//loading the 3D model/
loader.load('3Dmodel/skingrafting_compressed2.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);


 

    //coordonates of model, its scale, and camera position/
    model.position.set(station.posx, station.posy, station.posz);
    model.rotation.set(station.angx, station.angy, station.angz);
    model.scale.set(station.scax, station.scay, station.scaz);
    
    camera.position.set(1, -4, 1);

    model.traverse((child) => {
        child.castShadow = false;
child.receiveShadow = false;
        if (child.isMesh) {
            if (window.innerWidth <= 700) {
                 child.material = new THREE.MeshLambertMaterial({
                map: child.material.map ?? null,
                color: 0xffffff
                 }
    )}
            else if (child.material && child.material.map) {
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
let targetIntensity = station.light1;
let duration = 5000; // fade duration in ms
let startTime = performance.now();

function fadeLightIn(now) {
    let elapsed = now - startTime;
    let t = Math.min(elapsed / duration, 1);

    // Ease-in-out cubic (smooth start & end)
    let eased = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Brighten the light
    ambientLight.intensity = eased * targetIntensity;
    //fade bg to black
    let startColor = new THREE.Color("rgba(148, 132, 92, 1)");
    let endColor   = new THREE.Color("black");
    let currentColor = startColor.clone().lerp(endColor, eased);
    scene.background = currentColor;

    if (t < 1) requestAnimationFrame(fadeLightIn);
}
requestAnimationFrame(fadeLightIn);

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

let animationspeed = 0.02;

function resetmodel(){
        //should make a function for this. this resets the changes into the original value.
    model.rotation.x += (station.angx-  model.rotation.x) * animationspeed;
    model.rotation.y += (station.angy -  model.rotation.y) * animationspeed;
    model.rotation.z += (station.angz -  model.rotation.z) * animationspeed;

    model.position.x += (station.posx - model.position.x) * animationspeed
    model.position.y += (station.posy - model.position.y) * animationspeed
    model.position.z += (station.posz - model.position.z) * animationspeed

}


 if (rotation1) {
    //model.rotation.axis += (goalangle - model.rotation.axis) * speed
     model.rotation.y += (5 - model.rotation.y) * animationspeed;
     model.position.x += (-7.5 - model.position.x) * animationspeed
     model.position.y += (-2.8 - model.position.y) * animationspeed
     model.position.z += (7 - model.position.z) * animationspeed

    // // ambientLight.intensity -= 0.005; // Dim the light
    // ambientLight.intensity -= (1 - ambientLight.intensity) * 0.009; // Dim the light

 }
 if (rotation2) {
    //model.rotation.axis += (goalangle - model.rotation.axis) * speed
     model.rotation.x += (3.3 - model.rotation.x) * animationspeed;
     model.rotation.y += (0.1 - model.rotation.y) * animationspeed;
     model.position.x += (-1 - model.position.x)* animationspeed;
     model.position.y += (2 - model.position.y)* animationspeed;
     model.position.z += (-25 - model.position.z)*animationspeed;
 }
   if (rotation3) {
    model.rotation.y += (-5.3 -  model.rotation.y) * animationspeed;
    model.position.z += (5 - model.position.z) * animationspeed
     model.position.y += (-3 - model.position.y) * animationspeed
 }
   if (rotation4) {
     model.rotation.y += (1.5 - model.rotation.y) * animationspeed;
     model.position.x += (1 - model.position.x) * animationspeed
     model.position.y += (-5.2 - model.position.y) * animationspeed
     model.position.z += (-6 - model.position.z) * animationspeed

 } else {
resetmodel();
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

["click"].forEach(event => {
     
  //triggers rotation each time mouse hover in or out.
    document.getElementById("button1").addEventListener(event, () => {
       scene.background = new THREE.Color('rgba(0, 0, 0, 1)'); ;
    });
});

//     console.log("Rotation in degrees:", {
//   x: THREE.MathUtils.radToDeg(model.rotation.x),
//   y: THREE.MathUtils.radToDeg(model.rotation.y),
//   z: THREE.MathUtils.radToDeg(model.rotation.z)
// });


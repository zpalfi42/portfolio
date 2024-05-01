const threejsCanvas = document.querySelector('#threejs-canvas')
let width = threejsCanvas.offsetWidth
let height = threejsCanvas.offsetHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.1, 1000 )
camera.position.set(10, 10, 10)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
})
renderer.setSize( width, height )
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
threejsCanvas.appendChild( renderer.domElement )

const interaction = new Interaction(renderer, scene, camera);

const geometry = new THREE.BoxGeometry( 3, 2, 1 )
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
const cube = new THREE.Mesh( geometry, material )
scene.add( cube );
cube.cursor = 'pointer';
cube.on('click', function(ev) {
    console.log(ev);
});

// camera.position.z = 5;

animate()

function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
	renderer.render( scene, camera )
	window.requestAnimationFrame( animate )
}
var scene,camera,render,geometry,material,mesh,light;
var container = document.getElementById("container");
render = new THREE.WebGLRenderer();
render.setSize(container.offsetWidth,container.offsetHeight);
container.appendChild(render.domElement);
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45,container.offsetWidth/container.offsetHeight,1,5000);
camera.position.set(0,0,10);
      // scene.add(camera);
light = new THREE.DirectionalLight(0xffff00, 1.0, 0);//设置平行光源
light.position.set( 200, 200, 200 );//设置光源向量
scene.add(light);// 追加光源到场景（重要！）
geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xffff00,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xff0000,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 10;
mesh.position.z = 10;
scene.add(mesh);

geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xff0000,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 5;
mesh.position.z = 5;
scene.add(mesh);


geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xff0000,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 5;
mesh.position.z = 15;
scene.add(mesh);

geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xff00ff,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = 0;
mesh.position.z = 20;
scene.add(mesh);

geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xff0000,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = -5;
mesh.position.z = 15;
scene.add(mesh);

geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xff0000,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = -5;
mesh.position.z = 5;
scene.add(mesh);

geometry = new THREE.CubeGeometry(1,2,3);
material = new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: true});
mesh = new THREE.Mesh(geometry,material);
mesh.position.x = -10;
mesh.position.z = 10;
scene.add(mesh);

renderer();
var left = true;
var vth = 0;
var camerax = 0;
var cameraz = 0;
// camera.position.y = 5;
// camera.position.z = 10;

function  renderer() {
    // if(left){
    //     // camera.look.x +=0.1;
    //     lookx +=0.1;
    //     camera.lookAt({x:lookx,y:0,z:0});
    //     if(Math.abs(lookx - 5)<0.00001){
    //         left = false;
    //     }
    // }
    // else{
    //     lookx -=0.1;
    //     if(Math.abs(lookx  + 5) < 0.00001){
    //         left = true;
    //     }
    // }
    vth +=1
    camerax = Math.sin(vth*Math.PI/180)
    cameraz =  Math.cos(vth*Math.PI/180)

    console.log("camerax %f j",camerax)
    camera.lookAt(new THREE.Vector3(camerax, 0,10 - cameraz));
    // mesh.rotation.y  += 0.1;
    render.render(scene,camera);
    window.requestAnimationFrame(renderer);
}

function left() {
    camera.position.set(camera.position.x +1 ,camera.position.y,camera.position.x.z);
    render.render(scene,camera);
}

function right() {

}
const panorama = new PANOLENS.ImagePanorama("images/360foto.jpg");
const panorama2 = new PANOLENS.ImagePanorama("images/360foto2.jpg");
const imageContainer = document.querySelector(".image-container");

 var infospotPositions = [
    new THREE.Vector3(-2136.06, 16.30, -5000),
    new THREE.Vector3(9036.06, 1.30, -5000)

];


const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 3,
    controlBar: false,
});

/*const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info)
infospot.position.set(1000 ,0 ,-6000)
infospot.addHoverText('Como usar Panolens:JS', 40)
panorama.add(infospot) ;*/




panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);

viewer.add( panorama,panorama2 );

<template>
    <div>

        <div class="arrow bounce">
            <router-link to="/pucelle-home" class="uk-icon-justify uk-icon-large uk-icon-angle-double-down" style="color:#fff;font-family:inherit;">
                <span class="uk-icon uk-margin-small-right">
                    <img id="home_img" src="/static/img/arrow.png" alt="arrow welcome pucelle">
                </span>
            </router-link>

        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import jQuery from 'jQuery'
var $ = require('jquery')


export default {
    mounted: function() {
        /* NEW HERE */
        var container = document.createElement("div");
        container.id = 'scene'
        var camera, scene, controls, renderer;
        var geometry, material, mesh;
        var target = new THREE.Vector3();

        var lon = 90, lat = 0;
        var phi = 0, theta = 0;

        var touchX, touchY;
        init();
        animate();


        function init() {
            if (window.innerWidth < 768) {
                document.body.style.backgroundColor = "#8ec7be";
                camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 100);
            }
            else {
                camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 1, 1000);
            }

            scene = new THREE.Scene();

            var sides = [
                {
                    url: './static/img/cubes/posx.jpg',
                    position: [-512, 0, 0],
                    rotation: [0, Math.PI / 2, 0]
                },
                {
                    url: './static/img/cubes/negx.jpg',
                    position: [512, 0, 0],
                    rotation: [0, -Math.PI / 2, 0]
                },
                {
                    url: './static/img/cubes/posy.jpg',
                    position: [0, 512, 0],
                    rotation: [Math.PI / 2, 0, Math.PI]
                },
                {
                    url: './static/img/cubes/negy.jpg',
                    position: [0, -512, 0],
                    rotation: [- Math.PI / 2, 0, Math.PI]
                },
                {
                    url: './static/img/cubes/posz.jpg',
                    position: [0, 0, 512],
                    rotation: [0, Math.PI, 0]
                },
                {
                    url: './static/img/cubes/negz.jpg',
                    position: [0, 0, -512],
                    rotation: [0, 0, 0]
                }
            ];

            for (var i = 0; i < sides.length; i++) {

                var side = sides[i];

                var element = document.createElement('img');
                element.width = 1026; // 2 pixels extra to close the gap.
                element.src = side.url;

                var object = new THREE.CSS3DObject(element);
                object.position.fromArray(side.position);
                object.rotation.fromArray(side.rotation);
                scene.add(object);

            }

            renderer = new THREE.CSS3DRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);
            document.body.appendChild(container)

            //controls


            document.addEventListener('mousedown', onDocumentMouseDown, false);
            //document.addEventListener( 'wheel', onDocumentMouseWheel, false );

            // document.addEventListener( 'touchstart', onDocumentTouchStart, true );
            document.addEventListener('touchstart', onDocumentTouchStart, { capture: true });
            document.addEventListener('touchmove', onDocumentTouchMove, false);
            // if(window.innerWidth > 768)
            // {

            // }

            window.addEventListener('resize', onWindowResize, true);

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function onDocumentMouseDown(event) {

            event.preventDefault();

            document.addEventListener('mousemove', onDocumentMouseMove, false);
            document.addEventListener('mouseup', onDocumentMouseUp, false);

        }

        function onDocumentMouseMove(event) {

            var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

            lon -= movementX * 0.1;
            lat += movementY * 0.1;

        }

        function onDocumentMouseUp(event) {

            document.removeEventListener('mousemove', onDocumentMouseMove);
            document.removeEventListener('mouseup', onDocumentMouseUp);

        }

        function onDocumentMouseWheel(event) {

            camera.fov += event.deltaY * 0.05;
            camera.updateProjectionMatrix();

        }

        function onDocumentTouchStart(event) {

            event.preventDefault();

            var touch = event.touches[0];

            touchX = touch.screenX;
            touchY = touch.screenY;

        }

        function onDocumentTouchMove(event) {

            event.preventDefault();
            $("html, body").css("overflow", "auto")

            var touch = event.touches[0];

            lon -= (touch.screenX - touchX) * 0.1;
            lat += (touch.screenY - touchY) * 0.1;

            touchX = touch.screenX;
            touchY = touch.screenY;

        }

        function animate() {

            requestAnimationFrame(animate);

            lon += 0.1;
            lat = Math.max(- 85, Math.min(85, lat));
            phi = THREE.Math.degToRad(90 - lat);
            theta = THREE.Math.degToRad(lon);

            target.x = Math.sin(phi) * Math.cos(theta);
            target.y = Math.cos(phi);
            target.z = Math.sin(phi) * Math.sin(theta);

            //target.x = 0;
            //target.z = 0;

            camera.lookAt(target);

            renderer.render(scene, camera);

        }
    }

}

</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    overflow: scroll;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

canvas {
    width: 100%;
    height: 100%
}

body {
    background: #2d2d37;
    margin: 0;
}

a {
    color: rgb(203, 0, 105);
    text-decoration: none;
}

#scene {
    background-color: #8ec7be;
}

.arrow {
    text-align: center;
    top: 75%;
    position: absolute;
    z-index: 999;
    width: 100%;
}

.bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}


/* Portrait and Landscape */

@media (max-width: 568px) {
    .arrow {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        /* top:85%;
        left:40%; */
        position: absolute;
        z-index: 999;
    }
    .bounce {
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
}


/* Portrait and Landscape */

@media (max-width: 640px) {

    .arrow {
        text-align: center;
        /* top:85%;
        left:40%; */
        position: absolute;
        z-index: 999;
    }
    .bounce {
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
}
</style>
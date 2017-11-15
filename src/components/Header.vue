<template>
  <div>
  <header id="header">
  <div class="container">
      <span style="z-index:9999;">
        <!--a href="#/pucelle-home" style="padding-left:1%;height: 100%;z-index:999;cursor:pointer;"-->
        <router-link to="/pucelle-home" style="padding-left:1%;height: 100%;z-index:999;cursor:pointer;">
        <img style="width:100px;height:auto;object-fit: contain;" src="../../static/img/logo-pucelle.png">
        </router-link>
        <!--/a-->
      </span>
      <div id="additional_link">
      <ul>
          <li>
              <a href="https://www.facebook.com/PucelleID/"  target="blank" class="facebook">
              <img src="../../static/img/icon_facebook.png"></a>
          </li>
          <li>
              <a href="https://www.instagram.com/pucelleid/"  target="blank" class="instagram">
              <img src="../../static/img/icon_instagram.png"></a>
          </li>
          <li>
              <router-link to="/" class="home"><img src="../../static/img/icon/icon-home.png"></router-link>
          </li>
      </ul>
        <button class="hamburger hamburger--spin" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
      </div>
    <!--h1>Site Title</h1-->
    <nav id="nav">
      <ul>
        <li><router-link to="/pucelle-world">
            <img src="../../static/img/icon/icon-world.png">
            Pucelle World
            </router-link>
        </li>
        <li><router-link to="/pucelle-products">
            <img src="../../static/img/icon/icon-product.png">
            Product
            </router-link></li>
        <li><router-link to="/pucelle-news">
            <img src="../../static/img/icon/icon-news.png">
            News Event</router-link></li>
        <li><router-link to="/pucelle-campaign">
            <img src="../../static/img/icon/icon-campaign.png">
            Campaign</router-link></li>
        <li><router-link to="/pucelle-contact-us">
            <img src="../../static/img/icon/icon-contact-us.png">
            Contact Us</router-link></li>
        <li class="link_socmed">
            <a href="https://www.facebook.com/PucelleID/"  target="blank"><img class="img_icon_desktop" src="../../static/img/icon_facebook.png"></a>
            <a href="https://www.instagram.com/pucelleid/"  target="blank"><img class="img_icon_desktop" src="../../static/img/icon_instagram.png"></a>
            <router-link to="/"><img class="img_icon_desktop" src="../../static/img/icon/icon-home.png"></router-link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  </div>
</template>

<script>
import Vue from 'vue'
import jQuery from 'jQuery'
var $ = require('jquery')

    export default {
        name: 'header',
        mounted:function(){
                $('#additional_link button').click(function() {
                    $(this).toggleClass('is-active');
                    $('#nav').toggleClass('open');
                });
        }
    }
</script>
<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 94%;
  max-width: 1900px;
  font-family: helvetica, sans-serif;
}
.content {
  position: relative;
  padding-top: 80px;
}
.content p {
  margin-bottom: 10px;
}
#header {
  z-index: 2;
   position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: rgb(203,0,105);
  color: white;
}
#header span {
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
}
#additional_link{
    display: none;
}
#nav {
  position: absolute;
  right: 0;
}
#nav ul{
    padding-left: 120px;
}
#nav ul li {
  float: left;
  list-style-type: none;
  width: 16%;
}
.link_socmed{
    width: 20% !important;
}
#nav ul li a {
  color: white;
  text-decoration: none;
  padding: 0 5px;
  padding-right: 10px;
  font-size: 1.2vw;
  font-family: inherit;
}
#nav ul li a img {
  color: white;
  padding: 0;
  width: 20%;
}
.img_icon_desktop{
  width: 20% !important;
}

@media (max-width: 1026px) {
  #header .container {
    width: 100%;
  }
  #header .container span a img {
    padding-left: 10%;
  }
  #header h1 {
    left: 3%;
  }
  #additional_link{
    display: block;
    }
  #additional_link ul{
      float: right;
      padding-right:10%;
  }
  #additional_link ul li{
      list-style-type: none;
      display: inline-block;
  }
  #additional_link button{
      position: absolute;
      right: 5%;
      top:60%;
  }
  #additional_link button span{
    top:60%;
  }
  .hamburger-inner, .hamburger-inner:before, .hamburger-inner:after{
      background-color: #fff !important;
  }
  #nav {
    width: 100%;
    top: 60px;
  }
  /* #nav:before {
    content: '\2630';
    display: block;
    position: absolute;
    right: 3%;
    top: -50px;
    line-height: 40px;
    cursor: pointer;
  } */
  #nav ul {
    background: rgb(203,0,105);
    width: 100%;
    padding-left: 7%;
  }
  #nav ul li {
    float: none;
    border-top: 0.5px solid rgba(234, 234, 234, 0.5);
    margin-left: -20px;
    width: 95%;
  }
  .link_socmed{
      display: none;
      /* border-top: 0.5px solid rgba(234, 234, 234, 0.5);
      width: 95% !important; */
  }
  .facebook img{
    padding-right: 20%;
  }
  .instagram img{
    padding-right: 20%;
  }
  .home img{
    width: 90%;
    padding-right: 30%;
  }
  #nav ul li a {
    padding: 3%;
    margin-top: 20px;
    line-height: 65px;
    font-size: 4.0vw;
    font-family: inherit;
  }
  #nav ul li a img {
    color: white;
    padding: 0;
    width: 7%;
  }
  #nav ul {
    transition: 350ms;
    -moz-transition: 350ms;
    -webkit-transition: 350ms;
    transform: perspective(600) rotate3d(0, 0, 0, 0);
    -moz-transform: perspective(600) rotate3d(0, 0, 0, 0);
    -webkit-transform: perspective(600) rotate3d(1, 0, 0, -90deg);
    transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -webkit-transform-origin: 50% 0;
  }
  #nav.open ul {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -webkit-transform: perspective(600) rotate3d(0, 0, 0, 0);
  }
}

@media (max-width: 768px) {
  #nav ul li a {
    padding: 3%;
    margin-top: 20px;
    line-height: 65px;
    font-size: 4.0vw;
    font-family: inherit;
  }
  #nav ul li a img {
    color: white;
    padding: 0;
    width: 7%;
  }
}
</style>


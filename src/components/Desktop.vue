<template>
  <div id="myContainer">

    <div class="ms-left">

        <div class="ms-section custom-left-kv" id="left1" style="cursor: pointer;" onclick="window.location='https://www.youtube.com/channel/UC3I6CeILuZXqkxK8ZH-BoHw/featured';">
            <div class="uk-grid uk-child-width-expand@s uk-text-center">
                <div>
                </div>
            </div>
        </div>

        <div class="ms-section custom-left-video" id="left2">
            <div class="uk-grid uk-child-width-expand@s uk-text-center">
                <div>
                    <iframe width="550" height="350" src="https://www.youtube.com/embed/VNeXEVIBsvo">
                        </iframe>
                </div>
            </div>
        </div>

        <div class="ms-section" id="left3">
            <div class="uk-grid uk-child-width-expand@s uk-text-center">
                <div>
                    <div class="uk-card uk-card-default uk-card-body custom-card">
                    <img src="../../static/img/product_left-1.png">
                    </div>
                </div>
            </div>
        </div>

        <div class="ms-section" id="left4">
            <!--div class="uk-flex-middle custom-pinknic-grid-item" uk-grid >
                <div class="uk-width-2-3@m" style="width:50%;margin:0;height:5vh;">
                    <p style="margin-top:100px;text-transform:uppercase;font-size:20px;font-weight:500;text-align:right;margin-right:5%;margin-bottom:0;"><router-link to="pucelle-world" class="">Beauty Tips</router-link></p>
                    <p style="font-size:14px;text-align:right;margin-right:5%;margin-top:0;">Tips-tips seru untuk kamu supaya cantik alami, dari dalam maupun luar.
                    <router-link to="pucelle-world" class="uk-link" style="color:blue;">Read More</router-link>
                    </p>
                </div>
                <div class="uk-width-1-3@m custom-pinknic-image-article beauty" style="background-image:url('../../static/img/beauty_tips_cover.jpg');background-repeat:no-repeat;background-size:cover;background-position:10% 40%;">
                    <a href="#"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p> </a>
                </div>
            </div-->
            <div class="uk-flex-middle custom-pinknic-grid-item" uk-grid style="margin:0px;">
                <div class="uk-width-2-3@m" style="width:50%;margin:0;height:50%;">
                    <p style="text-transform:uppercase;font-size:20px;font-weight:500;text-align:right;margin-right:5%;margin-bottom:0;margin-top:10px;">
                        <router-link to="pucelle-world" class="">Beauty Tips</router-link></p>
                    <p style="font-size:14px;text-align:right;margin-right:5%;margin-top:0;">Tips-tips seru untuk kamu supaya cantik alami, dari dalam maupun luar.
                    <router-link to="/pucelle-world" class="" style="color:blue;">Read More</router-link>
                    </p>

                </div>
                <div id="pinklopedia" class="uk-width-1-3@m custom-pinknic-image-article" style="background-image:url('../../static/img/beauty_tips_cover.jpg');background-repeat:no-repeat;background-size:cover;background-position:10% 10%;">
                    <router-link to="/pucelle-world" class="" style="color:blue;"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></router-link>

                </div>
            </div>
            <div class="uk-flex-middle custom-pinknic-grid-item" uk-grid style="margin:0px;">
                <div class="uk-width-2-3@m" style="width:50%;margin:0;">
                    <p style="text-transform:uppercase;font-size:20px;font-weight:500;text-align:left;margin-bottom:0;"><router-link to="pucelle-world" class="">Fashion Tips</router-link></p>
                    <p style="font-size:14px;text-align:left;margin-top:0;margin-right:15px;">OOTD, tren warna masa kini, style-style idola kamu semua ada disini!
                    <router-link to="/pucelle-world" class="" style="color:blue;">Read More</router-link>
                    </p>
                </div>
                <div class="uk-width-1-3@m uk-flex-first custom-pinknic-image-article" style="background-image:url('../../static/img/fashion_tips_cover.jpg');background-repeat:no-repeat;background-size:cover;background-position:10% 10%;">
                    <router-link to="/pucelle-world" class="" style="color:blue;"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></router-link>
                </div>
            </div>
            <div class="uk-flex-middle custom-pinknic-grid-item" uk-grid style="margin:0px;">
                <div class="uk-width-2-3@m" style="width:50%;margin:0;height:50%;">
                    <p style="text-transform:uppercase;font-size:20px;font-weight:500;text-align:right;margin-right:5%;margin-bottom:0;margin-top:-50px;"><router-link to="pucelle-world" class="">Zodiac</router-link></p>
                    <p style="font-size:14px;text-align:right;margin-right:5%;margin-top:0;">Pertemanan, percintaan, ramalan seru dan fakta unik tentang zodiakmu.
                    <router-link to="/pucelle-world" class="" style="color:blue;">Read More</router-link>
                    </p>

                </div>
                <div id="pinklopedia" class="uk-width-1-3@m custom-pinknic-image-article" style="background-image:url('../../static/img/zodiac_tips_cover.jpg');background-repeat:no-repeat;background-size:cover;background-position:10% 10%;">
                    <router-link to="pucelle-world" class="" style="color:blue;"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></router-link>

                </div>
            </div>

        </div>

        <div class="ms-section" id="left5">
            <a onclick="_gaq.push(['_trackEvent', 'Google Plus SH Page Sidebar', 'SEO Hacker G Page', 'Visited our Google Plus Page']);" rel="publisher" href="https://www.instagram.com/pucelleid/" target="_blank">
            <div class="custom-ig">
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-background-muted uk-height-medium feeds-ig">
                <div v-for="feed in feeds" class="uk-width-1-2 uk-card uk-card-default uk-card-body uk-card-small feed-item" style="padding:0;">
                <img :src="feed.images.standard_resolution.url">
                </div>
            </div>
            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-background uk-height-medium feeds-ig-follow">
                <div class="uk-width-1-1 uk-card uk-card-default uk-card-body uk-card-small feed-item" style="padding:0;">
                </div>
                <div class="uk-width-1-1 uk-card uk-card-small feed-item" style="padding:0;">
                <img src="../assets/images/pucelle_ig_feeds.png">
                <h2>Follow Us</h2>
                </div>
                <div class="uk-width-1-1 uk-card uk-card-default uk-card-body uk-card-small feed-item" style="padding:0;">
                </div>
            </div>

            </div>
            </a>

        </div>
    </div>

    <div class="ms-right">

        <div class="ms-section custom-right-kv" id="right1" style="cursor: pointer;" onclick="window.location='https://www.youtube.com/channel/UC3I6CeILuZXqkxK8ZH-BoHw/featured';">
            <div class="uk-grid uk-child-width-expand@s uk-text-center">
                <div>
                </div>
            </div>
        </div>

        <div class="ms-section custom-right-video" id="right2">
            <div class="uk-grid uk-child-width-expand@s uk-text-center">
                <div>
                </div>
            </div>
        </div>


        <div class="ms-section" id="right3">
            <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                <div>
                    <div class="uk-background-muted uk-padding" style="background:rgb(130, 202, 156);">
                        <div class="uk-card uk-card-body" style="color:#fff;background:transparent;box-shadow:0 5px 15px rgba(0,0,0,.0);position:absolute;top:20%;width:45%;">
                    <h2 style="color:#fff;font-size:19px;text-transform:uppercase;text-align:left;">PUCELLE MIST COLOGNE <b>PINK ME</b></h2>
                        <p style="font-size:14px;text-align:left;color:#244a31;">Fragrance series that gives FEMININE &amp; SWEET image increasing your charm, makes you the center of attention with long-lasting enchanted modern scent.
                        </p>
                    </div>
                        <div class="uk-card uk-card-body" style="color:#fff;background:transparent;box-shadow:0 5px 15px rgba(0,0,0,.0);position:absolute;top:55%;width:45%;">
                            <img src="../../static/img/product_preview_pink_me.png"/>
                        </div>

                    </div>
                </div>
                <div class="second-column">
                    <div class="uk-padding uk-light custom-section-products-pinkme">

                        <div class="uk-flex uk-flex-column uk-width-1-3 custom-section-products">
                        <router-link class="link-menu" v-for="item in showcase" :to="{ name:'product_detail', params: { idProduct: item.id }}" :key="item.id">
                            <div class="uk-card uk-card-body uk-margin-top custom-section-product-item">

                                    <img :src="item.image" />
                                    <p style="width:50%;word-spacing: 9999999px;font-size:1em;">{{ item.name }}</p>
                            </div>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="ms-section custom-bg-right" id="right4" style="background-image:url('../../static/img/campaigns/pucelle-web-series.jpg');">
        <a href="https://www.youtube.com/channel/UC3I6CeILuZXqkxK8ZH-BoHw/featured" target="blank">
            <!--router-link :to="{ name:'campaign_detail', params: { idCampaign: 5 }}"-->
            <div class="uk-child-width-expand@s uk-text-center" uk-grid style="height:500px;width:auto;margin-left:0px;">

                <div style="display: block;margin: auto;height: auto;max-height: 100%;width:auto;max-width: 100%;">
                    <!--img src="../../static/img/campaigns/new_pinklopedia_campaign.jpg"-->
                </div>
            </div>
            <!--/router-link-->
        </a>
        </div>


        <div class="ms-section" id="right5">
            <div class="uk-flex-middle custom-workshop-grid-item" uk-grid style="margin:0px;">
                <div class="uk-width-2-3@m" style="width:50%;margin:0;padding:0;">
                <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}">
                    <p style="text-transform:uppercase;font-size:20px;font-weight:500;text-align:left;margin-top:15%;">
                    PINKREDIBLE ME
                    </p>
                    <p style="font-size:12px;text-align:left;">Sebuah motion dari Pucelle yang bertujuan untuk merangkul
para remaja masa kini dalam mengekspresikan diri bersama Pucelle telah sukses
diselenggarakan pada tempo hari lalu.</p></router-link>
                </div>
                <div class="uk-width-1-3@m uk-flex-first custom-workshop-image-article">
                <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}" >
                    <img src="../../static/img/BP5AE20170117_105952_small.jpg" alt="Image">
                </router-link>
                </div>
            </div>
            <div class="uk-flex-middle custom-workshop-grid-item" uk-grid style="margin:0;">
                <div class="uk-width-2-3@m" style="width:50%;margin:0;padding-left:0px;">
                    <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}">
                    <p style="text-transform:uppercase;font-size:20px;font-weight:bold;text-align:right;">
                        </p>
                    <p style="font-size:12px;text-align:justify;">Dengan adanya kegiatan Pinkredible Me, masyarakat Indonesia khususnya para remaja masa kini menjadi lebih berani untuk mengekspresikan diri dengan kegiatan yang positif, salah satunya melalui aktivitas video blogging. Penasaran
dengan aktivitas dan kegiatan Pucelle lainnya? Stay tune terus di Website dan social media Pucelle untuk event-event seru lainnya! #BePucelle</p></router-link>
                </div>
                <div class="uk-width-1-3@m custom-workshop-image-article">
                    <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}">
                    <img src="../../static/img/IMG_20170113_101440_small.jpg" alt="Image">
                    </router-link>
                </div>
            </div>
            <div class="uk-flex-middle custom-workshop-grid-item-headline" uk-grid style="margin:0px;">
                <div class="uk-width-2-3@m" style="width:50%;margin:0;margin-top:-15vh;">
                    <!--div style="position:absolute;width:30%;height:12%;left:5%;background:#cb0069;">
                        <h1 style="font-size:20px;text-transform:uppercase;font-weight:bold;padding-top:0;float:right;text-align:right;margin-right:10px;">Beauty<br>Workshop</h1>
                    </div>
                    <div style="position:absolute;left:34.8%;background:rgba(43, 179, 231, 0.8);width:30%;height:12%;">
                        <h1 style="font-size:20px;text-transform:uppercase;font-weight:bold;padding-top:0;float:left;text-align:left;margin-left:10px;">SMUN 70 Jakarta<br>3 April 2017</h1>
                    </div-->
                </div>
                <div class="uk-width-1-3@m custom-workshop-image-article">

                </div>
            </div>


        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import jQuery from 'jQuery'
var $ = require('jquery')
require ('multiscroll.js/vendors/jquery.easings.min.js')
require ('multiscroll.js/dist/jquery.multiscroll.js')


var data_product = {
                'prod_8' : {
                    id: 8,
                    name : "SPARKLING LOVE ",
                    desc :"Ungkapkan isi hati dan raih keinginanmu dengan kelembutan Floral dan Bright Fruity Scent. Find your true romance!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/sparkling_love.png"
                },
                'prod_9' : {
                    id: 9,
                    name : "JOLLY RHYTHM ",
                    desc :"Tunjukkan bakat dan talenta mu dengan asyiknya keharuman Juicy Fruity dan Blooming Floral. Be creative and sparkling! ",
                    size : "150/75 ml",
                    image : "../static/img/products/home/jolly_rhytm.png"
                },
                'prod_10' : {
                    id : 10,
                    name : "WAVY OCEAN ",
                    desc :"Ekspresikan dirimu dan tunjukkan kreativitas mu dengan keunikan aroma Gorgeous Floral dan Fresh Marine. Be yourself and feel great!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/wavy_ocean.png"
                },
                'prod_11' : {
                    id:11,
                    name : "ELECTRIC SUNRISE",
                    desc :"Raih mimpimu dan hadapi hari-harimu dengan fantasi wangi Floral dan Bright Apple Fruity. Let’s make it real!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/electric_sunrise.png"
                },
                'prod_12' : {
                    id:12,
                    name : "TROPICAL SPIRIT ",
                    desc :"Ceriakan hari-harimu dan nikmati persahabatan mu dengan kesegaran Floral dan Clear Ozone. Let’s get lots of fun! ",
                    size : "150/75 ml",
                    image : "../static/img/products/home/tropical_spirit.png"
                },
                'prod_13' : {
                    id:13,
                    name : "ECCENTRIC BREEZE",
                    desc :"Kreasikan gayamu dan nikmati ceriamu dengan kesegaran Floral dan Citrus Fruity. Keep in style and be unique!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/eccentric_breeze_single.png"
                },
                'prod_14' : {
                    id:14,
                    name : "Spring Sakura",
                    desc :"Memberikan sensasi musim semi di Jepang dengan wangi bunga Sakura",
                    size : "100 ml",
                    image : "../static/img/products/home/spring_sakura_single.png"
                },
                'prod_15' : {
                    id:15,
                    name : "Summer Yuri ",
                    desc :"Memberikan sensasi musim panas di Jepang dengan wangi bunga Yuri",
                    size : "100 ml",
                    image : "../static/img/products/home/summer_yuri_single.png"
                },
                'prod_100' : {
                    id:100,
                    name : "Autumn Ran",
                    desc :"Memberikan sensasi musim gugur di Jepang dengan wangi bunga Ran",
                    size : "100 ml",
                    image : "../static/img/products/home/autumn_ran.png"
                },
                'prod_16' : {
                    id:16,
                    name : "Lovely Date",
                    desc :"Wangi floral fruity dengan wangi peach, apel, ceri, mawar, anggrek musk dan amber",
                    size : "100 ml",
                    image : "../static/img/products/home/lovely_date.png"
                },
                'prod_17' : {
                    name : "Lively Vacation",
                    desc :"Wangi floral fruity dengan wangi vanilla, musky flower, lemon, dan sandalwood. ",
                    size : "100 ml",
                    id:17,
                    image : "../static/img/products/home/lively_vacation.png"
                },
                'prod_18' : {
                    name : "Fashion Day",
                    desc :"Wangi floral fruity dengan wangi raspberry, orange, neroli, melati, carnation dan musk.",
                    id:18,
                    size : "100 ml",
                    image : "../static/img/products/home/fashion_day.png"
                },
                'prod_19' : {
                    name : "Fancy Duty",
                    desc :"Wangi floral fruity dengan wangi violet green dengan wangi lemon, mawar, melati, woody musk.",
                    size : "100 ml",
                    id:19,
                    image : "../static/img/products/home/fancy_duty.png"
                },
                'prod_20' : {
                    name : "SPLASH COLOGNE ROSE",
                    desc :"Perpaduan keharuman Rose & Jasmine untuk rasa sejuk dan segar",
                    size : "175/75/35 ml",
                    id:20,
                    image : "../static/img/products/home/rose.png"
                },
                'prod_21' : {
                    name : "SPLASH COLOGNE MUSK",
                    desc :"Perpaduan keharuman Chypre & Floral untuk rasa sejuk dan segar.",
                    size : "175/75/35 ml",
                    id:21,
                    image : "../static/img/products/home/musk.png"
                },
                'prod_22' : {
                    name : "SPLASH COLOGNE MARINE",
                    desc :"Perpaduan keharuman Floral & Musk untuk rasa sejuk dan segar.",
                    size : "175/75/35 ml",
                    id:22,
                    image : "../static/img/products/home/marine.png"
                },
                'prod_23' : {
                    name : "SPLASH COLOGNE ORIENTAL",
                    desc :"Perpaduan keharuman Floral & Fruity untuk rasa sejuk dan segar.",
                    size : "75 ml",
                    id:23,
                    image : "../static/img/products/home/oriental.png"
                },
                'prod_24' : {
                    name : "Deodorant SENSITIVE EXPERT ",
                    desc :"Mengurangi bau badan dan dapat memberikan kenyamanan pada kulit.",
                    size : "50 ml",
                    id:24,
                    image : "../static/img/products/home/sensitive_expert.png"
                },
                'prod_25' : {
                    name : "Deodorant INTENSE FRESH",
                    desc :"Mengurangi bau badan dan memberikan kesegaran pada kulit ketiak.",
                    size : "50 ml",
                    id:25,
                    image : "../static/img/products/home/intense_fresh.png"
                },
                'prod_26' : {
                    name : "Deodorant FAIR WHITE ",
                    desc :"Mengurangi bau badan dan membuat kulit ketiak tampak cerah.",
                    size : "50 ml",
                    id : 26,
                    image : "../static/img/products/home/fair_white.png"
                },
                'prod_7' : {
                    name : "Dazzling Diva ",
                    desc : "Wangi fruity oriental dengan wangi apple, cherry, jasmine, peony, amber, musk untuk kamu yang punya karakter cool & casual",
                    size : "120 ml",
                    id:7,
                    image : "../static/img/products/home/new_dazzling_diva.png"
                },
                'prod_6' : {
                    name : "Lovely Queen",
                    desc : "Wangi fruity floral dengan wangi apple, melon, water fruits, blackcurrant, jasmine, vanilla, sandalwood untuk kamu yang punya karakter warm & romantic",
                    size : "120 ml",
                    id:6,
                    image : "../static/img/products/home/new_lovely_queen.png"
                },
                'prod_5' : {
                    name : "Pretty Fairy ",
                    desc : "Wangi floral fruity dengan wangi orange, apple, pear, cassis, aquatic, rose, jasmine, amber. untuk kamu yang punya karakter yang fun & friendly",
                    size : "120 ml",
                    id:5,
                    image : "../static/img/products/home/new_pretty_fairy.png"
                },
                'prod_4' : {
                    name : "Beloved Princess ",
                    desc : "Wangi fruity gourmand, dengan wangi lemon, strawberry, musk , sandalwood untuk kamu yang punya karakter smart & energic",
                    size : "120 ml",
                    id:4,
                    image : "../static/img/products/home/new_beloved_princess.png"
                },
                'prod_3' : {
                    name : "Sweet Angel ",
                    desc : "Wangi floral fruity dengan wangi grapefruit, raspberry, sandalwood, vanilla, musk untuk kamu yang punya karakter feminin, sweet & calm",
                    size : "120 ml",
                    id:3,
                    image : "../static/img/products/home/new_sweet_angel.png"
                },
                'prod_2' : {
                    name : "Merry Star",
                    desc :"Wangi fruity floral dengan wangi peach, mango, orange, raspberry melati, freesia, muguet, violet cedarwood, sandalwood, musk & vanilla, untuk kamu yang punya karakter lively & adventure",
                    size : "120 ml",
                    id:2,
                    image : "../static/img/products/home/new_merry_star.png"
                },
                'prod_1' : {
                     name : "Dreamy Belle",
                     id:1,
                     image : "../static/img/products/home/new_dreamy_belle.png",
                     desc : "Floral musky powdery dengan wangi apel, aquatic, mawar, melati, orange blossom, musk, powdery & amber, untuk kamu yang punya karakter yang lembut & kalem.",
                     size :'120 ml'
                }
}

export default {
    data:function(){
        return {
            showcase:[data_product['prod_'+getIntRandom(1, 20)],data_product['prod_'+getIntRandom(1, 20)],data_product['prod_'+getIntRandom(1, 20)]],
            options:{
            'verticalCentered' : true,
            'scrollingSpeed': 10,
            'menu': false,
            'anchors': ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            'sectionsColor': ['#66d8d7', '#fff','#fff','#fff','#fff'],
            'navigation': false,
            'css3': true,
            'paddingTop': '0vh',
            'paddingBottom': '0vh',
            'fixedElements': null,
            'normalScrollElements': null,
            'keyboardScrolling': true,
            'touchSensitivity': 5,
            'sectionSelector': '.ms-section',
            'leftSelector': '.ms-left',
            'rightSelector': '.ms-right',
            'afterLoad': null,
            'onLeave': null,
            'afterRender': function(){
            alert("The resulting DOM structure is ready");
        },
            'afterResize': null,
            'currentPosition':1
            },
            responsive:false,
            feeds:[],
            random :[]
        }
    },
    methods:{
        getRandom:function(){
            var vm = this
            var values = Array.from({length: 3}, () => this.getRandomKey(1, 28));
        },
        getRandomKey:function(min, max) {
            "use strict";
            if (max < min) {
                // Swap min and max
                [min, max] = [min, max];
            }

            // Generate random number n, where min <= n <= max
            let range = max - min + 1;
            return Math.floor(Math.random() * range) + min;
        }
    },
    mounted:function(){
        var removeScene = document.getElementById("scene")
        if(removeScene){
            document.getElementById("scene").remove();
        }
        else { console.log('')}

        this.$http.jsonp('https://api.instagram.com/v1/users/self/media/recent/?access_token=2214663407.1677ed0.105de3d19b114fe7b88d767832668ba3&count=6').then(function (response) {
                                response = response.data;
                                var vm = this
                                vm.feeds = response.data
                            }, function (error) {
                                console.error('Error Message: ',error);
                            });

        require ('multiscroll.js/dist/jquery.multiscroll.css')
        var options = this.options
            $(function(){
                $('.myContainer').multiscroll({options})
            })
  },
  created:function(){
      window.addEventListener('popstate', function(event) {
                if (event.state) {
                    $.fn.multiscroll.destroy();
                    }
                }, false);
  },
  beforeDestroy: function() {
    $.fn.multiscroll.destroy();
  }
}
</script>
<style scoped>
h1{
    font-size: 6em;
}
p{
    font-size: 2em;
}
.ms-section{
            text-align: center;
        }

#menu li {
    display:inline-block;
    margin: 10px;
    color: #000;
    background:#fff;
    background: rgba(255,255,255, 0.3);
    -webkit-border-radius: 10px; 
            border-radius: 10px; 
}
#menu li.active{
    background:#666;
    background: rgba(255,255,255, 1);
    color: #000;
}
#menu li a{
    text-decoration:none;
    color: #000;
}
#menu li.active a:hover{
    color: #000;
}
#menu li:hover{
    background: rgba(255,255,255, 0.8);
}
#menu li a,
#menu li.active a{
    padding: 9px 18px;
    display:block;
}
#menu li.active a{
    color: #000;
}
#menu{
    position:fixed;
    top:0;
    left:0;
    height: 40px;
    z-index: 70;
    width: 100%;
    padding: 0;
    margin:0;
}
#infoMenu{
    height: 20px;
    color: #f2f2f2;
    position:fixed;
    z-index:70;
    bottom:0;
    width:100%;
    text-align:right;
    font-size:0.9em;
    padding:8px 0 8px 0;
}
#infoMenu ul{
    padding: 0 40px;
}
#infoMenu li a{
    display: block;
    margin: 0 22px 0 0;    
    color: #333;
}
#infoMenu li a:hover{
    text-decoration:underline;
}
#infoMenu li{
    display:inline-block;
    position:relative;
}
#examplesList{
    display:none;
    background: #282828;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    padding: 20px;
    float: left;
    position: absolute;
    bottom: 29px;
    right: 0;
    width:638px;
    text-align:left;
}
#examplesList ul{
    padding:0;
}
#examplesList ul li{
    display:block;
    margin: 5px 0;
}
#examplesList ul li a{
    color: #BDBDBD;
    margin:0;
}
#examplesList ul li a:hover{
    color: #f2f2f2;
}
#examplesList .column{
    float: left;
    margin: 0 20px 0 0;
}
#examplesList h3{
    color: #f2f2f2;
    font-size: 1.2em;
    margin: 0 0 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    -moz-box-shadow: 0 1px 0 rgba(255,255,255,0.1);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    padding: 0 0 5px 0;
}

 #demosMenu{
    position:fixed;
    bottom: 10px;
    right:10px;
    z-index: 999;
 }


.custom-card{
        background: transparent;
        padding-top:15vh;
        padding-left:10%;
        padding-right:10%;
        padding-bottom:10%;
        box-shadow: none;
    }
.custom-bg-right{
    background-size: auto 100%;
    background-position:center;
}
.custom-left-kv{
    background-image: url('~/static/img/kv/left_kv.jpg');
    background-size: cover;
    background-position:left;
    background-repeat:no-repeat;
}
.custom-right-kv{
    background-image: url('~/static/img/kv/right_kv.jpg');
    background-size: cover;
    background-position:left;
    background-repeat:no-repeat;
}
.custom-left-video{
     background-image: url('~/static/img/left-bg-vid.jpg');
    background-size: cover;
    background-position:left;
    background-repeat:no-repeat;
}
.custom-right-video{
    background-image: url('~/static/img/right-bg-vid.jpg');
    background-size: cover;
    background-position:left;
    background-repeat:no-repeat;
}

#left3{
    background: rgb(130, 202, 156);
}
#left2, #left1, #right1{
    background-color: #ffffff !important;
}
#left3 a:hover{
    text-decoration:none;
}
#right3{
    background: rgb(130, 202, 156);
}

.custom-section-products{
    width: 50%;
    position: absolute;
    left: 25%;
    height: 10%;
    top:7%;
}
.uk-margin-top{
    margin-top:11% ! important;
}
.second-column{
            margin-top: -50vh;
        }
.custom-section-products-pinkme
    {
        background:#eedee6;margin-top:5%;height:100%;width:40%;position:absolute;
    }
.custom-section-product-item{
    height: 24vh;
    padding:10px;
}
.custom-section-product-item img{
    height: 100%;
}
.custom-section-products p{
    position:absolute;
    left: -5%;
    top:45%;
    font-size: 18px;
    color: #96024e;
    text-align: left;
    text-transform: uppercase;
    font-weight: 500;
}
.custom-pinknic-image-article{
    width:50%;margin:0;height: 33.3333vh;
}
.custom-pinknic-image-article a {
            text-decoration:none;
            color:inherit;
}
.custom-pinknic-image-article p a{
    text-decoration:none;
    color:inherit;
}
.custom-workshop-image-article{
    width:50%;margin:0;padding:0;height: 33.3333vh;
}
.custom-workshop-image-article img{
    height: 100%;width: 100%;
}
.custom-pinknic-text{
    padding-top: 20px;
    background: #fff;
}
.custom-pinknic-text h1{
    color: #cb0069;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    white-space: pre-line;
}
.custom-pinknic-text p{
    font-size: 14px;
}
.custom-pinknic-text, .right h1{
    text-align:right;
    padding-right: 17px;
}
.custom-pinknic-text-right{
    font-size: 14px;
    text-align: right;
}
.custom-pinknic-text-left{
    font-size: 14px;
    text-align: left;
    margin-top:60px;
}
.custom-section-pinknic-right{
    margin-left:20%;
    margin-right:10%;
    margin-top:-10%;
    z-index: 3;
    position: absolute;
    width:60%;
}
.custom-section-pinknic-right h2{
    font-size: 23px;
    color: #eb168f;
    font-weight: bold;
    text-align: left;
}
.custom-section-pinknic-right p{
    font-size: 14px;
    text-align: justify;
}
.custom-section-pinknic-right-bg-red{
    background: #cb0069;
    margin-left:25vh;
    margin-top:-15%;
    z-index: 1;
    position: absolute;
    width:65vh;
    height: 50vh;
}
.custom-pinknic-text ,.left h1{
    float: left;
    text-align: left;
    padding-left: 17px;
}
.custom-ig{
    margin-top:0;
    height: 100%;
}
.feeds-ig{
    width:55%;
    padding:0;
    height: 100%;
    margin-left:0px;
}
.feeds-ig-follow{
    width:33.3%;
    margin-left:60%;
    padding:0;
    height: 100%;
    position:absolute;
    top:0;
}
.feed-item{
    padding:0;
}
.custom-ig-feeds{
  width: 600px;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column;
}
.custom-ig-feeds ul {
    width: 100%;
    height: 100vh;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2; /*3 is just placeholder -- can be anything*/
    padding-top:13%;
    padding-bottom:10%;
    margin-left: 0px;
    column-gap: 20px;
    -moz-column-gap: 20px;
    -webkit-column-gap: 20px;
}
.custom-ig-feeds>ul>li {
    display: inline-grid;
    margin-right:15%; 
    transform: scale(1.4);
    margin-bottom: 0;
    margin-top: 0;
    height:219px;
}
.custom-ig-feeds li a {
    color: rgb(0, 162, 232);
}
.custom-ig-feeds-item{
    width: 220px;
}

.custom-ul-beauty-workshop{
    padding: 0px;
    margin:0px;
}
.custom-beauty-workshop-1{
    padding: 0px;
    width: 50%;
}
.custom-beauty-workshop-2{
    padding: 0px;
    width: 50%;
}
.custom-workshop-text h1{
    color: #cb0069;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    white-space: pre-line;
}
.custom-workshop-text span{
    display: inline-grid;
}
.custom-workshop-text-float-right{
    float: right;
    color: #ea6060;
    text-decoration: none;
}
.custom-workshop-text-float-left{
    float: left;
    color: #ea6060;
    text-decoration: none;
}
.custom-workshop-text-right{
    font-size: 14px;
    text-align: right;
}
.custom-workshop-text-left{
    font-size: 14px;
    text-align: left;
}

.custom-workshop-grid-item{
    height: 33.333vh;
    margin:0px;
}
.custom-workshop-grid-item a{
    color:inherit;
    text-decoration: none;
}
.custom-workshop-grid-item-headline{
    height: 33.3333vh;
    margin:0px;
    background-image: url('~/static/img/coming_soon_event.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 10% 10%;
}
.custom-workshop-grid-item p{
    margin:5%;
}
.beauty{
    margin-left:382px;
}
</style>


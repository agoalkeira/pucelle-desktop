<template>
<div id="myContainer">

    <div class="ms-stack">
        <div class="uk-grid-collapse" uk-grid>

            <div class="uk-width-expand@m stack_key" style="padding-top:50px;">
                <div class="uk-card uk-card-body uk-margin-remove uk-padding-remove ">
                    <img src="../../static/img/kv/mobile_kv_lovemepink.jpg">
                </div>
            </div>
            <div class="uk-width-expand@m stack_key" style="padding-top:50px;">
                <div class="uk-card uk-card-body uk-margin-remove uk-padding-remove ">
                    <iframe width="550" height="350" src="https://www.youtube.com/embed/-uUdLUb-ZS4">
                        </iframe>
                </div>
            </div>

            <div style="background:rgb(130, 202, 156);width:100%;display:inherit;box-shadow:none;">
                <div style="width:70%;padding:10px;">
                    <img src="../../static/img/product_left-1.png" style="height:auto;width:90%;">
                </div>
                <div style="width:30%;padding:10px;">
                <div>
                    <h2 style="color:#fff;font-size:12px;text-transform:uppercase;text-align:left;">PUCELLE MIST COLOGNE PINK ME</h2>
                        <p style="font-size:8px;text-align:justify;width:90%;line-height:10px;">Fragrance series that gives FEMININE &amp; SWEET image increasing your charm, makes you the center of attention with long-lasting enchanted modern scent.
                        </p>
                </div>
                <div>
                    <img src="../../static/img/product_preview_pink_me.png">
                </div>
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#eedee6;">
                <ul style="margin:0;padding:10px;">
                    <li v-for="item in showcase" style="width:33.3333333333333333%;display: inline-block;text-align:center;">
                        <router-link :to="{ name:'product_detail', params: { idProduct: item.id }}" :key="item.id" style="color:inherit;">
                            <img :src="item.image" style="width:35%;">
                            <p style="font-size:10px;font-weight:bold;text-transform: uppercase;">{{item.name}}</p> 
                        </router-link>
                    </li>
                </ul>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <div style="width:50%;padding:0px;">
                    <router-link to="pucelle-world" style="text-decoration:none;color:inherit;">
                    <h5 style="text-align:right;padding:10px;padding-bottom:0px;font-weight:bold;">BEAUTY<br>TIPS</h5>
                    <p style="font-size:8px;text-align:right;padding:10px;padding-top:0px;">Tips-tips seru untuk kamu supaya cantik alami, dari dalam maupun luar.</p>
                    </router-link>
                </div>
                <div style="width:50%;padding:0px;">
                    <router-link to="pucelle-world">
                    <img src="../../static/img/beauty_tips_cover.jpg" style="height:auto;width:100%;">
                    </router-link>
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <div style="width:50%;padding:0px;">
                    <router-link to="pucelle-world">
                    <img src="../../static/img/fashion_tips_cover.jpg" style="height:auto;width:100%;">
                    </router-link>
                </div>
                <div style="width:50%;padding:0px;">
                    <router-link to="pucelle-world" style="text-decoration:none;color:inherit;">
                    <h5 style="text-align:left;padding:10px;padding-bottom:0px;font-weight:bold;">FASHION<br>TIPS</h5>
                    <p style="font-size:8px;text-align:left;padding:10px;padding-top:0px;">OOTD, tren warna masa kini, style-style idola kamu semua ada disini!.</p>
                    </router-link>
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <div style="width:50%;padding:0px;">
                    <router-link to="pucelle-world" style="text-decoration:none;color:inherit;">
                    <h5 style="text-align:right;padding:10px;padding-bottom:0px;font-weight:bold;">ZODIAC</h5>
                    <p style="font-size:8px;text-align:right;padding:10px;padding-top:0px;">Pertemanan, percintaan, ramalan seru dan fakta unik tentang zodiakmu.</p>
                    </router-link>
                </div>
                <div style="width:50%;padding:0px;">
                    <router-link to="pucelle-world">
                    <img src="../../static/img/bg-zodiac.jpg" style="height:auto;width:100%;">
                    </router-link>
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <div style="width:50%;padding:0px;">
                    <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}" style="text-decoration:none;color:inherit;">
                    <img src="../../static/img/BP5AE20170117_105952_small.jpg" style="height:auto;width:100%;">
                    </router-link>
                </div>
                <div style="width:50%;padding:0px;">
                    <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}" style="text-decoration:none;color:inherit;">
                    <h5 style="text-align:left;padding:10px;padding-bottom:0px;font-weight:bold;">PINKREDIBLE ME</h5>
                    <p style="font-size:8px;text-align:left;padding-left:10px;padding-top:0px;padding-bottom:0px;margin:0;">Sebuah motion dari Pucelle yang bertujuan untuk merangkul
para remaja masa kini dalam mengekspresikan diri bersama Pucelle telah sukses
diselenggarakan pada tempo hari lalu.</p>
                    </router-link>
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <div style="width:50%;padding:0px;">
                    <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}" style="text-decoration:none;color:inherit;">
                    <!--h5 style="text-align:right;padding:10px;padding-bottom:0px;font-weight:bold;"></h5-->
                    <p style="font-size:8px;text-align:right;padding:10px;padding-top:10px;margin:0;">Dengan adanya kegiatan Pinkredible Me, masyarakat Indonesia khususnya para remaja masa kini menjadi lebih berani untuk mengekspresikan diri dengan kegiatan yang positif, salah satunya melalui aktivitas video blogging. #BePucelle.</p>
                    </router-link>
                </div>
                <div style="width:50%;padding:0px;">
                    <router-link :to="{ name:'campaign_detail', params: { idCampaign: 2 }}" style="text-decoration:none;color:inherit;">
                    <img src="../../static/img/IMG_20170113_101440_small.jpg" style="height:auto;width:100%;">
                    </router-link>
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">

                <div style="width:100%;padding:0px;">
                    <img src="../../static/img/coming_soon_event.jpg" style="height:auto;width:100%;">
                </div>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <router-link :to="{ name:'campaign_detail', params: { idCampaign: 5 }}">
                <div style="width:100%;padding:0px;">
                    <img src="../../static/img/campaigns/pucelle-web-series.jpg" style="height:auto;width:100%;">
                </div>
                </router-link>
            </div>

            <div style="width:100%;display:inherit;background:#fff;">
                <div style="height:35px;width:100%;display:block;text-align:left;padding:10px;">
                    <a onclick="_gaq.push(['_trackEvent', 'Google Plus SH Page Sidebar', 'SEO Hacker G Page', 'Visited our Google Plus Page']);" rel="publisher" href="http://www.instagram.com/pucelleid/" target="_blank" style="color:inherit;">
                    <img src="../../static/img/logo-ig-feed.png" width="32" style="display:inline;">
                    <p style="font-size:120%;font-family:inherit;display:inline;vertical-align:middle;"> Follow Our Instagram</p>
                    </a>
                </div>

            </div>
            <div style="width:100%;display:inherit;background:#fff;">
                <ul style="margin:0;padding:0;">
                    <li v-for="feed in feeds" style="width:33.3333333333333333%;display: inline-block;">
                        <a href="http://www.instagram.com/pucelleid/" target="_blank">
                            <img :src="feed.images.standard_resolution.url">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>


</div>

</template>

<script>
import Vue from 'vue'
import jQuery from 'jQuery'
var $ = require('jquery')

var data_product = {
                'prod_8' : {
                    id: 8,
                    name : "SPARKLING LOVE ",
                    desc :"Ungkapkan isi hati dan raih keinginanmu dengan kelembutan Floral dan Bright Fruity Scent. Find your true romance!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/mobile/mist_cologne/sparkling_love.png"
                },
                'prod_9' : {
                    id: 9,
                    name : "JOLLY RHYTHM ",
                    desc :"Tunjukkan bakat dan talenta mu dengan asyiknya keharuman Juicy Fruity dan Blooming Floral. Be creative and sparkling! ",
                    size : "150/75 ml",
                    image : "../static/img/products/home/mobile/mist_cologne/jolly_rhythm.png"
                },
                'prod_10' : {
                    id : 10,
                    name : "WAVY OCEAN ",
                    desc :"Ekspresikan dirimu dan tunjukkan kreativitas mu dengan keunikan aroma Gorgeous Floral dan Fresh Marine. Be yourself and feel great!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/mobile/mist_cologne/wavy_ocean.png"
                },
                'prod_11' : {
                    id:11,
                    name : "ELECTRIC SUNRISE",
                    desc :"Raih mimpimu dan hadapi hari-harimu dengan fantasi wangi Floral dan Bright Apple Fruity. Let’s make it real!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/mobile/mist_cologne/electric_sunrise.png"
                },
                'prod_12' : {
                    id:12,
                    name : "TROPICAL SPIRIT ",
                    desc :"Ceriakan hari-harimu dan nikmati persahabatan mu dengan kesegaran Floral dan Clear Ozone. Let’s get lots of fun! ",
                    size : "150/75 ml",
                    image : "../static/img/products/home/mobile/mist_cologne/tropical_spirit.png"
                },
                'prod_13' : {
                    id:13,
                    name : "ECCENTRIC BREEZE",
                    desc :"Kreasikan gayamu dan nikmati ceriamu dengan kesegaran Floral dan Citrus Fruity. Keep in style and be unique!",
                    size : "150/75 ml",
                    image : "../static/img/products/home/mobile/mist_cologne/essentric_breeze.png"
                },
                'prod_14' : {
                    id:14,
                    name : "Spring Sakura",
                    desc :"Memberikan sensasi musim semi di Jepang dengan wangi bunga Sakura",
                    size : "100 ml",
                    image : "../static/img/products/home/mobile/japanese/spring_sakura.png"
                },
                'prod_15' : {
                    id:15,
                    name : "Summer Yuri ",
                    desc :"Memberikan sensasi musim panas di Jepang dengan wangi bunga Yuri",
                    size : "100 ml",
                    image : "../static/img/products/home/mobile/japanese/summer_yuri.png"
                },

                'prod_100' : {
                    id:100,
                    name : "Autumn Ran",
                    desc :"Memberikan sensasi musim gugur di Jepang dengan wangi bunga Ran",
                    size : "100 ml",
                    image : "../static/img/products/home/mobile/japanese/autumn_ran.png"
                },
                'prod_16' : {
                    id:16,
                    name : "Lovely Date",
                    desc :"Wangi floral fruity dengan wangi peach, apel, ceri, mawar, anggrek musk dan amber",
                    size : "100 ml",
                    image : "../static/img/products/home/mobile/eau_de_cologne/lovely_date.png"
                },
                'prod_17' : {
                    name : "Lively Vacation",
                    desc :"Wangi floral fruity dengan wangi vanilla, musky flower, lemon, dan sandalwood. ",
                    size : "100 ml",
                    id:17,
                    image : "../static/img/products/home/mobile/eau_de_cologne/lively_vacation.png"
                },
                'prod_18' : {
                    name : "Fashion Day",
                    desc :"Wangi floral fruity dengan wangi raspberry, orange, neroli, melati, carnation dan musk.",
                    id:18,
                    size : "100 ml",
                    image : "../static/img/products/home/mobile/eau_de_cologne/fashion_day.png"
                },
                'prod_19' : {
                    name : "Fancy Duty",
                    desc :"Wangi floral fruity dengan wangi violet green dengan wangi lemon, mawar, melati, woody musk.",
                    size : "100 ml",
                    id:19,
                    image : "../static/img/products/home/mobile/eau_de_cologne/fancy_duty.png"
                },
                'prod_20' : {
                    name : "SPLASH COLOGNE ROSE",
                    desc :"Perpaduan keharuman Rose & Jasmine untuk rasa sejuk dan segar",
                    size : "175/75/35 ml",
                    id:20,
                    image : "../static/img/products/home/mobile/splash_cologne/rose.png"
                },
                'prod_21' : {
                    name : "SPLASH COLOGNE MUSK",
                    desc :"Perpaduan keharuman Chypre & Floral untuk rasa sejuk dan segar.",
                    size : "175/75/35 ml",
                    id:21,
                    image : "../static/img/products/home/mobile/splash_cologne/musk.png"
                },
                'prod_22' : {
                    name : "SPLASH COLOGNE MARINE",
                    desc :"Perpaduan keharuman Floral & Musk untuk rasa sejuk dan segar.",
                    size : "175/75/35 ml",
                    id:22,
                    image : "../static/img/products/home/mobile/splash_cologne/marine.png"
                },
                'prod_23' : {
                    name : "SPLASH COLOGNE ORIENTAL",
                    desc :"Perpaduan keharuman Floral & Fruity untuk rasa sejuk dan segar.",
                    size : "75 ml",
                    id:23,
                    image : "../static/img/products/home/mobile/splash_cologne/oriental.png"
                },
                'prod_24' : {
                    name : "Deodorant SENSITIVE EXPERT ",
                    desc :"Mengurangi bau badan dan dapat memberikan kenyamanan pada kulit.",
                    size : "50 ml",
                    id:24,
                    image : "../static/img/products/home/mobile/roll_on/sensitive_expert.png"
                },
                'prod_25' : {
                    name : "Deodorant INTENSE FRESH",
                    desc :"Mengurangi bau badan dan memberikan kesegaran pada kulit ketiak.",
                    size : "50 ml",
                    id:25,
                    image : "../static/img/products/home/mobile/roll_on/intense_fresh.png"
                },
                'prod_26' : {
                    name : "Deodorant FAIR WHITE ",
                    desc :"Mengurangi bau badan dan membuat kulit ketiak tampak cerah.",
                    size : "50 ml",
                    id : 26,
                    image : "../static/img/products/home/mobile/roll_on/fair_white.png"
                },
                'prod_7' : {
                    name : "Dazzling Diva ",
                    desc : "Wangi fruity oriental dengan wangi apple, cherry, jasmine, peony, amber, musk untuk kamu yang punya karakter cool & casual",
                    size : "120 ml",
                    id:7,
                    image : "../static/img/products/home/mobile/pink_me/dazzling_diva.png"
                },
                'prod_6' : {
                    name : "Lovely Queen",
                    desc : "Wangi fruity floral dengan wangi apple, melon, water fruits, blackcurrant, jasmine, vanilla, sandalwood untuk kamu yang punya karakter warm & romantic",
                    size : "120 ml",
                    id:6,
                    image : "../static/img/products/home/mobile/pink_me/lovely_queen.png"
                },
                'prod_5' : {
                    name : "Pretty Fairy ",
                    desc : "Wangi floral fruity dengan wangi orange, apple, pear, cassis, aquatic, rose, jasmine, amber. untuk kamu yang punya karakter yang fun & friendly",
                    size : "120 ml",
                    id:5,
                    image : "../static/img/products/home/mobile/pink_me/pretty_fairy.png"
                },
                'prod_4' : {
                    name : "Beloved Princess ",
                    desc : "Wangi fruity gourmand, dengan wangi lemon, strawberry, musk , sandalwood untuk kamu yang punya karakter smart & energic",
                    size : "120 ml",
                    id:4,
                    image : "../static/img/products/home/mobile/pink_me/beloved_princess.png"
                },
                'prod_3' : {
                    name : "Sweet Angel ",
                    desc : "Wangi floral fruity dengan wangi grapefruit, raspberry, sandalwood, vanilla, musk untuk kamu yang punya karakter feminin, sweet & calm",
                    size : "120 ml",
                    id:3,
                    image : "../static/img/products/home/mobile/pink_me/sweet_angel.png"
                },
                'prod_2' : {
                    name : "Merry Star",
                    desc :"Wangi fruity floral dengan wangi peach, mango, orange, raspberry melati, freesia, muguet, violet cedarwood, sandalwood, musk & vanilla, untuk kamu yang punya karakter lively & adventure",
                    size : "120 ml",
                    id:2,
                    image : "../static/img/products/home/mobile/pink_me/merry_star.png"

                },
                'prod_1' : {
                     name : "Dreamy Belle",
                     id:1,
                     image : "../static/img/products/home/mobile/pink_me/dreamy_belle.png",
                     desc : "Floral musky powdery dengan wangi apel, aquatic, mawar, melati, orange blossom, musk, powdery & amber, untuk kamu yang punya karakter yang lembut & kalem.",
                     size :'120 ml'

                }
}

export default {
    data(){
        return {
            showcase:[data_product['prod_'+getIntRandom(1, 20)],data_product['prod_'+getIntRandom(1, 20)],data_product['prod_'+getIntRandom(1, 20)]],
            options:{
            'verticalCentered' : true,
            'scrollingSpeed': 700,
            'menu': false,
            'sectionsColor': ['#66d8d7', '#fff','#fff'],
            'anchors':['pinkme', 'pinknic','articles'],
            'navigation': false,
            'css3': true,
            'paddingTop': '0vh',
            'paddingBottom': '0vh',
            'fixedElements': null,
            'normalScrollElements': null,
            'keyboardScrolling': true,
            'touchSensitivity': 5,

            // Custom selectors
            'sectionSelector': '.ms-section',
            'leftSelector': '.ms-left',
            'rightSelector': '.ms-right',

            //events
            'afterLoad': null,
            'onLeave': null,
            'afterRender': null,
            'afterResize': null,
            // currentposition
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
        $(function(){
                $('html, body').css({'overflow':'visible'});
            })
    },
    created:function(){
        $('#scene').hide()
        this.$http.jsonp('https://api.instagram.com/v1/users/self/media/recent/?access_token=2214663407.1677ed0.105de3d19b114fe7b88d767832668ba3&count=6').then(function (response) {
                                response = response.data;
                                var vm = this
                                vm.feeds = response.data
                            }, function (error) {
                                console.error('Error Message: ',error);
                            });
        if (/Android|iPhone|iPad|iPod|BlackBerry|webOS|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            $(function(){
                $('html, body').css({'overflow':'scroll'});
                console.log(navigator.userAgent);
            })
            this.responsive = true
            console.log('mobile version')
        }
        else {
            // require ('multiscroll.js/dist/jquery.multiscroll.css')
            // var options = this.options
            // $(function(){
            //     $('.myContainer').multiscroll({options})
            // })
        }
        window.addEventListener('popstate', function(event) {
                if (event.state) {
                    $.fn.multiscroll.destroy();
                    }
                }, false);
    }
 }


</script>
<style scoped>

/* Custom CSS
 * --------------------------------------- */
body{
    font-family: arial,helvetica;
    color: rgba(0,0,0,0.5);
}
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
    background-image: url('~/static/img/left_kv.jpg');
    background-size: cover;
    background-position:left;
    background-repeat:no-repeat;
}
.custom-right-kv{
    background-image: url('~/static/img/right_kv.jpg');
    background-size: cover;
    background-position:left;
    background-repeat:no-repeat;
}

#left1{
    background: rgb(130, 202, 156);
}
#left2, #left3, #right3{
    background-color: #ffffff !important;
}
#left3 a:hover{
    text-decoration:none;
}
#right1{
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
    font-weight: bolder;
}
.custom-pinknic-image-article{
    width:50%;margin:0;height: 33.3333vh;
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
    width:66.6%;
    padding:0;
    height: 100%;
}
.feeds-ig-follow{
    width:33.3%;
    margin-left:66.6%;
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
.ms-stack{
    overflow:scroll;
}

#stack_key_visual{
    position: absolute;
    top:0px;
    height: 100%;
    background: rgb(185, 205, 155);
}
#stack1{
    position: absolute;
    top: 500px;
    height: 60vh;
    background: rgb(185, 205, 155);
}
#stack2{
    position: absolute;
    top: 1100px;
    height: 60vh;
    background: rgb(185, 205, 155);
}
#stack3{
    position: absolute;
    top: 1600px;
    height: 60vh;
    background: rgb(185, 205, 155);
}
#stack4{
    position: absolute;
    top: 2100px;
    height: 60vh;
    background: rgb(185, 205, 155);
}
#stack5{
    position: absolute;
    top: 2600px;
    height: 60vh;
    background: rgb(185, 205, 155);
}

    /* Portrait and Landscape */
    @media screen and (max-device-width: 320px){
        .ms-stack{
            overflow:scroll;
        }
        .custom-card{
            background: transparent;
            padding-top:25vh;
            padding-left:1vh;
            padding-right:10%;
            padding-bottom:10%;
            box-shadow: none;
            width:38vh;
        }
        #stack1{
            height: 70vh;
            background: rgb(185, 205, 155);
        }
        #stack2{
            background: rgb(238, 222, 230);
            height: 30%;
        }
        #stack3{
            height: 30%;
        }
        #stack4{
            height: 30%;
        }
        #stack5{
            height: 30%;
        }
        .uk-first-column{
            display:inline-flex;
        }
        .custom-product-item-mobile{
            height:60%;
        }
        .custom-product-item-mobile p{
            font-weight: bold;
            left:-35px;
            top:6vh;
            text-transform: uppercase;
            text-align:left;
            font-size:10px;
        }
        .custom-product-item-mobile img{
            
            height:inherit;
        }
        #stack3{}
        #stack4{}
        #stack5{}
        #stack6{}


        .custom-section-pinknic-right-bg-red{
            background: #cb0069;
            margin-left:2vh;
            margin-top:15%;
            z-index: 1;
            position: absolute;
            width:40vh;
            height: 40vh;
        }
    }

    /* tablet portrait ----------- */
    @media only screen and (min-device-width: 730px) and (max-device-width: 990px){
        #stack1{
            height: 70vh;
            background: rgb(185, 205, 155);
        }
        #stack2{
            background: rgb(238, 222, 230);
            height: 30vh;
        }
        #stack3{
            background: rgb(238, 222, 230);
            height: 30vh;
        }
    }

    /* laptops ----------- */
    @media screen and (max-device-width: 1366px) {
        .second-column{
            margin-top: -50vh;
        }
        .custom-section-products-pinkme
        {
            background:#eedee6;margin-top:5%;height:100%;width:40%;position:absolute;
        }
        .custom-pinknic-image-article a {
            text-decoration:none;
            color:inherit;
        }
        .custom-pinknic-image-article p a{
            text-decoration:none;
            color:inherit;
        }
        .custom-section-pinknic-right-bg-red{
            background: #cb0069;
            margin-left:25vh;
            margin-top:-15%;
            z-index: 1;
            position: absolute;
            width:45vh;
            height: 40vh;
        }
        .custom-pinknic-grid-item{
            height: 33.333vh;
            margin:0;
        }
        .custom-pinknic-grid-item a{
            color:#cb0069;
        }
        .custom-ig-feeds{
            width: 400px;
            height:90vh;
            display: inline-grid;
            grid-gap: 0px;
            grid-template-columns: repeat(2, 220px);
            grid-template-rows: 219px 219px 219px;
            grid-auto-flow: column;
            padding:0;
            padding-top:16%;
            margin-left: -60px;
        }
        .custom-ig-feeds div{
            padding:0;
        }
        .custom-ig-follow{
            padding:0;
            top:20%;
            left:70%;
            position:absolute;
            display: inline;
        }
        .custom-ig-follow h2{
            font-size:2em;
        }
        .custom-ig-feeds ul {
            width: 100%;
            height: 100vh;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2; /*3 is just placeholder -- can be anything*/
            padding-top:15%;
            padding-bottom:10%;
            margin-left: 0px;
            column-gap: 20px;
            -moz-column-gap: 20px;
            -webkit-column-gap: 20px;
        }
        .custom-ig-feeds>ul>li {
            display: inline-grid;
            margin-right:15%; 
            transform: scale(1.2);
            margin-bottom: 0;
            margin-top: 0;
            height:250px;
        }
    }

    /* Macbook Air screens ----------- */
    @media screen and (max-width : 1440px) {
        .custom-section-pinknic-right-bg-red{
            background: #cb0069;
            margin-left:25%;
            margin-top:-15%;
            z-index: 1;
            position: absolute;
            width:60%;
            height: 40%;
        }
        .second-column{
            margin-top: -50vh;
        }
        .custom-section-products-pinkme
        {
            background:#eedee6;margin-top:5%;height:100%;width:40%;position:absolute;
        }
        .custom-navbar-ul>li>a{
            color: #fff;
            padding-left:40px;
        }
        .custom-navbar-ul-icon{
            padding-left: 50px;
        }
        .custom-navbar-ul-icon>li>a{
            padding-right: 1px;
            padding-left: 1px;
            color: #fff;
        }
        .custom-pinknic-grid-item{
            height: 33.333vh;
            margin:0;
        }
        .custom-workshop-grid-item{
            height: 33.3333vh;
            margin:0px;
        }
        .custom-section-products p{
            position:absolute;
            left: -5%;
            top:70%;
            font-size: 18px;
            color: #96024e;
            white-space: pre-line;
            text-align: left;
            text-transform: uppercase;
            font-weight: bolder;
        }
        .custom-pinknic-grid-item a{
            color:inherit;
            text-decoration:none;
        }
        .custom-ig-feeds{
            width: 50%;
            display: grid;
            grid-gap: 0px;
            grid-template-columns: repeat(2, 219px);
            grid-template-rows: 219px 219px 219px;
            grid-auto-flow: column;
            padding:0;
            transform: scale(1.3);
            padding-left:10%;
            padding-top:25%;
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
            height:250px;
        }
        .custom-ig-follow{
            padding:0px;
            left:35%;
            top:-70vh;
        }
        .custom-ig-follow h2{
            top:-2vh;
            left:0%;
            position:relative;
            font-size:2em;
        }
    }

    /* laptops ----------- */
    @media screen and (max-device-width: 768px) {
        .second-column{
            margin-top: -50vh;
        }
        .custom-section-products-pinkme
        {
            background:#eedee6;margin-top:5%;height:100%;width:40%;position:absolute;
        }
        .custom-pinknic-image-article a {
            text-decoration:none;
            color:inherit;
        }
        .custom-pinknic-image-article p a{
            text-decoration:none;
            color:inherit;
        }
        .custom-section-pinknic-right-bg-red{
            background: #cb0069;
            margin-left:25vh;
            margin-top:-15%;
            z-index: 1;
            position: absolute;
            width:45vh;
            height: 40vh;
        }
        .custom-pinknic-grid-item{
            height: 33.333vh;
            margin:0;
        }
        .custom-pinknic-grid-item a{
            color:#cb0069;
        }
        .custom-ig-feeds{
            width: 400px;
            height:90vh;
            display: inline-grid;
            grid-gap: 0px;
            grid-template-columns: repeat(2, 220px);
            grid-template-rows: 219px 219px 219px;
            grid-auto-flow: column;
            padding:0;
            padding-top:16%;
            margin-left: -60px;
        }
        .custom-ig-feeds div{
            padding:0;
        }
        .custom-ig-follow{
            padding:0;
            top:20%;
            left:70%;
            position:absolute;
            display: inline;
        }
        .custom-ig-follow h2{
            font-size:2em;
        }
        .custom-ig-feeds ul {
            width: 100%;
            height: 100vh;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2; /*3 is just placeholder -- can be anything*/
            padding-top:15%;
            padding-bottom:10%;
            margin-left: 0px;
            column-gap: 20px;
            -moz-column-gap: 20px;
            -webkit-column-gap: 20px;
        }
        .custom-ig-feeds>ul>li {
            display: inline-grid;
            margin-right:15%; 
            transform: scale(1.2);
            margin-bottom: 0;
            margin-top: 0;
            height:250px;
        }
    }

    /* iMac screens ----------- */
    @media screen and (max-width : 2048px) {
        .custom-section-pinknic-right-bg-red{
            background: #cb0069;
            margin-left:25%;
            margin-top:-15%;
            z-index: 1;
            position: absolute;
            width:60%;
            height: 40%;
        }
        .second-column{
            margin-top: -50vh;
        }
        .custom-section-products-pinkme
        {
            background:#eedee6;height:100%;width:40%;position:absolute;
        }
        .custom-navbar-ul>li>a{
            color: #fff;
            padding-left:40px;
        }
        .custom-navbar-ul-icon{
            padding-left: 50px;
        }
        .custom-navbar-ul-icon>li>a{
            padding-right: 1px;
            padding-left: 1px;
            color: #fff;
        }
        .custom-pinknic-grid-item{
            height: 33.333vh;
            margin:0;
        }
        .custom-workshop-grid-item{
            height: 33.3333vh;
            margin:0px;
        }
        .custom-section-products p{
            position:absolute;
            left: -5%;
            top:50%;
            font-size: 18px;
            color: #96024e;
            white-space: pre-line;
            text-align: left;
            text-transform: uppercase;
            font-weight: bolder;
        }
        .custom-pinknic-grid-item a{
            color:inherit;
            text-decoration:none;
        }
        .custom-ig-feeds{
            width: 50%;
            display: grid;
            grid-gap: 0px;
            grid-template-columns: repeat(2, 219px);
            grid-template-rows: 219px 219px 219px;
            grid-auto-flow: column;
            padding:0;
            transform: scale(1.3);
            padding-left:10%;
            padding-top:25%;
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
            height:250px;
        }
        .custom-ig-follow{
            padding:0px;
            left:35%;
            top:-70vh;
        }
        .custom-ig-follow h2{
            top:-2vh;
            left:0%;
            position:relative;
            font-size:2em;
        }
    }

    /* Standard laptop screens ----------- */
    @media screen and (max-width : 1366px) {
        .custom-section-pinknic-right-bg-red{
            background: #cb0069;
            margin-left:25%;
            margin-top:-15%;
            z-index: 1;
            position: absolute;
            width:60%;
            height: 40%;
        }
        .second-column{
            margin-top: -50vh;
        }
        .custom-section-products-pinkme
        {
            background:#eedee6;margin-top:5%;height:100%;width:40%;position:absolute;
        }
        .custom-navbar-ul>li>a{
            color: #fff;
            padding-left:40px;
        }
        .custom-navbar-ul-icon{
            padding-left: 50px;
        }
        .custom-navbar-ul-icon>li>a{
            padding-right: 1px;
            padding-left: 1px;
            color: #fff;
        }
        .custom-pinknic-grid-item{
            height: 33.333vh;
            margin:0;
        }
        .custom-workshop-grid-item{
            height: 33.3333vh;
            margin:0px;
        }
        .custom-section-products p{
            position:absolute;
            left: -5%;
            top:50%;
            font-size: 18px;
            color: #96024e;
            white-space: pre-line;
            text-align: left;
            text-transform: uppercase;
            font-weight: bolder;
        }
        .custom-pinknic-grid-item a{
            color:inherit;
            text-decoration:none;
        }
        .custom-ig-feeds{
            width: 50%;
            display: grid;
            grid-gap: 0px;
            grid-template-columns: repeat(2, 219px);
            grid-template-rows: 219px 219px 219px;
            grid-auto-flow: column;
            padding:0;
            transform: scale(1.3);
            padding-left:10%;
            padding-top:25%;
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
            height:250px;
        }
        .custom-ig-follow{
            padding:0px;
            left:35%;
            top:-70vh;
        }
        .custom-ig-follow h2{
            top:-2vh;
            left:0%;
            position:relative;
            font-size:2em;
        }
    }
</style>
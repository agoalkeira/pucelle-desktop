<template>
<div class="tm-content">
    
    <div class="uk-child-width-1-2@m uk-grid-medium uk-grid-match" uk-grid>
        <div style="width:40%;">
            <div class="uk-card uk-card-body" style="background:rgba(0, 0,0, 0.25);padding:10px;">
                <!--<div style="background:#fff;display:inline-block;width:10%;height:auto;position:absolute;top:50%;vertical-align: middle;left:5%;"><a href="#" uk-icon="icon: chevron-left" style="padding:25%;"></a></div>-->
                <img :src="productDetail.image" style="position:absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                <!--<div style="background:#fff;display:inline-block;width:10%;height:auto;position:absolute;top:50%;vertical-align: middle;right:5%;"><a href="#" uk-icon="icon: chevron-right" style="padding:25%;"></a></div>-->
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-body" style="margin-right:10%;">
                <h3 class="uk-card-title" style="color:#f32076;font-weight:bold;font-size:20px;">{{ productDetail.name}}</h3>
                <p v-html="productDetail.desc"></p>
                <p>Available size netto: </p>
                <ul v-for="item in productDetail.size" style="padding:0;list-style-type:none;display:block;">
                <li style="line-height:2px;">{{item}} ml</li>
                </ul>
                <ul style="padding:0;list-style-type:none;display:inline;">
                    <li style="display:inline; color:red;"><span uk-icon="icon: star"></span></li>
                    <li style="display:inline; color:red;"><span uk-icon="icon: star"></span></li>
                    <li style="display:inline; color:red;"><span uk-icon="icon: star"></span></li>
                    <li style="display:inline; color:red;"><span uk-icon="icon: star"></span></li>
                    <li style="display:inline; color:red;"><span uk-icon="icon: star"></span></li>
                </ul>
                <!--p>2 Reviews</p-->
                <p><a class="uk-button uk-button-default" style="background:#cc1b6d;color:#fff;" href="#" id="write_review">Write A Review</a></p>
            </div>
        </div>
    </div>
    <div class="uk-child-width-1-2@m uk-grid-medium uk-grid-match" uk-grid style="margin-top:10px;">
       <!--
        <div>
            <div class="uk-card uk-card-body" style="padding:0;">
                
                <div class="uk-child-width-expand@s uk-text-center" uk-grid>
                    <div>
                        <div class="uk-card uk-card-body"  style="background:rgba(0, 0,0, 0.1)">
                        <img style="height:90px;" src="image_1">
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body"  style="background:rgba(0, 0,0, 0.1);padding-left:0px;padding-right:0px;">
                        <img style="height:90px;" src="image_2">
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body"  style="background:rgba(0, 0,0, 0.1);padding-left:0px;padding-right:0px;">
                        <img style="height:90px;" src="image_3">
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body"></div>
                    </div>
                </div>

            </div>
        </div>
        -->
        <div>
            <div class="uk-card uk-card-body">
            </div>
        </div>
    </div>
<br><br>
<div id="disqus_thread"></div>

</div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')
var data_product = {

                'prod_8' : {
                    name : "SPARKLING LOVE ",
                    desc :"Ungkapkan isi hati dan raih keinginanmu dengan kelembutan <i>Floral</i> dan <i>Bright Fruity Scent. Find your true romance!</i>",
                    size : [150,75],
                    image : "/static/img/products/sparkling_love.png"
                },  

                'prod_9' : {
                    name : "JOLLY RHYTHM ",
                    desc :"Tunjukkan bakat dan talenta mu dengan asyiknya keharuman <i>Juicy Fruity</i> dan <i>Blooming Floral. Be creative and sparkling!</i> ",
                    size : [150,75],
                    image : "/static/img/products/jolly_rhythm.png"
                },    
                'prod_10' : {
                    name : "WAVY OCEAN ",
                    desc :"Ekspresikan dirimu dan tunjukkan kreativitas mu dengan keunikan aroma <i>Gorgeous Floral</i> dan <i>Fresh Marine. Be yourself and feel great!</i>",
                    size : [150,75],
                    image : "/static/img/products/wavy_ocean.png"
                },    
                'prod_11' : {
                    name : "ELECTRIC SUNRISE",
                    desc :"Raih mimpimu dan hadapi hari-harimu dengan fantasi wangi <i>Floral</i> dan <i>Bright Apple Fruity. Let’s make it real!</i>",
                    size :[150,75],
                    image : "/static/img/products/electric_sunrise.png"
                },    
                'prod_12' : {
                    name : "TROPICAL SPIRIT ",
                    desc :"Ceriakan hari-harimu dan nikmati persahabatan mu dengan kesegaran <i>Floral</i> dan <i>Clear Ozone. Let’s get lots of fun!</i>",
                    size : [150,75],
                    image : "/static/img/products/tropical_spirit.png"
                },    
                'prod_13' : {
                    name : "ECCENTRIC BREEZE",
                    desc :"Kreasikan gayamu dan nikmati ceriamu dengan kesegaran <i>Floral</i> dan <i>Citrus Fruity. Keep in style and be unique!</i>",
                    size : [150,75],
                    image : "/static/img/products/eccentric_breeze.png"
                },    
                'prod_14' : {
                    name : "Spring Sakura",
                    desc :"Memberikan sensasi musim semi di Jepang dengan wangi bunga Sakura",
                    size : [100],
                    image : "/static/img/products/spring_sakura.png"
                },   
                'prod_15' : {
                    name : "Summer Yuri ",
                    desc :"Memberikan sensasi musim panas di Jepang dengan wangi bunga Yuri",
                    size : [100],
                    image : "/static/img/products/summer_yuri.png"
                },

                'prod_100' : {
                    name : "Autumn Ran",
                    desc :"Memberikan sensasi musim gugur di Jepang dengan wangi bunga Ran",
                    size : [100],
                    image : "/static/img/products/autumn_ran.png"
                },    

                'prod_16' : {
                    name : "Lovely Date",
                    desc :"Wangi floral fruity dengan wangi peach, apel, ceri, mawar, anggrek musk dan amber",
                    size : [100],
                    image : "/static/img/products/lovely_date.png"
                },     

                'prod_17' : {
                    name : "Lively Vacation",
                    desc :"Wangi floral fruity dengan wangi vanilla, musky flower, lemon, dan sandalwood. ",
                    size : [100],
                    image : "/static/img/products/lively_vacation.png"
                },  

                'prod_18' : {
                    name : "Fashion Day",
                    desc :"Wangi floral fruity dengan wangi raspberry, orange, neroli, melati, carnation dan musk.",
                    size : [100],
                    image : "/static/img/products/fashion_day.png"
                },  

                'prod_19' : {
                    name : "Fancy Duty",
                    desc :"Wangi floral fruity dengan wangi violet green dengan wangi lemon, mawar, melati, woody musk.",
                    size : [100],
                    image : "/static/img/products/fancy_duty.png"
                },  

                'prod_20' : {
                    name : "PUCELLE SPLASH COLOGNE ROSE",
                    desc :"Perpaduan keharuman Rose & Jasmine untuk rasa sejuk dan segar",
                    size : [175,75],
                    image : "/static/img/products/rose.png"
                },  


                'prod_21' : {
                    name : "PUCELLE SPLASH COLOGNE MUSK",
                    desc :"Perpaduan keharuman Chypre & Floral untuk rasa sejuk dan segar.",
                    size : [175,75],
                    image : "/static/img/products/musk.png"
                }, 

                'prod_22' : {
                    name : "PUCELLE SPLASH COLOGNE MARINE",
                    desc :"Perpaduan keharuman Floral & Musk untuk rasa sejuk dan segar.",
                    size : [175,75],
                    image : "/static/img/products/marine.png"
                },   

                'prod_23' : {
                    name : "PUCELLE SPLASH COLOGNE ORIENTAL",
                    desc :"Perpaduan keharuman Floral & Fruity untuk rasa sejuk dan segar.",
                    size : [75],
                    image : "/static/img/products/oriental_mini_single.png"
                },  

                'prod_24' : {
                    name : "Pucelle Anti - Perspirant Deodorant SENSITIVE EXPERT ",
                    desc :"Mengurangi bau badan dan dapat memberikan kenyamanan pada kulit.",
                    size : [50],
                    image : "/static/img/products/sensitive_expert.png"
                },   

                'prod_25' : {
                    name : "Pucelle Anti - Perspirant Deodorant INTENSE FRESH",
                    desc :"Mengurangi bau badan dan memberikan kesegaran pada kulit ketiak.",
                    size : [50],
                    image : "/static/img/products/intense_fresh.png"
                },   

                'prod_26' : {
                    name : "Pucelle Anti - Perspirant Deodorant FAIR WHITE ",
                    desc :"Mengurangi bau badan dan membuat kulit ketiak tampak cerah.",
                    size : [50],
                    image : "/static/img/products/fair_white.png"
                },   

                'prod_7' : {
                    name : "Dazzling Diva ",
                    desc : "Wangi fruity oriental dengan wangi apple, cherry, jasmine, peony, amber, musk untuk kamu yang punya karakter <i>cool & casual</i>",
                    size : [120],
                    image : "/static/img/products/dazzling_diva.png"
                },

                'prod_6' : {
                    name : "Lovely Queen",
                    desc : "Wangi fruity floral dengan wangi apple, melon, water fruits, blackcurrant, jasmine, vanilla, sandalwood untuk kamu yang punya karakter <i>warm & romantic</i>",
                    size : [120],
                    image : "/static/img/products/lovely_queen.png"
                },


                'prod_5' : {
                    name : "Pretty Fairy ",
                    desc : "Wangi floral fruity dengan wangi orange, apple, pear, cassis, aquatic, rose, jasmine, amber. untuk kamu yang punya karakter yang <i>fun & friendly</i>",
                    size : [120],
                    image : "/static/img/products/pretty_fairy.png"
                },

                'prod_4' : {
                    name : "Beloved Princess ",
                    desc : "Wangi fruity gourmand, dengan wangi lemon, strawberry, musk , sandalwood untuk kamu yang punya karakter <i>smart & energic</i>",
                    size : [120],
                    image : "/static/img/products/beloved_princess.png"
                },
                'prod_3' : {
                    name : "Sweet Angel ",
                    desc : "Wangi floral fruity dengan wangi grapefruit, raspberry, sandalwood, vanilla, musk untuk kamu yang punya karakter feminin, <i>sweet & calm</i>",
                    size : [120],
                    image : "/static/img/products/sweet_angel.png"
                },
                'prod_2' : {
                    name : "Merry Star",
                    desc :"Wangi fruity floral dengan wangi peach, mango, orange, raspberry melati, freesia, muguet, violet cedarwood, sandalwood, musk & vanilla, untuk kamu yang punya karakter <i>lively & adventure</i>",
                    size : [120],
                    image : "/static/img/products/merry_star.png"

                },
                'prod_1' : {
                     name : "Dreamy Belle",
                     image : "/static/img/products/dreamy_belle.png",
                     desc : "Wangi floral musky powdery dengan wangi apel, aquatic, mawar, melati, orange blossom, musk, powdery & amber, untuk kamu yang punya karakter yang <i>sincere & tranquil</i>",
                     size : [120]

                }
            
}
export default {
    data:function(){
        return{
            productDetail : {}
        }
    },
    methods:{
        getDetails:function(idProduct){
            var vm = this
            /* Find data object product by id */
            /* vm.productDetail = Append Object from data */
            vm.productDetail = data_product['prod_' + idProduct];
        }
    },
    mounted:function(){
        this.getDetails(this.$route.params.idProduct)
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
        
        var disqus_config = function () {
        this.page.url = 'http://pucelle.id/pucelle-products/detail/' + this.$route.params.idProduct; 
        this.page.identifier = 'pucelle'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        
        var d = document, s = d.createElement('script');
        s.src = 'https://pucelle.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);

        $("html, body").css("overflow","visible")

        $(function(){
                $('#scene').hide()
                $('#write_review').click(function(){
                     $("html, body").animate({ scrollTop: $("#disqus_thread").offset().top }, 600);
                     return false;
                })
            })
    }
}
</script>

<style scoped>
.tm-content{
        background: #ebeeee;
        min-height: 100%;
        padding-top: 10%;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 10%;
    }


</style>
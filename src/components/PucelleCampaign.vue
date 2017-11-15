<template>
<div class="tm-content">
    <div class="uk-container uk-container-expand uk-padding-large custom-pucelle-campaign">

    <div class="uk-child-width-1-1">
    <div>
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top" style="text-align:center;">
                <img :src="latest_campaign.value.image" alt="" width="1366">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title" v-html="latest_campaign.value.title"></h3>
                <div v-html="latest_campaign.value.description">
                </div>
                <br><router-link :to="{ name:'campaign_detail', params: { idCampaign: latest_campaign.value.id }}">read more</router-link>
            </div>
        </div>
    </div>
</div>
<h2>Previous Campaign</h2>
<div id="desktop">
<ul class="pucelle-oldest-campaign-list">
    <li  v-for="campaign in oldest_campaign">
        <div class="uk-card uk-card-default uk-grid-collapse uk-card-hover uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container ">
                <img :src="campaign.value.image" alt="" height="604">
                <!--canvas width="500"></canvas-->
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title" v-html="campaign.value.title"></h3>
                    <div v-html="campaign.value.description" style="text-align:justify;"></div>
                        <br><router-link :to="{ name:'campaign_detail', params: { idCampaign: campaign.value.id }}">read more</router-link>
                </div>
            </div>
        </div>
    </li>
</ul>
</div>
<div id="mobile">
<ul class="pucelle-oldest-campaign-list">
    <li  v-for="campaign in oldest_campaign">
        <div class="uk-card uk-card-default uk-grid-collapse uk-card-hover uk-child-width-1-1@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container ">
                <img :src="campaign.value.image" alt="" height="604">
                <!--canvas width="500"></canvas-->
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title" v-html="campaign.value.title"></h3>
                    <div v-html="campaign.value.description" style="text-align:justify;"></div>
                        <br><router-link :to="{ name:'campaign_detail', params: { idCampaign: campaign.value.id }}">read more</router-link>
                </div>
            </div>
        </div>
    </li>
</ul>
</div>

    </div>
</div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')
var data_campaigns = {
    'campaign_0':{
        id:0,
        title:"Be Incredible with Pink Me on PINKREDIBLE ME",
        description:"<p>Pinkredible Me, sebuah motion dari Pucelle yang bertujuan untuk merangkul para remaja masa kini dalam mengekspresikan diri bersama Pucelle telah sukses diselenggarakan pada tempo hari lalu. Ada 3 jenis aktivitas yang menjadi highlight dari Pinkredible Me, yaitu Goes to school, dalam kegiatan ini Pucelle melakukan roadshow ke 12 sekolah di wilayah Jabotabek dan Cirebon bersama Kemal Pahlevi, Jess Yamada dan Elle Yamada.</p>",
        image:"/static/img/campaigns/pinkredible_me.jpg",
        date:"2017-18-06 19:09:24"
    },
    'campaign_1':{
        id:1,
        title:"Embrace Your Identity Through Your Interest With #PINKLOPEDIA",
        description:"<p>Pinklopedia, sebuah aktivitas baru dari Pucelle untuk mengajak para remaja menemukan jati dirinya melalui minat dan bakat masing-masing dan didampingi oleh sosok inspiratif remaja Indonesia masa kini. Pinklopedia mengusung tujuh role model yang sedang hits dengan minat dan bakat yang berbeda-beda setiap individualnya. Audi Marissa dengan keahlian beraktingnya, Hanggini P. Retto dengan kesuksesannya dalam menulis novel #7Mantan plus minat serta bakat lain yang dimilikinya, dan kelima tokoh remaja lainnya yang akan ikut dalam rangkaian kegiatan Pinklopedia.</p><p> Penasaran pengen tau siapa aja yang bakal jadi role model kalian dalam Pinklopedia? Stay tune terus di Website dan Social Media Pucelle ya, dear! #BePucelle</p>",
        image:"/static/img/campaigns/pinklopedia_campaign_detail.jpg",
        date:"2017-19-06 19:09:24"
    },
    'campaign_2':{
        id:2,
        title:"Pucelle Ngabuburit",
        description:"<p>Selama bulan ramadan, aktivitas masyarakat Indonesia sedikit bergeser dari waktu normal. Untuk mengisi waktu luang, Pucelle punya aktivitas baru dan seru nih untuk dear semua selama bulan Ramadan, yaitu Pucelle Ngabuburit. Kegiatan Pucelle Ngabuburit dibagi menjadi dua sesi berupa games dan challenge menarik yang bisa diikuti, ragamnya adalah Match the Pucelle dan Play the Pucelle. Match the Pucelle adalah mencocokkan warna benda yang ada disekitar kalian dengan produk Pucelle, contohnya warna sepatu favorit kamu dengan warna Pucelle Splash Cologne. Play the Pucelle adalah berkreasi sekreatif mungkin dengan produk Pucelle.</p>",
        image:"/static/img/campaigns/ngabuburit_campaign_detail.jpg",
        date:"2017-20-06 19:09:24"
    },
    'campaign_3':{
        id:3,
        title:"Pucelle Pink Me Up",
        description:"<p>Hai Dear! Pink Me Up merupakan sebuah aktivitas baru dan seru dari Pucelle yang bertujuan untuk mempererat hubungan pertemanan dan persahabatan antar kawula muda perempuan Indonesia dengan cara yang positif. Disini, Pucelle mengusung konsep “Makeover Your Bestfriend With Your Idol” untuk mewakilkan tujuh produk Pucelle Pink Me. Pink Me Up sendiri berkolaborasi dengan 7 influencer cantik yang sedang hits di media sosial khususnya Instagram. Sebagai representasi dari idola para remaja Indonesia masa kini, 7 influencer tersebut akan mewakili masing –masing karakter produk Pucelle Pink Me.</p>",
        image:"/static/img/campaigns/banner-pink-me-up.jpg",
        date:"2017-26-07 17:09:24"
    },
    'campaign_4':{
        id:4,
        title:"Karena Gak Ada Yang Lebih Baik Selain Jadi Dirimu Sendiri! <br>Love Me Pink: The Web Series",
        description:"<p>Hai Dear! Apa kabarmu hari ini? Tetap ceria dong pastinya, karena Pucelle punya kejutan seru nih buatmu. Yup, bagi yang udah nunggu-nunggu, Love Me Pink Series sebentar lagi akan tayang lho, dear! Yeaaaay!</p>",
        image:"/static/img/campaigns/pucelle-web-series.jpg",
        date:"2017-21-08 17:09:24"
    },
    'campaign_5':{
        id:5,
        title:"Karena Gak Ada Yang Lebih Baik Selain Jadi Dirimu Sendiri! <br>Love Me Pink: Episode 1",
        description:"<p>Pink (Audi Marissa) yang selama ini diam-diam menyimpan perasaan kepada Ibrahim, salah satu anggota genk yang populer di sekolahnya, akhirnya ketahuan juga oleh sahabatnya, Clay dan Michelle. Pink yang selalu salah tingkah dan jadi gak fokus saat berada di dekat Ibrahim, membuat kedua sahabatnya yakin kalau Pink pasti diam-diam suka sama Ibrahim.</p><p>Mengetahui hal tersebut, kedua sahabat Pink ingin membantu dan membanjiri nya dengan ide-ide “briliant” untuk bisa menarik perhatian Ibrahim. Here it is, Episode 1 Love Me, Pink: Pucelle Web Series bagi kamu yang belum sempat nonton.</p><p>Pantengin sampai habis ya dear dan ikuti kuisnya di instagram @pucelleid &amp; Channel Youtube Pucelle Indonesia. Jangan lupa follow &amp; subscribe! #BePucelle #LoveMePink</p>",
        image:"/static/img/campaigns/web_series_eps_1.jpg",
        date:"2017-21-08 17:09:24"
    },
    'campaign_6':{
        id:6,
        title:"Karena Gak Ada Yang Lebih Baik Selain Jadi Dirimu Sendiri! <br>Love Me Pink: Episode 2",
        description:"<p>Ketika kita menyukai seseorang, pasti kita akan melakukan banyak hal untuk bisa menarik perhatiannya. Apalagi kalau orang itu adalah orang yang populer di sekolah kamu. Hal ini yang menjadi dilema bagi Pink karena dia bukan termasuk orang yang populer di sekolah nya. Pink yang merasa tidak percaya diri untuk menarik perhatian Ibrahim, akhirnya mencoba untuk merubah penampilannya. Sayangnya perubahan tersebut membuat Pink menjadi orang lain dan dipandang aneh oleh temen-teman sekolah nya.</p><p>Apakah Pink akan menyerah untuk mendapatkan hati Ibrahim? Here comes the new episode of Love Me Pink: Pucelle Web Series.</p><p>Jangan lupa ikutan kuisnya di Channel Youtube Pucelle Indonesia &amp; IG @pucelleid! #LoveMePink #BePucelle</p>",
        image:"/static/img/campaigns/web_series_eps_2.jpg",
        date:"2017-21-08 17:09:24"
    },
    'campaign_7':{
        id:7,
        title:"Pucelle Love Me Pink: Pucelle Web Series Episode 3",
        description:"<p>Pink mendapat komentar-komentar negatif saat dia merubah penampilannya dan mencoba menjadi vlogger. Dari komentar-komentar negatif tersebut banyak yang perpendapat kalau Pink mencoba untuk menjadi seperti Querra, dan akhirnya membuat Pink dicap sebagai “Querra Wannabe”. Mengetahui hal tersebut Querra dan Fachri malah jadi “ngisengin” Pink nih. Bagaimana ya reaksi Ibrahim saat mengetahui apa yang dilakukan Querra dan Fachri?</p>",
        image:"/static/img/campaigns/pucelle-web-series-3.jpeg",
        date:"2017-08-09 14:09:24"
    },
    'campaign_8':{
        id:8,
        title:"LOVE ME PINK: Pucelle Web Series Episode 4",
        description:"<p>Keisengan Querra dan Fachri membuat Pink sedih dan jadi menyalahkan Clay dan Michelle atas ide-ide mereka. Pink yang sedih, seketika merasa terhibur dan tersipu saat membaca pesan dari seseorang yang ditinggalkan di kotak saran Mading yang dikelola oleh Pink dan kedua sahabatnya. Pesan tersebut membangkitkan kepercayaan diri Pink, dan membuatnya berpikir bahwa menjadi diri sendiri adalah hal yang terbaik. Namun, ada satu hal yang membuat Pink merasa sangat kaget ketika mengetahuinya. Apakah yang mengagetkan Pink saat itu?</p>",
        image:"/static/img/campaigns/love_me_pink_eps_4.jpg",
        date:"2017-14-09 14:09:24"
    },
    'campaign_9':{
        id:9,
        title:"LOVE ME PINK: Pucelle Web Series Episode 5",
        description:"<p>Untuk bisa disukai oleh cowok populer di sekolahmu bukan berarti kamu harus menjadi cewek yang populer. Pink membuktikan bahwa percaya dengan kemampuan dan keistimewaan diri bisa menjadi daya tarik yang lebih untuk kamu.</p>",
        image:"/static/img/campaigns/love_me_pink_eps_5.jpg",
        date:"2017-21-09 20:09:24"
    }
}

export default {
    data:function(){
        return {
            data_campaigns:'',
            latest_campaign:'',
            oldest_campaign:[]
        }
    },
    methods:{
        functionName:function(){
            var today = new Date().toLocaleString() // format dd/m/yyyy hh.mm.ss
        },
        sortObject:function(obj) {
            var arr = [];
            var prop;
            for (prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    arr.push({
                        'key': prop,
                        'value': obj[prop]
                    });
                }
            }
            arr.sort(function(a, b) {
                return a.value - b.value;
            });
            return arr; // returns array
        }
    },
    mounted:function(){
        $("html, body").css({"overflow":"visible","background-color":"#ffffff"})
        $(function(){
                $('#scene').hide()
            })
    },
    created:function(){
        const ordered = {};
        Object.keys(data_campaigns).sort().forEach(function(key) {
        ordered[key] = data_campaigns[key];
        });

        var sortObj = this.sortObject(ordered)
        var lengthArr = sortObj.length
        var lengthOldest = lengthArr - 1
        this.latest_campaign = sortObj[lengthArr - 1];
        var desc = sortObj.slice(0,lengthOldest)
        this.oldest_campaign = desc.reverse();
        console.log(this.oldest_campaign)
        console.log(this.latest_campaign)
    }
}
</script>

<style scoped>
#desktop{
    display: block;
}
#mobile{
    display: none;
}
    .custom-pucelle-campaign p{
        text-align: justify;
    }
    .custom-pucelle-campaign h2{
        color: #cc1b6d;
        font-weight: bold;
    }
    .pucelle-oldest-campaign-list{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .pucelle-oldest-campaign-list h3{
        color: #3e6372;
        font-weight: bold;
        text-transform: uppercase;
    }
    .pucelle-oldest-campaign-list img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1026px){
        #desktop{
            display: none;
        }
        #mobile{
            display: block;
        }
    }
</style>
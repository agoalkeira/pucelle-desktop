<template>
    <div class="tm-content">
        <div class="pucelle-campaign-detail">
            <div class="uk-cover-container uk-height-medium contain" style="background-image:url(/static/img/geometry.png);background-repeat:repeat;background-size:contain;background-position:center;">
                <img :src="campaignDetail.image">
            </div>
        </div>
        <div class="uk-container pucelle-campaign-detail-description">
            <dl class="uk-description-list">
                <dt v-html="campaignDetail.title" style="font-weight:500;"></dt>
                <dd v-html="campaignDetail.description"></dd>
            </dl>
        </div>

    </div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')

var data_campaign = {
    'campaign_0': {
        id: 0,
        title: "Be Incredible with Pink Me on PINKREDIBLE ME",
        description: "<p>Pinkredible Me, sebuah motion dari Pucelle yang bertujuan untuk merangkul para remaja masa kini dalam mengekspresikan diri bersama Pucelle telah sukses diselenggarakan pada tempo hari lalu. Ada 3 jenis aktivitas yang menjadi highlight dari Pinkredible Me, yaitu Goes to school, dalam kegiatan ini Pucelle melakukan roadshow ke 12 sekolah di wilayah Jabotabek dan Cirebon bersama Kemal Pahlevi, Jess Yamada dan Elle Yamada.</p><p>Kegiatan kedua yaitu vlogging competition yang bertemakan “OOTD with Pink Me”. Pucelle mengajak masyarakat untuk rekam video tentang outfit yang dipakai sehari-hari dalam format vlog (video blog) dan telah diambil 3 pemenang dengan hadiah utama mendapatkan laptop Lenovo ideapad, Kamera Sony Alpha A5000 dan Samsung Galaxy A5. Selain pemenang utama, ada 7 pemenang juga yang mendapatkan likes terbanyak, serta 3 peserta untuk entry favorit . Tidak hanya school to school dan vlogging competition, Pinkredible Me juga didukung dengan aktivitas digital di media sosial, khususnya Instagram dan Facebook.</p><p>Dengan adanya kegiatan Pinkredible Me, masyarakat Indonesia khususnya para remaja masa kini menjadi lebih berani untuk mengekspresikan diri dengan kegiatan yang positif, salah satunya melalui aktivitas video blogging. Penasaran dengan aktivitas dan kegiatan Pucelle lainnya? Stay tune terus di Website dan social media Pucelle untuk event-event seru lainnya! #BePucelle</p>",
        image: "/static/img/campaigns/pinkredible_me.jpg"
    },
    'campaign_1': {
        id: 1,
        title: "Embrace Your Identity Through Your Interest With #PINKLOPEDIA",
        description: "<p>Pinklopedia, sebuah aktivitas baru dari Pucelle untuk mengajak para remaja menemukan jati dirinya melalui minat dan bakat masing-masing dan didampingi oleh sosok inspiratif remaja Indonesia masa kini. Pinklopedia mengusung tujuh role model yang sedang hits dengan minat dan bakat yang berbeda-beda setiap individualnya. Audi Marissa dengan keahlian beraktingnya, Hanggini P. Retto dengan kesuksesannya dalam menulis novel #7Mantan plus minat serta bakat lain yang dimilikinya, dan kelima tokoh remaja lainnya yang akan ikut dalam rangkaian kegiatan Pinklopedia.</p><p> Penasaran pengen tau siapa aja yang bakal jadi role model kalian dalam Pinklopedia? Stay tune terus di Website dan Social Media Pucelle ya, dear! #BePucelle</p>",
        image: "/static/img/campaigns/pinklopedia_campaign_detail.jpg"
    },
    'campaign_2': {
        id: 2,
        title: "Pucelle Ngabuburit",
        description: "<p>Selama bulan ramadan, aktivitas masyarakat Indonesia sedikit bergeser dari waktu normal. Untuk mengisi waktu luang, Pucelle punya aktivitas baru dan seru nih untuk dear semua selama bulan Ramadan, yaitu Pucelle Ngabuburit. Kegiatan Pucelle Ngabuburit dibagi menjadi dua sesi berupa games dan challenge menarik yang bisa diikuti, ragamnya adalah Match the Pucelle dan Play the Pucelle. Match the Pucelle adalah mencocokkan warna benda yang ada disekitar kalian dengan produk Pucelle, contohnya warna sepatu favorit kamu dengan warna Pucelle Splash Cologne. Play the Pucelle adalah berkreasi sekreatif mungkin dengan produk Pucelle.</p><p>Sesi Match the Pucelle sudah berlangsung tempo hari yang lalu dengan antusiasme peserta yang cukup baik, kini sesi Play the Pucelle masih berlangsung dan akan berakhir tanggal 21 Juni 2017. Penasaran ingin ikutan? Yuk segera follow instagram Pucelle hanya di @pucelleid dan baca mekanismenya.Ditunggu segera ya dear!</p>",
        image: "/static/img/campaigns/ngabuburit_campaign_detail.jpg"
    },
    'campaign_3': {
        id: 3,
        title: "Pucelle Pink Me Up",
        description: "<p>Hai Dear! Pink Me Up merupakan sebuah aktivitas baru dan seru dari Pucelle yang bertujuan untuk mempererat hubungan pertemanan dan persahabatan antar kawula muda perempuan Indonesia dengan cara yang positif. Disini, Pucelle mengusung konsep “Makeover Your Bestfriend With Your Idol” untuk mewakilkan tujuh produk Pucelle Pink Me. Pink Me Up sendiri berkolaborasi dengan 7 influencer cantik yang sedang hits di media sosial khususnya Instagram. Sebagai representasi dari idola para remaja Indonesia masa kini, 7 influencer tersebut akan mewakili masing –masing karakter produk Pucelle Pink Me.</p><p>Untuk mengikuti kompetisi Pink Me Up, cara yang diperlukan cukup mudah lho Dear. Cukup dengan follow Instagram @PucelleID lalu upload foto keseruan kamu dan sahabatmu sambil memegang Produk Pucelle Pink Me yang diminati melalui Instagram, sesuai dengan produk yang mewakilkan idola kamu. Step selanjutnya adalah menjelaskan pada kolom caption kenapa kamu ingin make-over sahabatmu. Jelaskan juga kenapa kamu ingin berkolaborasi bareng idola favoritmu untuk make-over sahabatmu tadi. Terakhir, tag ke instagram @PucelleID dan instagram idolamu serta gunakan hashtag sesuai ketentuan yang sudah dijelaskan.</p><p>Ketujuh idola akan mewakilkan ketujuh produk Pucelle Pink Me sesuai dengan karakternya masng-masing. Adapun ketujuh idola yang bisa kamu pilih adalah sebagai berikut:</p><ol style='list-style-type: decimal;'>  <li>Audi Marissa, aktris, representasi Pucelle Pink Me Pretty Fairy (Fun and Friendly)</li><li>Hanggini, penulis muda, representasi Pucelle Pink Me Sweet Angel (Sweetand Calm)</li><li>Abel Cantika, beauty enthusiast, representasi Pucelle Pink Me DazzlingDiva (Cool and Casual)</li><li>Indah Kusuma, dokter, representasi Pucelle Pink Me Beloved Princess(Smart and Energetic)</li><li>Dindra Nashriyah, traveler, representasi Pucelle Pink Me Merry Star(Lively and Adventurer)</li><li>Sheila Dara Aisha, TV Host, representasi Pucelle Pink Me Lovely Queen(Fun and Talkative)</li><li>Nadin Amizah, penyanyi, representasi Pucelle Pink Me Dreamy Belle(Sincere and Tranquil)</li>  </ol><p>Jadi, idola mana yang akan kamu pilih buat kolaborasi makeover sahabatmu,dear? Ikuti kompetisinya dan stay tune terus di Facebook serta Instagram Pucelle</p>",
        image: "/static/img/campaigns/banner-pink-me-up.jpg"
    },
    'campaign_4': {
        id: 4,
        title: "Love Me Pink: The Web Series",
        description: "<img style='float:left;padding-right:10px;' src='/static/img/campaigns/pucelle-web-series-2.jpg' width='300'><p style='display:inline;vertical-align:middle;'>Hai Dear! Apa kabarmu hari ini? Tetap ceria dong pastinya, karena Pucelle punya kejutan seru nih buatmu. Yup, bagi yang udah nunggu-nunggu, Love Me Pink Series sebentar lagi akan tayang lho, dear! Yeaaaay!</p><p>Series yang dibintangi oleh <b style='font-weight:500;color:inherit !important;'>Audi Marissa</b> sebagai pemeran utama ini akan mengisahkan tentang suasana romansa di bangku SMA yang pastinya related banget nih sama dear semua. Gak hanya Audi Marissa, mini series ini juga diperankan oleh idola-idolamu yang lain seperti <b style='font-weight:500;color:inherit !important;'>Ibrahim Risyad</b> yang akan menjadi love interest dari Audi Marissa, <b style='font-weight:500;color:inherit !important;'>Clairine Clay</b> dan <b style='font-weight:500;color:inherit !important;'>Michelle Lee</b> sebagai kedua sahabat Audi yang selalu setia menemani, <b style='font-weight:500;color:inherit !important;'>Querra Mellca</b> sebagai cewek hits nan populer kebanggaan sekolah, dan <b style='font-weight:500;color:inherit !important;'>Fachri Muhammad</b> sebagai cowok populer dan supel teman Ibrahim serta Querra. Uh, penasaran banget ga sih dear pengen nonton Web Seriesnya? Tapi gimana caranya?</p><p>Tenang, tenang! Jangan panik. Webseries ini akan tayang di minggu ini dan berikut adalah step-step yang wajib kudu kamu ikutin supaya lebih berasa seru vibe nontonnya! :p </p><img style='float:right;padding-left:10px;' src='/static/img/campaigns/pucelle-web-series.jpg' width='360'><p>Pertama, yuk subscribe Channel Youtube Pucelle Indonesia di Youtube, supaya kamu gak akan ketinggalan notifikasi jika seriesnya release!</p><p>Kedua, pantengin terus social media Pucelle Indonesia (FB &amp; Instagram) untuk kejutan seru di tiap-tiap episodenya. Akan ada hadiah menarik yang menanti lho!</p><p>Ketiga, bring your squad to watch the series, biar bisa baper bareng dan nikmatin bareng seriesnya, hihihi. Lebih asik kaan kalo nonton bareng temenmu?</p><p>Gimana dear, sudah gak sabar mau nonton seriesnya? Sabar dulu ya dear! Sembari menunggu, let’s watch the trailer for Love Me Pink: Pucelle Web Series! Enjoy.</p><iframe style='position:relative;width:100%;height:450px;' frameborder='0' src='https://www.youtube.com/embed/cTBcaQTX9LU'></iframe></p><p>#BePucelle</p>",
        image: "/static/img/campaigns/pucelle-web-series.jpg"
    },
    'campaign_5': {
        id: 5,
        title: "Karena Gak Ada Yang Lebih Baik Selain Jadi Dirimu Sendiri! <br>Love Me Pink: Episode 1",
        description: "<p>Pink (Audi Marissa) yang selama ini diam-diam menyimpan perasaan kepada Ibrahim, salah satu anggota genk yang populer di sekolahnya, akhirnya ketahuan juga oleh sahabatnya, Clay dan Michelle. Pink yang selalu salah tingkah dan jadi gak fokus saat berada di dekat Ibrahim, membuat kedua sahabatnya yakin kalau Pink pasti diam-diam suka sama Ibrahim.</p><p>Mengetahui hal tersebut, kedua sahabat Pink ingin membantu dan membanjiri nya dengan ide-ide “briliant” untuk bisa menarik perhatian Ibrahim. Here it is, Episode 1 Love Me, Pink: Pucelle Web Series bagi kamu yang belum sempat nonton.</p><p>Pantengin sampai habis ya dear dan ikuti kuisnya di instagram @pucelleid &amp; Channel Youtube Pucelle Indonesia. Jangan lupa follow &amp; subscribe! #BePucelle #LoveMePink</p><p><iframe style='position:relative;width:100%;height:450px;' frameborder='0' src='https://www.youtube.com/embed/mdt7UjFgAiM'></iframe></p>",
        image: "/static/img/campaigns/web_series_eps_1.jpg"
    },
    'campaign_6': {
        id: 6,
        title: "Karena Gak Ada Yang Lebih Baik Selain Jadi Dirimu Sendiri! <br>Love Me Pink: Episode 2",
        description: "<p>Ketika kita menyukai seseorang, pasti kita akan melakukan banyak hal untuk bisa menarik perhatiannya. Apalagi kalau orang itu adalah orang yang populer di sekolah kamu. Hal ini yang menjadi dilema bagi Pink karena dia bukan termasuk orang yang populer di sekolah nya. Pink yang merasa tidak percaya diri untuk menarik perhatian Ibrahim, akhirnya mencoba untuk merubah penampilannya. Sayangnya perubahan tersebut membuat Pink menjadi orang lain dan dipandang aneh oleh temen-teman sekolah nya.</p><p>Apakah Pink akan menyerah untuk mendapatkan hati Ibrahim? Here comes the new episode of Love Me Pink: Pucelle Web Series.</p><p>Jangan lupa ikutan kuisnya di Channel Youtube Pucelle Indonesia &amp; IG @pucelleid! #LoveMePink #BePucelle</p><p><iframe style='position:relative;width:100%;height:450px;' frameborder='0' src='https://www.youtube.com/embed/-uUdLUb-ZS4'></iframe></p>",
        image: "/static/img/campaigns/web_series_eps_2.jpg"
    },
    'campaign_7': {
        id: 7,
        title:"Pucelle Love Me Pink: Pucelle Web Series Episode 3",
        description:"<img style='text-align:center;margin-left:auto;margin-right:auto;display:block;' src='/static/img/campaigns/pucelle-web-series-3.jpeg' width='500'><p>Pink mendapat komentar-komentar negatif saat dia merubah penampilannya dan mencoba menjadi vlogger. Dari komentar-komentar negatif tersebut banyak yang perpendapat kalau Pink mencoba untuk menjadi seperti Querra, dan akhirnya membuat Pink dicap sebagai “Querra Wannabe”. Mengetahui hal tersebut Querra dan Fachri malah jadi “ngisengin” Pink nih. Bagaimana ya reaksi Ibrahim saat mengetahui apa yang dilakukan Querra dan Fachri?</p><p>Here comes the Episode 3 of Love Me Pink: Pucelle Web Series, dan jangan lupa ikuti kuis serunya serta menangkan hadiah voucher MAP dan produk Pucelle! #bepucelle #lovemepink</p><p><iframe style='position:relative;width:100%;height:450px;' frameborder='0' src='https://www.youtube.com/embed/Y0ExixeVQfk'></iframe></p>",
        image:"/static/img/campaigns/pucelle-web-series-3.jpeg"
    },
    'campaign_8':{
        id:8,
        title:"LOVE ME PINK: Pucelle Web Series Episode 4",
        description:"<p>Keisengan Querra dan Fachri membuat Pink sedih dan jadi menyalahkan Clay dan Michelle atas ide-ide mereka. Pink yang sedih, seketika merasa terhibur dan tersipu saat membaca pesan dari seseorang yang ditinggalkan di kotak saran Mading yang dikelola oleh Pink dan kedua sahabatnya. Pesan tersebut membangkitkan kepercayaan diri Pink, dan membuatnya berpikir bahwa menjadi diri sendiri adalah hal yang terbaik. Namun, ada satu hal yang membuat Pink merasa sangat kaget ketika mengetahuinya. Apakah yang mengagetkan Pink saat itu?</p><p>Here comes the Episode 4 of Love Me Pink: Pucelle Web Series.</p><p>Jangan lupa untuk ikuti kuis terakhirnya di IG dan Youtube @pucelleid Pucelle Indonesia sekarang, karena akan ada hadiah menarik yang menantimu!</p><p><iframe style='position:relative;width:100%;height:450px;' frameborder='0' src='https://www.youtube.com/embed/6Oj8YvFExv4'></iframe></p>",
        image:"/static/img/campaigns/love_me_pink_eps_4.jpg"
    },
    'campaign_9':{
        id:9,
        title:"LOVE ME PINK: Pucelle Web Series Episode 5",
        description:"<p>Untuk bisa disukai oleh cowok populer di sekolahmu bukan berarti kamu harus menjadi cewek yang populer. Pink membuktikan bahwa percaya dengan kemampuan dan keistimewaan diri bisa menjadi daya tarik yang lebih untuk kamu.</p><p>Yuk tingkatkan kepercayaan diri kamu! Siapa tau ada cowok populer seperti Ibrahim di sekolah mu yang diam-diam naksir kamu. Love Me, Pink Web Series: The Final Episode Presented by Pucelle Indonesia.</p><p>Selamat menonton! #BePucelle</p><p><iframe style='position:relative;width:100%;height:450px;' frameborder='0' src='https://www.youtube.com/embed/VNeXEVIBsvo'></iframe></p>",
        image:"/static/img/campaigns/love_me_pink_eps_5.jpg"
    }
}


export default {
    data: function() {
        return {
            campaignDetail: {}
        }
    },
    methods: {
        getCampaignDetail: function(idCampaign) {
            var vm = this
            /* Find data object campaign by id */
            vm.campaignDetail = data_campaign['campaign_' + idCampaign];
        }
    },
    mounted: function() {
        this.getCampaignDetail(this.$route.params.idCampaign)
        $("html, body").css({ "overflow": "visible", "background-color": "#ffffff" })
        $(function() {
            $('#scene').hide()
        })
    }
}
</script>

<style scoped>
.tm-content {
    background: #FFF;
    min-height: 800px;
    padding-bottom: 15%;
}

.contain img {
    height: 100%;
    margin-left: 40%;
    margin-right: 40%;
}

.pucelle-campaign-detail {
    padding-top: 3%;
}

.pucelle-campaign-detail-description {
    padding-left: 20%;
    padding-right: 20%;
}

.pucelle-campaign-detail-description dt {
    font-size: 28px;
    color: #cc1b6d;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
}

.pucelle-campaign-detail-description dd {
    text-align: justify;
}
</style>
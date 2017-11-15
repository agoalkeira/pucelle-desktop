<template>
    <div class="tm-content">
        <div class="uk-cover-container uk-height-medium contain" style="background-image:url(/static/img/geometry.png);background-repeat:repeat;background-size:contain;background-position:center;">
            <img :src="newsDetail.image">
        </div>
        <div class="uk-container pucelle-news-detail">

            <div uk-grid>
                <div class="uk-width-expand@m">
                    <div class="uk-card uk-card-default news-event-highlight">
                        <div class="uk-card-media-top">
                            <!--div style="background:#fff;display:inline-block;width:7%;height:auto;position:absolute;top:10%;vertical-align: middle;left:5%;">
                        <router-link to="/pucelle-news/detail/" uk-icon="icon: chevron-left" style="padding:25%;" class="uk-icon"></router-link>
                        </div-->
                            <!--img :src="newsDetail.image" alt=""-->
                            <!--div style="background:#fff;display:inline-block;width:7%;height:auto;position:absolute;top:10%;vertical-align: middle;right:5%;">
                        <router-link to="/pucelle-news/detail/" uk-icon="icon: chevron-right" style="padding:25%;" class="uk-icon"></router-link>
                        </div-->
                        </div>
                        <div class="uk-card-body">
                            <h3>
                                <b>{{newsDetail.title}}</b>
                            </h3>
                            <div v-html="newsDetail.description"></div>
                            <div uk-grid>
                                <div>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=pucelle.id" uk-icon="icon: facebook" class="uk-button uk-button-default btn-link-share-fb" target="_blank">Share</a>
                                    <!--router-link to="/pucelle-news/detail/" uk-icon="icon: facebook" class="uk-button uk-button-default btn-link-share-fb">Share</router-link-->
                                </div>
                                <div>
                                    <router-link to="/pucelle-news/detail/" uk-icon="icon: copy" class="uk-button uk-button-default btn-link-copy">Copy</router-link>
                                </div>
                            </div>
                            <h3 style="color:#cc1b6d;font-size:18px;">Comments</h3>
                            <hr>
                            <div id="disqus_thread"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')
var data_news = {
    'news_1': {
        id: 1,
        title: "Pucelle X Audi Marissa: Intip keseruan photoshoot Audi Marissa dalam balutan warna pelangi",
        description: "<p>Pada waktu yang lalu, Pucelle mengadakan <i>photoshoot session</i> bersama Audi Marissa yang bertempat di salah satu studio foto di bilangan Jakarta Selatan. Kehebohan dan keceriaan yang dipancarkan oleh cewek kelahiran tahun 1995 ini membuat sesi foto yang panjang tersebut menjadi fun. Bertemakan <i>colorful rainbow</i>, Audi terlihat tampak menawan dengan outfit warna-warninya. “Konsepnya lucu banget, jadi aku semangaaat banget hari ini.” Tuturnya.</p><img src='/static/img/news/pucelle_x_audi_marissa.jpg' width='250' style='margin:0 auto;display: block;'/><p>Saat ditanya style apa yang diusung Audi sehari-sehari dalam berpenampilan, Audi yang akrab dipanggil dengan sapaan Icha ini lebih suka gaya <i>casual sporty</i> namun tetap manis. Alasannya karena gaya tersebut cocok untuk dipakai sehari-hari dan lebih fleksibel di momen apapun. Gimana tuh contohnya, dear? Perpaduan dress mini dengan sepatu <i>sneakers</i> untuk acara semi formal, dan jeans dengan <i>leather jacket</i> untuk acara santai. Anyway, penasaran seperti apa photoshootnya, dear? Yuk langsung intip foto-foto dibawah ini!</p>",
        image: "/static/img/news/pucelle_x_audi_marissa.jpg"
    },
    'news_2': {
        id: 2,
        title: "Pemenang Love Me Pink: Pucelle Web Series Quiz Episode I",
        description: "<img src='/static/img/news/winner_announcement.jpeg' width='450' style='margin:0 auto;display: block;'/><p>Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Ep 1, dan sekarang saatnya pengumuman yang sudah kamu tunggu.</p><p>Anyway, berikut adalah nama-nama pemenang  yang berhak mendapatkan hadiah Voucher MAP senilai masing-masing 250ribu rupiah dan product seru dari Pucelle:</p><br>Instagram winner:<br>@jiaaa.nh<br>@fatimahrina3<br>@daracaryn<br>@triviaw<br>@milaazzrr<br><br>Youtube winner :<br><span style='line-height:12px;text-align:center;'>Yudha agustriani<br>Desi nurhana<br>Fada setiarini<br>Erika agustina<br>Michelle Puteri</span><br><p>Selamat kepada para pemenang!</p><p>Jangan lupa untuk konfirmasi data diri kamu (nama lengkap, alamat, dan no tlp) melalui Instagram message ya.</p><p>Buat yang belum beruntung, jangan bersedih ya dear karena akan ada banyak quiz Love Me Pink di tiap minggunya. Stay tune!</p><p>#BePucelle #LoveMePink</p>",
        image: "/static/img/news/winner_announcement.jpeg"
    },
    'news_3': {
        id: 3,
        title: "Pucelle #PinkMeUp Winner Announcement",
        description: "<img src='/static/img/news/winner_pink_me.jpeg' width='450' style='margin:0 auto;display: block;'/><p>Terima kasih atas partisipasi kamu dalam #PinkMeUp ya, Dear! Berikut adalah nama-nama pemenang dengan foto dan caption terkeren yang beruntung untuk bertemu langsung hangout bersama idola dan kesempatan untuk makeover senilai jutaan rupiah!</p> <p>Selamat untuk seluruh pemenang! Jangan lupa untuk konfirmasi data diri kamu (nama lengkap, alamat, dan no tlp) melalui instagram message. Data dirimu kami tunggu hingga 10 September 2017 ya.</p><p>Have a good day! #BePucelle #PinkMeUp</p>",
        image: "/static/img/news/winner_pink_me.jpeg"
    },
    'news_4': {
        id: 4,
        title: "Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 2",
        description: "<img src='/static/img/news/winner_announcement_eps02.jpeg' width='450' style='margin:0 auto;display: block;'/><p style='font-size:16px;text-align:justify;'>Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 2, dan sekarang saatnya pengumuman yang sudah kamu tunggu!</p><p style='font-size:16px;text-align:justify;'>Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 2 yang benar adalah:</p><p style='font-size:16px;text-align:justify;'>Pink awalnya sempat menyerah dan putus asa dalam usahanya untuk mendekati Ibrahim, namun berkat support, semangat dan ide brilian dan kedua sahabatnya (Michelle &amp; Clay), Pink kembali percaya diri, dan kembali tak gentar utk mendapatkan hati Ibrahim.</p><p style='font-size:16px;text-align:justify;'>Anyway, berikut adalah nama-nama pemenang  yang berhak mendapatkan hadiah Voucher MAP senilai masing-masing 250ribu rupiah dan product seru dari Pucelle:</p><p>Instagram winner:<ul><li>@veronikajane</li><li>@nia_ms99</li><li>@deacrth_</li><li>@rafiqahna</li><li>@echaawidyaa</li></ul></p><p>Youtube winner:<ul><li>Widyane Azarona</li><li>Fitriya S</li><li>Nesya Ardeli</li><li>Ananda Alifa Fadhila</li><li>Ristia Pawesti</li></ul></p><p>Selamat kepada para pemenang!</p><p style='font-size:16px;text-align:justify;'>Jangan lupa untuk konfirmasi data diri kamu (nama lengkap, alamat, dan no tlp) melalui Instagram message ya.</p><p style='font-size:16px;text-align:justify;'>Buat yang belum beruntung, jangan bersedih ya dear karena akan ada banyak quiz Love Me Pink di tiap minggunya. Stay tune! #BePucelle #LoveMePink</p>",
        image: "/static/img/news/winner_announcement_eps02.jpeg"
    },
    'news_5': {
        id: 5,
        title: "Behind The Scene Love Me Pink: Pucelle Web Series",
        description: "<p style='font-size:16px;text-align:justify;'>Hai Dear, apa kabarmu hari ini? Pastinya tetap semangat selalu dong! Dear semua, siapa nih yang selalu setia mantengin Love Me Pink: Pucelle Web Series? </p><p style='font-size:16px;text-align:justify;'>Kisah kasih antara Audi Marissa (@audimarissa)dan Ibrahim Risyad (@ibrhmrsyd)dalam Love Me Pink memang selalu bikin baper dan gemas. Terlebih lagi dengan hadirnya Fachri Muhammad (@fachrimuhammad18), Marcella Kikyanto (@querramellca), Clairine Christabel (@clairineclay) dan Michelle Lee (@michelle777lee) membuat web series yang tayang tiap hari Rabu ini makin asyik dan seru.</p><p style='font-size:16px;text-align:justify;'>Biar lebih seru, yuk intip behind the scene alias dibalik layarnya syuting Love Me Pink: Pucelle Web Series! #BePucelle</p><div style='text-align:center;'><img src='/static/img/news/bts/1.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/2.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/3.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/4.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/5.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/6.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/7.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/8.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/9.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/10.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/><img src='/static/img/news/bts/11.jpg' width='450' style='margin:0 auto;display: inline-block;padding:10px;'/></div>",
        image: "/static/img/news/bts/2.jpg"
    },
    'news_6': {
        id: 6,
        title: "Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 3",
        description: "<img src='/static/img/news/winner_announcement_eps03.jpeg' width='450' style='margin:0 auto;display: block;'/><p style='font-size:16px;text-align:justify;'>Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 3, dan sekarang saatnya pengumuman yang sudah kamu tunggu.</p><p style='font-size:16px;text-align:justify;'>Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 3 yang benar adalah:</p><p style='font-size:20px;text-align:justify;'>“Ibrahim akan marah kepada Querra dan Fachri, lalu berusaha untuk mengejar Pink.”</p><p style='font-size:16px;text-align:justify;'>Anyway, berikut adalah nama-nama pemenang  yang berhak mendapatkan hadiah Voucher MAP senilai masing-masing 250 ribu rupiah dan produk seru dari Pucelle:</p><p>Instagram winner:<ul><li>@misstriii</li><li>@alindaaa29</li><li>@putrikusenja</li><li>@kasan_an</li><li>@viasaj</li></ul></p><p>Youtube winner:<ul><li>Zahwa Shafina</li><li>Chaa Annisa</li><li>Sarah Mellany</li><li>Riska Ktb</li><li>Titis Verdiah</li></ul></p><p style='font-size:16px;text-align:justify;'>Selamat kepada para pemenang!</p><p style='font-size:16px;text-align:justify;'>Jangan lupa untuk konfirmasi data diri kamu (nama lengkap, alamat, dan no tlp) melalui Instagram message ya.</p><p style='font-size:16px;text-align:justify;'>Buat yang belum beruntung, jangan bersedih ya dear, instead of sad, mending ikutan kuis love me pink episode 4 sekarang karena ini adalah kuis terakhir! So, tunggu apalagi? Join kuisnya sekarang juga!</p><p style='font-size:16px;text-align:justify;'>#BePucelle #LoveMePink</p>",
        image: "/static/img/news/winner_announcement_eps03.jpeg"
    },
    'news_7': {
        id: 7,
        title: "Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 4",
        description: "<img src='/static/img/news/winner_announcement_eps04.jpg' width='450' style='margin:0 auto;display: block;'/><p style='font-size:16px;text-align:justify;'>Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 4, dan sekarang saatnya pengumuman yang sudah kamu tunggu.</p><p style='font-size:16px;text-align:justify;'>Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 4 yang benar adalah:</p><p style='font-size:16px;text-align:justify;'>Pink kaget saat mengetahui bahwa yang membuat support di notes untuknya adalah Ibrahim, cowok yang selama ini dia suka.</p><p style='font-size:16px;text-align:justify;'>Anyway, berikut adalah nama-nama pemenang  yang berhak mendapatkan hadiah Voucher MAP senilai masing-masing 250ribu rupiah dan produk seru dari Pucelle:</p><p>Instagram winner:<ul><li>@sania_fahma</li><li>@aufanaily</li><li>@titamntari</li><li>@elfishytika</li><li>@kaynoew</li></ul></p><p>YouTube winner:<ul><li>Ofi Jelita</li><li>Kimmy Aulia</li><li>Giani Septarini</li><li>Lidya Agustin</li><li>Ani Nurhayati</li></ul></p><p style='font-size:16px;text-align:justify;'>Selamat kepada para pemenang!</p><p style='font-size:16px;text-align:justify;'>Jangan lupa untuk konfirmasi data diri kamu (nama lengkap, alamat, dan no tlp) melalui Instagram message ya.</p><p style='font-size:16px;text-align:justify;'>Buat yang belum beruntung, jangan bersedih ya dear, instead of sad, Stay tune terus di social media Pucelle Indonesia karena bakalan ada banyak keseruan lainnya yang bisa kamu dapetin!</p><p style='font-size:16px;text-align:justify;'>All the love</p><p style='font-size:16px;text-align:justify;'>#BePucelle #LoveMePink</p>",
        image: "/static/img/news/winner_announcement_eps04.jpg"
    }
}


export default {
    data: function() {
        return {
            newsDetail: {}
        }
    },
    methods: {
        getNewsDetail: function(idNews) {
            var vm = this
            /* Find data object news by id */
            vm.newsDetail = data_news['news_' + idNews];
        }
    },
    mounted: function() {
        this.getNewsDetail(this.$route.params.idNews)
        $("html, body").css("overflow", "visible")
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
        /*
        var disqus_config = function () {
        this.page.url = 'http://pucelle.id/pucelle-news/detail/1';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'pucelle-news'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        */
        var d = document, s = d.createElement('script');
        s.src = 'https://pucelle.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);

        $(function() {
            $('#scene').hide()
        })
    }
}
</script>

<style scoped>
.tm-content {
    padding-top: 55px;
}

.contain img {
    height: 100%;
    margin-left: 40%;
    margin-right: 40%;
}

.pucelle-news-detail {
    padding-top: 1%;
    padding-bottom: 5%;
}

.news-event-highlight p {
    text-align: justify;
}

.btn-link-share-fb {
    background: #3c5a96;
    color: #fff;
}

.btn-link-copy {
    background: #cc1b6d;
    color: #fff;
}

.news-event-list {
    list-style-type: none;
}

.news-event-list li {
    padding-bottom: 5%;
}

.news-event-list h3 {
    color: #cc1b6d !important;
}

.news-event-list a:hover {
    text-decoration: none;
}

.news-event-list p {
    text-align: justify;
}
</style>
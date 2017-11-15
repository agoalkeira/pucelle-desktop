<template>
    <div class="tm-content">
        <div class="uk-container uk-container-expand uk-padding-large">

            <div class="uk-grid-match uk-child-width-1-1@m" uk-grid>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top uk-text-center">
                            <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
                                <div>
                                    <img src="../../static/img/news/winner_announcement_eps04.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body custom-news-body">
                            <router-link :to="{ name:'news_detail', params: { idNews: 7 }}" style="text-decoration:none;">
                            <h3 class="uk-card-title custom-news-title">Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 4</h3>
                            </router-link>
                            <p style="font-size:16px;text-align:justify;">Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 4, dan sekarang saatnya pengumuman yang sudah kamu tunggu.</p>
                            <p style="font-size:16px;text-align:justify;">Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 4 yang benar adalah:</p>
                            <router-link :to="{ name:'news_detail', params: { idNews: 7 }}" style="font-size:14px;">read more</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <br><br>
            <div id="desktop">
                <div class="uk-grid-medium  uk-child-width-1-2 uk-text-center" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover custom-news-item-grid">

                            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
                                <div class="uk-card-media-right uk-cover-container" style="background-image:url('../../static/img/news/winner_announcement_eps03.jpeg');background-size:cover;background-position:center center;">
                                </div>
                                <div>
                                    <div class="uk-card-body custom-card-body-item-grid">
                                        <h3 class="uk-card-title custom-news-sub-title">Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 3</h3>
                                        <p style="text-align:justify;">Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 3, dan sekarang saatnya pengumuman yang sudah kamu tunggu.</p>
                                        <p style="text-align:justify;">Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 3 yang benar adalah:</p>
                                        <router-link :to="{ name:'news_detail', params: { idNews: 6 }}" style="text-decoration:none;">Read more</router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover custom-news-item-grid">

                            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
                                <div class="uk-card-media-right uk-cover-container" style="background-image:url('../../static/img/news/bts/2.jpg');background-size:cover;background-position:center center;">
                                </div>
                                <div>
                                    <div class="uk-card-body custom-card-body-item-grid">
                                        <h3 class="uk-card-title custom-news-sub-title">Behind The Scene Love Me Pink: Pucelle Web Series</h3>
                                        <p style="text-align:justify;">Hai Dear, apa kabarmu hari ini? Pastinya tetap semangat selalu dong! Dear semua, siapa nih yang selalu setia mantengin Love Me Pink: Pucelle Web Series? </p>
                                        <p style="text-align:justify;">Kisah kasih antara Audi Marissa (@audimarissa)dan Ibrahim Risyad (@ibrhmrsyd) dalam Love Me Pink memang selalu bikin baper dan gemas. </p>
                                        <!--p style="text-align:justify;">Biar lebih seru, yuk intip behind the scene alias dibalik layarnya syuting Love Me Pink: Pucelle Web Series! #BePucelle</p-->
                                        <router-link :to="{ name:'news_detail', params: { idNews: 5 }}" style="text-decoration:none;">Read more</router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover custom-news-item-grid">

                            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
                                <div class="uk-card-media-right uk-cover-container" style="background-image:url('../../static/img/news/winner_announcement_eps02_thumb.jpg');background-size:cover;background-position:center center;">
                                </div>
                                <div>
                                    <div class="uk-card-body custom-card-body-item-grid">
                                        <h3 class="uk-card-title custom-news-sub-title">Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 2</h3>
                                        <p style="text-align:justify;">Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 2, dan sekarang saatnya pengumuman yang sudah kamu tunggu!</p>
                                        <p style="text-align:justify;">Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 2 yang benar adalah:</p>
                                        <router-link :to="{ name:'news_detail', params: { idNews: 4 }}" style="text-decoration:none;">Read more</router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover custom-news-item-grid">

                            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
                                <div class="uk-card-media-right uk-cover-container" style="background-image:url('../../static/img/news/winner_pink_me_thumb.jpg');background-size:cover">
                                </div>
                                <div>
                                    <div class="uk-card-body custom-card-body-item-grid">
                                        <h3 class="uk-card-title custom-news-sub-title">Pucelle #PinkMeUp Winner Announcement</h3>
                                        <p style="text-align:justify;">Terima kasih atas partisipasi kamu dalam #PinkMeUp ya, Dear! Berikut adalah nama-nama pemenang dengan foto dan caption terkeren yang beruntung untuk bertemu langsung hangout bersama idola dan kesempatan untuk makeover senilai jutaan rupiah!</p>
                                        <router-link :to="{ name:'news_detail', params: { idNews: 3 }}" style="text-decoration:none;">Read more</router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover custom-news-item-grid">

                            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
                                <div class="uk-card-media-right uk-cover-container" style="background-image:url('../../static/img/news/winner_announcement_thumb.jpg');background-size:cover">
                                </div>
                                <div>
                                    <div class="uk-card-body custom-card-body-item-grid">
                                        <h3 class="uk-card-title custom-news-sub-title">Pemenang Love Me Pink: Pucelle Web Series Quiz Episode I</h3>
                                        <p style="text-align:justify;">Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Ep 1, dan sekarang saatnya pengumuman yang sudah kamu tunggu. Anyway, berikut adalah nama-nama pemenang  yang berhak mendapatkan hadiah Voucher MAP senilai masing-masing 250ribu rupiah dan product seru dari Pucelle</p>
                                        <router-link :to="{ name:'news_detail', params: { idNews: 2 }}" style="text-decoration:none;">Read more</router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover custom-news-item-grid">

                            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
                                <div class="uk-card-media-right uk-cover-container" style="background-image:url('../../static/img/news/pucelle_x_audi_marissa_thumb.jpg');background-size:cover">
                                </div>
                                <div>
                                    <div class="uk-card-body custom-card-body-item-grid">
                                        <h3 class="uk-card-title custom-news-sub-title">Pucelle X Audi Marissa: Intip keseruan photoshoot Audi Marissa dalam balutan warna pelangi</h3>
                                        <p>Pada waktu yang lalu, Pucelle mengadakan photoshoot session bersama Audi Marissa yang bertempat di salah satu studio foto di bilangan Jakarta Selatan. Kehebohan dan keceriaan yang dipancarkan oleh cewek kelahiran tahun 1995 ini membuat sesi foto yang panjang </p>
                                        <router-link :to="{ name:'news_detail', params: { idNews: 1 }}" style="text-decoration:none;">Read more</router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile">
                <div class="uk-grid-match uk-child-width-1-1@m" uk-grid>

                    <div>
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top uk-text-center">
                                <img src="../../static/img/news/winner_announcement_eps02.jpeg">
                            </div>
                            <div class="uk-card-body custom-news-body">
                                <router-link :to="{ name:'news_detail', params: { idNews: 4 }}" style="font-size:14px;">
                                <h3 class="uk-card-title custom-news-title">Pemenang Love Me Pink: Pucelle Web Series Quiz Episode 2</h3>
                                </router-link>
                                <p style="text-align:justify;">Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Episode 2, dan sekarang saatnya pengumuman yang sudah kamu tunggu!</p>
                                <p style="text-align:justify;">Jawaban untuk kuis Love Me Pink: Pucelle Web Series Episode 2 yang benar adalah:</p>
                                <router-link :to="{ name:'news_detail', params: { idNews: 4 }}" style="font-size:14px;">read more</router-link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="uk-grid-match uk-child-width-1-1@m" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top uk-text-center">
                                <img src="../../static/img/news/winner_pink_me.jpeg">
                            </div>
                            <div class="uk-card-body custom-news-body">
                                <h3 class="uk-card-title custom-news-title">Pucelle #PinkMeUp Winner Announcement</h3>
                                <p style="text-align:justify;">Terima kasih atas partisipasi kamu dalam #PinkMeUp ya, Dear! Berikut adalah nama-nama pemenang dengan foto dan caption terkeren yang beruntung untuk bertemu langsung hangout bersama idola dan kesempatan untuk makeover senilai jutaan rupiah!</p>
                                <router-link :to="{ name:'news_detail', params: { idNews: 3 }}" style="font-size:14px;">read more</router-link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="uk-grid-match uk-child-width-1-1@m" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top uk-text-center">
                                <img src="../../static/img/news/winner_announcement.jpeg">
                            </div>
                            <div class="uk-card-body custom-news-body">
                                <h3 class="uk-card-title custom-news-title">Pemenang Love Me Pink: Pucelle Web Series Quiz Episode I</h3>
                                <p style="text-align:justify;">Hai Dear, Terima Kasih atas partisipasi kamu dalam Love Me Pink Quiz Ep 1, dan sekarang saatnya pengumuman yang sudah kamu tunggu. Anyway, berikut adalah nama-nama pemenang  yang berhak mendapatkan hadiah Voucher MAP senilai masing-masing 250ribu rupiah dan product seru dari Pucelle</p>
                                <router-link :to="{ name:'news_detail', params: { idNews: 2 }}" style="font-size:14px;">read more</router-link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="uk-grid-match uk-child-width-1-1@m" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top uk-text-center">
                                <img src="../../static/img/news/pucelle_x_audi_marissa.jpg">
                            </div>
                            <div class="uk-card-body custom-news-body">
                                <h3 class="uk-card-title custom-news-title">Pucelle X Audi Marissa: Intip keseruan photoshoot Audi Marissa dalam balutan warna pelangi</h3>
                                <p style="text-align:justify;">Pada waktu yang lalu, Pucelle mengadakan photoshoot session bersama Audi Marissa yang bertempat di salah satu studio foto di bilangan Jakarta Selatan. Kehebohan dan keceriaan yang dipancarkan oleh cewek kelahiran tahun 1995 ini membuat sesi foto yang panjang</p>
                                <router-link :to="{ name:'news_detail', params: { idNews: 1 }}" style="font-size:14px;">read more</router-link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!--
    <ul class="uk-pagination">
        <li><router-link :to="{ name:'news_detail', params: { idNews: 1 }}" style="text-decoration:none;"><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</router-link></li>
        <li class="uk-margin-auto-left">
        <router-link :to="{ name:'news_detail', params: { idNews: 1 }}" style="text-decoration:none;">Next <span class="uk-margin-small-left" uk-pagination-next></span></router-link></li>
    </ul>

    -->

        </div>
    </div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')

export default {
    mounted: function() {
        $("html, body").css({ "overflow": "visible", "background-color": "#ffffff" })
        $(function() {
            $('#scene').hide()
        })
    }
}
</script>

<style scoped>
#desktop {
    display: block;
}

#mobile {
    display: none;
}

.custom-news-title {
    font-size: 20px;
    font-weight: bold;
}

.custom-news-sub-title {
    font-size: 14px;
    font-weight: bold;
    text-align: justify;
    margin-bottom: 2px;
}

.custom-news-body {
    padding-top: 0px;
}

.custom-card-body-item-grid {
    padding: 20px 20px;
}

.custom-news-item-grid {
    padding: 0px;
}

.custom-news-item-grid div {
    height: 350px;
}

.custom-news-item-grid p {
    font-size: 13px;
    text-align: justify;
    margin-bottom: 0px;
}

.custom-news-item-grid span {
    padding: 0px;
    margin: 0px;
    font-size: 10px;
    float: left;
}

.custom-news-item-grid a {
    font-size: 11px;
    text-decoration: none;
    float: left;
    margin-top: 5px;
    color: #f1a1a1;
}

@media screen and (max-width: 1026px) {
    #desktop {
        display: none;
    }
    #mobile {
        display: block;
    }
}
</style>
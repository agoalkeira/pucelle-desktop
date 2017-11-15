<template>
    <div id="footer">
        <div id="wrapper" v-if="!responsive">
            <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                <div>
                    <div class="uk-background-default custom-footer-media">

                        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
                            <div class="uk-card uk-card-body custom-footer-media-card">
                                <a href="https://www.facebook.com/PucelleID/" style="width:46px;margin-top:10px !important;">
                                    <img src="../../static/img/icon_facebook.png" width="42">
                                </a>
                                <a href="https://www.instagram.com/pucelleid/" style="width:46px;margin-top:10px !important;">
                                    <img src="../../static/img/icon_instagram.png" width="42">
                                </a>
                                <!--a href="https://www.instagram.com/pucelleid/" uk-icon="icon: instagram"></a-->
                            </div>
                            <div>
                                <div class="uk-card uk-card-body custom-footer-media-card-license">
                                    <p>Pucelle.id</p>
                                    <p>Copyright &copy; 2017.All Right Reserved</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div class="uk-background-muted custom-footer-media-subscribe">
                        <span>Join the Newsletter </span>
                        <form style="display:inline;">
                            <input class="uk-input uk-form-width-medium" id="subscribe" type="text" placeholder="Your Email" />
                            <button class="uk-button uk-button-default">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div class="custom-footer-media-logo">
                        <span class="logo-footer">
                            <router-link to="#">
                                <img class="uk-visible" src="../../static/img/logo-mandom.jpg" alt="">
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id="wrapper" v-if="responsive">
            <div style="width:100%;display:inline-block;margin:0;padding:0;">
                <div style="width:33%;display:inline-block;margin:0;padding:0;">
                    <div style="width:35%;display:inline-block;">
                        <a href="https://www.facebook.com/PucelleID/" style="">
                            <img src="../../static/img/icon_facebook.png" width="14">
                        </a>
                        <a href="https://www.instagram.com/pucelleid/" style=" ">
                            <img src="../../static/img/icon_instagram.png" width="14">
                        </a>
                    </div>
                    <div style="width:40%;display:inline-block;">
                        <p style="font-family:inherit;font-size:3px;text-align:left;">Pucelle.id <br>Copyright &copy; 2017.All Right Reserved</p>
                    </div>
                </div>
                <div style="width:30%;display:inline-block;background: #cae7e5;">
                    <form style="display:inline-block;">
                        <input class="uk-input uk-form-width-small" style="width:50%;height:20px;font-size:5px;" id="subscribe" type="text" placeholder="Your Email">
                        <button class="uk-button" style="width:40%;font-size:5px;background:#c80263;color:#fff;padding:0 ;margin:0;line-height:20px;">Subscribe</button>
                    </form>
                </div>
                <div style="width:30%;display:inline-block;">
                    <img class="uk-visible" src="../../static/img/logo-mandom.jpg" style="height:20px;">
                </div>
            </div>
            <!--div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
                <div class="uk-background-default custom-footer-media">

                <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
                        <div class="uk-card uk-card-body custom-footer-media-card">
                            <a href="https://www.facebook.com/PucelleID/" style="width:46px;margin-top:10px !important;">
                            <img src="../../static/img/icon_facebook.png" width="42">
                            </a>
                            <a href="https://www.instagram.com/pucelleid/" style="width:46px;margin-top:10px !important;">
                            <img src="../../static/img/icon_instagram.png" width="42">
                            </a>
                        </div>
                    <div>
                        <div class="uk-card uk-card-body custom-footer-media-card-license">
                            <p>Pucelle.id</p>
                                <p>Copyright &copy; 2017.All Right Reserved AAA</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
            <div>
                <div class="uk-background-muted custom-footer-media-subscribe">
                    <span>Join the Newsletter </span>
                            <form style="display:inline;">
                                <input class="uk-input uk-form-width-medium" id="subscribe" type="text" placeholder="Your Email" />
                                <button class="uk-button uk-button-default">Subscribe</button>
                            </form>
                </div>
            </div>
            <div>
                <div class="custom-footer-media-logo">
                    <span class="logo-footer">
                        <router-link to="#">
                        <img class="uk-visible" src="../../static/img/logo-mandom.jpg" alt="">
                        </router-link>
                        </span>
                </div>
            </div>
            </div-->
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
/*
import Firebase from 'firebase'
import fbConf from '../helpers/fbConf.js'


var footerInit = Firebase.initializeApp(fbConf.config(),"footerconfig");
*/

export default {
    name: 'footer',
    data: function() {
        return {
            responsive: false
        }
    },
    created: function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            this.responsive = true
        }
        else {
            this.responsive = false
        }
    }
}



</script>

<style scoped>
#footer {
    position: fixed;
    height: 55px;
    display: block;
    width: 100%;
    background: #fff;
    z-index: 9;
    text-align: center;
    color: #4c5053;
    padding: 0px 0 0 0;
    bottom: 0px;
}

.custom-footer p {
    font-size: 10px;
    display: inline;
}

.custom-footer-media {
    padding-top: 0px;
}

.custom-footer-media-card {
    padding-top: 5px;
    padding-right: 0px;
    margin-right: -10%;
}

.custom-footer-media a {
    color: #4f5356;
    padding-right: 20px;
}

.custom-footer-media-card-license {
    padding-top: 10px;
    margin-left: -20px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
}

.custom-footer-media-card-license p {
    text-align: left;
    font-size: 12px;
    margin-bottom: -15px;
}

.custom-footer-media-subscribe {
    padding-top: 10px;
    background: #cae7e5;
    height: 50px;
    width: 90vh;
    margin-left: -10%;
}

.custom-footer-media-subscribe span {
    font-size: 14px;
}

.custom-footer-media-subscribe input[type=text] {
    height: 40px;
    font-size: 12px;
}

.custom-footer-media-subscribe button {
    padding-bottom: 40px;
    height: 30px;
    background: #c90063;
    color: #fff;
    font-size: 14px;
    width: 100px;
    padding-left: 10px;
}

.custom-footer-media-logo {
    padding-top: 5px;
}

.custom-footer-media-logo span {
    padding-top: 0px;
    float: right;
}

.custom-footer-media-logo a {
    padding-right: 80px;
}

.logo-footer img {
    width: 40%;
}

.slideup,
.slidedown {
    max-height: 0;
    overflow-y: hidden;
    -webkit-transition: max-height 0.5s ease-in-out;
    -moz-transition: max-height 0.5s ease-in-out;
    -o-transition: max-height 0.5s ease-in-out;
    transition: max-height 0.5s ease-in-out;
}

.slidedown {
    max-height: 60px;
}




/* Standard laptops ----------- */


/* @media screen and (max-device-width: 1024px){ */

@media (max-width: 1026px) {
    #footer {
        position: fixed;
        height: 55px;
        display: block;
        width: 100%;
        background: #fff;
        z-index: 9;
        text-align: center;
        color: #4c5053;
        padding: 0px 0 0 0;
        bottom: 0px;
    }

    .custom-footer p {
        font-size: 10px;
        display: inline;
    }
    .custom-footer-media {
        padding-top: 0px;
    }
    .custom-footer-media-card {
        padding-top: 10px;
        padding-right: 0px;
        margin-right: -10%;
    }
    .custom-footer-media a {
        color: #4f5356;
        padding-right: 20px;
    }
    .custom-footer-media-card-license {
        padding-top: 10px;
        margin-left: -30px;
        padding-bottom: 0px;
        padding-right: 0px;
        padding-left: 0px;
    }
    .custom-footer-media-card-license p {
        text-align: left;
        font-size: 10px;
        margin-bottom: -15px;
    }
    .custom-footer-media-subscribe {
        padding-top: 10px;
        background: #cae7e5;
        height: 70%;
        width: 140%;
        margin-left: -10%;
    }
    .custom-footer-media-subscribe span {
        font-size: 14px;
    }
    .custom-footer-media-subscribe input[type=text] {
        height: 40px;
        font-size: 12px;
    }
    .custom-footer-media-subscribe button {
        padding-bottom: 40px;
        height: 30px;
        background: #c90063;
        color: #fff;
        font-size: 14px;
        width: 100px;
        padding-left: 10px;
    }
    .custom-footer-media-logo {
        padding-top: 2px;
    }
    .custom-footer-media-logo span {
        padding-top: 2px;
        float: right;
    }
    .custom-footer-media-logo a {
        padding-right: 80px;
    }
    .slideup,
    .slidedown {
        max-height: 0;
        overflow-y: hidden;
        -webkit-transition: max-height 0.5s ease-in-out;
        -moz-transition: max-height 0.5s ease-in-out;
        -o-transition: max-height 0.5s ease-in-out;
        transition: max-height 0.5s ease-in-out;
    }
    .slidedown {
        max-height: 60px;
    }
}

@media screen and (max-device-width: 420px) {
    #footer {
        position: relative;
        height: 55px;
        display: block;
        width: 100%;
        background: #fff;
        z-index: 9;
        text-align: center;
        color: #4c5053;
        padding: 0px 0 0 0;
        bottom: 0px;
    }
}

@media screen and (max-device-width: 320px) {
    #footer {
        position: relative;
        height: 100%;
        display: block;
        width: 100%;
        background: #fff;
        z-index: 9;
        text-align: center;
        color: #4c5053;
        padding: 0px 0 0 0;
        bottom: 0px;
    }
}
</style>
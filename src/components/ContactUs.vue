<template>

<div class="tm-content">

    <div class="uk-container uk-container-expand uk-padding-large mobile-version">       

        <div class="uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
                <div class="uk-card custom-label-contact-us">
                     <legend class="uk-legend">Contact Us</legend>
                </div>
            </div>
        </div>

        <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid style="margin-top:-15px;">
            <div>
                <div class="uk-card uk-card-body">
                    <form id="form_contact_us" class="uk-form form-contact-us" @submit.prevent="addMessage">
                        <fieldset class="uk-fieldset">
                            <div class="uk-margin">
                                <input v-model="contactModels.firstName" class="uk-input uk-form-success" name="firstName" value="Hello" type="text" placeholder="First Name" />
                            </div>
                            <div class="uk-margin">
                                <input class="uk-input uk-form-success" type="text" placeholder="Last Name" />
                            </div>

                            <div class="uk-margin">
                                <input class="uk-input uk-form-success" type="text" placeholder="Email Address" />
                            </div>

                            <div class="uk-margin">
                                <input class="uk-input uk-form-success" type="text" placeholder="Phone Number" />
                            </div>

                            <div class="uk-margin">
                                <textarea class="uk-textarea uk-form-success" rows="5" placeholder="Messages"></textarea>
                            </div>
                            <div class="uk-margin-medium">
                            <button class="uk-button uk-button-default">Submit</button>
                            </div>


                        </fieldset>
                    </form>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-body custom-contact-map" style="text-align:left;">
                    <img src="../../static/img/map.jpg">
                    <h1><span uk-icon="icon: location"></span>PT. Mandom Indonesia Tbk</h1>
                    <p>
                        JL Irian, MM2100 Cibitung Industrial Estate
                    </p>
                    <p>
                        Blok PP, Jatiwangi, Cikarang Barat
                    </p>
                    <p>
                        Bekasi, Jawa Barat 17520
                    </p>
                    <p><span uk-icon="icon: phone"></span>
                        (021) - 298 095 00 
                    </p>
                     <p><span uk-icon="icon: mail"></span>
                        customer-care@mandom.co.id
                    </p>
                </div>
            </div>
        </div>




        
    </div>
</div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
    data(){
        return{
            contactModels: {
                firstName:'',
                lastName:'',
                emailAddress:'',
                phoneNumber:'',
                message:''
            }
        }
    },
    computed:{
        validation:function(){
            return{
                firstName: !!this.contactModels.firstName.trim(),
                lastName: !!this.contactModels.lastName.trim(),
                emailAddress: emailRE.test(this.contactModels.emailAddress)
            }
        },
        isValid: function () {
            var validation = this.validation
            return Object.keys(validation).every(function (key) {
                return validation[key]
            })
        }
    },
    methods:{
        addMessage:function(){}
    },
    mounted:function(){
        
        $("html, body").css("overflow","visible")
        // $("#footer").addClass("slidedown")
        // $("#index").mousemove(function(event){
        //     if(event.clientY > 600){
        //         $("#footer").removeClass("slideup").addClass("slidedown")
        //     }
        //     else{
        //         $("#footer").removeClass("slidedown").addClass("slideup")
        //     }
        // })
        $(function(){
                $('#scene').hide()
            })
    }
}
</script>

<style scoped>
html {
    margin: 0;
    padding: 0;
	overflow:hidden;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
.tm-content{
        background: #ebeeee;
        min-height: 800px;
    }
	nav{
        height: 50px;
    }
    .custom-navbar{
    	background: transparent !important;
    }
    .logo{
    	background: #fff;
    	height:50px;
    }
    .logo img{
        height: 80%;
    }
    .custom-icon{
    	width: 35px;
    	height: 35px;
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
    .custom-icon-divider {
         
         height:50px;
         right:2px;
         margin-top:15px; 
    }
    h1{
    	color: #fff;
    }
    
	.mobile-version{
        padding-top: 100px;
    }

    .custom-label-contact-us legend{
        font-weight: bold;
        color: #cc1b6d;
        font-size: 30px;
    }
    .custom-contact-map{
        text-align: left;
    }
    .custom-contact-map img{
        height: 300px;
    }
    .custom-contact-map h1{
        font-size: 20px;
        font-weight: bold;
        color: #cc1b6d;
        margin-top: 5px;
    }
    .custom-contact-map p{
        padding: 0px;
        margin: 0px;
    }
    .tm-content button{
        background: #cc1b6d;
        color: #fff;
    }



    @media screen and (max-device-height:900px) {
        .tm-content{
            background: #ebeeee;
            min-height: 900px;
        }
    }
    @media screen and (max-device-height:320px) {
        .mobile-version{
            padding-top:100px;
        }
    }
</style>
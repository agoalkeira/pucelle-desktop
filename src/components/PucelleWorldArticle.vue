<template>
<div class="tm-content">
    <div class="uk-container pucelle-news-detail">

    <div uk-grid>
    <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default news-event-highlight">
            <div class="uk-card-media-top">
                <div style="background:#fff;display:inline-block;width:7%;height:auto;position:absolute;top:10%;vertical-align: middle;left:5%;">
                    <!--router-link to="/pucelle-article/" uk-icon="icon: chevron-left" style="padding:25%;" class="uk-icon"></router-link-->
                    </div>
                <img :src="articleDetail.image" style="margin-left: auto;margin-right: auto;display: block;width:100%;">
                <div style="background:#fff;display:inline-block;width:7%;height:auto;position:absolute;top:10%;vertical-align: middle;right:5%;">
                    <!--router-link to="/pucelle-article/" uk-icon="icon: chevron-right" style="padding:25%;" class="uk-icon"></router-link-->
                    </div>
            </div>
            <div class="uk-card-body">
                <p><h3>{{articleDetail.title}}</h3></p>
                <div v-html="articleDetail.content"> 
                </div>
                <div uk-grid>
                    <div>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=pucelle.id" uk-icon="icon: facebook"  class="uk-button uk-button-default btn-link-share-fb" target="_blank">Share</a>
                        </div>
                    <div><router-link to="/pucelle-article/" uk-icon="icon: copy" class="uk-button uk-button-default btn-link-copy">Copy</router-link></div>
                </div>
                <br>
                <br>
                <h3 style="color:#cc1b6d;font-size:18px;">Comments</h3>
                <hr>
                <div id="disqus_thread"></div>
            </div>
        </div>
    </div>
    <div class="uk-width-1-3@m">
        <ul class="news-event-list">
            <li v-for="articles in articlesList">
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img style="width:100%;margin-left:auto;margin-right:auto;display: block;" :src="articles.image">
                    </div>
                    <div class="uk-card-body">
                        <router-link :to="{ name:'article_detail', params: { idArticle: articles.id }}"> <h3 class="uk-card-title">{{articles.title}}</h3></router-link>
                        <p v-html="subStr(articles.content)"></p>
                        <p><router-link :to="{ name:'article_detail', params: { idArticle: articles.id }}">read more</router-link></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
</div>

</div>
</template>

<script>
import jQuery from 'jQuery'
var $ = require('jquery')

var articles = {
    "article_12" : {
        id:12,
        title: "Tips Agar Tetap Fit Saat Musim Hujan",
        content : "<p>Hai Dear! Salah satu hal yang paling bikin bete di musim hujan adalah datangnya hujan yang sering secara tiba-tiba, persis kayak kenangan lama yang muncul di pikiran kita tiba-tiba~ (ups) hihihi.</p><p>Selain itu, cuaca yang seperti ini pun adalah salah satu faktor yang bisa bikin kamu rentan penyakit. Tapi jangan sedih dear, Pucelle punya tips nih biar kamu bisa tetap fit saat musim hujan. Wah, apatuh tipsnya? Let’s check this out!</p><p>1. Selalu sedia payung atau jas hujan</p><p>Selain mengganggu aktivitas kita, kedatangan hujan yang sulit ditebak kehadirannya sering kali menyebabkan munculnya berbagai gangguan kesehatan seperti demam, flu, badan lemas dan lain-lain. Untuk mencegah hal tersebut, maka kamu perlu melindungi dirimu dengan payung saat hujan dan gunakanlah selalu jas hujan atau jaket hangat agar tubuh terlindungi kondisi dingin yang disebabkan oleh hujan.</p><p>2. Istirahat Untuk Tidur Sejenak Di Tangah-tengah Aktivitas</p><p>Saat hujan, kita sering merasa ngantuk karena dinginnya cuaca. Apalagi pas hujannya pas kamu lagi di kelas, jangan sampai rasa ngantuk itu bikin kamu jadi gagal fokus. Sebaiknya kamu siapkan waktu istirahat secara khusus setiap hari untuk tidur sejenak saat jam istirahat. Tidur-tidur colongan gitu.</p><p>3. Jaga pola makan dan minum vitamin</p><p>Menjaga pola makan saat musim hujan itu penting banget loh dear. Usahakan agar kamu menjaga pola makan kamu secara teratur biar ga masuk angin. Jangan lupa juga untuk minum vitamin C secara rutin untuk menjaga daya tahan tubuh, dan membuatmu selalu terlihat segar.</p>",
        image : "../../static/img/articles/tips-agar-tetap-fit-saat-musim-hujan.jpg"
    },
    "article_11" : {
        id:11,
        title: "Kiat-Kiat Tampil Kece Nge-Vlog",
        content : "<p>Hai Dear! Kamu suka InstaStory atau vlogging di YouTube seperti @clairineclay atau @querramellca? Vlogging memang merupakan kegiatan yang belakangan semakin banyak digemari. Ingin tampil cantik di depan kamera saat vlogging? Let’s check this out!</p><br><p><b>Perhatikan Pencahayaan</b></p><p>Cahaya merupakan salah satu faktor yang sangat penting ketika sedang membuat video, terutama video soal beauty tips. Merasa hasil videomu kurang baik padahal posisi duduk sudah tepat? Pake ring light aja dear! Ring light memiliki kegunaan yang sama seperti fungsi flash dari kamera.</p><p>Harganya gak mahal dan dijamin gak bakal nyesel belinya. Dengan adanya benda ini, kamu gak perlu khawatir lagi mukamu gak terlihat jelas dalam video.</p><br><p><b>Pakai Busana yang Tepat</b></p><p>Meski mungkin kamu hanya ingin menampilkan bagian atas tubuh saat vlogging, gak ada salahnya untuk selalu memakai busana yang nyaman dilihat. Lebih baik lagi kalo kamu bisa menyesuaikan busana dengan tema video atau ruangan yang digunakan. Hal ini penting untuk menarik perhatian para penonton video. Tambahkan juga aksesoris sebagai pemanis, seperti anting atau mungkin kalung. Tapi ingat, jangan gunakan aksesoris terlalu banyak hingga terlihat berlebihan.</p><br><p><b>Cari Background yang Baik</b></p><p>Gak cuma kamu yang harus tampil sempurna, pastikan juga kondisi di sekitarmu terlihat mendukung. Misalnya, membuat video seputar tips berolahraga pasti akan semakin menarik jika membuatnya di luar ruangan dan bukan di ruang makan. Atau jika dear sering membuat video di kamar, pastikan kamarmu rapi.</p><br><p><b>Temukan Angle yang Sempurna</b></p><p>Cari angle terbaikmu, karena masing-masing orang punya angle tersendiri. Sering membuat vlog bersama teman? Pastikan wajah mereka juga terlihat jelas dalam frame. Kamera wide dengan sudut pandang lebar hingga 82 derajat sangat direkomendasikan untuk video seputar travel atau bersama genkmu.</p><br><p><b>Jangan Lupa: Interaksi!</b></p><p>Saat ada komentar yang masuk, pastikan dear gak lupa untuk membalas komentar, apalagi jika tanggapannya positif. Jangan pernah malu untuk menyebutkan nama mereka atau tag sehingga terasa lebih intim. #BePucelle</p>",
        image : "../../static/img/articles/kiat-kiat-tampil-kece-nge-vlog.jpg"
    },
    "article_10" : {
        id:10,
        title: "5 Kegiatan Yang Bisa Membuatmu Lebih Pintar dan Produktif",
        content : "<p>Dear, memiliki hobi yang positif dapat membuat hidup lebih seru dan bahagia. Namun, akan lebih baik jika hobi dan kegiatanmu juga bisa membuatmu lebih pintar dan produktif, kan? Yuk cek 5 kegiatan kreatifnya dibawah ini!</p><br><p><b>Bermain Video Game</b></p><p>Ah masa sih main video game bisa bikin lebih pintar? Eits, jangan meremehkan dulu! Main video game dapat meningkatkan fleksibilitas kognitif di kehidupan nyata. Wah, maksudnya gimana tuh? Jadi, dengan kebiasaanmu main game, dear akan lebih mudah untuk mengatasi workflow saat berhadapan dengan masalah dan membuat keputusan dengan cepat lho. Ternyata bermanfaat juga yaa, asalkan kadar nge-games mu jangan berlebihan dan tetap fokus pada sekolah ya dear! Hihihi.</p><br><p><b>Bersepeda</b></p><p>Yup! Olahraga sepeda dipercaya dapat meningkatkan kreativitas dan memori dengan membangun sel-sel baru di bagian otak hipokampus. Bahkan, banyak ahli kesehatan berkata bahwa bersepeda di siang hari bisa meningkatkan produktivitas di malam hari. Karena itu, banyak seniman dan penulis bersepeda untuk mendapat inspirasi.</p><br><p><b>Menyulam</b></p><p>So old banget? Jangan salah lho dear, banyak orang menyulam sambil melakukan kegiatan sehari-hari karena unsur meditatifnya yang menenangkan. Hobi yang tidak memerlukan banyak pengeluaran ini juga akan membuatmu semakin kreatif – plus, hasil karya Anda bisa diberikan sebagai hadiah untuk orang-orang tercinta, misal syal atau sapu tangan untuk ibu dan nenek.</p><br><p><b>Panjat Tebing</b></p><p>Kamu tidak harus pergi ke daerah pegunungan untuk melakukan workout ini. Di sekolah, - sekolah atau kampus yang punya ekskul pecinta alam biasanya punya nih indoor rock climbing, kamu dapat melepaskan stres sekaligus meningkatkan stamina dan keterampilan dalam segi taktik. You&#39;ll feel so much more confident!</p><br><p><b>Membuat Kerajinan Tangan</b></p><p>Membuat kerajinan dengan barang bekas juga seru, lho. Kumpulkan barang-barang yang tidak terpakai di rumah, dan cari inspirasi lewat video tutorial DIY di YouTube, Instagram atau Pinterest. Dear pasti tidak akan menyangka bahwa bisa juga menciptakan banyak kreasi baru! #BePucelle</p>",
        image : "../../static/img/articles/5-kegiatan-yang-bisa-membuatmu-lebih-pintar-dan-produktif.jpg"
    },
    "article_9" : {
        id:9,
        title: "Memilih Parfum Berdasarkan Zodiak",
        content : "<p>Hai dear! Zaman sekarang, parfum sudah menjadi kebutuhan primer bagi sebagian besar kalangan. Secara tidak langsung, parfum adalah alat bagi kita untuk menaikkan tingkat percaya diri. Dear, kamu tau gak sih? Tenyata berdasarkan rasi bintang/zodiak, kita bisa liat loh parfum apa yang cocok buatmu. Penasaran? Let’s check this out!</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Capricorn (Desember 22 – Januari 19)</b><br>Casual, konservatif dan tak suka hal yang terlalu rumit. Capricorn lebih suka hal-hal sederhana yang tak membuat mereka berpikir keras. Bukan berarti mereka kurang smart, capricorn hanya ingin sesuatu hal lebih simple saja sehingga menghadirkan suatu kepuasan dan kebahagiaan yang maksimal. Parfum yang cocok: Parfum beraroma kayu cendana, cyprus, chedar dan wewangian kayu-kayuan.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Aquarius (Januari 20 - Februari 18)</b><br>Aquarius suka menemukan hal-hal baru dan menyukai tantangan. Sangat peduli akan hal-hal yang indah dan memuja seni. Mudah menyelami perasaan lawan bicara namun mereka adalah pelupa. Parfum yang cocok: Parfum beraroma bunga carnation dan aroma segar daun jeruk.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Pisces (Februari 19 - Maret 20)</b><br>Kaya akan imajinasi dan sangat lembut, Pisces adalah orang-orang yang percaya mimpi dan serasa selalu hidup di negeri dongeng. Untuk itu mereka selalu berusaha tampil elegan dan sempurna. Parfum yang cocok:  Parfum beraroma marine, daun cemara dan mint.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Aries (Maret 21 - April 19)</b><br>Aries adalah sosok yang anggun dan selalu mempesona. Selalu tampak bergairah dan bersemangat saat melakukan sesuatu. Kelebihan Aries ada pada bagian bahu dan kaki yang kokoh, karena kamu termasuk karakter yang lincah dan tak bisa diam. Parfum yang cocok: Parfum beraroma mawar, aroma dedaunan segar, musk dan kayu manis.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Taurus (April 20 - Mei 20)</b><br>Taurus adalah sosok wanita yang sangat mencintai sekeliling Anda. Selalu menunjukkan pesona dengan perhatian dan kasih sayang yang besar. Sisi feminine yang kuat, semangat dalam nama cinta membuat Taurus bagaikan kupu-kupu yang selalu menari di atas bunga-bunga bermekaran. Parfum yang cocok: Parfum beraroma magnolia, melati, lilac, cemara dan citrus.</p><p style='text-align-justify;'><img style='float:right;padding-left:10px;' src='/static/img/articles/memilih-parfum-berdasarkan-zodiak-2.jpg' width='360'><b style='font-weight:500;color:inherit !important;'>Gemini (Mei 21 - Juni 20)</b><br>Simbol inspirasi, remaja yang antusias dan energik serta emosional. Sosok yang tak pernah diam dan selalu bergerak mengikuti dinamika ini selalu mempesona lawan jenis dengan keaktifannya. Karena banyak bergerak, maka Gemini membutuhkan aroma yang cukup kuat agar di setiap gerakannya, wewangian yang menyempurnakan karakternya. Parfum yang cocok: Parfum yang beraroma semua bunga musim semi, esperti rerumputan, krisan, bunga narciscus, anggrek dan aroma buah-buahan segar.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Cancer (Juni 21 - Juli 22)</b><br>Cancer adalah sosok yang percaya akan intuisi. Sensitif dan sangat perasa sehingga ia selalu berusaha untuk bersembunyi pada dunia yang mereka buat sendiri untuk melindungi diri. Pada dasarnya Cancer adalah sosok pemalu dan tertutup, untuk itu wewangian soft akan cocok bagi mereka. Parfum yang cocok: Parfum yang beraroma akasia, pohon jeruk, bunga lily dan mint.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Leo (Juli 23 - Agustus 22)</b><br>Bagi Leo, wewangian adalah segalanya. Parfum bagi para Leo membangkitkan semangat sekaligus menopang kepercayaan diri mereka. Leo tak suka memilih wewangian yang soft. Leo ingin selalu tampil menonjol, karena sosok kepemimpinannya membuatnya selalu ingin tampil lebih unggul. Parfum yang cocok: Parfum beraroma mimosa, melon, aprikot, juniper dan cendana.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Virgo (Agustus 23 - September 22)</b><br>Virgo, sosok lembut yang mencerminkan wanita yang sesungguhnya. Namun jangan salah, jika Anda menyakiti sosok Virgo maka ia akan meluapkan emosi yang tak pernah Anda duga. Parfum yang cocok: Parfum beraroma minyak sari mawar, bunga chamomile, dan bunga-bunga liar.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Libra (September 23 - Oktober 22)</b><br>Ramah, memiliki rasa ingin tahu yang besar, lembut dan perayu ulung. Dalam setiap perkataan lembutnya terkandung nada pujian yang membuat lawan bicara selalu meleleh dan terpesona. Parfum yang cocok: Aroma Jane, musk, lily lembah, bunga geranium, jeruk mandarin.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Scorpio (Oktober 23 - November 21)</b><br>Scorpio adalah wanita yang eksentrik, temperamen dan ambisius. Sifat keras kepalanya seakan tak memberikan toleransi terhadap apa yang diinginkannya. Namun di balik itu semua ada suatu sisi yang membuat ia menarik dan pantas untuk dicintai. Kecantikannya begitu alami dan membuat orang penasaran. Parfum yang cocok: Parfum yang beraroma manis, carnation dan wangi lemon.</p><p style='text-align-justify;'><b style='font-weight:500;color:inherit !important;'>Sagitarius (November 22 - Desember 21)</b><br>Sagitarius selalu mendambakan kebebasan, dimana mereka dapat bergerak sesuka hati mereka. Sagitarius cenderung tak terlalu peduli pada apa kata sekitar dan mengapresiasikan diri apa adanya. Pesonanya begitu alami dan inilah kelebihan bagi para Sagitarian. Parfum yang cocok: Parfum beraroma lavender, anggrek, keharuman dan kelembutan vanilla.</p>",
        image : "../../static/img/articles/memilih-parfum-berdasarkan-zodiak.jpg"
    },
     "article_8" : {
        id:8,
        title: "Masker Apel, Cara Ampuh Atasi Jerawat Saat Datang Bulan",
        content : "<p style='text-align:justify;'>Hai Dear, datang bulan selain dapat merubah mood, kulit pun terkadang tidak bisa menghindar dari munculnya jerawat. Dengan adanya jerawat jadi bikin kita gak mood dan bete seharian deh. Hmm, gimana cara mengatasinya? Tenang, Pucelle punya solusinya. Ada beberapa cara yang bisa kita lakukan untuk mencegah munculnya jerawat di saat menstruasi lho. Apa saja? Check it out!</p><img style='float:left;padding-left:10px;' src='/static/img/articles/masker-apel-cara-ampuh-atasi-jerawat-saat-datang-bulan-2.jpg' width='160'><p style='text-align:justify;'>Pertama, tentu kita harus disiplin menjaga kebersihan kulit wajah. Berikan perhatian ekstra pada kulit wajah menjelang saat menstruasi.</p><p style='text-align:justify;'>Kedua, hindari mengonsumsi makanan berminyak, mengandung santan, dan pedas. Asupan makanan yang kita konsumsi sangat berpengaruh pada produksi hormon menjelang saat menstruasi.</p><br><img style='float:left;padding-left:10px;' src='/static/img/articles/masker-apel-cara-ampuh-atasi-jerawat-saat-datang-bulan-3.jpg' width='160'><p style='text-align:justify;'>Ketiga, masker wajah. gunakan masker wajah yang terbuat dari buah apel. Dari manfaatnya, buah apel dipercaya mampu meregenerasi jaringan kulit yang rusak. Buah apel juga dapat mengangkat sel kulit mati.</p><p style='text-align:justify;'>Agar masker buah apel dapat bekerja efektif mengatasi dan mencegah munculnya jerawat saat menstruasi, lebih baik gunakan masker racikan sendiri. Caranya, hancurkan daging buah apel yang telah di cuci bersih. Setelah daging buah apel terasa lembut, campurkan 1 sendok teh madu. Lalu aplikasikan ke kulit wajah yang juga sudah dalam keadaan bersih.</p><p style='text-align:justify;'>Selain menggunakan masker dari buah apel yang telah diolah, dear juga bisa rutin menggunakan cuka sari buah apel. Ritual kecantikan ini bisa dicoba untuk kamu yang tidak ingin “ribet”. Oleskan cuka sari buah apel ke wajah, lalu diamkan selama 20 menit. Setelahnya, bersihkan wajah menggunakan air dingin dan keringkan dengan handuk lembut. Ritual masker ini dapat kita lakukan, minimal 7 hari sebelum menstruasi. Selamat mencoba dear! #BePucelle</p>",
        image : "../../static/img/articles/masker-apel-cara-ampuh-atasi-jerawat-saat-datang-bulan.jpg"
    },
    "article_7" : {
        id:7,
        title: "Rahasia Kulit Wajah Sehat dengan Air Putih",
        content : "<p>Hai dear! Selama ini kebanyakan dari kita mungkin berfikir bahwa minum air putih sebagai minuman utama hanya untuk menghilangkan dahaga dan mencegah dehidrasi pada tubuh. Ternyata ada banyak manfaat lainnya yang bisa didapatkan lho, terutama untuk kulit wajah. Apa aja tuh? Check these out!</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>Mengatasi Kulit Wajah yang Kusam</b><br>Selama ini kita selalu terbiasa menggunakan produk-produk kecantikan untuk mengatasi kulit kusam pada wajah. Padahal dengan mengonsumsi air putih minimal 2 liter per-hari atau setara dengan delapan gelas, dapat membantu mencerahkan kulit wajah, lho. Hal itu karena air putih yang kita konsumsi dapat membantu memperlancar proses regenerasi pada kulit hingga membuat kulit wajah tampak lebih cerah dan sehat.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>Mengatasi Kulit yang Dehidrasi</b><br>Kulit wajahmu mengalami dehidrasi? Mungkin salah satu penyebab utamanya karena kulit kehilangan kelembapannya. Dan bila hal ini sudah terjadi, bisa memicu terjadinya penuaan dini pada kulit. Untuk itu, minum air putih yang cukup dapat membantu melembapkan kulit dan menjadikannya selalu lembab dan kenyal. Hal ini karena 80% tubuh kita terdiri dari air, sehingga peran air pada tubuh kita terutama kulit wajah sangat penting. Jadi jangan ragu untuk minum air putih sebanyak-banyaknya. Jadi, saatnya katakan selamat tinggal kulit dehidrasi.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>Mencegah Terjadinya Penuaan Dini</b><br>Air putih yang biasa kamu konsumsi ternyata bisa mencegah terjadinya penuaan dini, lho. Hal ini terjadi karena penuaan dini biasanya lebih cepat terjadi bila kulit wajah kering dan mengalami dehidrasi. Begitupun sebaliknya, kulit yang terhidrasi dan mendapatkan asupan cairan yang cukup akan terlihat lebih lembab, meningkatkan elastisitas dan sehat.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>Detoksifikasi</b><br>Tubuh kita menyimpan racun dan setiap harinya akan semakin bertambah. Bila tidak segera keluarkan dari dalam tubuh bisa menimbulkan berbagai penyakit. Salah satu cara paling baik untuk menghilangkan racun dalam tubuh adalah dengan minum banyak air putih. Air putih mampu mendetoksifikasi racun-racun yang ada pada tubuh, termasuk racun yang memicu terjadinya penuaan dini. Untuk hasil yang lebih maksimal, Anda juga bisa memasukan beberapa aneka buah segar ke dalam air putih untuk menjadikanya sebagai infused water. Buah-buahan yang direkomendasikan untuk membuat infused water antara lain lemon, strawberry, mentimun, kiwi dan daun mint. Jadi selain mampu menjadikan tubuh sehat, bugar dan kulit pun akan terasa lebih segar. #BePucelle</p>",
        image : "../../static/img/articles/rahasia-kulit-wajah-sehat-dengan-air-putih.jpg"
    },
    
    "article_6" : {
        id:6,
        title: "Ketahui Warna Busana yang Tepat Sesuai dengan Warna Kulit",
        content : "<p style='text-align:justify;'>Dear, kamu suka bingung ga dalam memilih warna yang cocok untuk kamu pakai di kulit kamu? Cukup sulit ya ternyata. Eits, ga usah panik dulu, karena akan ada tips buat kalian semua!</p><p style='text-align:justify;'>Melansir dari laman Who What Wear, berikut ini kamu akan menemukan panduan warna busana yang tepat sesuai warna kulit agar tetap tampil lebih sempurna. Mau tau seperti apa? Check this out!</p><p style='text-align:justify;'>1. Kulit putih<br>Warna yang cocok:<br><img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit.jpg' width='160'><br><br><br><br><br><br><br><br><br><i style='font-size:8px;'>Photo credit: pinterest</i><br>- Hijau Zamrud, warna terbaik untuk kamu yang memiliki kulit berwarna putih pucat dan terang.<img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit-2.jpg' width='160'><br><br><br><br><br><br><br><br><br><br><br><i style='font-size:8px;'>Photo credit: pinterest</i><br>- Biru pastel juga cukup memberikan sentuhan warna yang pigmented untuk kamu yang memiliki kulit warna putih pucat. Padukan dengan warna merah terang untuk memberikan kesan pop color yang fun.<br><img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit-3.png' width='160'><br><br><br><br><br><br><br><br><br><br><i style='font-size:8px;'>Photo credit: misguided.co.uk</i><br>- Camel, warna coklat ini juga dapat memberikan sentuhan kontras pada kulit putih pucat.<br>2. Kulit sawo matang<br><img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit-4.jpg' width='160'><br><br><br><br><br><br><br><br><br><br><br>- Dove Gray atau abu-abu muda merupakan warna yang aman untuk kamu yang memiliki warna kulit sawo matang.<img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit-5.jpg' width='160'><br><br><br><br><br><br><br><br><br><br><br><br>- Neon, karena dapat memberikan tampilan yang lebih eye catchy.<br>3. Kulit gelap<br><img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit-6.jpg' width='160'><br><br><br><br><br><br><br><br><br><br>- Cobalt Blue, warna berani yang sangat kontras dengan warna kulit gelap untuk tampil lebih menawan.<br><img style='float:left;padding-left:10px;' src='/static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit-7.jpg' width='160'><br><br><br><br><br><br><br><br><br>- Merah untuk dapatkan tampilan yang sempurna<br><i style='font-size:8px;'>Sumber: www.liputan6.com - Mestika Safrini Nasution</i></p>",
        image : "../../static/img/articles/ketahui-warna-busana-yang-tepat-sesuai-dengan-warna-kulit.jpg"
    },
    "article_5" : {
        id:5,
        title: "Tips Mencuci Jeans Warna Hitam Agar Tidak Cepat Luntur",
        content : "<p style='text-align:justify;'>Bahan denim atau jeans adalah kain yang sangat dipuja dalam dunia fashion. Fleksibilitasnya membuatnya jadi salah satu item andalan yang wajib tersimpan dalam lemarimu. Walaupun kasual, namun dengan padu padan yang brilian dear semua bisa mengubahnya jadi look mewah. Nah, menemukan celana jeans hitam yang cocok juga bukan tugas yang mudah, sehingga waktu menemukannya sebaiknya rawat ia baik- baik dan jangan sampai ia berubah warna. Bagaimana caranya supaya serat dan warna tidak memudar saat dicuci? Rawatlah seperti ini, dear!</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>1. Pre-treat jeans kamu dengan secangkir cuka dan satu sendok teh garam</b><br>Setelah membeli celana jeans hitam baru, kunci warnanya dengan cara merendamnya sekitar setengah jam dalam air dingin yang dicampur secangkir isi cuka putih dan satu sendok teh garam. Cuci dan jemur dengan cara digantung hingga kering. Perawatan ini dapat mencegah jeansmu luntur saat kedua kali dicuci.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>2. Cuci bagian dalam</b> <br>Sebelum memasukkan celana jeans ke dalam mesin cuci, balik dulu bagian dalam menjadi bagian luar untuk mencegah kerusakan serta kain. Ujung jeans yang tanpa lipatan di bagian kaki bisa terancam keindahannya kalau tidak dicuci terbalik, dan ini akan mempengaruhi warna jeans kamu.</p><p style='text-align:justify;'><img style='float:right;padding-left:10px;' src='/static/img/articles/fashion-tips-mencuci-jeans-warna-hitam-2.jpg' width='360'><b style='font-weight:500;color:inherit !important;'>3. Cuci dengan air dingin</b><br>Pilih suhu air paling dingin saat mencuci jeans warna gelap. Karena suhu air yang panas dapat memudarkan pewarna jeans lebih cepat. Bukan hanya proses mencuci saja, pastikan saat membilasnya pun setel dengan suhu yang dingin juga.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>4. Cuci dengan Putaran Lembut</b><br>Putaran yang singkat namun lambat membuat celana jeans kamu tidak tersiksa dalam mesin cuci. Jangan taruh jeans dalam bahaya dengan putaran cepat karena bisa merusak serat kainnya.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>5. Cucilah dengan warna senada</b><br>Selain memisahkan warna terang dan gelapnya, sangat penting untuk menghindari kombinasi warna jeans hitam dengan serat kain berwarna beda. Kandungan serat dari warna yang tidak sesuai, bisa membuatnya menempel dalam jeans hitam. Alhasil, jeans hitam jadi terlihat kusam dan pudar warnanya.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>6. Gunakan deterjen khusus</b><br>Khususnya untuk pakaian dengan kain gelap. Tapi jika tidak ada, gunakan deterjen dalam jumlah sedikit saat mencucinya. Cara paling baiknya adalah gunakan deterjen cair untuk mencegah partikel tidak larut menempel di pakaian gelap, yang dapat membuat warna memudar.</p><p style='text-align:justify;'><b style='font-weight:500;color:inherit !important;'>7. Air Dry</b><br>Setelah dibilas, peras jeansmu secukupnya untuk menghilangkan kelebihan air lalu gantung pada jemuran hingga mengering. Ini juga membantu mempertahankan bentuk jeans. <b>#BePucelle</b></p>",
        image : "../../static/img/articles/fashion-tips-mencuci-jeans-warna-hitam.jpg"
    },
    "article_4" : {
        id:4,
        title: "Rutinitas yang Perlu Dilakukan Sebelum Tidur Agar Rambut Sehat",
        content : "Hai, Dear! Pernah ngalamin kebetean maksimal gara-gara rambut lepek, kusam, kering disaat saat penting? Pasti gak enak banget ya, jadi bikin tingkat kepercayaan diri kita turun deh. No worries! Jangan sedih dulu, ada tips nih supaya rambut kamu tetap sehat dan cantik. Caranya? Gampang banget! Simak tipsnya dibawah ini. <br/><br/>Pijat Kulit Kepala Sebelum Tidur<br/>Coba deh pijat-pijat kulit kepala kamu secara perlahan sebelum tidur selama lima menit. Cara ini dapat membantu pertumbuhan rambut supaya lebih subur.<br/><br/>Pakai Minyak Zaitun<br/>Bagi kamu yang punya masalah rambut kering, jangan khawatir! Kalau kamu mengoleskan area kepala dengan minyak zaitun secukupnya sebelum tidur, hal ini dapat membantu bikin rambut kamu jadi lembab tanpa membuatnya lepek. Nutrisi yang terdapat di dalam minyak zaitun akan meresap maksimal ke rambut hingga kulit kepala selama kita tidur.<br/><br/>Menyisir Rambut Sebelum Tidur<br/>Pilihlah sisir bergigi regang untuk menyisir rambut kamu setiap malam sebelum tidur. Cara ini dapat membantu mendistribusikan minyak alami dari kulit kepala ke seluruh helai rambut. FYI, minyak tersebut bermanfaat sebagai pelembab alami rambut.<br/><br/>Tidur yang Cukup Tidur adalah obat paling manjur untuk menjaga kesehatan, termasuk kesehatan rambut. Tidurlah seenggaknya delapan jam setiap harinya untuk menjaga rambut hingga kulit dan mood kamu.Nah gimana dear tipsnya? Semoga berguna dan selamat mencoba!<br/><br/> ",
        image : "../../static/img/articles/beauty-tips.jpg"
    },
    "article_2" : {
        id:2,
        title : "Millennial Pink, Warna Hits Kekinian Favorit Sejuta Umat",
        content : "Disebut dengan nama kolektif millennial pink atau tumblr pink (yup dear, that app tumblr!), tren ini adalah sekelompok warna yang mencakup peach muda, dusty rose, aprikot pucat, dan salmon.Warna ini berasal dari Rose Quartz, salah satu warna dalam tren Pantone 2016. Namun, berbeda dengan saudaranya Serenity yang berwarna biru muda, Rose Quartz perlahan-lahan berevolusi menjadi millenial pink merambah keluar dari dunia mode.<br/><br/>Sekarang ini, kalian bisa menemukan warna millennial pink di mana saja, mulai dari outfit di clothing store yang bisa kamu temui di Mall, bahkan para seleb juga sudah mengikuti tren millennial ini loh dear, salah satunya adalah Rihanna dan Gigi Hadid. Gak cuma kaum hawa, cowok cowok keren juga sudah banyak yang pakai warna ini untuk outfitnya, seperti Justin Bieber dan Zayn Malik.<br/><br/>Kenapa sih warna millennial pink ini bisa hits banget sampai jadi tren dunia? Apa yang membedakan dengan warna pink yang sebelumnya?<br/><br/>Dilansir dari majalah Esquire, warna millennial pink lebih terlihat kalem dan umum dari warna pink sebelumnya yang pernah kamu lihat. Singkat katanya, warna millennial pink ini adalah warna pink rona hangat, tanpa ada sentuhan warna biru, seperti pink sebelumnya.<br/><br/>Terus gimana nih, padu padan warna millennial pink untuk outfit kamu?<br/><br/>Well dear, buat kamu yang lebih memilih colorful, bisa mix n match dengan warna-warna pastel seperti dusty yellow, baby blue, atau hijau mint. Contohnya seperti Audi Marissa ini, dear.<br/><br/>Buat kamu yang lebih memilih simple tapi tetap bold, warna hitam cocok banget nih buat padu padannya.",
        image : "../../static/img/articles/fashion-tips-tren-warna-millennial-pink.jpg"
    },
     "article_3" : {
        id:3,
        title : "Everything Rainbow, Makanan yang bakal disukai oleh Para Gemini",
        content : "Berkebalikan dengan orang yang berzodiak Taurus, orang Gemini sangat mudahbosan dengan makanan yang itu-itu aja. Biasanya, orang yang berzodiak Gemini nggak punya makanan kesukaan tertentu karena Gemini adalah sosok yang selalu mencari sesuatu yang baru. Selain itu, orang berzodiak Gemini juga memiliki porsi makan yang besar baik itu makan siang ataupun makan malam. Gemini juga sangat suka makanan yang kreatif dan unik.Sesuai dengan karakternya yang ceria, dinamis, lincah, dan selalu mencari hal-hal unik dan baru, makanan yang penuh warna dan inovatif akan selalu menjadi favorit para Gemini termasuk makanan atau minuman dengan warna-warna rainbow gitu,dear, dan kali ini Pucelle mau rekomendasiin jenis makanan dan minuman“berpelangi” apa yang harus kamu cobain. Check this out!<br/><br/>1. Rainbow Ice Cream <br/>Siapa yang gak kenal dessert yang satu ini? Pastinya kamu tau dong, dear? Yes, it’sice cream! Tapi bagi para Gemini, es krim dengan packaging rainbow yang warna-warni gini akan lebih menarik untuk dimakan dibandingkan dengan es-krim es-krim yang sudah ada sebelumnya.<br/><br/>2. Cotton Candy Rainbow<br/>Manis, tekstur yang unik, penuh warna dan mudah untuk dimakan, gulali sudah pasti jadi favorit para Gemini. Setuju gak ni, dear Geminian? Hehe.<br/><br/>3.Rainbow Pizza Buat Gemini yang lebih suka savory food, Pizza juga bisa lho dijadikan rainbow! Biar lebih sehat, topping warna-warninya bisa kamu dapatkan dari sayur-sayuran lho,dear. Warna merah seminya bisa juga kamu dapatkan dari pepperoni.<br/><br/>",
        image : "../../static/img/articles/zodiak-tips-everything-rainbow-ice-cream.jpg"
     },
     "article_1" : {
         id:1,
         title : "5 Alasan Kenapa Berteman dengan Taurus akan Membuat Harimu Jadi Lebih Indah",
         content : "1. Pertama, Taurus adalah teman yang bisa diandalkan.Taurus tidak akan menolak jika ia melihat temannya membutuhkan pertolongan. Dalam situasi apapun, kamu bisa percaya dengan temanmu yang Taurus untuk selalu ada untukmu. Mereka juga teman yang cocok untuk dijadikan tempat curhatan.<br><br>2. Taurus punya hati yang besar dan suka berbagi dengan sesama.<br><br>Taurus sangat menjunjung tinggi kekeluargaan dan persahabatan. Mereka tidak akan tanggung-tanggung dalam memberi dan berbagi kasih. Sebaliknya, mereka juga sangat menyukai orang-orang yang tidak tanggung-tanggung dalam menyayangi mereka. Intinya, Taurus adalah mereka yang suka berbagi kasih.<br><br>3. Mereka juga lah orang yang setia. Baik sebagai teman ataupun pacar.<br><br>Jika berteman atau pacaran dengan seorang Taurus, kamu bisa percaya kalau mereka akan setia padamu. Walaupun akhirnya nanti kalian harus terpisah dan menjauh, Taurus tidak akan lupa padamu. Ia akan terus mencari tahu akan kabarmu dan mendengarkan semua cerita-ceritamu.<br>4. Mereka easy going dan suka berkumpul.<br><br>Makin banyak makin seru, mungkin itulah salah satu prinsip hidup Taurus. Mereka bisa hidup mandiri, mereka cukup kuat, kok. Namun mereka lebih suka berada di sekitar orang lain. Mereka suka keramaian dan cepat bosan dengan suasana sepi.<br><br>5. Taurus adalah orang yang suportif, selalu ingin menyemangati orang-orang di sekitarnya. Sebagai kawan, pacar, atau keluarga, pasti nggak rugi punya kenalan seorang Taurus.<br><br>Taurus tidak hanya pantang menyerah, ia juga tidak ingin orang-orang yang disayanginya mudah menyerah juga. Karena itu ia akan selalu suportif dan menyemangati teman-temannya untuk tidak menyerah dalam menggapai mimpi mereka.",
         image : "../../static/img/articles/zodiak-taurus.jpg"
     }
}

export default {
    data:function(){
        return{
            articleDetail:{},
            articlesList:''
        }
    },
    methods:{
        getArticleDetail:function(idArticle){
            var vm = this
            /* Find data object article by id */
            vm.articleDetail = articles['article_' + idArticle];
            var filterObj = delete articles['article_' + idArticle]
            vm.articlesList = articles
        },
        subStr:function(str){
            return str.substring(0, 100);
        }
    },
    created:function(){
        $("html, body").css({"overflow":"visible","background-color":"#ffffff"})
        
        $(function(){
                $('#scene').hide()
            })
        this.getArticleDetail(this.$route.params.idArticle)
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
        
        var disqus_config = function () {
        this.page.url = 'http://pucelle.id/pucelle-article/detail/'+this.$route.params.idArticle;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'pucelle'+this.$route.params.idArticle; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        
        var d = document, s = d.createElement('script');
        s.src = 'https://pucelle.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }
}
</script>

<style scoped>
.pucelle-news-detail{
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .news-event-highlight p{
        text-align: justify;
    }
    .btn-link-share-fb{
        background: #3c5a96;
        color: #fff;
    }
    .btn-link-copy{
        background: #cc1b6d;
        color: #fff;
    }
    .news-event-list{
        list-style-type: none;
    }
    .news-event-list li{
        padding-bottom: 5%;
    }
    .news-event-list h3{
        color: #cc1b6d !important;
    }
    .news-event-list a:hover{
        text-decoration: none;
    }
    .news-event-list p{
        text-align: justify;
    }
</style>
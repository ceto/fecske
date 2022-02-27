import $ from 'jquery';
import whatInput from 'what-input';
import 'slick-carousel';
import AOS from 'aos';
import YTPlayer from 'yt-player';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

AOS.init({

});


const $cardswiper = $('.cardswiper');
$cardswiper
    .on("init", function (event, slick) {
        Foundation.reInit('equalizer');
    })
    .slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        // adaptiveHeight:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]

});

var player = new YTPlayer('#themodalplayer', {
    // controls: false,
    modestBranding: true,
    related: false
})

// player.setVolume(100)

// player.on('playing', () => {
//   console.log(player.getDuration()) // => 351.521
// })

var $thevideomodal = new Foundation.Reveal($('#thevideomodal'), {
    animationIn: 'fade-in fast',
    animationOut: 'fade-out fast',
    fullScreen: true
});

$('#thevideomodal').on('closed.zf.reveal', function() {
    player.stop();
});

$('[data-youtubemodal]').on('click', function(e){
    var $this=$(this);
    player.load($this.attr('data-youtubemodal'), 'start');
    $thevideomodal.open();

});

$('.dropdown').on('click', function(event){
    event.preventDefault();
});
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';



$(document).foundation();

$(".marketing-site-hero .button").click(function() {
    $('html,body').animate({
        scrollTop: $(".grid-container").offset().top},
        'slow');
});






  

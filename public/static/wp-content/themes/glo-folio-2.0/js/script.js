jQuery(document).ready(function () {

    // INNIT THUMB SLIDER ----------------------------------

    jQuery('#top').carousel('#a-prev', '#a-nxt');
    jQuery('#bottom').carousel('#a-prev2', '#a-nxt2');

    // SEARCH TEXT PLACEHOLDER TEXT ----------------------------------

    searchWatermark('#keyword');

    // GLO LOGO UX ENCHANCEMENT ----------------------------------   
    $("#a-glo-logo").hover(function () {
        $(this).addClass("hover").stop().animate({
            backgroundPosition: "(-777px 0)"
        }, 600, 'easeInOutExpo');
    }, function () {
        $(this).removeClass("hover").stop().animate({
            backgroundPosition: "(0 0)"
        }, 1000, 'easeInOutExpo');
    });

    // FADE BG TO EMPHASISE SLIDER ----------------------------------  
    $(".d-thmb-slidr").hover(function () {
        $("#d-msk").addClass("hover").stop().css({
            'z-index': '6'
        }).animate({
            opacity: '1'
        }, 900, 'easeInOutExpo');
    }, function () {
        $("#d-msk").addClass("hover").stop().animate({
            opacity: '0'
        }, 300, setZ);
    });

    function setZ() {
        $("#d-msk").css({
            'z-index': '0'
        });
    }

    // Skills Graph Hover UX ----------------------------------  
    $("#sp-sklls-chrt a em").css({'opacity': '0'});
    $("#sp-sklls-chrt a").hover(function () {
        $(this).find('em').stop().animate({
            opacity: '1'
        }, 500);
    }, function () {
        $(this).find('em').stop().animate({
            opacity: '0'
        }, 500);
    });

    $('.d-thmb-slidr li').click(function () {
        if ($(this).find('a').hasClass('on')) {} else {
            $('.on').removeClass('on').stop().animate({
                backgroundPosition: "(0 0)"
            }, 500, 'easeInOutExpo');
            $(this).find('span').stop().animate({
                left: '-100px'
            }, 500, 'easeInOutExpo');
            $(this).find('a').addClass('on')
        }
        return false;
    });

    // THUMB SLIDER UI ENHANCEMENT ----------------------------------  
    $(".d-thmb-slidr li").hover(function () {

        if ($(this).find('a').hasClass('on')) {

        } else {

            $(this).find('a').stop().animate({
                backgroundPosition: "(-151px 0)"
            }, 400, 'easeInOutExpo');

            $(this).find('span').stop().delay(600).animate({
               left: '0px'
            }, 400, 'easeInOutExpo');

        }

    }, function () {

        if ($(this).find('a').hasClass('on')) {

        } else {

            $(this).find('a').stop().animate({
                backgroundPosition: "(0 0)"
            }, 500, 'easeInOutExpo');

            $(this).find('span').stop().animate({
                left: '-100px'
            }, 500, 'easeInOutExpo');

        }

    });

    //  CLICK LOAD FUNCTIONS ------------------------------------------------
    $('.li-afw').click(function () {
        frogwatch()
    });
    $('.li-dow').click(function () {
        deptWater()
    });
    $('.li-sse').click(function () {
        sunset()
    });
    $('.li-iap2').click(function () {
        thousandWords()
    });
    $('.li-bri').click(function () {
        brierty()
    });
    $('.li-mag').click(function () {
        milne()
    });
    $('.li-jcc').click(function () {
        johnCurtin()
    });
    $('.li-mak').click(function () {
        makWater()
    });
    $('.li-smrc').click(function () {
        air()
    });
    $('.li-pc').click(function () {
        cactus();
    });
    $('.li-reg').click(function () {
		regines();
    });
    $('.li-rot').click(function () {
		rotary();
    });
    $('.li-sauda').click(function () {
		sauda();
    });
    $('.li-ptv3').click(function () {
		ptv3();
    });
    $('.li-ptios').click(function () {
		ptios();
    });
    $('.li-shtb').click(function () {
		shtb();
    });			

    getRandom();

    $('#a-cycle').click(function () {
        getRandom();
        return false;
    });

    // Folio Filter navigaiton --------------- 
    $('#portfolio-filter .all a').addClass('active');

    // Folio Filter Hover FX --------------- 
    $(".pf-item a").hover(function () {
        $(this).find('span').stop().animate({
            left: '0'
        }, 400, 'easeInOutExpo');
        $(this).find('img').stop().animate({
            opacity: "0.5"
        }, 600);
    }, function () {
        $(this).find('span').stop().animate({
           left: '-105px'
        }, 400, 'easeInOutExpo');
        $(this).find('img').stop().animate({
            opacity: "1.0"
        }, 600, 'easeInOutExpo');
    });

    var rstWdth = "-60px";
    var hvrWdth = "-9px";
    $('#portfolio-filter > li').mouseover(function () {
        if (!$(this).find('a').hasClass('active')) {
            $(this).find('a').stop().animate({
                marginLeft: hvrWdth
            }, 200);
        }
    }).mouseout(function () {
        if (!$(this).find('a').hasClass('active')) {
            $(this).find('a').stop().animate({
                marginLeft: rstWdth
            }, 200);
        }
    });

    $('#portfolio-filter a').click(function () {
		
		if($(this).hasClass('active')) {
		
			// do nothing
		
		} else {
			
			var type = $(this).attr('href').replace('#', '');
			var rstWdth = "-60px";
			var hvrWdth = "-9px";
			
			if (type == 'all') {
				$('#portfolio-list li').animate({
					width: 'show',
					opacity: 'show'
				}, 1000, 'easeInOutExpo');
			
			} else {
				$('#portfolio-list li:not(.' + type + ')').animate({
					width: 'hide',
					opacity: 'hide'
				}, 1000, 'easeInOutExpo');
				$('#portfolio-list li.' + type).animate({
					width: 'show',
					opacity: 'show'
				}, 1000, 'easeInOutExpo');
			}
			
			$('.active').animate({ marginLeft: rstWdth }, 200);
			
			$('.active').removeClass('active');
			
			$(this).addClass('active');
			
			
			window.setTimeout(function () {
				$('#rght-col').height($('#d-kng-cntnr .d-cntnr').height());
				$('html, body').animate({
					scrollTop: 0
				}, "slow");
			}, 1001, 'easeInOutExpo');
			
			return false;			
			
		}       
		
    });

    // SETUP VID SWAP FOR FOLIO MOTION PROJECTS ---------------
    var cncLrge = "/wp-content/themes/glo-folio-2.0/folio-vids/cnc.html";
    var sseLrge = "/wp-content/themes/glo-folio-2.0/folio-vids/sse.html";
    var fcLrge = "/wp-content/themes/glo-folio-2.0/folio-vids/freckle.html";
    var vidAjax = $('#d-mn-img')

    $('#vid-swp-cnc').click(function () {
        vidAjax.html(ajax_load).load(cncLrge);
        return false;
    });

    $('#vid-swp-sse').click(function () {
        vidAjax.html(ajax_load).load(sseLrge);
        return false;
    });

    $('#vid-swp-fc').click(function () {
        vidAjax.html(ajax_load).load(fcLrge);
        return false;
    });

    // Scroll Follow Code --------------------------------------
    if (document.body.className.indexOf('page-id-10') !== -1) {
        var offset = $("#portfolio-filter").offset();
        var topPadding = 40;
        $(window).scroll(function () {
            if ($(window).scrollTop() > offset.top) {
                $("#portfolio-filter").stop().animate({

                    marginTop: $(window).scrollTop() - offset.top + topPadding
                });
            } else {
                $("#portfolio-filter").stop().animate({
                    marginTop: 0
                });
            };
        });
    }

    $("a[href='#top']").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    // Innit Portfolio item page Image slider ------------------------ 
    $('#ul-pf-itm-slidr').aviaSlider({
        blockSize: {
            height: 130,
            width: 150
        },
        display: 'random',
        transition: 'slide',
        betweenBlockDelay: 70,
        animationSpeed: 500,
        switchMovement: true,
        slideControlls: 'items',
        appendControlls: '#ul-pf-itm-slidr'
    });
	
	
	// --------------------
	// ********************
	// Fixes needed for the layout to render properly (should try to get this working without JS sometime) :P --------------------------------------------------
	
    // FIX alignment of Footer IceShelf on Page Load ----------------------------------   
    var f = $('#s-footr-top');
    var w = f.width();
    var e = 200;
    f.css("background-position", (w + e) + "px bottom"); // Needs to be w+=200 to work properly....
    
	// FIX alignment of Thumb Slider Next Button ----------------------------------   
    var bot = $('#bottom');
    var bw = bot.width();
    var xtr = 80;
    $('#d-thmb-slidrs #a-nxt2').css("margin-left", (bw + xtr) + "px"); // Needs to be w+=80 to work properly....
	
	// set height of #inflow-intro-substitute (on all pages) ------- 
    var inflow = $('#inflow-intro-substitute');
	var outflow = $('#s-intro');
    var outflowWidth = outflow.outerHeight();
    inflow.css("height", outflowWidth + "px");
	
    // FIX height of green bar on right side ----------------------------------   
    var asideHeight = $('#d-kng-cntnr .d-cntnr').outerHeight();
	// console.log(asideHeight);
    $('#rght-col').height(asideHeight);	
	

}); // Close Document Ready Call ---------------------------------------------------------------------


// AJAX load Main Slider Content ---------------------------------------------
$.ajaxSetup({
    cache: true
});

var ajax_load = "<img style='padding: 133px 0 0 246px' src='/wp-content/themes/glo-folio-2.0/images/preload.gif' alt='loading...' />";

//  Config DATA as vars
var afw = "/wp-content/themes/glo-folio-2.0/slidrs/afw.html";
var sse = "/wp-content/themes/glo-folio-2.0/slidrs/sse.html";
var dow = "/wp-content/themes/glo-folio-2.0/slidrs/dow.html";
var reg = "/wp-content/themes/glo-folio-2.0/slidrs/reg.html";
var bri = "/wp-content/themes/glo-folio-2.0/slidrs/bri.html";
var iap2 = "/wp-content/themes/glo-folio-2.0/slidrs/iap2.html";
var mag = "/wp-content/themes/glo-folio-2.0/slidrs/mag.html";
var salaam = "/wp-content/themes/glo-folio-2.0/slidrs/salaam.html";
var jcc = "/wp-content/themes/glo-folio-2.0/slidrs/jcc.html";
var mak = "/wp-content/themes/glo-folio-2.0/slidrs/mak.html";
var smrc = "/wp-content/themes/glo-folio-2.0/slidrs/smrc.html";
var pc = "/wp-content/themes/glo-folio-2.0/slidrs/pc.html";
var jazzmin = "/wp-content/themes/glo-folio-2.0/slidrs/sauda.html";

var ptiosBanner = "/wp-content/themes/glo-folio-2.0/slidrs/ptios.html";
var ptv3Banner = "/wp-content/themes/glo-folio-2.0/slidrs/ptv3.html";
var shtbBanner = "/wp-content/themes/glo-folio-2.0/slidrs/shtb.html";

var mnFt = $('#s-main-featr');

// LOAD FUNCTIONS ----------------------------------------------------------------

function cactus() {
    mnFt.html(ajax_load).load(pc);
    $('.li-pc').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function thousandWords() {
    mnFt.html(ajax_load).load(iap2);
    $('.li-iap2').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function brierty() {
    mnFt.html(ajax_load).load(bri);
    $('.li-bri').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function milne() {
    mnFt.html(ajax_load).load(mag);
    $('.li-mag').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function makWater() {
    mnFt.html(ajax_load).load(mak);
    $('.li-mak').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function johnCurtin() {
    mnFt.html(ajax_load).load(jcc);
    $('.li-jcc').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function air() {
    mnFt.html(ajax_load).load(smrc);
    $('.li-smrc').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function deptWater() {
    mnFt.html(ajax_load).load(dow);
    $('.li-dow').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function frogwatch() {
    mnFt.html(ajax_load).load(afw);
    $('.li-afw').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function sunset() {
    mnFt.html(ajax_load).load(sse);
    $('.li-sse').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function regines() {
    mnFt.html(ajax_load).load(reg);
    $('.li-reg').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false; 
}
function rotary() {
    mnFt.html(ajax_load).load(salaam);
    $('.li-rot').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false;
}
function sauda() {
    mnFt.html(ajax_load).load(jazzmin);
    $('.li-sauda').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false; 
}


function ptios() {
    mnFt.html(ajax_load).load(ptiosBanner);
    $('.li-ptios').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false; 
}
function ptv3() {
    mnFt.html(ajax_load).load(ptv3Banner);
    $('.li-ptv3').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false; 
}
function shtb() {
    mnFt.html(ajax_load).load(shtbBanner);
    $('.li-shtb').find('a').addClass('on').stop().animate({ backgroundPosition: "(-151px 0)"}, 400, 'easeInOutExpo');
    return false; 
}




// RANDOM Banners as an Array -------------------------------------------


function rand(n) {
    return (Math.floor(Math.random() * n + 1));
}

var randomBnnr = new Array();
randomBnnr[0] = sunset
randomBnnr[1] = frogwatch
randomBnnr[2] = deptWater
randomBnnr[3] = air
randomBnnr[4] = johnCurtin
randomBnnr[5] = makWater
randomBnnr[6] = milne
randomBnnr[7] = ptv3
randomBnnr[8] = ptios
randomBnnr[9] = shtb

// Pick a random image from the list,
// and set the image source to that image upon page load

function getRandom() {
	$(".d-thmb-slidr .on").removeClass('on').stop().animate({ backgroundPosition: "(0 0)"}, 400, 'easeInOutExpo');
    $(randomBnnr[rand(10) - 1]);
}

//sunset();




$(window).load(function () {
	

});


//The auto-scrolling function


function slide() {
    $('#a-nxt').click();
}
//Launch the scroll every 4 seconds
var intervalId = window.setInterval(slide, 3000);

function slideBottom() {
    $('#a-nxt2').click();
}
//Launch the scroll every 6.5 seconds
var intervalId = window.setInterval(slideBottom, 4500);

//On user click deactivate auto-scrolling
$('#a-nxt, #a-nxt2').click(

function (event) {
    if (event.originalEvent) {
        window.clearInterval(intervalId);
    }
});

// SEARCH TEXT PLACEHOLDER TEXT ----------------------------------  


function searchWatermark(sBox) {
    $(sBox).focus(function () {
        $(this).filter(function () {
            return $(this).val() == '' || $(this).val() == 'keyword search';
        }).val('');
    });
    $(sBox).blur(function () {
        $(this).filter(function () {
            return $(this).val() == '';
        }).val('keyword search');
    });
}


// FIX alignment of Footer IceShelf on Window Resize + right col aside height + alignment of Thumb Slider Next Button ------------------------------------
$(window).resize(function () {
    var f = $('#s-footr-top');
    var w = f.width();
    var e = 200;
    f.css("background-position", (w + e) + "px bottom"); // Needs to be w+=200 to work properly....
    var h = $('#d-kng-cntnr .d-cntnr').height();
    $('#rght-col').height(h);
    var bot = $('#bottom');
    var bw = bot.width();
    var xtr = 80;
    $('#d-thmb-slidrs #a-nxt2').css("margin-left", (bw + xtr) + "px");
});

// LOAD google web fonts ------------------------------------------------------------------------------------------------------------
WebFontConfig = {
    google: {
        families: ['Vollkorn:regular,bold', 'Droid Sans:regular,bold']
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
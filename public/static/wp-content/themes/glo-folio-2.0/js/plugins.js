
// remap jQuery to $
(function($){

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;

	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// INFINITE SLIDER PLUGIN
/**
 * @author Stéphane Roucheray 
 * @extends jquery
 */
jQuery.fn.carousel = function(previous, next, options){
	var sliderList = jQuery(this).children()[0];
	
	if (sliderList) {
		var increment = jQuery(sliderList).children().outerWidth("true"),
		elmnts = jQuery(sliderList).children(),
		numElmts = elmnts.length,
		sizeFirstElmnt = increment,
		shownInViewport = Math.round(jQuery(this).width() / sizeFirstElmnt),
		firstElementOnViewPort = 1,
		isAnimating = false;
		
		for (i = 0; i < shownInViewport; i++) {
			jQuery(sliderList).css('width',(numElmts+shownInViewport)*increment + increment + "px");
			jQuery(sliderList).append(jQuery(elmnts[i]).clone());
		}
		
		jQuery(previous).click(function(event){
			if (!isAnimating) {
				if (firstElementOnViewPort == 1) {
					jQuery(sliderList).css('left', "-" + numElmts * sizeFirstElmnt + "px");
					firstElementOnViewPort = numElmts;
				}
				else {
					firstElementOnViewPort--;
				}
				
				jQuery(sliderList).animate({
					left: "+=" + increment,
					y: 0,
					queue: true
				}, "easeInOutExpo", function(){isAnimating = false;});
				isAnimating = true;
			}
			
		});
		
		jQuery(next).click(function(event){
			if (!isAnimating) {
				if (firstElementOnViewPort > numElmts) {
					firstElementOnViewPort = 2;
					jQuery(sliderList).css('left', "0px");
				}
				else {
					firstElementOnViewPort++;
				}
				jQuery(sliderList).animate({
					left: "-=" + increment,
					y: 0,
					queue: true
				}, "easeInOutExpo", function(){isAnimating = false;});
				isAnimating = true;
			}
		});
	}
};
/**
 * AviaSlider - A jQuery image slider
 * (c) Copyright Christian "Kriesi" Budschedl
 * http://www.kriesi.at
 * http://www.twitter.com/kriesi/
 * For sale on ThemeForest.net
 */
document.documentElement.className += 'js_active';
(function ($) {
  $.fn.aviaSlider = function (g) {
    var h = {
      slides: 'li',
      animationSpeed: 900,
      autorotation: true,
      autorotationSpeed: 3,
      appendControlls: '',
      slideControlls: 'items',
      blockSize: {
        height: 'full',
        width: 'full'
      },
      betweenBlockDelay: 60,
      display: 'topleft',
      switchMovement: false,
      showText: true,
      transition: 'fade',
      backgroundOpacity: 0.8,
      transitionOrder: ['diagonaltop', 'diagonalbottom', 'topleft', 'bottomright', 'random']
    };
    var j = $.extend(h, g);
    return this.each(function () {
      var f = $(this),
          slides = f.find(j.slides),
          slideImages = slides.find('img'),
          slideCount = slides.length,
          slideWidth = slides.width(),
          slideHeight = slides.height(),
          blockNumber = 0,
          currentSlideNumber = 0,
          reverseSwitch = false,
          currentTransition = 0,
          current_class = 'active_item',
          controlls = '',
          skipSwitch = true,
          interval = '',
          blockSelection = '',
          blockSelectionJQ = '',
          blockOrder = [];
      if (j.blockSize.height == 'full') {
        j.blockSize.height = slideHeight
      }
      if (j.blockSize.width == 'full') {
        j.blockSize.width = slideWidth
      }
      f.methods = {
        init: function () {
          var a = 0,
              posY = 0,
              generateBlocks = true,
              bgOffset = '';
          slides.filter(':first').css({
            'z-index': '5',
            display: 'block'
          });
          while (generateBlocks) {
            blockNumber++;
            bgOffset = "-" + a + "px -" + posY + "px";
            $('<div class="kBlock"></div>').appendTo(f).css({
              zIndex: 20,
              position: 'absolute',
              display: 'none',
              left: a,
              top: posY,
              height: j.blockSize.height,
              width: j.blockSize.width,
              backgroundPosition: bgOffset
            });
            a += j.blockSize.width;
            if (a >= slideWidth) {
              a = 0;
              posY += j.blockSize.height
            }
            if (posY >= slideHeight) {
              generateBlocks = false
            }
          }
          blockSelection = f.find('.kBlock');
          blockOrder['topleft'] = blockSelection;
          blockOrder['bottomright'] = $(blockSelection.get().reverse());
          blockOrder['diagonaltop'] = f.methods.kcubit(blockSelection);
          blockOrder['diagonalbottom'] = f.methods.kcubit(blockOrder['bottomright']);
          blockOrder['random'] = f.methods.fyrandomize(blockSelection);
          slides.each(function () {
            $.data(this, "data", {
              img: $(this).find('img').attr('src')
            })
          });
          if (slideCount <= 1) {
            f.aviaSlider_preloadhelper({
              delay: 200
            })
          } else {
            f.aviaSlider_preloadhelper({
              callback: f.methods.preloadingDone
            });
            f.methods.appendControlls().addDescription()
          }
        },
        appendControlls: function () {
          if (j.slideControlls == 'items') {
            var b = j.appendControlls || f[0];
            controlls = $('<div></div>').addClass('slidecontrolls').insertAfter(b);
            slides.each(function (i) {
              var a = $('<a href="#" class=" ' + current_class + '"></a>').appendTo(controlls);
              a.bind('click', {
                currentSlideNumber: i
              }, f.methods.switchSlide);
              current_class = ""
            });
          }
          return this
        },
        addDescription: function () {
          if (j.showText) {
            slides.each(function () {
              var a = $(this),
                  description = a.find('img').attr('alt'),
                  splitdesc = description.split('::');
              if (splitdesc[0] != "") {
                if (splitdesc[1] != undefined) {
                  description = "<strong>" + splitdesc[0] + "</strong>" + splitdesc[1]
                } else {
                  description = splitdesc[0]
                }
              }
              if (description != "") {
                $('<div></div>').addClass('feature_excerpt').html(description).css({
                  display: 'block',
                  'opacity': j.backgroundOpacity
                }).appendTo(a.find('a'))
              }
            })
          }
        },
        preloadingDone: function () {
          skipSwitch = false;
          slides.css({
            'backgroundColor': 'transparent',
            'backgroundImage': 'none'
          });
          if (j.autorotation) {
            f.methods.autorotate();
            slideImages.bind("click", function () {
              clearInterval(interval)
            })
          }
        },
        autorotate: function () {
          interval = setInterval(function () {
            currentSlideNumber++;
            if (currentSlideNumber == slideCount) currentSlideNumber = 0;
            f.methods.switchSlide()
          }, (parseInt(j.autorotationSpeed) * 1000) + (j.betweenBlockDelay * blockNumber) + j.animationSpeed)
        },
        switchSlide: function (c) {
          var d = false;
          if (c != undefined && !skipSwitch) {
            if (currentSlideNumber != c.data.currentSlideNumber) {
              currentSlideNumber = c.data.currentSlideNumber
            } else {
              d = true
            }
          }
          if (c != undefined) clearInterval(interval);
          if (!skipSwitch && d == false) {
            skipSwitch = true;
            var e = slides.filter(':visible'),
                nextSlide = slides.filter(':eq(' + currentSlideNumber + ')'),
                nextURL = $.data(nextSlide[0], "data").img,
                nextImageBG = 'url(' + nextURL + ')';
            if (j.slideControlls) {
              controlls.find('.active_item').removeClass('active_item');
              controlls.find('a:eq(' + currentSlideNumber + ')').addClass('active_item')
            }
            blockSelectionJQ = blockOrder[j.display];
            slides.find('>a>img').css({
              opacity: 1,
              visibility: 'visible'
            });
            if (j.switchMovement && (j.display == "topleft" || j.display == "diagonaltop")) {
              if (reverseSwitch == false) {
                blockSelectionJQ = blockOrder[j.display];
                reverseSwitch = true
              } else {
                if (j.display == "topleft") blockSelectionJQ = blockOrder['bottomright'];
                if (j.display == "diagonaltop") blockSelectionJQ = blockOrder['diagonalbottom'];
                reverseSwitch = false
              }
            }
            if (j.display == 'random') {
              blockSelectionJQ = f.methods.fyrandomize(blockSelection)
            }
            if (j.display == 'all') {
              blockSelectionJQ = blockOrder[j.transitionOrder[currentTransition]];
              currentTransition++;
              if (currentTransition >= j.transitionOrder.length) currentTransition = 0
            }
            blockSelectionJQ.css({
              backgroundImage: nextImageBG
            }).each(function (i) {
              var b = $(this);
              setTimeout(function () {
                var a = new Array();
                if (j.transition == 'drop') {
                  a['css'] = {
                    height: 1,
                    width: j.blockSize.width,
                    display: 'block',
                    opacity: 0
                  };
                  a['anim'] = {
                    height: j.blockSize.height,
                    width: j.blockSize.width,
                    opacity: 1
                  }
                } else if (j.transition == 'fade') {
                  a['css'] = {
                    display: 'block',
                    opacity: 0
                  };
                  a['anim'] = {
                    opacity: 1
                  }
                } else {
                  a['css'] = {
                    height: 1,
                    width: 1,
                    display: 'block',
                    opacity: 0
                  };
                  a['anim'] = {
                    height: j.blockSize.height,
                    width: j.blockSize.width,
                    opacity: 1
                  }
                }
                b.css(a['css']).animate(a['anim'], j.animationSpeed, function () {
                  if (i + 1 == blockNumber) {
                    f.methods.changeImage(e, nextSlide)
                  }
                })
              }, i * j.betweenBlockDelay)
            })
          }
          return false
        },
        changeImage: function (a, b) {
          a.css({
            zIndex: 0,
            display: 'none'
          });
          b.css({
            zIndex: 3,
            display: 'block'
          });
          blockSelectionJQ.fadeOut(j.animationSpeed * 1 / 3, function () {
            skipSwitch = false
          })
        },
        fyrandomize: function (a) {
          var b = a.length,
              objectSorted = $(a);
          if (b == 0) return false;
          while (--b) {
            var c = Math.floor(Math.random() * (b + 1)),
                temp1 = objectSorted[b],
                temp2 = objectSorted[c];
            objectSorted[b] = temp2;
            objectSorted[c] = temp1
          }
          return objectSorted
        },
        kcubit: function (a) {
          var b = a.length,
              objectSorted = $(a),
              currentIndex = 0,
              rows = Math.ceil(slideHeight / j.blockSize.height),
              columns = Math.ceil(slideWidth / j.blockSize.width),
              oneColumn = blockNumber / columns,
              oneRow = blockNumber / rows,
              modX = 0,
              modY = 0,
              i = 0,
              rowend = 0,
              endreached = false,
              onlyOne = false;
          if (b == 0) return false;
          for (i = 0; i < b; i++) {
            objectSorted[i] = a[currentIndex];
            if ((currentIndex % oneRow == 0 && blockNumber - i > oneRow) || (modY + 1) % oneColumn == 0) {
              currentIndex -= (((oneRow - 1) * modY) - 1);
              modY = 0;
              modX++;
              onlyOne = false;
              if (rowend > 0) {
                modY = rowend;
                currentIndex += (oneRow - 1) * modY
              }
            } else {
              currentIndex += oneRow - 1;
              modY++
            }
            if ((modX % (oneRow - 1) == 0 && modX != 0 && rowend == 0) || (endreached == true && onlyOne == false)) {
              modX = 0.1;
              rowend++;
              endreached = true;
              onlyOne = true
            }
          }
          return objectSorted
        }
      };
      f.methods.init()
    })
  }
})(jQuery);
(function ($) {
  $.fn.aviaSlider_preloadhelper = function (e) {
    var f = {
      fadeInSpeed: 800,
      delay: 0,
      callback: ''
    };
    var g = $.extend(f, e);
    return this.each(function () {
      var d = jQuery(this),
          images = d.find('img').css({
          opacity: 0,
          visibility: 'hidden',
          display: 'block'
        }),
          imagesToLoad = images.length,
          img = [];
      d.operations = {
        preload: function () {
          var c = true;
          images.each(function (i, a) {
            var b = new Image(),
                passImg = $(this);
            b.src = this.src;
            if (!b.complete) {
              $(b).bind('error load', {
                currentImage: passImg
              }, d.operations.showImage)
            } else {
              d.operations.showImage(passImg)
            }
          });
          return this
        },
        showImage: function (c) {
          imagesToLoad--;
          if (c.data.currentImage != undefined) {
            c = c.data.currentImage
          }
          if (g.delay <= 0) c.css('visibility', 'visible').animate({
            opacity: 1
          }, g.fadeInSpeed);
          if (imagesToLoad == 0) {
            if (g.delay > 0) {
              images.each(function (i, a) {
                var b = $(this);
                setTimeout(function () {
                  b.css('visibility', 'visible').animate({
                    opacity: 1
                  }, g.fadeInSpeed, function () {
                    $(this).parent().removeClass('preloading')
                  })
                }, g.delay * (i + 1))
              });
              if (g.callback != '') {
                setTimeout(g.callback, g.delay * images.length)
              }
            } else if (g.callback != '') {
              (g.callback)()
            }
          }
        }
      };
      d.operations.preload()
    })
  }
})(jQuery);
 
 /**
 * BACKGROUND POSITION JQUERY PLUGIN
 * @author Alexander Farkas
 * v. 1.21
 */

(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = jQuery.curCSS;
		jQuery.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			
			fx.start = [start[0],start[2]];
			
			var end = toArray(fx.options.curAnim.backgroundPosition);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);

/**
 * Ward off IE6 and IE7 users. :)
 */
var IE6 = (navigator.userAgent.indexOf("MSIE 6")>=0) ? true : false;
var IE7 = (navigator.userAgent.indexOf("MSIE 7")>=0) ? true : false;
if(IE6){
	$(function(){
		
		$("<div>")
			.css({
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				backgroundColor: 'black',
				'opacity': '0.75',
				'width': '100%',
				'height': $(window).height(),
				zIndex: 5000
			})
			.appendTo("body");			
		$("<div><img src='/wp-content/themes/glo-folio-2.0/images/no-ie6.png' alt='' style='float: left;'/><p><br /><strong>Sorry! This page doesn't support Internet Explorer 6 or 7.</strong><br /><br />If you'd like to read this site's content please <a href='http://getfirefox.org'>upgrade your browser</a>.</p>")
			.css({
				backgroundColor: 'white',
				'top': '50%',
				'left': '50%',
				marginLeft: -210,
				marginTop: -100,
				width: 410,
				paddingRight: 10,
				height: 200,
				'position': 'absolute',
				zIndex: 6000
			})
			.appendTo("body");
	});		
}
if(IE7){
	$(function(){		
		$("<div>")
			.css({
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				backgroundColor: 'black',
				'opacity': '0.75',
				'width': '100%',
				'height': $(window).height(),
				zIndex: 5000
			})
			.appendTo("body");			
		$("<div><img src='/wp-content/themes/glo-folio-2.0/images/no-ie6.png' alt='' style='float: left;'/><p><br /><strong>Sorry! This page doesn't support Internet Explorer 6 or 7.</strong><br /><br />If you'd like to read this site's content please <a href='http://getfirefox.org'>upgrade your browser</a>.</p>")
			.css({
				backgroundColor: 'white',
				'top': '50%',
				'left': '50%',
				marginLeft: -210,
				marginTop: -100,
				width: 410,
				paddingRight: 10,
				height: 200,
				'position': 'absolute',
				zIndex: 6000
			})
			.appendTo("body");
	});		
} 



// jQuery plugs only go here


})(window.jQuery);


// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};


// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);



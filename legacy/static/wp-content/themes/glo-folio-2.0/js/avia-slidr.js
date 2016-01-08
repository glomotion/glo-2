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
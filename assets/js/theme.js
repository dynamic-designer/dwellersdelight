/**
* Mizzle - Technology and Corporate Bootstrap Theme
*
* @author Webestica (https://www.webestica.com/)
* @version 1.1.2
**/


/* ===================
Table Of Content
======================
01 PRELOADER
02 MENU DROPDOWN HOVER
03 STICKY HEADER
04 STICKY BAR
05 TOOLTIP
06 POPOVER
07 BACK TO TOP
08 GLIGHTBOX
09 AOS ANIMATION
10 STEPPER
11 PRICING
12 STICKY ELEMENT
13 PSWMETER
14 FAKE PASSWORD
15 AUTO TAB
16 PARALLAX BACKGROUND
17 TYPING TEXT ANIMATION
18 ISOTOPE
19 SWIPER SLIDER
20 MOUSE MOVE PARALLAX
21 PURECOUNTER
====================== */

"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();

var e = {
    init: function () {
        // e.preLoader(),
        // e.dropdownHover(),
        // e.stickyHeader(),
        // e.stickyBar(),
        // e.toolTipFunc(),
        // e.popOverFunc(),
        // e.backTotop(),
        // e.lightBox(),
        // e.aosFunc(),
        // e.stepper(),
        // e.pricing(),
        // e.stickyElement(),
        // e.pswMeter(),
        // e.fakePwd(),
        // e.autoTabinput(),
        // e.parallaxBG(),
        // e.typeText(),
        // e.enableIsotope(),
        e.swiperSlider()
        // e.mouseMove(),
        // e.pCounter()
        
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if ((!filter || filter(el))) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;

                }
            }
        } while (nextElem = nextElem.nextSibling)
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(',') > -1) {
                    let types = type.split(',');
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }


            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }

    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors)  && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

  // START: 19 Swiper slider
  swiperSlider: function () {

    var swpr = e.select('[data-swiper-options]');
    if (e.isVariableDefined(swpr)) {

      // basic options for all sliders
      let defaults = {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        // autoplay:{
        //   delay: 2000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false,
        // },
        freeMode: false,
      };
      
      // call init function
      initSwipers(defaults);
      
      function initSwipers(defaults = {}, selector = ".swiper") {
        // get all swiper elements
        let swipers = document.querySelectorAll(selector);
      
        // iterate over swiper elements
        swipers.forEach((swiper) => {
          // get custom options
          let optionsData = swiper.getAttribute("data-swiper-options")
            ? JSON.parse(swiper.getAttribute("data-swiper-options"))
            : {};
      
          // combine defaults and custom options
          let options = {
            ...defaults,
            ...optionsData
          };
      
          // init swiper
          new Swiper(swiper, options);
        });
      }
    }
  },
  // END: Swiper slider

};
e.init();
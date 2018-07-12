(function ($) {

    function domReady() {
        initDateTimePicker();
        openMenuMobile();
        addAnimation();
        scroll();

        initPopupOnClassOpen();
        styleInput();
        initMap();
    }


    function styleInput() {
        $('.js-custom-input').styler();
    }

    function initPopupOnClassOpen() {
        $(".__swdOpenPopup").click(function () {
            var idPopup = $(this).attr('data-popup');

            $.magnificPopup.open({
                items: {
                    src: $(idPopup)
                },
                type: 'inline'
            });
        });
    }

    function initDateTimePicker() {
        var datePicker = $('.date_form'),
            timePicker = $('.time_form');

        datePicker.datepicker({
            dateFormat: 'dd/mm/yy',
            onSelect: function () {
                $(this).closest('.input-wrap').removeClass('no-current current').addClass('active');
            }
        });

        timePicker.timepicker({
            timeFormat: 'h:mm p',
            interval: 30,
            startTime: '10:00',
            dynamic: false,
            dropdown: true,
            minTime: '9',
            maxTime: '6:00pm',
            scrollbar: true,
            change: function () {
                var d = new Date();
                var hoursF = d.getHours();
                var minutesF = d.getMonth();
                $(this).attr("value", hoursF + ':' + minutesF);
                $(this).closest('.input-wrap').removeClass('no-current current').addClass('active');
            }
        });


        datePicker.attr("autocomplete", "off");
        timePicker.attr("autocomplete", "off");
    }

    function openMenuMobile() {
        var burger = $('.burger'),
            menuWr = $('.menu__wr');

        burger.on('click', function (e) {
            $(this).toggleClass('open');
            menuWr.toggleClass('open');
        })

    }

    function initMap() {
        var mapBlock = document.getElementById("map");

        if (!mapBlock) return;

        var styleMap = [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#295c8f"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#7a9af7"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "visibility": "on"
                        },
                        {
                            "saturation": "-26"
                        }
                    ]
                }
            ],
            center = new google.maps.LatLng(50.4292257, 30.5415239),
            image = 'img/marker_map.png';

        var mapOptions = {
            center: center,
            maxZoom: 30,
            minZoom: 3,
            zoom: 15,
            styles: styleMap
        };

        var map = new google.maps.Map(mapBlock, mapOptions);

        var marker = new google.maps.Marker({
            position: center,
            icon: image,
            map: map
        });
    }


    // Add animation
    $.fn.animated = function (advance) {
        if (!$(this).length) return;

        var heightScreen = screen.height;

        var advance = advance || heightScreen * .5;

        if (window.pageYOffset + advance > $(this).offset().top) {
            var ths = $(this);
            ths.addClass("animated");
        }
    };

    // Add animation witht queue
    $.fn.animatedQueue = function (hold, advance) {
        if (!$(this).length) return;

        var heightScreen = screen.height,
            advance = advance || heightScreen * .5,
            hold = hold || 300;

        if (window.pageYOffset + advance > $(this).offset().top) {
            var ths = $(this);

            $.each(ths, function (i, t) {
                var $this = $(t);
                setTimeout(function () {
                    $this.addClass("animated");
                }, i * hold);
            });
        }

    };

    function addAnimation() {
        var heightScreen = screen.height;

        $('.item__grid .item').animatedQueue(1000, heightScreen * .5);
    }

    function scroll() {
        window.addEventListener("scroll", function () {
            addAnimation();
        })
    }


    domReady();

})(jQuery);



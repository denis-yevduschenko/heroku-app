(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('itemInfo', itemInfo);

    function itemInfo() {
        return {
            restrict: 'E',
            scope: {
                info: '=',
                'click': '&onClick'
            },
            templateUrl: 'js/directives/itemInfo.html',
            link: function (scope, element, attr) {
                var item = $('item-info');

                item.find("[rel='tooltip']").tooltip();

                item.find('.thumbnail').hover(
                    function () {
                        $(this).find('.caption').fadeIn(250); //.fadeIn(250)slideDown
                    },
                    function () {
                        $(this).find('.caption').fadeOut(205); //.(205)slideUp
                    }
                );

                $('.caption').on('click', 'a', function (event) {
                    //отменяем стандартную обработку нажатия по ссылке
                    event.preventDefault();

                    //забираем идентификатор бока с атрибута href
                    var id = $(this).attr('href'),

                        //узнаем высоту от начала страницы до блока на который ссылается якорь
                        top = $(id).offset().top;

                    //анимируем переход на расстояние - top за 700 мс
                    $('body,html').animate({scrollTop: top}, 700);
                });
            }
        };
    }
})();
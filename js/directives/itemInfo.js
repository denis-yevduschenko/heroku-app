CofenatorApp.directive('itemInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=',
            'click': '&onClick'
        },
        templateUrl: 'js/directives/itemInfo.html',
        link: function(scope, element, attr) {

            $("item-info").find("[rel='tooltip']").tooltip();

            $('item-info').find('.thumbnail').hover(
                function () {
                    $(this).find('.caption').fadeIn(250); //.fadeIn(250)slideDown
                },
                function () {
                    $(this).find('.caption').fadeOut(205); //.(205)slideUp
                }
            );
        }
    };
});

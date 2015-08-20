/*
 * Created by aaronklaser, https://github.com/pineconellc/angular-foundation/issues/200
 */

(function () {
    'use strict';

    angular.module('directive.equalizer', []);

    angular.module('directive.equalizer').directive('equalizer', equalizerDirective);

    equalizerDirective.$inject = [];

    function equalizerDirective() {
        return {
            restrict: 'A',
            link: link
        }
    }

// equalizer on container ==> equalizer-watch on all children inside equalizer. Height will match the tallest child.
    var link = function (scope, element, attrs) {
        var items = element.find('[equalizer-watch]');
        var biggest = _.max(items, function (e) { return e.clientHeight; });
        element.find('[equalizer-watch]').css('height', biggest.clientHeight);
    }
})();
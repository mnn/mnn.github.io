// Generated by CoffeeScript 1.9.3
(function() {
  angular.module("vcelaricheb").directive("customLink", function() {
    return {
      restrict: "E",
      templateUrl: "templates/customLink.html",
      controller: "customLinkCtrl",
      scope: {
        name: "@",
        link: "@",
        icon: "@",
        state: "@"
      },
      link: function(scope, element, attrs) {
        return $(element).find(".custom-link-icon").load(function() {
          return inlineSvg(element);
        });
      }
    };
  }).controller("customLinkCtrl", function($scope, $state) {
    var iconName;
    iconName = $scope.icon || "document";
    $scope.iconFile = "assets/img/doc/" + iconName + ".svg";
    $scope.processedLink = $scope.link;
    if ($scope.state != null) {
      $scope.processedLink = $state.href($scope.state);
    }
    $scope.linkOutside = $scope.state == null;
  });

}).call(this);

//# sourceMappingURL=customLink.directive.js.map

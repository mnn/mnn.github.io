// Generated by CoffeeScript 1.9.3
(function() {
  var DocumentsPagesTemplateDir, PageTemplateDir, TemplateDir;

  TemplateDir = "./templates/";

  PageTemplateDir = TemplateDir + "pages/";

  DocumentsPagesTemplateDir = PageTemplateDir + "documents/";

  angular.module("vcelaricheb", ["ui.router", "mm.foundation", "directive.equalizer"]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: PageTemplateDir + "home.html"
    });
    $stateProvider.state("start", {
      url: "/start",
      templateUrl: PageTemplateDir + "start.html"
    });
    $stateProvider.state("awards", {
      url: "/awards",
      templateUrl: PageTemplateDir + "awards.html"
    });
    $stateProvider.state("info", {
      url: "/info",
      templateUrl: PageTemplateDir + "info.html"
    });
    $stateProvider.state("finance", {
      url: "/finance",
      templateUrl: PageTemplateDir + "finance.html"
    });
    $stateProvider.state("links", {
      url: "/links",
      templateUrl: PageTemplateDir + "links.html"
    });
    $stateProvider.state("contact", {
      url: "/contact",
      templateUrl: PageTemplateDir + "contact.html"
    });
    $stateProvider.state("sale", {
      url: "/sale",
      templateUrl: PageTemplateDir + "sale.html"
    });
    $stateProvider.state("documents", {
      url: "/documents",
      templateUrl: PageTemplateDir + "documents.html",
      controller: function($scope, $state) {
        return $scope.isMainState = function() {
          return $state.is("documents");
        };
      }
    });
    $stateProvider.state("documents.zoCheb", {
      url: "/zoCheb",
      views: {
        title: {
          template: "Základní organizace Cheb"
        },
        content: {
          templateUrl: DocumentsPagesTemplateDir + "zoCheb.html"
        }
      }
    });
    $stateProvider.state("documents.zoSkalna", {
      url: "/zoSkalna",
      views: {
        title: {
          template: "Základní organizace Skalná"
        },
        content: {
          templateUrl: DocumentsPagesTemplateDir + "zoSkalna.html"
        }
      }
    });
    return $stateProvider.state("documents.ooCheb", {
      url: "/ooCheb",
      views: {
        title: {
          template: "Okresní organizace Cheb"
        },
        content: {
          templateUrl: DocumentsPagesTemplateDir + "ooCheb.html"
        }
      }
    });
  }).directive("todo", function() {
    return {
      restrict: "E",
      template: "<div class=\"todo\">TODO</div>"
    };
  });

}).call(this);

//# sourceMappingURL=app.js.map

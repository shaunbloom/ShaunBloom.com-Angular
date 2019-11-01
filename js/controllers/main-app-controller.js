'use strict';

angular.module('app').controller('MainAppController', ['$scope', '$http', '$templateCache', 'mainAppServices', function ($scope, $http, $templateCache, mainAppServices) {
    $scope.appLoaded = false;
    $scope.expanded = false;
    $scope.fadeComplete = false;
    $scope.headerPositioned = false;
    $scope.twinkleVisible = false;
    $scope.artData = {};
    $scope.showHome = true;
    $scope.showArt = false;
    $scope.showResume = false;
    $scope.showPortfolio = false;
    $scope.showFullImage = false;

    mainAppServices.fetchArtData().then (function (response) {
      for (var i = 0; i < response.art.length; i++) {
         if (response.art[i].purchase === "true") {
          response.art[i].purchase = true;
         } else {
          response.art[i].purchase = false;
         }
      }

      $scope.artData = response.art;
    });

    addTransitionEventHandler("content", function (event) { applyVariableUpdate("expanded") });
    addTransitionEventHandler("background", function (event) { applyVariableUpdate("fadeComplete") });
    addTransitionEventHandler("main", function (event) { applyVariableUpdate("headerPositioned") });
    addTransitionEventHandler("twinkle", function (event) { applyVariableUpdate("twinkleVisible") });

    angular.element(document).ready(function () {
       $scope.$apply(function(){
            $scope.appLoaded = true;
        });
    });

    function applyVariableUpdate (variable) {
      $scope.$apply(function(){
          $scope[variable] = true;
      });
    }

    function addTransitionEventHandler (elementId, callback) {
      var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd'];
      var i = 0;
      var l = events.length;

      for (i; i < l; i++) {
        document.getElementById(elementId).addEventListener(events[i], callback, $scope);  
      }
    }

    $scope.loadFullImage = function ($event, artData) {
      document.getElementById("full-image").src = artData.imagePath;
      document.getElementById("thumb-image").src = artData.originalThumbPath;
      $scope.showFullImage = true;
      $scope.showArt = false;
    }
}]);


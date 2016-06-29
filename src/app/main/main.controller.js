(function() {
  'use strict';

  angular
    .module('testYo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdSidenav, $log) { // $timeout, webDevTec, toastr) {
    var vm = this;

    vm.toggleLeftMenu = toggleLeftMenu;

    function toggleLeftMenu() {
      $mdSidenav("leftMenu").toggle();
      $log.info();
    }

    /*
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1467187114721;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    } */
  }
})();

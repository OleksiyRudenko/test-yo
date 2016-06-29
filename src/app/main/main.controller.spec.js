(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    // var $timeout;
    // var toastr;
    var $mdSidenav;
    var $log;

    $mdSidenav = jasmine.createSpy().and.returnValue({
      toggle  : jasmine.createSpy()
    });

    $log = {
      info : jasmine.createSpy()
    };

    beforeEach(module('testYo'));
    beforeEach(inject(function(_$controller_) { //_$timeout_, _webDevTec_, _toastr_) {
      // spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      // spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('MainController', {
        $mdSidenav  : $mdSidenav,
        $log        : $log,
      });
      // $timeout = _$timeout_;
      // toastr = _toastr_;
    }));

    it('should toggle left menu', function() {
      vm.toggleLeftMenu();
      expect($mdSidenav).toHaveBeenCalledWith('leftMenu');
      // expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

    it('should log toggle left menu', function() {
      vm.toggleLeftMenu();
      expect($log).toHaveBeenCalled();
    });

    /* it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

    it('should define animate class after delaying timeout ', function() {
      $timeout.flush();
      expect(vm.classAnimation).toEqual('rubberBand');
    });

    it('should show a Toastr info and stop animation when invoke showToastr()', function() {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      expect(vm.classAnimation).toEqual('');
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    }); */
  });
})();

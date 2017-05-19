"use strict";
var LoadingPage = (function () {
    function LoadingPage(val) {
        if (val === void 0) { val = "loading"; }
        this.status = val;
    }
    LoadingPage.prototype.standby = function () {
        this.status = "loading";
    };
    LoadingPage.prototype.ready = function () {
        this.status = "active";
    };
    return LoadingPage;
}());
exports.LoadingPage = LoadingPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tb2RlbHMvbG9hZGluZ1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUkscUJBQVksR0FBdUI7UUFBdkIsb0JBQUEsRUFBQSxlQUF1QjtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBQ0QsNkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxrQ0FBVyIsImZpbGUiOiJhcHAvbW9kZWxzL2xvYWRpbmdQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvYWRpbmdQYWdlIHtcbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IodmFsOiBzdHJpbmcgPSBcImxvYWRpbmdcIikge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHZhbDtcbiAgICB9XG4gICAgc3RhbmRieSgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICB9XG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgICB9XG59Il19

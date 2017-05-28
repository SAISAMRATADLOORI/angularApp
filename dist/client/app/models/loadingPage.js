"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tb2RlbHMvbG9hZGluZ1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVJLHFCQUFZLEdBQXVCO1FBQXZCLG9CQUFBLEVBQUEsZUFBdUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUNELDZCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTCxrQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0NBQVciLCJmaWxlIjoiYXBwL21vZGVscy9sb2FkaW5nUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZSB7XG4gICAgcHVibGljIHN0YXR1czogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHZhbDogc3RyaW5nID0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB2YWw7XG4gICAgfVxuICAgIHN0YW5kYnkoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgfVxuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gICAgfVxufSJdfQ==

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n     <my-toolbar></my-toolbar>\n     <nav>\n     <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n     <a routerLink=\"/collections\" routerLinkActive=\"active\">Projects</a>\n   </nav>\n   <router-outlet></router-outlet>\n    ",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFnQnhDLElBQWEsWUFBWTtJQUF6QjtJQUNBLENBQUM7SUFBRCxtQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksWUFBWTtJQWJ4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDdEIsUUFBUSxFQUFFLDhQQU9MO1FBQ0QsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FFckMsQ0FBQztHQUNXLFlBQVksQ0FDeEI7QUFEWSxvQ0FBWSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG50ZW1wbGF0ZTogYFxuICAgICA8bXktdG9vbGJhcj48L215LXRvb2xiYXI+XG4gICAgIDxuYXY+XG4gICAgIDxhIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkRhc2hib2FyZDwvYT5cbiAgICAgPGEgcm91dGVyTGluaz1cIi9jb2xsZWN0aW9uc1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5Qcm9qZWN0czwvYT5cbiAgIDwvbmF2PlxuICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG4iXX0=

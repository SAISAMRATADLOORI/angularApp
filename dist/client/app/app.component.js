"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBZ0J4QyxJQUFhLFlBQVk7SUFBekI7SUFDQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFlBQVk7SUFieEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSw4UEFPTDtRQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBRXJDLENBQUM7R0FDVyxZQUFZLENBQ3hCO0FBRFksb0NBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxudGVtcGxhdGU6IGBcbiAgICAgPG15LXRvb2xiYXI+PC9teS10b29sYmFyPlxuICAgICA8bmF2PlxuICAgICA8YSByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5EYXNoYm9hcmQ8L2E+XG4gICAgIDxhIHJvdXRlckxpbms9XCIvY29sbGVjdGlvbnNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+UHJvamVjdHM8L2E+XG4gICA8L25hdj5cbiAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIl19

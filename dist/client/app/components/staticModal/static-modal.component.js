"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DemoModalStaticComponent = (function () {
    function DemoModalStaticComponent() {
    }
    return DemoModalStaticComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DemoModalStaticComponent.prototype, "header", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DemoModalStaticComponent.prototype, "body", void 0);
DemoModalStaticComponent = __decorate([
    core_1.Component({
        selector: 'modal-static',
        templateUrl: './static-modal.component.html',
        styleUrls: ['./static-modal.component.css']
    })
], DemoModalStaticComponent);
exports.DemoModalStaticComponent = DemoModalStaticComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL3N0YXRpY01vZGFsL3N0YXRpYy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFPaEQsSUFBYSx3QkFBd0I7SUFBckM7SUFLQSxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUhZO0lBQVIsWUFBSyxFQUFFOzhCQUFpQixNQUFNO3dEQUFDO0FBQ3ZCO0lBQVIsWUFBSyxFQUFFOzhCQUFlLE1BQU07c0RBQUM7QUFIckIsd0JBQXdCO0lBTHBDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFFLDhCQUE4QixDQUFFO0tBQzlDLENBQUM7R0FDVyx3QkFBd0IsQ0FLcEM7QUFMWSw0REFBd0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvc3RhdGljTW9kYWwvc3RhdGljLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwtc3RhdGljJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXRpYy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnLi9zdGF0aWMtbW9kYWwuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBEZW1vTW9kYWxTdGF0aWNDb21wb25lbnR7XG4gICAgXG4gICAgQElucHV0KCkgcHJpdmF0ZSBoZWFkZXI6IFN0cmluZztcbiAgICBASW5wdXQoKSBwcml2YXRlIGJvZHk6IFN0cmluZztcblxufSJdfQ==

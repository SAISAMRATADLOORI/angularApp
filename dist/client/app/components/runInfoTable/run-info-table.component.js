"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var collections_service_1 = require("../../services/collections.service");
var loadingPage_1 = require("../../models/loadingPage");
var RunInfoTableComponent = (function (_super) {
    __extends(RunInfoTableComponent, _super);
    function RunInfoTableComponent(collectionsService, router) {
        var _this = _super.call(this, "active") || this;
        _this.collectionsService = collectionsService;
        _this.router = router;
        _this.selectedRunInfo = undefined;
        _this.showDetails = true;
        return _this;
    }
    RunInfoTableComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.collection && this.selectedRun) {
            this.standby();
            this.collectionsService.getRunInfo(this.collection, this.selectedRun)
                .subscribe(function (info) {
                _this.ready();
                _this.selectedRunInfo = info;
                _this.labels = ['PASS % ', 'FAIL %'];
                var pass = _this.selectedRunInfo.percentage;
                var fail = 100 - pass;
                _this.data = [pass, fail];
                _this.colors = [
                    {
                        backgroundColor: ["#7FFF00", "#FF0000"]
                    }
                ];
            });
        }
    };
    RunInfoTableComponent.prototype.gotoDetail = function () {
        // Navigate tofeature Overview
        this.router.navigate(["/runOverview", this.collection, this.selectedRun.toString()]);
    };
    return RunInfoTableComponent;
}(loadingPage_1.LoadingPage));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RunInfoTableComponent.prototype, "selectedRun", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunInfoTableComponent.prototype, "collection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RunInfoTableComponent.prototype, "showDetails", void 0);
RunInfoTableComponent = __decorate([
    core_1.Component({
        selector: 'run-info-table',
        templateUrl: './run-info-table.component.html',
        styleUrls: ['./run-info-table.component.css']
    }),
    __metadata("design:paramtypes", [collections_service_1.CollectionsService,
        router_1.Router])
], RunInfoTableComponent);
exports.RunInfoTableComponent = RunInfoTableComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL3J1bkluZm9UYWJsZS9ydW4taW5mby10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTREO0FBQzVELDBDQUF1QztBQUd2Qyx1Q0FBcUM7QUFDckMsMEVBQXNFO0FBRXRFLHdEQUFxRDtBQVNyRCxJQUFhLHFCQUFxQjtJQUFTLHlDQUFXO0lBVXBELCtCQUNVLGtCQUFzQyxFQUN0QyxNQUFjO1FBRnhCLFlBSUEsa0JBQU0sUUFBUSxDQUFDLFNBQ2hCO1FBSlcsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBWHRCLHFCQUFlLEdBQVEsU0FBUyxDQUFDO1FBR3pCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQVd4QyxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUFBLGlCQXNCQztRQXJCQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDbEUsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFFYixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLElBQUksSUFBSSxHQUFXLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO2dCQUNuRCxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixLQUFJLENBQUMsTUFBTSxHQUFJO29CQUNsQjt3QkFDSSxlQUFlLEVBQUUsQ0FBRSxTQUFTLEVBQUMsU0FBUyxDQUFDO3FCQUMxQztpQkFDRCxDQUFDO1lBQ0EsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBSUgsQ0FBQztJQUlELDBDQUFVLEdBQVY7UUFDRSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBS0QsNEJBQUM7QUFBRCxDQW5EQSxBQW1EQyxDQW5EMEMseUJBQVcsR0FtRHJEO0FBakRXO0lBQVIsWUFBSyxFQUFFOzswREFBcUI7QUFDcEI7SUFBUixZQUFLLEVBQUU7O3lEQUFvQjtBQUNuQjtJQUFSLFlBQUssRUFBRTs7MERBQTZCO0FBSjNCLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFNBQVMsRUFBRSxDQUFFLGdDQUFnQyxDQUFFO0tBQ2hELENBQUM7cUNBWThCLHdDQUFrQjtRQUM5QixlQUFNO0dBWmIscUJBQXFCLENBbURqQztBQW5EWSxzREFBcUIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcnVuSW5mb1RhYmxlL3J1bi1pbmZvLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCB7Q29sbGVjdGlvbnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvQ29sbGVjdGlvbnMnO1xuaW1wb3J0IHtMb2FkaW5nUGFnZX0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvYWRpbmdQYWdlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J1bi1pbmZvLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3J1bi1pbmZvLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICcuL3J1bi1pbmZvLXRhYmxlLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgUnVuSW5mb1RhYmxlQ29tcG9uZW50IGV4dGVuZHMgTG9hZGluZ1BhZ2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHNlbGVjdGVkUnVuSW5mbzogYW55ID0gdW5kZWZpbmVkO1xuICAgQElucHV0KCkgc2VsZWN0ZWRSdW46IG51bWJlcjtcbiAgIEBJbnB1dCgpIGNvbGxlY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgpIHNob3dEZXRhaWxzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgIGRhdGE6IG51bWJlcltdO1xuICAgY29sb3JzOiBhbnlbXTtcbiBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb2xsZWN0aW9uc1NlcnZpY2U6IENvbGxlY3Rpb25zU2VydmljZSAsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuKSB7XG4gIHN1cGVyKFwiYWN0aXZlXCIpO1xufVxuXG5uZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgaWYodGhpcy5jb2xsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRSdW4pe1xuICAgIHRoaXMuc3RhbmRieSgpO1xuICAgdGhpcy5jb2xsZWN0aW9uc1NlcnZpY2UuZ2V0UnVuSW5mbyh0aGlzLmNvbGxlY3Rpb24sdGhpcy5zZWxlY3RlZFJ1bilcbiAgICAuc3Vic2NyaWJlKGluZm8gPT4gXG4gICAge1xuICAgICAgdGhpcy5yZWFkeSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZFJ1bkluZm8gPSBpbmZvO1xuICAgICAgdGhpcy5sYWJlbHMgPSBbJ1BBU1MgJSAnLCdGQUlMICUnXTtcbiAgICAgIGxldCBwYXNzOiBudW1iZXIgPSB0aGlzLnNlbGVjdGVkUnVuSW5mby5wZXJjZW50YWdlO1xuICAgICAgbGV0IGZhaWwgPSAxMDAgLSBwYXNzO1xuICAgICAgdGhpcy5kYXRhID0gW3Bhc3MsZmFpbF07XG4gICAgICB0aGlzLmNvbG9ycyA9ICBbXG4gICB7IC8vIGZpcnN0IGNvbG9yXG4gICAgICAgYmFja2dyb3VuZENvbG9yOiBbIFwiIzdGRkYwMFwiLFwiI0ZGMDAwMFwiXSBcbiAgIH1cbiAgXTtcbiAgICB9KTtcbiAgfVxuXG4gIFxuICAgIFxufVxuXG5cblxuZ290b0RldGFpbCgpOiB2b2lkIHtcbiAgLy8gTmF2aWdhdGUgdG9mZWF0dXJlIE92ZXJ2aWV3XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ydW5PdmVydmlld1wiLHRoaXMuY29sbGVjdGlvbix0aGlzLnNlbGVjdGVkUnVuLnRvU3RyaW5nKCldKTtcbn1cblxuXG5cblxufVxuIl19

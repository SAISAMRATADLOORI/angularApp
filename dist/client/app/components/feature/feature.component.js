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
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var collections_service_1 = require("../../services/collections.service");
var loadingPage_1 = require("../../models/loadingPage");
var FeatureComponent = (function (_super) {
    __extends(FeatureComponent, _super);
    function FeatureComponent(collectionsService, router, route, location) {
        var _this = _super.call(this) || this;
        _this.collectionsService = collectionsService;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.feature = {};
        return _this;
    }
    FeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRun = params['runId'];
            _this.collection = params['collectionName'];
            _this.featureName = params['featureName'];
            _this.collectionsService.getFeatureInfo(_this.collection, _this.selectedRun).subscribe(function (info) {
                var length = info.length;
                while (length--) {
                    if (info[length]['name'] !== _this.featureName) {
                        info.splice(length, 1);
                    }
                }
                _this.featureInfo = info;
                _this.collectionsService.getFeature(_this.collection, _this.selectedRun, _this.featureName).subscribe(function (info) {
                    _this.feature = info[_this.featureName];
                    console.log("Feature -- > " + JSON.stringify(_this.feature));
                    _this.ready();
                });
            });
        });
    };
    FeatureComponent.prototype.goBack = function () {
        this.location.back();
    };
    return FeatureComponent;
}(loadingPage_1.LoadingPage));
FeatureComponent = __decorate([
    core_1.Component({
        selector: 'feature',
        templateUrl: './feature.component.html',
        styleUrls: ['./feature.component.css']
    }),
    __metadata("design:paramtypes", [collections_service_1.CollectionsService,
        router_1.Router,
        router_2.ActivatedRoute,
        common_1.Location])
], FeatureComponent);
exports.FeatureComponent = FeatureComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF1QztBQUN2QywwQ0FBMkQ7QUFDM0QsMENBQTJEO0FBQzNELHVDQUFxQztBQUNyQywwRUFBc0U7QUFFdEUsd0RBQXFEO0FBU3JELElBQWEsZ0JBQWdCO0lBQVMsb0NBQVc7SUFVL0MsMEJBQ1Usa0JBQXNDLEVBQ3RDLE1BQWMsRUFDZCxLQUFxQixFQUNyQixRQUFrQjtRQUo1QixZQU1BLGlCQUFPLFNBQ1I7UUFOVyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBUjNCLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBV2hCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBdUJLO1FBdEJFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU07WUFFaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLElBQUk7Z0JBRXRGLElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLE9BQU0sTUFBTSxFQUFFLEVBQUMsQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7d0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBQyxLQUFJLENBQUMsV0FBVyxFQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxJQUFJO29CQUNyRyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7b0JBQ3pELEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDWCxDQUFDLENBQUUsQ0FBQztZQUNSLENBQUMsQ0FBRSxDQUFDO1FBRU4sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdMLHVCQUFDO0FBQUQsQ0FqREEsQUFpREMsQ0FqRHFDLHlCQUFXLEdBaURoRDtBQWpEWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUUseUJBQXlCLENBQUU7S0FDekMsQ0FBQztxQ0FZOEIsd0NBQWtCO1FBQzlCLGVBQU07UUFDUCx1QkFBYztRQUNYLGlCQUFRO0dBZGpCLGdCQUFnQixDQWlENUI7QUFqRFksNENBQWdCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQge0NvbGxlY3Rpb25zU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sbGVjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7TG9hZGluZ1BhZ2V9IGZyb20gJy4uLy4uL21vZGVscy9sb2FkaW5nUGFnZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWF0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJy4vZmVhdHVyZS5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgZXh0ZW5kcyBMb2FkaW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICBzZWxlY3RlZFJ1bjogbnVtYmVyO1xuICAgY29sbGVjdGlvbjogc3RyaW5nO1xuICAgZmVhdHVyZU5hbWU6IHN0cmluZztcblxuICAgZmVhdHVyZUluZm86IHt9O1xuICAgZmVhdHVyZSA9IHt9O1xuICBcblxuIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbGxlY3Rpb25zU2VydmljZTogQ29sbGVjdGlvbnNTZXJ2aWNlICxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4pIHtcbiAgc3VwZXIoKTtcbn1cblxubmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCBwYXJhbXMgPT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSdW4gPSBwYXJhbXNbJ3J1bklkJ107XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gcGFyYW1zWydjb2xsZWN0aW9uTmFtZSddO1xuICAgICAgICAgIHRoaXMuZmVhdHVyZU5hbWUgPSBwYXJhbXNbJ2ZlYXR1cmVOYW1lJ107XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aW9uc1NlcnZpY2UuZ2V0RmVhdHVyZUluZm8odGhpcy5jb2xsZWN0aW9uLHRoaXMuc2VsZWN0ZWRSdW4pLnN1YnNjcmliZSggaW5mbyA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBsZW5ndGggID0gaW5mby5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZShsZW5ndGgtLSl7XG4gICAgICAgICAgICAgIGlmKGluZm9bbGVuZ3RoXVsnbmFtZSddICE9PSB0aGlzLmZlYXR1cmVOYW1lKXtcbiAgICAgICAgICAgICAgICAgaW5mby5zcGxpY2UobGVuZ3RoLDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVJbmZvID0gaW5mbztcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnNTZXJ2aWNlLmdldEZlYXR1cmUodGhpcy5jb2xsZWN0aW9uLHRoaXMuc2VsZWN0ZWRSdW4sdGhpcy5mZWF0dXJlTmFtZSkuc3Vic2NyaWJlKCBpbmZvID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZSA9IGluZm9bdGhpcy5mZWF0dXJlTmFtZV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZlYXR1cmUgLS0gPiBcIitKU09OLnN0cmluZ2lmeSh0aGlzLmZlYXR1cmUpKVxuICAgICAgICAgICAgdGhpcy5yZWFkeSgpO1xuICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgfSApO1xuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG5cblxufVxuIl19

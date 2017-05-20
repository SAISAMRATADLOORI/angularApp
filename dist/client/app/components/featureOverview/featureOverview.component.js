"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var collections_service_1 = require("../../services/collections.service");
var loadingPage_1 = require("../../models/loadingPage");
var FeatureOverviewComponent = (function (_super) {
    __extends(FeatureOverviewComponent, _super);
    function FeatureOverviewComponent(collectionsService, router, route, location) {
        var _this = _super.call(this) || this;
        _this.collectionsService = collectionsService;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.selectedRunInfo = undefined;
        return _this;
    }
    FeatureOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRun = params['runId'];
            _this.collection = params['collectionName'];
            _this.ready();
        });
    };
    FeatureOverviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    return FeatureOverviewComponent;
}(loadingPage_1.LoadingPage));
FeatureOverviewComponent = __decorate([
    core_1.Component({
        selector: 'featureOverview',
        templateUrl: './featureOverview.component.html',
        styleUrls: ['./featureOverview.component.css']
    }),
    __metadata("design:paramtypes", [collections_service_1.CollectionsService,
        router_1.Router,
        router_2.ActivatedRoute,
        common_1.Location])
], FeatureOverviewComponent);
exports.FeatureOverviewComponent = FeatureOverviewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVPdmVydmlldy9mZWF0dXJlT3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBdUM7QUFDdkMsMENBQTJEO0FBQzNELDBDQUEyRDtBQUMzRCx1Q0FBcUM7QUFDckMsMEVBQXNFO0FBRXRFLHdEQUFxRDtBQVNyRCxJQUFhLHdCQUF3QjtJQUFTLDRDQUFXO0lBV3ZELGtDQUNVLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsUUFBa0I7UUFKNUIsWUFNQSxpQkFBTyxTQUNSO1FBTlcsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQWQzQixxQkFBZSxHQUFRLFNBQVMsQ0FBQzs7SUFpQnBDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBT0s7UUFORSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsVUFBQSxNQUFNO1lBRWhDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQU1MLCtCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQzZDLHlCQUFXLEdBcUN4RDtBQXJDWSx3QkFBd0I7SUFMcEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxTQUFTLEVBQUUsQ0FBRSxpQ0FBaUMsQ0FBRTtLQUNqRCxDQUFDO3FDQWE4Qix3Q0FBa0I7UUFDOUIsZUFBTTtRQUNQLHVCQUFjO1FBQ1gsaUJBQVE7R0FmakIsd0JBQXdCLENBcUNwQztBQXJDWSw0REFBd0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZmVhdHVyZU92ZXJ2aWV3L2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQge0NvbGxlY3Rpb25zU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sbGVjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7TG9hZGluZ1BhZ2V9IGZyb20gJy4uLy4uL21vZGVscy9sb2FkaW5nUGFnZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWF0dXJlT3ZlcnZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZU92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICcuL2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVPdmVydmlld0NvbXBvbmVudCBleHRlbmRzIExvYWRpbmdQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgIHNlbGVjdGVkUnVuSW5mbzogYW55ID0gdW5kZWZpbmVkO1xuICAgc2VsZWN0ZWRSdW46IG51bWJlcjtcbiAgIGNvbGxlY3Rpb246IHN0cmluZztcblxuICAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgIGRhdGE6IG51bWJlcltdO1xuICAgY29sb3JzOiBhbnlbXTtcblxuXG4gXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29sbGVjdGlvbnNTZXJ2aWNlOiBDb2xsZWN0aW9uc1NlcnZpY2UgLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb25cbikge1xuICBzdXBlcigpO1xufVxuXG5uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtcyA9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJ1biA9IHBhcmFtc1sncnVuSWQnXTtcbiAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBwYXJhbXNbJ2NvbGxlY3Rpb25OYW1lJ107XG4gICAgICAgICAgdGhpcy5yZWFkeSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG5cblxuXG5cblxufVxuIl19

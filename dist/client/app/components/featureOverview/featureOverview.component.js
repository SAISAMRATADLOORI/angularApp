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
var FeatureOverviewComponent = (function (_super) {
    __extends(FeatureOverviewComponent, _super);
    function FeatureOverviewComponent(collectionsService, router, route, location) {
        var _this = _super.call(this) || this;
        _this.collectionsService = collectionsService;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.showRunInfo = true;
        return _this;
    }
    FeatureOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRun = params['runId'];
            _this.collection = params['collectionName'];
            _this.collectionsService.getFeatureInfo(_this.collection, _this.selectedRun).subscribe(function (info) {
                _this.featureInfo = info;
                _this.ready();
            });
        });
    };
    FeatureOverviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    FeatureOverviewComponent.prototype.onSelect = function (info) {
        this.router.navigate(["/featureDetail", this.collection, this.selectedRun, info.name]);
    };
    return FeatureOverviewComponent;
}(loadingPage_1.LoadingPage));
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FeatureOverviewComponent.prototype, "showRunInfo", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVPdmVydmlldy9mZWF0dXJlT3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBdUM7QUFDdkMsMENBQTJEO0FBQzNELDBDQUEyRDtBQUMzRCx1Q0FBcUM7QUFDckMsMEVBQXNFO0FBRXRFLHdEQUFxRDtBQVNyRCxJQUFhLHdCQUF3QjtJQUFTLDRDQUFXO0lBWXZELGtDQUNVLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsUUFBa0I7UUFKNUIsWUFNQSxpQkFBTyxTQUNSO1FBTlcsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQWJsQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFnQnhDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBVUs7UUFURSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsVUFBQSxNQUFNO1lBRWhDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxJQUFJO2dCQUN0RixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFFLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUYsMkNBQVEsR0FBUixVQUFTLElBQVM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUtKLCtCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsQ0E1QzZDLHlCQUFXLEdBNEN4RDtBQXpDVztJQUFSLFlBQUssRUFBRTs7NkRBQTZCO0FBSDNCLHdCQUF3QjtJQUxwQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFFLGlDQUFpQyxDQUFFO0tBQ2pELENBQUM7cUNBYzhCLHdDQUFrQjtRQUM5QixlQUFNO1FBQ1AsdUJBQWM7UUFDWCxpQkFBUTtHQWhCakIsd0JBQXdCLENBNENwQztBQTVDWSw0REFBd0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZmVhdHVyZU92ZXJ2aWV3L2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQge0NvbGxlY3Rpb25zU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sbGVjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7TG9hZGluZ1BhZ2V9IGZyb20gJy4uLy4uL21vZGVscy9sb2FkaW5nUGFnZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWF0dXJlT3ZlcnZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZU92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICcuL2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVPdmVydmlld0NvbXBvbmVudCBleHRlbmRzIExvYWRpbmdQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgIHNlbGVjdGVkUnVuOiBudW1iZXI7XG4gICBjb2xsZWN0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoKSBzaG93UnVuSW5mbzogYm9vbGVhbiA9IHRydWU7XG5cbiAgIGxhYmVsczogc3RyaW5nW107XG4gICBkYXRhOiBudW1iZXJbXTtcbiAgIGNvbG9yczogYW55W107XG5cbiAgIGZlYXR1cmVJbmZvOiB7fTtcblxuIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbGxlY3Rpb25zU2VydmljZTogQ29sbGVjdGlvbnNTZXJ2aWNlICxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4pIHtcbiAgc3VwZXIoKTtcbn1cblxubmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCBwYXJhbXMgPT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSdW4gPSBwYXJhbXNbJ3J1bklkJ107XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gcGFyYW1zWydjb2xsZWN0aW9uTmFtZSddO1xuICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnNTZXJ2aWNlLmdldEZlYXR1cmVJbmZvKHRoaXMuY29sbGVjdGlvbix0aGlzLnNlbGVjdGVkUnVuKS5zdWJzY3JpYmUoIGluZm8gPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlSW5mbyA9IGluZm87XG4gICAgICAgICAgICB0aGlzLnJlYWR5KCk7XG4gICAgICAgICAgfSApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cblxuICAgb25TZWxlY3QoaW5mbzogYW55KXtcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2ZlYXR1cmVEZXRhaWxcIix0aGlzLmNvbGxlY3Rpb24sdGhpcy5zZWxlY3RlZFJ1bixpbmZvLm5hbWVdKTtcbiAgIH1cblxuXG5cblxufVxuIl19

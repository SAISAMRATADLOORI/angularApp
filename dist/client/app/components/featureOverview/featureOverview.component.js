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
            _this.collectionsService.getRunInfo(_this.collection, _this.selectedRun)
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVPdmVydmlldy9mZWF0dXJlT3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBdUM7QUFDdkMsMENBQTJEO0FBQzNELDBDQUEyRDtBQUMzRCx1Q0FBcUM7QUFDckMsMEVBQXNFO0FBRXRFLHdEQUFxRDtBQVNyRCxJQUFhLHdCQUF3QjtJQUFTLDRDQUFXO0lBV3ZELGtDQUNVLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsUUFBa0I7UUFKNUIsWUFNQSxpQkFBTyxTQUNSO1FBTlcsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQWQzQixxQkFBZSxHQUFRLFNBQVMsQ0FBQzs7SUFpQnBDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBcUJLO1FBcEJFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU07WUFFaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQztpQkFDdEQsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFFMUIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLEdBQVcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7Z0JBQ25ELElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUk7b0JBQ2xCO3dCQUNJLGVBQWUsRUFBRSxDQUFFLFNBQVMsRUFBQyxTQUFTLENBQUM7cUJBQzFDO2lCQUNELENBQUM7WUFDQSxDQUFDLENBQUMsQ0FBQztRQUNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFNTCwrQkFBQztBQUFELENBbkRBLEFBbURDLENBbkQ2Qyx5QkFBVyxHQW1EeEQ7QUFuRFksd0JBQXdCO0lBTHBDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUUsaUNBQWlDLENBQUU7S0FDakQsQ0FBQztxQ0FhOEIsd0NBQWtCO1FBQzlCLGVBQU07UUFDUCx1QkFBYztRQUNYLGlCQUFRO0dBZmpCLHdCQUF3QixDQW1EcEM7QUFuRFksNERBQXdCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2ZlYXR1cmVPdmVydmlldy9mZWF0dXJlT3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9ICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0IHtDb2xsZWN0aW9uc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbGxlY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9Db2xsZWN0aW9ucyc7XG5pbXBvcnQge0xvYWRpbmdQYWdlfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9hZGluZ1BhZ2UnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVhdHVyZU92ZXJ2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnLi9mZWF0dXJlT3ZlcnZpZXcuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlT3ZlcnZpZXdDb21wb25lbnQgZXh0ZW5kcyBMb2FkaW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICBzZWxlY3RlZFJ1bkluZm86IGFueSA9IHVuZGVmaW5lZDtcbiAgIHNlbGVjdGVkUnVuOiBudW1iZXI7XG4gICBjb2xsZWN0aW9uOiBzdHJpbmc7XG5cbiAgIGxhYmVsczogc3RyaW5nW107XG4gICBkYXRhOiBudW1iZXJbXTtcbiAgIGNvbG9yczogYW55W107XG5cblxuIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbGxlY3Rpb25zU2VydmljZTogQ29sbGVjdGlvbnNTZXJ2aWNlICxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4pIHtcbiAgc3VwZXIoKTtcbn1cblxubmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCBwYXJhbXMgPT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSdW4gPSBwYXJhbXNbJ3J1bklkJ107XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gcGFyYW1zWydjb2xsZWN0aW9uTmFtZSddO1xuICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnNTZXJ2aWNlLmdldFJ1bkluZm8odGhpcy5jb2xsZWN0aW9uLHRoaXMuc2VsZWN0ZWRSdW4pXG4gICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoaW5mbyA9PiBcbiAgICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yZWFkeSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZFJ1bkluZm8gPSBpbmZvO1xuICAgICAgdGhpcy5sYWJlbHMgPSBbJ1BBU1MgJSAnLCdGQUlMICUnXTtcbiAgICAgIGxldCBwYXNzOiBudW1iZXIgPSB0aGlzLnNlbGVjdGVkUnVuSW5mby5wZXJjZW50YWdlO1xuICAgICAgbGV0IGZhaWwgPSAxMDAgLSBwYXNzO1xuICAgICAgdGhpcy5kYXRhID0gW3Bhc3MsZmFpbF07XG4gICAgICB0aGlzLmNvbG9ycyA9ICBbXG4gICB7IC8vIGZpcnN0IGNvbG9yXG4gICAgICAgYmFja2dyb3VuZENvbG9yOiBbIFwiIzdGRkYwMFwiLFwiI0ZGMDAwMFwiXSBcbiAgIH1cbiAgXTtcbiAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuXG5cblxuXG5cbn1cbiJdfQ==

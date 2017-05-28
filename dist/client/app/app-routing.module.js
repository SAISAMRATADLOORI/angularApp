"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var page_not_found_component_1 = require("./components/pageNotFound/page-not-found.component");
var collections_component_1 = require("./components/collections/collections.component");
var collections_detail_component_1 = require("./components/collectionsDetail/collections-detail.component");
var featureOverview_component_1 = require("./components/featureOverview/featureOverview.component");
var feature_component_1 = require("./components/feature/feature.component");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'featureDetail/:collectionName/:runId/:featureName', component: feature_component_1.FeatureComponent },
    { path: 'collectionDetail/:name', component: collections_detail_component_1.CollectionsDetailComponent },
    { path: 'runOverview/:collectionName/:runId', component: featureOverview_component_1.FeatureOverviewComponent },
    { path: 'collections', component: collections_component_1.CollectionsComponents },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBcUQ7QUFDckQsMENBQXVEO0FBQ3ZELGtGQUFrRjtBQUNsRiwrRkFBMkY7QUFDM0Ysd0ZBQXNGO0FBQ3RGLDRHQUF1RztBQUN2RyxvR0FBZ0c7QUFDaEcsNEVBQXdFO0FBQ3hFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRyxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDckQsRUFBQyxJQUFJLEVBQUUsbURBQW1ELEVBQUMsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBRTtJQUN6RSxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRSxTQUFTLEVBQUUsb0RBQXdCLEVBQUU7SUFDbkYsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBQztJQUN2RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsZ0RBQXFCLEVBQUU7Q0FDaEQsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDekMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwiZmlsZSI6ImFwcC9hcHAtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VOb3RGb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb2xsZWN0aW9uc0NvbXBvbmVudHN9IGZyb20gICcuL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7Q29sbGVjdGlvbnNEZXRhaWxDb21wb25lbnR9IGZyb20gICcuL2NvbXBvbmVudHMvY29sbGVjdGlvbnNEZXRhaWwvY29sbGVjdGlvbnMtZGV0YWlsLmNvbXBvbmVudCdcbmltcG9ydCB7RmVhdHVyZU92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZU92ZXJ2aWV3L2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHtGZWF0dXJlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudCc7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXG4gIHtwYXRoOiAnZmVhdHVyZURldGFpbC86Y29sbGVjdGlvbk5hbWUvOnJ1bklkLzpmZWF0dXJlTmFtZScsY29tcG9uZW50OiBGZWF0dXJlQ29tcG9uZW50fSxcbiAgeyBwYXRoOiAnY29sbGVjdGlvbkRldGFpbC86bmFtZScsIGNvbXBvbmVudDogQ29sbGVjdGlvbnNEZXRhaWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncnVuT3ZlcnZpZXcvOmNvbGxlY3Rpb25OYW1lLzpydW5JZCcsIGNvbXBvbmVudDogRmVhdHVyZU92ZXJ2aWV3Q29tcG9uZW50IH0sXG4gIHtwYXRoOiAnY29sbGVjdGlvbnMnLCBjb21wb25lbnQ6IENvbGxlY3Rpb25zQ29tcG9uZW50c30sXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvZGFzaGJvYXJkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=

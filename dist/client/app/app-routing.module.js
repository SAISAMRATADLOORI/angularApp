"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var page_not_found_component_1 = require("./components/pageNotFound/page-not-found.component");
var collections_component_1 = require("./components/collections/collections.component");
var collections_detail_component_1 = require("./components/collectionsDetail/collections-detail.component");
var featureOverview_component_1 = require("./components/featureOverview/featureOverview.component");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUFxRDtBQUNyRCwwQ0FBdUQ7QUFDdkQsa0ZBQWtGO0FBQ2xGLCtGQUEyRjtBQUMzRix3RkFBc0Y7QUFDdEYsNEdBQXVHO0FBQ3ZHLG9HQUFnRztBQUNoRyxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUcsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBRTtJQUN6RSxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRSxTQUFTLEVBQUUsb0RBQXdCLEVBQUU7SUFDbkYsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBQztJQUN2RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsZ0RBQXFCLEVBQUU7Q0FDaEQsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDekMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwiZmlsZSI6ImFwcC9hcHAtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VOb3RGb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb2xsZWN0aW9uc0NvbXBvbmVudHN9IGZyb20gICcuL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7Q29sbGVjdGlvbnNEZXRhaWxDb21wb25lbnR9IGZyb20gICcuL2NvbXBvbmVudHMvY29sbGVjdGlvbnNEZXRhaWwvY29sbGVjdGlvbnMtZGV0YWlsLmNvbXBvbmVudCdcbmltcG9ydCB7RmVhdHVyZU92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZU92ZXJ2aWV3L2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQnO1xuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ2Rhc2hib2FyZCcsICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdjb2xsZWN0aW9uRGV0YWlsLzpuYW1lJywgY29tcG9uZW50OiBDb2xsZWN0aW9uc0RldGFpbENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdydW5PdmVydmlldy86Y29sbGVjdGlvbk5hbWUvOnJ1bklkJywgY29tcG9uZW50OiBGZWF0dXJlT3ZlcnZpZXdDb21wb25lbnQgfSxcbiAge3BhdGg6ICdjb2xsZWN0aW9ucycsIGNvbXBvbmVudDogQ29sbGVjdGlvbnNDb21wb25lbnRzfSxcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9kYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpIF0sXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==

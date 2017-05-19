"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var page_not_found_component_1 = require("./components/pageNotFound/page-not-found.component");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var toolbar_component_1 = require("./components/toolbar/toolbar.component");
var collections_component_1 = require("./components/collections/collections.component");
var collections_service_1 = require("./services/collections.service");
var collections_detail_component_1 = require("./components/collectionsDetail/collections-detail.component");
var loading_indicator_component_1 = require("./components/loadingIndicator/loading-indicator.component");
var ng2_charts_1 = require("ng2-charts");
var piechart_component_1 = require("./components/pieChart/piechart.component");
var run_info_table_component_1 = require("./components/runInfoTable/run-info-table.component");
var featureOverview_component_1 = require("./components/featureOverview/featureOverview.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, material_1.MaterialModule, animations_1.BrowserAnimationsModule, http_1.HttpModule, ng2_charts_1.ChartsModule],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, page_not_found_component_1.PageNotFoundComponent, toolbar_component_1.ToolBarComponent, collections_component_1.CollectionsComponents, collections_detail_component_1.CollectionsDetailComponent, loading_indicator_component_1.LoadingIndicatorComponent, piechart_component_1.PieChartComponent, run_info_table_component_1.RunInfoTableComponent, featureOverview_component_1.FeatureOverviewComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [collections_service_1.CollectionsService]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFDOUMsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCx3Q0FBMkM7QUFDM0MsaURBQWdEO0FBQ2hELGtGQUE4RTtBQUM5RSwyREFBc0Q7QUFDdEQsK0ZBQXlGO0FBQ3pGLDhDQUFtRDtBQUNuRCxtRUFBK0U7QUFDL0UsNEVBQTBFO0FBQzFFLHdGQUFxRjtBQUNyRixzRUFBa0U7QUFDbEUsNEdBQXVHO0FBQ3ZHLHlHQUFvRztBQUNwRyx5Q0FBd0M7QUFDeEMsK0VBQTJFO0FBQzNFLCtGQUF5RjtBQUN6RixvR0FBZ0c7QUFTaEcsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixTQUFTO0lBUHJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBTyxDQUFFLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxxQ0FBZ0IsRUFBRSx5QkFBYyxFQUFFLG9DQUF1QixFQUFDLGlCQUFVLEVBQUMseUJBQVksQ0FBRTtRQUMvSCxZQUFZLEVBQUUsQ0FBRSw0QkFBWSxFQUFFLHdDQUFrQixFQUFFLGdEQUFxQixFQUFFLG9DQUFnQixFQUFFLDZDQUFxQixFQUFDLHlEQUEwQixFQUFDLHVEQUF5QixFQUFDLHNDQUFpQixFQUFDLGdEQUFxQixFQUFDLG9EQUF3QixDQUFDO1FBQ3ZPLFNBQVMsRUFBSyxDQUFFLDRCQUFZLENBQUU7UUFDOUIsU0FBUyxFQUFFLENBQUUsd0NBQWtCLENBQUU7S0FFbEMsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7UGFnZU5vdEZvdW5kQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZU5vdEZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFRvb2xCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbGxlY3Rpb25zQ29tcG9uZW50c30gZnJvbSAnLi9jb21wb25lbnRzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbGxlY3Rpb25zU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7Q29sbGVjdGlvbnNEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9jb2xsZWN0aW9uc0RldGFpbC9jb2xsZWN0aW9ucy1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7TG9hZGluZ0luZGljYXRvckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmdJbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRzTW9kdWxlfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCB7UGllQ2hhcnRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9waWVDaGFydC9waWVjaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHtSdW5JbmZvVGFibGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9ydW5JbmZvVGFibGUvcnVuLWluZm8tdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7RmVhdHVyZU92ZXJ2aWV3Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZU92ZXJ2aWV3L2ZlYXR1cmVPdmVydmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFsgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGUsIE1hdGVyaWFsTW9kdWxlLCBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxIdHRwTW9kdWxlLENoYXJ0c01vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBEYXNoYm9hcmRDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgVG9vbEJhckNvbXBvbmVudCAsQ29sbGVjdGlvbnNDb21wb25lbnRzLENvbGxlY3Rpb25zRGV0YWlsQ29tcG9uZW50LExvYWRpbmdJbmRpY2F0b3JDb21wb25lbnQsUGllQ2hhcnRDb21wb25lbnQsUnVuSW5mb1RhYmxlQ29tcG9uZW50LEZlYXR1cmVPdmVydmlld0NvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogICAgWyBBcHBDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzOiBbIENvbGxlY3Rpb25zU2VydmljZSBdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19

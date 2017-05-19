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
var core_1 = require("@angular/core");
var PieChartComponent = (function () {
    function PieChartComponent() {
        // Pie
        this.pieChartLabels = ['Pass %', 'Fail %'];
        this.pieChartData = [60, 40];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            maintainAspectRatio: false
        };
        this.pieChartColors = [
            {
                backgroundColor: ["#5fc536", "#be2c54"]
            }
        ];
    }
    // events
    PieChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return PieChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PieChartComponent.prototype, "pieChartLabels", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PieChartComponent.prototype, "pieChartData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PieChartComponent.prototype, "pieChartColors", void 0);
PieChartComponent = __decorate([
    core_1.Component({
        selector: 'pie-chart',
        templateUrl: './piechart.component.html'
    })
], PieChartComponent);
exports.PieChartComponent = PieChartComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL3BpZUNoYXJ0L3BpZWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBT2hELElBQWEsaUJBQWlCO0lBSjlCO1FBS0UsTUFBTTtRQUNVLG1CQUFjLEdBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsaUJBQVksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMxQyxpQkFBWSxHQUFVLEtBQUssQ0FBQztRQUU1QixvQkFBZSxHQUFHO1lBQ3ZCLG1CQUFtQixFQUFFLEtBQUs7U0FDM0IsQ0FBQTtRQUVjLG1CQUFjLEdBQWM7WUFDMUM7Z0JBQ0ksZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzthQUMxQztTQUNELENBQUM7SUFVSixDQUFDO0lBUkMsU0FBUztJQUNGLHdDQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sd0NBQVksR0FBbkIsVUFBb0IsQ0FBSztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDSCx3QkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF0QlU7SUFBUixZQUFLLEVBQUU7O3lEQUF1RDtBQUN0RDtJQUFSLFlBQUssRUFBRTs7dURBQXlDO0FBT3pDO0lBQVIsWUFBSyxFQUFFOzhCQUF1QixLQUFLO3lEQUlqQztBQWRTLGlCQUFpQjtJQUo3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDJCQUEyQjtLQUN6QyxDQUFDO0dBQ1csaUJBQWlCLENBd0I3QjtBQXhCWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcGllQ2hhcnQvcGllY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGllLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZWNoYXJ0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQaWVDaGFydENvbXBvbmVudCB7XG4gIC8vIFBpZVxuICBASW5wdXQoKSBwdWJsaWMgcGllQ2hhcnRMYWJlbHM6c3RyaW5nW10gPSBbJ1Bhc3MgJScsICdGYWlsICUnXTtcbiAgQElucHV0KCkgcHVibGljIHBpZUNoYXJ0RGF0YTpudW1iZXJbXSA9ICBbNjAsIDQwXVxuICBwdWJsaWMgcGllQ2hhcnRUeXBlOnN0cmluZyA9ICdwaWUnO1xuXG4gIHB1YmxpYyBwaWVDaGFydE9wdGlvbnMgPSB7XG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2VcbiAgfVxuIFxuIEBJbnB1dCgpIHB1YmxpYyBwaWVDaGFydENvbG9yczpBcnJheTxhbnk+ID0gW1xuICAgeyAvLyBmaXJzdCBjb2xvclxuICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzVmYzUzNlwiLCBcIiNiZTJjNTRcIl0gXG4gICB9XG4gIF07XG5cbiAgLy8gZXZlbnRzXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZTphbnkpOnZvaWQge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG4gXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZTphbnkpOnZvaWQge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59Il19

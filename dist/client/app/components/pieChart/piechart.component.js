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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL3BpZUNoYXJ0L3BpZWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFnRDtBQU9oRCxJQUFhLGlCQUFpQjtJQUo5QjtRQUtFLE1BQU07UUFDVSxtQkFBYyxHQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLGlCQUFZLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDMUMsaUJBQVksR0FBVSxLQUFLLENBQUM7UUFFNUIsb0JBQWUsR0FBRztZQUN2QixtQkFBbUIsRUFBRSxLQUFLO1NBQzNCLENBQUE7UUFFYyxtQkFBYyxHQUFjO1lBQzFDO2dCQUNJLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7YUFDMUM7U0FDRCxDQUFDO0lBVUosQ0FBQztJQVJDLFNBQVM7SUFDRix3Q0FBWSxHQUFuQixVQUFvQixDQUFLO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLHdDQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBdEJVO0lBQVIsWUFBSyxFQUFFOzt5REFBdUQ7QUFDdEQ7SUFBUixZQUFLLEVBQUU7O3VEQUF5QztBQU96QztJQUFSLFlBQUssRUFBRTs4QkFBdUIsS0FBSzt5REFJakM7QUFkUyxpQkFBaUI7SUFKN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwyQkFBMkI7S0FDekMsQ0FBQztHQUNXLGlCQUFpQixDQXdCN0I7QUF4QlksOENBQWlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3BpZUNoYXJ0L3BpZWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWVjaGFydC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGllQ2hhcnRDb21wb25lbnQge1xuICAvLyBQaWVcbiAgQElucHV0KCkgcHVibGljIHBpZUNoYXJ0TGFiZWxzOnN0cmluZ1tdID0gWydQYXNzICUnLCAnRmFpbCAlJ107XG4gIEBJbnB1dCgpIHB1YmxpYyBwaWVDaGFydERhdGE6bnVtYmVyW10gPSAgWzYwLCA0MF1cbiAgcHVibGljIHBpZUNoYXJ0VHlwZTpzdHJpbmcgPSAncGllJztcblxuICBwdWJsaWMgcGllQ2hhcnRPcHRpb25zID0ge1xuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlXG4gIH1cbiBcbiBASW5wdXQoKSBwdWJsaWMgcGllQ2hhcnRDb2xvcnM6QXJyYXk8YW55PiA9IFtcbiAgIHsgLy8gZmlyc3QgY29sb3JcbiAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiM1ZmM1MzZcIiwgXCIjYmUyYzU0XCJdIFxuICAgfVxuICBdO1xuXG4gIC8vIGV2ZW50c1xuICBwdWJsaWMgY2hhcnRDbGlja2VkKGU6YW55KTp2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuIFxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGU6YW55KTp2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufSJdfQ==

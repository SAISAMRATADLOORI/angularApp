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
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var collections_service_1 = require("../../services/collections.service");
var loadingPage_1 = require("../../models/loadingPage");
var CollectionsDetailComponent = (function (_super) {
    __extends(CollectionsDetailComponent, _super);
    function CollectionsDetailComponent(route, location, collectionsService, router) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.location = location;
        _this.collectionsService = collectionsService;
        _this.router = router;
        return _this;
    }
    CollectionsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.collection = params['name'];
            _this.collectionsService.getRuns(params['name']).subscribe(function (collections) {
                _this.ready();
                _this.runs = collections.reverse();
            });
        });
    };
    CollectionsDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CollectionsDetailComponent.prototype.onSelect = function (run) {
        this.selectedRun = run;
    };
    return CollectionsDetailComponent;
}(loadingPage_1.LoadingPage));
CollectionsDetailComponent = __decorate([
    core_1.Component({
        selector: 'collections-detail',
        templateUrl: './collections-detail.component.html',
        styleUrls: ['./collections-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        collections_service_1.CollectionsService,
        router_1.Router])
], CollectionsDetailComponent);
exports.CollectionsDetailComponent = CollectionsDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL2NvbGxlY3Rpb25zRGV0YWlsL2NvbGxlY3Rpb25zLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBRXpELDBDQUFrRTtBQUNsRSwwQ0FBMkQ7QUFDM0QsdUNBQXFDO0FBQ3JDLDBFQUFzRTtBQUV0RSx3REFBcUQ7QUFTckQsSUFBYSwwQkFBMEI7SUFBUyw4Q0FBVztJQUt6RCxvQ0FDUSxLQUFxQixFQUNyQixRQUFrQixFQUNsQixrQkFBc0MsRUFDdEMsTUFBYztRQUp0QixZQU1BLGlCQUFPLFNBQ1I7UUFOUyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsWUFBTSxHQUFOLE1BQU0sQ0FBUTs7SUFHeEIsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFkQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsVUFBQSxNQUFNO1lBRS9CLEtBQUksQ0FBQyxVQUFVLEdBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztnQkFFckUsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FDRixDQUFDO1FBQ0UsQ0FBQyxDQUNOLENBQUE7SUFJSCxDQUFDO0lBRUQsMkNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVBLDZDQUFRLEdBQVIsVUFBUyxHQUFXO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBRXpCLENBQUM7SUFHRCxpQ0FBQztBQUFELENBMUNBLEFBMENDLENBMUMrQyx5QkFBVyxHQTBDMUQ7QUExQ1ksMEJBQTBCO0lBTHRDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsU0FBUyxFQUFFLENBQUUsb0NBQW9DLENBQUU7S0FDcEQsQ0FBQztxQ0FPZSx1QkFBYztRQUNYLGlCQUFRO1FBQ0Usd0NBQWtCO1FBQzlCLGVBQU07R0FUWCwwQkFBMEIsQ0EwQ3RDO0FBMUNZLGdFQUEwQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb2xsZWN0aW9uc0RldGFpbC9jb2xsZWN0aW9ucy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgLFJvdXRlcn0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCB7Q29sbGVjdGlvbnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvQ29sbGVjdGlvbnMnO1xuaW1wb3J0IHtMb2FkaW5nUGFnZX0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvYWRpbmdQYWdlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbGxlY3Rpb25zLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsZWN0aW9ucy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJy4vY29sbGVjdGlvbnMtZGV0YWlsLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbnNEZXRhaWxDb21wb25lbnQgZXh0ZW5kcyBMb2FkaW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJ1bnM6IE51bWJlcltdO1xuICBzZWxlY3RlZFJ1bjogbnVtYmVyO1xuICBjb2xsZWN0aW9uOiBzdHJpbmc7XG4gXG4gIGNvbnN0cnVjdG9yKFxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gIHByaXZhdGUgY29sbGVjdGlvbnNTZXJ2aWNlOiBDb2xsZWN0aW9uc1NlcnZpY2UgLFxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4pIHtcbiAgc3VwZXIoKTtcbn1cblxubmdPbkluaXQoKTogdm9pZCB7XG5cbiAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCBwYXJhbXMgPT5cbiAgICAgICAge1xuICAgICAgdGhpcy5jb2xsZWN0aW9uID1wYXJhbXNbJ25hbWUnXTtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnNTZXJ2aWNlLmdldFJ1bnMocGFyYW1zWyduYW1lJ10pLnN1YnNjcmliZShjb2xsZWN0aW9ucyA9PiBcbiAgICB7XG4gICAgICB0aGlzLnJlYWR5KCk7XG4gICAgICB0aGlzLnJ1bnMgPSBjb2xsZWN0aW9ucy5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgKTtcbiAgICAgICAgfVxuICApXG5cbiAgXG4gICAgXG59XG5cbmdvQmFjaygpOiB2b2lkIHtcbiAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG59XG5cbiBvblNlbGVjdChydW46IG51bWJlcik6IHZvaWQge1xuICB0aGlzLnNlbGVjdGVkUnVuID0gcnVuO1xuICAgIFxufVxuXG5cbn1cbiJdfQ==

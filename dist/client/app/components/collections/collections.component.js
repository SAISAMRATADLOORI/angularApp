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
var collections_service_1 = require("../../services/collections.service");
var loadingPage_1 = require("../../models/loadingPage");
var CollectionsComponents = (function (_super) {
    __extends(CollectionsComponents, _super);
    function CollectionsComponents(router, collectionService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.collectionService = collectionService;
        return _this;
    }
    CollectionsComponents.prototype.ngOnInit = function () {
        this.getCollections();
    };
    CollectionsComponents.prototype.getCollections = function () {
        var _this = this;
        this.collectionService.getCollections().subscribe(function (collections) {
            _this.ready();
            _this.collections = collections.reverse();
        }, function (error) { console.log("error -" + error); _this.ready(); });
    };
    CollectionsComponents.prototype.onSelect = function (collection) {
        this.selectedCollection = collection;
        this.router.navigate(["/collectionDetail", this.selectedCollection.name]);
    };
    return CollectionsComponents;
}(loadingPage_1.LoadingPage));
CollectionsComponents = __decorate([
    core_1.Component({
        selector: 'my-collections',
        templateUrl: './collections.component.html',
        styleUrls: ['./collections.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, collections_service_1.CollectionsService])
], CollectionsComponents);
exports.CollectionsComponents = CollectionsComponents;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFHMUMsMENBQXVDO0FBQ3ZDLDBFQUFzRTtBQUN0RSx3REFBcUQ7QUFNckQsSUFBYSxxQkFBcUI7SUFBUyx5Q0FBVztJQUtwRCwrQkFBb0IsTUFBYyxFQUFVLGlCQUFxQztRQUFqRixZQUNJLGlCQUFPLFNBQ1Y7UUFGbUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7O0lBRWpGLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUMzQyxVQUFBLFdBQVc7WUFBSyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFBQSxDQUFDLEVBQzVDLFVBQUEsS0FBSyxJQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFFL0QsQ0FBQztJQUVBLHdDQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUdELDRCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQjBDLHlCQUFXLEdBMkJyRDtBQTNCWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMzQyxDQUFDO3FDQU00QixlQUFNLEVBQTZCLHdDQUFrQjtHQUx0RSxxQkFBcUIsQ0EyQmpDO0FBM0JZLHNEQUFxQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvQ29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29sbGVjdGlvbnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7TG9hZGluZ1BhZ2V9IGZyb20gJy4uLy4uL21vZGVscy9sb2FkaW5nUGFnZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb2xsZWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsZWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbGxlY3Rpb25zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uc0NvbXBvbmVudHMgZXh0ZW5kcyBMb2FkaW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VsZWN0ZWRDb2xsZWN0aW9uOiBDb2xsZWN0aW9uIDtcbiAgY29sbGVjdGlvbnM6IENvbGxlY3Rpb25bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNvbGxlY3Rpb25TZXJ2aWNlOiBDb2xsZWN0aW9uc1NlcnZpY2UpIHtcbiAgICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldENvbGxlY3Rpb25zKCk7XG4gIH1cblxuICBnZXRDb2xsZWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25TZXJ2aWNlLmdldENvbGxlY3Rpb25zKCkuc3Vic2NyaWJlKFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0+IHt0aGlzLnJlYWR5KCk7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnMucmV2ZXJzZSgpO30sXG4gICAgICAgICAgZXJyb3IgPT4ge2NvbnNvbGUubG9nKFwiZXJyb3IgLVwiK2Vycm9yKTt0aGlzLnJlYWR5KCk7fSk7XG4gICAgXG4gIH1cblxuICAgb25TZWxlY3QoY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRDb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY29sbGVjdGlvbkRldGFpbFwiLHRoaXMuc2VsZWN0ZWRDb2xsZWN0aW9uLm5hbWVdKTtcbn1cblxuIFxufVxuIl19

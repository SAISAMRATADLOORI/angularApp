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
var Collections_1 = require("../models/Collections");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/retry");
var CollectionsService = (function () {
    function CollectionsService(http) {
        this.http = http;
        this.collectionsUrl = "https://10.5.9.123:8443/collections";
    }
    CollectionsService.prototype.getCollections = function () {
        return this.http.get(this.collectionsUrl)
            .map(this.extractData)
            .retry(3)
            .catch(this.handleError);
    };
    CollectionsService.prototype.getRuns = function (collection) {
        return this.http.get(this.collectionsUrl + "/" + collection + "/runs")
            .map(this.extractRuns)
            .retry(3)
            .catch(this.handleError);
    };
    CollectionsService.prototype.extractRuns = function (res) {
        var body = res.json();
        var collections = [];
        console.log("BODY - " + body);
        body.forEach(function (element) {
            console.log("INserting  number to collection -- " + element);
            collections.push(element);
        });
        return collections || [];
    };
    CollectionsService.prototype.extractData = function (res) {
        var body = res.json();
        var collections = [];
        console.log("BODY - " + body);
        body.forEach(function (element) {
            var collection = new Collections_1.Collection();
            collection.name = element;
            console.log("INserting  element to collection -- " + element);
            collections.push(collection);
        });
        return collections || [];
    };
    CollectionsService.prototype.getRunInfo = function (collection, run) {
        return this.http.get(this.collectionsUrl + "/" + collection + "/runs/" + run)
            .map(this.extractRunInfo)
            .retry(3)
            .catch(this.handleError);
    };
    CollectionsService.prototype.extractRunInfo = function (res) {
        var body = res.json();
        return body || {};
    };
    CollectionsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return CollectionsService;
}());
CollectionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CollectionsService);
exports.CollectionsService = CollectionsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMscURBQWlEO0FBQ2pELHNDQUE4QztBQUU5Qyw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFHakMsSUFBYSxrQkFBa0I7SUFJM0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLG1CQUFjLEdBQUcscUNBQXFDLENBQUM7SUFJL0QsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Qsb0NBQU8sR0FBUCxVQUFRLFVBQWtCO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDUixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUSx3Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQWU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBc0MsT0FBUyxDQUFDLENBQUE7WUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFVSx3Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLFdBQVcsR0FBaUIsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFlO1lBQ3pCLElBQUksVUFBVSxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFBO1lBQ2pDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXVDLE9BQVMsQ0FBQyxDQUFBO1lBQzVELFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakMsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWtCLEVBQUMsR0FBVztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUMsVUFBVSxHQUFDLFFBQVEsR0FBQyxHQUFHLENBQUM7YUFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLDJDQUFjLEdBQXRCLFVBQXVCLEdBQWE7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyx3Q0FBVyxHQUFuQixVQUFxQixLQUFxQjtRQUN4QyxxRUFBcUU7UUFDckUsSUFBSSxNQUFjLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLGVBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFlBQU0sS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLFVBQUksR0FBSyxDQUFDO1FBQ2hFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVELENBQUM7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0gseUJBQUM7QUFBRCxDQTdFQSxBQTZFQyxJQUFBO0FBN0VZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUtpQixXQUFJO0dBSnJCLGtCQUFrQixDQTZFOUI7QUE3RVksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSAnLi4vbW9kZWxzL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEh0dHAsUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbnNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgY29sbGVjdGlvbnNVcmwgPSBgaHR0cHM6Ly8xMC41LjkuMTIzOjg0NDMvY29sbGVjdGlvbnNgO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcblxuICAgIH1cbiAgIFxuICAgIGdldENvbGxlY3Rpb25zKCk6IE9ic2VydmFibGU8Q29sbGVjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwpXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgICAgLnJldHJ5KDMpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cblxuICAgIGdldFJ1bnMoY29sbGVjdGlvbjogU3RyaW5nKTogT2JzZXJ2YWJsZTxOdW1iZXJbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbGxlY3Rpb25zVXJsK1wiL1wiK2NvbGxlY3Rpb24rXCIvcnVuc1wiKVxuICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdFJ1bnMpXG4gICAgICAgICAgICAgIC5yZXRyeSgzKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgIHByaXZhdGUgZXh0cmFjdFJ1bnMocmVzOiBSZXNwb25zZSkge1xuICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICAgICBsZXQgY29sbGVjdGlvbnM6IE51bWJlcltdID0gW107XG4gICAgICAgY29uc29sZS5sb2coXCJCT0RZIC0gXCIrYm9keSk7XG4gICAgICAgYm9keS5mb3JFYWNoKChlbGVtZW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSU5zZXJ0aW5nICBudW1iZXIgdG8gY29sbGVjdGlvbiAtLSAke2VsZW1lbnR9YClcbiAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChlbGVtZW50KTtcblxuICAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25zIHx8IFtdO1xuICB9XG5cbiAgICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgICAgIGxldCBjb2xsZWN0aW9uczogQ29sbGVjdGlvbltdID0gW107XG4gICAgICAgY29uc29sZS5sb2coXCJCT0RZIC0gXCIrYm9keSk7XG4gICAgICAgYm9keS5mb3JFYWNoKChlbGVtZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgbGV0IGNvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbigpXG4gICAgICAgICAgIGNvbGxlY3Rpb24ubmFtZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2coYElOc2VydGluZyAgZWxlbWVudCB0byBjb2xsZWN0aW9uIC0tICR7ZWxlbWVudH1gKVxuICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuXG4gICAgICAgfSk7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbnMgfHwgW107XG4gIH1cblxuICBnZXRSdW5JbmZvKGNvbGxlY3Rpb246IFN0cmluZyxydW46IG51bWJlcik6IE9ic2VydmFibGU8e30+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb2xsZWN0aW9uc1VybCtcIi9cIitjb2xsZWN0aW9uK1wiL3J1bnMvXCIrcnVuKVxuICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdFJ1bkluZm8pXG4gICAgICAgICAgICAgIC5yZXRyeSgzKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRyYWN0UnVuSW5mbyhyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgICAgIFxuICAgICAgcmV0dXJuIGJvZHkgfHwge307XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB5b3UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XG4gICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgfVxuXG5cbn1cbiJdfQ==

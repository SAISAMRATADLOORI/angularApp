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
var config = require("../config");
var CollectionsService = (function () {
    function CollectionsService(http) {
        this.http = http;
        this.collectionsUrl = config.apiUrl + "/collections";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMscURBQWlEO0FBQ2pELHNDQUE4QztBQUU5Qyw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsa0NBQW9DO0FBR3BDLElBQWEsa0JBQWtCO0lBSTNCLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixtQkFBYyxHQUFNLE1BQU0sQ0FBQyxNQUFNLGlCQUFjLENBQUM7SUFJeEQsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Qsb0NBQU8sR0FBUCxVQUFRLFVBQWtCO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDUixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUSx3Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQWU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBc0MsT0FBUyxDQUFDLENBQUE7WUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFVSx3Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLFdBQVcsR0FBaUIsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFlO1lBQ3pCLElBQUksVUFBVSxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFBO1lBQ2pDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXVDLE9BQVMsQ0FBQyxDQUFBO1lBQzVELFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakMsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWtCLEVBQUMsR0FBVztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUMsVUFBVSxHQUFDLFFBQVEsR0FBQyxHQUFHLENBQUM7YUFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLDJDQUFjLEdBQXRCLFVBQXVCLEdBQWE7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyx3Q0FBVyxHQUFuQixVQUFxQixLQUFxQjtRQUN4QyxxRUFBcUU7UUFDckUsSUFBSSxNQUFjLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLGVBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFlBQU0sS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLFVBQUksR0FBSyxDQUFDO1FBQ2hFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVELENBQUM7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0gseUJBQUM7QUFBRCxDQTdFQSxBQTZFQyxJQUFBO0FBN0VZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUtpQixXQUFJO0dBSnJCLGtCQUFrQixDQTZFOUI7QUE3RVksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSAnLi4vbW9kZWxzL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEh0dHAsUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnknO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uc1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBjb2xsZWN0aW9uc1VybCA9IGAke2NvbmZpZy5hcGlVcmx9L2NvbGxlY3Rpb25zYDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XG5cbiAgICB9XG4gICBcbiAgICBnZXRDb2xsZWN0aW9ucygpOiBPYnNlcnZhYmxlPENvbGxlY3Rpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbGxlY3Rpb25zVXJsKVxuICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAgIC5yZXRyeSgzKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG5cbiAgICBnZXRSdW5zKGNvbGxlY3Rpb246IFN0cmluZyk6IE9ic2VydmFibGU8TnVtYmVyW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb2xsZWN0aW9uc1VybCtcIi9cIitjb2xsZWN0aW9uK1wiL3J1bnNcIilcbiAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3RSdW5zKVxuICAgICAgICAgICAgICAucmV0cnkoMylcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgICBwcml2YXRlIGV4dHJhY3RSdW5zKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgbGV0IGNvbGxlY3Rpb25zOiBOdW1iZXJbXSA9IFtdO1xuICAgICAgIGNvbnNvbGUubG9nKFwiQk9EWSAtIFwiK2JvZHkpO1xuICAgICAgIGJvZHkuZm9yRWFjaCgoZWxlbWVudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYElOc2VydGluZyAgbnVtYmVyIHRvIGNvbGxlY3Rpb24gLS0gJHtlbGVtZW50fWApXG4gICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICB9KTtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICAgICBsZXQgY29sbGVjdGlvbnM6IENvbGxlY3Rpb25bXSA9IFtdO1xuICAgICAgIGNvbnNvbGUubG9nKFwiQk9EWSAtIFwiK2JvZHkpO1xuICAgICAgIGJvZHkuZm9yRWFjaCgoZWxlbWVudDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgIGxldCBjb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24oKVxuICAgICAgICAgICBjb2xsZWN0aW9uLm5hbWUgPSBlbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJTnNlcnRpbmcgIGVsZW1lbnQgdG8gY29sbGVjdGlvbiAtLSAke2VsZW1lbnR9YClcbiAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChjb2xsZWN0aW9uKTtcblxuICAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25zIHx8IFtdO1xuICB9XG5cbiAgZ2V0UnVuSW5mbyhjb2xsZWN0aW9uOiBTdHJpbmcscnVuOiBudW1iZXIpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwrXCIvXCIrY29sbGVjdGlvbitcIi9ydW5zL1wiK3J1bilcbiAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3RSdW5JbmZvKVxuICAgICAgICAgICAgICAucmV0cnkoMylcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXh0cmFjdFJ1bkluZm8ocmVzOiBSZXNwb25zZSkge1xuICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICAgICBcbiAgICAgIHJldHVybiBib2R5IHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgeW91IG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xuICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cblxuXG59XG4iXX0=

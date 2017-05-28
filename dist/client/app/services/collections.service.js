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
    CollectionsService.prototype.getFeatureInfo = function (collection, run) {
        return this.http.get(this.collectionsUrl + "/" + collection + "/runs/" + run + "/features")
            .map(this.extractRunInfo)
            .retry(3)
            .catch(this.handleError);
    };
    CollectionsService.prototype.getFeature = function (collection, run, featureName) {
        return this.http.get(this.collectionsUrl + "/" + collection + "/runs/" + run + "/features/" + featureName)
            .map(this.extractRunInfo)
            .retry(3)
            .catch(this.handleError);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHFEQUFpRDtBQUNqRCxzQ0FBOEM7QUFFOUMsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBR2pDLElBQWEsa0JBQWtCO0lBSTNCLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixtQkFBYyxHQUFHLHFDQUFxQyxDQUFDO0lBSS9ELENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELG9DQUFPLEdBQVAsVUFBUSxVQUFrQjtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUMsVUFBVSxHQUFDLE9BQU8sQ0FBQzthQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRVEsd0NBQVcsR0FBbkIsVUFBb0IsR0FBYTtRQUMvQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxXQUFXLEdBQWEsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFP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LE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxHQUFLLENBQUM7UUFDaEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUQsQ0FBQztRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHSCx5QkFBQztBQUFELENBNUZBLEFBNEZDLElBQUE7QUE1Rlksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBS2lCLFdBQUk7R0FKckIsa0JBQWtCLENBNEY5QjtBQTVGWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2NvbGxlY3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tICcuLi9tb2RlbHMvQ29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgSHR0cCxSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9yZXRyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uc1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBjb2xsZWN0aW9uc1VybCA9IGBodHRwczovLzEwLjUuOS4xMjM6ODQ0My9jb2xsZWN0aW9uc2A7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe1xuXG4gICAgfVxuICAgXG4gICAgZ2V0Q29sbGVjdGlvbnMoKTogT2JzZXJ2YWJsZTxDb2xsZWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb2xsZWN0aW9uc1VybClcbiAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgICAucmV0cnkoMylcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuXG4gICAgZ2V0UnVucyhjb2xsZWN0aW9uOiBTdHJpbmcpOiBPYnNlcnZhYmxlPE51bWJlcltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwrXCIvXCIrY29sbGVjdGlvbitcIi9ydW5zXCIpXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0UnVucylcbiAgICAgICAgICAgICAgLnJldHJ5KDMpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICAgcHJpdmF0ZSBleHRyYWN0UnVucyhyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgICAgIGxldCBjb2xsZWN0aW9uczogTnVtYmVyW10gPSBbXTtcbiAgICAgICBjb25zb2xlLmxvZyhcIkJPRFkgLSBcIitib2R5KTtcbiAgICAgICBib2R5LmZvckVhY2goKGVsZW1lbnQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJTnNlcnRpbmcgIG51bWJlciB0byBjb2xsZWN0aW9uIC0tICR7ZWxlbWVudH1gKVxuICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgfSk7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbnMgfHwgW107XG4gIH1cblxuICAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgbGV0IGNvbGxlY3Rpb25zOiBDb2xsZWN0aW9uW10gPSBbXTtcbiAgICAgICBjb25zb2xlLmxvZyhcIkJPRFkgLSBcIitib2R5KTtcbiAgICAgICBib2R5LmZvckVhY2goKGVsZW1lbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKClcbiAgICAgICAgICAgY29sbGVjdGlvbi5uYW1lID0gZWxlbWVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSU5zZXJ0aW5nICBlbGVtZW50IHRvIGNvbGxlY3Rpb24gLS0gJHtlbGVtZW50fWApXG4gICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2goY29sbGVjdGlvbik7XG5cbiAgICAgICB9KTtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIGdldFJ1bkluZm8oY29sbGVjdGlvbjogU3RyaW5nLHJ1bjogbnVtYmVyKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbGxlY3Rpb25zVXJsK1wiL1wiK2NvbGxlY3Rpb24rXCIvcnVucy9cIitydW4pXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0UnVuSW5mbylcbiAgICAgICAgICAgICAgLnJldHJ5KDMpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dHJhY3RSdW5JbmZvKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgXG4gICAgICByZXR1cm4gYm9keSB8fCB7fTtcbiAgfVxuXG4gIGdldEZlYXR1cmVJbmZvKGNvbGxlY3Rpb246IFN0cmluZyxydW46IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwrXCIvXCIrY29sbGVjdGlvbitcIi9ydW5zL1wiK3J1bitcIi9mZWF0dXJlc1wiKVxuICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdFJ1bkluZm8pXG4gICAgICAgICAgICAgIC5yZXRyeSgzKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgZ2V0RmVhdHVyZShjb2xsZWN0aW9uOiBTdHJpbmcscnVuOiBudW1iZXIsZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwrXCIvXCIrY29sbGVjdGlvbitcIi9ydW5zL1wiK3J1bitcIi9mZWF0dXJlcy9cIitmZWF0dXJlTmFtZSlcbiAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3RSdW5JbmZvKVxuICAgICAgICAgICAgICAucmV0cnkoMylcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHlvdSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIGxldCBlcnJNc2c6IHN0cmluZztcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG5cblxufVxuIl19

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
        this.collectionsUrl = "http://10.5.9.123:8090/collections";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMscURBQWlEO0FBQ2pELHNDQUE4QztBQUU5Qyw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFHakMsSUFBYSxrQkFBa0I7SUFJM0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLG1CQUFjLEdBQUcsb0NBQW9DLENBQUM7SUFJOUQsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Qsb0NBQU8sR0FBUCxVQUFRLFVBQWtCO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDUixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUSx3Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQWU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBc0MsT0FBUyxDQUFDLENBQUE7WUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFVSx3Q0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLFdBQVcsR0FBaUIsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFlO1lBQ3pCLElBQUksVUFBVSxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFBO1lBQ2pDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXVDLE9BQVMsQ0FBQyxDQUFBO1lBQzVELFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakMsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWtCLEVBQUMsR0FBVztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUMsVUFBVSxHQUFDLFFBQVEsR0FBQyxHQUFHLENBQUM7YUFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLDJDQUFjLEdBQXRCLFVBQXVCLEdBQWE7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyx3Q0FBVyxHQUFuQixVQUFxQixLQUFxQjtRQUN4QyxxRUFBcUU7UUFDckUsSUFBSSxNQUFjLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLGVBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFlBQU0sS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLFVBQUksR0FBSyxDQUFDO1FBQ2hFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVELENBQUM7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0gseUJBQUM7QUFBRCxDQTdFQSxBQTZFQyxJQUFBO0FBN0VZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUtpQixXQUFJO0dBSnJCLGtCQUFrQixDQTZFOUI7QUE3RVksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSAnLi4vbW9kZWxzL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEh0dHAsUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbnNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgY29sbGVjdGlvbnNVcmwgPSBgaHR0cDovLzEwLjUuOS4xMjM6ODA5MC9jb2xsZWN0aW9uc2A7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe1xuXG4gICAgfVxuICAgXG4gICAgZ2V0Q29sbGVjdGlvbnMoKTogT2JzZXJ2YWJsZTxDb2xsZWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb2xsZWN0aW9uc1VybClcbiAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgICAucmV0cnkoMylcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuXG4gICAgZ2V0UnVucyhjb2xsZWN0aW9uOiBTdHJpbmcpOiBPYnNlcnZhYmxlPE51bWJlcltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwrXCIvXCIrY29sbGVjdGlvbitcIi9ydW5zXCIpXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0UnVucylcbiAgICAgICAgICAgICAgLnJldHJ5KDMpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICAgcHJpdmF0ZSBleHRyYWN0UnVucyhyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgICAgIGxldCBjb2xsZWN0aW9uczogTnVtYmVyW10gPSBbXTtcbiAgICAgICBjb25zb2xlLmxvZyhcIkJPRFkgLSBcIitib2R5KTtcbiAgICAgICBib2R5LmZvckVhY2goKGVsZW1lbnQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJTnNlcnRpbmcgIG51bWJlciB0byBjb2xsZWN0aW9uIC0tICR7ZWxlbWVudH1gKVxuICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgfSk7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbnMgfHwgW107XG4gIH1cblxuICAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgbGV0IGNvbGxlY3Rpb25zOiBDb2xsZWN0aW9uW10gPSBbXTtcbiAgICAgICBjb25zb2xlLmxvZyhcIkJPRFkgLSBcIitib2R5KTtcbiAgICAgICBib2R5LmZvckVhY2goKGVsZW1lbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKClcbiAgICAgICAgICAgY29sbGVjdGlvbi5uYW1lID0gZWxlbWVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSU5zZXJ0aW5nICBlbGVtZW50IHRvIGNvbGxlY3Rpb24gLS0gJHtlbGVtZW50fWApXG4gICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2goY29sbGVjdGlvbik7XG5cbiAgICAgICB9KTtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIGdldFJ1bkluZm8oY29sbGVjdGlvbjogU3RyaW5nLHJ1bjogbnVtYmVyKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbGxlY3Rpb25zVXJsK1wiL1wiK2NvbGxlY3Rpb24rXCIvcnVucy9cIitydW4pXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0UnVuSW5mbylcbiAgICAgICAgICAgICAgLnJldHJ5KDMpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dHJhY3RSdW5JbmZvKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgXG4gICAgICByZXR1cm4gYm9keSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHlvdSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIGxldCBlcnJNc2c6IHN0cmluZztcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG5cblxufVxuIl19

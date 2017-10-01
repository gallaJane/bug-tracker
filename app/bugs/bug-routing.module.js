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
var router_1 = require("@angular/router");
var bug_list_component_1 = require("./bug-list/bug-list.component");
//decorator
var BugRoutingModule = (function () {
    function BugRoutingModule() {
    }
    return BugRoutingModule;
}());
BugRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                //this is for redirect.. row under only
                { path: '', redirectTo: 'bugs', pathMatch: 'prefix' },
                { path: 'bugs', component: bug_list_component_1.BugListComponent },
                //this one is for wildcard, and always is at the bottom
                { path: '**', redirectTo: 'bugs' }
            ])
        ],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], BugRoutingModule);
exports.BugRoutingModule = BugRoutingModule;
//# sourceMappingURL=bug-routing.module.js.map
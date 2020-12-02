"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var environment_1 = require("./environments/environment");
var app_module_1 = require("./app/app.module");
var aws_amplify_1 = require("aws-amplify");
var aws_exports_1 = require("./aws-exports");
aws_amplify_1["default"].configure(aws_exports_1["default"]);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 

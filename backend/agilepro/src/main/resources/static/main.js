(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\n    <header class=\"header header-6\">\n        <div class=\"branding\">\n            Agile Pro\n        </div>\n        <div class=\"header-nav\">\n            <a href=\"#\" class=\"nav-link nav-text\">Home</a>\n            <a href=\"#\" class=\"nav-link nav-text\">Reports</a>\n            <a href=\"#\" class=\"nav-link nav-text\">Track</a>\n            <a routerLink=\"/projects\" class=\"nav-link nav-text\">Projects</a>\n        </div>\n        <div class=\"header-actions\">\n            <a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"login\" class=\"nav-link nav-icon-text\">\n                <clr-icon shape=\"user\"></clr-icon>\n                <span class=\"nav-text\">Login</span>\n            </a>\n            <a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"logout\" (click)=\"userLogout()\" class=\"nav-link nav-icon-text\">\n                <clr-icon shape=\"user\"></clr-icon>\n                <span class=\"nav-text\">Logout</span>\n            </a>\n        </div>\n    </header>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">Dashboard</button>\n        <clr-tab-content id=\"content1\" *clrIfActive=\"true\">\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-4 clr-col-12\" *ngFor=\"let project of projects\">\n                    <div class=\"card\">\n                        <div class=\"card-block\">\n                            <h3 class=\"card-title\">\n                                <a routerLink='/project/{{project.projectId}}'>{{project.name}}</a>\n                            </h3>\n                            <p class=\"card-text\">\n                                {{project.description}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Progress</button>\n        <clr-tab-content>\n            Show current progress here.\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">About Feature</button>\n        <clr-tab-content id=\"content1\" *clrIfActive>\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-4 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-block\">\n                            <h3 class=\"card-title\">Description</h3>\n                            <p class=\"card-text\">\n                                Its about cut through feature.\n                            </p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <a href=\"...\" class=\"btn btn-sm btn-link\">Save</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>User Stories</button>\n        <clr-tab-content *clrIfActive=\"true\">\n            <div class=\"clr-row clr-justify-content-end\">\n                <div class=\"clr-col-2\">\n                    <button class=\"btn btn-info-outline\" (click)=\"showAddStoryModal()\">Add Story</button>\n                </div>\n            </div>\n            <div class=\"clr-row\">\n                <table class=\"table table-light\">\n                    <thead class=\"thead-dark\">\n                        <tr>\n                            <th>#</th>\n                            <th>Story</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let story of stories\">\n                            <td>{{story.storyId}}</td>\n                            <td><a routerLink='/story/{{story.storyId}}'>{{story.name}}</a></td>\n                            <td>{{story.description}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n<clr-modal [(clrModalOpen)]=\"isShowAddStoryModal\">\n        <h3 class=\"modal-title\">Add Story</h3>\n        <div class=\"modal-body\">\n            <div>\n                <form clrForm>\n                    <clr-input-container>\n                        <label>Name</label>\n                        <input clrInput type=\"text\" [(ngModel)]=\"story.name\" name=\"name\" required />\n                    </clr-input-container>\n                    <clr-textarea-container>\n                        <label>Description</label>\n                        <textarea clrTextarea [(ngModel)]=\"story.description\" name=\"description\" required></textarea>\n                    </clr-textarea-container>\n                </form>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline\" (click)=\"isShowAddStoryModal = false\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"createStory()\">Add</button>\n        </div>\n    </clr-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>features works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clr-offset-4 clr-col-6\">\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <h3 class=\"card-title\">User Profile</h3>\n            <div class=\"card-text\">\n                <form clrForm>\n                    <clr-input-container>\n                        <label>Company</label>\n                        <input clrInput type=\"text\" [(ngModel)]=\"company\" name=\"company\" required />\n                        <clr-control-error>Company is required!</clr-control-error>\n                    </clr-input-container>\n                    <clr-input-container>\n                        <label>Phone</label>\n                        <input clrInput type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" required />\n                        <clr-control-error>Phone is required!</clr-control-error>\n                    </clr-input-container>\n                    <clr-input-container>\n                        <label>Country</label>\n                        <input clrInput type=\"text\" [(ngModel)]=\"country\" name=\"country\" required />\n                        <clr-control-error>Country is required!</clr-control-error>\n                    </clr-input-container>\n                </form>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <button class=\"btn\" routerLink=\"/projects\" type=\"button\" (click)=\"getProjects()\">Save</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">About Project</button>\n        <clr-tab-content id=\"content1\" *clrIfActive>\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-4 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-block\">\n                            <h3 class=\"card-title\">Description</h3>\n                            <p class=\"card-text\">\n                                OneView is a HPE project for its Synergy Hardware.\n                            </p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <a href=\"...\" class=\"btn btn-sm btn-link\">Save</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Features</button>\n        <clr-tab-content *clrIfActive=\"true\">\n            <div class=\"clr-row clr-justify-content-end\">\n                <div class=\"clr-col-2\">\n                    <button class=\"btn btn-info-outline\" (click)=\"showAddFeatureModal()\">Add Feature</button>\n                </div>\n            </div>\n            <div class=\"clr-row\">\n                <table class=\"table table-light\">\n                    <thead class=\"thead-dark\">\n                        <tr>\n                            <th>#</th>\n                            <th>Feature</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let feature of features\">\n                            <td>{{feature.featureId}}</td>\n                            <td><a routerLink='/feature/{{feature.featureId}}'>{{feature.name}}</a></td>\n                            <td>{{feature.description}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n<clr-modal [(clrModalOpen)]=\"isShowAddFeatureModal\">\n    <h3 class=\"modal-title\">Add Feature</h3>\n    <div class=\"modal-body\">\n        <div>\n            <form clrForm>\n                <clr-input-container>\n                    <label>Name</label>\n                    <input clrInput type=\"text\" [(ngModel)]=\"feature.name\" name=\"name\" required />\n                </clr-input-container>\n                <clr-textarea-container>\n                    <label>Description</label>\n                    <textarea clrTextarea [(ngModel)]=\"feature.description\" name=\"description\" required></textarea>\n                </clr-textarea-container>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isShowAddFeatureModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createFeature()\">Add</button>\n    </div>\n</clr-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">Projects</button>\n        <clr-tab-content id=\"content1\" *clrIfActive=\"true\">\n            <div class=\"clr-row clr-justify-content-end\">\n                <div class=\"clr-col-2\">\n                    <button class=\"btn btn-info-outline\" (click)=\"showAddProjectModal()\">Add Project</button>\n                </div>\n            </div>\n            <div class=\"clr-row\">\n                <div class=\"clr-col\">\n                    <table class=\"table table-light\">\n                        <thead class=\"thead-dark\">\n                            <tr>\n                                <td>Select</td>\n                                <th>#</th>\n                                <th>Project</th>\n                                <th>Description</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let project of projects\">\n                                <td><input type=\"checkbox\" clrCheckbox /></td>\n                                <td>{{project.projectId}}</td>\n                                <td><a routerLink='/project/{{project.projectId}}'>{{project.name}}</a></td>\n                                <td>{{project.description}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n<clr-modal [(clrModalOpen)]=\"isShowAddProjectModal\">\n    <h3 class=\"modal-title\">Add Project</h3>\n    <div class=\"modal-body\">\n        <div>\n            <form clrForm>\n                <clr-input-container>\n                    <label>Name</label>\n                    <input clrInput type=\"text\" [(ngModel)]=\"project.name\" name=\"name\" required/>\n                </clr-input-container>\n                <clr-textarea-container>\n                    <label>Description</label>\n                    <textarea clrTextarea [(ngModel)]=\"project.description\" name=\"description\" required></textarea>\n                </clr-textarea-container>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isShowAddProjectModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createProject()\">Add</button>\n    </div>\n</clr-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reports works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>stories works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story/story.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">About Story</button>\n        <clr-tab-content id=\"content1\" *clrIfActive>\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-4 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-block\">\n                            <h3 class=\"card-title\">Description</h3>\n                            <p class=\"card-text\">\n                                Its about cut through story.\n                            </p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <a href=\"...\" class=\"btn btn-sm btn-link\">Save</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Tasks</button>\n        <clr-tab-content *clrIfActive=\"true\">\n            <div class=\"clr-row clr-justify-content-end\">\n                <div class=\"clr-col-2\">\n                    <button class=\"btn btn-info-outline\" (click)=\"showAddTaskModal()\">Add Task</button>\n                </div>\n            </div>\n            <div class=\"clr-row\">\n                <table class=\"table table-light\">\n                    <thead class=\"thead-dark\">\n                        <tr>\n                            <th>#</th>\n                            <th>Task</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let task of tasks\">\n                            <td>{{task.taskId}}</td>\n                            <td><a routerLink='/task/{{task.taskId}}'>{{task.name}}</a></td>\n                            <td>{{task.description}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n<clr-modal [(clrModalOpen)]=\"isShowAddTaskModal\">\n    <h3 class=\"modal-title\">Add Task</h3>\n    <div class=\"modal-body\">\n        <div>\n            <form clrForm>\n                <clr-input-container>\n                    <label>Name</label>\n                    <input clrInput type=\"text\" [(ngModel)]=\"task.name\" name=\"name\" required />\n                </clr-input-container>\n                <clr-textarea-container>\n                    <label>Description</label>\n                    <textarea clrTextarea [(ngModel)]=\"task.description\" name=\"description\" required></textarea>\n                </clr-textarea-container>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isShowAddTaskModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createTask()\">Add</button>\n    </div>\n</clr-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>task works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tasks works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-login/user-login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-login/user-login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\">\n        <form class=\"login\">\n            <section class=\"title\">\n                <h3 class=\"welcome\">Login</h3>\n            </section>\n            <div class=\"login-group\">\n                <clr-input-container>\n                    <label class=\"clr-sr-only\">Email</label>\n                    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" clrInput placeholder=\"Email\" />\n                </clr-input-container>\n                <clr-password-container>\n                    <label class=\"clr-sr-only\">Password</label>\n                    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" clrPassword placeholder=\"Password\" />\n                </clr-password-container>\n                <clr-checkbox-wrapper>\n                    <label>Remember me</label>\n                    <input type=\"checkbox\" name=\"rememberMe\" clrCheckbox />\n                </clr-checkbox-wrapper>\n                <a routerLink=\"/login\" class=\"btn btn-primary\" (click)=\"loginUser()\">Login</a>\n                <a routerLink=\"/register\" class=\"signup\">Register</a>\n            </div>\n        </form>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-logout/user-logout.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-logout/user-logout.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clr-offset-4 clr-col-6\">\n    <form clrForm>\n        <clr-input-container>\n            <label>Email</label>\n            <input clrInput type=\"email\" [(ngModel)]=\"user.username\" name=\"username\" required/>\n            <clr-control-error>Email is required!</clr-control-error>\n        </clr-input-container>\n        <clr-input-container>\n            <label>Password</label>\n            <input clrInput type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" required/>\n            <clr-control-error>Password is required!</clr-control-error>\n        </clr-input-container>\n        <button class=\"btn\" type=\"button\" (click)=\"registerUser()\">Register</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _user_logout_user_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-logout/user-logout.component */ "./src/app/user-logout/user-logout.component.ts");













const routes = [
    {
        path: 'login',
        component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"]
    },
    {
        path: 'logout',
        component: _user_logout_user_logout_component__WEBPACK_IMPORTED_MODULE_12__["UserLogoutComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    },
    {
        path: 'register',
        component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_5__["UserRegisterComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
    },
    {
        path: 'project/:id',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"]
    },
    {
        path: 'feature/:id',
        component: _feature_feature_component__WEBPACK_IMPORTED_MODULE_9__["FeatureComponent"]
    },
    {
        path: 'story/:id',
        component: _story_story_component__WEBPACK_IMPORTED_MODULE_10__["StoryComponent"]
    },
    {
        path: 'task/:id',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'AgilePro';
    }
    userLogout() {
        this.loginService.logOut();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/stories/stories.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _basic_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./basic-auth-http-interceptor.service */ "./src/app/basic-auth-http-interceptor.service.ts");
/* harmony import */ var _user_logout_user_logout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-logout/user-logout.component */ "./src/app/user-logout/user-logout.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_9__["UserRegisterComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
            _features_features_component__WEBPACK_IMPORTED_MODULE_14__["FeaturesComponent"],
            _stories_stories_component__WEBPACK_IMPORTED_MODULE_15__["StoriesComponent"],
            _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_16__["TasksComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_17__["ProjectComponent"],
            _story_story_component__WEBPACK_IMPORTED_MODULE_18__["StoryComponent"],
            _task_task_component__WEBPACK_IMPORTED_MODULE_19__["TaskComponent"],
            _reports_reports_component__WEBPACK_IMPORTED_MODULE_20__["ReportsComponent"],
            _feature_feature_component__WEBPACK_IMPORTED_MODULE_21__["FeatureComponent"],
            _user_logout_user_logout_component__WEBPACK_IMPORTED_MODULE_26__["UserLogoutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_4__["TabViewModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_22__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
        ],
        providers: [_user_registration_service__WEBPACK_IMPORTED_MODULE_10__["UserRegistrationService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _basic_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["BasicAuthHtppInterceptorService"],
                multi: true
            }, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/basic-auth-http-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/basic-auth-http-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: BasicAuthHtppInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthHtppInterceptorService", function() { return BasicAuthHtppInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicAuthHtppInterceptorService = class BasicAuthHtppInterceptorService {
    constructor() { }
    intercept(req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    }
};
BasicAuthHtppInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasicAuthHtppInterceptorService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.projects = new Array();
    }
    ngOnInit() {
        this.userId = this.route.snapshot
            .queryParamMap.get('userId');
        // .pipe(map(params => params.get('userId') || 'None'));
        // const projectId = this.route.snapshot.paramMap.get('id');
        console.log('Project Id', this.userId);
        this.userService.getProjects(100).subscribe((res) => {
            if (res) {
                this.projects = res;
            }
            else {
                console.log('Could not get projects');
            }
        }, (error) => {
            console.log('Unable to get projects, Please try again.');
            console.log('Login Error response', error);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/feature.service.ts":
/*!************************************!*\
  !*** ./src/app/feature.service.ts ***!
  \************************************/
/*! exports provided: FeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return FeatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let FeatureService = class FeatureService {
    constructor(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.featureUri = '/feature';
    }
    createFeature(feature) {
        return this.http.post(`${window.location.origin + this.featureUri}`, feature);
    }
};
FeatureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] }
];
FeatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FeatureService);



/***/ }),

/***/ "./src/app/feature.ts":
/*!****************************!*\
  !*** ./src/app/feature.ts ***!
  \****************************/
/*! exports provided: Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Feature {
}


/***/ }),

/***/ "./src/app/feature/feature.component.css":
/*!***********************************************!*\
  !*** ./src/app/feature/feature.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story */ "./src/app/story.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _story_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../story.service */ "./src/app/story.service.ts");






let FeatureComponent = class FeatureComponent {
    constructor(route, router, userService, storyService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.storyService = storyService;
        this.isShowAddStoryModal = false;
        this.story = new _story__WEBPACK_IMPORTED_MODULE_2__["Story"]();
        this.stories = new Array();
    }
    ngOnInit() {
        const featureId = this.route.snapshot.paramMap.get('id');
        console.log('Feature Id', featureId);
        this.userService.getStories(featureId).subscribe((res) => {
            if (res) {
                this.stories = res;
            }
            else {
                console.log('Could not get stories');
            }
        }, (error) => {
            console.log('Unable to get stories, Please try again.');
            console.log('Login Error response', error);
        });
    }
    showAddStoryModal() {
        this.isShowAddStoryModal = true;
    }
    createStory() {
        this.story.featureId = 100;
        this.storyService.createStory(this.story).subscribe((res) => {
            if (res) {
                this.stories.push(res);
                this.isShowAddStoryModal = false;
            }
            else {
                console.log('Could not create story');
            }
        }, (error) => {
            console.log('Unable to create story, Please try again.', error);
        });
    }
};
FeatureComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationService"] },
    { type: _story_service__WEBPACK_IMPORTED_MODULE_5__["StoryService"] }
];
FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feature.component.css */ "./src/app/feature/feature.component.css")).default]
    })
], FeatureComponent);



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");




let FeaturesComponent = class FeaturesComponent {
    constructor(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.stories = new Array();
    }
    ngOnInit() {
        const featureId = this.route.snapshot.paramMap.get('id');
        console.log('feature Id', featureId);
        this.userService.getStories(featureId).subscribe((res) => {
            if (res) {
                this.stories = res;
            }
            else {
                console.log('Could not get stories');
            }
        }, (error) => {
            console.log('Unable to get stories, Please try again.');
            console.log('Login Error response', error);
        });
    }
};
FeaturesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] }
];
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")).default]
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
    getProjects() {
        console.log('Projects:');
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ProjectService = class ProjectService {
    constructor(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.projectUri = '/project';
    }
    createProject(project) {
        return this.http.post(`${window.location.origin + this.projectUri}`, project);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Project {
}


/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feature */ "./src/app/feature.ts");
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feature.service */ "./src/app/feature.service.ts");






let ProjectComponent = class ProjectComponent {
    constructor(route, router, userService, featureService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.featureService = featureService;
        this.isShowAddFeatureModal = false;
        this.feature = new _feature__WEBPACK_IMPORTED_MODULE_4__["Feature"]();
        this.features = new Array();
    }
    ngOnInit() {
        const projectId = this.route.snapshot.paramMap.get('id');
        console.log('Project Id', projectId);
        this.userService.getFeatures(projectId).subscribe((res) => {
            if (res) {
                this.features = res;
            }
            else {
                console.log('Could not get features');
            }
        }, (error) => {
            console.log('Unable to get features, Please try again.');
            console.log('Login Error response', error);
        });
    }
    showAddFeatureModal() {
        this.isShowAddFeatureModal = true;
    }
    createFeature() {
        this.feature.projectId = 100;
        this.featureService.createFeature(this.feature).subscribe((res) => {
            if (res) {
                this.features.push(res);
                this.isShowAddFeatureModal = false;
            }
            else {
                console.log('Could not create feature');
            }
        }, (error) => {
            console.log('Unable to create feature, Please try again.', error);
        });
    }
};
ProjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] },
    { type: _feature_service__WEBPACK_IMPORTED_MODULE_5__["FeatureService"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/app/project.ts");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");





let ProjectsComponent = class ProjectsComponent {
    constructor(userService, projectService) {
        this.userService = userService;
        this.projectService = projectService;
        this.project = new _project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.projects = [];
        this.isShowAddProjectModal = false;
    }
    ngOnInit() {
        this.userService.getProjects(100).subscribe((res) => {
            if (res) {
                this.projects = res;
            }
            else {
                console.log('Could not get projects');
            }
        }, (error) => {
            console.log('Unable to get projects, Please try again.');
            console.log('Login Error response', error);
        });
    }
    showAddProjectModal() {
        this.isShowAddProjectModal = true;
    }
    createProject() {
        this.project.userId = 100;
        this.projectService.createProject(this.project).subscribe((res) => {
            if (res) {
                this.projects.push(res);
                this.isShowAddProjectModal = false;
            }
            else {
                console.log('Could not create project');
            }
        }, (error) => {
            console.log('Unable to create project, Please try again.', error);
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportsComponent = class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")).default]
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/stories/stories.component.css":
/*!***********************************************!*\
  !*** ./src/app/stories/stories.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JpZXMvc3Rvcmllcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/stories/stories.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stories/stories.component.ts ***!
  \**********************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoriesComponent = class StoriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stories.component.css */ "./src/app/stories/stories.component.css")).default]
    })
], StoriesComponent);



/***/ }),

/***/ "./src/app/story.service.ts":
/*!**********************************!*\
  !*** ./src/app/story.service.ts ***!
  \**********************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let StoryService = class StoryService {
    constructor(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.storyUri = '/story';
    }
    createStory(story) {
        return this.http.post(`${window.location.origin + this.storyUri}`, story);
    }
};
StoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] }
];
StoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoryService);



/***/ }),

/***/ "./src/app/story.ts":
/*!**************************!*\
  !*** ./src/app/story.ts ***!
  \**************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Story {
}


/***/ }),

/***/ "./src/app/story/story.component.css":
/*!*******************************************!*\
  !*** ./src/app/story/story.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L3N0b3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/app/task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");






let StoryComponent = class StoryComponent {
    constructor(route, router, userService, taskService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.taskService = taskService;
        this.isShowAddTaskModal = false;
        this.task = new _task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.tasks = new Array();
    }
    ngOnInit() {
        const storyId = this.route.snapshot.paramMap.get('id');
        console.log('Feature Id', storyId);
        this.userService.getTasks(storyId).subscribe((res) => {
            if (res) {
                this.tasks = res;
            }
            else {
                console.log('Could not get tasks');
            }
        }, (error) => {
            console.log('Unable to get tasks, Please try again.');
            console.log('Login Error response', error);
        });
    }
    showAddTaskModal() {
        this.isShowAddTaskModal = true;
    }
    createTask() {
        this.task.storyId = 100;
        this.taskService.createTask(this.task).subscribe((res) => {
            if (res) {
                this.tasks.push(res);
                this.isShowAddTaskModal = false;
            }
            else {
                console.log('Could not create task');
            }
        }, (error) => {
            console.log('Unable to create task, Please try again.', error);
        });
    }
};
StoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationService"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
];
StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story.component.css */ "./src/app/story/story.component.css")).default]
    })
], StoryComponent);



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let TaskService = class TaskService {
    constructor(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.taskUri = '/task';
    }
    createTask(task) {
        return this.http.post(`${window.location.origin + this.taskUri}`, task);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/app/task.ts":
/*!*************************!*\
  !*** ./src/app/task.ts ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
}


/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskComponent = class TaskComponent {
    constructor() { }
    ngOnInit() {
    }
};
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")).default]
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TasksComponent = class TasksComponent {
    constructor() { }
    ngOnInit() {
    }
};
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")).default]
    })
], TasksComponent);



/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-login/user-login.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserLoginComponent = class UserLoginComponent {
    constructor(router, userRegistrationService) {
        this.router = router;
        this.userRegistrationService = userRegistrationService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ngOnInit() {
    }
    loginUser() {
        this.userRegistrationService.loginUser(this.user).subscribe((res) => {
            if (res) {
                sessionStorage.setItem('username', this.user.username);
                const tokenStr = 'Bearer ' + res['token'];
                sessionStorage.setItem('token', tokenStr);
                const navigationExtras = {
                    queryParams: { userId: res.id }
                };
                this.router.navigate(['/dashboard/'], navigationExtras);
            }
            else {
                console.log('Invalid user credentials');
            }
        }, (error) => {
            console.log('Unable to login, Please try again.');
            console.log('Login Error response', error);
        });
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-login/user-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login.component.css */ "./src/app/user-login/user-login.component.css")).default]
    })
], UserLoginComponent);



/***/ }),

/***/ "./src/app/user-logout/user-logout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-logout/user-logout.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9nb3V0L3VzZXItbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-logout/user-logout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-logout/user-logout.component.ts ***!
  \******************************************************/
/*! exports provided: UserLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogoutComponent", function() { return UserLogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserLogoutComponent = class UserLogoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-logout/user-logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-logout.component.css */ "./src/app/user-logout/user-logout.component.css")).default]
    })
], UserLogoutComponent);



/***/ }),

/***/ "./src/app/user-register/user-register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-register/user-register.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-register/user-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-register/user-register.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserRegisterComponent = class UserRegisterComponent {
    constructor(router, userRegistrationService) {
        this.router = router;
        this.userRegistrationService = userRegistrationService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ngOnInit() {
    }
    registerUser() {
        this.userRegistrationService.registerUser(this.user).subscribe((res) => {
            console.log('Success response', res);
            this.router.navigate(['/profile']);
            return res;
        }, (error) => {
            console.log('Error response', error);
        });
    }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-register.component.css */ "./src/app/user-register/user-register.component.css")).default]
    })
], UserRegisterComponent);



/***/ }),

/***/ "./src/app/user-registration.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user-registration.service.ts ***!
  \**********************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let UserRegistrationService = class UserRegistrationService {
    constructor(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.registrationUri = '/register';
        this.loginUri = '/authenticate';
        this.projectsUri = '/projects/';
        this.featuresUri = '/features/';
        this.storiesUri = '/stories/';
        this.tasksUri = '/tasks/';
    }
    loginUser(user) {
        return this.http.post(`${window.location.origin + this.loginUri}`, user);
    }
    registerUser(userObj) {
        return this.http.post(`${window.location.origin + this.registrationUri}`, userObj);
    }
    isUserLoggedIn() {
        const user = sessionStorage.getItem('username');
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
    }
    getProjects(userId) {
        return this.http.get(`${window.location.origin + this.projectsUri + userId}`);
    }
    getFeatures(projectId) {
        return this.http.get(`${window.location.origin + this.featuresUri + projectId}`);
    }
    getStories(featureId) {
        return this.http.get(`${window.location.origin + this.storiesUri + featureId}`);
    }
    getTasks(storyId) {
        return this.http.get(`${window.location.origin + this.tasksUri + storyId}`);
    }
};
UserRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] }
];
UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRegistrationService);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rajitha/workspace/AgilePro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
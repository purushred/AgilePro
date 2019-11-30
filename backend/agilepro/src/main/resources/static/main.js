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
/* harmony default export */ __webpack_exports__["default"] = ("<clr-main-container>\n    <clr-header>\n        <div class=\"branding\">\n            Agile Pro\n        </div>\n        <div class=\"header-nav\" [clr-nav-level]=\"1\">\n            <a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/dashboard\" (click)=\"handleHomeClick()\"\n                [ngClass]=\"{'active': isHomeSelected, 'nav-link':true, 'nav-text':true}\">Home</a>\n            <a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/sprint\" (click)=\"handleTrackClick()\"\n                [ngClass]=\"{'active': isTrackSelected, 'nav-link':true, 'nav-text':true}\">Track</a>\n            <a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/projects\" (click)=\"handleProjectsClick()\"\n                [ngClass]=\"{'active': isProjectsSelected,  'nav-link':true, 'nav-text':true}\">Projects</a>\n            <a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/settings\" (click)=\"handleSettingsClick()\"\n                [ngClass]=\"{'active': isSettingsSelected,  'nav-link':true, 'nav-text':true}\">Settings</a>\n        </div>\n        <div class=\"header-actions\">\n            <clr-dropdown *ngIf=\"loginService.isUserLoggedIn()\">\n                <button class=\"nav-text\" clrDropdownTrigger aria-label=\"open user profile\">\n                    {{loginService.getLoggedInUser().userName}}\n                    <clr-icon shape=\"caret down\"></clr-icon>\n                </button>\n                <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                    <a routerLink=\"settings\" clrDropdownItem (click)=\"userLogout()\">Settings</a>\n                    <a routerLink=\"logout\" clrDropdownItem (click)=\"userLogout()\">Log out</a>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n            <a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"login\" class=\"nav-link nav-icon-text\">\n                <span class=\"nav-text\">Login</span>\n            </a>\n        </div>\n    </clr-header>\n    <div class=\"content-container\">\n        <clr-vertical-nav *ngIf=\"loginService.isUserLoggedIn()\" [clrVerticalNavCollapsible]=\"true\"\n            [(clrVerticalNavCollapsed)]=\"collapsed\" [clr-nav-level]=\"2\">\n            <div *ngIf=\"isHomeSelected\">\n                <a clrVerticalNavLink routerLink=\"dashboard\" routerLinkActive=\"active\"\n                    [ngClass]=\"{'active':isHomeSelected}\">\n                    <clr-icon clrVerticalNavIcon shape=\"user\"></clr-icon>\n                    Dashboard\n                </a>\n                <div class=\"nav-divider\"></div>\n            </div>\n            <div *ngIf=\"isTrackSelected\">\n                <a clrVerticalNavLink routerLink=\"sprint\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"bolt\"></clr-icon>\n                    Sprint\n                </a>\n                <a clrVerticalNavLink routerLink=\"stories\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"sad-face\"></clr-icon>\n                    Stories\n                </a>\n                <a clrVerticalNavLink routerLink=\"backlogs\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"bolt\"></clr-icon>\n                    Backlogs\n                </a>\n                <div class=\"nav-divider\"></div>\n            </div>\n            <div *ngIf=\"isProjectsSelected\">\n                <a clrVerticalNavLink routerLink=\"projects\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"shield\"></clr-icon>\n                    Projects\n                </a>\n                <a clrVerticalNavLink routerLink=\"reports\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"shield\"></clr-icon>\n                    Reports\n                </a>\n                <div class=\"nav-divider\"></div>\n            </div>\n            <div *ngIf=\"isSettingsSelected\">\n                <a clrVerticalNavLink routerLink=\"profile\" routerLinkActive=\"active\"\n                    [ngClass]=\"{'active':isSettingsSelected}\">\n                    <clr-icon clrVerticalNavIcon shape=\"note\"></clr-icon>\n                    Profile\n                </a>\n                <a clrVerticalNavLink routerLink=\"teams\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"users\"></clr-icon>\n                    Teams\n                </a>\n                <a clrVerticalNavLink routerLink=\"invite\" routerLinkActive=\"active\">\n                    <clr-icon clrVerticalNavIcon shape=\"user\"></clr-icon>\n                    Invite User\n                </a>\n            </div>\n        </clr-vertical-nav>\n        <div class=\"content-area\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</clr-main-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/user-login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/user-login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\">\n        <form class=\"login\">\n            <section class=\"title\">\n                <h3 class=\"welcome\">Login</h3>\n            </section>\n            <div class=\"login-group\">\n                <clr-input-container>\n                    <label class=\"clr-sr-only\">Email</label>\n                    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" clrInput placeholder=\"Email\" />\n                </clr-input-container>\n                <clr-password-container>\n                    <label class=\"clr-sr-only\">Password</label>\n                    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" clrPassword placeholder=\"Password\" />\n                </clr-password-container>\n                <clr-checkbox-wrapper>\n                    <label>Remember me</label>\n                    <input type=\"checkbox\" name=\"rememberMe\" clrCheckbox />\n                </clr-checkbox-wrapper>\n                <a routerLink=\"/login\" class=\"btn btn-primary\" (click)=\"loginUser()\">Login</a>\n                <a routerLink=\"/register\" class=\"signup\">Register</a>\n            </div>\n        </form>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/user-register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/user-register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clr-offset-4 clr-col-6\">\n    <form clrForm>\n        <clr-input-container>\n            <label>Email</label>\n            <input clrInput type=\"email\" [(ngModel)]=\"user.username\" name=\"username\" required/>\n            <clr-control-error>Email is required!</clr-control-error>\n        </clr-input-container>\n        <clr-input-container>\n            <label>Password</label>\n            <input clrInput type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" required/>\n            <clr-control-error>Password is required!</clr-control-error>\n        </clr-input-container>\n        <button class=\"btn\" type=\"button\" (click)=\"registerUser()\">Register</button>\n    </form>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/features.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/features.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>features works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/email-verification.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/email-verification.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Mail sent to purushred@gmail.com. Please verify your email and login.</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/invitation.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/invitation.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clr-row\">\n    <div class=\"clr-offset-3 clr-col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Invite User\n            </div>\n            <div class=\"card-block\">\n                <div class=\"card-text\">\n                    <form clrForm>\n                        <clr-select-container>\n                            <label>Project</label>\n                            <select class=\"\" clrSelect name=\"options\" [(ngModel)]=\"options\">\n                                <option value=\"one\">One View</option>\n                                <option value=\"two\">Synergy</option>\n                                <option value=\"three\">C7000</option>\n                            </select>\n                        </clr-select-container>\n                        <clr-input-container>\n                            <label>Email</label>\n                            <input clrInput type=\"text\" [(ngModel)]=\"invitation.emailId\" name=\"emailId\" required />\n                        </clr-input-container>\n                        <clr-textarea-container>\n                            <label>Message</label>\n                            <textarea clrTextarea [(ngModel)]=\"invitation.invitationMessage\"\n                                name=\"invitationMessage\"></textarea>\n                        </clr-textarea-container>\n                    </form>\n                    <clr-alert [clrAlertType]=\"'success'\">\n                        <clr-alert-item>\n                            <span class=\"alert-text\">\n                                Successfully sent invite.\n                            </span>\n                        </clr-alert-item>\n                    </clr-alert>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-info-outline\" (click)=\"inviteUser()\">Invite</button>\n            </div>\n        </div>\n    </div>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/projects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/projects.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">Projects</button>\n        <clr-tab-content id=\"content1\" *clrIfActive=\"true\">\n            <div class=\"clr-row clr-justify-content-end\">\n                <div class=\"clr-col-2\">\n                    <button class=\"btn btn-sm btn-icon btn-info\" (click)=\"showAddProjectModal()\" title=\"New Project\">\n                        <clr-icon shape=\"plus\"></clr-icon>\n                    </button>\n                </div>\n            </div>\n            <div class=\"clr-row\">\n                <div class=\"clr-col\">\n\n                    <clr-datagrid [(clrDgSelected)]=\"selected\">\n                        <clr-dg-column>No.</clr-dg-column>\n                        <clr-dg-column>Project</clr-dg-column>\n                        <clr-dg-column>Description</clr-dg-column>\n                        <clr-dg-column>Edit</clr-dg-column>\n                        <clr-dg-column>Status</clr-dg-column>\n                        <clr-dg-row *clrDgItems=\"let project of projects\" [clrDgItem]=\"project\">\n                            <clr-dg-cell>{{project.projectId}}</clr-dg-cell>\n                            <clr-dg-cell><a routerLink='/project/{{project.projectId}}'>{{project.name}}</a>\n                            </clr-dg-cell>\n                            <clr-dg-cell>{{project.description}}</clr-dg-cell>\n                            <clr-dg-cell>\n                                <clr-icon shape=\"pencil\" (click)=\"showAddProjectModal()\" title=\"Edit Project\">\n                                </clr-icon>\n                            </clr-dg-cell>\n                            <clr-dg-cell>\n                                <span [ngClass]=\"{'label':true, \n                                    'label-warning':project.status=='TODO' , \n                                    'label-info':project.status=='IN_PROGRESS' , \n                                    'label-success':project.status=='COMPLETED' , \n                                    'label-success':project.status=='ACCEPTED'}\">{{project.status}}</span>\n                            </clr-dg-cell>\n                        </clr-dg-row>\n                        <clr-dg-footer>\n                            <clr-dg-pagination #pagination [clrDgPageSize]=\"10\">\n                                <clr-dg-page-size [clrPageSizeOptions]=\"[10,20,50,100]\">Projects per page\n                                </clr-dg-page-size>\n                                {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n                                of {{pagination.totalItems}} users\n                            </clr-dg-pagination>\n                        </clr-dg-footer>\n                    </clr-datagrid>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n<clr-modal [(clrModalOpen)]=\"isShowAddProjectModal\">\n    <h3 class=\"modal-title\">Add Project</h3>\n    <div class=\"modal-body\">\n        <div>\n            <form clrForm>\n                <clr-input-container>\n                    <label>Name</label>\n                    <input clrInput type=\"text\" [(ngModel)]=\"project.name\" name=\"name\" required />\n                </clr-input-container>\n                <clr-select-container>\n                    <label>Status</label>\n                    <select clrSelect [(ngModel)]=\"project.status\" name=\"status\">\n                        <option *ngFor=\"let item of statusValues | keyvalue\" [value]=\"item.key\">{{item.value}}</option>\n                    </select>\n                </clr-select-container>\n                <clr-textarea-container>\n                    <label>Description</label>\n                    <textarea clrTextarea [(ngModel)]=\"project.description\" name=\"description\" required></textarea>\n                </clr-textarea-container>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isShowAddProjectModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createProject()\">Add</button>\n    </div>\n</clr-modal>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sprint/sprint.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sprint/sprint.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sprint works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sprint/sprints.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sprint/sprints.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sprints works!</p>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/story.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stories/story.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">About Story</button>\n        <clr-tab-content id=\"content1\" *clrIfActive>\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-4 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-block\">\n                            <h3 class=\"card-title\">Description</h3>\n                            <p class=\"card-text\">\n                                Its about cut through story.\n                            </p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <a href=\"...\" class=\"btn btn-sm btn-link\">Save</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Tasks</button>\n        <clr-tab-content *clrIfActive=\"true\">\n            <div class=\"clr-row clr-justify-content-end\">\n                <div class=\"clr-col-2\">\n                    <button class=\"btn btn-info-outline\" (click)=\"showAddTaskModal()\">Add Task</button>\n                </div>\n            </div>\n            <div class=\"clr-row\">\n                <table class=\"table table-light\">\n                    <thead class=\"thead-dark\">\n                        <tr>\n                            <th>#</th>\n                            <th>Task</th>\n                            <th>Status</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let task of tasks\">\n                            <td>{{task.taskId}}</td>\n                            <td><a routerLink='/task/{{task.taskId}}'>{{task.name}}</a></td>\n                            <td>{{task.status}}</td>\n                            <td>{{task.description}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n<clr-modal [(clrModalOpen)]=\"isShowAddTaskModal\">\n    <h3 class=\"modal-title\">Add Task</h3>\n    <div class=\"modal-body\">\n        <div>\n            <form clrForm>\n                <clr-input-container>\n                    <label>Name</label>\n                    <input clrInput type=\"text\" [(ngModel)]=\"task.name\" name=\"name\" required />\n                </clr-input-container>\n                <clr-select-container>\n                    <label>Status</label>\n                    <select clrSelect [(ngModel)]=\"task.status\" name=\"status\">\n                        <option *ngFor=\"let item of statusValues | keyvalue\" [value]=\"item.key\">{{item.value}}</option>\n                    </select>\n                </clr-select-container>\n                <clr-textarea-container>\n                    <label>Description</label>\n                    <textarea clrTextarea [(ngModel)]=\"task.description\" name=\"description\" required></textarea>\n                </clr-textarea-container>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isShowAddTaskModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createTask()\">Add</button>\n    </div>\n</clr-modal>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/tasks.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/tasks.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tasks works!</p>\n");

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
/* harmony import */ var _sprint_sprints_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprint/sprints.component */ "./src/app/sprint/sprints.component.ts");
/* harmony import */ var _profile_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/settings.component */ "./src/app/profile/settings.component.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/role */ "./src/app/model/role.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard */ "./src/app/auth-guard.ts");
/* harmony import */ var _authentication_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/user-login.component */ "./src/app/authentication/user-login.component.ts");
/* harmony import */ var _authentication_user_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/user-register.component */ "./src/app/authentication/user-register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _profile_email_verification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/email-verification.component */ "./src/app/profile/email-verification.component.ts");
/* harmony import */ var _profile_invitation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/invitation.component */ "./src/app/profile/invitation.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _project_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project/projects.component */ "./src/app/project/projects.component.ts");
/* harmony import */ var _stories_story_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stories/story.component */ "./src/app/stories/story.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");


















const routes = [
    {
        path: 'register',
        component: _authentication_user_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"]
    },
    {
        path: 'login',
        component: _authentication_user_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"]
    },
    {
        path: 'verify',
        component: _profile_email_verification_component__WEBPACK_IMPORTED_MODULE_11__["EmailVerificationComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'invite',
        component: _profile_invitation_component__WEBPACK_IMPORTED_MODULE_12__["InvitationComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'settings',
        component: _profile_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'sprint',
        component: _sprint_sprints_component__WEBPACK_IMPORTED_MODULE_1__["SprintsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: { roles: [_model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin] }
    },
    {
        path: 'projects',
        component: _project_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: { roles: [_model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin] }
    },
    {
        path: 'project/:id',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'feature/:id',
        component: _feature_feature_component__WEBPACK_IMPORTED_MODULE_10__["FeatureComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'story/:id',
        component: _stories_story_component__WEBPACK_IMPORTED_MODULE_16__["StoryComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'task/:id',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_17__["TaskComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'AgilePro';
        this.isHomeSelected = true;
        this.isTrackSelected = false;
        this.isProjectsSelected = false;
        this.isSettingsSelected = false;
        this.collapsed = true;
    }
    userLogout() {
        this.loginService.logOut();
        this.router.navigate(['/login']);
    }
    handleHomeClick() {
        this.isHomeSelected = true;
        this.isTrackSelected = false;
        this.isProjectsSelected = false;
        this.isSettingsSelected = false;
    }
    handleTrackClick() {
        this.isHomeSelected = false;
        this.isTrackSelected = true;
        this.isProjectsSelected = false;
        this.isSettingsSelected = false;
        this.router.navigate(['/sprint']);
    }
    handleProjectsClick() {
        this.isHomeSelected = false;
        this.isTrackSelected = false;
        this.isProjectsSelected = true;
        this.isSettingsSelected = false;
    }
    handleSettingsClick() {
        this.isHomeSelected = false;
        this.isTrackSelected = false;
        this.isProjectsSelected = false;
        this.isSettingsSelected = true;
        this.router.navigate(['/profile']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
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
/* harmony import */ var _sprint_sprints_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprint/sprints.component */ "./src/app/sprint/sprints.component.ts");
/* harmony import */ var _profile_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/settings.component */ "./src/app/profile/settings.component.ts");
/* harmony import */ var _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/http-interceptor.service */ "./src/app/service/http-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_user_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/user-login.component */ "./src/app/authentication/user-login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _authentication_user_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/user-register.component */ "./src/app/authentication/user-register.component.ts");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _project_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project/projects.component */ "./src/app/project/projects.component.ts");
/* harmony import */ var _feature_features_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feature/features.component */ "./src/app/feature/features.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/stories/stories.component.ts");
/* harmony import */ var _task_tasks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./task/tasks.component */ "./src/app/task/tasks.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _stories_story_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stories/story.component */ "./src/app/stories/story.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _profile_email_verification_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/email-verification.component */ "./src/app/profile/email-verification.component.ts");
/* harmony import */ var _profile_invitation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile/invitation.component */ "./src/app/profile/invitation.component.ts");
/* harmony import */ var _sprint_sprint_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sprint/sprint.component */ "./src/app/sprint/sprint.component.ts");































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _authentication_user_login_component__WEBPACK_IMPORTED_MODULE_10__["UserLoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _authentication_user_register_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
            _project_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"],
            _feature_features_component__WEBPACK_IMPORTED_MODULE_17__["FeaturesComponent"],
            _stories_stories_component__WEBPACK_IMPORTED_MODULE_18__["StoriesComponent"],
            _task_tasks_component__WEBPACK_IMPORTED_MODULE_19__["TasksComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_20__["ProjectComponent"],
            _stories_story_component__WEBPACK_IMPORTED_MODULE_21__["StoryComponent"],
            _task_task_component__WEBPACK_IMPORTED_MODULE_22__["TaskComponent"],
            _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__["ReportsComponent"],
            _feature_feature_component__WEBPACK_IMPORTED_MODULE_24__["FeatureComponent"],
            _profile_email_verification_component__WEBPACK_IMPORTED_MODULE_28__["EmailVerificationComponent"],
            _profile_invitation_component__WEBPACK_IMPORTED_MODULE_29__["InvitationComponent"],
            _profile_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
            _sprint_sprint_component__WEBPACK_IMPORTED_MODULE_30__["SprintComponent"],
            _sprint_sprints_component__WEBPACK_IMPORTED_MODULE_1__["SprintsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_25__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
        ],
        providers: [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_13__["UserRegistrationService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                useClass: _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["HttpInterceptorService"],
                multi: true
            }, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth-guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/user-registration.service */ "./src/app/service/user-registration.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, userRegistrationService) {
        this.router = router;
        this.userRegistrationService = userRegistrationService;
    }
    canActivate(route, state) {
        const currentUser = this.userRegistrationService.getLoggedInUser();
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/authentication/user-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/user-login.component.ts ***!
  \********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserLoginComponent = class UserLoginComponent {
    constructor(router, userRegistrationService) {
        this.router = router;
        this.userRegistrationService = userRegistrationService;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ngOnInit() {
    }
    loginUser() {
        this.userRegistrationService.loginUser(this.user).subscribe((res) => {
            if (res) {
                sessionStorage.setItem('currentUser', JSON.stringify(res));
                const tokenStr = 'Bearer ' + res.token;
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
            console.log('Login Error response', error);
        });
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/user-login.component.html")).default
    })
], UserLoginComponent);



/***/ }),

/***/ "./src/app/authentication/user-register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/user-register.component.ts ***!
  \***********************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserRegisterComponent = class UserRegisterComponent {
    constructor(router, userRegistrationService) {
        this.router = router;
        this.userRegistrationService = userRegistrationService;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ngOnInit() {
    }
    registerUser() {
        this.userRegistrationService.registerUser(this.user).subscribe((res) => {
            this.router.navigate(['/verify']);
            return res;
        }, (error) => {
            console.log('Error response', error);
        });
    }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/user-register.component.html")).default
    })
], UserRegisterComponent);



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
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(projectService, userService) {
        this.projectService = projectService;
        this.userService = userService;
        this.projects = new Array();
    }
    ngOnInit() {
        this.userId = this.userService.getLoggedInUser().id;
        this.projectService.getProjects(this.userId).subscribe((res) => {
            if (res) {
                this.projects = res;
            }
            else {
                console.log('Could not get projects');
            }
        }, (error) => {
            console.log('Get projects Error response', error);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default
    })
], DashboardComponent);



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
/* harmony import */ var _model_story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/story */ "./src/app/model/story.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_story_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/story.service */ "./src/app/service/story.service.ts");





let FeatureComponent = class FeatureComponent {
    constructor(route, storyService) {
        this.route = route;
        this.storyService = storyService;
        this.isShowAddStoryModal = false;
        this.story = new _model_story__WEBPACK_IMPORTED_MODULE_2__["Story"]();
        this.stories = new Array();
    }
    ngOnInit() {
        this.featureId = this.route.snapshot.paramMap.get('id');
        console.log('Feature Id', this.featureId);
        this.storyService.getStories(this.featureId).subscribe((res) => {
            if (res) {
                this.stories = res;
            }
            else {
                console.log('Could not get stories');
            }
        }, (error) => {
            console.log('get stories Error response', error);
        });
    }
    showAddStoryModal() {
        this.isShowAddStoryModal = true;
    }
    createStory() {
        this.story.featureId = this.featureId;
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
    { type: _service_story_service__WEBPACK_IMPORTED_MODULE_4__["StoryService"] }
];
FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature.component.html")).default
    })
], FeatureComponent);



/***/ }),

/***/ "./src/app/feature/features.component.ts":
/*!***********************************************!*\
  !*** ./src/app/feature/features.component.ts ***!
  \***********************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/story.service */ "./src/app/service/story.service.ts");




let FeaturesComponent = class FeaturesComponent {
    constructor(route, router, storyService) {
        this.route = route;
        this.router = router;
        this.storyService = storyService;
        this.stories = new Array();
    }
    ngOnInit() {
        const featureId = this.route.snapshot.paramMap.get('id');
        console.log('feature Id', featureId);
        this.storyService.getStories(featureId).subscribe((res) => {
            if (res) {
                this.stories = res;
            }
            else {
                console.log('Could not get stories');
            }
        }, (error) => {
            console.log('Get stories Error response', error);
        });
    }
};
FeaturesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"] }
];
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/features.component.html")).default
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/model/feature.ts":
/*!**********************************!*\
  !*** ./src/app/model/feature.ts ***!
  \**********************************/
/*! exports provided: Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.enum */ "./src/app/model/status.enum.ts");


class Feature {
    constructor() {
        this.status = _status_enum__WEBPACK_IMPORTED_MODULE_1__["Status"].TODO;
    }
}


/***/ }),

/***/ "./src/app/model/invitation.ts":
/*!*************************************!*\
  !*** ./src/app/model/invitation.ts ***!
  \*************************************/
/*! exports provided: Invitation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invitation", function() { return Invitation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Invitation {
}


/***/ }),

/***/ "./src/app/model/project.ts":
/*!**********************************!*\
  !*** ./src/app/model/project.ts ***!
  \**********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Project {
}


/***/ }),

/***/ "./src/app/model/role.ts":
/*!*******************************!*\
  !*** ./src/app/model/role.ts ***!
  \*******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/model/status.enum.ts":
/*!**************************************!*\
  !*** ./src/app/model/status.enum.ts ***!
  \**************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Status;
(function (Status) {
    Status["TODO"] = "ToDo";
    Status["DEFINED"] = "Defined";
    Status["IN_PROGRESS"] = "In Progress";
    Status["COMPLETED"] = "Completed";
    Status["ACCEPTED"] = "Accepted";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/model/story.ts":
/*!********************************!*\
  !*** ./src/app/model/story.ts ***!
  \********************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.enum */ "./src/app/model/status.enum.ts");


class Story {
    constructor() {
        this.status = _status_enum__WEBPACK_IMPORTED_MODULE_1__["Status"].TODO;
    }
}


/***/ }),

/***/ "./src/app/model/task.ts":
/*!*******************************!*\
  !*** ./src/app/model/task.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.enum */ "./src/app/model/status.enum.ts");


class Task {
    constructor() {
        this.status = _status_enum__WEBPACK_IMPORTED_MODULE_1__["Status"].TODO;
    }
}


/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/profile/email-verification.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/email-verification.component.ts ***!
  \*********************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmailVerificationComponent = class EmailVerificationComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmailVerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-verification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-verification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/email-verification.component.html")).default
    })
], EmailVerificationComponent);



/***/ }),

/***/ "./src/app/profile/invitation.component.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/invitation.component.ts ***!
  \*************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_invitation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/invitation */ "./src/app/model/invitation.ts");
/* harmony import */ var _service_invitation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/invitation.service */ "./src/app/service/invitation.service.ts");




let InvitationComponent = class InvitationComponent {
    constructor(invitationService) {
        this.invitationService = invitationService;
        this.invitation = new _model_invitation__WEBPACK_IMPORTED_MODULE_2__["Invitation"]();
    }
    ngOnInit() {
    }
    inviteUser() {
        this.invitationService.inviteUser(this.invitation).subscribe((res) => {
        }, (error) => {
            console.log('Invitation failed.', error);
        });
    }
};
InvitationComponent.ctorParameters = () => [
    { type: _service_invitation_service__WEBPACK_IMPORTED_MODULE_3__["InvitationService"] }
];
InvitationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invitation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/invitation.component.html")).default
    })
], InvitationComponent);



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
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-registration.service */ "./src/app/service/user-registration.service.ts");



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
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/settings.component.ts":
/*!***********************************************!*\
  !*** ./src/app/profile/settings.component.ts ***!
  \***********************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings.component.html")).default
    })
], SettingsComponent);



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
/* harmony import */ var _model_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/feature */ "./src/app/model/feature.ts");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/feature.service */ "./src/app/service/feature.service.ts");





let ProjectComponent = class ProjectComponent {
    constructor(route, featureService) {
        this.route = route;
        this.featureService = featureService;
        this.isShowAddFeatureModal = false;
        this.feature = new _model_feature__WEBPACK_IMPORTED_MODULE_3__["Feature"]();
        this.features = new Array();
    }
    ngOnInit() {
        this.projectId = this.route.snapshot.paramMap.get('id');
        this.featureService.getFeatures(this.projectId).subscribe((res) => {
            if (res) {
                this.features = res;
            }
            else {
                console.log('Could not get features');
            }
        }, (error) => {
            console.log('Get features Error response', error);
        });
    }
    showAddFeatureModal() {
        this.isShowAddFeatureModal = true;
    }
    /**
     * Create feature for the selected project.
     */
    createFeature() {
        this.feature.projectId = this.projectId;
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
    { type: _service_feature_service__WEBPACK_IMPORTED_MODULE_4__["FeatureService"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/project/projects.component.ts":
/*!***********************************************!*\
  !*** ./src/app/project/projects.component.ts ***!
  \***********************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/status.enum */ "./src/app/model/status.enum.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/project */ "./src/app/model/project.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");







let ProjectsComponent = class ProjectsComponent {
    constructor(projectService, userService) {
        this.projectService = projectService;
        this.userService = userService;
        this.project = new _model_project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.projects = [];
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.statusValues = [];
        this.isShowAddProjectModal = false;
        this.statusValues = Object.values(_model_status_enum__WEBPACK_IMPORTED_MODULE_1__["Status"]);
    }
    ngOnInit() {
        this.user = this.userService.getLoggedInUser();
        this.projectService.getProjects(this.user.id).subscribe((res) => {
            if (res) {
                this.projects = res;
            }
            else {
                console.log('Could not get projects');
            }
        }, (error) => {
            console.log('Login Error response', error);
        });
    }
    showAddProjectModal() {
        this.isShowAddProjectModal = true;
    }
    createProject() {
        this.project.userId = this.user.id;
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
    { type: _service_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] },
    { type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/projects.component.html")).default
    })
], ProjectsComponent);



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html")).default
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/service/feature.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/feature.service.ts ***!
  \********************************************/
/*! exports provided: FeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return FeatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FeatureService = class FeatureService {
    constructor(http) {
        this.http = http;
        this.featureUri = '/feature';
        this.featuresUri = '/features/';
    }
    createFeature(feature) {
        return this.http.post(`${window.location.origin + this.featureUri}`, feature);
    }
    editFeature(feature) {
        return this.http.put(`${window.location.origin + this.featureUri}`, feature);
    }
    deleteFeature(feature) {
        return this.http.delete(`${window.location.origin + this.featureUri}`, feature);
    }
    getFeatures(projectId) {
        return this.http.get(`${window.location.origin + this.featuresUri + projectId}`);
    }
};
FeatureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FeatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FeatureService);



/***/ }),

/***/ "./src/app/service/http-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/http-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HttpInterceptorService = class HttpInterceptorService {
    constructor() { }
    intercept(req, next) {
        if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    }
};
HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpInterceptorService);



/***/ }),

/***/ "./src/app/service/invitation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/invitation.service.ts ***!
  \***********************************************/
/*! exports provided: InvitationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationService", function() { return InvitationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let InvitationService = class InvitationService {
    constructor(http) {
        this.http = http;
        this.invitationUri = '/invite';
    }
    inviteUser(invitation) {
        return this.http.post(`${window.location.origin + this.invitationUri}`, invitation);
    }
};
InvitationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InvitationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InvitationService);



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.projectUri = '/project';
        this.projectsUri = '/projects/';
    }
    createProject(project) {
        return this.http.post(`${window.location.origin + this.projectUri}`, project);
    }
    editProject(project) {
        return this.http.put(`${window.location.origin + this.projectUri}`, project);
    }
    deleteProject(project) {
        return this.http.delete(`${window.location.origin + this.projectUri}`, project);
    }
    getProjects(userId) {
        return this.http.get(`${window.location.origin + this.projectsUri + userId}`);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ "./src/app/service/story.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/story.service.ts ***!
  \******************************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StoryService = class StoryService {
    constructor(http) {
        this.http = http;
        this.storyUri = '/story';
        this.storiesUri = '/stories/';
    }
    createStory(story) {
        return this.http.post(`${window.location.origin + this.storyUri}`, story);
    }
    editStory(story) {
        return this.http.put(`${window.location.origin + this.storyUri}`, story);
    }
    deleteStory(story) {
        return this.http.delete(`${window.location.origin + this.storyUri}`, story);
    }
    getStories(featureId) {
        return this.http.get(`${window.location.origin + this.storiesUri + featureId}`);
    }
};
StoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoryService);



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.taskUri = '/task';
        this.tasksUri = '/tasks/';
    }
    createTask(task) {
        return this.http.post(`${window.location.origin + this.taskUri}`, task);
    }
    editTask(task) {
        return this.http.put(`${window.location.origin + this.taskUri}`, task);
    }
    deleteTask(task) {
        return this.http.delete(`${window.location.origin + this.taskUri}`, task);
    }
    getTasks(storyId) {
        return this.http.get(`${window.location.origin + this.tasksUri + storyId}`);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/app/service/user-registration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/user-registration.service.ts ***!
  \******************************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRegistrationService = class UserRegistrationService {
    constructor(http) {
        this.http = http;
        this.registrationUri = '/register';
        this.loginUri = '/authenticate';
    }
    loginUser(user) {
        return this.http.post(`${window.location.origin + this.loginUri}`, user);
    }
    registerUser(user) {
        return this.http.post(`${window.location.origin + this.registrationUri}`, user);
    }
    getLoggedInUser() {
        return (JSON.parse(sessionStorage.getItem('currentUser')));
    }
    isUserLoggedIn() {
        const user = sessionStorage.getItem('currentUser');
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('token');
    }
};
UserRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRegistrationService);



/***/ }),

/***/ "./src/app/sprint/sprint.component.ts":
/*!********************************************!*\
  !*** ./src/app/sprint/sprint.component.ts ***!
  \********************************************/
/*! exports provided: SprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintComponent", function() { return SprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SprintComponent = class SprintComponent {
    constructor() { }
    ngOnInit() {
    }
};
SprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sprint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sprint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sprint/sprint.component.html")).default
    })
], SprintComponent);



/***/ }),

/***/ "./src/app/sprint/sprints.component.ts":
/*!*********************************************!*\
  !*** ./src/app/sprint/sprints.component.ts ***!
  \*********************************************/
/*! exports provided: SprintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintsComponent", function() { return SprintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SprintsComponent = class SprintsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SprintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sprints',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sprints.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sprint/sprints.component.html")).default
    })
], SprintsComponent);



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html")).default
    })
], StoriesComponent);



/***/ }),

/***/ "./src/app/stories/story.component.ts":
/*!********************************************!*\
  !*** ./src/app/stories/story.component.ts ***!
  \********************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/status.enum */ "./src/app/model/status.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/task */ "./src/app/model/task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");






let StoryComponent = class StoryComponent {
    constructor(route, taskService) {
        this.route = route;
        this.taskService = taskService;
        this.isShowAddTaskModal = false;
        this.task = new _model_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.statusValues = [];
        this.tasks = new Array();
        this.statusValues = Object.values(_model_status_enum__WEBPACK_IMPORTED_MODULE_1__["Status"]);
    }
    ngOnInit() {
        this.storyId = this.route.snapshot.paramMap.get('id');
        this.taskService.getTasks(this.storyId).subscribe((res) => {
            if (res) {
                this.tasks = res;
            }
            else {
                console.log('Could not get tasks');
            }
        }, (error) => {
            console.log('Tasks Error response', error);
        });
    }
    showAddTaskModal() {
        this.isShowAddTaskModal = true;
    }
    createTask() {
        this.task.storyId = this.storyId;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
];
StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-story',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/story.component.html")).default
    })
], StoryComponent);



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html")).default
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/task/tasks.component.ts":
/*!*****************************************!*\
  !*** ./src/app/task/tasks.component.ts ***!
  \*****************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/tasks.component.html")).default
    })
], TasksComponent);



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
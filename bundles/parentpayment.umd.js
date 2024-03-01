(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('parentpayment', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.parentpayment = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ParentpaymentService = /** @class */ (function () {
        function ParentpaymentService() {
        }
        return ParentpaymentService;
    }());
    ParentpaymentService.ɵfac = function ParentpaymentService_Factory(t) { return new (t || ParentpaymentService)(); };
    ParentpaymentService.ɵprov = i0.ɵɵdefineInjectable({ token: ParentpaymentService, factory: ParentpaymentService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentpaymentService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    function PaymentDetailsComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵlistener("click", function PaymentDetailsComponent_div_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.paymentSelected(2); });
            i0.ɵɵelement(1, "input", 15);
            i0.ɵɵelementStart(2, "span", 9);
            i0.ɵɵtext(3, "Debit or credit card");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "img", 10);
            i0.ɵɵelementEnd();
        }
    }
    function PaymentDetailsComponent_lib_payment_bank_details_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "lib-payment-bank-details");
        }
    }
    function PaymentDetailsComponent_lib_payment_card_details_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "lib-payment-card-details");
        }
    }
    function PaymentDetailsComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 16);
            i0.ɵɵelementStart(1, "div", 17);
            i0.ɵɵtext(2, " Oops. Sorry, we are unable to process your payment. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 18);
            i0.ɵɵtext(4, " An error has occurred while attempting to process your order. Please try again or try another payment method. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var PaymentDetailsComponent = /** @class */ (function () {
        function PaymentDetailsComponent() {
            this.paymentMethodType = 'Bank transfer';
            this.canDoWalletPay = false;
            this.walletPayLogoName = '';
            this.walletPayDesc = '';
            this.paymentMethod = 1;
            this.emitter = new i0.EventEmitter();
            this.payEmitter = new i0.EventEmitter();
        }
        PaymentDetailsComponent.prototype.ngOnInit = function () {
        };
        PaymentDetailsComponent.prototype.canWalletPay = function () {
            var _this = this;
            this.canDoWalletPay = false;
            this.userData.isWalletPayEnabled = true;
            if (this.userData.isStripeEnabled && this.userData.isWalletPayEnabled) {
                //https://stripe.com/docs/js/initializing
                var stripe = window.Stripe(atob(this.userData.pk_token), { stripeAccount: this.userData.stripeConnectedAccountId });
                var paymentRequest_1 = stripe.paymentRequest({
                    country: this.userData.clientDetails.countryNameCode,
                    currency: this.userData.currencyCode.toLowerCase(),
                    total: {
                        label: 'Demo total',
                        amount: 1,
                    },
                    requestPayerName: true,
                    requestPayerEmail: true,
                });
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, paymentRequest_1.canMakePayment()];
                            case 1:
                                result = _a.sent();
                                console.log('canMakePayment', result);
                                if (result) {
                                    this.canDoWalletPay = true;
                                    if (result.applePay) {
                                        this.walletPayDesc = 'Apple Pay';
                                        this.walletPayLogoName = 'ApplePay';
                                    }
                                    else if (result.googlePay) {
                                        this.walletPayDesc = 'Google Pay';
                                        this.walletPayLogoName = 'GooglePay';
                                    }
                                    else if (result.link) {
                                        this.walletPayDesc = 'Pay via Link';
                                        this.walletPayLogoName = 'LinkPay';
                                    }
                                    else {
                                        this.walletPayDesc = 'WalletPay';
                                        this.walletPayLogoName = 'Wallet';
                                    }
                                    console.log("Can make Wallet payments.");
                                }
                                else {
                                    console.log("Cannot make Wallet payments.");
                                }
                                return [2 /*return*/];
                        }
                    });
                }); })();
            }
        };
        PaymentDetailsComponent.prototype.paymentSelected = function (value) {
            var temp = this.paymentMethod != value;
            if (value > 0) {
                this.paymentMethod = value;
                this.emitter.emit(value);
                var check = document.getElementById(value);
                if (check) {
                    check.checked = true;
                }
                if (temp) {
                    this.payEmitter.emit(true);
                }
            }
        };
        return PaymentDetailsComponent;
    }());
    PaymentDetailsComponent.ɵfac = function PaymentDetailsComponent_Factory(t) { return new (t || PaymentDetailsComponent)(); };
    PaymentDetailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentDetailsComponent, selectors: [["lib-payment-details"]], outputs: { emitter: "emitter", payEmitter: "payEmitter" }, decls: 24, vars: 6, consts: [[1, "row", "pay-body"], [1, "pay-title-box"], [1, "pay-title"], [1, "pay-details"], [1, "pay-selection"], [1, "col", "pay-width"], [1, "row", "width-q"], [1, "col", "pay-btn", 3, "click"], ["type", "radio", "name", "payWith", "id", "1"], [1, "pay-btn-text"], ["src", "", "alt", "", 1, "icon-align"], ["class", "col pay-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "name", "payWith", "id", "3"], ["class", "row pay-body error-body", 4, "ngIf"], ["type", "radio", "name", "payWith", "id", "2"], [1, "row", "pay-body", "error-body"], [1, "error-title"], [1, "error-content"]], template: function PaymentDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtext(3, "Payment details");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵtext(5, "Please fill the information below about your payment method");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 4);
                i0.ɵɵelementStart(7, "div", 5);
                i0.ɵɵtext(8, "Pay with");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 6);
                i0.ɵɵelementStart(10, "div", 7);
                i0.ɵɵlistener("click", function PaymentDetailsComponent_Template_div_click_10_listener() { return ctx.paymentSelected(1); });
                i0.ɵɵelement(11, "input", 8);
                i0.ɵɵelementStart(12, "span", 9);
                i0.ɵɵtext(13);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(14, "img", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(15, PaymentDetailsComponent_div_15_Template, 5, 0, "div", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(16, PaymentDetailsComponent_lib_payment_bank_details_16_Template, 1, 0, "lib-payment-bank-details", 12);
                i0.ɵɵtemplate(17, PaymentDetailsComponent_lib_payment_card_details_17_Template, 1, 0, "lib-payment-card-details", 12);
                i0.ɵɵelementStart(18, "div", 7);
                i0.ɵɵlistener("click", function PaymentDetailsComponent_Template_div_click_18_listener() { return ctx.paymentSelected(3); });
                i0.ɵɵelement(19, "input", 13);
                i0.ɵɵelementStart(20, "span", 9);
                i0.ɵɵtext(21);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(22, "img", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(23, PaymentDetailsComponent_div_23_Template, 5, 0, "div", 14);
            }
            if (rf & 2) {
                i0.ɵɵadvance(13);
                i0.ɵɵtextInterpolate(ctx.paymentMethodType);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.paymentMethodAllowed >= 2);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.paymentMethod == "1");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.paymentMethod == "2");
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(ctx.walletPayDesc);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.paymentMethod == 0);
            }
        }, styles: [".pay-body[_ngcontent-%COMP%]{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px rgba(0,0,0,.04),0 0 2px rgba(0,0,0,.06),0 0 1px rgba(0,0,0,.04);border-radius:4px;margin:24px;overflow:hidden}.error-body[_ngcontent-%COMP%]{text-align:center;height:280px}.error-body[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box[_ngcontent-%COMP%]{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title[_ngcontent-%COMP%]{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection[_ngcontent-%COMP%]{width:100%;padding:24px}.width-q[_ngcontent-%COMP%]{margin:0;gap:24px}.pay-width[_ngcontent-%COMP%]{font-weight:700;font-size:16px;padding-bottom:8px}.pay-btn[_ngcontent-%COMP%], .pay-width[_ngcontent-%COMP%]{color:var(--primaryTextColor)}.pay-btn[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active[_ngcontent-%COMP%]{border:1px solid var(--secondaryButtonColour)}.pay-btn-text[_ngcontent-%COMP%]{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align[_ngcontent-%COMP%]{width:20px;height:19px}.paymentCompleted[_ngcontent-%COMP%]{padding:0}@media (max-width:578px){.pay-body[_ngcontent-%COMP%]{border:none;box-shadow:none;margin:16px 0 0;border-radius:0}.pay-title-box[_ngcontent-%COMP%]{padding:22px 16px}.pay-selection[_ngcontent-%COMP%]{padding:16px}}@media (max-width:784px){.pay-btn[_ngcontent-%COMP%]{min-width:100%;padding-right:16px;padding-left:12px}.width-q[_ngcontent-%COMP%]{gap:12px}.pay-width[_ngcontent-%COMP%]{padding-bottom:12px}.pay-details[_ngcontent-%COMP%]{padding-top:8px}}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentDetailsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-details',
                        templateUrl: './payment-details.component.html',
                        styleUrls: ['./payment-details.component.scss']
                    }]
            }], function () { return []; }, { emitter: [{
                    type: i0.Output
                }], payEmitter: [{
                    type: i0.Output
                }] });
    })();

    var ParentpaymentComponent = /** @class */ (function () {
        function ParentpaymentComponent() {
        }
        ParentpaymentComponent.prototype.ngOnInit = function () {
        };
        return ParentpaymentComponent;
    }());
    ParentpaymentComponent.ɵfac = function ParentpaymentComponent_Factory(t) { return new (t || ParentpaymentComponent)(); };
    ParentpaymentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ParentpaymentComponent, selectors: [["lib-parentpayment"]], decls: 1, vars: 0, template: function ParentpaymentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "lib-payment-details");
            }
        }, directives: [PaymentDetailsComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentpaymentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-parentpayment',
                        template: "\n  <lib-payment-details></lib-payment-details>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var PaymentCardComponent = /** @class */ (function () {
        function PaymentCardComponent() {
        }
        PaymentCardComponent.prototype.ngOnInit = function () {
        };
        return PaymentCardComponent;
    }());
    PaymentCardComponent.ɵfac = function PaymentCardComponent_Factory(t) { return new (t || PaymentCardComponent)(); };
    PaymentCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentCardComponent, selectors: [["lib-payment-card"]], decls: 2, vars: 0, template: function PaymentCardComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "payment-card works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentCardComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-card',
                        templateUrl: './payment-card.component.html',
                        styleUrls: ['./payment-card.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PaymentBankComponent = /** @class */ (function () {
        function PaymentBankComponent() {
        }
        PaymentBankComponent.prototype.ngOnInit = function () {
        };
        return PaymentBankComponent;
    }());
    PaymentBankComponent.ɵfac = function PaymentBankComponent_Factory(t) { return new (t || PaymentBankComponent)(); };
    PaymentBankComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentBankComponent, selectors: [["lib-payment-bank"]], decls: 2, vars: 0, template: function PaymentBankComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "payment-bank works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentBankComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-bank',
                        templateUrl: './payment-bank.component.html',
                        styleUrls: ['./payment-bank.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var ParentpaymentModule = /** @class */ (function () {
        function ParentpaymentModule() {
        }
        return ParentpaymentModule;
    }());
    ParentpaymentModule.ɵfac = function ParentpaymentModule_Factory(t) { return new (t || ParentpaymentModule)(); };
    ParentpaymentModule.ɵmod = i0.ɵɵdefineNgModule({ type: ParentpaymentModule });
    ParentpaymentModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentpaymentModule, { declarations: [ParentpaymentComponent,
                PaymentDetailsComponent,
                PaymentCardComponent,
                PaymentBankComponent], exports: [ParentpaymentComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentpaymentModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParentpaymentComponent,
                            PaymentDetailsComponent,
                            PaymentCardComponent,
                            PaymentBankComponent
                        ],
                        imports: [],
                        schemas: [
                            i0.CUSTOM_ELEMENTS_SCHEMA
                        ],
                        exports: [
                            ParentpaymentComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of parentpayment
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ParentpaymentComponent = ParentpaymentComponent;
    exports.ParentpaymentModule = ParentpaymentModule;
    exports.ParentpaymentService = ParentpaymentService;
    exports.PaymentBankComponent = PaymentBankComponent;
    exports.PaymentCardComponent = PaymentCardComponent;
    exports.PaymentDetailsComponent = PaymentDetailsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=parentpayment.umd.js.map

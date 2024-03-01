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
        return PaymentDetailsComponent;
    }());
    PaymentDetailsComponent.ɵfac = function PaymentDetailsComponent_Factory(t) { return new (t || PaymentDetailsComponent)(); };
    PaymentDetailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentDetailsComponent, selectors: [["lib-payment-details"]], outputs: { emitter: "emitter", payEmitter: "payEmitter" }, decls: 3, vars: 0, consts: [[1, "testing"]], template: function PaymentDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "span");
                i0.ɵɵtext(2, "testing paymeny apple");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
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

import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, Output, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class ParentpaymentService {
    constructor() { }
}
ParentpaymentService.ɵfac = function ParentpaymentService_Factory(t) { return new (t || ParentpaymentService)(); };
ParentpaymentService.ɵprov = ɵɵdefineInjectable({ token: ParentpaymentService, factory: ParentpaymentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ParentpaymentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class PaymentDetailsComponent {
    constructor() {
        this.paymentMethodType = 'Bank transfer';
        this.canDoWalletPay = false;
        this.walletPayLogoName = '';
        this.walletPayDesc = '';
        this.paymentMethod = 1;
        this.emitter = new EventEmitter();
        this.payEmitter = new EventEmitter();
    }
    ngOnInit() {
    }
}
PaymentDetailsComponent.ɵfac = function PaymentDetailsComponent_Factory(t) { return new (t || PaymentDetailsComponent)(); };
PaymentDetailsComponent.ɵcmp = ɵɵdefineComponent({ type: PaymentDetailsComponent, selectors: [["lib-payment-details"]], outputs: { emitter: "emitter", payEmitter: "payEmitter" }, decls: 3, vars: 0, consts: [[1, "testing"]], template: function PaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "span");
        ɵɵtext(2, "testing paymeny apple");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, styles: [".pay-body[_ngcontent-%COMP%]{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px rgba(0,0,0,.04),0 0 2px rgba(0,0,0,.06),0 0 1px rgba(0,0,0,.04);border-radius:4px;margin:24px;overflow:hidden}.error-body[_ngcontent-%COMP%]{text-align:center;height:280px}.error-body[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box[_ngcontent-%COMP%]{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title[_ngcontent-%COMP%]{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection[_ngcontent-%COMP%]{width:100%;padding:24px}.width-q[_ngcontent-%COMP%]{margin:0;gap:24px}.pay-width[_ngcontent-%COMP%]{font-weight:700;font-size:16px;padding-bottom:8px}.pay-btn[_ngcontent-%COMP%], .pay-width[_ngcontent-%COMP%]{color:var(--primaryTextColor)}.pay-btn[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active[_ngcontent-%COMP%]{border:1px solid var(--secondaryButtonColour)}.pay-btn-text[_ngcontent-%COMP%]{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align[_ngcontent-%COMP%]{width:20px;height:19px}.paymentCompleted[_ngcontent-%COMP%]{padding:0}@media (max-width:578px){.pay-body[_ngcontent-%COMP%]{border:none;box-shadow:none;margin:16px 0 0;border-radius:0}.pay-title-box[_ngcontent-%COMP%]{padding:22px 16px}.pay-selection[_ngcontent-%COMP%]{padding:16px}}@media (max-width:784px){.pay-btn[_ngcontent-%COMP%]{min-width:100%;padding-right:16px;padding-left:12px}.width-q[_ngcontent-%COMP%]{gap:12px}.pay-width[_ngcontent-%COMP%]{padding-bottom:12px}.pay-details[_ngcontent-%COMP%]{padding-top:8px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaymentDetailsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-payment-details',
                templateUrl: './payment-details.component.html',
                styleUrls: ['./payment-details.component.scss']
            }]
    }], function () { return []; }, { emitter: [{
            type: Output
        }], payEmitter: [{
            type: Output
        }] }); })();

class ParentpaymentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParentpaymentComponent.ɵfac = function ParentpaymentComponent_Factory(t) { return new (t || ParentpaymentComponent)(); };
ParentpaymentComponent.ɵcmp = ɵɵdefineComponent({ type: ParentpaymentComponent, selectors: [["lib-parentpayment"]], decls: 1, vars: 0, template: function ParentpaymentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "lib-payment-details");
    } }, directives: [PaymentDetailsComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ParentpaymentComponent, [{
        type: Component,
        args: [{
                selector: 'lib-parentpayment',
                template: `
  <lib-payment-details></lib-payment-details>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class PaymentCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentCardComponent.ɵfac = function PaymentCardComponent_Factory(t) { return new (t || PaymentCardComponent)(); };
PaymentCardComponent.ɵcmp = ɵɵdefineComponent({ type: PaymentCardComponent, selectors: [["lib-payment-card"]], decls: 2, vars: 0, template: function PaymentCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "payment-card works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaymentCardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-payment-card',
                templateUrl: './payment-card.component.html',
                styleUrls: ['./payment-card.component.css']
            }]
    }], function () { return []; }, null); })();

class PaymentBankComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentBankComponent.ɵfac = function PaymentBankComponent_Factory(t) { return new (t || PaymentBankComponent)(); };
PaymentBankComponent.ɵcmp = ɵɵdefineComponent({ type: PaymentBankComponent, selectors: [["lib-payment-bank"]], decls: 2, vars: 0, template: function PaymentBankComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "payment-bank works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaymentBankComponent, [{
        type: Component,
        args: [{
                selector: 'lib-payment-bank',
                templateUrl: './payment-bank.component.html',
                styleUrls: ['./payment-bank.component.css']
            }]
    }], function () { return []; }, null); })();

class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = function ParentpaymentModule_Factory(t) { return new (t || ParentpaymentModule)(); };
ParentpaymentModule.ɵmod = ɵɵdefineNgModule({ type: ParentpaymentModule });
ParentpaymentModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ParentpaymentModule, { declarations: [ParentpaymentComponent,
        PaymentDetailsComponent,
        PaymentCardComponent,
        PaymentBankComponent], exports: [ParentpaymentComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ParentpaymentModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ParentpaymentComponent,
                    PaymentDetailsComponent,
                    PaymentCardComponent,
                    PaymentBankComponent
                ],
                imports: [],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
                exports: [
                    ParentpaymentComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of parentpayment
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ParentpaymentComponent, ParentpaymentModule, ParentpaymentService, PaymentBankComponent, PaymentCardComponent, PaymentDetailsComponent };
//# sourceMappingURL=parentpayment.js.map

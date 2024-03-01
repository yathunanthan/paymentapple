import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵtext, ɵɵelementEnd, EventEmitter, ɵɵdefineComponent, ɵɵtemplate, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, Component, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { __awaiter } from 'tslib';

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

function PaymentDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function PaymentDetailsComponent_div_15_Template_div_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.paymentSelected(2); });
    ɵɵelement(1, "input", 15);
    ɵɵelementStart(2, "span", 9);
    ɵɵtext(3, "Debit or credit card");
    ɵɵelementEnd();
    ɵɵelement(4, "img", 10);
    ɵɵelementEnd();
} }
function PaymentDetailsComponent_lib_payment_bank_details_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "lib-payment-bank-details");
} }
function PaymentDetailsComponent_lib_payment_card_details_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "lib-payment-card-details");
} }
function PaymentDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "div", 17);
    ɵɵtext(2, " Oops. Sorry, we are unable to process your payment. ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 18);
    ɵɵtext(4, " An error has occurred while attempting to process your order. Please try again or try another payment method. ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
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
    canWalletPay() {
        this.canDoWalletPay = false;
        this.userData.isWalletPayEnabled = true;
        if (this.userData.isStripeEnabled && this.userData.isWalletPayEnabled) {
            //https://stripe.com/docs/js/initializing
            const stripe = window.Stripe(atob(this.userData.pk_token), { stripeAccount: this.userData.stripeConnectedAccountId });
            const paymentRequest = stripe.paymentRequest({
                country: this.userData.clientDetails.countryNameCode,
                currency: this.userData.currencyCode.toLowerCase(),
                total: {
                    label: 'Demo total',
                    amount: 1,
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });
            (() => __awaiter(this, void 0, void 0, function* () {
                // Check the availability of the Payment Request API first.
                const result = yield paymentRequest.canMakePayment();
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
            }))();
        }
    }
    paymentSelected(value) {
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
    }
}
PaymentDetailsComponent.ɵfac = function PaymentDetailsComponent_Factory(t) { return new (t || PaymentDetailsComponent)(); };
PaymentDetailsComponent.ɵcmp = ɵɵdefineComponent({ type: PaymentDetailsComponent, selectors: [["lib-payment-details"]], outputs: { emitter: "emitter", payEmitter: "payEmitter" }, decls: 24, vars: 6, consts: [[1, "row", "pay-body"], [1, "pay-title-box"], [1, "pay-title"], [1, "pay-details"], [1, "pay-selection"], [1, "col", "pay-width"], [1, "row", "width-q"], [1, "col", "pay-btn", 3, "click"], ["type", "radio", "name", "payWith", "id", "1"], [1, "pay-btn-text"], ["src", "", "alt", "", 1, "icon-align"], ["class", "col pay-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "name", "payWith", "id", "3"], ["class", "row pay-body error-body", 4, "ngIf"], ["type", "radio", "name", "payWith", "id", "2"], [1, "row", "pay-body", "error-body"], [1, "error-title"], [1, "error-content"]], template: function PaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtext(3, "Payment details");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵtext(5, "Please fill the information below about your payment method");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵelementStart(7, "div", 5);
        ɵɵtext(8, "Pay with");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 6);
        ɵɵelementStart(10, "div", 7);
        ɵɵlistener("click", function PaymentDetailsComponent_Template_div_click_10_listener() { return ctx.paymentSelected(1); });
        ɵɵelement(11, "input", 8);
        ɵɵelementStart(12, "span", 9);
        ɵɵtext(13);
        ɵɵelementEnd();
        ɵɵelement(14, "img", 10);
        ɵɵelementEnd();
        ɵɵtemplate(15, PaymentDetailsComponent_div_15_Template, 5, 0, "div", 11);
        ɵɵelementEnd();
        ɵɵtemplate(16, PaymentDetailsComponent_lib_payment_bank_details_16_Template, 1, 0, "lib-payment-bank-details", 12);
        ɵɵtemplate(17, PaymentDetailsComponent_lib_payment_card_details_17_Template, 1, 0, "lib-payment-card-details", 12);
        ɵɵelementStart(18, "div", 7);
        ɵɵlistener("click", function PaymentDetailsComponent_Template_div_click_18_listener() { return ctx.paymentSelected(3); });
        ɵɵelement(19, "input", 13);
        ɵɵelementStart(20, "span", 9);
        ɵɵtext(21);
        ɵɵelementEnd();
        ɵɵelement(22, "img", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(23, PaymentDetailsComponent_div_23_Template, 5, 0, "div", 14);
    } if (rf & 2) {
        ɵɵadvance(13);
        ɵɵtextInterpolate(ctx.paymentMethodType);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.paymentMethodAllowed >= 2);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.paymentMethod == "1");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.paymentMethod == "2");
        ɵɵadvance(4);
        ɵɵtextInterpolate(ctx.walletPayDesc);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.paymentMethod == 0);
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

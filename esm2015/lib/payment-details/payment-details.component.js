import { __awaiter } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
function PaymentDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function PaymentDetailsComponent_div_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.paymentSelected(2); });
    i0.ɵɵelement(1, "input", 15);
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3, "Debit or credit card");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "img", 10);
    i0.ɵɵelementEnd();
} }
function PaymentDetailsComponent_lib_payment_bank_details_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-payment-bank-details");
} }
function PaymentDetailsComponent_lib_payment_card_details_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-payment-card-details");
} }
function PaymentDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵtext(2, " Oops. Sorry, we are unable to process your payment. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 18);
    i0.ɵɵtext(4, " An error has occurred while attempting to process your order. Please try again or try another payment method. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class PaymentDetailsComponent {
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
PaymentDetailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentDetailsComponent, selectors: [["lib-payment-details"]], outputs: { emitter: "emitter", payEmitter: "payEmitter" }, decls: 24, vars: 6, consts: [[1, "row", "pay-body"], [1, "pay-title-box"], [1, "pay-title"], [1, "pay-details"], [1, "pay-selection"], [1, "col", "pay-width"], [1, "row", "width-q"], [1, "col", "pay-btn", 3, "click"], ["type", "radio", "name", "payWith", "id", "1"], [1, "pay-btn-text"], ["src", "", "alt", "", 1, "icon-align"], ["class", "col pay-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "name", "payWith", "id", "3"], ["class", "row pay-body error-body", 4, "ngIf"], ["type", "radio", "name", "payWith", "id", "2"], [1, "row", "pay-body", "error-body"], [1, "error-title"], [1, "error-content"]], template: function PaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, styles: [".pay-body[_ngcontent-%COMP%]{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px rgba(0,0,0,.04),0 0 2px rgba(0,0,0,.06),0 0 1px rgba(0,0,0,.04);border-radius:4px;margin:24px;overflow:hidden}.error-body[_ngcontent-%COMP%]{text-align:center;height:280px}.error-body[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box[_ngcontent-%COMP%]{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title[_ngcontent-%COMP%]{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection[_ngcontent-%COMP%]{width:100%;padding:24px}.width-q[_ngcontent-%COMP%]{margin:0;gap:24px}.pay-width[_ngcontent-%COMP%]{font-weight:700;font-size:16px;padding-bottom:8px}.pay-btn[_ngcontent-%COMP%], .pay-width[_ngcontent-%COMP%]{color:var(--primaryTextColor)}.pay-btn[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active[_ngcontent-%COMP%]{border:1px solid var(--secondaryButtonColour)}.pay-btn-text[_ngcontent-%COMP%]{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align[_ngcontent-%COMP%]{width:20px;height:19px}.paymentCompleted[_ngcontent-%COMP%]{padding:0}@media (max-width:578px){.pay-body[_ngcontent-%COMP%]{border:none;box-shadow:none;margin:16px 0 0;border-radius:0}.pay-title-box[_ngcontent-%COMP%]{padding:22px 16px}.pay-selection[_ngcontent-%COMP%]{padding:16px}}@media (max-width:784px){.pay-btn[_ngcontent-%COMP%]{min-width:100%;padding-right:16px;padding-left:12px}.width-q[_ngcontent-%COMP%]{gap:12px}.pay-width[_ngcontent-%COMP%]{padding-bottom:12px}.pay-details[_ngcontent-%COMP%]{padding-top:8px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentDetailsComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7SUNhbkUsOEJBQ2lDO0lBQTdCLHlMQUF5QixDQUFDLEtBQUU7SUFBQyw0QkFBMEM7SUFBQSwrQkFBMkI7SUFBQSxvQ0FBb0I7SUFBQSxpQkFBTztJQUFBLDBCQUMzRztJQUFBLGlCQUFNOzs7SUFRaEMsMkNBQWtGOzs7SUFDbEYsMkNBQWtGOzs7SUFXMUYsK0JBQWdFO0lBQzVELCtCQUF5QjtJQUNyQixxRUFDSjtJQUFBLGlCQUFNO0lBQ04sK0JBQTJCO0lBQ3ZCLCtIQUNKO0lBQUEsaUJBQU07SUFDVixpQkFBTTs7QURoQ04sTUFBTSxPQUFPLHVCQUF1QjtJQWVsQztRQVpBLHNCQUFpQixHQUFRLGVBQWUsQ0FBQztRQUd6QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0Isa0JBQWEsR0FBUSxDQUFDLENBQUM7UUFFYixZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0QsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRWxELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQ25FLHlDQUF5QztZQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxDQUFDO1lBQ3BILE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlO2dCQUNwRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO2dCQUNsRCxLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLE1BQU0sRUFBRSxDQUFDO2lCQUNaO2dCQUNELGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGlCQUFpQixFQUFFLElBQUk7YUFDMUIsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxHQUFTLEVBQUU7Z0JBQ1IsMkRBQTJEO2dCQUMzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7cUJBQ3ZDO3lCQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTt3QkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUM7cUJBQ3hDO3lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTt3QkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7cUJBQ3RDO3lCQUFNO3dCQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO3FCQUNyQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7aUJBQzVDO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztpQkFDL0M7WUFDTCxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7U0FDUjtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDOzs4RkE5RVksdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNWcEMsOEJBQTBCO1FBQ3RCLDhCQUEyQjtRQUN2Qiw4QkFBdUI7UUFBQSwrQkFBZTtRQUFBLGlCQUFNO1FBQzVDLDhCQUF5QjtRQUFBLDJFQUEyRDtRQUFBLGlCQUFNO1FBQzlGLGlCQUFNO1FBQ04sOEJBQTJCO1FBRXZCLDhCQUEyQjtRQUFBLHdCQUFRO1FBQUEsaUJBQU07UUFDekMsOEJBQXlCO1FBQ3JCLCtCQUFzRDtRQUE3QixrR0FBUyxvQkFBZ0IsQ0FBQyxDQUFDLElBQUM7UUFBQyw0QkFDeEI7UUFBQSxnQ0FBMkI7UUFBQSxhQUFzQjtRQUFBLGlCQUFPO1FBQ2xGLDJCQUFzQztRQUMxQyxpQkFBTTtRQUNOLDJFQUU0QjtRQU9oQyxpQkFBTTtRQUNOLHFIQUFrRjtRQUNsRixxSEFBa0Y7UUFHbEYsK0JBQXNEO1FBQTdCLGtHQUFTLG9CQUFnQixDQUFDLENBQUMsSUFBQztRQUNqRCw2QkFBMEM7UUFBQSxnQ0FBMkI7UUFBQSxhQUFtQjtRQUFBLGlCQUFPO1FBQUEsMkJBQXNDO1FBQ3pJLGlCQUFNO1FBSVYsaUJBQU07UUFDVixpQkFBTTtRQUNOLDJFQU9NOztRQWhDK0QsZ0JBQXNCO1FBQXRCLDJDQUFzQjtRQUd6RSxlQUErQjtRQUEvQixvREFBK0I7UUFVZCxlQUEwQjtRQUExQiwrQ0FBMEI7UUFDMUIsZUFBMEI7UUFBMUIsK0NBQTBCO1FBSW9CLGVBQW1CO1FBQW5CLHVDQUFtQjtRQU85RCxlQUF3QjtRQUF4Qiw2Q0FBd0I7O3VGRHpCakQsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDtzQ0FhVyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyIHdpbmRvdyA6YW55O1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBheW1lbnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBwYXltZW50TWV0aG9kVHlwZTogYW55ID0gJ0JhbmsgdHJhbnNmZXInO1xuXG4gIHVzZXJEYXRhOiBhbnk7XG4gIGNhbkRvV2FsbGV0UGF5OiBib29sZWFuID0gZmFsc2U7XG4gIHdhbGxldFBheUxvZ29OYW1lOiBzdHJpbmcgPSAnJztcbiAgd2FsbGV0UGF5RGVzYzogc3RyaW5nID0gJyc7XG4gIHdhbGxldERldGFpbHM6IGFueTtcbiAgcGF5bWVudE1ldGhvZDogYW55ID0gMTtcblxuICBAT3V0cHV0KCkgZW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cblxuICBjYW5XYWxsZXRQYXkoKSB7XG4gICAgdGhpcy5jYW5Eb1dhbGxldFBheSA9IGZhbHNlO1xuICAgIHRoaXMudXNlckRhdGEuaXNXYWxsZXRQYXlFbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy51c2VyRGF0YS5pc1N0cmlwZUVuYWJsZWQgJiYgdGhpcy51c2VyRGF0YS5pc1dhbGxldFBheUVuYWJsZWQpIHtcbiAgICAgICAgLy9odHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9pbml0aWFsaXppbmdcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gd2luZG93LlN0cmlwZShhdG9iKHRoaXMudXNlckRhdGEucGtfdG9rZW4pLCB7c3RyaXBlQWNjb3VudDogdGhpcy51c2VyRGF0YS5zdHJpcGVDb25uZWN0ZWRBY2NvdW50SWR9KTtcbiAgICAgICAgY29uc3QgcGF5bWVudFJlcXVlc3QgPSBzdHJpcGUucGF5bWVudFJlcXVlc3Qoe1xuICAgICAgICAgICAgY291bnRyeTogdGhpcy51c2VyRGF0YS5jbGllbnREZXRhaWxzLmNvdW50cnlOYW1lQ29kZSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLnVzZXJEYXRhLmN1cnJlbmN5Q29kZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0RlbW8gdG90YWwnLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1ZXN0UGF5ZXJOYW1lOiB0cnVlLFxuICAgICAgICAgICAgcmVxdWVzdFBheWVyRW1haWw6IHRydWUsXG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBhdmFpbGFiaWxpdHkgb2YgdGhlIFBheW1lbnQgUmVxdWVzdCBBUEkgZmlyc3QuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXltZW50UmVxdWVzdC5jYW5NYWtlUGF5bWVudCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nhbk1ha2VQYXltZW50JywgcmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkRvV2FsbGV0UGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmFwcGxlUGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5RGVzYyA9ICdBcHBsZSBQYXknO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheUxvZ29OYW1lID0gJ0FwcGxlUGF5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5nb29nbGVQYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlEZXNjID0gJ0dvb2dsZSBQYXknO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheUxvZ29OYW1lID0gJ0dvb2dsZVBheSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGluaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheURlc2MgPSAnUGF5IHZpYSBMaW5rJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlMb2dvTmFtZSA9ICdMaW5rUGF5JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheURlc2MgPSAnV2FsbGV0UGF5JztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlMb2dvTmFtZSA9ICdXYWxsZXQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbiBtYWtlIFdhbGxldCBwYXltZW50cy5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IG1ha2UgV2FsbGV0IHBheW1lbnRzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9XG4gIH1cblxuICBwYXltZW50U2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgIHZhciB0ZW1wID0gdGhpcy5wYXltZW50TWV0aG9kICE9IHZhbHVlXG4gICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICB0aGlzLnBheW1lbnRNZXRob2QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodmFsdWUpO1xuICAgICAgICB2YXIgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSkgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxufVxuIiwiPGRpdiBjbGFzcz1cInJvdyBwYXktYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYXktdGl0bGUtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXktdGl0bGVcIj5QYXltZW50IGRldGFpbHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheS1kZXRhaWxzXCI+UGxlYXNlIGZpbGwgdGhlIGluZm9ybWF0aW9uIGJlbG93IGFib3V0IHlvdXIgcGF5bWVudCBtZXRob2Q8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGF5LXNlbGVjdGlvblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LXdpZHRoXCI+UGF5IHdpdGg8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3aWR0aC1xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBheS1idG5cIiAoY2xpY2spPVwicGF5bWVudFNlbGVjdGVkKDEpXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXlXaXRoXCIgaWQ9XCIxXCI+PHNwYW4gY2xhc3M9XCJwYXktYnRuLXRleHRcIj57e3BheW1lbnRNZXRob2RUeXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uLWFsaWduXCIgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwYXltZW50TWV0aG9kQWxsb3dlZCA+PSAyXCIgY2xhc3M9XCJjb2wgcGF5LWJ0blwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgyKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMlwiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+RGViaXQgb3IgY3JlZGl0IGNhcmQ8L3NwYW4+PGltZyBjbGFzcz1cImljb24tYWxpZ25cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJcIiBhbHQ9XCJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cInVzZXJEYXRhLmlzU3RyaXBlRW5hYmxlZCAmJiB1c2VyRGF0YS5pc1dhbGxldFBheUVuYWJsZWQgJiYgY2FuRG9XYWxsZXRQYXlcIiBjbGFzcz1cImNvbCBwYXktYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BheS1idG4tYWN0aXZlJyA6IHBheW1lbnRNZXRob2QgPT0gJzMnfVwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMylcIj48aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheVdpdGhcIiBpZD1cIjNcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPnt7IHdhbGxldFBheURlc2MgfX08L3NwYW4+PGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tYWxpZ25cIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxpYi1wYXltZW50LWJhbmstZGV0YWlscyAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzEnXCI+PC9saWItcGF5bWVudC1iYW5rLWRldGFpbHM+XG4gICAgICAgIDxsaWItcGF5bWVudC1jYXJkLWRldGFpbHMgKm5nSWY9XCJwYXltZW50TWV0aG9kID09ICcyJ1wiPjwvbGliLXBheW1lbnQtY2FyZC1kZXRhaWxzPlxuICAgICAgICA8IS0tIDxhcHAtcGF5bWVudC1jYXJkICpuZ0lmPVwicGF5bWVudE1ldGhvZCA9PSAnMidcIj48L2FwcC1wYXltZW50LWNhcmQ+IC0tPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LWJ0blwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMylcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5V2l0aFwiIGlkPVwiM1wiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+e3sgd2FsbGV0UGF5RGVzYyB9fTwvc3Bhbj48aW1nIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvdyBwYXktYm9keSBlcnJvci1ib2R5XCIgKm5nSWY9XCJwYXltZW50TWV0aG9kID09IDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItdGl0bGVcIj5cbiAgICAgICAgT29wcy4gU29ycnksIHdlIGFyZSB1bmFibGUgdG8gcHJvY2VzcyB5b3VyIHBheW1lbnQuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvbnRlbnRcIj5cbiAgICAgICAgQW4gZXJyb3IgaGFzIG9jY3VycmVkIHdoaWxlIGF0dGVtcHRpbmcgdG8gcHJvY2VzcyB5b3VyIG9yZGVyLiBQbGVhc2UgdHJ5IGFnYWluIG9yIHRyeSBhbm90aGVyIHBheW1lbnQgbWV0aG9kLlxuICAgIDwvZGl2PlxuPC9kaXY+Il19
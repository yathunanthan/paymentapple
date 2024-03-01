import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
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
}
PaymentDetailsComponent.ɵfac = function PaymentDetailsComponent_Factory(t) { return new (t || PaymentDetailsComponent)(); };
PaymentDetailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentDetailsComponent, selectors: [["lib-payment-details"]], outputs: { emitter: "emitter", payEmitter: "payEmitter" }, decls: 3, vars: 0, consts: [[1, "testing"]], template: function PaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, "testing paymeny apple");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQzs7QUFVL0UsTUFBTSxPQUFPLHVCQUF1QjtJQWVsQztRQVpBLHNCQUFpQixHQUFRLGVBQWUsQ0FBQztRQUd6QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0Isa0JBQWEsR0FBUSxDQUFDLENBQUM7UUFFYixZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0QsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRWxELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzhGQWxCVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1ZwQyw4QkFBcUI7UUFDakIsNEJBQU07UUFBQSxxQ0FBcUI7UUFBQSxpQkFBTztRQUN0QyxpQkFBTTs7dUZEUU8sdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDtzQ0FhVyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyIHdpbmRvdyA6YW55O1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBheW1lbnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBwYXltZW50TWV0aG9kVHlwZTogYW55ID0gJ0JhbmsgdHJhbnNmZXInO1xuXG4gIHVzZXJEYXRhOiBhbnk7XG4gIGNhbkRvV2FsbGV0UGF5OiBib29sZWFuID0gZmFsc2U7XG4gIHdhbGxldFBheUxvZ29OYW1lOiBzdHJpbmcgPSAnJztcbiAgd2FsbGV0UGF5RGVzYzogc3RyaW5nID0gJyc7XG4gIHdhbGxldERldGFpbHM6IGFueTtcbiAgcGF5bWVudE1ldGhvZDogYW55ID0gMTtcblxuICBAT3V0cHV0KCkgZW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cblxuICBcblxufVxuIiwiPGRpdiBjbGFzcz1cInRlc3RpbmdcIj5cbiAgICA8c3Bhbj50ZXN0aW5nIHBheW1lbnkgYXBwbGU8L3NwYW4+XG48L2Rpdj4iXX0=
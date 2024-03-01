import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaymentDetailsComponent implements OnInit {
    paymentMethodType: any;
    userData: any;
    canDoWalletPay: boolean;
    walletPayLogoName: string;
    walletPayDesc: string;
    walletDetails: any;
    paymentMethod: any;
    emitter: EventEmitter<string>;
    payEmitter: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PaymentDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PaymentDetailsComponent, "lib-payment-details", never, {}, { "emitter": "emitter"; "payEmitter": "payEmitter"; }, never, never>;
}
//# sourceMappingURL=payment-details.component.d.ts.map
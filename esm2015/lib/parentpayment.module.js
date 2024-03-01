import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ParentpaymentComponent } from './parentpayment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentCardComponent } from './payment-details/payment-card/payment-card.component';
import { PaymentBankComponent } from './payment-details/payment-bank/payment-bank.component';
import * as i0 from "@angular/core";
export class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = function ParentpaymentModule_Factory(t) { return new (t || ParentpaymentModule)(); };
ParentpaymentModule.ɵmod = i0.ɵɵdefineNgModule({ type: ParentpaymentModule });
ParentpaymentModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentpaymentModule, { declarations: [ParentpaymentComponent,
        PaymentDetailsComponent,
        PaymentCardComponent,
        PaymentBankComponent], exports: [ParentpaymentComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentpaymentModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUFvQjdGLE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7dURBQW5CLG1CQUFtQjsyREFUckIsRUFDUjt3RkFRVSxtQkFBbUIsbUJBZDVCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLG9CQUFvQixhQVFwQixzQkFBc0I7dUZBR2IsbUJBQW1CO2NBaEIvQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsT0FBTyxFQUFDO29CQUNOLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJlbnRwYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYXJlbnRwYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENhcmRDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQvcGF5bWVudC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50QmFua0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtYmFuay9wYXltZW50LWJhbmsuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBhcmVudHBheW1lbnRDb21wb25lbnQsXG4gICAgUGF5bWVudERldGFpbHNDb21wb25lbnQsXG4gICAgUGF5bWVudENhcmRDb21wb25lbnQsXG4gICAgUGF5bWVudEJhbmtDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBzY2hlbWFzOltcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQYXJlbnRwYXltZW50Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50cGF5bWVudE1vZHVsZSB7IH1cbiJdfQ==
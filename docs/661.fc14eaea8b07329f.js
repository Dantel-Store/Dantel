"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[661],{1661:(Ze,y,s)=>{s.r(y),s.d(y,{IncomeOrderModule:()=>Ce});var u=s(6895),l=s(433),_=s(4258),m=s(5593),w=s(5569),h=s(1740),x=s(585),q=s(2137),v=s(2210),Z=s(4325),a=s(1765),O=s(3608),A=s(3032),T=s(5281),g=s(8882),b=s(6536),e=s(4650),U=s(690);let I=(()=>{class o{constructor(t){this.commonService=t}canActivate(t,n){return this.commonService.hasSellerRole}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(U.v))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var M=s(3954),P=s(9268),f=s(6854),p=s(805),C=s(5305),S=s(1493),D=s(4251);const J=function(){return{width:"100%"}};function N(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",22)(1,"div",23)(2,"div",24)(3,"label"),e._uU(4,"the seller get it by :"),e.qZA(),e.TgZ(5,"p-calendar",25),e.NdJ("ngModelChange",function(r){e.CHM(t);const d=e.oxw();return e.KtG(d.incomeOrder.arrivedDate=r)}),e.qZA()(),e.TgZ(6,"div",26)(7,"span",27),e._UZ(8,"i",28),e.qZA(),e.TgZ(9,"input",29),e.NdJ("ngModelChange",function(r){e.CHM(t);const d=e.oxw();return e.KtG(d.paymentAmount=r)}),e.qZA(),e.TgZ(10,"span",27),e._uU(11,"$"),e.qZA()(),e.TgZ(12,"div",30)(13,"p-dropdown",31),e.NdJ("ngModelChange",function(r){e.CHM(t);const d=e.oxw();return e.KtG(d.selectedCompanyId=r)}),e.qZA()()()()}if(2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.incomeOrder.arrivedDate)("touchUI",!0)("showIcon",!0),e.xp6(4),e.Q6J("ngModel",t.paymentAmount),e.xp6(4),e.Akn(e.DdM(8,J)),e.Q6J("options",t.deliveryCompanies)("ngModel",t.selectedCompanyId)}}function R(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.confirmSend())}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("loading",t.doneLoading)}}function k(o,i){if(1&o&&(e.TgZ(0,"div",33),e._uU(1," Current income order contains "),e.TgZ(2,"span",34),e._uU(3),e.qZA(),e._uU(4," costing till now "),e.TgZ(5,"span",34),e._uU(6),e.qZA()()),2&o){const t=e.oxw();let n;e.xp6(3),e.AsE("",t.OrderTotalProductsCount," product",(t.incomeOrder.incomeOrderProducts&&t.OrderTotalProductsCount)>1?"s":"",""),e.xp6(3),e.hij("",null!==(n=t.incomeOrder.totalPrice)&&void 0!==n?n:0,"$")}}function Y(o,i){1&o&&(e.TgZ(0,"tr")(1,"th",35),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th")(4,"div",36),e._uU(5,"product"),e.qZA()(),e.TgZ(6,"th")(7,"div",36),e._uU(8," Name "),e.qZA()(),e.TgZ(9,"th")(10,"div",36),e._uU(11," selection "),e.qZA()(),e.TgZ(12,"th")(13,"div",37),e._uU(14,"Source"),e.qZA()(),e.TgZ(15,"th")(16,"div",36),e._uU(17," product price "),e.qZA()(),e.TgZ(18,"th")(19,"div",36),e._uU(20," Delivering Cost "),e.qZA()()())}function L(o,i){if(1&o&&e._UZ(0,"p-tableCheckbox",50),2&o){const t=e.oxw().$implicit;e.Q6J("value",t)}}function H(o,i){1&o&&e._uU(0," Links ")}function $(o,i){if(1&o&&(e._UZ(0,"a",51),e.ALo(1,"linkName")),2&o){const t=i.$implicit;e.s9C("label",e.lcZ(1,3,t.sourceLink)),e.Q6J("href",t.sourceLink,e.LSH)("title",t.sourceLink)}}function j(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr",38)(1,"td"),e.YNc(2,L,1,1,"p-tableCheckbox",39),e.qZA(),e.TgZ(3,"td")(4,"span",40),e._uU(5,"product"),e.qZA(),e.TgZ(6,"div",37)(7,"button",41),e.NdJ("click",function(){const d=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.showProductDetails(d.product))}),e.qZA()()(),e.TgZ(8,"td")(9,"span",40),e._uU(10,"Name"),e.qZA(),e.TgZ(11,"div",36)(12,"span",42),e._uU(13),e.qZA()()(),e.TgZ(14,"td")(15,"span",40),e._uU(16,"selection"),e.qZA(),e.TgZ(17,"div",43),e._UZ(18,"app-product-selection",44),e.qZA()(),e.TgZ(19,"td")(20,"div",37)(21,"p-dropdown",45),e.YNc(22,H,1,0,"ng-template",46),e.YNc(23,$,2,5,"ng-template",47),e.qZA()()(),e.TgZ(24,"td")(25,"span",40),e._uU(26,"product price"),e.qZA(),e.TgZ(27,"div",36)(28,"div",48)(29,"input",49),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.price=r)}),e.qZA(),e.TgZ(30,"span",27),e._uU(31,"$"),e.qZA()()()(),e.TgZ(32,"td")(33,"span",40),e._uU(34,"product price"),e.qZA(),e.TgZ(35,"div",36)(36,"div",48)(37,"input",49),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.deliveringCost=r)}),e.qZA(),e.TgZ(38,"span",27),e._uU(39,"$"),e.qZA()()()()()}if(2&o){const t=i.$implicit;e.xp6(2),e.Q6J("ngIf",!t.receivedByBuyer),e.xp6(11),e.Oqu(t.product.name),e.xp6(5),e.Q6J("isDeletable",!1)("productSelection",t.productSelection),e.xp6(3),e.Q6J("options",t.product.productAdministrativeData),e.xp6(8),e.Q6J("disabled",!0)("ngModel",t.price),e.xp6(8),e.Q6J("disabled",!0)("ngModel",t.deliveringCost)}}function Q(o,i){1&o&&(e.TgZ(0,"tr")(1,"td",52),e._uU(2,"No orders found."),e.qZA()())}const F=function(){return{width:"24rem"}},B=function(){return[10,25,50]};let G=(()=>{class o{constructor(t,n,r,d,c,ve){this.apiService=t,this.orderService=n,this.confirmationService=r,this.dialogService=d,this.productsService=c,this.messageService=ve,this.incomeOrder=new M.W,this.selectedOrderProducts=[],this.loading=!1,this.receivedProductsCount=0,this.selectedProductsCount=0,this.consernedProductsCount=0,this.OrderTotalProductsCount=0,this.doneLoading=!1,this.deliveryCompanies=[],this.cancelLoading=!1,this.showDialog=!1}ngOnInit(){this.orderService.getCurrentIncomeOrder().then(t=>{this.incomeOrder=t,t.incomeOrderProducts.forEach(n=>{n.receivedByBuyer&&(this.receivedProductsCount+=n.productSelection.quantity),this.OrderTotalProductsCount+=n.productSelection.quantity}),this.consernedProductsCount=this.receivedProductsCount}),this.apiService.getCompaniesListByCompanyTypeKeyAdv("DELIVERING_COMPANY").subscribe(t=>{this.deliveryCompanies=t})}ngOnDestroy(){this.ref&&this.ref.close(!0)}cancelProducts(){0!=this.selectedProductsCount?(this.cancelLoading=!0,this.orderService.cancelOrderingIncomeOrderProductsList(this.selectedOrderProducts).finally(()=>this.cancelLoading=!1)):this.messageService.add({key:"homeToast",severity:"warn",life:7e3,summary:"Missing some field",detail:"No selected product to cancel it !!"})}recieveProducts(){0!=this.selectedProductsCount?(this.loading=!0,this.orderService.recieveOrderProductByBuyer(this.selectedOrderProducts).then(t=>{t&&(this.selectedOrderProducts=[],this.receivedProductsCount+=this.selectedProductsCount,this.consernedProductsCount=this.receivedProductsCount,this.selectedProductsCount=0)}).finally(()=>{this.loading=!1})):this.messageService.add({key:"homeToast",severity:"warn",life:7e3,summary:"Missing some field",detail:"No selected product to receive !!"})}confirmSend(){this.paymentAmount?0!=this.receivedProductsCount?this.selectedCompanyId?(this.doneLoading=!0,this.orderService.recieveOrderProductByShippingCompany(this.incomeOrder,this.paymentAmount,this.selectedCompanyId).then(t=>{t&&(this.incomeOrder=t,this.paymentAmount=void 0,this.receivedProductsCount=0,this.consernedProductsCount=0,this.showDialog=!1)}).finally(()=>{this.doneLoading=!1})):this.messageService.add({key:"homeToast",severity:"warn",life:7e3,summary:"Undefine Deliverying Company",detail:"please select delivering company"}):this.messageService.add({key:"homeToast",severity:"warn",life:7e3,summary:"No Product At The Buyer",detail:'if you receive the order please select the received product then click on "Receive Selected Products"'}):this.messageService.add({key:"homeToast",severity:"warn",life:7e3,summary:"Missing some field",detail:"please fill delivering amount before send this order"})}onSelectAllChange(t){this.selectedProductsCount=0,t?(this.incomeOrder.incomeOrderProducts.forEach(n=>{n.receivedByBuyer||(this.selectedProductsCount+=n.productSelection.quantity)}),this.consernedProductsCount=this.selectedProductsCount):(this.selectedProductsCount=0,this.consernedProductsCount=this.receivedProductsCount)}onRowSelect(t){this.selectedProductsCount+=t.productSelection.quantity,this.consernedProductsCount=this.selectedProductsCount}onRowUnselect(t){this.selectedProductsCount-=t.productSelection.quantity,this.consernedProductsCount=0==this.selectedProductsCount?this.receivedProductsCount:this.selectedProductsCount}showProductDetails(t){this.productsService.selectedProduct=t,this.productsService.openProductDetailsDialog()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(P.s),e.Y36(f.p),e.Y36(p.YP),e.Y36(Z.xA),e.Y36(C.s),e.Y36(p.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-current-order"]],decls:24,vars:21,consts:[[3,"visible","visibleChange"],["pTemplate","content"],["pTemplate","footer"],[1,"flex","flex-wrap","justify-content-around"],[1,"flex","justify-content-around","align-items-center","w-12","lg:w-3","p-2"],["pButton","","pRipple","","type","button","icon","pi pi-check-circle","label","Send To Shipping Company",1,"",3,"disabled","click"],[1,"w-12","lg:w-3","p-2"],[1,"surface-100","border-round-lg","flex","h-3rem","justify-content-around","align-items-center"],[1,"pi","pi-calculator"],[1,"pi","pi-file-edit"],[1,"flex","w-12","lg:w-5","my-2","border-round-lg","border-200","border-2"],[1,"surface-100","border-round-left-lg","white-space-nowrap","flex","align-items-center"],[1,"pi","pi-check-square","mx-2"],[1,"flex","justify-content-around","align-items-center","w-12"],["pButton","","pRipple","","type","button","icon","pi pi-money-bill","label","Receive",1,"p-button-text","p-button-sm",3,"disabled","loading","click"],["pButton","","pRipple","","type","button","icon","pi pi-times","label","Cancel",1,"p-button-danger","p-button-text","p-button-sm",3,"disabled","loading","click"],["dataKey","id","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay","onRowUnselect","onHeaderCheckboxToggle","onRowSelect","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex","flex-column"],[1,"p-2","flex","justify-content-center","flex-wrap"],[1,"flex","flex-column","m-2","w-11"],["styleClass","w-12","appendTo","body","dateFormat","dd MM yy",3,"ngModel","touchUI","showIcon","ngModelChange"],[1,"p-inputgroup","w-11","m-2"],[1,"p-inputgroup-addon"],[1,"pi","pi-truck",2,"line-height","1.25"],["type","text","pInputText","","placeholder","Delivering amount",3,"ngModel","ngModelChange"],[1,"w-11","m-2"],["optionLabel","name","optionValue","id","placeholder","Delivering Company","appendTo","body","dropdownIcon","pi pi-truck","autoWidth","false",3,"options","ngModel","ngModelChange"],["pButton","","pRipple","","type","button","icon","pi pi-check-circle","label","Send",1,"w-11","m-2","p-button-raised",3,"loading","click"],[1,"table-header"],[1,"text-color-secondary","font-semibold"],[2,"width","3rem"],[1,"flex","justify-content-center","align-items-center"],[1,"flex","justify-content-center"],[1,"p-selectable-row"],[3,"value",4,"ngIf"],[1,"p-column-title"],["pButton","","pRipple","","type","button","icon","pi pi-window-maximize",1,"p-button-text","p-button-secondary",3,"click"],[1,""],[1,"flex","flex-wrap","justify-content-center","align-items-center"],[1,"m-1",3,"isDeletable","productSelection"],["appendTo","body","dropdownIcon","pi pi-link","optionLabel","sourceLink","styleClass","max-w-12rem",3,"options"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"p-inputgroup","w-7rem"],["pInputText","","type","text",1,"w-4rem",3,"disabled","ngModel","ngModelChange"],[3,"value"],["pButton","","icon","pi pi-external-link","iconPos","right","target","_blank",1,"font-normal","p-button-text","no-underline",3,"href","label","title"],["colspan","8"]],template:function(t,n){1&t&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(d){return n.showDialog=d}),e.YNc(1,N,14,9,"ng-template",1),e.YNc(2,R,1,1,"ng-template",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"button",5),e.NdJ("click",function(){return n.showDialog=!0}),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7),e._UZ(8,"i",8),e._uU(9),e._UZ(10,"i",9),e.qZA()(),e.TgZ(11,"div",10)(12,"div",11),e._UZ(13,"i",12),e._uU(14," Selected Products "),e.qZA(),e.TgZ(15,"div",13)(16,"button",14),e.NdJ("click",function(){return n.recieveProducts()}),e.qZA(),e.TgZ(17,"button",15),e.NdJ("click",function(){return n.cancelProducts()}),e.qZA()()()(),e.TgZ(18,"p-table",16,17),e.NdJ("onRowUnselect",function(d){return n.onRowUnselect(d.data)})("onHeaderCheckboxToggle",function(d){return n.onSelectAllChange(d.checked)})("onRowSelect",function(d){return n.onRowSelect(d.data)})("selectionChange",function(d){return n.selectedOrderProducts=d}),e.YNc(20,k,7,3,"ng-template",18),e.YNc(21,Y,21,0,"ng-template",19),e.YNc(22,j,40,9,"ng-template",20),e.YNc(23,Q,3,0,"ng-template",21),e.qZA()),2&t&&(e.Akn(e.DdM(19,F)),e.Q6J("visible",n.showDialog),e.xp6(5),e.Q6J("disabled",0!=n.selectedOrderProducts.length),e.xp6(4),e.AsE(" apply on ",n.consernedProductsCount," product",n.consernedProductsCount>1?"s":""," "),e.xp6(7),e.Q6J("disabled",0===n.selectedOrderProducts.length)("loading",n.loading),e.xp6(1),e.Q6J("disabled",0===n.selectedOrderProducts.length)("loading",n.cancelLoading),e.xp6(1),e.Q6J("value",n.incomeOrder.incomeOrderProducts)("selection",n.selectedOrderProducts)("rowHover",!1)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(20,B))("loading",n.orderService.waitingForOrders)("paginator",!0)("filterDelay",0))},dependencies:[u.O5,p.jx,m.Hq,h.o,l.Fj,l.JJ,l.On,S.V,g.p,a.iA,a.UA,a.Mo,v.Lt,x.f,D.q]}),o})();function K(o,i){1&o&&(e.TgZ(0,"tr",13)(1,"th")(2,"div",14),e._uU(3," Order ID "),e.qZA()(),e.TgZ(4,"th")(5,"div",14),e._uU(6," Product "),e.qZA()(),e.TgZ(7,"th")(8,"div",14),e._uU(9," Selection "),e.qZA()(),e.TgZ(10,"th")(11,"div",14),e._uU(12," Price "),e.qZA()(),e.TgZ(13,"th")(14,"div",14),e._uU(15," DeliveringCost "),e.qZA()(),e.TgZ(16,"th")(17,"div",14),e._uU(18," Shipping Cost "),e.qZA()()())}function W(o,i){if(1&o&&(e.TgZ(0,"tr",15)(1,"td",16),e._uU(2,"Total Coast"),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"number"),e.qZA()()),2&o){const t=i.$implicit,n=e.oxw(2);e.xp6(4),e.hij("",e.xi3(5,1,n.calculateCoast(t.ordreId),"1.2-2"),"$")}}function E(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"span",17),e._uU(3,"order Id"),e.qZA(),e.TgZ(4,"div",18),e._uU(5),e.qZA()(),e.TgZ(6,"td")(7,"span",17),e._uU(8,"product"),e.qZA(),e.TgZ(9,"div",18)(10,"button",19),e.NdJ("click",function(){const d=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.showProductDetails(d.product))}),e.qZA()()(),e.TgZ(11,"td")(12,"span",17),e._uU(13,"Selection"),e.qZA(),e.TgZ(14,"div",20),e._UZ(15,"app-product-selection",21),e.qZA()(),e.TgZ(16,"td")(17,"span",17),e._uU(18,"Price"),e.qZA(),e.TgZ(19,"div",20),e._uU(20),e.qZA()(),e.TgZ(21,"td")(22,"span",17),e._uU(23,"DeliveringCost"),e.qZA(),e.TgZ(24,"div",20),e._uU(25),e.qZA()(),e.TgZ(26,"td")(27,"span",17),e._uU(28,"Shipping Coast"),e.qZA(),e.TgZ(29,"div",20),e._uU(30),e.ALo(31,"number"),e.qZA()()()}if(2&o){const t=i.$implicit;e.xp6(5),e.hij(" ",t.ordreId," "),e.xp6(10),e.Q6J("isDeletable",!1)("productSelection",t.productSelection),e.xp6(5),e.hij(" ",t.price,"$ "),e.xp6(5),e.hij(" ",t.deliveringCost,"$ "),e.xp6(5),e.hij(" ",e.xi3(31,6,t.shippingCost,"1.2-2"),"$ ")}}function z(o,i){if(1&o&&(e.TgZ(0,"p-table",9),e.YNc(1,K,19,0,"ng-template",10),e.YNc(2,W,6,4,"ng-template",11),e.YNc(3,E,32,9,"ng-template",12),e.qZA()),2&o){const t=e.oxw();e.Q6J("value",t.selectedIncomeOrder.incomeOrderProducts)}}let X=(()=>{class o{constructor(t,n,r,d){this.router=t,this.location=n,this.productsService=r,this.orderService=d}ngOnInit(){this.orderService.selectedIncomeOrder?this.selectedIncomeOrder=this.orderService.selectedIncomeOrder:this.router.navigate(["/administrative/incomeorder/previous"])}showProductDetails(t){this.productsService.selectedProduct=t,this.productsService.endSelection(),this.productsService.openProductDetailsDialog()}calculateCoast(t){return this.selectedIncomeOrder.incomeOrderProducts.filter(n=>n.ordreId===t).reduce((n,r)=>(r.price&&(n+=r.price),r.shippingCost&&(n+=r.shippingCost),r.deliveringCost&&(n+=r.deliveringCost),n),0)}goBack(){this.location.back()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.F0),e.Y36(u.Ye),e.Y36(C.s),e.Y36(f.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-income-order-details"]],decls:12,vars:1,consts:[[1,"grid","m-2","lg:m-4"],[1,"col-12"],[1,"text-900","font-bold","text-3xl","mb-3"],[1,"pi","pi-link","text-3xl","font-bold"],[1,"ml-5","mb-5","font-medium","text-700","text-md"],[1,"m-4"],["pButton","","pRipple","","label","Return","icon","pi pi-fw pi-arrow-left",1,"p-button-secondary","p-button-outlined","mt-3","lg:mt-0","w-full","lg:w-auto","flex-order-2","lg:flex-order-1","lg:mr-4",3,"click"],[1,"card"],["rowGroupMode","subheader","groupRowsBy","ordreId",3,"value",4,"ngIf"],["rowGroupMode","subheader","groupRowsBy","ordreId",3,"value"],["pTemplate","header"],["pTemplate","groupfooter"],["pTemplate","body"],[1,"bg-primary-50"],[1,"flex","justify-content-center","align-items-center"],[1,"font-bold","surface-ground"],["colspan","5",2,"text-align","right"],[1,"p-column-title"],[1,"flex","justify-content-center"],["pButton","","pRipple","","type","button","icon","pi pi-window-maximize",1,"p-button-text","p-button-secondary",3,"click"],[1,"flex","flex-wrap","justify-content-center","align-items-center"],[1,"m-1",3,"isDeletable","productSelection"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e._uU(4," Income Order "),e.qZA(),e.TgZ(5,"p",4),e._uU(6,"Selected Income Order Details"),e.qZA(),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return n.goBack()}),e.qZA()(),e.TgZ(9,"div",1)(10,"div",7),e.YNc(11,z,4,1,"p-table",8),e.qZA()()()()),2&t&&(e.xp6(11),e.Q6J("ngIf",n.selectedIncomeOrder))},dependencies:[u.O5,p.jx,m.Hq,g.p,a.iA,u.JJ]}),o})();function V(o,i){1&o&&(e.TgZ(0,"tr")(1,"th")(2,"div",13),e._uU(3," products "),e.qZA()(),e.TgZ(4,"th")(5,"div",13),e._uU(6," Arrival Date "),e.qZA()(),e.TgZ(7,"th")(8,"div",13),e._uU(9," total price "),e.qZA()(),e.TgZ(10,"th")(11,"div",13),e._uU(12," Shipping Coast "),e.qZA()(),e._UZ(13,"th",14),e.qZA())}function ee(o,i){if(1&o&&e._UZ(0,"app-product-selection",25),2&o){const t=i.$implicit;e.Q6J("isDeletable",!1)("productSelection",t.productSelection)}}function te(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr",15)(1,"td")(2,"span",16),e._uU(3,"Products"),e.qZA(),e.TgZ(4,"div",17),e.YNc(5,ee,1,2,"app-product-selection",18),e.qZA()(),e.TgZ(6,"td")(7,"span",16),e._uU(8,"Arrival Date"),e.qZA(),e.TgZ(9,"div",13),e._UZ(10,"app-delivery-date-left",19),e.qZA()(),e.TgZ(11,"td")(12,"span",16),e._uU(13,"total price"),e.qZA(),e.TgZ(14,"div",13)(15,"div",20)(16,"input",21),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.totalPrice=r)}),e.qZA(),e.TgZ(17,"span",22),e._uU(18,"$"),e.qZA()()()(),e.TgZ(19,"td")(20,"span",16),e._uU(21,"Shipping Coast"),e.qZA(),e.TgZ(22,"div",13)(23,"div",20)(24,"input",23),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.shippingCoast=r)}),e.qZA(),e.TgZ(25,"span",22),e._uU(26,"$"),e.qZA()()()(),e.TgZ(27,"td")(28,"div",13)(29,"button",24),e.NdJ("click",function(){const d=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.receive(d))}),e.qZA()()()()}if(2&o){const t=i.$implicit;e.xp6(5),e.Q6J("ngForOf",t.incomeOrderProducts),e.xp6(5),e.Q6J("date",t.arrivedDate),e.xp6(6),e.Q6J("disabled",!0)("ngModel",t.totalPrice),e.xp6(8),e.Q6J("ngModel",t.shippingCoast),e.xp6(5),e.Q6J("disabled",!t.shippingCoast)}}function oe(o,i){1&o&&(e.TgZ(0,"tr")(1,"td",26),e._uU(2,"No Income orders on the way."),e.qZA()())}const ne=function(){return[10,25,50]};let re=(()=>{class o{constructor(t,n,r){this.orderService=t,this.apiService=n,this.messageService=r,this.incomeOrderList=[],this.shippingCompanies=[]}ngOnInit(){this.orderService.getOnTheWayToTheSellerIncomeOrdersList().then(t=>this.incomeOrderList=t),this.apiService.getCompaniesListByCompanyTypeKeyAdv("SHIPPING_COMPANY").subscribe(t=>{this.shippingCompanies=t})}receive(t){this.selectedCompanyId?this.orderService.recieveIncomeOrderBySeller(t,this.selectedCompanyId):this.messageService.add({key:"homeToast",severity:"warn",life:7e3,summary:"Undefine Deliverying Company",detail:"please select delivering company"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.p),e.Y36(P.s),e.Y36(p.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-on-the-way-to-seller"]],decls:16,vars:11,consts:[[1,"grid","m-2","lg:m-4"],[1,"col-12"],[1,"text-900","font-bold","text-3xl","mb-3"],[1,"pi","pi-truch","text-3xl","font-bold"],[1,"ml-5","mb-5","font-medium","text-700","text-md"],[1,"flex","justify-content-center","w-12"],["placeholder","Shipping Company","appendTo","body","dropdownIcon","pi pi-truck","optionLabel","name","optionValue","id","styleClass","w-16rem m-2",3,"options","ngModel","ngModelChange"],[1,"card"],["dataKey","id","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex","justify-content-center","align-items-center"],[1,"w-4rem"],[1,"p-selectable-row"],[1,"p-column-title"],[1,"flex","flex-wrap","justify-content-center","align-items-center"],["class","m-1",3,"isDeletable","productSelection",4,"ngFor","ngForOf"],[3,"date"],[1,"p-inputgroup","w-7rem"],["pInputText","","type","text",1,"w-4rem",3,"disabled","ngModel","ngModelChange"],[1,"p-inputgroup-addon"],["pInputText","","type","text",1,"w-4rem",3,"ngModel","ngModelChange"],["pButton","","pRipple","","type","button","icon","pi pi-gift","label","receive",1,"p-button-raised",3,"disabled","click"],[1,"m-1",3,"isDeletable","productSelection"],["colspan","5"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e._uU(4," Income Order "),e.qZA(),e.TgZ(5,"p",4),e._uU(6,"On The Way To The Seller Orders"),e.qZA()(),e.TgZ(7,"div",5)(8,"p-dropdown",6),e.NdJ("ngModelChange",function(d){return n.selectedCompanyId=d}),e.qZA()(),e.TgZ(9,"div",1)(10,"div",7)(11,"p-table",8,9),e.YNc(13,V,14,0,"ng-template",10),e.YNc(14,te,30,6,"ng-template",11),e.YNc(15,oe,3,0,"ng-template",12),e.qZA()()()()),2&t&&(e.xp6(8),e.Q6J("options",n.shippingCompanies)("ngModel",n.selectedCompanyId),e.xp6(3),e.Q6J("value",n.incomeOrderList)("rowHover",!1)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(10,ne))("loading",n.orderService.waitingForOrders)("paginator",!0)("filterDelay",0))},dependencies:[u.sg,p.jx,m.Hq,h.o,l.Fj,l.JJ,l.On,g.p,a.iA,v.Lt,T.A]}),o})();function ie(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"span",13),e._UZ(2,"i",14),e.TgZ(3,"input",15),e.NdJ("ngModelChange",function(r){e.CHM(t);const d=e.oxw();return e.KtG(d.globalSearchValue=r)})("input",function(){e.CHM(t);const r=e.oxw(),d=e.MAs(10);return e.KtG(d.filter(r.globalSearchValue,"incomeOrderProducts","customGlobalFilter"))}),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.globalSearchValue)}}function de(o,i){1&o&&(e.TgZ(0,"tr")(1,"th")(2,"div",16),e._uU(3," Products "),e.qZA()(),e.TgZ(4,"th")(5,"div",16),e._uU(6," Arrival Date "),e.qZA()(),e.TgZ(7,"th")(8,"div",16),e._uU(9," Total Price "),e.qZA()(),e.TgZ(10,"th")(11,"div",16),e._uU(12," Shipping Coast "),e.qZA()(),e._UZ(13,"th",17),e.qZA())}function ce(o,i){if(1&o&&e._UZ(0,"app-product-selection",27),2&o){const t=i.$implicit;e.Q6J("isDeletable",!1)("productSelection",t.productSelection)}}function se(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"span",18),e._uU(3,"Products"),e.qZA(),e.TgZ(4,"div",19),e.YNc(5,ce,1,2,"app-product-selection",20),e.qZA()(),e.TgZ(6,"td")(7,"span",18),e._uU(8,"Arrival Date"),e.qZA(),e.TgZ(9,"div",16),e._UZ(10,"app-delivery-date-left",21),e.qZA()(),e.TgZ(11,"td")(12,"span",18),e._uU(13,"total price"),e.qZA(),e.TgZ(14,"div",16)(15,"div",22)(16,"input",23),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.totalPrice=r)}),e.qZA(),e.TgZ(17,"span",24),e._uU(18,"$"),e.qZA()()()(),e.TgZ(19,"td")(20,"span",18),e._uU(21,"Shipping Coast"),e.qZA(),e.TgZ(22,"div",16)(23,"div",22)(24,"input",23),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.shippingCoast=r)}),e.qZA(),e.TgZ(25,"span",24),e._uU(26,"$"),e.qZA()()()(),e.TgZ(27,"td")(28,"div",25)(29,"button",26),e.NdJ("click",function(){const d=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.openIncomeOrderProducts(d))}),e.qZA()()()()}if(2&o){const t=i.$implicit;e.xp6(5),e.Q6J("ngForOf",t.incomeOrderProducts),e.xp6(5),e.Q6J("date",t.arrivedDate),e.xp6(6),e.Q6J("disabled",!0)("ngModel",t.totalPrice),e.xp6(8),e.Q6J("disabled",!0)("ngModel",t.shippingCoast)}}function le(o,i){1&o&&(e.TgZ(0,"tr")(1,"td",28),e._uU(2,"Previous Income Orders Are Empty."),e.qZA()())}const pe=function(){return[10,25,50]};let ae=(()=>{class o{constructor(t,n,r,d){this.router=t,this.filterService=n,this.orderService=r,this.productsService=d,this.incomeOrderList=[]}ngOnInit(){this.orderService.getPreviousIncomeOrdersList().then(t=>{this.incomeOrderList=t}),this.filterService.register("customGlobalFilter",(t,n)=>{if(null==n||""===n)return!0;if(null==t)return!1;let r=Number(n);return!!(r&&t.find(d=>d.ordreId===r)||t.find(d=>d.product.searchKey.includes(n.toUpperCase())))})}openIncomeOrderProducts(t){this.orderService.selectedIncomeOrder=t,this.router.navigate(["/administrative/incomeorder/incomeOrderDetails"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.F0),e.Y36(p.iZ),e.Y36(f.p),e.Y36(C.s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-previous-income-order"]],decls:15,vars:9,consts:[[1,"grid","m-2","lg:m-4"],[1,"col-12"],[1,"text-900","font-bold","text-3xl","mb-3"],[1,"pi","pi-history","text-3xl","font-bold"],[1,"ml-5","mb-5","font-medium","text-700","text-md"],[1,"card"],["dataKey","id","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex","justify-content-end","align-items-center"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Global Search",3,"ngModel","ngModelChange","input"],[1,"flex","justify-content-center","align-items-center"],[2,"width","5rem"],[1,"p-column-title"],[1,"w-28rem","flex","flex-wrap","justify-content-center","align-items-center"],["class","m-1",3,"isDeletable","productSelection",4,"ngFor","ngForOf"],[3,"date"],[1,"p-inputgroup","w-7rem"],["pInputText","","type","text",1,"w-4rem",3,"disabled","ngModel","ngModelChange"],[1,"p-inputgroup-addon"],[1,"flex","flex-wrap","justify-content-center","align-items-center"],["type","button","pButton","","pRipple","","icon","pi pi-eye",1,"p-button-rounded",3,"click"],[1,"m-1",3,"isDeletable","productSelection"],["colspan","5"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e._uU(4," History "),e.qZA(),e.TgZ(5,"p",4),e._uU(6,"Previous Income Order"),e.qZA()(),e.TgZ(7,"div",1)(8,"div",5)(9,"p-table",6,7),e.YNc(11,ie,4,1,"ng-template",8),e.YNc(12,de,14,0,"ng-template",9),e.YNc(13,se,30,6,"ng-template",10),e.YNc(14,le,3,0,"ng-template",11),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("value",n.incomeOrderList)("rowHover",!1)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(8,pe))("loading",n.orderService.waitingForOrders)("paginator",!0)("filterDelay",0))},dependencies:[u.sg,p.jx,m.Hq,h.o,l.Fj,l.JJ,l.On,g.p,a.iA,T.A]}),o})();function ue(o,i){1&o&&(e.TgZ(0,"tr")(1,"th")(2,"div",11),e._uU(3,"product"),e.qZA()(),e.TgZ(4,"th")(5,"div",11),e._uU(6," Name "),e.qZA()(),e.TgZ(7,"th")(8,"div",11),e._uU(9," Color "),e.qZA()(),e.TgZ(10,"th")(11,"div",11),e._uU(12," selection "),e.qZA()(),e.TgZ(13,"th")(14,"div",12),e._uU(15,"Source"),e.qZA()(),e.TgZ(16,"th")(17,"div",11),e._uU(18," products prices "),e.qZA()(),e._UZ(19,"th",13),e.qZA())}function me(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr",14)(1,"td")(2,"span",15),e._uU(3,"product"),e.qZA(),e.TgZ(4,"div",12)(5,"button",16),e.NdJ("click",function(){const d=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.showProductDetails(d.product))}),e.qZA()()(),e.TgZ(6,"td")(7,"span",15),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"div",11)(10,"span",17),e._uU(11),e.qZA()()(),e.TgZ(12,"td")(13,"div",18),e._UZ(14,"app-color",19),e.qZA()(),e.TgZ(15,"td")(16,"span",15),e._uU(17,"selection"),e.qZA(),e.TgZ(18,"div",18),e._UZ(19,"app-product-selection",20),e.qZA()(),e.TgZ(20,"td")(21,"div",12)(22,"app-product-source",21),e.NdJ("selectedSourceIdChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.sourceId=r)}),e.qZA()()(),e.TgZ(23,"td")(24,"span",15),e._uU(25,"product price"),e.qZA(),e.TgZ(26,"div",11)(27,"div",22)(28,"input",23),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.price=r)}),e.qZA(),e.TgZ(29,"span",24),e._uU(30,"$"),e.qZA()()()(),e.TgZ(31,"td")(32,"div",11)(33,"button",25),e.NdJ("click",function(){const d=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.setAsOrdered(d))}),e.qZA()()()()}if(2&o){const t=i.$implicit;e.xp6(11),e.Oqu(t.product.name),e.xp6(3),e.Q6J("smallSize",!0)("productColor",t.productSelection.productColor),e.xp6(5),e.Q6J("isDeletable",!1)("productSelection",t.productSelection),e.xp6(3),e.Q6J("selectedSourceId",t.sourceId)("availableSource",t.product.productAdministrativeData),e.xp6(6),e.Q6J("ngModel",t.price)}}function ge(o,i){1&o&&(e.TgZ(0,"tr")(1,"td",26),e._uU(2,"No orders found."),e.qZA()())}const _e=function(){return[10,25,50]},he=[{path:"requested",component:(()=>{class o{constructor(t,n,r,d){this.orderService=t,this.dialogService=n,this.productsService=r,this.messageService=d,this.IncomeOrderProductsList=[]}ngOnInit(){this.orderService.getRequestedOrderProductAsIncomeOrderProductsList().then(t=>this.IncomeOrderProductsList=t)}ngOnDestroy(){this.ref&&this.ref.close(!0)}showProductDetails(t){this.productsService.selectedProduct=t,this.productsService.endSelection(),this.productsService.openProductDetailsDialog()}setAsOrdered(t){!t.sourceId||t.sourceId<1?this.messageService.add({key:"homeToast",severity:"error",life:7e3,summary:"Source Not Selected",detail:"please select the source from where you buy the product"}):t.price&&0!=t.price?this.orderService.editIncomeOrderProduct(t):this.messageService.add({key:"homeToast",severity:"error",life:7e3,summary:"price invalid",detail:"please enter products prices"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.p),e.Y36(Z.xA),e.Y36(C.s),e.Y36(p.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-requested-order"]],decls:13,vars:9,consts:[[1,"grid","m-2","lg:m-4"],[1,"col-12"],[1,"card"],[1,"text-900","font-bold","text-3xl","mb-3"],[1,"pi","pi-cart-plus","text-3xl","font-bold"],[1,"ml-5","mb-5","font-medium","text-700","text-md"],["dataKey","id","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex","justify-content-center","align-items-center"],[1,"flex","justify-content-center"],[1,"w-4rem"],[1,"p-selectable-row"],[1,"p-column-title"],["pButton","","pRipple","","type","button","icon","pi pi-window-maximize",1,"p-button-text","p-button-secondary",3,"click"],[1,""],[1,"flex","flex-wrap","justify-content-center","align-items-center"],[1,"m-1",3,"smallSize","productColor"],[1,"m-1",3,"isDeletable","productSelection"],[3,"selectedSourceId","availableSource","selectedSourceIdChange"],[1,"p-inputgroup","w-6rem"],["pInputText","","type","text","pTooltip","Pay attention on the quantity",1,"w-4rem",3,"ngModel","ngModelChange"],[1,"p-inputgroup-addon"],["pButton","","pRipple","","type","button","icon","pi pi-cart-plus","label","ordered",1,"p-button-raised",3,"click"],["colspan","8"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"i",4),e._uU(5," Requested Products "),e.qZA(),e.TgZ(6,"p",5),e._uU(7,"Products Not Ordered Yet From Source"),e.qZA(),e.TgZ(8,"p-table",6,7),e.YNc(10,ue,20,0,"ng-template",8),e.YNc(11,me,34,8,"ng-template",9),e.YNc(12,ge,3,0,"ng-template",10),e.qZA()()()()),2&t&&(e.xp6(8),e.Q6J("value",n.IncomeOrderProductsList)("rowHover",!1)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(8,_e))("loading",n.orderService.waitingForOrders)("paginator",!0)("filterDelay",0))},dependencies:[p.jx,m.Hq,h.o,l.Fj,l.JJ,l.On,A.R,g.p,a.iA,O.u,b.$]}),o})()},{path:"current",component:G},{path:"onTheWayToSeller",component:re,canActivate:[I]},{path:"previous",component:ae},{path:"incomeOrderDetails",component:X}];let fe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(he),_.Bz]}),o})(),Ce=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,fe,_.Bz,w.kT,m.hJ,h.j,l.u5,S.S,A.R,g.p,a.U$,Z.DL,v.kW,x._8,T.A,q.D,O.z,b.$]}),o})()}}]);
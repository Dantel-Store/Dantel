"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[213],{9213:(K,g,s)=>{s.r(g),s.d(g,{TeamModule:()=>G});var p=s(6895),m=s(433),Z=s(585),T=s(1989),b=s(2210),f=s(4325),S=s(1740),D=s(5722),h=s(1795),v=s(1765),k=s(2238),x=s(7252),C=s(4258),d=s(3905),t=s(4650),A=s(690),_=s(3231),u=s(805);let M=(()=>{class n{constructor(e,i,o,a){this.commonService=e,this.teamService=i,this.dialogService=o,this.messageService=a,this.loading=!0}ngOnInit(){(0,d.z)(this.teamService.getTaskByOwnerId()).then(e=>{this.tasks=e}).finally(()=>this.loading=!1)}onDateClick(e){this.teamService.openTaskEditorDialog(e)}onTaskClick(e){this.teamService.openTaskDetailsDialog(e)}ngOnDestroy(){this.teamService.closeAllDialog()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.v),t.Y36(_.U),t.Y36(f.xA),t.Y36(u.ez))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tasks-manager"]],decls:9,vars:3,consts:[[1,"grid","m-2","lg:m-6"],[1,"col-12"],[1,"text-900","font-bold","text-3xl","mb-3"],[1,"pi","pi-calendar","text-3xl","font-bold"],[1,"ml-5","mb-5","font-medium","text-700","text-md"],[1,"card"],[3,"loading","largeLayout","tasks","onDateClick","onTaskClick"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i",3),t._uU(4," Calendar "),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"All Tasks For Each Worker By Month"),t.qZA(),t.TgZ(7,"div",5)(8,"app-task-calendar",6),t.NdJ("onDateClick",function(a){return i.onDateClick(a)})("onTaskClick",function(a){return i.onTaskClick(a)}),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("loading",i.loading)("largeLayout",i.commonService.isLargeLayout.value)("tasks",i.tasks))},dependencies:[x.i]}),n})();var y=s(220),w=s(9337),F=s(6460),J=s(482),P=s(5593);const U=["dt"];function O(n,r){1&n&&(t.TgZ(0,"tr")(1,"th",8),t._uU(2,"Name"),t.qZA(),t.TgZ(3,"th",8),t._uU(4,"Task"),t.qZA(),t.TgZ(5,"th",8),t._uU(6,"Title"),t.qZA(),t.TgZ(7,"th",8),t._uU(8,"Products"),t.qZA(),t.TgZ(9,"th")(10,"div",8),t._uU(11," Start\\DeadLine\\Completion Date "),t.qZA()(),t.TgZ(12,"th",8),t._uU(13,"Finished"),t.qZA(),t.TgZ(14,"th",8),t._uU(15," Done "),t.qZA()())}function I(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"img",22),t.NdJ("click",function(o){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).openProdcut(a),t.KtG(o.stopPropagation())}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngSrc",e.product.productColors[0].image)}}function N(n,r){if(1&n&&(t.TgZ(0,"div",20),t.YNc(1,I,1,1,"img",21),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",e.product)}}function Y(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),a=o.$implicit,c=o.rowIndex,l=t.oxw();return t.KtG(l.notifyWorker(a,c))}),t.qZA()}}function L(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",24)(1,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),a=o.$implicit,c=o.rowIndex,l=t.oxw();return t.KtG(l.taskDone(a,c))}),t.qZA(),t.TgZ(2,"button",26),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),a=o.$implicit,c=o.rowIndex,l=t.oxw();return t.KtG(l.rejectTask(a,c))}),t.qZA()()}if(2&n){const e=t.oxw().rowIndex,i=t.oxw();t.xp6(1),t.Q6J("loading",i.saveLoading===e),t.xp6(1),t.Q6J("loading",i.rejectLoading===e)}}const j=function(n){return{"surface-ground":n}},R=function(n){return{color:n}};function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr",9)(1,"td")(2,"div",10),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"div",11)(6,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openTask(a))}),t.qZA()()(),t.TgZ(7,"td",8),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",11),t.YNc(11,N,2,1,"div",13),t.qZA()(),t.TgZ(12,"td")(13,"div",14)(14,"div",10),t._uU(15),t.qZA(),t.TgZ(16,"div",15),t._uU(17),t.qZA(),t.TgZ(18,"div",15)(19,"span",16),t._uU(20),t.qZA()()()(),t.TgZ(21,"td"),t._UZ(22,"p-checkbox",17),t.qZA(),t.TgZ(23,"td"),t.YNc(24,Y,1,0,"button",18),t.YNc(25,L,3,2,"div",19),t.qZA()()}if(2&n){const e=r.$implicit;t.Q6J("ngClass",t.VKq(13,j,!e.completionDate&&e.isDone)),t.xp6(3),t.hij(" ",e.person.fullName," "),t.xp6(5),t.Oqu(e.title),t.xp6(3),t.Q6J("ngForOf",e.taskProducts),t.xp6(4),t.hij(" ",e.date," "),t.xp6(2),t.hij(" ",e.deadline," "),t.xp6(2),t.Q6J("ngStyle",t.VKq(15,R,e.backgroundColor)),t.xp6(1),t.hij(" ",e.completionDate," "),t.xp6(2),t.Q6J("readonly",!0)("binary",!0)("ngModel",e.isDone),t.xp6(2),t.Q6J("ngIf",!e.isDone),t.xp6(1),t.Q6J("ngIf",!e.completionDate&&e.isDone)}}const B=function(){return[10,25,50]},z=function(){return["person.fullName","taskProducts"]},H=[{path:"TasksManager",component:M},{path:"Tasks",component:(()=>{class n{constructor(e,i,o,a,c,l){this.utilsService=e,this.filterService=i,this.teamService=o,this.productService=a,this.datePipe=c,this.apiService=l}ngOnInit(){(0,d.z)(this.teamService.getTaskByOwnerId()).then(e=>{this.tasks=e}).finally(()=>this.loading=!1),this.filterService.register("dynamicMachtMode",(e,i)=>Array.isArray(e)?this.utilsService.productIdInsideListFilter(e,i):this.filterService.filters.contains(e,i))}globalSearchFilter(e){this.dataTable.filterGlobal(e,"dynamicMachtMode")}openProdcut(e){this.productService.selectedProduct=e.product,this.productService.endSelection(),this.productService.openProductDetailsDialog()}openTask(e){this.teamService.openTaskDetailsDialog(e)}taskDone(e,i){this.saveLoading=i;let o=new Date,a={...e};a.backgroundColor=new Date(e.deadline)>o?"#76db9b":"#ff8780",a.completionDate=this.datePipe.transform(o,"yyyy-MM-dd h:mm:ss"),(0,d.z)(this.apiService.editTask(a)).then(l=>{l&&(e.backgroundColor=a.backgroundColor,e.completionDate=a.completionDate)}).finally(()=>this.saveLoading=void 0)}notifyWorker(e,i){this.notifyLoading=i;let o=new y.P_;o.title="Check Your Task DeadLine",o.body="Please Finish Your Task On The Time",o.data={onActionClick:{defaultOperationUrl:{operation:"focusLastFocusedOrOpen",url:"user"}}},o.icon="https://dantel-store.github.io/Dantel/assets/icons/icon-72x72.png",(0,d.z)(this.apiService.SendNotification(o,void 0,[e.person.userId])).catch(a=>console.log(a)).finally(()=>{this.notifyLoading=void 0})}rejectTask(e,i){this.rejectLoading=i,e.isDone=!1;let o=new y.P_;o.title="Task Rejected",o.body="please Recheck Your Task",o.data={onActionClick:{defaultOperationUrl:{operation:"focusLastFocusedOrOpen",url:"administrative/products/checkPrice"}}},o.icon="https://dantel-store.github.io/Dantel/assets/icons/icon-72x72.png",(0,d.z)(this.apiService.SendNotification(o,void 0,[e.person.userId])).catch(a=>console.log(a)),(0,d.z)(this.apiService.editTask(e)).then(a=>{}).finally(()=>this.rejectLoading=void 0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(w.F),t.Y36(u.iZ),t.Y36(_.U),t.Y36(F.s),t.Y36(p.uU),t.Y36(J.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tasks"]],viewQuery:function(e,i){if(1&e&&t.Gf(U,5),2&e){let o;t.iGM(o=t.CRH())&&(i.dataTable=o.first)}},decls:9,vars:10,consts:[[1,"grid","m-2","lg:m-6"],[1,"col-12"],["searchTooltip","Worker Name Or ProductID","icon","pi pi-list","header","Tasks Table","subheader","Task Managemenet Center",3,"onSearch"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} tasks",3,"value","loading","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","globalFilterFields"],["dt",""],["pTemplate","header"],["pTemplate","body"],[1,"text-center"],[3,"ngClass"],[1,"white-space-nowrap"],[1,"flex","justify-content-center"],["pButton","","pRipple","","type","button","icon","pi pi-window-maximize",1,"p-button-text","p-button-secondary",3,"click"],["class","m-1 cursor-pointer",4,"ngFor","ngForOf"],[1,"flex","flex-column","align-items-center","justify-content-between"],[1,"white-space-nowrap","font-semibold"],[3,"ngStyle"],["name","groupname","value","val1","styleClass","mx-1",3,"readonly","binary","ngModel"],["pButton","","pRipple","","type","button","icon","pi pi-bell","class","mx-1 p-button-rounded",3,"click",4,"ngIf"],["class","flex flex-nowrap",4,"ngIf"],[1,"m-1","cursor-pointer"],["alt","name","width","66","height","99","class","bitem-round shadow-2","style","border-radius: 0.5rem;vertical-align: middle",3,"ngSrc","click",4,"ngIf"],["alt","name","width","66","height","99",1,"bitem-round","shadow-2",2,"border-radius","0.5rem","vertical-align","middle",3,"ngSrc","click"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"mx-1","p-button-rounded",3,"click"],[1,"flex","flex-nowrap"],["pButton","","pRipple","","type","button","icon","pi pi-check","label","Accept",1,"mx-1","p-button-text","p-button-raised",3,"loading","click"],["pButton","","pRipple","","type","button","icon","pi pi-times","label","Reject",1,"mx-1","p-button-text","p-button-danger","p-button-raised",3,"loading","click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-layout-header",2),t.NdJ("onSearch",function(a){return i.globalSearchFilter(a)}),t.qZA()(),t.TgZ(3,"div",1)(4,"div",3)(5,"p-table",4,5),t.YNc(7,O,16,0,"ng-template",6),t.YNc(8,Q,26,17,"ng-template",7),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("value",i.tasks)("loading",i.loading)("rowHover",!1)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(8,B))("paginator",!0)("globalFilterFields",t.DdM(9,z)))},dependencies:[p.mk,p.sg,p.O5,p.PC,m.JJ,m.On,u.jx,p.Zd,P.Hq,h.H,v.iA,T.XZ,k.n]}),n})()}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[C.Bz.forChild(H),C.Bz]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,$,f.DL,m.u5,S.j,b.kW,D.q4,Z._8,h.T,x.i,v.U$,T.nD,k.n]}),n})()}}]);
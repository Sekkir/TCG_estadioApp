"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2031],{9557:(B,w,a)=>{a.r(w),a.d(w,{ProductosPage:()=>D});var m=a(177),o=a(2788),d=a(3403),e=a(2785),v=a(3605),p=a(4341);const A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M160 144h288M160 256h288M160 368h288' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='80' cy='144' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='80' cy='256' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='80' cy='368' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";var s=a(4438),b=a(4764),q=a(4488),_=a(2684);const P=["tabs"];let D=(()=>{var x;class S{constructor(t,g,r,y){this.authService=t,this.productosService=g,this.changeDetectorRef=r,this.tabEventService=y,this.productos=[],this.selectedTab="",this.iconoLista=A,this.iconoColor="",this.showRefreshIcon=!1,this.icons={add:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 176v160M336 256H176' class='ionicon-fill-none ionicon-stroke-width'/></svg>",update:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>",list:A,download:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M320 146s24.36-12-64-12a160 160 0 10160 160' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 58l80 80-80 80' class='ionicon-fill-none ionicon-stroke-width'/></svg>"}}ngOnInit(){this.obtenerProductos(),this.tabEventService.refreshIcon$.subscribe(t=>{t&&(this.iconoLista=this.icons.download,this.iconoColor="green",this.showRefreshIcon=!0)})}obtenerUsuarioId(){const t=this.authService.getDecodedToken();t&&t.id_usuario&&(this.id_usuario=t.id_usuario,console.log("ID Usuario:",this.id_usuario))}obtenerProductos(){this.productosService.getProductos().subscribe(t=>{this.productos=t,this.changeDetectorRef.detectChanges()},t=>{console.error("Error al obtener productos:",t)})}cambiarTab(t){this.selectedTab=t,this.tabs.select(t),"listaProductos"===t&&this.obtenerProductos()}restablecerIcono(){this.iconoLista=this.icons.list,this.iconoColor="",this.showRefreshIcon=!1}doRefresh(t){setTimeout(()=>{this.obtenerProductos(),this.restablecerIcono(),t.target.complete()},1e3)}}return(x=S).\u0275fac=function(t){return new(t||x)(s.rXU(b.u),s.rXU(q.J),s.rXU(s.gRc),s.rXU(_.q))},x.\u0275cmp=s.VBU({type:x,selectors:[["app-productos"]],viewQuery:function(t,g){if(1&t&&(s.GBs(P,5),s.GBs(o.W9,5)),2&t){let r;s.mGM(r=s.lsd())&&(g.tabs=r.first),s.mGM(r=s.lsd())&&(g.content=r.first)}},standalone:!0,features:[s.aNF],decls:26,vars:5,consts:[["tabs",""],[3,"ionRefresh"],["slot","bottom"],["tab","agregarProducto","selected",""],[3,"src"],["tab","actualizarProducto"],["tab","listaProductos"],["tab","agregarProducto"]],template:function(t,g){if(1&t){const r=s.RV6();s.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),s.EFF(3,"TCG ESTADIO"),s.k0s()()(),s.j41(4,"ion-content",1),s.bIt("ionRefresh",function(F){return s.eBV(r),s.Njj(g.doRefresh(F))}),s.j41(5,"ion-tabs",null,0)(7,"ion-tab-bar",2)(8,"ion-tab-button",3),s.nrm(9,"ion-icon",4),s.j41(10,"ion-label"),s.EFF(11,"A\xf1adir Producto"),s.k0s()(),s.j41(12,"ion-tab-button",5),s.nrm(13,"ion-icon",4),s.j41(14,"ion-label"),s.EFF(15,"Actualizar Producto"),s.k0s()(),s.j41(16,"ion-tab-button",6),s.nrm(17,"ion-icon",4),s.j41(18,"ion-label"),s.EFF(19,"Lista de Productos"),s.k0s()()(),s.j41(20,"ion-tab",7),s.nrm(21,"app-agregar-producto"),s.k0s(),s.j41(22,"ion-tab",5),s.nrm(23,"app-actualizar-producto"),s.k0s(),s.j41(24,"ion-tab",6),s.nrm(25,"app-lista-productos"),s.k0s()()()}2&t&&(s.R7$(9),s.Y8G("src",g.icons.add),s.R7$(4),s.Y8G("src",g.icons.update),s.R7$(4),s.xc7("color",g.iconoColor),s.Y8G("src",g.iconoLista))},dependencies:[o.iq,o.kB,o.he,o.qW,o.Jq,o.p4,o.W9,p.YN,o.eU,o.BC,o.ai,m.MD,d.AgregarProductoComponent,v.ListaProductosComponent,e.ActualizarProductoComponent],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background: #4b7eb8}ion-toolbar[_ngcontent-%COMP%]{--background: #b12d2d;--color: white}ion-button[_ngcontent-%COMP%]{--background: #d32f2f;--color: white;--border-radius: 8px}ion-item[_ngcontent-%COMP%]{--background: #ffffff;--border-color: #e7e7e7}ion-header[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{--ion-background-color: #f8f8f8}ion-icon[_ngcontent-%COMP%]{color:#2fb9f0}']}),S})()},2684:(B,w,a)=>{a.d(w,{q:()=>d});var m=a(1413),o=a(4438);let d=(()=>{var e;class v{constructor(){this.refreshIconSubject=new m.B,this.refreshIcon$=this.refreshIconSubject.asObservable()}emitirEventoRefrescar(){this.refreshIconSubject.next(!0)}restablecerIcono(){this.refreshIconSubject.next(!1)}}return(e=v).\u0275fac=function(u){return new(u||e)},e.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),v})()},3403:(B,w,a)=>{a.r(w),a.d(w,{AgregarProductoComponent:()=>C});var m=a(467),o=a(4438),d=a(177),e=a(4341),v=a(4742),p=a(4488),u=a(4764),L=a(9557),H=a(2684);const V=["tabs"];let C=(()=>{var h;class z{constructor(l,i,c,n,k){this.productosService=l,this.authService=i,this.toastController=c,this.productosPage=n,this.tabEventService=k,this.productoAgregado=new o.bkB,this.correlativo="",this.nombre_producto="",this.precio_compra=0,this.ganancia=0,this.precio_venta=0,this.id_creado_por=0,this.stock=0}ngOnInit(){const l=this.authService.getDecodedToken();l&&(this.id_creado_por=l.id_usuario)}calcularPrecioVenta(){this.precio_venta=this.precio_compra*(1+this.ganancia/100)}guardarProducto(){var l=this;this.productosService.crearProducto({correlativo:this.correlativo,nombre_producto:this.nombre_producto,stock:this.stock,precio_compra:this.precio_compra,ganancia:this.ganancia,precio_venta:this.precio_venta,id_creado_por:this.id_creado_por}).subscribe(function(){var c=(0,m.A)(function*(n){l.tabEventService.emitirEventoRefrescar(),console.log("Producto creado con \xe9xito:",n),(yield l.toastController.create({message:"Producto creado con \xe9xito",duration:2e3,position:"bottom"})).present(),l.limpiarCampos(),l.productosPage.cambiarTab("listaProductos")});return function(n){return c.apply(this,arguments)}}(),c=>{console.error("Error al crear el producto:",c)})}limpiarCampos(){this.correlativo="",this.nombre_producto="",this.precio_compra=0,this.ganancia=0,this.precio_venta=0,this.stock=0}}return(h=z).\u0275fac=function(l){return new(l||h)(o.rXU(p.J),o.rXU(u.u),o.rXU(v.K_),o.rXU(L.ProductosPage),o.rXU(H.q))},h.\u0275cmp=o.VBU({type:h,selectors:[["app-agregar-producto"]],viewQuery:function(l,i){if(1&l&&o.GBs(V,5),2&l){let c;o.mGM(c=o.lsd())&&(i.tabs=c.first)}},outputs:{productoAgregado:"productoAgregado"},standalone:!0,features:[o.aNF],decls:30,vars:9,consts:[[1,"form-card"],[3,"ngSubmit"],[1,"styled-item"],["position","floating"],["name","correlativo","type","text","required","",3,"ngModelChange","ngModel"],["name","nombre_producto","type","text","required","",3,"ngModelChange","ngModel"],["name","stock","type","number","required","",3,"ngModelChange","ngModel"],["name","precio_compra","type","number","required","",3,"ngModelChange","ionInput","ngModel"],["name","ganancia","type","number","required","",3,"ngModelChange","ionInput","ngModel"],["readonly","",3,"value"],[1,"ion-padding"],["expand","block","type","submit","color","success"]],template:function(l,i){1&l&&(o.j41(0,"ion-card",0)(1,"form",1),o.bIt("ngSubmit",function(){return i.guardarProducto()}),o.j41(2,"ion-item",2)(3,"ion-label",3),o.EFF(4,"Correlativo"),o.k0s(),o.j41(5,"ion-input",4),o.mxI("ngModelChange",function(n){return o.DH7(i.correlativo,n)||(i.correlativo=n),n}),o.k0s()(),o.j41(6,"ion-item",2)(7,"ion-label",3),o.EFF(8,"Nombre"),o.k0s(),o.j41(9,"ion-input",5),o.mxI("ngModelChange",function(n){return o.DH7(i.nombre_producto,n)||(i.nombre_producto=n),n}),o.k0s()(),o.j41(10,"ion-item",2)(11,"ion-label",3),o.EFF(12,"Stock"),o.k0s(),o.j41(13,"ion-input",6),o.mxI("ngModelChange",function(n){return o.DH7(i.stock,n)||(i.stock=n),n}),o.k0s()(),o.j41(14,"ion-item",2)(15,"ion-label",3),o.EFF(16,"Precio Compra"),o.k0s(),o.j41(17,"ion-input",7),o.mxI("ngModelChange",function(n){return o.DH7(i.precio_compra,n)||(i.precio_compra=n),n}),o.bIt("ionInput",function(){return i.calcularPrecioVenta()}),o.k0s()(),o.j41(18,"ion-item",2)(19,"ion-label",3),o.EFF(20,"Ganancia (%)"),o.k0s(),o.j41(21,"ion-input",8),o.mxI("ngModelChange",function(n){return o.DH7(i.ganancia,n)||(i.ganancia=n),n}),o.bIt("ionInput",function(){return i.calcularPrecioVenta()}),o.k0s()(),o.j41(22,"ion-item",2)(23,"ion-label",3),o.EFF(24,"Precio Venta"),o.k0s(),o.nrm(25,"ion-input",9),o.nI1(26,"number"),o.k0s(),o.j41(27,"div",10)(28,"ion-button",11),o.EFF(29," Guardar Producto "),o.k0s()()()()),2&l&&(o.R7$(5),o.R50("ngModel",i.correlativo),o.R7$(4),o.R50("ngModel",i.nombre_producto),o.R7$(4),o.R50("ngModel",i.stock),o.R7$(4),o.R50("ngModel",i.precio_compra),o.R7$(4),o.R50("ngModel",i.ganancia),o.R7$(4),o.Y8G("value",o.i5U(26,6,i.precio_venta,"1.2-2")))},dependencies:[v.bv,v.Jm,v.b_,v.$w,v.uz,v.he,v.su,v.Gw,d.MD,d.QX,e.YN,e.qT,e.BC,e.cb,e.YS,e.vS,e.cV],styles:["ion-item[_ngcontent-%COMP%]{margin-bottom:15px}.form-card[_ngcontent-%COMP%]{margin:20px;padding:20px;border-radius:12px;box-shadow:0 4px 6px #0000001a;background:#f9f9f9}.styled-item[_ngcontent-%COMP%]{--highlight-color-focused: #4caf50;--background: #ffffff;--border-radius: 8px;margin-bottom:15px;box-shadow:0 2px 4px #0000001a}ion-label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#333}ion-input[_ngcontent-%COMP%]{font-size:14px;padding:10px}ion-button[_ngcontent-%COMP%]{font-size:16px;--border-radius: 8px;margin-top:20px}"]}),z})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{TeY9:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t("Jg5f"),o=t("G2Mx"),a=t("pday"),u=t("/gsZ"),i=t("LiEJ"),c=t("pN2L"),r=Object.assign||function(n){for(var l,t=1,e=arguments.length;t<e;t++)for(var o in l=arguments[t])Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);return n},s=function(){function n(n){this.cd=n,this.state$=new i.a({copied:!1,height:"100%"})}return n.prototype.ngAfterViewInit=function(){this.updateHeight()},n.prototype.updateHeight=function(){this.updateState(!this.height&&this.codeEl?{height:this.codeEl.nativeElement.offsetHeight+"px"}:{height:this.height+"px"})},n.prototype.updateState=function(n){this.state$.next(r({},this.state$.value,n)),this.cd.detectChanges()},n.prototype.copy=function(){var n,l=this,t=(n=navigator.userAgent||navigator.vendor||window.opera,/android/i.test(n)?"android":/iPad|iPhone|iPod/.test(n)&&!window.MSStream?"ios":"desktop");Object(c.a)(this.code).pipe(Object(e.a)(function(n){var e=document.createElement("textarea");if(e.value=n,document.body.appendChild(e),"ios"===t){var o=document.createRange();o.selectNodeContents(e);var a=window.getSelection();a.removeAllRanges(),a.addRange(o),e.readOnly=!0,e.setSelectionRange(0,999999)}else e.select();document.execCommand("copy"),document.body.removeChild(e),l.updateState({copied:!0})}),Object(o.a)(1),Object(a.a)(3500),Object(u.a)(function(){return l.updateState({copied:!1})})).subscribe()},n}()},WjFU:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){}},YzpY:function(n,l,t){"use strict";var e=t("LoAr"),o=t("AFqu"),a=t("WT9V"),u=t("Hc9t"),i=t("rXXt"),c=t("//aV"),r=t("y7gG"),s=t("U+go"),d=t("Gien"),g=t("GcYS"),f=t("WV+C"),b=t("0xYh"),p=t("Z5FQ");t("TeY9"),t.d(l,"a",function(){return h}),t.d(l,"b",function(){return v});var h=e.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;min-width:100%;margin-top:2em;margin-bottom:3em;border:2px solid #2196f3;overflow:hidden;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1)}pre[_ngcontent-%COMP%]{min-height:100%;min-width:100%;margin:0;display:inline-flex;word-wrap:normal;min-height:100%}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#e3f2fd;display:inline-block;height:100%;padding:1.7em 2em!important;border-radius:0;flex:1;margin:0;box-shadow:none;overflow:hidden;border:none;min-height:100%}ng-scrollbar[_ngcontent-%COMP%]{margin-bottom:0}ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar-thumb{background-color:#1976d2;opacity:.3}ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar-thumb:active{opacity:.5}ng-scrollbar[_ngcontent-%COMP%]     .-horizontal, ng-scrollbar[_ngcontent-%COMP%]     .-vertical{transition:all .1s ease}ng-scrollbar[_ngcontent-%COMP%]     .-vertical{width:6px}ng-scrollbar[_ngcontent-%COMP%]     .-vertical:active, ng-scrollbar[_ngcontent-%COMP%]     .-vertical:hover{width:10px}ng-scrollbar[_ngcontent-%COMP%]     .-horizontal{height:6px}ng-scrollbar[_ngcontent-%COMP%]     .-horizontal:active, ng-scrollbar[_ngcontent-%COMP%]     .-horizontal:hover{height:10px}button[_ngcontent-%COMP%]{position:absolute;right:1em;top:1em}.copy-message[_ngcontent-%COMP%]{color:#2196f3;background-color:#e3f2fd;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;font-weight:700;border-radius:.2em}span[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function m(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["        "])),(n()(),e.Pa(2,0,[[1,0],["codeEL",1]],null,0,"code",[["class","hljs"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.gb(-1,null,["\n      "]))],null,function(n,l){n(l,2,0,l.component.code)})}function P(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,4,"pre",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["          "])),(n()(),e.Pa(2,0,[[1,0],["codeEL",1]],null,1,"code",[["highlight",""]],null,null,null,null,null)),e.Oa(3,212992,null,0,o.a,[e.k,e.C,o.b],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(n()(),e.gb(-1,null,["\n        "]))],function(n,l){n(l,3,0,"",l.component.code)},null)}function O(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),e.Ga(16777216,null,null,1,null,m)),e.Oa(2,16384,null,0,a.k,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.Ga(0,[["enabled",2]],null,0,null,P))],function(n,l){n(l,2,0,l.component.disabled,e.Za(l,3))},null)}function x(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,5,"div",[["class","hljs copy-message"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,u.b,u.a)),e.Oa(2,638976,null,0,i.a,[e.k,i.c,[8,null]],null,null),(n()(),e.gb(-1,0,["done"])),(n()(),e.Pa(4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["Copied!"]))],function(n,l){n(l,2,0)},function(n,l){n(l,1,0,e.Za(l,2).inline)})}function C(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,5,"ng-scrollbar",[["thumbClass","code-scrollbar-thumb"]],[[4,"height",null]],[[null,"cdkObserveContent"]],function(n,l,t){var e=!0;return"cdkObserveContent"===l&&(e=!1!==n.component.updateHeight()&&e),e},c.b,c.a)),e.Oa(2,1196032,null,0,r.a,[r.b,e.k,e.x],null,{event:"cdkObserveContent"}),e.Oa(3,4374528,[[2,4]],0,s.a,[e.x,e.C,a.d],{trackX:[0,"trackX"],thumbClass:[1,"thumbClass"]},null),(n()(),e.Ga(16777216,null,0,1,null,O)),e.Oa(5,16384,null,0,a.k,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.Ga(0,[["copiedMessage",2]],0,0,null,x))],function(n,l){n(l,3,0,!0,"code-scrollbar-thumb"),n(l,5,0,!l.context.$implicit.copied,e.Za(l,6))},function(n,l){n(l,1,0,l.context.$implicit.height)})}function v(n){return e.ib(2,[e.eb(671088640,1,{codeEl:0}),e.eb(671088640,2,{scrollbars:0}),(n()(),e.Ga(16777216,null,null,2,null,C)),e.Oa(3,16384,null,0,a.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.bb(131072,a.b,[e.h]),(n()(),e.Pa(5,0,null,null,4,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","Copy code"],["matTooltipClass","copy-tooltip"],["matTooltipPosition","before"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.copy()&&e),e},d.d,d.b)),e.Oa(6,180224,null,0,g.b,[e.k,f.a,b.c,[2,p.a]],{color:[0,"color"]},null),(n()(),e.Pa(7,0,null,0,2,"mat-icon",[["aria-label","Copy code"],["class","md-24 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,u.b,u.a)),e.Oa(8,638976,null,0,i.a,[e.k,i.c,[8,null]],null,null),(n()(),e.gb(-1,0,["content_paste"]))],function(n,l){var t=l.component;n(l,3,0,e.hb(l,3,0,e.Za(l,4).transform(t.state$))),n(l,6,0,"accent"),n(l,8,0)},function(n,l){n(l,5,0,e.Za(l,6).disabled||null,"NoopAnimations"===e.Za(l,6)._animationMode),n(l,7,0,e.Za(l,8).inline)})}},bcGG:function(n,l,t){"use strict";var e=t("LoAr"),o=t("Hc9t"),a=t("rXXt");t("WjFU"),t.d(l,"a",function(){return u}),t.d(l,"b",function(){return i});var u=e.Na({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.note-icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:80px;padding-top:20px;display:flex;justify-content:center;background-color:#ffb300}mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:36px;width:36px;height:36px;line-height:36px}.note-content[_ngcontent-%COMP%]{margin-left:80px;text-align:justify;padding:0 1em}section[_ngcontent-%COMP%]{min-height:80px;position:relative;border:2px solid #ffb300;margin:4em 0;display:flex;align-items:center;background-color:#ffecb3;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1);overflow:hidden}"]],data:{}});function i(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,6,"section",[],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,3,"span",[["class","note-icon"]],null,null,null,null,null)),(n()(),e.Pa(2,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,o.b,o.a)),e.Oa(3,638976,null,0,a.a,[e.k,a.c,[8,null]],null,null),(n()(),e.gb(-1,0,["error_outline"])),(n()(),e.Pa(5,0,null,null,1,"div",[["class","note-content"]],null,null,null,null,null)),e.Ya(null,0)],function(n,l){n(l,3,0)},function(n,l){n(l,2,0,e.Za(l,3).inline)})}},"fDe+":function(n,l,t){"use strict";var e=t("LoAr"),o=t("UelK"),a=t("SPdK"),u=t("Gien"),i=t("GcYS"),c=t("WV+C"),r=t("0xYh"),s=t("Z5FQ"),d=t("iwai"),g=t("FOLC"),f=t("SeAg");t("jQpT"),t.d(l,"a",function(){return b}),t.d(l,"b",function(){return p});var b=e.Na({encapsulation:0,styles:[['[_nghost-%COMP%]{box-shadow:inset 0 3px 8px 0 rgba(0,0,0,.08);background-color:#2196f3;display:flex;flex-direction:column;color:#fff;padding:3em 2em;font-size:.9em;font-family:Roboto,"Helvetica Neue",sans-serif}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin-right:.5em}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:400;color:#fff;text-align:center;margin-top:0;margin-bottom:1.5em}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#fff176;text-decoration:underline}.icon[_ngcontent-%COMP%]{background:#fff;margin:5px}fa-icon[_ngcontent-%COMP%]{margin:0 .3em}.twitter[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#00b0e8}.github[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#000}']],data:{}});function p(n){return e.ib(2,[(n()(),e.Pa(0,0,null,null,28,"div",[["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.Oa(1,737280,null,0,o.d,[a.i,e.k,a.m],{layout:[0,"layout"]},null),e.Oa(2,737280,null,0,o.c,[a.i,e.k,[6,o.d],a.m],{align:[0,"align"]},null),(n()(),e.Pa(3,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),e.Pa(4,0,null,null,1,"a",[["href","https://www.patreon.com/bePatron?u=5594898"]],null,null,null,null,null)),(n()(),e.Pa(5,0,null,null,0,"img",[["alt","npm"],["data-canonical-src","https://c5.patreon.com/external/logo/become_a_patron_button.png"],["src","https://camo.githubusercontent.com/3d9b27bdf72d7e5407fbad6f9240f6cadc98a7a5/68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e2e706e67"],["style","max-width:100%;"]],null,null,null,null,null)),(n()(),e.Pa(6,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),e.Pa(7,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["Images from "])),(n()(),e.Pa(9,0,null,null,1,"a",[["href","https://pixabay.com/"]],null,null,null,null,null)),(n()(),e.gb(-1,null,["Pixabay"])),(n()(),e.Pa(11,0,null,null,5,"h3",[["fxLayout",""],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.Oa(12,737280,null,0,o.d,[a.i,e.k,a.m],{layout:[0,"layout"]},null),e.Oa(13,737280,null,0,o.c,[a.i,e.k,[6,o.d],a.m],{align:[0,"align"]},null),(n()(),e.Pa(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["\xa9 2018 Angular Gallery"])),(n()(),e.Pa(16,0,null,null,0,"iframe",[["frameborder","0"],["height","20px"],["scrolling","0"],["src","https://ghbtns.com/github-btn.html?user=murhafsousli&repo=ngx-gallery&type=star&count=true"],["width","85px"]],null,null,null,null,null)),(n()(),e.Pa(17,0,null,null,11,"h3",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["Created by Murhaf Sousli "])),(n()(),e.Pa(19,0,null,null,4,"a",[["class","icon twitter"],["href","https://twitter.com/MurhafSousli"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Za(n,20)._haltDisabledEvents(t)&&o),o},u.c,u.a)),e.Oa(20,180224,null,0,i.a,[c.a,r.c,e.k,[2,s.a]],null,null),(n()(),e.Pa(21,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),e.Oa(22,573440,null,0,g.a,[f.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.ab(23,2),(n()(),e.Pa(24,0,null,null,4,"a",[["class","icon github"],["href","https://github.com/MurhafSousli"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Za(n,25)._haltDisabledEvents(t)&&o),o},u.c,u.a)),e.Oa(25,180224,null,0,i.a,[c.a,r.c,e.k,[2,s.a]],null,null),(n()(),e.Pa(26,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),e.Oa(27,573440,null,0,g.a,[f.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.ab(28,2)],function(n,l){n(l,1,0,"column"),n(l,2,0,"center center"),n(l,12,0,""),n(l,13,0,"center center"),n(l,22,0,n(l,23,0,"fab","twitter"),"lg"),n(l,27,0,n(l,28,0,"fab","github"),"lg")},function(n,l){n(l,19,0,e.Za(l,20).disabled?-1:0,e.Za(l,20).disabled||null,e.Za(l,20).disabled.toString(),"NoopAnimations"===e.Za(l,20)._animationMode),n(l,21,0,e.Za(l,22).renderedIconHTML),n(l,24,0,e.Za(l,25).disabled?-1:0,e.Za(l,25).disabled||null,e.Za(l,25).disabled.toString(),"NoopAnimations"===e.Za(l,25)._animationMode),n(l,26,0,e.Za(l,27).renderedIconHTML)})}},jQpT:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){}}}]);
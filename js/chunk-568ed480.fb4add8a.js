(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-568ed480"],{6455:function(t,e,n){"use strict";var o=n("e616"),r=n.n(o);r.a},6823:function(t,e,n){},"97f0":function(t,e,n){"use strict";var o=n("6823"),r=n.n(o);r.a},deff:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-main"},[n("div",{staticClass:"box"},[n("ul",{staticClass:"header"},t._l(t.headData,(function(e){return n("li",{key:e.column,style:{flex:e.width}},[t._v(" "+t._s(e.label)+" ")])})),0)]),n("div",{staticClass:"scroll-main"},[0==t.tableList.length?n("div",{staticStyle:{"text-align":"center"}},[t._v(" 暂无数据 ")]):t._e(),n("div",{staticClass:"scroll"},t._l(t.tableList,(function(e,o){return n("ul",{key:o,staticClass:"content",style:{"background-color":o%2===1?"rgba(136, 136, 136, 0.2)":""}},t._l(t.headData,(function(r){return n("li",{key:r.column,style:{flex:r.width,cursor:r.pointer?"pointer":"",color:r.color},on:{mouseover:function(e){return t.onMouseOver(o,r.column)},click:function(n){return t.handleClick(e,r.column)}}},[t.showTooltip?n("a-tooltip",{attrs:{placement:"topLeft"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(e[r.column])+" ")]},proxy:!0}],null,!0)},[r.isDict?n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(t.getDictLabel(e[r.column],r.dict)))]):"index"===r.column?n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(o+1))]):"number"===r.type?n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(Number(e[r.column]).toLocaleString()))]):n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(e[r.column]))])]):[r.isDict?n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(t.getDictLabel(e[r.column],r.dict)))]):"index"===r.column?n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(o+1))]):"number"===r.type?n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(Number(e[r.column]).toLocaleString()))]):n("span",{ref:o+r.column,refInFor:!0},[t._v(t._s(e[r.column]))])]],2)})),0)})),0)])])},r=[],l={props:{headData:{type:Array,default(){return[]}},height:{type:Number,default:940},tableList:{type:Array,default(){return[]}}},data(){return{showTooltip:!1}},methods:{handleClick(){},getDictLabel(){},onMouseOver(t,e){const n=this.$refs[t+e][0],o=n.parentNode.offsetWidth,r=n.offsetWidth;this.showTooltip=r>o}}},s=l,c=(n("97f0"),n("6455"),n("8cf1")),a=Object(c["a"])(s,o,r,!1,null,"b65b7bf2",null);e["default"]=a.exports},e616:function(t,e,n){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c4eae85"],{"05cf":function(t,e,n){},"55ca":function(t,e,n){"use strict";var a=n("79c5"),l=n.n(a);l.a},"79b6":function(t,e,n){"use strict";var a=n("05cf"),l=n.n(a);l.a},"79c5":function(t,e,n){},"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},ee37:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"readonly-map"},[n("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.location,expression:"location"}],class:t.value?"":"empty",attrs:{name:"place"}})],1)},l=[],i=n("8db2"),o=n.n(i),u={name:"ReadonlyMap",mixins:[o.a],computed:{location:function(){var t="";if(this.value){var e=JSON.parse(JSON.stringify(this.value));t='\n        <table class="map-value-tooltip">\n          <tr>\n            <td>Latitude</td>\n            <td>'.concat(e.lat,"</td>\n          </tr>\n          <tr>\n            <td>Longitude</td>\n            <td>").concat(e.lng,"</td>\n          </tr>\n        </table>")}else t=this.$t("interfaces-map-no_location");return t}}},c=u,r=(n("79b6"),n("55ca"),n("2877")),d=Object(r["a"])(c,a,l,!1,null,"97a0a20e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7c4eae85.136acb57.js.map
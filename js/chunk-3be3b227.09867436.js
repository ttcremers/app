(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be3b227"],{"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},afd9:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-select",{attrs:{id:e.name,icon:"perm_identity",name:e.name,placeholder:e.$t("choose_one"),options:e.selectOptions,value:e.currentRoleID},on:{input:e.emitValue}})},l=[],r=n("7618"),u=(n("ac6a"),n("8db2")),o=n.n(u),a={name:"InterfaceUserRole",mixins:[o.a],data:function(){return{loading:!1,roles:[],error:null}},computed:{selectOptions:function(){var e=this,t={};return this.roles.filter(function(t){return!!e.options.showPublic||2!==t.id}).forEach(function(e){t[e.id]=e.name}),t},currentRole:function(){var e=this.value&&this.value[0]&&this.value[0].role;if("object"!==Object(r["a"])(e)){var t=this.roles.filter(function(t){return t.id==e});return t&&t[0]}return e},currentRoleID:function(){return this.currentRole&&this.currentRole.id}},created:function(){this.fetchRoles()},methods:{fetchRoles:function(){var e=this;this.loading=!0,this.$api.getRoles().then(function(e){return e.data}).then(function(t){e.roles=t,e.loading=!1,e.error=null}).catch(function(t){e.loading=!1,e.error=t})},emitValue:function(e){var t=this.value&&this.value[0]&&this.value[0].id;t?this.$emit("input",[{id:t,role:e}]):this.$emit("input",[{role:e}])}}},c=a,s=n("2877"),d=Object(s["a"])(c,i,l,!1,null,"1e345699",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3be3b227.09867436.js.map
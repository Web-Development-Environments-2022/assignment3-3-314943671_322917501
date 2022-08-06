"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[130],{6130:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});r(8309);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("h1",{staticClass:"title"},[e._v("My Recipes")]),t("div",[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[e._v("Add Recipe")]),t("b-modal",{attrs:{id:"modal-1",centered:"",title:"Add New Recipe"}},[t("p",{staticClass:"my-4"},[e._v("Please enter in english and follow instructions")]),e.show?t("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Title:","label-for":"input-1"}},[t("b-form-input",{attrs:{id:"input-1",placeholder:"Enter title",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("b-form-group",{attrs:{id:"input-group-2",label:"Picture:","label-for":"input-2",description:"Make sure it's valid HTTP path."}},[t("b-form-input",{attrs:{id:"input-2",placeholder:"Enter path",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("b-form-group",{attrs:{id:"input-group-5",label:"Preparation Time:","label-for":"input-5",description:"How much it takes to make the recipe."}},[t("b-form-input",{attrs:{id:"input-5",type:"number",placeholder:"Enter preparation time",required:""},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),t("b-form-group",{attrs:{id:"input-group-3",label:"Food:","label-for":"input-3"}},[t("b-form-select",{attrs:{id:"input-3",options:e.foods,required:""},model:{value:e.form.food,callback:function(t){e.$set(e.form,"food",t)},expression:"form.food"}})],1),t("b-form-group",{attrs:{id:"input-group-4"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.ariaDescribedby;return[t("b-form-checkbox-group",{attrs:{id:"checkboxes-4","aria-describedby":i},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[t("b-form-checkbox",{attrs:{value:"me"}},[e._v("Check me out")]),t("b-form-checkbox",{attrs:{value:"that"}},[e._v("Check that out")])],1)]}}],null,!1,531429359)}),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),t("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)],1),e.recipes.length>0?t("div",[t("br"),e._v(" Number of results: "+e._s(e.recipes.length)+" "),e._l(e.orderedRecipes,(function(r){return t("div",{key:r.id,staticClass:"results"},[t("b-card",{staticClass:"mb-2 card",attrs:{title:r.title,"img-src":r.image,"img-alt":"Image","img-top":"",tag:"article"}},[t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",[e._v("Number of Likes: "+e._s(r.popularity))]),t("b-list-group-item",[e._v("Time To Make: "+e._s(r.readyInMinutes))]),r.vegan?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("for vegans ")],1):e._e(),r.vegetarian?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("for vegetarians ")],1):e._e()],1),t("b-button",{attrs:{to:{name:"recipe",params:{recipeId:r.id}},variant:"primary"}},[e._v("Go To Instructions ")])],1)],1)}))],2):e.searched?t("div",[e._v(" No recipes found. ")]):e._e()])},o=[],s=r(6835),a=r(5957),n=r(8534),c=(r(8862),r(6486)),l=r.n(c);const u={name:"MyRecipes",components:{},data:function(){return{form:{email:"",name:"",food:null,checked:[]},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0,recipes:[],sortby:"likes",searched:!1}},mounted:function(){this.updateRecipes()},computed:{orderedRecipes:function(){return"timetomake"==this.sortby?l().orderBy(this.recipes,"readyInMinutes"):l().orderBy(this.recipes,"aggregateLikes","desc")}},methods:{updateRecipes:function(){var e=this;return(0,n.Z)((0,s.Z)().mark((function t(){var r,i,o;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/myRecipes");case 3:i=t.sent,o=i.data,e.recipes=[],(r=e.recipes).push.apply(r,(0,a.Z)(o)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){t.show=!0}))}}},m=u;var p=r(1001),d=(0,p.Z)(m,i,o,!1,null,"3a72b7c2",null);const f=d.exports}}]);
//# sourceMappingURL=130.72b381cd.js.map
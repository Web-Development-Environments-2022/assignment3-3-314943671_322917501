(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[986],{1986:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});r(1249),r(7327),r(1539),r(6699),r(5684);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("h1",{staticClass:"title"},[e._v("Search Page")]),t("div",[t("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[t("b-form-input",{attrs:{placeholder:"Search for recipe"},model:{value:e.form.query,callback:function(t){e.$set(e.form,"query",t)},expression:"form.query"}}),t("br"),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",label:"cuisine:","label-for":"cuisine"}},[t("b-form-select",{attrs:{id:"cuisine",options:e.cuisines},model:{value:e.form.cuisine,callback:function(t){e.$set(e.form,"cuisine",t)},expression:"form.cuisine"}})],1),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",label:"diet:","label-for":"diet"}},[t("b-form-select",{attrs:{id:"diet",options:e.diets},model:{value:e.form.diet,callback:function(t){e.$set(e.form,"diet",t)},expression:"form.diet"}})],1),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",label:"intolerance:","label-for":"intolerance"}},[t("b-form-select",{attrs:{id:"intolerance",options:e.intolerances},model:{value:e.form.intolerance,callback:function(t){e.$set(e.form,"intolerance",t)},expression:"form.intolerance"}})],1),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",id:"input-group-3",label:"Number of Results:","label-for":"input-3"}},[t("b-form-select",{attrs:{id:"input-3",options:e.foods},model:{value:e.form.numResults,callback:function(t){e.$set(e.form,"numResults",t)},expression:"form.numResults"}})],1),t("div",{staticClass:"row justify-content-center"},[t("b-button",{staticClass:"btn btn-default",attrs:{type:"submit",variant:"primary"}},[e._v("Search")]),t("b-button",{staticClass:"btn btn-default",attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1),e.recipes.length>0?t("div",[e._v(" Order By: "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sortby,expression:"sortby"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sortby=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"likes"}},[e._v("Likes")]),t("option",{attrs:{value:"timetomake"}},[e._v("Time to make")])]),t("br"),e._v(" Number of results: "+e._s(e.recipes.length)+" "),e._l(e.orderedRecipes,(function(r){return t("div",{key:r.id,staticClass:"results"},[t("b-card",{staticClass:"mb-2 card",attrs:{title:r.title,"img-src":r.image,"img-alt":"Image","img-top":"",tag:"article"}},[t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",[e._v("Number of Likes: "+e._s(r.aggregateLikes))]),t("b-list-group-item",[e._v("Time To Make: "+e._s(r.readyInMinutes))]),r.vegan?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("for vegans ")],1):e._e(),r.vegetarian?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("for vegetarians ")],1):e._e()],1),t("b-button",{attrs:{to:{name:"recipe",params:{recipeId:r.id}},variant:"primary"}},[e._v("Go To Instructions")]),e.favorites.includes(r.id)?t("b-button",{attrs:{disabled:"",variant:"secondary"}},[e._v("Added to favorites!")]):t("b-button",{attrs:{variant:"secondary"},on:{click:function(t){return e.addToFavorites(r.id)}}},[e._v("Add to favorites")])],1)],1)}))],2):e.searched?t("div",[e._v(" No recipes found. ")]):e._e()])},s=[],a=r(6835),i=r(8534),o=r(5957);r(2222);const c=["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],u=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],l=["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"];var d=r(6486),f=r.n(d);const p={name:"SearchPage",components:{},data:function(){return{form:{query:"",cuisine:"",intolerance:"",diet:"",numResults:null},text:"",cuisines:[{value:null,text:"",disabled:!0}],diets:[{value:null,text:"",disabled:!0}],intolerances:[{value:null,text:"",disabled:!0}],foods:[{text:"",value:null},"5","10","15"],recipes:[],sortby:"likes",searched:!1,favorites:null}},mounted:function(){var e,t,r;(e=this.cuisines).push.apply(e,(0,o.Z)(c)),(t=this.diets).push.apply(t,(0,o.Z)(l)),(r=this.intolerances).push.apply(r,(0,o.Z)(u)),this.getFavorites()},computed:{orderedRecipes:function(){return"timetomake"==this.sortby?f().orderBy(this.recipes,"readyInMinutes"):f().orderBy(this.recipes,"aggregateLikes","desc")}},methods:{onSubmit:function(e){e.preventDefault(),this.sendRequst()},sendRequst:function(){var e=this;return(0,i.Z)((0,a.Z)().mark((function t(){var r,n,s;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/recipes/search/query/".concat(e.form.query,"/amount/").concat(e.form.numResults),{cuisine:e.form.cuisine,intolerance:e.form.intolerance,diet:e.form.diet});case 3:n=t.sent,s=n.data.results,e.recipes=[],(r=e.recipes).push.apply(r,(0,o.Z)(s)),e.searched=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},onReset:function(e){var t=this;e.preventDefault(),this.form.query="",this.form.cuisine="",this.form.intolerance="",this.form.diet="",this.form.numResults=null,this.searched=!1,this.show=!1,this.$nextTick((function(){t.show=!0}))},getFavorites:function(){var e=this;return(0,i.Z)((0,a.Z)().mark((function t(){var r,n,s,i;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:n=t.sent,s=n.data,i=s.map((function(e){return e.id})),e.favorites=[],(r=e.favorites).push.apply(r,(0,o.Z)(i)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},addToFavorites:function(e){var t=this;return(0,i.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(t.$root.store.server_domain+"/users/favorites",{recipeId:e});case 3:r.sent,t.getFavorites(),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}},m=p;var v=r(1001),h=(0,v.Z)(m,n,s,!1,null,"427c0613",null);const b=h.exports},4964:(e,t,r)=>{var n=r(5112),s=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[s]=!1,"/./"[e](t)}catch(n){}}return!1}},7207:e=>{var t=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw t("Maximum allowed index exceeded");return e}},7850:(e,t,r)=>{var n=r(111),s=r(4326),a=r(5112),i=a("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},3929:(e,t,r)=>{var n=r(7850),s=TypeError;e.exports=function(e){if(n(e))throw s("The method doesn't accept regular expressions");return e}},2222:(e,t,r)=>{"use strict";var n=r(2109),s=r(7293),a=r(3157),i=r(111),o=r(7908),c=r(6244),u=r(7207),l=r(6135),d=r(5417),f=r(1194),p=r(5112),m=r(7392),v=p("isConcatSpreadable"),h=m>=51||!s((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=f("concat"),g=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:a(e)},y=!h||!b;n({target:"Array",proto:!0,arity:1,forced:y},{concat:function(e){var t,r,n,s,a,i=o(this),f=d(i,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?i:arguments[t],g(a))for(s=c(a),u(p+s),r=0;r<s;r++,p++)r in a&&l(f,p,a[r]);else u(p+1),l(f,p++,a);return f.length=p,f}})},7327:(e,t,r)=>{"use strict";var n=r(2109),s=r(2092).filter,a=r(1194),i=a("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},6699:(e,t,r)=>{"use strict";var n=r(2109),s=r(1318).includes,a=r(7293),i=r(1223),o=a((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:o},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},1249:(e,t,r)=>{"use strict";var n=r(2109),s=r(2092).map,a=r(1194),i=a("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},5684:(e,t,r)=>{"use strict";var n=r(2109),s=r(1702),a=r(3929),i=r(4488),o=r(1340),c=r(4964),u=s("".indexOf);n({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~u(o(i(this)),o(a(e)),arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=986.6b2d16d1.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c2d3"],{NSDT:function(t,e,n){"use strict";n.r(e);var i=n("fqLP"),a=n("ZySA"),s=(n("JDVc"),n("7Qib")),r={name:"clusterIndex",directives:{waves:a.a},data:function(){return{listQuery:{name:"",loadBalance:void 0,page:1,size:10},listLoading:!0,dataList:[],showList:[],pageInfo:{totalSize:void 0}}},created:function(){this.getList()},watch:{$route:function(t,e){"clusterIndex"!==t.name&&this.$destroy()},"listQuery.name":function(){this.handleFilter()}},computed:{},methods:{getList:function(){var t=this;this.listLoading=!0,i.b().then(function(e){t.updateList(e)}).catch(function(){t.listLoading=!1})},updateList:function(t){this.dataList=t||[],this.pageInfo.totalSize=this.dataList.length,this.listLoading=!1,this.updateShowList()},handleFilter:function(){this.listQuery.page=1,this.updateShowList()},updateShowList:function(){var t=this,e=[],n=[];this.dataList.forEach(function(n,i){var a=t.listQuery.name,r=t.listQuery.domain,o=t.listQuery.tag,l=t.listQuery.matchRule,c=!0;if(a&&(c=Object(s.i)(n.name,a)),c&&r&&(c=Object(s.i)(n.domain,r)),c&&o&&n.tags&&n.tags.length>0)for(var u=0,d=n.tags.length;u<d;u++){var h=n.tags[u]||{};c=Object(s.i)(h.name,o)||Object(s.i)(h.value,o)}c&&-1!==l&&(c=n.matchRule===l),c&&e.push(n)}),e.forEach(function(e,i){e=e||{};var a=t.listQuery.page,s=t.listQuery.size,r=a*s;i>=r-s&&i<r&&n.push(e)}),this.showList=n,this.pageInfo.totalSize=e.length},handleDelete:function(t){var e=this,n=t.id;this.$confirm("是否删除该集群？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e._doDeleteItem(n)})},handleSizeChange:function(t){this.listQuery.size=t,this.listQuery.page=1,this.updateShowList()},handleCurrentChange:function(t){this.listQuery.page=t,this.updateShowList()},_doDeleteItem:function(t){var e=this;t&&i.a(t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getList()})},handleCreate:function(){this.$router.push({path:"/cluster/new"})},handleShowList:function(t){this.$router.push({path:"/server",query:{id:t.id}})},handleUpdate:function(t){this.$router.push({path:"/cluster/edit",query:{id:t.id}})}}},o=(n("Pa5L"),n("KHd+")),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"Cluster名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{loading:t.listLoading,type:"primary"},on:{click:t.getList}},[t._v("刷新\n        ")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"danger",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加\n        ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.showList,"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Cluster名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"负载均衡算法"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("loadBalanceFilter")(e.row.loadBalance)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleShowList(e.row)}}},[t._v("查看绑定的服务")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"73974664",null);l.options.__file="index.vue";e.default=l.exports},Pa5L:function(t,e,n){"use strict";var i=n("WflB");n.n(i).a},WflB:function(t,e,n){},ZySA:function(t,e,n){"use strict";var i=n("P2sY"),a=n.n(i),s=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var i=a()({},e.value),s=a()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=s.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",r.appendChild(l)),s.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-o.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=s.color,l.className="waves-ripple z-active",!1}},!1)}}),r=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(r)),s.install=r;e.a=s},fqLP:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return h});var i=n("4d7F"),a=n.n(i),s=n("t3Un"),r=n("JDVc"),o="/clusters";function l(){return new a.a(function(t,e){var n=[],i="",a=r.c;!function r(l){(function(t){return Object(s.a)({url:o,method:"GET",params:t})})(l).then(function(e){var s=(e=e||[]).length;s>0?(n=n.concat(e),(i=e[s-1]||{}).id&&r({after:i.id,limit:a})):t(n)}).catch(function(){e()})}({after:"",limit:a})})}function c(t){return Object(s.a)({url:o+"/"+t,method:"GET"})}function u(t){return Object(s.a)({url:o,method:"PUT",data:t})}function d(t){return Object(s.a)({url:o+"/"+t,method:"DELETE"})}function h(t){return Object(s.a)({url:o+"/"+t+"/binds",method:"GET"})}},jUE0:function(t,e,n){},t3Un:function(t,e,n){"use strict";var i=n("4d7F"),a=n.n(i),s=n("vDqi"),r=n.n(s),o=n("XJYT"),l=r.a.create({baseURL:"/v1",timeout:6e4});l.interceptors.request.use(function(t){return t},function(t){console.error(t),a.a.reject(t)}),l.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(o.Message)({message:e.data,type:"error",duration:5e3}),a.a.reject("error"))},function(t){return Object(o.Message)({message:t.data||"网络异常",type:"error",duration:5e3}),a.a.reject(t)}),e.a=l}}]);
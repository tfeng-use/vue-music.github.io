webpackJsonp([2],{"4p3u":function(e,t){},RyVR:function(e,t){},"W1+L":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("m40h"),a=i("T452"),o=i("43Vb"),c=i.n(o),l=i("3Q4o"),d={data:function(){return{dots:[],currentPageIndex:0,currentPageIndex1:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:2e3}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){console.log(1111),e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,i=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){var n=this.children[s];Object(l.a)(n,"slider-item"),n.style.width=i+"px",t+=i}this.loop&&!e&&(t+=2*i),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var e=this;this.slider=new c.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.currentPageIndex1=t-1,e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&(clearTimeout(e.timer),e._play())}),this.slider.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.currentPageIndex1=t-1>4?0:t-1,e.slider.goToPage(t,0,500)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"dots"},e._l(e.dots,function(t,s){return i("span",{key:s,staticClass:"dot",class:{active:e.currentPageIndex1===s}})}))])},staticRenderFns:[]};var h=i("VU/8")(d,u,!1,function(e){i("RyVR")},null,null).exports,m=i("qwAB"),f=i("y/jF"),p=i("F4+m"),v=i("NYxO"),g={mixins:[p.b],data:function(){return{recommends:[],discList:[],checkLoaded:!1}},created:function(){this._getRecommend(),this._getDiscList()},components:{Slider:h,Scroll:m.a,Loading:f.a},methods:n()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},selectItem:function(e){this.setDisc(e),this.$router.push({path:"/recommend/"+e.dissid})},_getRecommend:function(){var e=this;Object(r.b)().then(function(t){t.code===a.a&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;Object(r.a)().then(function(t){t.code===a.a&&(e.discList=t.data.list)})},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)}},Object(v.d)({setDisc:"SET_DISC"}))},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"recommend",staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[i("div",[e.recommends.length?i("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[i("slider",e._l(e.recommends,function(t){return i("div",{key:t.id},[i("a",{attrs:{href:t.linkUrl}},[i("img",{staticClass:"needsclick",attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),i("ul",e._l(e.discList,function(t){return i("li",{key:t.id,staticClass:"item",on:{click:function(i){e.selectItem(t)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("loading")],1),e._v(" --\x3e\n  ")]),e._v(" "),i("router-view")],1)},staticRenderFns:[]};var y=i("VU/8")(g,_,!1,function(e){i("4p3u")},null,null);t.default=y.exports},m40h:function(e,t,i){"use strict";t.b=function(){var e=a()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,c.c)},t.a=function(){var e=a()({},c.b,{platform:"yqq",hostUin:0,sin:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("/api/getDiscList",{params:e}).then(function(e){return n.a.resolve(e.data)})},t.c=function(e){console.log("这儿是disstid"),console.log(e);var t=a()({},c.b,{disstid:e,type:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,g_tk:5381,format:"json"});return d.a.get("/api/getSongList",{params:t}).then(function(e){return n.a.resolve(e.data)})};var s=i("//Fk"),n=i.n(s),r=i("woOf"),a=i.n(r),o=i("Gak4"),c=i("T452"),l=i("mtWM"),d=i.n(l)}});
//# sourceMappingURL=2.afc225a3b62183558f81.js.map
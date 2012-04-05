goog.provide('cordova_app.core');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.event');
goog.require('clojure.browser.repl');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
cordova_app.core.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__3087){
var vec__3088__3089 = p__3087;
var k__3090 = cljs.core.nth.call(null,vec__3088__3089,0,null);
var v__3091 = cljs.core.nth.call(null,vec__3088__3089,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__3090),clj__GT_js.call(null,v__3091));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
cordova_app.core.get_value = (function get_value(id){
return clojure.browser.dom.get_value.call(null,clojure.browser.dom.get_element.call(null,id));
});
cordova_app.core.set_text = (function set_text(id,text){
return clojure.browser.dom.set_text.call(null,clojure.browser.dom.get_element.call(null,id),text);
});
cordova_app.core.device_props = cljs.core.Vector.fromArray(["platform","version","uuid","name","width","height","colorDepth"]);
cordova_app.core.show_device_info = (function show_device_info(){
var G__3093__3094 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__3092_SHARP_){
return cljs.core.vec.call(null,cljs.core.Vector.fromArray([cljs.core.str.call(null,p1__3092_SHARP_,"Cell"),(device[p1__3092_SHARP_])]));
}),cordova_app.core.device_props));

if(cljs.core.truth_(G__3093__3094))
{var G__3096__3098 = cljs.core.first.call(null,G__3093__3094);
var vec__3097__3099 = G__3096__3098;
var id__3100 = cljs.core.nth.call(null,vec__3097__3099,0,null);
var val__3101 = cljs.core.nth.call(null,vec__3097__3099,1,null);
var G__3093__3102 = G__3093__3094;

var G__3096__3103 = G__3096__3098;
var G__3093__3104 = G__3093__3102;

while(true){
var vec__3105__3106 = G__3096__3103;
var id__3107 = cljs.core.nth.call(null,vec__3105__3106,0,null);
var val__3108 = cljs.core.nth.call(null,vec__3105__3106,1,null);
var G__3093__3109 = G__3093__3104;

cordova_app.core.set_text.call(null,id__3107,val__3108);
var temp__3698__auto____3110 = cljs.core.next.call(null,G__3093__3109);

if(cljs.core.truth_(temp__3698__auto____3110))
{var G__3093__3111 = temp__3698__auto____3110;

{
var G__3112 = cljs.core.first.call(null,G__3093__3111);
var G__3113 = G__3093__3111;
G__3096__3103 = G__3112;
G__3093__3104 = G__3113;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
document.addEventListener("deviceready",cordova_app.core.show_device_info);
cordova_app.core.compass_enabled_QMARK_ = (function compass_enabled_QMARK_(){
return cljs.core._EQ_.call(null,"on",cordova_app.core.get_value.call(null,"enableCompassCheckbox"));
});
cordova_app.core.heading_watch = cljs.core.atom.call(null,null);
cordova_app.core.compass = (function compass(){
return navigator.compass;
});
cljs.core.add_watch.call(null,cordova_app.core.heading_watch,null,(function (_3114,_,old,new$){
if(cljs.core.truth_((function (){var and__3546__auto____3115 = cljs.core.not.call(null,(old === null));

if(cljs.core.truth_(and__3546__auto____3115))
{return (new$ === null);
} else
{return and__3546__auto____3115;
}
})()))
{cordova_app.core.compass.call(null).clearWatch(old);
return cordova_app.core.set_text.call(null,"headingCell","Off");
} else
{return null;
}
}));
cordova_app.core.watch_heading = (function watch_heading(){
var show_heading__3116 = (function (h){
return cordova_app.core.set_text.call(null,"headingCell",h.magneticHeading);
});
var error_handler__3117 = (function (e){
console.log(cljs.core.str.call(null,"Compass error:",e.code));
return cordova_app.core.set_text.call(null,"headingCell",e.code);
});
var options__3118 = cordova_app.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["frequency"],{"frequency":1000}));

cljs.core.swap_BANG_.call(null,cordova_app.core.heading_watch,(function (){
return cordova_app.core.compass.call(null).watchHeading(show_heading__3116,error_handler__3117,options__3118);
}));
return cordova_app.core.set_text.call(null,"headingCell","Waiting...");
});
clojure.browser.event.listen.call(null,clojure.browser.dom.get_element.call(null,"enableCompassCheckbox"),"\uFDD0'change",(function (){
if(cljs.core.truth_(cordova_app.core.compass_enabled_QMARK_.call(null)))
{return cljs.core.reset_BANG_.call(null,cordova_app.core.heading_watch,null);
} else
{return cordova_app.core.watch_heading.call(null);
}
}));
clojure.browser.event.listen.call(null,clojure.browser.dom.get_element.call(null,"connectReplButton"),"\uFDD0'click",(function (){
console.log("Connecting to REPL...");
return clojure.browser.repl.connect.call(null,"http:\/\/10.0.2.2:9000\/repl");
}));

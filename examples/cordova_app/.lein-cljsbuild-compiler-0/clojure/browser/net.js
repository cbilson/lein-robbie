goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4894){
var vec__4895__4896 = p__4894;
var k__4897 = cljs.core.nth.call(null,vec__4895__4896,0,null);
var v__4898 = cljs.core.nth.call(null,vec__4895__4896,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4897.toLowerCase()),v__4898]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4929 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4899 = this$;

if(cljs.core.truth_(and__3546__auto____4899))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4899;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4900 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4900))
{return or__3548__auto____4900;
} else
{var or__3548__auto____4901 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4901))
{return or__3548__auto____4901;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4930 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4902 = this$;

if(cljs.core.truth_(and__3546__auto____4902))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4902;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4903 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4903))
{return or__3548__auto____4903;
} else
{var or__3548__auto____4904 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4904))
{return or__3548__auto____4904;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4931 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4905 = this$;

if(cljs.core.truth_(and__3546__auto____4905))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4905;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4906 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4906))
{return or__3548__auto____4906;
} else
{var or__3548__auto____4907 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4907))
{return or__3548__auto____4907;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4932 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4908 = this$;

if(cljs.core.truth_(and__3546__auto____4908))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4908;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4909 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4909))
{return or__3548__auto____4909;
} else
{var or__3548__auto____4910 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4910))
{return or__3548__auto____4910;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__4929.call(this,this$);
case  2 :
return connect__4930.call(this,this$,opt1);
case  3 :
return connect__4931.call(this,this$,opt1,opt2);
case  4 :
return connect__4932.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4934 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4911 = this$;

if(cljs.core.truth_(and__3546__auto____4911))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4911;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4912 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4912))
{return or__3548__auto____4912;
} else
{var or__3548__auto____4913 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4913))
{return or__3548__auto____4913;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4935 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4914 = this$;

if(cljs.core.truth_(and__3546__auto____4914))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4914;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4915 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4915))
{return or__3548__auto____4915;
} else
{var or__3548__auto____4916 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4916))
{return or__3548__auto____4916;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4936 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4917 = this$;

if(cljs.core.truth_(and__3546__auto____4917))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4917;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4918 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4918))
{return or__3548__auto____4918;
} else
{var or__3548__auto____4919 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4919))
{return or__3548__auto____4919;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4937 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4920 = this$;

if(cljs.core.truth_(and__3546__auto____4920))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4920;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4921 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4921))
{return or__3548__auto____4921;
} else
{var or__3548__auto____4922 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4922))
{return or__3548__auto____4922;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4938 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4923 = this$;

if(cljs.core.truth_(and__3546__auto____4923))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4923;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4924 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4924))
{return or__3548__auto____4924;
} else
{var or__3548__auto____4925 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4925))
{return or__3548__auto____4925;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__4934.call(this,this$,opt);
case  3 :
return transmit__4935.call(this,this$,opt,opt2);
case  4 :
return transmit__4936.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4937.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4938.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4926 = this$;

if(cljs.core.truth_(and__3546__auto____4926))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4926;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4927 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4927))
{return or__3548__auto____4927;
} else
{var or__3548__auto____4928 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4928))
{return or__3548__auto____4928;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4940){
var vec__4941__4942 = p__4940;
var k__4943 = cljs.core.nth.call(null,vec__4941__4942,0,null);
var v__4944 = cljs.core.nth.call(null,vec__4941__4942,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4943.toLowerCase()),v__4944]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4945 = null;
var G__4945__4946 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4945__4947 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4945__4948 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4945__4949 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4945__4950 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4945 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4945__4946.call(this,this$,uri);
case  3 :
return G__4945__4947.call(this,this$,uri,method);
case  4 :
return G__4945__4948.call(this,this$,uri,method,content);
case  5 :
return G__4945__4949.call(this,this$,uri,method,content,headers);
case  6 :
return G__4945__4950.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4945;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4952){
var vec__4953__4954 = p__4952;
var k__4955 = cljs.core.nth.call(null,vec__4953__4954,0,null);
var v__4956 = cljs.core.nth.call(null,vec__4953__4954,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4955.toLowerCase()),v__4956]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__4963 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4957 = this$;

if(cljs.core.truth_(and__3546__auto____4957))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4957;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4958 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4958))
{return or__3548__auto____4958;
} else
{var or__3548__auto____4959 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4959))
{return or__3548__auto____4959;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4964 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4960 = this$;

if(cljs.core.truth_(and__3546__auto____4960))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4960;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4961 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4961))
{return or__3548__auto____4961;
} else
{var or__3548__auto____4962 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4962))
{return or__3548__auto____4962;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__4963.call(this,this$,service_name,fn);
case  4 :
return register_service__4964.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4966 = null;
var G__4966__4967 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4966__4968 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4966__4969 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4966__4970 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4966 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4966__4967.call(this,this$);
case  2 :
return G__4966__4968.call(this,this$,on_connect_fn);
case  3 :
return G__4966__4969.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4966__4970.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4966;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__4972 = null;
var G__4972__4973 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4972__4974 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4972 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4972__4973.call(this,this$,service_name,fn);
case  4 :
return G__4972__4974.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4972;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__4985 = (function (){
var temp__3698__auto____4976 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4976))
{var config__4977 = temp__3698__auto____4976;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4977)));
} else
{return null;
}
});
var xpc_connection__4986 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4978){
var vec__4979__4980 = p__4978;
var k__4981 = cljs.core.nth.call(null,vec__4979__4980,0,null);
var v__4982 = cljs.core.nth.call(null,vec__4979__4980,1,null);

var temp__3695__auto____4983 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4981);

if(cljs.core.truth_(temp__3695__auto____4983))
{var field__4984 = temp__3695__auto____4983;

return cljs.core.assoc.call(null,sum,field__4984,v__4982);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4985.call(this);
case  1 :
return xpc_connection__4986.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;

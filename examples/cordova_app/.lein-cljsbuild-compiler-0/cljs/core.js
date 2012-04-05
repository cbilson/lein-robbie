goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3141 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__3206 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3143 = this$;

if(cljs.core.truth_(and__3546__auto____3143))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3143;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3144 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3207 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3146 = this$;

if(cljs.core.truth_(and__3546__auto____3146))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3146;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3147 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{var or__3548__auto____3148 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3208 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3149 = this$;

if(cljs.core.truth_(and__3546__auto____3149))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3149;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3150 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{var or__3548__auto____3151 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3209 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3152 = this$;

if(cljs.core.truth_(and__3546__auto____3152))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3152;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3153 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3210 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3155 = this$;

if(cljs.core.truth_(and__3546__auto____3155))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3155;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3156 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3156))
{return or__3548__auto____3156;
} else
{var or__3548__auto____3157 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3211 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3158 = this$;

if(cljs.core.truth_(and__3546__auto____3158))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3158;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3159 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{var or__3548__auto____3160 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3212 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3161 = this$;

if(cljs.core.truth_(and__3546__auto____3161))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3161;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3162 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{var or__3548__auto____3163 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3213 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3164 = this$;

if(cljs.core.truth_(and__3546__auto____3164))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3164;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3165 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var or__3548__auto____3166 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3214 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3167 = this$;

if(cljs.core.truth_(and__3546__auto____3167))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3167;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3168 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{var or__3548__auto____3169 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3215 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3170 = this$;

if(cljs.core.truth_(and__3546__auto____3170))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3170;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3171 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{var or__3548__auto____3172 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3216 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3173 = this$;

if(cljs.core.truth_(and__3546__auto____3173))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3173;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3174 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{var or__3548__auto____3175 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3217 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3176 = this$;

if(cljs.core.truth_(and__3546__auto____3176))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3176;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3177 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3218 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3179 = this$;

if(cljs.core.truth_(and__3546__auto____3179))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3179;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3180 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3219 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3182 = this$;

if(cljs.core.truth_(and__3546__auto____3182))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3182;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3183 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3220 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3185 = this$;

if(cljs.core.truth_(and__3546__auto____3185))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3185;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3186 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3221 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3188 = this$;

if(cljs.core.truth_(and__3546__auto____3188))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3188;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3189 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3222 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3191 = this$;

if(cljs.core.truth_(and__3546__auto____3191))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3191;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3192 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3223 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3194 = this$;

if(cljs.core.truth_(and__3546__auto____3194))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3194;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3195 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3224 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3197 = this$;

if(cljs.core.truth_(and__3546__auto____3197))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3197;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3198 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3225 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3200 = this$;

if(cljs.core.truth_(and__3546__auto____3200))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3200;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3201 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{var or__3548__auto____3202 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3226 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3203 = this$;

if(cljs.core.truth_(and__3546__auto____3203))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3203;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3204 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var or__3548__auto____3205 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__3206.call(this,this$);
case  2 :
return _invoke__3207.call(this,this$,a);
case  3 :
return _invoke__3208.call(this,this$,a,b);
case  4 :
return _invoke__3209.call(this,this$,a,b,c);
case  5 :
return _invoke__3210.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3211.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3212.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3213.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3214.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3215.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3216.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3217.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3218.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3219.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3220.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3221.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3222.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3223.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3224.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3225.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3226.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3228 = coll;

if(cljs.core.truth_(and__3546__auto____3228))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3228;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3229 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{var or__3548__auto____3230 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3230))
{return or__3548__auto____3230;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3231 = coll;

if(cljs.core.truth_(and__3546__auto____3231))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3231;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3232 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3232))
{return or__3548__auto____3232;
} else
{var or__3548__auto____3233 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3233))
{return or__3548__auto____3233;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3234 = coll;

if(cljs.core.truth_(and__3546__auto____3234))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3234;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3235 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3235))
{return or__3548__auto____3235;
} else
{var or__3548__auto____3236 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3236))
{return or__3548__auto____3236;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3243 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3237 = coll;

if(cljs.core.truth_(and__3546__auto____3237))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3237;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3238 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3238))
{return or__3548__auto____3238;
} else
{var or__3548__auto____3239 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3239))
{return or__3548__auto____3239;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3244 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3240 = coll;

if(cljs.core.truth_(and__3546__auto____3240))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3240;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3241 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3241))
{return or__3548__auto____3241;
} else
{var or__3548__auto____3242 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3242))
{return or__3548__auto____3242;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3243.call(this,coll,n);
case  3 :
return _nth__3244.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3246 = coll;

if(cljs.core.truth_(and__3546__auto____3246))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3246;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3247 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3247))
{return or__3548__auto____3247;
} else
{var or__3548__auto____3248 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3248))
{return or__3548__auto____3248;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3249 = coll;

if(cljs.core.truth_(and__3546__auto____3249))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3249;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3250 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3250))
{return or__3548__auto____3250;
} else
{var or__3548__auto____3251 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3258 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3252 = o;

if(cljs.core.truth_(and__3546__auto____3252))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3252;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3253 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3253))
{return or__3548__auto____3253;
} else
{var or__3548__auto____3254 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3259 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3255 = o;

if(cljs.core.truth_(and__3546__auto____3255))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3255;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3256 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3256))
{return or__3548__auto____3256;
} else
{var or__3548__auto____3257 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3258.call(this,o,k);
case  3 :
return _lookup__3259.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3261 = coll;

if(cljs.core.truth_(and__3546__auto____3261))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3261;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3262 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3262))
{return or__3548__auto____3262;
} else
{var or__3548__auto____3263 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3264 = coll;

if(cljs.core.truth_(and__3546__auto____3264))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3264;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3265 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3265))
{return or__3548__auto____3265;
} else
{var or__3548__auto____3266 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3267 = coll;

if(cljs.core.truth_(and__3546__auto____3267))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3267;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3268 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3268))
{return or__3548__auto____3268;
} else
{var or__3548__auto____3269 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3270 = coll;

if(cljs.core.truth_(and__3546__auto____3270))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3270;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3271 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3271))
{return or__3548__auto____3271;
} else
{var or__3548__auto____3272 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3272))
{return or__3548__auto____3272;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3273 = coll;

if(cljs.core.truth_(and__3546__auto____3273))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3273;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3274 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3274))
{return or__3548__auto____3274;
} else
{var or__3548__auto____3275 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3275))
{return or__3548__auto____3275;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3276 = coll;

if(cljs.core.truth_(and__3546__auto____3276))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3276;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3277 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3277))
{return or__3548__auto____3277;
} else
{var or__3548__auto____3278 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3278))
{return or__3548__auto____3278;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3279 = coll;

if(cljs.core.truth_(and__3546__auto____3279))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3279;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3280 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3280))
{return or__3548__auto____3280;
} else
{var or__3548__auto____3281 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3281))
{return or__3548__auto____3281;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3282 = o;

if(cljs.core.truth_(and__3546__auto____3282))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3282;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3283 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3283))
{return or__3548__auto____3283;
} else
{var or__3548__auto____3284 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3285 = o;

if(cljs.core.truth_(and__3546__auto____3285))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3285;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3286 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3286))
{return or__3548__auto____3286;
} else
{var or__3548__auto____3287 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3288 = o;

if(cljs.core.truth_(and__3546__auto____3288))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3288;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3289 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3289))
{return or__3548__auto____3289;
} else
{var or__3548__auto____3290 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3290))
{return or__3548__auto____3290;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3291 = o;

if(cljs.core.truth_(and__3546__auto____3291))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3291;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3292 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3292))
{return or__3548__auto____3292;
} else
{var or__3548__auto____3293 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3300 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3294 = coll;

if(cljs.core.truth_(and__3546__auto____3294))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3294;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3295 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3295))
{return or__3548__auto____3295;
} else
{var or__3548__auto____3296 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3301 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3297 = coll;

if(cljs.core.truth_(and__3546__auto____3297))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3297;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3298 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3298))
{return or__3548__auto____3298;
} else
{var or__3548__auto____3299 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3300.call(this,coll,f);
case  3 :
return _reduce__3301.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3303 = o;

if(cljs.core.truth_(and__3546__auto____3303))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3303;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3304 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3304))
{return or__3548__auto____3304;
} else
{var or__3548__auto____3305 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3305))
{return or__3548__auto____3305;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3306 = o;

if(cljs.core.truth_(and__3546__auto____3306))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3306;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3307 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3307))
{return or__3548__auto____3307;
} else
{var or__3548__auto____3308 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3308))
{return or__3548__auto____3308;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3309 = o;

if(cljs.core.truth_(and__3546__auto____3309))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3309;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3310 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3310))
{return or__3548__auto____3310;
} else
{var or__3548__auto____3311 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3311))
{return or__3548__auto____3311;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3312 = o;

if(cljs.core.truth_(and__3546__auto____3312))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3312;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3313 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3313))
{return or__3548__auto____3313;
} else
{var or__3548__auto____3314 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3314))
{return or__3548__auto____3314;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3315 = d;

if(cljs.core.truth_(and__3546__auto____3315))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3315;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3316 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3316))
{return or__3548__auto____3316;
} else
{var or__3548__auto____3317 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3317))
{return or__3548__auto____3317;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3318 = this$;

if(cljs.core.truth_(and__3546__auto____3318))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3318;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3319 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3319))
{return or__3548__auto____3319;
} else
{var or__3548__auto____3320 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3320))
{return or__3548__auto____3320;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3321 = this$;

if(cljs.core.truth_(and__3546__auto____3321))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3321;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3322 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3322))
{return or__3548__auto____3322;
} else
{var or__3548__auto____3323 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3323))
{return or__3548__auto____3323;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3324 = this$;

if(cljs.core.truth_(and__3546__auto____3324))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3324;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3325 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3325))
{return or__3548__auto____3325;
} else
{var or__3548__auto____3326 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3326))
{return or__3548__auto____3326;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3327 = null;
var G__3327__3328 = (function (o,k){
return null;
});
var G__3327__3329 = (function (o,k,not_found){
return not_found;
});
G__3327 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3327__3328.call(this,o,k);
case  3 :
return G__3327__3329.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3327;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3331 = null;
var G__3331__3332 = (function (_,f){
return f.call(null);
});
var G__3331__3333 = (function (_,f,start){
return start;
});
G__3331 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3331__3332.call(this,_,f);
case  3 :
return G__3331__3333.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3331;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3335 = null;
var G__3335__3336 = (function (_,n){
return null;
});
var G__3335__3337 = (function (_,n,not_found){
return not_found;
});
G__3335 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3335__3336.call(this,_,n);
case  3 :
return G__3335__3337.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3335;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3345 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3339 = cljs.core._nth.call(null,cicoll,0);
var n__3340 = 1;

while(true){
if(cljs.core.truth_((n__3340 < cljs.core._count.call(null,cicoll))))
{{
var G__3349 = f.call(null,val__3339,cljs.core._nth.call(null,cicoll,n__3340));
var G__3350 = (n__3340 + 1);
val__3339 = G__3349;
n__3340 = G__3350;
continue;
}
} else
{return val__3339;
}
break;
}
}
});
var ci_reduce__3346 = (function (cicoll,f,val){
var val__3341 = val;
var n__3342 = 0;

while(true){
if(cljs.core.truth_((n__3342 < cljs.core._count.call(null,cicoll))))
{{
var G__3351 = f.call(null,val__3341,cljs.core._nth.call(null,cicoll,n__3342));
var G__3352 = (n__3342 + 1);
val__3341 = G__3351;
n__3342 = G__3352;
continue;
}
} else
{return val__3341;
}
break;
}
});
var ci_reduce__3347 = (function (cicoll,f,val,idx){
var val__3343 = val;
var n__3344 = idx;

while(true){
if(cljs.core.truth_((n__3344 < cljs.core._count.call(null,cicoll))))
{{
var G__3353 = f.call(null,val__3343,cljs.core._nth.call(null,cicoll,n__3344));
var G__3354 = (n__3344 + 1);
val__3343 = G__3353;
n__3344 = G__3354;
continue;
}
} else
{return val__3343;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3345.call(this,cicoll,f);
case  3 :
return ci_reduce__3346.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3347.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3355 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3368 = null;
var G__3368__3369 = (function (_,f){
var this__3356 = this;
return cljs.core.ci_reduce.call(null,this__3356.a,f,(this__3356.a[this__3356.i]),(this__3356.i + 1));
});
var G__3368__3370 = (function (_,f,start){
var this__3357 = this;
return cljs.core.ci_reduce.call(null,this__3357.a,f,start,this__3357.i);
});
G__3368 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3368__3369.call(this,_,f);
case  3 :
return G__3368__3370.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3368;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3358 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3359 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3372 = null;
var G__3372__3373 = (function (coll,n){
var this__3360 = this;
var i__3361 = (n + this__3360.i);

if(cljs.core.truth_((i__3361 < this__3360.a.length)))
{return (this__3360.a[i__3361]);
} else
{return null;
}
});
var G__3372__3374 = (function (coll,n,not_found){
var this__3362 = this;
var i__3363 = (n + this__3362.i);

if(cljs.core.truth_((i__3363 < this__3362.a.length)))
{return (this__3362.a[i__3363]);
} else
{return not_found;
}
});
G__3372 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3372__3373.call(this,coll,n);
case  3 :
return G__3372__3374.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3372;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3364 = this;
return (this__3364.a.length - this__3364.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3365 = this;
return (this__3365.a[this__3365.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3366 = this;
if(cljs.core.truth_(((this__3366.i + 1) < this__3366.a.length)))
{return (new cljs.core.IndexedSeq(this__3366.a,(this__3366.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3367 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3376 = null;
var G__3376__3377 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3376__3378 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3376 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3376__3377.call(this,array,f);
case  3 :
return G__3376__3378.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3376;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3380 = null;
var G__3380__3381 = (function (array,k){
return (array[k]);
});
var G__3380__3382 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3380 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3380__3381.call(this,array,k);
case  3 :
return G__3380__3382.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3380;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3384 = null;
var G__3384__3385 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3384__3386 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3384 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3384__3385.call(this,array,n);
case  3 :
return G__3384__3386.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3384;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3388 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3388))
{var s__3389 = temp__3698__auto____3388;

return cljs.core._first.call(null,s__3389);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3390 = cljs.core.next.call(null,s);
s = G__3390;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3391 = cljs.core.seq.call(null,x);
var n__3392 = 0;

while(true){
if(cljs.core.truth_(s__3391))
{{
var G__3393 = cljs.core.next.call(null,s__3391);
var G__3394 = (n__3392 + 1);
s__3391 = G__3393;
n__3392 = G__3394;
continue;
}
} else
{return n__3392;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3395 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3396 = (function() { 
var G__3398__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3399 = conj.call(null,coll,x);
var G__3400 = cljs.core.first.call(null,xs);
var G__3401 = cljs.core.next.call(null,xs);
coll = G__3399;
x = G__3400;
xs = G__3401;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3398 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3398__delegate.call(this, coll, x, xs);
};
G__3398.cljs$lang$maxFixedArity = 2;
G__3398.cljs$lang$applyTo = (function (arglist__3402){
var coll = cljs.core.first(arglist__3402);
var x = cljs.core.first(cljs.core.next(arglist__3402));
var xs = cljs.core.rest(cljs.core.next(arglist__3402));
return G__3398__delegate.call(this, coll, x, xs);
});
return G__3398;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3395.call(this,coll,x);
default:
return conj__3396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3396.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3403 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3404 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3403.call(this,coll,n);
case  3 :
return nth__3404.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3406 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3407 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3406.call(this,o,k);
case  3 :
return get__3407.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3410 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3411 = (function() { 
var G__3413__delegate = function (coll,k,v,kvs){
while(true){
var ret__3409 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3414 = ret__3409;
var G__3415 = cljs.core.first.call(null,kvs);
var G__3416 = cljs.core.second.call(null,kvs);
var G__3417 = cljs.core.nnext.call(null,kvs);
coll = G__3414;
k = G__3415;
v = G__3416;
kvs = G__3417;
continue;
}
} else
{return ret__3409;
}
break;
}
};
var G__3413 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3413__delegate.call(this, coll, k, v, kvs);
};
G__3413.cljs$lang$maxFixedArity = 3;
G__3413.cljs$lang$applyTo = (function (arglist__3418){
var coll = cljs.core.first(arglist__3418);
var k = cljs.core.first(cljs.core.next(arglist__3418));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3418)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3418)));
return G__3413__delegate.call(this, coll, k, v, kvs);
});
return G__3413;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3410.call(this,coll,k,v);
default:
return assoc__3411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3411.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3420 = (function (coll){
return coll;
});
var dissoc__3421 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3422 = (function() { 
var G__3424__delegate = function (coll,k,ks){
while(true){
var ret__3419 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3425 = ret__3419;
var G__3426 = cljs.core.first.call(null,ks);
var G__3427 = cljs.core.next.call(null,ks);
coll = G__3425;
k = G__3426;
ks = G__3427;
continue;
}
} else
{return ret__3419;
}
break;
}
};
var G__3424 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3424__delegate.call(this, coll, k, ks);
};
G__3424.cljs$lang$maxFixedArity = 2;
G__3424.cljs$lang$applyTo = (function (arglist__3428){
var coll = cljs.core.first(arglist__3428);
var k = cljs.core.first(cljs.core.next(arglist__3428));
var ks = cljs.core.rest(cljs.core.next(arglist__3428));
return G__3424__delegate.call(this, coll, k, ks);
});
return G__3424;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3420.call(this,coll);
case  2 :
return dissoc__3421.call(this,coll,k);
default:
return dissoc__3422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3422.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__450__auto____3429 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3430 = x__450__auto____3429;

if(cljs.core.truth_(and__3546__auto____3430))
{var and__3546__auto____3431 = x__450__auto____3429.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3431))
{return cljs.core.not.call(null,x__450__auto____3429.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3431;
}
} else
{return and__3546__auto____3430;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____3429);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3433 = (function (coll){
return coll;
});
var disj__3434 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3435 = (function() { 
var G__3437__delegate = function (coll,k,ks){
while(true){
var ret__3432 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3438 = ret__3432;
var G__3439 = cljs.core.first.call(null,ks);
var G__3440 = cljs.core.next.call(null,ks);
coll = G__3438;
k = G__3439;
ks = G__3440;
continue;
}
} else
{return ret__3432;
}
break;
}
};
var G__3437 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3437__delegate.call(this, coll, k, ks);
};
G__3437.cljs$lang$maxFixedArity = 2;
G__3437.cljs$lang$applyTo = (function (arglist__3441){
var coll = cljs.core.first(arglist__3441);
var k = cljs.core.first(cljs.core.next(arglist__3441));
var ks = cljs.core.rest(cljs.core.next(arglist__3441));
return G__3437__delegate.call(this, coll, k, ks);
});
return G__3437;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3433.call(this,coll);
case  2 :
return disj__3434.call(this,coll,k);
default:
return disj__3435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3435.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3442 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3443 = x__450__auto____3442;

if(cljs.core.truth_(and__3546__auto____3443))
{var and__3546__auto____3444 = x__450__auto____3442.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3444))
{return cljs.core.not.call(null,x__450__auto____3442.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3444;
}
} else
{return and__3546__auto____3443;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____3442);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3445 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3446 = x__450__auto____3445;

if(cljs.core.truth_(and__3546__auto____3446))
{var and__3546__auto____3447 = x__450__auto____3445.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3447))
{return cljs.core.not.call(null,x__450__auto____3445.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3447;
}
} else
{return and__3546__auto____3446;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____3445);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____3448 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3449 = x__450__auto____3448;

if(cljs.core.truth_(and__3546__auto____3449))
{var and__3546__auto____3450 = x__450__auto____3448.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3450))
{return cljs.core.not.call(null,x__450__auto____3448.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3450;
}
} else
{return and__3546__auto____3449;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____3448);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____3451 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3452 = x__450__auto____3451;

if(cljs.core.truth_(and__3546__auto____3452))
{var and__3546__auto____3453 = x__450__auto____3451.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3453))
{return cljs.core.not.call(null,x__450__auto____3451.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3453;
}
} else
{return and__3546__auto____3452;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____3451);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____3454 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3455 = x__450__auto____3454;

if(cljs.core.truth_(and__3546__auto____3455))
{var and__3546__auto____3456 = x__450__auto____3454.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3456))
{return cljs.core.not.call(null,x__450__auto____3454.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3456;
}
} else
{return and__3546__auto____3455;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____3454);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3457 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3458 = x__450__auto____3457;

if(cljs.core.truth_(and__3546__auto____3458))
{var and__3546__auto____3459 = x__450__auto____3457.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3459))
{return cljs.core.not.call(null,x__450__auto____3457.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3459;
}
} else
{return and__3546__auto____3458;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____3457);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____3460 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3461 = x__450__auto____3460;

if(cljs.core.truth_(and__3546__auto____3461))
{var and__3546__auto____3462 = x__450__auto____3460.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3462))
{return cljs.core.not.call(null,x__450__auto____3460.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3462;
}
} else
{return and__3546__auto____3461;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____3460);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3463 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3463.push(key);
}));
return keys__3463;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__450__auto____3464 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3465 = x__450__auto____3464;

if(cljs.core.truth_(and__3546__auto____3465))
{var and__3546__auto____3466 = x__450__auto____3464.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3466))
{return cljs.core.not.call(null,x__450__auto____3464.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3466;
}
} else
{return and__3546__auto____3465;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____3464);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3467 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3467))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3468 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3468))
{return or__3548__auto____3468;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3467;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3469 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3469))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3469;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3470 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3470))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3470;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3471 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3471))
{return (n == n.toFixed());
} else
{return and__3546__auto____3471;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3472 = coll;

if(cljs.core.truth_(and__3546__auto____3472))
{var and__3546__auto____3473 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3473))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3473;
}
} else
{return and__3546__auto____3472;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3478 = (function (x){
return true;
});
var distinct_QMARK___3479 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3480 = (function() { 
var G__3482__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3474 = cljs.core.set([y,x]);
var xs__3475 = more;

while(true){
var x__3476 = cljs.core.first.call(null,xs__3475);
var etc__3477 = cljs.core.next.call(null,xs__3475);

if(cljs.core.truth_(xs__3475))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3474,x__3476)))
{return false;
} else
{{
var G__3483 = cljs.core.conj.call(null,s__3474,x__3476);
var G__3484 = etc__3477;
s__3474 = G__3483;
xs__3475 = G__3484;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3482 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3482__delegate.call(this, x, y, more);
};
G__3482.cljs$lang$maxFixedArity = 2;
G__3482.cljs$lang$applyTo = (function (arglist__3485){
var x = cljs.core.first(arglist__3485);
var y = cljs.core.first(cljs.core.next(arglist__3485));
var more = cljs.core.rest(cljs.core.next(arglist__3485));
return G__3482__delegate.call(this, x, y, more);
});
return G__3482;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3478.call(this,x);
case  2 :
return distinct_QMARK___3479.call(this,x,y);
default:
return distinct_QMARK___3480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3480.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3486 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3486)))
{return r__3486;
} else
{if(cljs.core.truth_(r__3486))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3488 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3489 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3487 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3487,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3487);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3488.call(this,comp);
case  2 :
return sort__3489.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3491 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3492 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3491.call(this,keyfn,comp);
case  3 :
return sort_by__3492.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3494 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3495 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3494.call(this,f,val);
case  3 :
return reduce__3495.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3501 = (function (f,coll){
var temp__3695__auto____3497 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3497))
{var s__3498 = temp__3695__auto____3497;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3498),cljs.core.next.call(null,s__3498));
} else
{return f.call(null);
}
});
var seq_reduce__3502 = (function (f,val,coll){
var val__3499 = val;
var coll__3500 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3500))
{{
var G__3504 = f.call(null,val__3499,cljs.core.first.call(null,coll__3500));
var G__3505 = cljs.core.next.call(null,coll__3500);
val__3499 = G__3504;
coll__3500 = G__3505;
continue;
}
} else
{return val__3499;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3501.call(this,f,val);
case  3 :
return seq_reduce__3502.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3506 = null;
var G__3506__3507 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3506__3508 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3506 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3506__3507.call(this,coll,f);
case  3 :
return G__3506__3508.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3506;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3510 = (function (){
return 0;
});
var _PLUS___3511 = (function (x){
return x;
});
var _PLUS___3512 = (function (x,y){
return (x + y);
});
var _PLUS___3513 = (function() { 
var G__3515__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3515 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3515__delegate.call(this, x, y, more);
};
G__3515.cljs$lang$maxFixedArity = 2;
G__3515.cljs$lang$applyTo = (function (arglist__3516){
var x = cljs.core.first(arglist__3516);
var y = cljs.core.first(cljs.core.next(arglist__3516));
var more = cljs.core.rest(cljs.core.next(arglist__3516));
return G__3515__delegate.call(this, x, y, more);
});
return G__3515;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3510.call(this);
case  1 :
return _PLUS___3511.call(this,x);
case  2 :
return _PLUS___3512.call(this,x,y);
default:
return _PLUS___3513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3513.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3517 = (function (x){
return (- x);
});
var ___3518 = (function (x,y){
return (x - y);
});
var ___3519 = (function() { 
var G__3521__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3521 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3521__delegate.call(this, x, y, more);
};
G__3521.cljs$lang$maxFixedArity = 2;
G__3521.cljs$lang$applyTo = (function (arglist__3522){
var x = cljs.core.first(arglist__3522);
var y = cljs.core.first(cljs.core.next(arglist__3522));
var more = cljs.core.rest(cljs.core.next(arglist__3522));
return G__3521__delegate.call(this, x, y, more);
});
return G__3521;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3517.call(this,x);
case  2 :
return ___3518.call(this,x,y);
default:
return ___3519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3519.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3523 = (function (){
return 1;
});
var _STAR___3524 = (function (x){
return x;
});
var _STAR___3525 = (function (x,y){
return (x * y);
});
var _STAR___3526 = (function() { 
var G__3528__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3528 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3528__delegate.call(this, x, y, more);
};
G__3528.cljs$lang$maxFixedArity = 2;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var x = cljs.core.first(arglist__3529);
var y = cljs.core.first(cljs.core.next(arglist__3529));
var more = cljs.core.rest(cljs.core.next(arglist__3529));
return G__3528__delegate.call(this, x, y, more);
});
return G__3528;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3523.call(this);
case  1 :
return _STAR___3524.call(this,x);
case  2 :
return _STAR___3525.call(this,x,y);
default:
return _STAR___3526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3526.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3530 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3531 = (function (x,y){
return (x / y);
});
var _SLASH___3532 = (function() { 
var G__3534__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3534 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3534__delegate.call(this, x, y, more);
};
G__3534.cljs$lang$maxFixedArity = 2;
G__3534.cljs$lang$applyTo = (function (arglist__3535){
var x = cljs.core.first(arglist__3535);
var y = cljs.core.first(cljs.core.next(arglist__3535));
var more = cljs.core.rest(cljs.core.next(arglist__3535));
return G__3534__delegate.call(this, x, y, more);
});
return G__3534;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3530.call(this,x);
case  2 :
return _SLASH___3531.call(this,x,y);
default:
return _SLASH___3532.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3532.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3536 = (function (x){
return true;
});
var _LT___3537 = (function (x,y){
return (x < y);
});
var _LT___3538 = (function() { 
var G__3540__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3541 = y;
var G__3542 = cljs.core.first.call(null,more);
var G__3543 = cljs.core.next.call(null,more);
x = G__3541;
y = G__3542;
more = G__3543;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3540 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3540__delegate.call(this, x, y, more);
};
G__3540.cljs$lang$maxFixedArity = 2;
G__3540.cljs$lang$applyTo = (function (arglist__3544){
var x = cljs.core.first(arglist__3544);
var y = cljs.core.first(cljs.core.next(arglist__3544));
var more = cljs.core.rest(cljs.core.next(arglist__3544));
return G__3540__delegate.call(this, x, y, more);
});
return G__3540;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3536.call(this,x);
case  2 :
return _LT___3537.call(this,x,y);
default:
return _LT___3538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3538.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3545 = (function (x){
return true;
});
var _LT__EQ___3546 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3547 = (function() { 
var G__3549__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3550 = y;
var G__3551 = cljs.core.first.call(null,more);
var G__3552 = cljs.core.next.call(null,more);
x = G__3550;
y = G__3551;
more = G__3552;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3549 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3549__delegate.call(this, x, y, more);
};
G__3549.cljs$lang$maxFixedArity = 2;
G__3549.cljs$lang$applyTo = (function (arglist__3553){
var x = cljs.core.first(arglist__3553);
var y = cljs.core.first(cljs.core.next(arglist__3553));
var more = cljs.core.rest(cljs.core.next(arglist__3553));
return G__3549__delegate.call(this, x, y, more);
});
return G__3549;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3545.call(this,x);
case  2 :
return _LT__EQ___3546.call(this,x,y);
default:
return _LT__EQ___3547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3547.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3554 = (function (x){
return true;
});
var _GT___3555 = (function (x,y){
return (x > y);
});
var _GT___3556 = (function() { 
var G__3558__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3559 = y;
var G__3560 = cljs.core.first.call(null,more);
var G__3561 = cljs.core.next.call(null,more);
x = G__3559;
y = G__3560;
more = G__3561;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3558 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3558__delegate.call(this, x, y, more);
};
G__3558.cljs$lang$maxFixedArity = 2;
G__3558.cljs$lang$applyTo = (function (arglist__3562){
var x = cljs.core.first(arglist__3562);
var y = cljs.core.first(cljs.core.next(arglist__3562));
var more = cljs.core.rest(cljs.core.next(arglist__3562));
return G__3558__delegate.call(this, x, y, more);
});
return G__3558;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3554.call(this,x);
case  2 :
return _GT___3555.call(this,x,y);
default:
return _GT___3556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3556.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3563 = (function (x){
return true;
});
var _GT__EQ___3564 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3565 = (function() { 
var G__3567__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3568 = y;
var G__3569 = cljs.core.first.call(null,more);
var G__3570 = cljs.core.next.call(null,more);
x = G__3568;
y = G__3569;
more = G__3570;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3567 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3567__delegate.call(this, x, y, more);
};
G__3567.cljs$lang$maxFixedArity = 2;
G__3567.cljs$lang$applyTo = (function (arglist__3571){
var x = cljs.core.first(arglist__3571);
var y = cljs.core.first(cljs.core.next(arglist__3571));
var more = cljs.core.rest(cljs.core.next(arglist__3571));
return G__3567__delegate.call(this, x, y, more);
});
return G__3567;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3563.call(this,x);
case  2 :
return _GT__EQ___3564.call(this,x,y);
default:
return _GT__EQ___3565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3565.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3572 = (function (x){
return x;
});
var max__3573 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3574 = (function() { 
var G__3576__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3576 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3576__delegate.call(this, x, y, more);
};
G__3576.cljs$lang$maxFixedArity = 2;
G__3576.cljs$lang$applyTo = (function (arglist__3577){
var x = cljs.core.first(arglist__3577);
var y = cljs.core.first(cljs.core.next(arglist__3577));
var more = cljs.core.rest(cljs.core.next(arglist__3577));
return G__3576__delegate.call(this, x, y, more);
});
return G__3576;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3572.call(this,x);
case  2 :
return max__3573.call(this,x,y);
default:
return max__3574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3574.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3578 = (function (x){
return x;
});
var min__3579 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3580 = (function() { 
var G__3582__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3582 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3582__delegate.call(this, x, y, more);
};
G__3582.cljs$lang$maxFixedArity = 2;
G__3582.cljs$lang$applyTo = (function (arglist__3583){
var x = cljs.core.first(arglist__3583);
var y = cljs.core.first(cljs.core.next(arglist__3583));
var more = cljs.core.rest(cljs.core.next(arglist__3583));
return G__3582__delegate.call(this, x, y, more);
});
return G__3582;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3578.call(this,x);
case  2 :
return min__3579.call(this,x,y);
default:
return min__3580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3580.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3584 = (n % d);

return cljs.core.fix.call(null,((n - rem__3584) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3585 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3585));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3586 = (function (){
return Math.random.call(null);
});
var rand__3587 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3586.call(this);
case  1 :
return rand__3587.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3589 = (function (x){
return true;
});
var _EQ__EQ___3590 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3591 = (function() { 
var G__3593__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3594 = y;
var G__3595 = cljs.core.first.call(null,more);
var G__3596 = cljs.core.next.call(null,more);
x = G__3594;
y = G__3595;
more = G__3596;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3593 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3593__delegate.call(this, x, y, more);
};
G__3593.cljs$lang$maxFixedArity = 2;
G__3593.cljs$lang$applyTo = (function (arglist__3597){
var x = cljs.core.first(arglist__3597);
var y = cljs.core.first(cljs.core.next(arglist__3597));
var more = cljs.core.rest(cljs.core.next(arglist__3597));
return G__3593__delegate.call(this, x, y, more);
});
return G__3593;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3589.call(this,x);
case  2 :
return _EQ__EQ___3590.call(this,x,y);
default:
return _EQ__EQ___3591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3591.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3598 = n;
var xs__3599 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3600 = xs__3599;

if(cljs.core.truth_(and__3546__auto____3600))
{return (n__3598 > 0);
} else
{return and__3546__auto____3600;
}
})()))
{{
var G__3601 = (n__3598 - 1);
var G__3602 = cljs.core.next.call(null,xs__3599);
n__3598 = G__3601;
xs__3599 = G__3602;
continue;
}
} else
{return xs__3599;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3607 = null;
var G__3607__3608 = (function (coll,n){
var temp__3695__auto____3603 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3603))
{var xs__3604 = temp__3695__auto____3603;

return cljs.core.first.call(null,xs__3604);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3607__3609 = (function (coll,n,not_found){
var temp__3695__auto____3605 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3605))
{var xs__3606 = temp__3695__auto____3605;

return cljs.core.first.call(null,xs__3606);
} else
{return not_found;
}
});
G__3607 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3607__3608.call(this,coll,n);
case  3 :
return G__3607__3609.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3607;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3611 = (function (){
return "";
});
var str_STAR___3612 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3613 = (function() { 
var G__3615__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3616 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3617 = cljs.core.next.call(null,more);
sb = G__3616;
more = G__3617;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3615 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3615__delegate.call(this, x, ys);
};
G__3615.cljs$lang$maxFixedArity = 1;
G__3615.cljs$lang$applyTo = (function (arglist__3618){
var x = cljs.core.first(arglist__3618);
var ys = cljs.core.rest(arglist__3618);
return G__3615__delegate.call(this, x, ys);
});
return G__3615;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3611.call(this);
case  1 :
return str_STAR___3612.call(this,x);
default:
return str_STAR___3613.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3613.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3619 = (function (){
return "";
});
var str__3620 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3621 = (function() { 
var G__3623__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3623 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3623__delegate.call(this, x, ys);
};
G__3623.cljs$lang$maxFixedArity = 1;
G__3623.cljs$lang$applyTo = (function (arglist__3624){
var x = cljs.core.first(arglist__3624);
var ys = cljs.core.rest(arglist__3624);
return G__3623__delegate.call(this, x, ys);
});
return G__3623;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3619.call(this);
case  1 :
return str__3620.call(this,x);
default:
return str__3621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3621.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3625 = (function (s,start){
return s.substring(start);
});
var subs__3626 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3625.call(this,s,start);
case  3 :
return subs__3626.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3628 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__3629 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3628.call(this,ns);
case  2 :
return symbol__3629.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3631 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__3632 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3631.call(this,ns);
case  2 :
return keyword__3632.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3634 = cljs.core.seq.call(null,x);
var ys__3635 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3634 === null)))
{return (ys__3635 === null);
} else
{if(cljs.core.truth_((ys__3635 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3634),cljs.core.first.call(null,ys__3635))))
{{
var G__3636 = cljs.core.next.call(null,xs__3634);
var G__3637 = cljs.core.next.call(null,ys__3635);
xs__3634 = G__3636;
ys__3635 = G__3637;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3638_SHARP_,p2__3639_SHARP_){
return cljs.core.hash_combine.call(null,p1__3638_SHARP_,cljs.core.hash.call(null,p2__3639_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3640__3641 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3640__3641))
{var G__3643__3645 = cljs.core.first.call(null,G__3640__3641);
var vec__3644__3646 = G__3643__3645;
var key_name__3647 = cljs.core.nth.call(null,vec__3644__3646,0,null);
var f__3648 = cljs.core.nth.call(null,vec__3644__3646,1,null);
var G__3640__3649 = G__3640__3641;

var G__3643__3650 = G__3643__3645;
var G__3640__3651 = G__3640__3649;

while(true){
var vec__3652__3653 = G__3643__3650;
var key_name__3654 = cljs.core.nth.call(null,vec__3652__3653,0,null);
var f__3655 = cljs.core.nth.call(null,vec__3652__3653,1,null);
var G__3640__3656 = G__3640__3651;

var str_name__3657 = cljs.core.name.call(null,key_name__3654);

obj[str_name__3657] = f__3655;
var temp__3698__auto____3658 = cljs.core.next.call(null,G__3640__3656);

if(cljs.core.truth_(temp__3698__auto____3658))
{var G__3640__3659 = temp__3698__auto____3658;

{
var G__3660 = cljs.core.first.call(null,G__3640__3659);
var G__3661 = G__3640__3659;
G__3643__3650 = G__3660;
G__3640__3651 = G__3661;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3662 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3663 = this;
return (new cljs.core.List(this__3663.meta,o,coll,(this__3663.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3664 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3665 = this;
return this__3665.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3666 = this;
return this__3666.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3667 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3668 = this;
return this__3668.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3669 = this;
return this__3669.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3670 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3671 = this;
return (new cljs.core.List(meta,this__3671.first,this__3671.rest,this__3671.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3672 = this;
return this__3672.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3673 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3674 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3675 = this;
return (new cljs.core.List(this__3675.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3676 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3677 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3678 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3679 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3680 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3681 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3682 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3683 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3684 = this;
return this__3684.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3685 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3686){
var items = cljs.core.seq( arglist__3686 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3687 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3688 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3689 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3690 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3690.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3691 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3692 = this;
return this__3692.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3693 = this;
if(cljs.core.truth_((this__3693.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3693.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3694 = this;
return this__3694.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3695 = this;
return (new cljs.core.Cons(meta,this__3695.first,this__3695.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3696 = null;
var G__3696__3697 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3696__3698 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3696 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3696__3697.call(this,string,f);
case  3 :
return G__3696__3698.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3696;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3700 = null;
var G__3700__3701 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3700__3702 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3700 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3700__3701.call(this,string,k);
case  3 :
return G__3700__3702.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3700;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3704 = null;
var G__3704__3705 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3704__3706 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3704 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3704__3705.call(this,string,n);
case  3 :
return G__3704__3706.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3704;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3714 = null;
var G__3714__3715 = (function (tsym3708,coll){
var tsym3708__3710 = this;

var this$__3711 = tsym3708__3710;

return cljs.core.get.call(null,coll,this$__3711.toString());
});
var G__3714__3716 = (function (tsym3709,coll,not_found){
var tsym3709__3712 = this;

var this$__3713 = tsym3709__3712;

return cljs.core.get.call(null,coll,this$__3713.toString(),not_found);
});
G__3714 = function(tsym3709,coll,not_found){
switch(arguments.length){
case  2 :
return G__3714__3715.call(this,tsym3709,coll);
case  3 :
return G__3714__3716.call(this,tsym3709,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3714;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3718 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3718;
} else
{lazy_seq.x = x__3718.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3719 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3720 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3721 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3722 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3722.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3723 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3724 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3725 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3726 = this;
return this__3726.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3727 = this;
return (new cljs.core.LazySeq(meta,this__3727.realized,this__3727.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3728 = cljs.core.array.call(null);

var s__3729 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3729)))
{ary__3728.push(cljs.core.first.call(null,s__3729));
{
var G__3730 = cljs.core.next.call(null,s__3729);
s__3729 = G__3730;
continue;
}
} else
{return ary__3728;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3731 = s;
var i__3732 = n;
var sum__3733 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3734 = (i__3732 > 0);

if(cljs.core.truth_(and__3546__auto____3734))
{return cljs.core.seq.call(null,s__3731);
} else
{return and__3546__auto____3734;
}
})()))
{{
var G__3735 = cljs.core.next.call(null,s__3731);
var G__3736 = (i__3732 - 1);
var G__3737 = (sum__3733 + 1);
s__3731 = G__3735;
i__3732 = G__3736;
sum__3733 = G__3737;
continue;
}
} else
{return sum__3733;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3741 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3742 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3743 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3738 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3738))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3738),concat.call(null,cljs.core.rest.call(null,s__3738),y));
} else
{return y;
}
})));
});
var concat__3744 = (function() { 
var G__3746__delegate = function (x,y,zs){
var cat__3740 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3739 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3739))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3739),cat.call(null,cljs.core.rest.call(null,xys__3739),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3740.call(null,concat.call(null,x,y),zs);
};
var G__3746 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3746__delegate.call(this, x, y, zs);
};
G__3746.cljs$lang$maxFixedArity = 2;
G__3746.cljs$lang$applyTo = (function (arglist__3747){
var x = cljs.core.first(arglist__3747);
var y = cljs.core.first(cljs.core.next(arglist__3747));
var zs = cljs.core.rest(cljs.core.next(arglist__3747));
return G__3746__delegate.call(this, x, y, zs);
});
return G__3746;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3741.call(this);
case  1 :
return concat__3742.call(this,x);
case  2 :
return concat__3743.call(this,x,y);
default:
return concat__3744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3744.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3748 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3749 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3750 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3751 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3752 = (function() { 
var G__3754__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3754 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3754__delegate.call(this, a, b, c, d, more);
};
G__3754.cljs$lang$maxFixedArity = 4;
G__3754.cljs$lang$applyTo = (function (arglist__3755){
var a = cljs.core.first(arglist__3755);
var b = cljs.core.first(cljs.core.next(arglist__3755));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3755)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3755))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3755))));
return G__3754__delegate.call(this, a, b, c, d, more);
});
return G__3754;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3748.call(this,a);
case  2 :
return list_STAR___3749.call(this,a,b);
case  3 :
return list_STAR___3750.call(this,a,b,c);
case  4 :
return list_STAR___3751.call(this,a,b,c,d);
default:
return list_STAR___3752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3752.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3765 = (function (f,args){
var fixed_arity__3756 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3756 + 1)) <= fixed_arity__3756)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3766 = (function (f,x,args){
var arglist__3757 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3758 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3757,fixed_arity__3758) <= fixed_arity__3758)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3757));
} else
{return f.cljs$lang$applyTo(arglist__3757);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3757));
}
});
var apply__3767 = (function (f,x,y,args){
var arglist__3759 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3760 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3759,fixed_arity__3760) <= fixed_arity__3760)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3759));
} else
{return f.cljs$lang$applyTo(arglist__3759);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3759));
}
});
var apply__3768 = (function (f,x,y,z,args){
var arglist__3761 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3762 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3761,fixed_arity__3762) <= fixed_arity__3762)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3761));
} else
{return f.cljs$lang$applyTo(arglist__3761);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3761));
}
});
var apply__3769 = (function() { 
var G__3771__delegate = function (f,a,b,c,d,args){
var arglist__3763 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3764 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3763,fixed_arity__3764) <= fixed_arity__3764)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3763));
} else
{return f.cljs$lang$applyTo(arglist__3763);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3763));
}
};
var G__3771 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3771__delegate.call(this, f, a, b, c, d, args);
};
G__3771.cljs$lang$maxFixedArity = 5;
G__3771.cljs$lang$applyTo = (function (arglist__3772){
var f = cljs.core.first(arglist__3772);
var a = cljs.core.first(cljs.core.next(arglist__3772));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3772)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3772))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3772)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3772)))));
return G__3771__delegate.call(this, f, a, b, c, d, args);
});
return G__3771;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3765.call(this,f,a);
case  3 :
return apply__3766.call(this,f,a,b);
case  4 :
return apply__3767.call(this,f,a,b,c);
case  5 :
return apply__3768.call(this,f,a,b,c,d);
default:
return apply__3769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3769.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3773){
var obj = cljs.core.first(arglist__3773);
var f = cljs.core.first(cljs.core.next(arglist__3773));
var args = cljs.core.rest(cljs.core.next(arglist__3773));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3774 = (function (x){
return false;
});
var not_EQ___3775 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3776 = (function() { 
var G__3778__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3778__delegate.call(this, x, y, more);
};
G__3778.cljs$lang$maxFixedArity = 2;
G__3778.cljs$lang$applyTo = (function (arglist__3779){
var x = cljs.core.first(arglist__3779);
var y = cljs.core.first(cljs.core.next(arglist__3779));
var more = cljs.core.rest(cljs.core.next(arglist__3779));
return G__3778__delegate.call(this, x, y, more);
});
return G__3778;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3774.call(this,x);
case  2 :
return not_EQ___3775.call(this,x,y);
default:
return not_EQ___3776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3776.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3780 = pred;
var G__3781 = cljs.core.next.call(null,coll);
pred = G__3780;
coll = G__3781;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3782 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3782))
{return or__3548__auto____3782;
} else
{{
var G__3783 = pred;
var G__3784 = cljs.core.next.call(null,coll);
pred = G__3783;
coll = G__3784;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3785 = null;
var G__3785__3786 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3785__3787 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3785__3788 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3785__3789 = (function() { 
var G__3791__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3791 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3791__delegate.call(this, x, y, zs);
};
G__3791.cljs$lang$maxFixedArity = 2;
G__3791.cljs$lang$applyTo = (function (arglist__3792){
var x = cljs.core.first(arglist__3792);
var y = cljs.core.first(cljs.core.next(arglist__3792));
var zs = cljs.core.rest(cljs.core.next(arglist__3792));
return G__3791__delegate.call(this, x, y, zs);
});
return G__3791;
})()
;
G__3785 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3785__3786.call(this);
case  1 :
return G__3785__3787.call(this,x);
case  2 :
return G__3785__3788.call(this,x,y);
default:
return G__3785__3789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3785.cljs$lang$maxFixedArity = 2;
G__3785.cljs$lang$applyTo = G__3785__3789.cljs$lang$applyTo;
return G__3785;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3793__delegate = function (args){
return x;
};
var G__3793 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3793__delegate.call(this, args);
};
G__3793.cljs$lang$maxFixedArity = 0;
G__3793.cljs$lang$applyTo = (function (arglist__3794){
var args = cljs.core.seq( arglist__3794 );;
return G__3793__delegate.call(this, args);
});
return G__3793;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3798 = (function (){
return cljs.core.identity;
});
var comp__3799 = (function (f){
return f;
});
var comp__3800 = (function (f,g){
return (function() {
var G__3804 = null;
var G__3804__3805 = (function (){
return f.call(null,g.call(null));
});
var G__3804__3806 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3804__3807 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3804__3808 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3804__3809 = (function() { 
var G__3811__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3811 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3811__delegate.call(this, x, y, z, args);
};
G__3811.cljs$lang$maxFixedArity = 3;
G__3811.cljs$lang$applyTo = (function (arglist__3812){
var x = cljs.core.first(arglist__3812);
var y = cljs.core.first(cljs.core.next(arglist__3812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3812)));
return G__3811__delegate.call(this, x, y, z, args);
});
return G__3811;
})()
;
G__3804 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3804__3805.call(this);
case  1 :
return G__3804__3806.call(this,x);
case  2 :
return G__3804__3807.call(this,x,y);
case  3 :
return G__3804__3808.call(this,x,y,z);
default:
return G__3804__3809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3804.cljs$lang$maxFixedArity = 3;
G__3804.cljs$lang$applyTo = G__3804__3809.cljs$lang$applyTo;
return G__3804;
})()
});
var comp__3801 = (function (f,g,h){
return (function() {
var G__3813 = null;
var G__3813__3814 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3813__3815 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3813__3816 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3813__3817 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3813__3818 = (function() { 
var G__3820__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3820 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3820__delegate.call(this, x, y, z, args);
};
G__3820.cljs$lang$maxFixedArity = 3;
G__3820.cljs$lang$applyTo = (function (arglist__3821){
var x = cljs.core.first(arglist__3821);
var y = cljs.core.first(cljs.core.next(arglist__3821));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3821)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3821)));
return G__3820__delegate.call(this, x, y, z, args);
});
return G__3820;
})()
;
G__3813 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3813__3814.call(this);
case  1 :
return G__3813__3815.call(this,x);
case  2 :
return G__3813__3816.call(this,x,y);
case  3 :
return G__3813__3817.call(this,x,y,z);
default:
return G__3813__3818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3813.cljs$lang$maxFixedArity = 3;
G__3813.cljs$lang$applyTo = G__3813__3818.cljs$lang$applyTo;
return G__3813;
})()
});
var comp__3802 = (function() { 
var G__3822__delegate = function (f1,f2,f3,fs){
var fs__3795 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3823__delegate = function (args){
var ret__3796 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3795),args);
var fs__3797 = cljs.core.next.call(null,fs__3795);

while(true){
if(cljs.core.truth_(fs__3797))
{{
var G__3824 = cljs.core.first.call(null,fs__3797).call(null,ret__3796);
var G__3825 = cljs.core.next.call(null,fs__3797);
ret__3796 = G__3824;
fs__3797 = G__3825;
continue;
}
} else
{return ret__3796;
}
break;
}
};
var G__3823 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3823__delegate.call(this, args);
};
G__3823.cljs$lang$maxFixedArity = 0;
G__3823.cljs$lang$applyTo = (function (arglist__3826){
var args = cljs.core.seq( arglist__3826 );;
return G__3823__delegate.call(this, args);
});
return G__3823;
})()
;
};
var G__3822 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3822__delegate.call(this, f1, f2, f3, fs);
};
G__3822.cljs$lang$maxFixedArity = 3;
G__3822.cljs$lang$applyTo = (function (arglist__3827){
var f1 = cljs.core.first(arglist__3827);
var f2 = cljs.core.first(cljs.core.next(arglist__3827));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3827)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3827)));
return G__3822__delegate.call(this, f1, f2, f3, fs);
});
return G__3822;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3798.call(this);
case  1 :
return comp__3799.call(this,f1);
case  2 :
return comp__3800.call(this,f1,f2);
case  3 :
return comp__3801.call(this,f1,f2,f3);
default:
return comp__3802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3802.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3828 = (function (f,arg1){
return (function() { 
var G__3833__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3833 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3833__delegate.call(this, args);
};
G__3833.cljs$lang$maxFixedArity = 0;
G__3833.cljs$lang$applyTo = (function (arglist__3834){
var args = cljs.core.seq( arglist__3834 );;
return G__3833__delegate.call(this, args);
});
return G__3833;
})()
;
});
var partial__3829 = (function (f,arg1,arg2){
return (function() { 
var G__3835__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3835 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3835__delegate.call(this, args);
};
G__3835.cljs$lang$maxFixedArity = 0;
G__3835.cljs$lang$applyTo = (function (arglist__3836){
var args = cljs.core.seq( arglist__3836 );;
return G__3835__delegate.call(this, args);
});
return G__3835;
})()
;
});
var partial__3830 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3837__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3837 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3837__delegate.call(this, args);
};
G__3837.cljs$lang$maxFixedArity = 0;
G__3837.cljs$lang$applyTo = (function (arglist__3838){
var args = cljs.core.seq( arglist__3838 );;
return G__3837__delegate.call(this, args);
});
return G__3837;
})()
;
});
var partial__3831 = (function() { 
var G__3839__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3840__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3840 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3840__delegate.call(this, args);
};
G__3840.cljs$lang$maxFixedArity = 0;
G__3840.cljs$lang$applyTo = (function (arglist__3841){
var args = cljs.core.seq( arglist__3841 );;
return G__3840__delegate.call(this, args);
});
return G__3840;
})()
;
};
var G__3839 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3839__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3839.cljs$lang$maxFixedArity = 4;
G__3839.cljs$lang$applyTo = (function (arglist__3842){
var f = cljs.core.first(arglist__3842);
var arg1 = cljs.core.first(cljs.core.next(arglist__3842));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3842)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3842))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3842))));
return G__3839__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3839;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3828.call(this,f,arg1);
case  3 :
return partial__3829.call(this,f,arg1,arg2);
case  4 :
return partial__3830.call(this,f,arg1,arg2,arg3);
default:
return partial__3831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3831.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3843 = (function (f,x){
return (function() {
var G__3847 = null;
var G__3847__3848 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3847__3849 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3847__3850 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3847__3851 = (function() { 
var G__3853__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3853 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3853__delegate.call(this, a, b, c, ds);
};
G__3853.cljs$lang$maxFixedArity = 3;
G__3853.cljs$lang$applyTo = (function (arglist__3854){
var a = cljs.core.first(arglist__3854);
var b = cljs.core.first(cljs.core.next(arglist__3854));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3854)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3854)));
return G__3853__delegate.call(this, a, b, c, ds);
});
return G__3853;
})()
;
G__3847 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3847__3848.call(this,a);
case  2 :
return G__3847__3849.call(this,a,b);
case  3 :
return G__3847__3850.call(this,a,b,c);
default:
return G__3847__3851.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3847.cljs$lang$maxFixedArity = 3;
G__3847.cljs$lang$applyTo = G__3847__3851.cljs$lang$applyTo;
return G__3847;
})()
});
var fnil__3844 = (function (f,x,y){
return (function() {
var G__3855 = null;
var G__3855__3856 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3855__3857 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3855__3858 = (function() { 
var G__3860__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3860 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3860__delegate.call(this, a, b, c, ds);
};
G__3860.cljs$lang$maxFixedArity = 3;
G__3860.cljs$lang$applyTo = (function (arglist__3861){
var a = cljs.core.first(arglist__3861);
var b = cljs.core.first(cljs.core.next(arglist__3861));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3861)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3861)));
return G__3860__delegate.call(this, a, b, c, ds);
});
return G__3860;
})()
;
G__3855 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3855__3856.call(this,a,b);
case  3 :
return G__3855__3857.call(this,a,b,c);
default:
return G__3855__3858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3855.cljs$lang$maxFixedArity = 3;
G__3855.cljs$lang$applyTo = G__3855__3858.cljs$lang$applyTo;
return G__3855;
})()
});
var fnil__3845 = (function (f,x,y,z){
return (function() {
var G__3862 = null;
var G__3862__3863 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3862__3864 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3862__3865 = (function() { 
var G__3867__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3867 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3867__delegate.call(this, a, b, c, ds);
};
G__3867.cljs$lang$maxFixedArity = 3;
G__3867.cljs$lang$applyTo = (function (arglist__3868){
var a = cljs.core.first(arglist__3868);
var b = cljs.core.first(cljs.core.next(arglist__3868));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3868)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3868)));
return G__3867__delegate.call(this, a, b, c, ds);
});
return G__3867;
})()
;
G__3862 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3862__3863.call(this,a,b);
case  3 :
return G__3862__3864.call(this,a,b,c);
default:
return G__3862__3865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3862.cljs$lang$maxFixedArity = 3;
G__3862.cljs$lang$applyTo = G__3862__3865.cljs$lang$applyTo;
return G__3862;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3843.call(this,f,x);
case  3 :
return fnil__3844.call(this,f,x,y);
case  4 :
return fnil__3845.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3871 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3869 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3869))
{var s__3870 = temp__3698__auto____3869;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3870)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3870)));
} else
{return null;
}
})));
});

return mapi__3871.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3872 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3872))
{var s__3873 = temp__3698__auto____3872;

var x__3874 = f.call(null,cljs.core.first.call(null,s__3873));

if(cljs.core.truth_((x__3874 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3873));
} else
{return cljs.core.cons.call(null,x__3874,keep.call(null,f,cljs.core.rest.call(null,s__3873)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3884 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3881 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3881))
{var s__3882 = temp__3698__auto____3881;

var x__3883 = f.call(null,idx,cljs.core.first.call(null,s__3882));

if(cljs.core.truth_((x__3883 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3882));
} else
{return cljs.core.cons.call(null,x__3883,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3882)));
}
} else
{return null;
}
})));
});

return keepi__3884.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3929 = (function (p){
return (function() {
var ep1 = null;
var ep1__3934 = (function (){
return true;
});
var ep1__3935 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3936 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3891 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3891))
{return p.call(null,y);
} else
{return and__3546__auto____3891;
}
})());
});
var ep1__3937 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3892 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3892))
{var and__3546__auto____3893 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3893))
{return p.call(null,z);
} else
{return and__3546__auto____3893;
}
} else
{return and__3546__auto____3892;
}
})());
});
var ep1__3938 = (function() { 
var G__3940__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3894 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3894))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3894;
}
})());
};
var G__3940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3940__delegate.call(this, x, y, z, args);
};
G__3940.cljs$lang$maxFixedArity = 3;
G__3940.cljs$lang$applyTo = (function (arglist__3941){
var x = cljs.core.first(arglist__3941);
var y = cljs.core.first(cljs.core.next(arglist__3941));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3941)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3941)));
return G__3940__delegate.call(this, x, y, z, args);
});
return G__3940;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3934.call(this);
case  1 :
return ep1__3935.call(this,x);
case  2 :
return ep1__3936.call(this,x,y);
case  3 :
return ep1__3937.call(this,x,y,z);
default:
return ep1__3938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3938.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3930 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3942 = (function (){
return true;
});
var ep2__3943 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3895 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3895))
{return p2.call(null,x);
} else
{return and__3546__auto____3895;
}
})());
});
var ep2__3944 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3896 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3896))
{var and__3546__auto____3897 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3897))
{var and__3546__auto____3898 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3898))
{return p2.call(null,y);
} else
{return and__3546__auto____3898;
}
} else
{return and__3546__auto____3897;
}
} else
{return and__3546__auto____3896;
}
})());
});
var ep2__3945 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3899 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3899))
{var and__3546__auto____3900 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3900))
{var and__3546__auto____3901 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3901))
{var and__3546__auto____3902 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3902))
{var and__3546__auto____3903 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3903))
{return p2.call(null,z);
} else
{return and__3546__auto____3903;
}
} else
{return and__3546__auto____3902;
}
} else
{return and__3546__auto____3901;
}
} else
{return and__3546__auto____3900;
}
} else
{return and__3546__auto____3899;
}
})());
});
var ep2__3946 = (function() { 
var G__3948__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3904 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3904))
{return cljs.core.every_QMARK_.call(null,(function (p1__3875_SHARP_){
var and__3546__auto____3905 = p1.call(null,p1__3875_SHARP_);

if(cljs.core.truth_(and__3546__auto____3905))
{return p2.call(null,p1__3875_SHARP_);
} else
{return and__3546__auto____3905;
}
}),args);
} else
{return and__3546__auto____3904;
}
})());
};
var G__3948 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3948__delegate.call(this, x, y, z, args);
};
G__3948.cljs$lang$maxFixedArity = 3;
G__3948.cljs$lang$applyTo = (function (arglist__3949){
var x = cljs.core.first(arglist__3949);
var y = cljs.core.first(cljs.core.next(arglist__3949));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3949)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3949)));
return G__3948__delegate.call(this, x, y, z, args);
});
return G__3948;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3942.call(this);
case  1 :
return ep2__3943.call(this,x);
case  2 :
return ep2__3944.call(this,x,y);
case  3 :
return ep2__3945.call(this,x,y,z);
default:
return ep2__3946.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3946.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3931 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3950 = (function (){
return true;
});
var ep3__3951 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3906 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3906))
{var and__3546__auto____3907 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3907))
{return p3.call(null,x);
} else
{return and__3546__auto____3907;
}
} else
{return and__3546__auto____3906;
}
})());
});
var ep3__3952 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3908 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3908))
{var and__3546__auto____3909 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3909))
{var and__3546__auto____3910 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3910))
{var and__3546__auto____3911 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3911))
{var and__3546__auto____3912 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3912))
{return p3.call(null,y);
} else
{return and__3546__auto____3912;
}
} else
{return and__3546__auto____3911;
}
} else
{return and__3546__auto____3910;
}
} else
{return and__3546__auto____3909;
}
} else
{return and__3546__auto____3908;
}
})());
});
var ep3__3953 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3913 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3913))
{var and__3546__auto____3914 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3914))
{var and__3546__auto____3915 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3915))
{var and__3546__auto____3916 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3916))
{var and__3546__auto____3917 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3917))
{var and__3546__auto____3918 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3918))
{var and__3546__auto____3919 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3919))
{var and__3546__auto____3920 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3920))
{return p3.call(null,z);
} else
{return and__3546__auto____3920;
}
} else
{return and__3546__auto____3919;
}
} else
{return and__3546__auto____3918;
}
} else
{return and__3546__auto____3917;
}
} else
{return and__3546__auto____3916;
}
} else
{return and__3546__auto____3915;
}
} else
{return and__3546__auto____3914;
}
} else
{return and__3546__auto____3913;
}
})());
});
var ep3__3954 = (function() { 
var G__3956__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3921 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3921))
{return cljs.core.every_QMARK_.call(null,(function (p1__3876_SHARP_){
var and__3546__auto____3922 = p1.call(null,p1__3876_SHARP_);

if(cljs.core.truth_(and__3546__auto____3922))
{var and__3546__auto____3923 = p2.call(null,p1__3876_SHARP_);

if(cljs.core.truth_(and__3546__auto____3923))
{return p3.call(null,p1__3876_SHARP_);
} else
{return and__3546__auto____3923;
}
} else
{return and__3546__auto____3922;
}
}),args);
} else
{return and__3546__auto____3921;
}
})());
};
var G__3956 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3956__delegate.call(this, x, y, z, args);
};
G__3956.cljs$lang$maxFixedArity = 3;
G__3956.cljs$lang$applyTo = (function (arglist__3957){
var x = cljs.core.first(arglist__3957);
var y = cljs.core.first(cljs.core.next(arglist__3957));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3957)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3957)));
return G__3956__delegate.call(this, x, y, z, args);
});
return G__3956;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3950.call(this);
case  1 :
return ep3__3951.call(this,x);
case  2 :
return ep3__3952.call(this,x,y);
case  3 :
return ep3__3953.call(this,x,y,z);
default:
return ep3__3954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3954.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3932 = (function() { 
var G__3958__delegate = function (p1,p2,p3,ps){
var ps__3924 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3959 = (function (){
return true;
});
var epn__3960 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3877_SHARP_){
return p1__3877_SHARP_.call(null,x);
}),ps__3924);
});
var epn__3961 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3878_SHARP_){
var and__3546__auto____3925 = p1__3878_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3925))
{return p1__3878_SHARP_.call(null,y);
} else
{return and__3546__auto____3925;
}
}),ps__3924);
});
var epn__3962 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3879_SHARP_){
var and__3546__auto____3926 = p1__3879_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3926))
{var and__3546__auto____3927 = p1__3879_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3927))
{return p1__3879_SHARP_.call(null,z);
} else
{return and__3546__auto____3927;
}
} else
{return and__3546__auto____3926;
}
}),ps__3924);
});
var epn__3963 = (function() { 
var G__3965__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3928 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3928))
{return cljs.core.every_QMARK_.call(null,(function (p1__3880_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3880_SHARP_,args);
}),ps__3924);
} else
{return and__3546__auto____3928;
}
})());
};
var G__3965 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3965__delegate.call(this, x, y, z, args);
};
G__3965.cljs$lang$maxFixedArity = 3;
G__3965.cljs$lang$applyTo = (function (arglist__3966){
var x = cljs.core.first(arglist__3966);
var y = cljs.core.first(cljs.core.next(arglist__3966));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3966)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3966)));
return G__3965__delegate.call(this, x, y, z, args);
});
return G__3965;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3959.call(this);
case  1 :
return epn__3960.call(this,x);
case  2 :
return epn__3961.call(this,x,y);
case  3 :
return epn__3962.call(this,x,y,z);
default:
return epn__3963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3963.cljs$lang$applyTo;
return epn;
})()
};
var G__3958 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3958__delegate.call(this, p1, p2, p3, ps);
};
G__3958.cljs$lang$maxFixedArity = 3;
G__3958.cljs$lang$applyTo = (function (arglist__3967){
var p1 = cljs.core.first(arglist__3967);
var p2 = cljs.core.first(cljs.core.next(arglist__3967));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3967)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3967)));
return G__3958__delegate.call(this, p1, p2, p3, ps);
});
return G__3958;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3929.call(this,p1);
case  2 :
return every_pred__3930.call(this,p1,p2);
case  3 :
return every_pred__3931.call(this,p1,p2,p3);
default:
return every_pred__3932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3932.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__4007 = (function (p){
return (function() {
var sp1 = null;
var sp1__4012 = (function (){
return null;
});
var sp1__4013 = (function (x){
return p.call(null,x);
});
var sp1__4014 = (function (x,y){
var or__3548__auto____3969 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3969))
{return or__3548__auto____3969;
} else
{return p.call(null,y);
}
});
var sp1__4015 = (function (x,y,z){
var or__3548__auto____3970 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3970))
{return or__3548__auto____3970;
} else
{var or__3548__auto____3971 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3971))
{return or__3548__auto____3971;
} else
{return p.call(null,z);
}
}
});
var sp1__4016 = (function() { 
var G__4018__delegate = function (x,y,z,args){
var or__3548__auto____3972 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3972))
{return or__3548__auto____3972;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4018 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4018__delegate.call(this, x, y, z, args);
};
G__4018.cljs$lang$maxFixedArity = 3;
G__4018.cljs$lang$applyTo = (function (arglist__4019){
var x = cljs.core.first(arglist__4019);
var y = cljs.core.first(cljs.core.next(arglist__4019));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4019)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4019)));
return G__4018__delegate.call(this, x, y, z, args);
});
return G__4018;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4012.call(this);
case  1 :
return sp1__4013.call(this,x);
case  2 :
return sp1__4014.call(this,x,y);
case  3 :
return sp1__4015.call(this,x,y,z);
default:
return sp1__4016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4016.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4008 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4020 = (function (){
return null;
});
var sp2__4021 = (function (x){
var or__3548__auto____3973 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3973))
{return or__3548__auto____3973;
} else
{return p2.call(null,x);
}
});
var sp2__4022 = (function (x,y){
var or__3548__auto____3974 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3974))
{return or__3548__auto____3974;
} else
{var or__3548__auto____3975 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3975))
{return or__3548__auto____3975;
} else
{var or__3548__auto____3976 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3976))
{return or__3548__auto____3976;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4023 = (function (x,y,z){
var or__3548__auto____3977 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3977))
{return or__3548__auto____3977;
} else
{var or__3548__auto____3978 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3978))
{return or__3548__auto____3978;
} else
{var or__3548__auto____3979 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3979))
{return or__3548__auto____3979;
} else
{var or__3548__auto____3980 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3980))
{return or__3548__auto____3980;
} else
{var or__3548__auto____3981 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3981))
{return or__3548__auto____3981;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4024 = (function() { 
var G__4026__delegate = function (x,y,z,args){
var or__3548__auto____3982 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3982))
{return or__3548__auto____3982;
} else
{return cljs.core.some.call(null,(function (p1__3885_SHARP_){
var or__3548__auto____3983 = p1.call(null,p1__3885_SHARP_);

if(cljs.core.truth_(or__3548__auto____3983))
{return or__3548__auto____3983;
} else
{return p2.call(null,p1__3885_SHARP_);
}
}),args);
}
};
var G__4026 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4026__delegate.call(this, x, y, z, args);
};
G__4026.cljs$lang$maxFixedArity = 3;
G__4026.cljs$lang$applyTo = (function (arglist__4027){
var x = cljs.core.first(arglist__4027);
var y = cljs.core.first(cljs.core.next(arglist__4027));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4027)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4027)));
return G__4026__delegate.call(this, x, y, z, args);
});
return G__4026;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4020.call(this);
case  1 :
return sp2__4021.call(this,x);
case  2 :
return sp2__4022.call(this,x,y);
case  3 :
return sp2__4023.call(this,x,y,z);
default:
return sp2__4024.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4024.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4009 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4028 = (function (){
return null;
});
var sp3__4029 = (function (x){
var or__3548__auto____3984 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3984))
{return or__3548__auto____3984;
} else
{var or__3548__auto____3985 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3985))
{return or__3548__auto____3985;
} else
{return p3.call(null,x);
}
}
});
var sp3__4030 = (function (x,y){
var or__3548__auto____3986 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3986))
{return or__3548__auto____3986;
} else
{var or__3548__auto____3987 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3987))
{return or__3548__auto____3987;
} else
{var or__3548__auto____3988 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3988))
{return or__3548__auto____3988;
} else
{var or__3548__auto____3989 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3989))
{return or__3548__auto____3989;
} else
{var or__3548__auto____3990 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3990))
{return or__3548__auto____3990;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4031 = (function (x,y,z){
var or__3548__auto____3991 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3991))
{return or__3548__auto____3991;
} else
{var or__3548__auto____3992 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3992))
{return or__3548__auto____3992;
} else
{var or__3548__auto____3993 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3993))
{return or__3548__auto____3993;
} else
{var or__3548__auto____3994 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3994))
{return or__3548__auto____3994;
} else
{var or__3548__auto____3995 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3995))
{return or__3548__auto____3995;
} else
{var or__3548__auto____3996 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3996))
{return or__3548__auto____3996;
} else
{var or__3548__auto____3997 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3997))
{return or__3548__auto____3997;
} else
{var or__3548__auto____3998 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3998))
{return or__3548__auto____3998;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4032 = (function() { 
var G__4034__delegate = function (x,y,z,args){
var or__3548__auto____3999 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3999))
{return or__3548__auto____3999;
} else
{return cljs.core.some.call(null,(function (p1__3886_SHARP_){
var or__3548__auto____4000 = p1.call(null,p1__3886_SHARP_);

if(cljs.core.truth_(or__3548__auto____4000))
{return or__3548__auto____4000;
} else
{var or__3548__auto____4001 = p2.call(null,p1__3886_SHARP_);

if(cljs.core.truth_(or__3548__auto____4001))
{return or__3548__auto____4001;
} else
{return p3.call(null,p1__3886_SHARP_);
}
}
}),args);
}
};
var G__4034 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4034__delegate.call(this, x, y, z, args);
};
G__4034.cljs$lang$maxFixedArity = 3;
G__4034.cljs$lang$applyTo = (function (arglist__4035){
var x = cljs.core.first(arglist__4035);
var y = cljs.core.first(cljs.core.next(arglist__4035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4035)));
return G__4034__delegate.call(this, x, y, z, args);
});
return G__4034;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4028.call(this);
case  1 :
return sp3__4029.call(this,x);
case  2 :
return sp3__4030.call(this,x,y);
case  3 :
return sp3__4031.call(this,x,y,z);
default:
return sp3__4032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4032.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4010 = (function() { 
var G__4036__delegate = function (p1,p2,p3,ps){
var ps__4002 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4037 = (function (){
return null;
});
var spn__4038 = (function (x){
return cljs.core.some.call(null,(function (p1__3887_SHARP_){
return p1__3887_SHARP_.call(null,x);
}),ps__4002);
});
var spn__4039 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3888_SHARP_){
var or__3548__auto____4003 = p1__3888_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4003))
{return or__3548__auto____4003;
} else
{return p1__3888_SHARP_.call(null,y);
}
}),ps__4002);
});
var spn__4040 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3889_SHARP_){
var or__3548__auto____4004 = p1__3889_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4004))
{return or__3548__auto____4004;
} else
{var or__3548__auto____4005 = p1__3889_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4005))
{return or__3548__auto____4005;
} else
{return p1__3889_SHARP_.call(null,z);
}
}
}),ps__4002);
});
var spn__4041 = (function() { 
var G__4043__delegate = function (x,y,z,args){
var or__3548__auto____4006 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4006))
{return or__3548__auto____4006;
} else
{return cljs.core.some.call(null,(function (p1__3890_SHARP_){
return cljs.core.some.call(null,p1__3890_SHARP_,args);
}),ps__4002);
}
};
var G__4043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4043__delegate.call(this, x, y, z, args);
};
G__4043.cljs$lang$maxFixedArity = 3;
G__4043.cljs$lang$applyTo = (function (arglist__4044){
var x = cljs.core.first(arglist__4044);
var y = cljs.core.first(cljs.core.next(arglist__4044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4044)));
return G__4043__delegate.call(this, x, y, z, args);
});
return G__4043;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4037.call(this);
case  1 :
return spn__4038.call(this,x);
case  2 :
return spn__4039.call(this,x,y);
case  3 :
return spn__4040.call(this,x,y,z);
default:
return spn__4041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4041.cljs$lang$applyTo;
return spn;
})()
};
var G__4036 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4036__delegate.call(this, p1, p2, p3, ps);
};
G__4036.cljs$lang$maxFixedArity = 3;
G__4036.cljs$lang$applyTo = (function (arglist__4045){
var p1 = cljs.core.first(arglist__4045);
var p2 = cljs.core.first(cljs.core.next(arglist__4045));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4045)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4045)));
return G__4036__delegate.call(this, p1, p2, p3, ps);
});
return G__4036;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4007.call(this,p1);
case  2 :
return some_fn__4008.call(this,p1,p2);
case  3 :
return some_fn__4009.call(this,p1,p2,p3);
default:
return some_fn__4010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4010.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__4058 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4046 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4046))
{var s__4047 = temp__3698__auto____4046;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4047)),map.call(null,f,cljs.core.rest.call(null,s__4047)));
} else
{return null;
}
})));
});
var map__4059 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4048 = cljs.core.seq.call(null,c1);
var s2__4049 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4050 = s1__4048;

if(cljs.core.truth_(and__3546__auto____4050))
{return s2__4049;
} else
{return and__3546__auto____4050;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4048),cljs.core.first.call(null,s2__4049)),map.call(null,f,cljs.core.rest.call(null,s1__4048),cljs.core.rest.call(null,s2__4049)));
} else
{return null;
}
})));
});
var map__4060 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4051 = cljs.core.seq.call(null,c1);
var s2__4052 = cljs.core.seq.call(null,c2);
var s3__4053 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4054 = s1__4051;

if(cljs.core.truth_(and__3546__auto____4054))
{var and__3546__auto____4055 = s2__4052;

if(cljs.core.truth_(and__3546__auto____4055))
{return s3__4053;
} else
{return and__3546__auto____4055;
}
} else
{return and__3546__auto____4054;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4051),cljs.core.first.call(null,s2__4052),cljs.core.first.call(null,s3__4053)),map.call(null,f,cljs.core.rest.call(null,s1__4051),cljs.core.rest.call(null,s2__4052),cljs.core.rest.call(null,s3__4053)));
} else
{return null;
}
})));
});
var map__4061 = (function() { 
var G__4063__delegate = function (f,c1,c2,c3,colls){
var step__4057 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4056 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4056)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4056),step.call(null,map.call(null,cljs.core.rest,ss__4056)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3968_SHARP_){
return cljs.core.apply.call(null,f,p1__3968_SHARP_);
}),step__4057.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4063 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4063__delegate.call(this, f, c1, c2, c3, colls);
};
G__4063.cljs$lang$maxFixedArity = 4;
G__4063.cljs$lang$applyTo = (function (arglist__4064){
var f = cljs.core.first(arglist__4064);
var c1 = cljs.core.first(cljs.core.next(arglist__4064));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4064)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4064))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4064))));
return G__4063__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4063;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4058.call(this,f,c1);
case  3 :
return map__4059.call(this,f,c1,c2);
case  4 :
return map__4060.call(this,f,c1,c2,c3);
default:
return map__4061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4061.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____4065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4065))
{var s__4066 = temp__3698__auto____4065;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4066),take.call(null,(n - 1),cljs.core.rest.call(null,s__4066)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__4069 = (function (n,coll){
while(true){
var s__4067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4068 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4068))
{return s__4067;
} else
{return and__3546__auto____4068;
}
})()))
{{
var G__4070 = (n - 1);
var G__4071 = cljs.core.rest.call(null,s__4067);
n = G__4070;
coll = G__4071;
continue;
}
} else
{return s__4067;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4069.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4072 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4073 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4072.call(this,n);
case  2 :
return drop_last__4073.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4075 = cljs.core.seq.call(null,coll);
var lead__4076 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4076))
{{
var G__4077 = cljs.core.next.call(null,s__4075);
var G__4078 = cljs.core.next.call(null,lead__4076);
s__4075 = G__4077;
lead__4076 = G__4078;
continue;
}
} else
{return s__4075;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4081 = (function (pred,coll){
while(true){
var s__4079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4080 = s__4079;

if(cljs.core.truth_(and__3546__auto____4080))
{return pred.call(null,cljs.core.first.call(null,s__4079));
} else
{return and__3546__auto____4080;
}
})()))
{{
var G__4082 = pred;
var G__4083 = cljs.core.rest.call(null,s__4079);
pred = G__4082;
coll = G__4083;
continue;
}
} else
{return s__4079;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4081.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4084 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4084))
{var s__4085 = temp__3698__auto____4084;

return cljs.core.concat.call(null,s__4085,cycle.call(null,s__4085));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4086 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4087 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4086.call(this,n);
case  2 :
return repeat__4087.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__4089 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4090 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4089.call(this,n);
case  2 :
return repeatedly__4090.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__4096 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4092 = cljs.core.seq.call(null,c1);
var s2__4093 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4094 = s1__4092;

if(cljs.core.truth_(and__3546__auto____4094))
{return s2__4093;
} else
{return and__3546__auto____4094;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4092),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4093),interleave.call(null,cljs.core.rest.call(null,s1__4092),cljs.core.rest.call(null,s2__4093))));
} else
{return null;
}
})));
});
var interleave__4097 = (function() { 
var G__4099__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4095 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4095)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4095),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4095)));
} else
{return null;
}
})));
};
var G__4099 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4099__delegate.call(this, c1, c2, colls);
};
G__4099.cljs$lang$maxFixedArity = 2;
G__4099.cljs$lang$applyTo = (function (arglist__4100){
var c1 = cljs.core.first(arglist__4100);
var c2 = cljs.core.first(cljs.core.next(arglist__4100));
var colls = cljs.core.rest(cljs.core.next(arglist__4100));
return G__4099__delegate.call(this, c1, c2, colls);
});
return G__4099;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4096.call(this,c1,c2);
default:
return interleave__4097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4097.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__4103 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4101 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4101))
{var coll__4102 = temp__3695__auto____4101;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4102),cat.call(null,cljs.core.rest.call(null,coll__4102),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4103.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4104 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4105 = (function() { 
var G__4107__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4107 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4107__delegate.call(this, f, coll, colls);
};
G__4107.cljs$lang$maxFixedArity = 2;
G__4107.cljs$lang$applyTo = (function (arglist__4108){
var f = cljs.core.first(arglist__4108);
var coll = cljs.core.first(cljs.core.next(arglist__4108));
var colls = cljs.core.rest(cljs.core.next(arglist__4108));
return G__4107__delegate.call(this, f, coll, colls);
});
return G__4107;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4104.call(this,f,coll);
default:
return mapcat__4105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4105.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4109))
{var s__4110 = temp__3698__auto____4109;

var f__4111 = cljs.core.first.call(null,s__4110);
var r__4112 = cljs.core.rest.call(null,s__4110);

if(cljs.core.truth_(pred.call(null,f__4111)))
{return cljs.core.cons.call(null,f__4111,filter.call(null,pred,r__4112));
} else
{return filter.call(null,pred,r__4112);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__4114 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4114.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4113_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4113_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__4121 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4122 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4115 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4115))
{var s__4116 = temp__3698__auto____4115;

var p__4117 = cljs.core.take.call(null,n,s__4116);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4117))))
{return cljs.core.cons.call(null,p__4117,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4116)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4123 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4118 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4118))
{var s__4119 = temp__3698__auto____4118;

var p__4120 = cljs.core.take.call(null,n,s__4119);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4120))))
{return cljs.core.cons.call(null,p__4120,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4119)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4120,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4121.call(this,n,step);
case  3 :
return partition__4122.call(this,n,step,pad);
case  4 :
return partition__4123.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__4129 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4130 = (function (m,ks,not_found){
var sentinel__4125 = cljs.core.lookup_sentinel;
var m__4126 = m;
var ks__4127 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4127))
{var m__4128 = cljs.core.get.call(null,m__4126,cljs.core.first.call(null,ks__4127),sentinel__4125);

if(cljs.core.truth_((sentinel__4125 === m__4128)))
{return not_found;
} else
{{
var G__4132 = sentinel__4125;
var G__4133 = m__4128;
var G__4134 = cljs.core.next.call(null,ks__4127);
sentinel__4125 = G__4132;
m__4126 = G__4133;
ks__4127 = G__4134;
continue;
}
}
} else
{return m__4126;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4129.call(this,m,ks);
case  3 :
return get_in__4130.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4135,v){
var vec__4136__4137 = p__4135;
var k__4138 = cljs.core.nth.call(null,vec__4136__4137,0,null);
var ks__4139 = cljs.core.nthnext.call(null,vec__4136__4137,1);

if(cljs.core.truth_(ks__4139))
{return cljs.core.assoc.call(null,m,k__4138,assoc_in.call(null,cljs.core.get.call(null,m,k__4138),ks__4139,v));
} else
{return cljs.core.assoc.call(null,m,k__4138,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4140,f,args){
var vec__4141__4142 = p__4140;
var k__4143 = cljs.core.nth.call(null,vec__4141__4142,0,null);
var ks__4144 = cljs.core.nthnext.call(null,vec__4141__4142,1);

if(cljs.core.truth_(ks__4144))
{return cljs.core.assoc.call(null,m,k__4143,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4143),ks__4144,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4143,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4143),args));
}
};
var update_in = function (m,p__4140,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4140, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4145){
var m = cljs.core.first(arglist__4145);
var p__4140 = cljs.core.first(cljs.core.next(arglist__4145));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4145)));
return update_in__delegate.call(this, m, p__4140, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4146 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4179 = null;
var G__4179__4180 = (function (coll,k){
var this__4147 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4179__4181 = (function (coll,k,not_found){
var this__4148 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4179 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4179__4180.call(this,coll,k);
case  3 :
return G__4179__4181.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4179;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4149 = this;
var new_array__4150 = cljs.core.aclone.call(null,this__4149.array);

(new_array__4150[k] = v);
return (new cljs.core.Vector(this__4149.meta,new_array__4150));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4183 = null;
var G__4183__4184 = (function (tsym4151,k){
var this__4153 = this;
var tsym4151__4154 = this;

var coll__4155 = tsym4151__4154;

return cljs.core._lookup.call(null,coll__4155,k);
});
var G__4183__4185 = (function (tsym4152,k,not_found){
var this__4156 = this;
var tsym4152__4157 = this;

var coll__4158 = tsym4152__4157;

return cljs.core._lookup.call(null,coll__4158,k,not_found);
});
G__4183 = function(tsym4152,k,not_found){
switch(arguments.length){
case  2 :
return G__4183__4184.call(this,tsym4152,k);
case  3 :
return G__4183__4185.call(this,tsym4152,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4183;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4159 = this;
var new_array__4160 = cljs.core.aclone.call(null,this__4159.array);

new_array__4160.push(o);
return (new cljs.core.Vector(this__4159.meta,new_array__4160));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4187 = null;
var G__4187__4188 = (function (v,f){
var this__4161 = this;
return cljs.core.ci_reduce.call(null,this__4161.array,f);
});
var G__4187__4189 = (function (v,f,start){
var this__4162 = this;
return cljs.core.ci_reduce.call(null,this__4162.array,f,start);
});
G__4187 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4187__4188.call(this,v,f);
case  3 :
return G__4187__4189.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4187;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4163 = this;
if(cljs.core.truth_((this__4163.array.length > 0)))
{var vector_seq__4164 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4163.array.length)))
{return cljs.core.cons.call(null,(this__4163.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4164.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4165 = this;
return this__4165.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4166 = this;
var count__4167 = this__4166.array.length;

if(cljs.core.truth_((count__4167 > 0)))
{return (this__4166.array[(count__4167 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4168 = this;
if(cljs.core.truth_((this__4168.array.length > 0)))
{var new_array__4169 = cljs.core.aclone.call(null,this__4168.array);

new_array__4169.pop();
return (new cljs.core.Vector(this__4168.meta,new_array__4169));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4170 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4171 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4172 = this;
return (new cljs.core.Vector(meta,this__4172.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4173 = this;
return this__4173.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4191 = null;
var G__4191__4192 = (function (coll,n){
var this__4174 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4175 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4175))
{return (n < this__4174.array.length);
} else
{return and__3546__auto____4175;
}
})()))
{return (this__4174.array[n]);
} else
{return null;
}
});
var G__4191__4193 = (function (coll,n,not_found){
var this__4176 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4177 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4177))
{return (n < this__4176.array.length);
} else
{return and__3546__auto____4177;
}
})()))
{return (this__4176.array[n]);
} else
{return not_found;
}
});
G__4191 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4191__4192.call(this,coll,n);
case  3 :
return G__4191__4193.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4191;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4178 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4178.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4195){
var args = cljs.core.seq( arglist__4195 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4196 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4224 = null;
var G__4224__4225 = (function (coll,k){
var this__4197 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4224__4226 = (function (coll,k,not_found){
var this__4198 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4224 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4224__4225.call(this,coll,k);
case  3 :
return G__4224__4226.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4224;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4199 = this;
var v_pos__4200 = (this__4199.start + key);

return (new cljs.core.Subvec(this__4199.meta,cljs.core._assoc.call(null,this__4199.v,v_pos__4200,val),this__4199.start,((this__4199.end > (v_pos__4200 + 1)) ? this__4199.end : (v_pos__4200 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4228 = null;
var G__4228__4229 = (function (tsym4201,k){
var this__4203 = this;
var tsym4201__4204 = this;

var coll__4205 = tsym4201__4204;

return cljs.core._lookup.call(null,coll__4205,k);
});
var G__4228__4230 = (function (tsym4202,k,not_found){
var this__4206 = this;
var tsym4202__4207 = this;

var coll__4208 = tsym4202__4207;

return cljs.core._lookup.call(null,coll__4208,k,not_found);
});
G__4228 = function(tsym4202,k,not_found){
switch(arguments.length){
case  2 :
return G__4228__4229.call(this,tsym4202,k);
case  3 :
return G__4228__4230.call(this,tsym4202,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4228;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4209 = this;
return (new cljs.core.Subvec(this__4209.meta,cljs.core._assoc_n.call(null,this__4209.v,this__4209.end,o),this__4209.start,(this__4209.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4232 = null;
var G__4232__4233 = (function (coll,f){
var this__4210 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4232__4234 = (function (coll,f,start){
var this__4211 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4232 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4232__4233.call(this,coll,f);
case  3 :
return G__4232__4234.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4232;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4212 = this;
var subvec_seq__4213 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4212.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4212.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4213.call(null,this__4212.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4214 = this;
return (this__4214.end - this__4214.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4215 = this;
return cljs.core._nth.call(null,this__4215.v,(this__4215.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4216 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4216.start,this__4216.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4216.meta,this__4216.v,this__4216.start,(this__4216.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4217 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4218 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4219 = this;
return (new cljs.core.Subvec(meta,this__4219.v,this__4219.start,this__4219.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4220 = this;
return this__4220.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4236 = null;
var G__4236__4237 = (function (coll,n){
var this__4221 = this;
return cljs.core._nth.call(null,this__4221.v,(this__4221.start + n));
});
var G__4236__4238 = (function (coll,n,not_found){
var this__4222 = this;
return cljs.core._nth.call(null,this__4222.v,(this__4222.start + n),not_found);
});
G__4236 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4236__4237.call(this,coll,n);
case  3 :
return G__4236__4238.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4236;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4223 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4223.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__4240 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4241 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4240.call(this,v,start);
case  3 :
return subvec__4241.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4243 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4244 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4245 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4246 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4246.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4247 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4248 = this;
return cljs.core._first.call(null,this__4248.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4249 = this;
var temp__3695__auto____4250 = cljs.core.next.call(null,this__4249.front);

if(cljs.core.truth_(temp__3695__auto____4250))
{var f1__4251 = temp__3695__auto____4250;

return (new cljs.core.PersistentQueueSeq(this__4249.meta,f1__4251,this__4249.rear));
} else
{if(cljs.core.truth_((this__4249.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4249.meta,this__4249.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4252 = this;
return this__4252.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4253 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4253.front,this__4253.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4254 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4255 = this;
if(cljs.core.truth_(this__4255.front))
{return (new cljs.core.PersistentQueue(this__4255.meta,(this__4255.count + 1),this__4255.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4256 = this__4255.rear;

if(cljs.core.truth_(or__3548__auto____4256))
{return or__3548__auto____4256;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4255.meta,(this__4255.count + 1),cljs.core.conj.call(null,this__4255.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4257 = this;
var rear__4258 = cljs.core.seq.call(null,this__4257.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4259 = this__4257.front;

if(cljs.core.truth_(or__3548__auto____4259))
{return or__3548__auto____4259;
} else
{return rear__4258;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4257.front,cljs.core.seq.call(null,rear__4258)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4260 = this;
return this__4260.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4261 = this;
return cljs.core._first.call(null,this__4261.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4262 = this;
if(cljs.core.truth_(this__4262.front))
{var temp__3695__auto____4263 = cljs.core.next.call(null,this__4262.front);

if(cljs.core.truth_(temp__3695__auto____4263))
{var f1__4264 = temp__3695__auto____4263;

return (new cljs.core.PersistentQueue(this__4262.meta,(this__4262.count - 1),f1__4264,this__4262.rear));
} else
{return (new cljs.core.PersistentQueue(this__4262.meta,(this__4262.count - 1),cljs.core.seq.call(null,this__4262.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4265 = this;
return cljs.core.first.call(null,this__4265.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4266 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4267 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4268 = this;
return (new cljs.core.PersistentQueue(meta,this__4268.count,this__4268.front,this__4268.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4269 = this;
return this__4269.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4270 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4271 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4272 = array.length;

var i__4273 = 0;

while(true){
if(cljs.core.truth_((i__4273 < len__4272)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4273]))))
{return i__4273;
} else
{{
var G__4274 = (i__4273 + incr);
i__4273 = G__4274;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4276 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4277 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4275 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4275))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4275;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4276.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4277.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4280 = cljs.core.hash.call(null,a);
var b__4281 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4280 < b__4281)))
{return -1;
} else
{if(cljs.core.truth_((a__4280 > b__4281)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4282 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4309 = null;
var G__4309__4310 = (function (coll,k){
var this__4283 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4309__4311 = (function (coll,k,not_found){
var this__4284 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4284.strobj,(this__4284.strobj[k]),not_found);
});
G__4309 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4309__4310.call(this,coll,k);
case  3 :
return G__4309__4311.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4309;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4285 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4286 = goog.object.clone.call(null,this__4285.strobj);
var overwrite_QMARK___4287 = new_strobj__4286.hasOwnProperty(k);

(new_strobj__4286[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4287))
{return (new cljs.core.ObjMap(this__4285.meta,this__4285.keys,new_strobj__4286));
} else
{var new_keys__4288 = cljs.core.aclone.call(null,this__4285.keys);

new_keys__4288.push(k);
return (new cljs.core.ObjMap(this__4285.meta,new_keys__4288,new_strobj__4286));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4285.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4289 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4289.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4313 = null;
var G__4313__4314 = (function (tsym4290,k){
var this__4292 = this;
var tsym4290__4293 = this;

var coll__4294 = tsym4290__4293;

return cljs.core._lookup.call(null,coll__4294,k);
});
var G__4313__4315 = (function (tsym4291,k,not_found){
var this__4295 = this;
var tsym4291__4296 = this;

var coll__4297 = tsym4291__4296;

return cljs.core._lookup.call(null,coll__4297,k,not_found);
});
G__4313 = function(tsym4291,k,not_found){
switch(arguments.length){
case  2 :
return G__4313__4314.call(this,tsym4291,k);
case  3 :
return G__4313__4315.call(this,tsym4291,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4313;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4298 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4299 = this;
if(cljs.core.truth_((this__4299.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4279_SHARP_){
return cljs.core.vector.call(null,p1__4279_SHARP_,(this__4299.strobj[p1__4279_SHARP_]));
}),this__4299.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4300 = this;
return this__4300.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4301 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4302 = this;
return (new cljs.core.ObjMap(meta,this__4302.keys,this__4302.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4303 = this;
return this__4303.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4304 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4304.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4305 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4306 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4306))
{return this__4305.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4306;
}
})()))
{var new_keys__4307 = cljs.core.aclone.call(null,this__4305.keys);
var new_strobj__4308 = goog.object.clone.call(null,this__4305.strobj);

new_keys__4307.splice(cljs.core.scan_array.call(null,1,k,new_keys__4307),1);
cljs.core.js_delete.call(null,new_strobj__4308,k);
return (new cljs.core.ObjMap(this__4305.meta,new_keys__4307,new_strobj__4308));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4318 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4356 = null;
var G__4356__4357 = (function (coll,k){
var this__4319 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4356__4358 = (function (coll,k,not_found){
var this__4320 = this;
var bucket__4321 = (this__4320.hashobj[cljs.core.hash.call(null,k)]);
var i__4322 = (cljs.core.truth_(bucket__4321)?cljs.core.scan_array.call(null,2,k,bucket__4321):null);

if(cljs.core.truth_(i__4322))
{return (bucket__4321[(i__4322 + 1)]);
} else
{return not_found;
}
});
G__4356 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4356__4357.call(this,coll,k);
case  3 :
return G__4356__4358.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4356;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4323 = this;
var h__4324 = cljs.core.hash.call(null,k);
var bucket__4325 = (this__4323.hashobj[h__4324]);

if(cljs.core.truth_(bucket__4325))
{var new_bucket__4326 = cljs.core.aclone.call(null,bucket__4325);
var new_hashobj__4327 = goog.object.clone.call(null,this__4323.hashobj);

(new_hashobj__4327[h__4324] = new_bucket__4326);
var temp__3695__auto____4328 = cljs.core.scan_array.call(null,2,k,new_bucket__4326);

if(cljs.core.truth_(temp__3695__auto____4328))
{var i__4329 = temp__3695__auto____4328;

(new_bucket__4326[(i__4329 + 1)] = v);
return (new cljs.core.HashMap(this__4323.meta,this__4323.count,new_hashobj__4327));
} else
{new_bucket__4326.push(k,v);
return (new cljs.core.HashMap(this__4323.meta,(this__4323.count + 1),new_hashobj__4327));
}
} else
{var new_hashobj__4330 = goog.object.clone.call(null,this__4323.hashobj);

(new_hashobj__4330[h__4324] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4323.meta,(this__4323.count + 1),new_hashobj__4330));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4331 = this;
var bucket__4332 = (this__4331.hashobj[cljs.core.hash.call(null,k)]);
var i__4333 = (cljs.core.truth_(bucket__4332)?cljs.core.scan_array.call(null,2,k,bucket__4332):null);

if(cljs.core.truth_(i__4333))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4360 = null;
var G__4360__4361 = (function (tsym4334,k){
var this__4336 = this;
var tsym4334__4337 = this;

var coll__4338 = tsym4334__4337;

return cljs.core._lookup.call(null,coll__4338,k);
});
var G__4360__4362 = (function (tsym4335,k,not_found){
var this__4339 = this;
var tsym4335__4340 = this;

var coll__4341 = tsym4335__4340;

return cljs.core._lookup.call(null,coll__4341,k,not_found);
});
G__4360 = function(tsym4335,k,not_found){
switch(arguments.length){
case  2 :
return G__4360__4361.call(this,tsym4335,k);
case  3 :
return G__4360__4362.call(this,tsym4335,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4360;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4342 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4343 = this;
if(cljs.core.truth_((this__4343.count > 0)))
{var hashes__4344 = cljs.core.js_keys.call(null,this__4343.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4317_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4343.hashobj[p1__4317_SHARP_])));
}),hashes__4344);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4345 = this;
return this__4345.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4346 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4347 = this;
return (new cljs.core.HashMap(meta,this__4347.count,this__4347.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4348 = this;
return this__4348.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4349 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4349.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4350 = this;
var h__4351 = cljs.core.hash.call(null,k);
var bucket__4352 = (this__4350.hashobj[h__4351]);
var i__4353 = (cljs.core.truth_(bucket__4352)?cljs.core.scan_array.call(null,2,k,bucket__4352):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4353)))
{return coll;
} else
{var new_hashobj__4354 = goog.object.clone.call(null,this__4350.hashobj);

if(cljs.core.truth_((3 > bucket__4352.length)))
{cljs.core.js_delete.call(null,new_hashobj__4354,h__4351);
} else
{var new_bucket__4355 = cljs.core.aclone.call(null,bucket__4352);

new_bucket__4355.splice(i__4353,2);
(new_hashobj__4354[h__4351] = new_bucket__4355);
}
return (new cljs.core.HashMap(this__4350.meta,(this__4350.count - 1),new_hashobj__4354));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4364 = ks.length;

var i__4365 = 0;
var out__4366 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4365 < len__4364)))
{{
var G__4367 = (i__4365 + 1);
var G__4368 = cljs.core.assoc.call(null,out__4366,(ks[i__4365]),(vs[i__4365]));
i__4365 = G__4367;
out__4366 = G__4368;
continue;
}
} else
{return out__4366;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4369 = cljs.core.seq.call(null,keyvals);
var out__4370 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4369))
{{
var G__4371 = cljs.core.nnext.call(null,in$__4369);
var G__4372 = cljs.core.assoc.call(null,out__4370,cljs.core.first.call(null,in$__4369),cljs.core.second.call(null,in$__4369));
in$__4369 = G__4371;
out__4370 = G__4372;
continue;
}
} else
{return out__4370;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4373){
var keyvals = cljs.core.seq( arglist__4373 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4374_SHARP_,p2__4375_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4376 = p1__4374_SHARP_;

if(cljs.core.truth_(or__3548__auto____4376))
{return or__3548__auto____4376;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4375_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4377){
var maps = cljs.core.seq( arglist__4377 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4380 = (function (m,e){
var k__4378 = cljs.core.first.call(null,e);
var v__4379 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4378)))
{return cljs.core.assoc.call(null,m,k__4378,f.call(null,cljs.core.get.call(null,m,k__4378),v__4379));
} else
{return cljs.core.assoc.call(null,m,k__4378,v__4379);
}
});
var merge2__4382 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4380,(function (){var or__3548__auto____4381 = m1;

if(cljs.core.truth_(or__3548__auto____4381))
{return or__3548__auto____4381;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4382,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4383){
var f = cljs.core.first(arglist__4383);
var maps = cljs.core.rest(arglist__4383);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4385 = cljs.core.ObjMap.fromObject([],{});
var keys__4386 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4386))
{var key__4387 = cljs.core.first.call(null,keys__4386);
var entry__4388 = cljs.core.get.call(null,map,key__4387,"\uFDD0'user/not-found");

{
var G__4389 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4388,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4385,key__4387,entry__4388):ret__4385);
var G__4390 = cljs.core.next.call(null,keys__4386);
ret__4385 = G__4389;
keys__4386 = G__4390;
continue;
}
} else
{return ret__4385;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4391 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4412 = null;
var G__4412__4413 = (function (coll,v){
var this__4392 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4412__4414 = (function (coll,v,not_found){
var this__4393 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4393.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4412 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4412__4413.call(this,coll,v);
case  3 :
return G__4412__4414.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4412;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4416 = null;
var G__4416__4417 = (function (tsym4394,k){
var this__4396 = this;
var tsym4394__4397 = this;

var coll__4398 = tsym4394__4397;

return cljs.core._lookup.call(null,coll__4398,k);
});
var G__4416__4418 = (function (tsym4395,k,not_found){
var this__4399 = this;
var tsym4395__4400 = this;

var coll__4401 = tsym4395__4400;

return cljs.core._lookup.call(null,coll__4401,k,not_found);
});
G__4416 = function(tsym4395,k,not_found){
switch(arguments.length){
case  2 :
return G__4416__4417.call(this,tsym4395,k);
case  3 :
return G__4416__4418.call(this,tsym4395,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4416;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4402 = this;
return (new cljs.core.Set(this__4402.meta,cljs.core.assoc.call(null,this__4402.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4403 = this;
return cljs.core.keys.call(null,this__4403.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4404 = this;
return (new cljs.core.Set(this__4404.meta,cljs.core.dissoc.call(null,this__4404.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4405 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4406 = this;
var and__3546__auto____4407 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4407))
{var and__3546__auto____4408 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4408))
{return cljs.core.every_QMARK_.call(null,(function (p1__4384_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4384_SHARP_);
}),other);
} else
{return and__3546__auto____4408;
}
} else
{return and__3546__auto____4407;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4409 = this;
return (new cljs.core.Set(meta,this__4409.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4410 = this;
return this__4410.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4411 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4411.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4421 = cljs.core.seq.call(null,coll);
var out__4422 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4421))))
{{
var G__4423 = cljs.core.rest.call(null,in$__4421);
var G__4424 = cljs.core.conj.call(null,out__4422,cljs.core.first.call(null,in$__4421));
in$__4421 = G__4423;
out__4422 = G__4424;
continue;
}
} else
{return out__4422;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4425 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4426 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4426))
{var e__4427 = temp__3695__auto____4426;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4427));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4425,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4420_SHARP_){
var temp__3695__auto____4428 = cljs.core.find.call(null,smap,p1__4420_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4428))
{var e__4429 = temp__3695__auto____4428;

return cljs.core.second.call(null,e__4429);
} else
{return p1__4420_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4437 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4430,seen){
while(true){
var vec__4431__4432 = p__4430;
var f__4433 = cljs.core.nth.call(null,vec__4431__4432,0,null);
var xs__4434 = vec__4431__4432;

var temp__3698__auto____4435 = cljs.core.seq.call(null,xs__4434);

if(cljs.core.truth_(temp__3698__auto____4435))
{var s__4436 = temp__3698__auto____4435;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4433)))
{{
var G__4438 = cljs.core.rest.call(null,s__4436);
var G__4439 = seen;
p__4430 = G__4438;
seen = G__4439;
continue;
}
} else
{return cljs.core.cons.call(null,f__4433,step.call(null,cljs.core.rest.call(null,s__4436),cljs.core.conj.call(null,seen,f__4433)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4437.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4440 = cljs.core.Vector.fromArray([]);
var s__4441 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4441)))
{{
var G__4442 = cljs.core.conj.call(null,ret__4440,cljs.core.first.call(null,s__4441));
var G__4443 = cljs.core.next.call(null,s__4441);
ret__4440 = G__4442;
s__4441 = G__4443;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4440);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4444 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4444))
{return or__3548__auto____4444;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4445 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__4445 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4445 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4446 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4446))
{return or__3548__auto____4446;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4447 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__4447 > -1)))
{return cljs.core.subs.call(null,x,2,i__4447);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4450 = cljs.core.ObjMap.fromObject([],{});
var ks__4451 = cljs.core.seq.call(null,keys);
var vs__4452 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4453 = ks__4451;

if(cljs.core.truth_(and__3546__auto____4453))
{return vs__4452;
} else
{return and__3546__auto____4453;
}
})()))
{{
var G__4454 = cljs.core.assoc.call(null,map__4450,cljs.core.first.call(null,ks__4451),cljs.core.first.call(null,vs__4452));
var G__4455 = cljs.core.next.call(null,ks__4451);
var G__4456 = cljs.core.next.call(null,vs__4452);
map__4450 = G__4454;
ks__4451 = G__4455;
vs__4452 = G__4456;
continue;
}
} else
{return map__4450;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4459 = (function (k,x){
return x;
});
var max_key__4460 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4461 = (function() { 
var G__4463__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4448_SHARP_,p2__4449_SHARP_){
return max_key.call(null,k,p1__4448_SHARP_,p2__4449_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4463 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4463__delegate.call(this, k, x, y, more);
};
G__4463.cljs$lang$maxFixedArity = 3;
G__4463.cljs$lang$applyTo = (function (arglist__4464){
var k = cljs.core.first(arglist__4464);
var x = cljs.core.first(cljs.core.next(arglist__4464));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4464)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4464)));
return G__4463__delegate.call(this, k, x, y, more);
});
return G__4463;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4459.call(this,k,x);
case  3 :
return max_key__4460.call(this,k,x,y);
default:
return max_key__4461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4461.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4465 = (function (k,x){
return x;
});
var min_key__4466 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4467 = (function() { 
var G__4469__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4457_SHARP_,p2__4458_SHARP_){
return min_key.call(null,k,p1__4457_SHARP_,p2__4458_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4469 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4469__delegate.call(this, k, x, y, more);
};
G__4469.cljs$lang$maxFixedArity = 3;
G__4469.cljs$lang$applyTo = (function (arglist__4470){
var k = cljs.core.first(arglist__4470);
var x = cljs.core.first(cljs.core.next(arglist__4470));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4470)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4470)));
return G__4469__delegate.call(this, k, x, y, more);
});
return G__4469;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4465.call(this,k,x);
case  3 :
return min_key__4466.call(this,k,x,y);
default:
return min_key__4467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4467.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4473 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4474 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4471 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4471))
{var s__4472 = temp__3698__auto____4471;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4472),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4472)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4473.call(this,n,step);
case  3 :
return partition_all__4474.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4476 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4476))
{var s__4477 = temp__3698__auto____4476;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4477))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4477),take_while.call(null,pred,cljs.core.rest.call(null,s__4477)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4478 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4479 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4495 = null;
var G__4495__4496 = (function (rng,f){
var this__4480 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4495__4497 = (function (rng,f,s){
var this__4481 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4495 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4495__4496.call(this,rng,f);
case  3 :
return G__4495__4497.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4495;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4482 = this;
var comp__4483 = (cljs.core.truth_((this__4482.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4483.call(null,this__4482.start,this__4482.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4484 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4484.end - this__4484.start) / this__4484.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4485 = this;
return this__4485.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4486 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4486.meta,(this__4486.start + this__4486.step),this__4486.end,this__4486.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4487 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4488 = this;
return (new cljs.core.Range(meta,this__4488.start,this__4488.end,this__4488.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4489 = this;
return this__4489.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4499 = null;
var G__4499__4500 = (function (rng,n){
var this__4490 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4490.start + (n * this__4490.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4491 = (this__4490.start > this__4490.end);

if(cljs.core.truth_(and__3546__auto____4491))
{return cljs.core._EQ_.call(null,this__4490.step,0);
} else
{return and__3546__auto____4491;
}
})()))
{return this__4490.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4499__4501 = (function (rng,n,not_found){
var this__4492 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4492.start + (n * this__4492.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4493 = (this__4492.start > this__4492.end);

if(cljs.core.truth_(and__3546__auto____4493))
{return cljs.core._EQ_.call(null,this__4492.step,0);
} else
{return and__3546__auto____4493;
}
})()))
{return this__4492.start;
} else
{return not_found;
}
}
});
G__4499 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4499__4500.call(this,rng,n);
case  3 :
return G__4499__4501.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4499;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4494 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4494.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4503 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4504 = (function (end){
return range.call(null,0,end,1);
});
var range__4505 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4506 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4503.call(this);
case  1 :
return range__4504.call(this,start);
case  2 :
return range__4505.call(this,start,end);
case  3 :
return range__4506.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4508 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4508))
{var s__4509 = temp__3698__auto____4508;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4509),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4509)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4511 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4511))
{var s__4512 = temp__3698__auto____4511;

var fst__4513 = cljs.core.first.call(null,s__4512);
var fv__4514 = f.call(null,fst__4513);
var run__4515 = cljs.core.cons.call(null,fst__4513,cljs.core.take_while.call(null,(function (p1__4510_SHARP_){
return cljs.core._EQ_.call(null,fv__4514,f.call(null,p1__4510_SHARP_));
}),cljs.core.next.call(null,s__4512)));

return cljs.core.cons.call(null,run__4515,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4515),s__4512))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4530 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4526))
{var s__4527 = temp__3695__auto____4526;

return reductions.call(null,f,cljs.core.first.call(null,s__4527),cljs.core.rest.call(null,s__4527));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4531 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4528 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4528))
{var s__4529 = temp__3698__auto____4528;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4529)),cljs.core.rest.call(null,s__4529));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4530.call(this,f,init);
case  3 :
return reductions__4531.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4534 = (function (f){
return (function() {
var G__4539 = null;
var G__4539__4540 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4539__4541 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4539__4542 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4539__4543 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4539__4544 = (function() { 
var G__4546__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4546 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4546__delegate.call(this, x, y, z, args);
};
G__4546.cljs$lang$maxFixedArity = 3;
G__4546.cljs$lang$applyTo = (function (arglist__4547){
var x = cljs.core.first(arglist__4547);
var y = cljs.core.first(cljs.core.next(arglist__4547));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4547)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4547)));
return G__4546__delegate.call(this, x, y, z, args);
});
return G__4546;
})()
;
G__4539 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4539__4540.call(this);
case  1 :
return G__4539__4541.call(this,x);
case  2 :
return G__4539__4542.call(this,x,y);
case  3 :
return G__4539__4543.call(this,x,y,z);
default:
return G__4539__4544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4539.cljs$lang$maxFixedArity = 3;
G__4539.cljs$lang$applyTo = G__4539__4544.cljs$lang$applyTo;
return G__4539;
})()
});
var juxt__4535 = (function (f,g){
return (function() {
var G__4548 = null;
var G__4548__4549 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4548__4550 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4548__4551 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4548__4552 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4548__4553 = (function() { 
var G__4555__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4555 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4555__delegate.call(this, x, y, z, args);
};
G__4555.cljs$lang$maxFixedArity = 3;
G__4555.cljs$lang$applyTo = (function (arglist__4556){
var x = cljs.core.first(arglist__4556);
var y = cljs.core.first(cljs.core.next(arglist__4556));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4556)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4556)));
return G__4555__delegate.call(this, x, y, z, args);
});
return G__4555;
})()
;
G__4548 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4548__4549.call(this);
case  1 :
return G__4548__4550.call(this,x);
case  2 :
return G__4548__4551.call(this,x,y);
case  3 :
return G__4548__4552.call(this,x,y,z);
default:
return G__4548__4553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4548.cljs$lang$maxFixedArity = 3;
G__4548.cljs$lang$applyTo = G__4548__4553.cljs$lang$applyTo;
return G__4548;
})()
});
var juxt__4536 = (function (f,g,h){
return (function() {
var G__4557 = null;
var G__4557__4558 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4557__4559 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4557__4560 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4557__4561 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4557__4562 = (function() { 
var G__4564__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4564 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4564__delegate.call(this, x, y, z, args);
};
G__4564.cljs$lang$maxFixedArity = 3;
G__4564.cljs$lang$applyTo = (function (arglist__4565){
var x = cljs.core.first(arglist__4565);
var y = cljs.core.first(cljs.core.next(arglist__4565));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4565)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4565)));
return G__4564__delegate.call(this, x, y, z, args);
});
return G__4564;
})()
;
G__4557 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4557__4558.call(this);
case  1 :
return G__4557__4559.call(this,x);
case  2 :
return G__4557__4560.call(this,x,y);
case  3 :
return G__4557__4561.call(this,x,y,z);
default:
return G__4557__4562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4557.cljs$lang$maxFixedArity = 3;
G__4557.cljs$lang$applyTo = G__4557__4562.cljs$lang$applyTo;
return G__4557;
})()
});
var juxt__4537 = (function() { 
var G__4566__delegate = function (f,g,h,fs){
var fs__4533 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4567 = null;
var G__4567__4568 = (function (){
return cljs.core.reduce.call(null,(function (p1__4516_SHARP_,p2__4517_SHARP_){
return cljs.core.conj.call(null,p1__4516_SHARP_,p2__4517_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4533);
});
var G__4567__4569 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4518_SHARP_,p2__4519_SHARP_){
return cljs.core.conj.call(null,p1__4518_SHARP_,p2__4519_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4533);
});
var G__4567__4570 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4520_SHARP_,p2__4521_SHARP_){
return cljs.core.conj.call(null,p1__4520_SHARP_,p2__4521_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4533);
});
var G__4567__4571 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4522_SHARP_,p2__4523_SHARP_){
return cljs.core.conj.call(null,p1__4522_SHARP_,p2__4523_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4533);
});
var G__4567__4572 = (function() { 
var G__4574__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4524_SHARP_,p2__4525_SHARP_){
return cljs.core.conj.call(null,p1__4524_SHARP_,cljs.core.apply.call(null,p2__4525_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4533);
};
var G__4574 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4574__delegate.call(this, x, y, z, args);
};
G__4574.cljs$lang$maxFixedArity = 3;
G__4574.cljs$lang$applyTo = (function (arglist__4575){
var x = cljs.core.first(arglist__4575);
var y = cljs.core.first(cljs.core.next(arglist__4575));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4575)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4575)));
return G__4574__delegate.call(this, x, y, z, args);
});
return G__4574;
})()
;
G__4567 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4567__4568.call(this);
case  1 :
return G__4567__4569.call(this,x);
case  2 :
return G__4567__4570.call(this,x,y);
case  3 :
return G__4567__4571.call(this,x,y,z);
default:
return G__4567__4572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4567.cljs$lang$maxFixedArity = 3;
G__4567.cljs$lang$applyTo = G__4567__4572.cljs$lang$applyTo;
return G__4567;
})()
};
var G__4566 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4566__delegate.call(this, f, g, h, fs);
};
G__4566.cljs$lang$maxFixedArity = 3;
G__4566.cljs$lang$applyTo = (function (arglist__4576){
var f = cljs.core.first(arglist__4576);
var g = cljs.core.first(cljs.core.next(arglist__4576));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4576)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4576)));
return G__4566__delegate.call(this, f, g, h, fs);
});
return G__4566;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4534.call(this,f);
case  2 :
return juxt__4535.call(this,f,g);
case  3 :
return juxt__4536.call(this,f,g,h);
default:
return juxt__4537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4537.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4578 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4581 = cljs.core.next.call(null,coll);
coll = G__4581;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4579 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4577 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4577))
{return (n > 0);
} else
{return and__3546__auto____4577;
}
})()))
{{
var G__4582 = (n - 1);
var G__4583 = cljs.core.next.call(null,coll);
n = G__4582;
coll = G__4583;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4578.call(this,n);
case  2 :
return dorun__4579.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4584 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4585 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4584.call(this,n);
case  2 :
return doall__4585.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4587 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4587),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4587),1)))
{return cljs.core.first.call(null,matches__4587);
} else
{return cljs.core.vec.call(null,matches__4587);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4588 = re.exec(s);

if(cljs.core.truth_((matches__4588 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4588),1)))
{return cljs.core.first.call(null,matches__4588);
} else
{return cljs.core.vec.call(null,matches__4588);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4589 = cljs.core.re_find.call(null,re,s);
var match_idx__4590 = s.search(re);
var match_str__4591 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4589))?cljs.core.first.call(null,match_data__4589):match_data__4589);
var post_match__4592 = cljs.core.subs.call(null,s,(match_idx__4590 + cljs.core.count.call(null,match_str__4591)));

if(cljs.core.truth_(match_data__4589))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4589,re_seq.call(null,re,post_match__4592));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4594__4595 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4596 = cljs.core.nth.call(null,vec__4594__4595,0,null);
var flags__4597 = cljs.core.nth.call(null,vec__4594__4595,1,null);
var pattern__4598 = cljs.core.nth.call(null,vec__4594__4595,2,null);

return (new RegExp(pattern__4598,flags__4597));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4593_SHARP_){
return print_one.call(null,p1__4593_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4599 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4599))
{var and__3546__auto____4603 = (function (){var x__450__auto____4600 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4601 = x__450__auto____4600;

if(cljs.core.truth_(and__3546__auto____4601))
{var and__3546__auto____4602 = x__450__auto____4600.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4602))
{return cljs.core.not.call(null,x__450__auto____4600.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4602;
}
} else
{return and__3546__auto____4601;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____4600);
}
})();

if(cljs.core.truth_(and__3546__auto____4603))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4603;
}
} else
{return and__3546__auto____4599;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____4604 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4605 = x__450__auto____4604;

if(cljs.core.truth_(and__3546__auto____4605))
{var and__3546__auto____4606 = x__450__auto____4604.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4606))
{return cljs.core.not.call(null,x__450__auto____4604.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4606;
}
} else
{return and__3546__auto____4605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____4604);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__4607 = cljs.core.first.call(null,objs);
var sb__4608 = (new goog.string.StringBuffer());

var G__4609__4610 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4609__4610))
{var obj__4611 = cljs.core.first.call(null,G__4609__4610);
var G__4609__4612 = G__4609__4610;

while(true){
if(cljs.core.truth_((obj__4611 === first_obj__4607)))
{} else
{sb__4608.append(" ");
}
var G__4613__4614 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4611,opts));

if(cljs.core.truth_(G__4613__4614))
{var string__4615 = cljs.core.first.call(null,G__4613__4614);
var G__4613__4616 = G__4613__4614;

while(true){
sb__4608.append(string__4615);
var temp__3698__auto____4617 = cljs.core.next.call(null,G__4613__4616);

if(cljs.core.truth_(temp__3698__auto____4617))
{var G__4613__4618 = temp__3698__auto____4617;

{
var G__4621 = cljs.core.first.call(null,G__4613__4618);
var G__4622 = G__4613__4618;
string__4615 = G__4621;
G__4613__4616 = G__4622;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4619 = cljs.core.next.call(null,G__4609__4612);

if(cljs.core.truth_(temp__3698__auto____4619))
{var G__4609__4620 = temp__3698__auto____4619;

{
var G__4623 = cljs.core.first.call(null,G__4609__4620);
var G__4624 = G__4609__4620;
obj__4611 = G__4623;
G__4609__4612 = G__4624;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4608);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4625 = cljs.core.first.call(null,objs);

var G__4626__4627 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4626__4627))
{var obj__4628 = cljs.core.first.call(null,G__4626__4627);
var G__4626__4629 = G__4626__4627;

while(true){
if(cljs.core.truth_((obj__4628 === first_obj__4625)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4630__4631 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4628,opts));

if(cljs.core.truth_(G__4630__4631))
{var string__4632 = cljs.core.first.call(null,G__4630__4631);
var G__4630__4633 = G__4630__4631;

while(true){
cljs.core.string_print.call(null,string__4632);
var temp__3698__auto____4634 = cljs.core.next.call(null,G__4630__4633);

if(cljs.core.truth_(temp__3698__auto____4634))
{var G__4630__4635 = temp__3698__auto____4634;

{
var G__4638 = cljs.core.first.call(null,G__4630__4635);
var G__4639 = G__4630__4635;
string__4632 = G__4638;
G__4630__4633 = G__4639;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4636 = cljs.core.next.call(null,G__4626__4629);

if(cljs.core.truth_(temp__3698__auto____4636))
{var G__4626__4637 = temp__3698__auto____4636;

{
var G__4640 = cljs.core.first.call(null,G__4626__4637);
var G__4641 = G__4626__4637;
obj__4628 = G__4640;
G__4626__4629 = G__4641;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4642){
var objs = cljs.core.seq( arglist__4642 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4643){
var objs = cljs.core.seq( arglist__4643 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4644){
var objs = cljs.core.seq( arglist__4644 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4645){
var objs = cljs.core.seq( arglist__4645 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4646){
var objs = cljs.core.seq( arglist__4646 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4647 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4647,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4648 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4648))
{var nspc__4649 = temp__3698__auto____4648;

return cljs.core.str.call(null,nspc__4649,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4650 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4650))
{var nspc__4651 = temp__3698__auto____4650;

return cljs.core.str.call(null,nspc__4651,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4652 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4652,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4653 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4654 = this;
var G__4655__4656 = cljs.core.seq.call(null,this__4654.watches);

if(cljs.core.truth_(G__4655__4656))
{var G__4658__4660 = cljs.core.first.call(null,G__4655__4656);
var vec__4659__4661 = G__4658__4660;
var key__4662 = cljs.core.nth.call(null,vec__4659__4661,0,null);
var f__4663 = cljs.core.nth.call(null,vec__4659__4661,1,null);
var G__4655__4664 = G__4655__4656;

var G__4658__4665 = G__4658__4660;
var G__4655__4666 = G__4655__4664;

while(true){
var vec__4667__4668 = G__4658__4665;
var key__4669 = cljs.core.nth.call(null,vec__4667__4668,0,null);
var f__4670 = cljs.core.nth.call(null,vec__4667__4668,1,null);
var G__4655__4671 = G__4655__4666;

f__4670.call(null,key__4669,this$,oldval,newval);
var temp__3698__auto____4672 = cljs.core.next.call(null,G__4655__4671);

if(cljs.core.truth_(temp__3698__auto____4672))
{var G__4655__4673 = temp__3698__auto____4672;

{
var G__4680 = cljs.core.first.call(null,G__4655__4673);
var G__4681 = G__4655__4673;
G__4658__4665 = G__4680;
G__4655__4666 = G__4681;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4674 = this;
return this$.watches = cljs.core.assoc.call(null,this__4674.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4675 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4675.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4676 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4676.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4677 = this;
return this__4677.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4678 = this;
return this__4678.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4679 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4688 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4689 = (function() { 
var G__4691__delegate = function (x,p__4682){
var map__4683__4684 = p__4682;
var map__4683__4685 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4683__4684))?cljs.core.apply.call(null,cljs.core.hash_map,map__4683__4684):map__4683__4684);
var validator__4686 = cljs.core.get.call(null,map__4683__4685,"\uFDD0'validator");
var meta__4687 = cljs.core.get.call(null,map__4683__4685,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4687,validator__4686,null));
};
var G__4691 = function (x,var_args){
var p__4682 = null;
if (goog.isDef(var_args)) {
  p__4682 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4691__delegate.call(this, x, p__4682);
};
G__4691.cljs$lang$maxFixedArity = 1;
G__4691.cljs$lang$applyTo = (function (arglist__4692){
var x = cljs.core.first(arglist__4692);
var p__4682 = cljs.core.rest(arglist__4692);
return G__4691__delegate.call(this, x, p__4682);
});
return G__4691;
})()
;
atom = function(x,var_args){
var p__4682 = var_args;
switch(arguments.length){
case  1 :
return atom__4688.call(this,x);
default:
return atom__4689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4689.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4693 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4693))
{var validate__4694 = temp__3698__auto____4693;

if(cljs.core.truth_(validate__4694.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__4695 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4695,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4696 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4697 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4698 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4699 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4700 = (function() { 
var G__4702__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4702 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4702__delegate.call(this, a, f, x, y, z, more);
};
G__4702.cljs$lang$maxFixedArity = 5;
G__4702.cljs$lang$applyTo = (function (arglist__4703){
var a = cljs.core.first(arglist__4703);
var f = cljs.core.first(cljs.core.next(arglist__4703));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4703)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4703))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4703)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4703)))));
return G__4702__delegate.call(this, a, f, x, y, z, more);
});
return G__4702;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4696.call(this,a,f);
case  3 :
return swap_BANG___4697.call(this,a,f,x);
case  4 :
return swap_BANG___4698.call(this,a,f,x,y);
case  5 :
return swap_BANG___4699.call(this,a,f,x,y,z);
default:
return swap_BANG___4700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4700.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4704){
var iref = cljs.core.first(arglist__4704);
var f = cljs.core.first(cljs.core.next(arglist__4704));
var args = cljs.core.rest(cljs.core.next(arglist__4704));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4705 = (function (){
return gensym.call(null,"G__");
});
var gensym__4706 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4705.call(this);
case  1 :
return gensym__4706.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4708 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__4708.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4709 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4709.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4709.state,this__4709.f);
}
return cljs.core.deref.call(null,this__4709.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__4710){
var body = cljs.core.seq( arglist__4710 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4711__4712 = options;
var map__4711__4713 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4711__4712))?cljs.core.apply.call(null,cljs.core.hash_map,map__4711__4712):map__4711__4712);
var keywordize_keys__4714 = cljs.core.get.call(null,map__4711__4713,"\uFDD0'keywordize-keys");
var keyfn__4715 = (cljs.core.truth_(keywordize_keys__4714)?cljs.core.keyword:cljs.core.str);
var f__4721 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____4720 = (function iter__4716(s__4717){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4717__4718 = s__4717;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4717__4718)))
{var k__4719 = cljs.core.first.call(null,s__4717__4718);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4715.call(null,k__4719),thisfn.call(null,(x[k__4719]))]),iter__4716.call(null,cljs.core.rest.call(null,s__4717__4718)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____4720.call(null,cljs.core.js_keys.call(null,x));
})());
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

return f__4721.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4722){
var x = cljs.core.first(arglist__4722);
var options = cljs.core.rest(arglist__4722);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4723 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4727__delegate = function (args){
var temp__3695__auto____4724 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4723),args);

if(cljs.core.truth_(temp__3695__auto____4724))
{var v__4725 = temp__3695__auto____4724;

return v__4725;
} else
{var ret__4726 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4723,cljs.core.assoc,args,ret__4726);
return ret__4726;
}
};
var G__4727 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4727__delegate.call(this, args);
};
G__4727.cljs$lang$maxFixedArity = 0;
G__4727.cljs$lang$applyTo = (function (arglist__4728){
var args = cljs.core.seq( arglist__4728 );;
return G__4727__delegate.call(this, args);
});
return G__4727;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4730 = (function (f){
while(true){
var ret__4729 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4729)))
{{
var G__4733 = ret__4729;
f = G__4733;
continue;
}
} else
{return ret__4729;
}
break;
}
});
var trampoline__4731 = (function() { 
var G__4734__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4734 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4734__delegate.call(this, f, args);
};
G__4734.cljs$lang$maxFixedArity = 1;
G__4734.cljs$lang$applyTo = (function (arglist__4735){
var f = cljs.core.first(arglist__4735);
var args = cljs.core.rest(arglist__4735);
return G__4734__delegate.call(this, f, args);
});
return G__4734;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4730.call(this,f);
default:
return trampoline__4731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4731.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4736 = (function (){
return rand.call(null,1);
});
var rand__4737 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4736.call(this);
case  1 :
return rand__4737.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4739 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4739,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4739,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4748 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4749 = (function (h,child,parent){
var or__3548__auto____4740 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4740))
{return or__3548__auto____4740;
} else
{var or__3548__auto____4741 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4741))
{return or__3548__auto____4741;
} else
{var and__3546__auto____4742 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4742))
{var and__3546__auto____4743 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4743))
{var and__3546__auto____4744 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4744))
{var ret__4745 = true;
var i__4746 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4747 = cljs.core.not.call(null,ret__4745);

if(cljs.core.truth_(or__3548__auto____4747))
{return or__3548__auto____4747;
} else
{return cljs.core._EQ_.call(null,i__4746,cljs.core.count.call(null,parent));
}
})()))
{return ret__4745;
} else
{{
var G__4751 = isa_QMARK_.call(null,h,child.call(null,i__4746),parent.call(null,i__4746));
var G__4752 = (i__4746 + 1);
ret__4745 = G__4751;
i__4746 = G__4752;
continue;
}
}
break;
}
} else
{return and__3546__auto____4744;
}
} else
{return and__3546__auto____4743;
}
} else
{return and__3546__auto____4742;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4748.call(this,h,child);
case  3 :
return isa_QMARK___4749.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4753 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4754 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4753.call(this,h);
case  2 :
return parents__4754.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4756 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4757 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4756.call(this,h);
case  2 :
return ancestors__4757.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4759 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4760 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4759.call(this,h);
case  2 :
return descendants__4760.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4770 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4771 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__4765 = "\uFDD0'parents".call(null,h);
var td__4766 = "\uFDD0'descendants".call(null,h);
var ta__4767 = "\uFDD0'ancestors".call(null,h);
var tf__4768 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4769 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4765.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4767.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4767.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4765,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4768.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4766,parent,ta__4767),"\uFDD0'descendants":tf__4768.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4767,tag,td__4766)});
})());

if(cljs.core.truth_(or__3548__auto____4769))
{return or__3548__auto____4769;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4770.call(this,h,tag);
case  3 :
return derive__4771.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4777 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4778 = (function (h,tag,parent){
var parentMap__4773 = "\uFDD0'parents".call(null,h);
var childsParents__4774 = (cljs.core.truth_(parentMap__4773.call(null,tag))?cljs.core.disj.call(null,parentMap__4773.call(null,tag),parent):cljs.core.set([]));
var newParents__4775 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4774))?cljs.core.assoc.call(null,parentMap__4773,tag,childsParents__4774):cljs.core.dissoc.call(null,parentMap__4773,tag));
var deriv_seq__4776 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4762_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4762_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4762_SHARP_),cljs.core.second.call(null,p1__4762_SHARP_)));
}),cljs.core.seq.call(null,newParents__4775)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4773.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4763_SHARP_,p2__4764_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4763_SHARP_,p2__4764_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4776));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4777.call(this,h,tag);
case  3 :
return underive__4778.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4780 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4782 = (cljs.core.truth_((function (){var and__3546__auto____4781 = xprefs__4780;

if(cljs.core.truth_(and__3546__auto____4781))
{return xprefs__4780.call(null,y);
} else
{return and__3546__auto____4781;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4782))
{return or__3548__auto____4782;
} else
{var or__3548__auto____4784 = (function (){var ps__4783 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4783) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4783),prefer_table)))
{} else
{}
{
var G__4787 = cljs.core.rest.call(null,ps__4783);
ps__4783 = G__4787;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4784))
{return or__3548__auto____4784;
} else
{var or__3548__auto____4786 = (function (){var ps__4785 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4785) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4785),y,prefer_table)))
{} else
{}
{
var G__4788 = cljs.core.rest.call(null,ps__4785);
ps__4785 = G__4788;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4786))
{return or__3548__auto____4786;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4789 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4789))
{return or__3548__auto____4789;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4798 = cljs.core.reduce.call(null,(function (be,p__4790){
var vec__4791__4792 = p__4790;
var k__4793 = cljs.core.nth.call(null,vec__4791__4792,0,null);
var ___4794 = cljs.core.nth.call(null,vec__4791__4792,1,null);
var e__4795 = vec__4791__4792;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4793)))
{var be2__4797 = (cljs.core.truth_((function (){var or__3548__auto____4796 = (be === null);

if(cljs.core.truth_(or__3548__auto____4796))
{return or__3548__auto____4796;
} else
{return cljs.core.dominates.call(null,k__4793,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4795:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4797),k__4793,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4793," and ",cljs.core.first.call(null,be2__4797),", and neither is preferred")));
}
return be2__4797;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4798))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4798));
return cljs.core.second.call(null,best_entry__4798);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4799 = mf;

if(cljs.core.truth_(and__3546__auto____4799))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4799;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4800 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4800))
{return or__3548__auto____4800;
} else
{var or__3548__auto____4801 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4801))
{return or__3548__auto____4801;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4802 = mf;

if(cljs.core.truth_(and__3546__auto____4802))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4802;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4803 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4803))
{return or__3548__auto____4803;
} else
{var or__3548__auto____4804 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4804))
{return or__3548__auto____4804;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4805 = mf;

if(cljs.core.truth_(and__3546__auto____4805))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4805;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4806 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4806))
{return or__3548__auto____4806;
} else
{var or__3548__auto____4807 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4807))
{return or__3548__auto____4807;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4808 = mf;

if(cljs.core.truth_(and__3546__auto____4808))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4808;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4809 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4809))
{return or__3548__auto____4809;
} else
{var or__3548__auto____4810 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4810))
{return or__3548__auto____4810;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4811 = mf;

if(cljs.core.truth_(and__3546__auto____4811))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4811;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4812 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4812))
{return or__3548__auto____4812;
} else
{var or__3548__auto____4813 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4813))
{return or__3548__auto____4813;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4814 = mf;

if(cljs.core.truth_(and__3546__auto____4814))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4814;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4815 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4815))
{return or__3548__auto____4815;
} else
{var or__3548__auto____4816 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4816))
{return or__3548__auto____4816;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4817 = mf;

if(cljs.core.truth_(and__3546__auto____4817))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4817;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4818 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4818))
{return or__3548__auto____4818;
} else
{var or__3548__auto____4819 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4819))
{return or__3548__auto____4819;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4820 = mf;

if(cljs.core.truth_(and__3546__auto____4820))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4820;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4821 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4821))
{return or__3548__auto____4821;
} else
{var or__3548__auto____4822 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4822))
{return or__3548__auto____4822;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4823 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4824 = cljs.core._get_method.call(null,mf,dispatch_val__4823);

if(cljs.core.truth_(target_fn__4824))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4823)));
}
return cljs.core.apply.call(null,target_fn__4824,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4825 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4826 = this;
cljs.core.swap_BANG_.call(null,this__4826.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4826.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4826.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4826.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4827 = this;
cljs.core.swap_BANG_.call(null,this__4827.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4827.method_cache,this__4827.method_table,this__4827.cached_hierarchy,this__4827.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4828 = this;
cljs.core.swap_BANG_.call(null,this__4828.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4828.method_cache,this__4828.method_table,this__4828.cached_hierarchy,this__4828.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4829 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4829.cached_hierarchy),cljs.core.deref.call(null,this__4829.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4829.method_cache,this__4829.method_table,this__4829.cached_hierarchy,this__4829.hierarchy);
}
var temp__3695__auto____4830 = cljs.core.deref.call(null,this__4829.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4830))
{var target_fn__4831 = temp__3695__auto____4830;

return target_fn__4831;
} else
{var temp__3695__auto____4832 = cljs.core.find_and_cache_best_method.call(null,this__4829.name,dispatch_val,this__4829.hierarchy,this__4829.method_table,this__4829.prefer_table,this__4829.method_cache,this__4829.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4832))
{var target_fn__4833 = temp__3695__auto____4832;

return target_fn__4833;
} else
{return cljs.core.deref.call(null,this__4829.method_table).call(null,this__4829.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4834 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4834.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4834.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4834.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4834.method_cache,this__4834.method_table,this__4834.cached_hierarchy,this__4834.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4835 = this;
return cljs.core.deref.call(null,this__4835.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4836 = this;
return cljs.core.deref.call(null,this__4836.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4837 = this;
return cljs.core.do_dispatch.call(null,mf,this__4837.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4838__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4838 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4838__delegate.call(this, _, args);
};
G__4838.cljs$lang$maxFixedArity = 1;
G__4838.cljs$lang$applyTo = (function (arglist__4839){
var _ = cljs.core.first(arglist__4839);
var args = cljs.core.rest(arglist__4839);
return G__4838__delegate.call(this, _, args);
});
return G__4838;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

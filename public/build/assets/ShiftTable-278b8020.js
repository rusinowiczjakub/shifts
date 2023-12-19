import{r as me,j as D,F as he,a as f,M as G,d as ve,A as W}from"./app-5445e7f0.js";import ge from"./ApplicationsList-475636dc.js";function q(a){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(a)}function k(a){if(a===null||a===!0||a===!1)return NaN;var e=Number(a);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(a,e){if(e.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+e.length+" present")}function b(a){h(1,arguments);var e=Object.prototype.toString.call(a);return a instanceof Date||q(a)==="object"&&e==="[object Date]"?new Date(a.getTime()):typeof a=="number"||e==="[object Number]"?new Date(a):((typeof a=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function we(a,e){h(2,arguments);var t=b(a).getTime(),r=k(e);return new Date(t+r)}var ye={};function I(){return ye}function be(a){var e=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return e.setUTCFullYear(a.getFullYear()),a.getTime()-e.getTime()}var ae=6e4,re=36e5;function pe(a){return h(1,arguments),a instanceof Date||q(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Te(a){if(h(1,arguments),!pe(a)&&typeof a!="number")return!1;var e=b(a);return!isNaN(Number(e))}function De(a,e){h(2,arguments);var t=k(e);return we(a,-t)}var ke=864e5;function Ce(a){h(1,arguments);var e=b(a),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),n=t-r;return Math.floor(n/ke)+1}function H(a){h(1,arguments);var e=1,t=b(a),r=t.getUTCDay(),n=(r<e?7:0)+r-e;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function ne(a){h(1,arguments);var e=b(a),t=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var n=H(r),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=H(i);return e.getTime()>=n.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function xe(a){h(1,arguments);var e=ne(a),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var r=H(t);return r}var Me=6048e5;function Oe(a){h(1,arguments);var e=b(a),t=H(e).getTime()-xe(e).getTime();return Math.round(t/Me)+1}function L(a,e){var t,r,n,i,o,s,d,u;h(1,arguments);var l=I(),m=k((t=(r=(n=(i=e==null?void 0:e.weekStartsOn)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:l.weekStartsOn)!==null&&r!==void 0?r:(d=l.locale)===null||d===void 0||(u=d.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=b(a),v=g.getUTCDay(),y=(v<m?7:0)+v-m;return g.setUTCDate(g.getUTCDate()-y),g.setUTCHours(0,0,0,0),g}function ie(a,e){var t,r,n,i,o,s,d,u;h(1,arguments);var l=b(a),m=l.getUTCFullYear(),g=I(),v=k((t=(r=(n=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:g.firstWeekContainsDate)!==null&&r!==void 0?r:(d=g.locale)===null||d===void 0||(u=d.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(m+1,0,v),y.setUTCHours(0,0,0,0);var O=L(y,e),C=new Date(0);C.setUTCFullYear(m,0,v),C.setUTCHours(0,0,0,0);var N=L(C,e);return l.getTime()>=O.getTime()?m+1:l.getTime()>=N.getTime()?m:m-1}function Ne(a,e){var t,r,n,i,o,s,d,u;h(1,arguments);var l=I(),m=k((t=(r=(n=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:l.firstWeekContainsDate)!==null&&r!==void 0?r:(d=l.locale)===null||d===void 0||(u=d.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),g=ie(a,e),v=new Date(0);v.setUTCFullYear(g,0,m),v.setUTCHours(0,0,0,0);var y=L(v,e);return y}var Se=6048e5;function Pe(a,e){h(1,arguments);var t=b(a),r=L(t,e).getTime()-Ne(t,e).getTime();return Math.round(r/Se)+1}function c(a,e){for(var t=a<0?"-":"",r=Math.abs(a).toString();r.length<e;)r="0"+r;return t+r}var We={y:function(e,t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return c(t==="yy"?n%100:n,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):c(r+1,2)},d:function(e,t){return c(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return c(e.getUTCHours()%12||12,t.length)},H:function(e,t){return c(e.getUTCHours(),t.length)},m:function(e,t){return c(e.getUTCMinutes(),t.length)},s:function(e,t){return c(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,n=e.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return c(i,t.length)}};const T=We;var M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ue={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var n=e.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return T.y(e,t)},Y:function(e,t,r,n){var i=ie(e,n),o=i>0?i:1-i;if(t==="YY"){var s=o%100;return c(s,2)}return t==="Yo"?r.ordinalNumber(o,{unit:"year"}):c(o,t.length)},R:function(e,t){var r=ne(e);return c(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return c(r,t.length)},Q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return c(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getUTCMonth();switch(t){case"M":case"MM":return T.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var i=Pe(e,n);return t==="wo"?r.ordinalNumber(i,{unit:"week"}):c(i,t.length)},I:function(e,t,r){var n=Oe(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):c(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):T.d(e,t)},D:function(e,t,r){var n=Ce(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):c(n,t.length)},E:function(e,t,r){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var i=e.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return c(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var i=e.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return c(o,t.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getUTCDay(),i=n===0?7:n;switch(t){case"i":return String(i);case"ii":return c(i,t.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours(),i=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n=e.getUTCHours(),i;switch(n===12?i=M.noon:n===0?i=M.midnight:i=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n=e.getUTCHours(),i;switch(n>=17?i=M.evening:n>=12?i=M.afternoon:n>=4?i=M.morning:i=M.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var n=e.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return T.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T.H(e,t)},K:function(e,t,r){var n=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):c(n,t.length)},k:function(e,t,r){var n=e.getUTCHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):c(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):T.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T.s(e,t)},S:function(e,t){return T.S(e,t)},X:function(e,t,r,n){var i=n._originalDate||e,o=i.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return J(o);case"XXXX":case"XX":return x(o);case"XXXXX":case"XXX":default:return x(o,":")}},x:function(e,t,r,n){var i=n._originalDate||e,o=i.getTimezoneOffset();switch(t){case"x":return J(o);case"xxxx":case"xx":return x(o);case"xxxxx":case"xxx":default:return x(o,":")}},O:function(e,t,r,n){var i=n._originalDate||e,o=i.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+V(o,":");case"OOOO":default:return"GMT"+x(o,":")}},z:function(e,t,r,n){var i=n._originalDate||e,o=i.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+V(o,":");case"zzzz":default:return"GMT"+x(o,":")}},t:function(e,t,r,n){var i=n._originalDate||e,o=Math.floor(i.getTime()/1e3);return c(o,t.length)},T:function(e,t,r,n){var i=n._originalDate||e,o=i.getTime();return c(o,t.length)}};function V(a,e){var t=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return t+String(n);var o=e||"";return t+String(n)+o+c(i,2)}function J(a,e){if(a%60===0){var t=a>0?"-":"+";return t+c(Math.abs(a)/60,2)}return x(a,e)}function x(a,e){var t=e||"",r=a>0?"-":"+",n=Math.abs(a),i=c(Math.floor(n/60),2),o=c(n%60,2);return r+i+t+o}const _e=Ue;var K=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},oe=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ye=function(e,t){var r=e.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return K(e,t);var o;switch(n){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",K(n,t)).replace("{{time}}",oe(i,t))},Ee={p:oe,P:Ye};const $e=Ee;var Fe=["D","DD"],qe=["YY","YYYY"];function He(a){return Fe.indexOf(a)!==-1}function Le(a){return qe.indexOf(a)!==-1}function Z(a,e,t){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ie={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Re=function(e,t,r){var n,i=Ie[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const je=Re;function B(a){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,r=a.formats[t]||a.formats[a.defaultWidth];return r}}var Ae={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Qe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ge={date:B({formats:Ae,defaultWidth:"full"}),time:B({formats:Qe,defaultWidth:"full"}),dateTime:B({formats:Xe,defaultWidth:"full"})};const Be=Ge;var ze={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ve=function(e,t,r,n){return ze[e]};const Je=Ve;function U(a){return function(e,t){var r=t!=null&&t.context?String(t.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=t!=null&&t.width?String(t.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var s=a.defaultWidth,d=t!=null&&t.width?String(t.width):a.defaultWidth;n=a.values[d]||a.values[s]}var u=a.argumentCallback?a.argumentCallback(e):e;return n[u]}}var Ke={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ze={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},et={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nt=function(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},it={ordinalNumber:nt,era:U({values:Ke,defaultWidth:"wide"}),quarter:U({values:Ze,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:U({values:et,defaultWidth:"wide"}),day:U({values:tt,defaultWidth:"wide"}),dayPeriod:U({values:at,defaultWidth:"wide",formattingValues:rt,defaultFormattingWidth:"wide"})};const ot=it;function _(a){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=e.match(n);if(!i)return null;var o=i[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(s)?st(s,function(m){return m.test(o)}):ut(s,function(m){return m.test(o)}),u;u=a.valueCallback?a.valueCallback(d):d,u=t.valueCallback?t.valueCallback(u):u;var l=e.slice(o.length);return{value:u,rest:l}}}function ut(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function st(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}function dt(a){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(a.matchPattern);if(!r)return null;var n=r[0],i=e.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var s=e.slice(n.length);return{value:o,rest:s}}}var lt=/^(\d+)(th|st|nd|rd)?/i,ct=/\d+/i,ft={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mt={any:[/^b/i,/^(a|c)/i]},ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vt={any:[/1/i,/2/i,/3/i,/4/i]},gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},pt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Tt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dt={ordinalNumber:dt({matchPattern:lt,parsePattern:ct,valueCallback:function(e){return parseInt(e,10)}}),era:_({matchPatterns:ft,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any"}),quarter:_({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:_({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),day:_({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:_({matchPatterns:pt,defaultMatchWidth:"any",parsePatterns:Tt,defaultParseWidth:"any"})};const kt=Dt;var Ct={code:"en-US",formatDistance:je,formatLong:Be,formatRelative:Je,localize:ot,match:kt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const xt=Ct;var Mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Nt=/^'([^]*?)'?$/,St=/''/g,Pt=/[a-zA-Z]/;function ee(a,e,t){var r,n,i,o,s,d,u,l,m,g,v,y,O,C,N,R,j,A;h(2,arguments);var se=String(e),S=I(),P=(r=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:S.locale)!==null&&r!==void 0?r:xt,Q=k((i=(o=(s=(d=t==null?void 0:t.firstWeekContainsDate)!==null&&d!==void 0?d:t==null||(u=t.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&s!==void 0?s:S.firstWeekContainsDate)!==null&&o!==void 0?o:(m=S.locale)===null||m===void 0||(g=m.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(Q>=1&&Q<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var X=k((v=(y=(O=(C=t==null?void 0:t.weekStartsOn)!==null&&C!==void 0?C:t==null||(N=t.locale)===null||N===void 0||(R=N.options)===null||R===void 0?void 0:R.weekStartsOn)!==null&&O!==void 0?O:S.weekStartsOn)!==null&&y!==void 0?y:(j=S.locale)===null||j===void 0||(A=j.options)===null||A===void 0?void 0:A.weekStartsOn)!==null&&v!==void 0?v:0);if(!(X>=0&&X<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var E=b(a);if(!Te(E))throw new RangeError("Invalid time value");var de=be(E),le=De(E,de),ce={firstWeekContainsDate:Q,weekStartsOn:X,locale:P,_originalDate:E},fe=se.match(Ot).map(function(w){var p=w[0];if(p==="p"||p==="P"){var $=$e[p];return $(w,P.formatLong)}return w}).join("").match(Mt).map(function(w){if(w==="''")return"'";var p=w[0];if(p==="'")return Wt(w);var $=_e[p];if($)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Le(w)&&Z(w,e,String(a)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&He(w)&&Z(w,e,String(a)),$(le,w,P.localize,ce);if(p.match(Pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return w}).join("");return fe}function Wt(a){var e=a.match(Nt);return e?e[1].replace(St,"'"):a}function te(a,e){var t;h(1,arguments);var r=k((t=e==null?void 0:e.additionalDigits)!==null&&t!==void 0?t:2);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof a=="string"||Object.prototype.toString.call(a)==="[object String]"))return new Date(NaN);var n=Et(a),i;if(n.date){var o=$t(n.date,r);i=Ft(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var s=i.getTime(),d=0,u;if(n.time&&(d=qt(n.time),isNaN(d)))return new Date(NaN);if(n.timezone){if(u=Ht(n.timezone),isNaN(u))return new Date(NaN)}else{var l=new Date(s+d),m=new Date(0);return m.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),m.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),m}return new Date(s+d+u)}var F={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ut=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,_t=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Yt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Et(a){var e={},t=a.split(F.dateTimeDelimiter),r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],F.timeZoneDelimiter.test(e.date)&&(e.date=a.split(F.timeZoneDelimiter)[0],r=a.substr(e.date.length,a.length))),r){var n=F.timezone.exec(r);n?(e.time=r.replace(n[1],""),e.timezone=n[1]):e.time=r}return e}function $t(a,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=a.match(t);if(!r)return{year:NaN,restDateString:""};var n=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?n:i*100,restDateString:a.slice((r[1]||r[2]).length)}}function Ft(a,e){if(e===null)return new Date(NaN);var t=a.match(Ut);if(!t)return new Date(NaN);var r=!!t[4],n=Y(t[1]),i=Y(t[2])-1,o=Y(t[3]),s=Y(t[4]),d=Y(t[5])-1;if(r)return At(e,s,d)?Lt(e,s,d):new Date(NaN);var u=new Date(0);return!Rt(e,i,o)||!jt(e,n)?new Date(NaN):(u.setUTCFullYear(e,i,Math.max(n,o)),u)}function Y(a){return a?parseInt(a):1}function qt(a){var e=a.match(_t);if(!e)return NaN;var t=z(e[1]),r=z(e[2]),n=z(e[3]);return Qt(t,r,n)?t*re+r*ae+n*1e3:NaN}function z(a){return a&&parseFloat(a.replace(",","."))||0}function Ht(a){if(a==="Z")return 0;var e=a.match(Yt);if(!e)return 0;var t=e[1]==="+"?-1:1,r=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return Xt(r,n)?t*(r*re+n*ae):NaN}function Lt(a,e,t){var r=new Date(0);r.setUTCFullYear(a,0,4);var n=r.getUTCDay()||7,i=(e-1)*7+t+1-n;return r.setUTCDate(r.getUTCDate()+i),r}var It=[31,null,31,30,31,30,31,31,30,31,30,31];function ue(a){return a%400===0||a%4===0&&a%100!==0}function Rt(a,e,t){return e>=0&&e<=11&&t>=1&&t<=(It[e]||(ue(a)?29:28))}function jt(a,e){return e>=1&&e<=(ue(a)?366:365)}function At(a,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function Qt(a,e,t){return a===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&a>=0&&a<25}function Xt(a,e){return e>=0&&e<=59}const Gt=({shift:a,selectRowHandler:e,showRowDetails:t=null,selected:r=!1})=>{var n;return a={...a,start_date:ee(te(a.start_date),"dd/MM/yyyy HH:mm"),end_date:ee(te(a.end_date),"dd/MM/yyyy HH:mm")},D("tr",{className:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[f("td",{className:"w-4 p-4",children:D("div",{className:"flex items-center",children:[f("input",{onChange:i=>e(i,a.id),id:`checkbox-${a.id}`,checked:r,"aria-describedby":"checkbox-1",type:"checkbox",className:"w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"}),f("label",{htmlFor:`checkbox-${a.id}`,className:"sr-only",children:"checkbox"})]})}),f("td",{className:"flex items-center p-4 mr-12 space-x-6 whitespace-nowrap",children:((n=a==null?void 0:a.professional_type)==null?void 0:n.name)||"Kwalifikowana pielęgniarka"}),f("td",{className:"p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white",children:a.start_date}),f("td",{className:"p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white",children:a.end_date}),f("td",{className:"p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white",children:f(ve,{href:`/employer/shift/${a.id}/applications?type=all`,children:D(W.Group,{children:[f(W,{rounded:!0,stacked:!0}),f(W,{rounded:!0,stacked:!0}),f(W,{rounded:!0,stacked:!0}),f(W.Counter,{className:"cursor-pointer",total:99})]})})}),f("td",{className:"p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white",children:a.total_pay}),f("td",{className:"p-4 space-x-2 whitespace-nowrap"})]})},Bt=({shifts:a,onRowSelected:e,selectedRows:t})=>{const[r,n]=me.useState(-1),i=["Specjalista","Początek zmiany","Koniec zmiany","Aplikacje","Wynagrodzenie",""],o=u=>{if(u.target.checked){e(a.map(l=>l.id));return}e([])},s=(u,l)=>{if(u.target.checked){e([...t,l]);return}e(t.filter(m=>m!==l))},d=u=>t.includes(u);return D(he,{children:[f("div",{className:"flex flex-col",children:f("div",{className:"overflow-x-auto",children:f("div",{className:"inline-block min-w-full align-middle",children:f("div",{className:"overflow-hidden shadow",children:D("table",{className:"min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600",children:[f("thead",{className:"bg-gray-100 dark:bg-gray-700",children:D("tr",{children:[f("th",{scope:"col",className:"p-4",children:D("div",{className:"flex items-center",children:[f("input",{onChange:u=>o(u),id:"checkbox-all","aria-describedby":"checkbox-1",type:"checkbox",className:"w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"}),f("label",{htmlFor:"checkbox-all",className:"sr-only",children:"checkbox"})]})}),i.map((u,l)=>f("th",{scope:"col",className:"p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400",children:u},l))]})}),f("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700",children:a.map(u=>f(Gt,{selected:d(u.id),selectRowHandler:s,showRowDetails:()=>n(1),shift:u},u.id))})]})})})})}),D(G,{show:r!==-1,size:"lg",onClose:()=>n(-1),children:[f(G.Header,{children:"Aplikacje - [...]"}),f(G.Body,{children:f(ge,{applications:[]})})]})]})},Jt=Bt;export{Jt as default};

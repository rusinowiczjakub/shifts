function k(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Q(i){return i[i.length-1]}function O(i,...e){return e.forEach(t=>{i.includes(t)||i.push(t)}),i}function R(i,e){return i?i.split(e):[]}function ee(i,e,t){const n=e===void 0||i>=e,r=t===void 0||i<=t;return n&&r}function we(i,e,t){return i<e?e:i>t?t:i}function L(i,e,t={},n=0,r=""){const s=Object.keys(t).reduce((d,o)=>{let h=t[o];return typeof h=="function"&&(h=h(n)),`${d} ${o}="${h}"`},i);r+=`<${s}></${i}>`;const a=n+1;return a<e?L(i,e,t,a,r):r}function te(i){return i.replace(/>\s+/g,">").replace(/\s+</,"<")}function Z(i){return new Date(i).setHours(0,0,0,0)}function S(){return new Date().setHours(0,0,0,0)}function v(...i){switch(i.length){case 0:return S();case 1:return Z(i[0])}const e=new Date(0);return e.setFullYear(...i),e.setHours(0,0,0,0)}function C(i,e){const t=new Date(i);return t.setDate(t.getDate()+e)}function Ce(i,e){return C(i,e*7)}function K(i,e){const t=new Date(i),n=t.getMonth()+e;let r=n%12;r<0&&(r+=12);const s=t.setMonth(n);return t.getMonth()!==r?t.setDate(0):s}function V(i,e){const t=new Date(i),n=t.getMonth(),r=t.setFullYear(t.getFullYear()+e);return n===1&&t.getMonth()===2?t.setDate(0):r}function re(i,e){return(i-e+7)%7}function H(i,e,t=0){const n=new Date(i).getDay();return C(i,re(e,t)-re(n,t))}function Ve(i){const e=H(i,4,1),t=H(new Date(e).setMonth(0,4),4,1);return Math.round((e-t)/6048e5)+1}function M(i,e){const t=new Date(i).getFullYear();return Math.floor(t/e)*e}const G=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,Ee=/[\s!-/:-@[-`{-~年月日]+/;let q={};const se={y(i,e){return new Date(i).setFullYear(parseInt(e,10))},m(i,e,t){const n=new Date(i);let r=parseInt(e,10)-1;if(isNaN(r)){if(!e)return NaN;const s=e.toLowerCase(),a=d=>d.toLowerCase().startsWith(s);if(r=t.monthsShort.findIndex(a),r<0&&(r=t.months.findIndex(a)),r<0)return NaN}return n.setMonth(r),n.getMonth()!==be(r)?n.setDate(0):n.getTime()},d(i,e){return new Date(i).setDate(parseInt(e,10))}},Le={d(i){return i.getDate()},dd(i){return A(i.getDate(),2)},D(i,e){return e.daysShort[i.getDay()]},DD(i,e){return e.days[i.getDay()]},m(i){return i.getMonth()+1},mm(i){return A(i.getMonth()+1,2)},M(i,e){return e.monthsShort[i.getMonth()]},MM(i,e){return e.months[i.getMonth()]},y(i){return i.getFullYear()},yy(i){return A(i.getFullYear(),2).slice(-2)},yyyy(i){return A(i.getFullYear(),4)}};function be(i){return i>-1?i%12:be(i+12)}function A(i,e){return i.toString().padStart(e,"0")}function ye(i){if(typeof i!="string")throw new Error("Invalid date format.");if(i in q)return q[i];const e=i.split(G),t=i.match(new RegExp(G,"g"));if(e.length===0||!t)throw new Error("Invalid date format.");const n=t.map(s=>Le[s]),r=Object.keys(se).reduce((s,a)=>(t.find(o=>o[0]!=="D"&&o[0].toLowerCase()===a)&&s.push(a),s),[]);return q[i]={parser(s,a){const d=s.split(Ee).reduce((o,h,l)=>{if(h.length>0&&t[l]){const u=t[l][0];u==="M"?o.m=h:u!=="D"&&(o[u]=h)}return o},{});return r.reduce((o,h)=>{const l=se[h](o,d[h],a);return isNaN(l)?o:l},S())},formatter(s,a){let d=n.reduce((o,h,l)=>o+=`${e[l]}${h(s,a)}`,"");return d+=Q(e)}}}function W(i,e,t){if(i instanceof Date||typeof i=="number"){const n=Z(i);return isNaN(n)?void 0:n}if(i){if(i==="today")return S();if(e&&e.toValue){const n=e.toValue(i,e,t);return isNaN(n)?void 0:Z(n)}return ye(e).parser(i,t)}}function P(i,e,t){if(isNaN(i)||!i&&i!==0)return"";const n=typeof i=="number"?new Date(i):i;return e.toDisplay?e.toDisplay(n,e,t):ye(e).formatter(n,t)}const j=new WeakMap,{addEventListener:Fe,removeEventListener:Be}=EventTarget.prototype;function pe(i,e){let t=j.get(i);t||(t=[],j.set(i,t)),e.forEach(n=>{Fe.call(...n),t.push(n)})}function Ne(i){let e=j.get(i);e&&(e.forEach(t=>{Be.call(...t)}),j.delete(i))}if(!Event.prototype.composedPath){const i=(e,t=[])=>{t.push(e);let n;return e.parentNode?n=e.parentNode:e.host?n=e.host:e.defaultView&&(n=e.defaultView),n?i(n,t):t};Event.prototype.composedPath=function(){return i(this.target)}}function ke(i,e,t,n=0){const r=i[n];return e(r)?r:r===t||!r.parentElement?void 0:ke(i,e,t,n+1)}function De(i,e){const t=typeof e=="function"?e:n=>n.matches(e);return ke(i.composedPath(),t,i.currentTarget)}const F={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},ie={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:'<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>',orientation:"auto",pickLevel:0,prevArrow:'<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/></svg>',showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},We=document.createRange();function D(i){return We.createContextualFragment(i)}function B(i){i.style.display!=="none"&&(i.style.display&&(i.dataset.styleDisplay=i.style.display),i.style.display="none")}function N(i){i.style.display==="none"&&(i.dataset.styleDisplay?(i.style.display=i.dataset.styleDisplay,delete i.dataset.styleDisplay):i.style.display="")}function I(i){i.firstChild&&(i.removeChild(i.firstChild),I(i))}function Ye(i,e){I(i),e instanceof DocumentFragment?i.appendChild(e):typeof e=="string"?i.appendChild(D(e)):typeof e.forEach=="function"&&e.forEach(t=>{i.appendChild(t)})}const{language:J,format:Ae,weekStart:Te}=ie;function ae(i,e){return i.length<6&&e>=0&&e<7?O(i,e):i}function de(i){return(i+6)%7}function oe(i,e,t,n){const r=W(i,e,t);return r!==void 0?r:n}function z(i,e,t=3){const n=parseInt(i,10);return n>=0&&n<=t?n:e}function U(i,e){const t=Object.assign({},i),n={},r=e.constructor.locales;let{format:s,language:a,locale:d,maxDate:o,maxView:h,minDate:l,pickLevel:u,startView:p,weekStart:g}=e.config||{};if(t.language){let c;if(t.language!==a&&(r[t.language]?c=t.language:(c=t.language.split("-")[0],r[c]===void 0&&(c=!1))),delete t.language,c){a=n.language=c;const b=d||r[J];d=Object.assign({format:Ae,weekStart:Te},r[J]),a!==J&&Object.assign(d,r[a]),n.locale=d,s===b.format&&(s=n.format=d.format),g===b.weekStart&&(g=n.weekStart=d.weekStart,n.weekEnd=de(d.weekStart))}}if(t.format){const c=typeof t.format.toDisplay=="function",b=typeof t.format.toValue=="function",Y=G.test(t.format);(c&&b||Y)&&(s=n.format=t.format),delete t.format}let y=l,m=o;if(t.minDate!==void 0&&(y=t.minDate===null?v(0,0,1):oe(t.minDate,s,d,y),delete t.minDate),t.maxDate!==void 0&&(m=t.maxDate===null?void 0:oe(t.maxDate,s,d,m),delete t.maxDate),m<y?(l=n.minDate=m,o=n.maxDate=y):(l!==y&&(l=n.minDate=y),o!==m&&(o=n.maxDate=m)),t.datesDisabled&&(n.datesDisabled=t.datesDisabled.reduce((c,b)=>{const Y=W(b,s,d);return Y!==void 0?O(c,Y):c},[]),delete t.datesDisabled),t.defaultViewDate!==void 0){const c=W(t.defaultViewDate,s,d);c!==void 0&&(n.defaultViewDate=c),delete t.defaultViewDate}if(t.weekStart!==void 0){const c=Number(t.weekStart)%7;isNaN(c)||(g=n.weekStart=c,n.weekEnd=de(c)),delete t.weekStart}if(t.daysOfWeekDisabled&&(n.daysOfWeekDisabled=t.daysOfWeekDisabled.reduce(ae,[]),delete t.daysOfWeekDisabled),t.daysOfWeekHighlighted&&(n.daysOfWeekHighlighted=t.daysOfWeekHighlighted.reduce(ae,[]),delete t.daysOfWeekHighlighted),t.maxNumberOfDates!==void 0){const c=parseInt(t.maxNumberOfDates,10);c>=0&&(n.maxNumberOfDates=c,n.multidate=c!==1),delete t.maxNumberOfDates}t.dateDelimiter&&(n.dateDelimiter=String(t.dateDelimiter),delete t.dateDelimiter);let x=u;t.pickLevel!==void 0&&(x=z(t.pickLevel,2),delete t.pickLevel),x!==u&&(u=n.pickLevel=x);let w=h;t.maxView!==void 0&&(w=z(t.maxView,h),delete t.maxView),w=u>w?u:w,w!==h&&(h=n.maxView=w);let f=p;if(t.startView!==void 0&&(f=z(t.startView,f),delete t.startView),f<u?f=u:f>h&&(f=h),f!==p&&(n.startView=f),t.prevArrow){const c=D(t.prevArrow);c.childNodes.length>0&&(n.prevArrow=c.childNodes),delete t.prevArrow}if(t.nextArrow){const c=D(t.nextArrow);c.childNodes.length>0&&(n.nextArrow=c.childNodes),delete t.nextArrow}if(t.disableTouchKeyboard!==void 0&&(n.disableTouchKeyboard="ontouchstart"in document&&!!t.disableTouchKeyboard,delete t.disableTouchKeyboard),t.orientation){const c=t.orientation.toLowerCase().split(/\s+/g);n.orientation={x:c.find(b=>b==="left"||b==="right")||"auto",y:c.find(b=>b==="top"||b==="bottom")||"auto"},delete t.orientation}if(t.todayBtnMode!==void 0){switch(t.todayBtnMode){case 0:case 1:n.todayBtnMode=t.todayBtnMode}delete t.todayBtnMode}return Object.keys(t).forEach(c=>{t[c]!==void 0&&k(ie,c)&&(n[c]=t[c])}),n}const Ke=te(`<div class="datepicker hidden">
  <div class="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
    <div class="datepicker-header">
      <div class="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold"></div>
      <div class="datepicker-controls flex justify-between mb-2">
        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"></button>
        <button type="button" class="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"></button>
        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main p-1"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls flex space-x-2 rtl:space-x-reverse mt-2">
        <button type="button" class="%buttonClass% today-btn text-white bg-blue-700 !bg-primary-700 dark:bg-blue-600 dark:!bg-primary-600 hover:bg-blue-800 hover:!bg-primary-800 dark:hover:bg-blue-700 dark:hover:!bg-primary-700 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>
        <button type="button" class="%buttonClass% clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>
      </div>
    </div>
  </div>
</div>`),He=te(`<div class="days">
  <div class="days-of-week grid grid-cols-7 mb-1">${L("span",7,{class:"dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"})}</div>
  <div class="datepicker-grid w-64 grid grid-cols-7">${L("span",42,{class:"block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"})}</div>
</div>`),Pe=te(`<div class="calendar-weeks">
  <div class="days-of-week flex"><span class="dow h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"></span></div>
  <div class="weeks">${L("span",6,{class:"week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"})}</div>
</div>`);class ne{constructor(e,t){Object.assign(this,t,{picker:e,element:D('<div class="datepicker-view flex"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}init(e){e.pickLevel!==void 0&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}performBeforeHook(e,t,n){let r=this.beforeShow(new Date(n));switch(typeof r){case"boolean":r={enabled:r};break;case"string":r={classes:r}}if(r){if(r.enabled===!1&&(e.classList.add("disabled"),O(this.disabled,t)),r.classes){const s=r.classes.split(/\s+/);e.classList.add(...s),s.includes("disabled")&&O(this.disabled,t)}r.content&&Ye(e,r.content)}}}class je extends ne{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const n=D(He).firstChild;this.dow=n.firstChild,this.grid=n.lastChild,this.element.appendChild(n)}super.init(e)}setOptions(e){let t;if(k(e,"minDate")&&(this.minDate=e.minDate),k(e,"maxDate")&&(this.maxDate=e.maxDate),e.datesDisabled&&(this.datesDisabled=e.datesDisabled),e.daysOfWeekDisabled&&(this.daysOfWeekDisabled=e.daysOfWeekDisabled,t=!0),e.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=e.daysOfWeekHighlighted),e.todayHighlight!==void 0&&(this.todayHighlight=e.todayHighlight),e.weekStart!==void 0&&(this.weekStart=e.weekStart,this.weekEnd=e.weekEnd,t=!0),e.locale){const n=this.locale=e.locale;this.dayNames=n.daysMin,this.switchLabelFormat=n.titleFormat,t=!0}if(e.beforeShowDay!==void 0&&(this.beforeShow=typeof e.beforeShowDay=="function"?e.beforeShowDay:void 0),e.calendarWeeks!==void 0)if(e.calendarWeeks&&!this.calendarWeeks){const n=D(Pe).firstChild;this.calendarWeeks={element:n,dow:n.firstChild,weeks:n.lastChild},this.element.insertBefore(n,this.element.firstChild)}else this.calendarWeeks&&!e.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);e.showDaysOfWeek!==void 0&&(e.showDaysOfWeek?(N(this.dow),this.calendarWeeks&&N(this.calendarWeeks.dow)):(B(this.dow),this.calendarWeeks&&B(this.calendarWeeks.dow))),t&&Array.from(this.dow.children).forEach((n,r)=>{const s=(this.weekStart+r)%7;n.textContent=this.dayNames[s],n.className=this.daysOfWeekDisabled.includes(s)?"dow disabled text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed":"dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"})}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),n=e.getMonth(),r=v(t,n,1),s=H(r,this.weekStart,this.weekStart);this.first=r,this.last=v(t,n+1,0),this.start=s,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){this.today=this.todayHighlight?S():void 0,this.disabled=[...this.datesDisabled];const e=P(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(e),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const t=H(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach((n,r)=>{n.textContent=Ve(Ce(t,r))})}Array.from(this.grid.children).forEach((t,n)=>{const r=t.classList,s=C(this.start,n),a=new Date(s),d=a.getDay();if(t.className=`datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ${this.cellClass}`,t.dataset.date=s,t.textContent=a.getDate(),s<this.first?r.add("prev","text-gray-500","dark:text-white"):s>this.last&&r.add("next","text-gray-500","dark:text-white"),this.today===s&&r.add("today","bg-gray-100","dark:bg-gray-600"),(s<this.minDate||s>this.maxDate||this.disabled.includes(s))&&r.add("disabled","cursor-not-allowed"),this.daysOfWeekDisabled.includes(d)&&(r.add("disabled","cursor-not-allowed"),O(this.disabled,s)),this.daysOfWeekHighlighted.includes(d)&&r.add("highlighted"),this.range){const[o,h]=this.range;s>o&&s<h&&(r.add("range","bg-gray-200","dark:bg-gray-600"),r.remove("rounded-lg","rounded-l-lg","rounded-r-lg")),s===o&&(r.add("range-start","bg-gray-100","dark:bg-gray-600","rounded-l-lg"),r.remove("rounded-lg","rounded-r-lg")),s===h&&(r.add("range-end","bg-gray-100","dark:bg-gray-600","rounded-r-lg"),r.remove("rounded-lg","rounded-l-lg"))}this.selected.includes(s)&&(r.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),r.remove("text-gray-900","text-gray-500","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600","dark:bg-gray-600","bg-gray-100","bg-gray-200")),s===this.focused&&r.add("focused"),this.beforeShow&&this.performBeforeHook(t,s,s)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(n=>{n.classList.remove("range","range-start","range-end","selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white","focused"),n.classList.add("text-gray-900","rounded-lg","dark:text-white")}),Array.from(this.grid.children).forEach(n=>{const r=Number(n.dataset.date),s=n.classList;s.remove("bg-gray-200","dark:bg-gray-600","rounded-l-lg","rounded-r-lg"),r>e&&r<t&&(s.add("range","bg-gray-200","dark:bg-gray-600"),s.remove("rounded-lg")),r===e&&(s.add("range-start","bg-gray-200","dark:bg-gray-600","rounded-l-lg"),s.remove("rounded-lg","rounded-r-lg")),r===t&&(s.add("range-end","bg-gray-200","dark:bg-gray-600","rounded-r-lg"),s.remove("rounded-lg","rounded-l-lg")),this.selected.includes(r)&&(s.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),s.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600","bg-gray-100","bg-gray-200","dark:bg-gray-600")),r===this.focused&&s.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach(t=>{t.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function le(i,e){if(!i||!i[0]||!i[1])return;const[[t,n],[r,s]]=i;if(!(t>e||r<e))return[t===e?n:-1,r===e?s:12]}class Ie extends ne{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid","w-64","grid","grid-cols-4"),this.grid.appendChild(D(L("span",12,{"data-month":n=>n})))),super.init(e)}setOptions(e){if(e.locale&&(this.monthNames=e.locale.monthsShort),k(e,"minDate"))if(e.minDate===void 0)this.minYear=this.minMonth=this.minDate=void 0;else{const t=new Date(e.minDate);this.minYear=t.getFullYear(),this.minMonth=t.getMonth(),this.minDate=t.setDate(1)}if(k(e,"maxDate"))if(e.maxDate===void 0)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const t=new Date(e.maxDate);this.maxYear=t.getFullYear(),this.maxMonth=t.getMonth(),this.maxDate=v(this.maxYear,this.maxMonth+1,0)}e.beforeShowMonth!==void 0&&(this.beforeShow=typeof e.beforeShowMonth=="function"?e.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((n,r)=>{const s=new Date(r),a=s.getFullYear(),d=s.getMonth();return n[a]===void 0?n[a]=[d]:O(n[a],d),n},{}),t&&t.dates&&(this.range=t.dates.map(n=>{const r=new Date(n);return isNaN(r)?void 0:[r.getFullYear(),r.getMonth()]}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,n=this.year===this.minYear,r=this.year===this.maxYear,s=le(this.range,this.year);Array.from(this.grid.children).forEach((a,d)=>{const o=a.classList,h=v(this.year,d,1);if(a.className=`datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ${this.cellClass}`,this.isMinView&&(a.dataset.date=h),a.textContent=this.monthNames[d],(t||n&&d<this.minMonth||r&&d>this.maxMonth)&&o.add("disabled"),s){const[l,u]=s;d>l&&d<u&&o.add("range"),d===l&&o.add("range-start"),d===u&&o.add("range-end")}e.includes(d)&&(o.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),o.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),d===this.focused&&o.add("focused"),this.beforeShow&&this.performBeforeHook(a,d,h)})}refresh(){const e=this.selected[this.year]||[],[t,n]=le(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(r=>{r.classList.remove("range","range-start","range-end","selected","bg-blue-700","!bg-primary-700","dark:bg-blue-600","dark:!bg-primary-700","dark:text-white","text-white","focused"),r.classList.add("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")}),Array.from(this.grid.children).forEach((r,s)=>{const a=r.classList;s>t&&s<n&&a.add("range"),s===t&&a.add("range-start"),s===n&&a.add("range-end"),e.includes(s)&&(a.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),a.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),s===this.focused&&a.add("focused")})}refreshFocus(){this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[this.focused].classList.add("focused")}}function $e(i){return[...i].reduce((e,t,n)=>e+=n?t:t.toUpperCase(),"")}class ce extends ne{constructor(e,t){super(e,t)}init(e,t=!0){t&&(this.navStep=this.step*10,this.beforeShowOption=`beforeShow${$e(this.cellClass)}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid","w-64","grid","grid-cols-4"),this.grid.appendChild(D(L("span",12)))),super.init(e)}setOptions(e){if(k(e,"minDate")&&(e.minDate===void 0?this.minYear=this.minDate=void 0:(this.minYear=M(e.minDate,this.step),this.minDate=v(this.minYear,0,1))),k(e,"maxDate")&&(e.maxDate===void 0?this.maxYear=this.maxDate=void 0:(this.maxYear=M(e.maxDate,this.step),this.maxDate=v(this.maxYear,11,31))),e[this.beforeShowOption]!==void 0){const t=e[this.beforeShowOption];this.beforeShow=typeof t=="function"?t:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=M(e,this.navStep),n=t+9*this.step;this.first=t,this.last=n,this.start=t-this.step,this.focused=M(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((n,r)=>O(n,M(r,this.step)),[]),t&&t.dates&&(this.range=t.dates.map(n=>{if(n!==void 0)return M(n,this.step)}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach((e,t)=>{const n=e.classList,r=this.start+t*this.step,s=v(r,0,1);if(e.className=`datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ${this.cellClass}`,this.isMinView&&(e.dataset.date=s),e.textContent=e.dataset.year=r,t===0?n.add("prev"):t===11&&n.add("next"),(r<this.minYear||r>this.maxYear)&&n.add("disabled"),this.range){const[a,d]=this.range;r>a&&r<d&&n.add("range"),r===a&&n.add("range-start"),r===d&&n.add("range-end")}this.selected.includes(r)&&(n.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),n.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),r===this.focused&&n.add("focused"),this.beforeShow&&this.performBeforeHook(e,r,s)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(n=>{n.classList.remove("range","range-start","range-end","selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark!bg-primary-600","dark:text-white","focused")}),Array.from(this.grid.children).forEach(n=>{const r=Number(n.textContent),s=n.classList;r>e&&r<t&&s.add("range"),r===e&&s.add("range-start"),r===t&&s.add("range-end"),this.selected.includes(r)&&(s.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),s.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),r===this.focused&&s.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach(t=>{t.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function E(i,e){const t={date:i.getDate(),viewDate:new Date(i.picker.viewDate),viewId:i.picker.currentView.id,datepicker:i};i.element.dispatchEvent(new CustomEvent(e,{detail:t}))}function $(i,e){const{minDate:t,maxDate:n}=i.config,{currentView:r,viewDate:s}=i.picker;let a;switch(r.id){case 0:a=K(s,e);break;case 1:a=V(s,e);break;default:a=V(s,e*r.navStep)}a=we(a,t,n),i.picker.changeFocus(a).render()}function xe(i){const e=i.picker.currentView.id;e!==i.config.maxView&&i.picker.changeView(e+1).render()}function ve(i){i.config.updateOnBlur?i.update({autohide:!0}):(i.refresh("input"),i.hide())}function he(i,e){const t=i.picker,n=new Date(t.viewDate),r=t.currentView.id,s=r===1?K(n,e-n.getMonth()):V(n,e-n.getFullYear());t.changeFocus(s).changeView(r-1).render()}function _e(i){const e=i.picker,t=S();if(i.config.todayBtnMode===1){if(i.config.autohide){i.setDate(t);return}i.setDate(t,{render:!1}),e.update()}e.viewDate!==t&&e.changeFocus(t),e.changeView(0).render()}function Re(i){i.setDate({clear:!0})}function qe(i){xe(i)}function Je(i){$(i,-1)}function ze(i){$(i,1)}function Ue(i,e){const t=De(e,".datepicker-cell");if(!t||t.classList.contains("disabled"))return;const{id:n,isMinView:r}=i.picker.currentView;r?i.setDate(Number(t.dataset.date)):n===1?he(i,Number(t.dataset.month)):he(i,Number(t.dataset.year))}function Xe(i){!i.inline&&!i.config.disableTouchKeyboard&&i.inputField.focus()}function ue(i,e){if(e.title!==void 0&&(e.title?(i.controls.title.textContent=e.title,N(i.controls.title)):(i.controls.title.textContent="",B(i.controls.title))),e.prevArrow){const t=i.controls.prevBtn;I(t),e.prevArrow.forEach(n=>{t.appendChild(n.cloneNode(!0))})}if(e.nextArrow){const t=i.controls.nextBtn;I(t),e.nextArrow.forEach(n=>{t.appendChild(n.cloneNode(!0))})}if(e.locale&&(i.controls.todayBtn.textContent=e.locale.today,i.controls.clearBtn.textContent=e.locale.clear),e.todayBtn!==void 0&&(e.todayBtn?N(i.controls.todayBtn):B(i.controls.todayBtn)),k(e,"minDate")||k(e,"maxDate")){const{minDate:t,maxDate:n}=i.datepicker.config;i.controls.todayBtn.disabled=!ee(S(),t,n)}e.clearBtn!==void 0&&(e.clearBtn?N(i.controls.clearBtn):B(i.controls.clearBtn))}function fe(i){const{dates:e,config:t}=i,n=e.length>0?Q(e):t.defaultViewDate;return we(n,t.minDate,t.maxDate)}function ge(i,e){const t=new Date(i.viewDate),n=new Date(e),{id:r,year:s,first:a,last:d}=i.currentView,o=n.getFullYear();switch(i.viewDate=e,o!==t.getFullYear()&&E(i.datepicker,"changeYear"),n.getMonth()!==t.getMonth()&&E(i.datepicker,"changeMonth"),r){case 0:return e<a||e>d;case 1:return o!==s;default:return o<a||o>d}}function X(i){return window.getComputedStyle(i).direction}class Ze{constructor(e){this.datepicker=e;const t=Ke.replace(/%buttonClass%/g,e.config.buttonClass),n=this.element=D(t).firstChild,[r,s,a]=n.firstChild.children,d=r.firstElementChild,[o,h,l]=r.lastElementChild.children,[u,p]=a.firstChild.children,g={title:d,prevBtn:o,viewSwitch:h,nextBtn:l,todayBtn:u,clearBtn:p};this.main=s,this.controls=g;const y=e.inline?"inline":"dropdown";n.classList.add(`datepicker-${y}`),y==="dropdown"&&n.classList.add("dropdown","absolute","top-0","left-0","z-50","pt-2"),ue(this,e.config),this.viewDate=fe(e),pe(e,[[n,"click",Xe.bind(null,e),{capture:!0}],[s,"click",Ue.bind(null,e)],[g.viewSwitch,"click",qe.bind(null,e)],[g.prevBtn,"click",Je.bind(null,e)],[g.nextBtn,"click",ze.bind(null,e)],[g.todayBtn,"click",_e.bind(null,e)],[g.clearBtn,"click",Re.bind(null,e)]]),this.views=[new je(this),new Ie(this),new ce(this,{id:2,name:"years",cellClass:"year",step:1}),new ce(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.config.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.config.container.appendChild(this.element)}setOptions(e){ue(this,e),this.views.forEach(t=>{t.init(e,!1)}),this.currentView.render()}detach(){this.datepicker.config.container.removeChild(this.element)}show(){if(this.active)return;this.element.classList.add("active","block"),this.element.classList.remove("hidden"),this.active=!0;const e=this.datepicker;if(!e.inline){const t=X(e.inputField);t!==X(e.config.container)?this.element.dir=t:this.element.dir&&this.element.removeAttribute("dir"),this.place(),e.config.disableTouchKeyboard&&e.inputField.blur()}E(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active","block"),this.element.classList.add("active","block","hidden"),this.active=!1,E(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element,{config:n,inputField:r}=this.datepicker,s=n.container,{width:a,height:d}=this.element.getBoundingClientRect(),{left:o,top:h,width:l}=s.getBoundingClientRect(),{left:u,top:p,width:g,height:y}=r.getBoundingClientRect();let{x:m,y:x}=n.orientation,w,f,c;s===document.body?(w=window.scrollY,f=u+window.scrollX,c=p+w):(w=s.scrollTop,f=u-o,c=p-h+w),m==="auto"&&(f<0?(m="left",f=10):f+a>l?m="right":m=X(r)==="rtl"?"right":"left"),m==="right"&&(f-=a-g),x==="auto"&&(x=c-d<w?"bottom":"top"),x==="top"?c-=d:c+=y,e.remove("datepicker-orient-top","datepicker-orient-bottom","datepicker-orient-right","datepicker-orient-left"),e.add(`datepicker-orient-${x}`,`datepicker-orient-${m}`),t.top=c&&`${c}px`,t.left=f&&`${f}px`}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevBtnDisabled(e){this.controls.prevBtn.disabled=e}setNextBtnDisabled(e){this.controls.nextBtn.disabled=e}changeView(e){const t=this.currentView,n=this.views[e];return n.id!==t.id&&(this.currentView=n,this._renderMethod="render",E(this.datepicker,"changeView"),this.main.replaceChild(n.element,t.element)),this}changeFocus(e){return this._renderMethod=ge(this,e)?"render":"refreshFocus",this.views.forEach(t=>{t.updateFocus()}),this}update(){const e=fe(this.datepicker);return this._renderMethod=ge(this,e)?"render":"refresh",this.views.forEach(t=>{t.updateFocus(),t.updateSelection()}),this}render(e=!0){const t=e&&this._renderMethod||"render";delete this._renderMethod,this.currentView[t]()}}function Me(i,e,t,n,r,s){if(ee(i,r,s)){if(n(i)){const a=e(i,t);return Me(a,e,t,n,r,s)}return i}}function T(i,e,t,n){const r=i.picker,s=r.currentView,a=s.step||1;let d=r.viewDate,o,h;switch(s.id){case 0:n?d=C(d,t*7):e.ctrlKey||e.metaKey?d=V(d,t):d=C(d,t),o=C,h=l=>s.disabled.includes(l);break;case 1:d=K(d,n?t*4:t),o=K,h=l=>{const u=new Date(l),{year:p,disabled:g}=s;return u.getFullYear()===p&&g.includes(u.getMonth())};break;default:d=V(d,t*(n?4:1)*a),o=V,h=l=>s.disabled.includes(M(l,a))}d=Me(d,o,t<0?-a:a,h,s.minDate,s.maxDate),d!==void 0&&r.changeFocus(d).render()}function Ge(i,e){if(e.key==="Tab"){ve(i);return}const t=i.picker,{id:n,isMinView:r}=t.currentView;if(t.active)if(i.editMode)switch(e.key){case"Escape":t.hide();break;case"Enter":i.exitEditMode({update:!0,autohide:i.config.autohide});break;default:return}else switch(e.key){case"Escape":t.hide();break;case"ArrowLeft":if(e.ctrlKey||e.metaKey)$(i,-1);else if(e.shiftKey){i.enterEditMode();return}else T(i,e,-1,!1);break;case"ArrowRight":if(e.ctrlKey||e.metaKey)$(i,1);else if(e.shiftKey){i.enterEditMode();return}else T(i,e,1,!1);break;case"ArrowUp":if(e.ctrlKey||e.metaKey)xe(i);else if(e.shiftKey){i.enterEditMode();return}else T(i,e,-1,!0);break;case"ArrowDown":if(e.shiftKey&&!e.ctrlKey&&!e.metaKey){i.enterEditMode();return}T(i,e,1,!0);break;case"Enter":r?i.setDate(t.viewDate):t.changeView(n-1).render();break;case"Backspace":case"Delete":i.enterEditMode();return;default:e.key.length===1&&!e.ctrlKey&&!e.metaKey&&i.enterEditMode();return}else switch(e.key){case"ArrowDown":case"Escape":t.show();break;case"Enter":i.update();break;default:return}e.preventDefault(),e.stopPropagation()}function Qe(i){i.config.showOnFocus&&!i._showing&&i.show()}function et(i,e){const t=e.target;(i.picker.active||i.config.showOnClick)&&(t._active=t===document.activeElement,t._clicking=setTimeout(()=>{delete t._active,delete t._clicking},2e3))}function tt(i,e){const t=e.target;t._clicking&&(clearTimeout(t._clicking),delete t._clicking,t._active&&i.enterEditMode(),delete t._active,i.config.showOnClick&&i.show())}function it(i,e){e.clipboardData.types.includes("text/plain")&&i.enterEditMode()}function nt(i,e){const t=i.element;if(t!==document.activeElement)return;const n=i.picker.element;De(e,r=>r===t||r===n)||ve(i)}function Oe(i,e){return i.map(t=>P(t,e.format,e.locale)).join(e.dateDelimiter)}function Se(i,e,t=!1){const{config:n,dates:r,rangepicker:s}=i;if(e.length===0)return t?[]:void 0;const a=s&&i===s.datepickers[1];let d=e.reduce((o,h)=>{let l=W(h,n.format,n.locale);if(l===void 0)return o;if(n.pickLevel>0){const u=new Date(l);n.pickLevel===1?l=a?u.setMonth(u.getMonth()+1,0):u.setDate(1):l=a?u.setFullYear(u.getFullYear()+1,0,0):u.setMonth(0,1)}return ee(l,n.minDate,n.maxDate)&&!o.includes(l)&&!n.datesDisabled.includes(l)&&!n.daysOfWeekDisabled.includes(new Date(l).getDay())&&o.push(l),o},[]);if(d.length!==0)return n.multidate&&!t&&(d=d.reduce((o,h)=>(r.includes(h)||o.push(h),o),r.filter(o=>!d.includes(o)))),n.maxNumberOfDates&&d.length>n.maxNumberOfDates?d.slice(n.maxNumberOfDates*-1):d}function _(i,e=3,t=!0){const{config:n,picker:r,inputField:s}=i;if(e&2){const a=r.active?n.pickLevel:n.startView;r.update().changeView(a).render(t)}e&1&&s&&(s.value=Oe(i.dates,n))}function me(i,e,t){let{clear:n,render:r,autohide:s}=t;r===void 0&&(r=!0),r?s===void 0&&(s=i.config.autohide):s=!1;const a=Se(i,e,n);a&&(a.toString()!==i.dates.toString()?(i.dates=a,_(i,r?3:1),E(i,"changeDate")):_(i,1),s&&i.hide())}class rt{constructor(e,t={},n=void 0){e.datepicker=this,this.element=e;const r=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:document.body,defaultViewDate:S(),maxDate:void 0,minDate:void 0},U(ie,this));this._options=t,Object.assign(r,U(t,this));const s=this.inline=e.tagName!=="INPUT";let a,d;if(s)r.container=e,d=R(e.dataset.date,r.dateDelimiter),delete e.dataset.date;else{const l=t.container?document.querySelector(t.container):null;l&&(r.container=l),a=this.inputField=e,a.classList.add("datepicker-input"),d=R(a.value,r.dateDelimiter)}if(n){const l=n.inputs.indexOf(a),u=n.datepickers;if(l<0||l>1||!Array.isArray(u))throw Error("Invalid rangepicker object.");u[l]=this,Object.defineProperty(this,"rangepicker",{get(){return n}})}this.dates=[];const o=Se(this,d);o&&o.length>0&&(this.dates=o),a&&(a.value=Oe(this.dates,r));const h=this.picker=new Ze(this);if(s)this.show();else{const l=nt.bind(null,this),u=[[a,"keydown",Ge.bind(null,this)],[a,"focus",Qe.bind(null,this)],[a,"mousedown",et.bind(null,this)],[a,"click",tt.bind(null,this)],[a,"paste",it.bind(null,this)],[document,"mousedown",l],[document,"touchstart",l],[window,"resize",h.place.bind(h)]];pe(this,u)}}static formatDate(e,t,n){return P(e,t,n&&F[n]||F.en)}static parseDate(e,t,n){return W(e,t,n&&F[n]||F.en)}static get locales(){return F}get active(){return!!(this.picker&&this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=this.picker,n=U(e,this);Object.assign(this._options,e),Object.assign(this.config,n),t.setOptions(n),_(this,3)}show(){if(this.inputField){if(this.inputField.disabled)return;this.inputField!==document.activeElement&&(this._showing=!0,this.inputField.focus(),delete this._showing)}this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),Ne(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(e=void 0){const t=e?n=>P(n,e,this.config.locale):n=>new Date(n);if(this.config.multidate)return this.dates.map(t);if(this.dates.length>0)return t(this.dates[0])}setDate(...e){const t=[...e],n={},r=Q(e);typeof r=="object"&&!Array.isArray(r)&&!(r instanceof Date)&&r&&Object.assign(n,t.pop());const s=Array.isArray(t[0])?t[0]:t;me(this,s,n)}update(e=void 0){if(this.inline)return;const t={clear:!0,autohide:!!(e&&e.autohide)},n=R(this.inputField.value,this.config.dateDelimiter);me(this,n,t)}refresh(e=void 0,t=!1){e&&typeof e!="string"&&(t=e,e=void 0);let n;e==="picker"?n=2:e==="input"?n=1:n=3,_(this,n,!t)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit","border-blue-700","!border-primary-700"))}exitEditMode(e=void 0){if(this.inline||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit","border-blue-700","!border-primary-700"),t.update&&this.update(t)}}export{rt as D};
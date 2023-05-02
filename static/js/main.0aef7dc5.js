(()=>{var e={1610:(e,t,r)=>{var n=r(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(7156)),i=n(r(7424)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(9526)),a=r(8933),l=n(r(5151)),d=n(r(6977)),c=r(2686),u=r(9284),f=r(7557);function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}var y=a.StyleSheet.create({container:{flex:1,padding:c.UI.padding,justifyContent:"center",alignItems:"center",backgroundColor:u.Colors.background},centered:{flex:1,alignItems:"center",justifyContent:"center"},titleContainer:{backgroundColor:"#f2f2f2",alignItems:"center",justifyContent:"center",height:64},titleText:{fontSize:24,fontWeight:"bold"}}),p=function(){var e=(0,s.useState)(null),t=(0,i.default)(e,2),r=t[0],n=t[1],h=(0,s.useState)(!0),p=(0,i.default)(h,2),g=p[0],x=p[1];return(0,s.useEffect)((function(){function e(){return(e=(0,o.default)((function*(){try{var e=yield l.default.getItem("token");n(e)}catch(t){console.error(t)}}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,s.useEffect)((function(){function e(){return(e=(0,o.default)((function*(){try{var e=yield fetch(c.API_BASE_URL+"/guests",{method:"POST"}),t=yield e.json();l.default.setItem("token",t.token),n(t.token),x(!1),console.log("token: "+r)}catch(o){console.error(o)}}))).apply(this,arguments)}r||function(){e.apply(this,arguments)}()}),[r]),g||r?(0,f.jsx)(a.SafeAreaView,{style:y.container,children:g?(0,f.jsx)(a.View,{style:y.centered,children:(0,f.jsx)(a.ActivityIndicator,{size:"large",color:u.Colors.primary})}):(0,f.jsx)(d.default,{token:r})}):(0,f.jsx)(a.Text,{children:"A aparut o eroare..."})};t.default=p},9284:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Colors=void 0;t.Colors={background:"#282828",primary:"#1C1C1C",secondary:"#C7C7C7",accent1:"#FF6347",accent2:"#00FFFF",success:"#32CD32",error:"#FF4500",warning:"#FFC300",neutral:"#FFFFFF"}},2686:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UI=t.API_BASE_URL=void 0;t.API_BASE_URL="https://teste-permis-port-arma.herokuapp.com";t.UI={borderRadius:6,borderWidth:1,padding:16,margin:16,shadowOffset:{width:0,height:6}}},258:(e,t,r)=>{var n=r(4836);r(7770);var o=r(8e3),i=n(r(1610));(0,o.registerRootComponent)(i.default)},9605:(e,t,r)=>{var n=r(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r(9526));var o=r(8933),i=r(9284),s=r(2686),a=r(7557),l=o.StyleSheet.create({component:{padding:16,backgroundColor:i.Colors.secondary,marginBottom:2*s.UI.margin,borderRadius:s.UI.borderRadius,width:"100%",shadowColor:"black",shadowOffset:s.UI.shadowOffset,shadowOpacity:.2,shadowRadius:s.UI.borderRadius}}),d=function(e){var t=e.id,r=e.body,n=e.isCorrect,s=e.index,d=e.isHighlighted,c=e.onPress,u={backgroundColor:n?i.Colors.success:i.Colors.error,color:"#FFF"};return(0,a.jsx)(o.Pressable,{style:[l.component,d?u:{}],onPress:function(){c(t)},children:(0,a.jsxs)(o.Text,{children:[["a","b","c"][s],". ",r]})})};t.default=d},271:(e,t,r)=>{var n=r(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(9284),i=r(2686),s=(n(r(9526)),r(8933)),a=r(7557),l=s.StyleSheet.create({component:{flex:1,justifyContent:"center",alignItems:"center",padding:2*i.UI.padding},card:{width:"100%",height:"25%",padding:2*i.UI.padding,justifyContent:"center",backgroundColor:o.Colors.secondary,borderRadius:i.UI.borderRadius},header:{},body:{justifyContent:"center",width:"100%",marginBottom:i.UI.margin},footer:{},label:{textAlign:"center"},text:{fontSize:32,textAlign:"center",fontWeight:"bold",marginBottom:2*i.UI.margin},button:{width:"100%",padding:i.UI.padding,backgroundColor:o.Colors.warning,borderRadius:i.UI.borderRadius},buttonText:{color:o.Colors.primary,fontWeight:"bold"}}),d=function(e){var t=e.correctAnswers,r=e.wrongAnswers,n=e.startNewTest,i=r>=5;return(0,a.jsx)(s.View,{style:l.component,children:(0,a.jsxs)(s.View,{style:l.card,children:[(0,a.jsx)(s.View,{style:l.header,children:(0,a.jsx)(s.Text,{style:[l.text,{color:i?o.Colors.accent1:o.Colors.success}],children:i?"Ai picat!":"Ai trecut!"})}),(0,a.jsxs)(s.View,{style:l.body,children:[(0,a.jsxs)(s.Text,{style:l.label,children:["Corecte: ",t]}),(0,a.jsxs)(s.Text,{style:l.label,children:["Gresite: ",r]})]}),(0,a.jsx)(s.View,{style:l.footer,children:(0,a.jsx)(s.Pressable,{style:l.button,onPress:function(){n()},children:(0,a.jsx)(s.Text,{style:l.buttonText,children:i?"Mai incearca!":"Incepe un test nou"})})})]})})};t.default=d},3681:(e,t,r)=>{var n=r(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r(9526));var o=r(8933),i=r(2686),s=r(9284),a=r(7557),l=o.StyleSheet.create({component:{},textContainer:{flexDirection:"row",alignItems:"center",backgroundColor:s.Colors.secondary,paddingVertical:0,paddingHorizontal:4,borderRadius:i.UI.borderRadius,marginBottom:2},scoreLabel:{alignItems:"center",paddingHorizontal:4},text:{fontSize:11},greenText:{color:s.Colors.accent2,fontWeight:"bold"},redText:{color:s.Colors.accent1,fontWeight:"bold"}}),d=function(e){var t=e.correct,r=e.wrong,n=e.remaining;return(0,a.jsxs)(o.View,{style:l.component,children:[(0,a.jsxs)(o.View,{style:l.textContainer,children:[(0,a.jsx)(o.Text,{style:l.text,children:"Ramase"}),(0,a.jsx)(o.Text,{children:" - "}),(0,a.jsx)(o.View,{style:l.scoreLabel,children:(0,a.jsx)(o.Text,{style:l.greenText,children:n})})]}),(0,a.jsxs)(o.View,{style:l.textContainer,children:[(0,a.jsx)(o.Text,{style:l.text,children:"Corecte"}),(0,a.jsx)(o.Text,{children:" - "}),(0,a.jsx)(o.View,{style:l.scoreLabel,children:(0,a.jsx)(o.Text,{style:l.greenText,children:t})})]}),(0,a.jsxs)(o.View,{style:l.textContainer,children:[(0,a.jsx)(o.Text,{style:l.text,children:"Gresite "}),(0,a.jsx)(o.Text,{children:" - "}),(0,a.jsx)(o.View,{style:l.scoreLabel,children:(0,a.jsx)(o.Text,{style:l.redText,children:r})})]})]})};t.default=d},6977:(e,t,r)=>{var n=r(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(7156)),i=n(r(7424)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(9526)),a=r(8933),l=r(2686),d=r(9284),c=n(r(9605)),u=n(r(3681)),f=n(r(271)),h=r(7557);function y(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var p=a.StyleSheet.create({screen:{flex:1,padding:l.UI.padding,alignItems:"center",backgroundColor:d.Colors.background},centered:{flex:1,justifyContent:"center",alignItems:"center"},progressContainer:{width:"100%",position:"relative",top:0,flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-end"},questionContainer:{justifyContent:"center",alignItems:"center",width:"100%"},questionCard:{width:"100%",borderRadius:l.UI.borderRadius,padding:l.UI.padding,backgroundColor:d.Colors.secondary,marginTop:4*l.UI.margin,marginBottom:4*l.UI.margin,shadowColor:"black",shadowOffset:l.UI.shadowOffset,shadowOpacity:.2,shadowRadius:l.UI.borderRadius},answersContainer:{justifyContent:"center",alignItems:"center",width:"100%"},overlay:{position:"absolute",top:0,width:"100%",height:"100%"}}),g=function(e){var t=e.token,r=(0,s.useState)(!0),n=(0,i.default)(r,2),y=n[0],g=n[1],x=(0,s.useState)(!1),b=(0,i.default)(x,2),j=b[0],w=b[1],v=(0,s.useState)(null),C=(0,i.default)(v,2),m=C[0],O=C[1],I=(0,s.useState)(0),P=(0,i.default)(I,2),S=P[0],T=P[1],k=(0,s.useState)(null),_=(0,i.default)(k,2),U=_[0],V=_[1],A=(0,s.useState)(0),R=(0,i.default)(A,2),F=R[0],M=R[1],W=(0,s.useState)(0),q=(0,i.default)(W,2),B=q[0],E=q[1];(0,s.useEffect)((function(){function e(){return(e=(0,o.default)((function*(){try{var e=yield fetch(l.API_BASE_URL+"/tests",{method:"POST",headers:{Authorization:t}}),r=yield e.json();console.log(r.questions[0]);var n={};n.id=r.id,n.questions=r.questions.map((function(e){return{id:e.id,body:e.content,answers:e.answers.map((function(e){return{id:e.id,body:e.content,isCorrect:e.correct}}))}})),O(n),g(!1)}catch(o){console.error(o)}}))).apply(this,arguments)}m||function(){e.apply(this,arguments)}()}),[t,m]);var z=function(e){var t;V(e),w(!0),null!=m&&null!=(t=m.questions[S].answers.find((function(t){return t.id===e})))&&t.isCorrect?M((function(e){return e+1})):E((function(e){return e+1}))};return y?(0,h.jsx)(a.View,{style:p.centered,children:(0,h.jsx)(a.ActivityIndicator,{size:"large",color:d.Colors.primary})}):m||y?B>=5||S>=20?(0,h.jsx)(f.default,{wrongAnswers:B,correctAnswers:F,startNewTest:function(){g(!0),w(!1),O(null),T(0),V(null),M(0),E(0)}}):(0,h.jsxs)(a.View,{style:p.screen,children:[(0,h.jsx)(a.View,{style:p.progressContainer,children:(0,h.jsx)(u.default,{correct:F,wrong:S-F,remaining:m.questions.length-S})}),(0,h.jsx)(a.View,{style:p.questionContainer,children:(0,h.jsx)(a.View,{style:p.questionCard,children:(0,h.jsxs)(a.Text,{children:[S+1,". ",m.questions[S].body]})})}),(0,h.jsx)(a.View,{style:p.answersContainer,children:m.questions[S].answers.map((function(e,t){return(0,h.jsx)(c.default,{id:e.id,body:e.body,isCorrect:e.isCorrect,index:t,isHighlighted:U===e.id||e.isCorrect&&!!U,onPress:z},e.id)}))}),j&&(0,h.jsx)(a.Pressable,{style:p.overlay,onPress:function(){V(null),T((function(e){return e+1})),w(!1)}})]}):(0,h.jsx)(a.View,{style:p.screen,children:(0,h.jsx)(a.View,{style:p.centered,children:(0,h.jsx)(a.Text,{children:"Error! No test..."})})})};t.default=g}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],a=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,l]=n,d=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var c=l(r)}for(t&&t(n);d<s.length;d++)i=s[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[989],(()=>r(258)));n=r.O(n)})();
//# sourceMappingURL=main.0aef7dc5.js.map
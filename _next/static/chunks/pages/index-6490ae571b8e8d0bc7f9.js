(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{471:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var o=t(5893),u=t(7261),i=(t(7294),t(6221));function e(){var n=(0,u.Z)(["\n  border: none;\n  grid-row: 1;\n  grid-column: 2;\n  width: 180px;\n  height: 60px;\n  margin: auto;\n  font-size: 20px;\n  background-color: #70c1b3;\n  color: #000000;\n"]);return e=function(){return n},n}var a=(0,i.iv)(e()),c=function(n){var r=n.text;return(0,o.jsx)("button",{className:a,children:r})};function f(){var n=(0,u.Z)(["\n    background-color: ",";\n    width: ","px;\n    height: ","px;\n    border: none;\n  "]);return f=function(){return n},n}var s=function(n){var r=n.color,t=n.width,u=n.height,e=(0,i.iv)(f(),r,t,u);return(0,o.jsx)("button",{className:e})};function d(){var n=(0,u.Z)(["\n    display: grid;\n    grid-template-rows: ",";\n    grid-template-columns: ",";\n    grid-gap: 8px;\n    margin: 0 auto;\n    grid-row: 2;\n    grid-column: 2;\n  "]);return d=function(){return n},n}var h=["#50514F","#EEEEEE","#F25F5C","#247BA0","#FFE066"],l=function(n){var r=n.width,t=n.height,u=n.numRows,e=n.numColumns,a=n.board.flat().map((function(n,u){return(0,o.jsx)(s,{color:h[n],width:r,height:t},u)})),c=function(n,r){for(var t=[],o=0;o<n;o++)t.push("".concat(r,"px"));return t.join(" ")},f=(0,i.iv)(d(),c(u,t),c(e,r));return(0,o.jsx)("div",{className:f,children:a})};function p(){var n=(0,u.Z)(["\n  margin-top: ","px;\n  margin-left: calc((100vw - ","px) / 2);\n  width: ","px;\n  height: calc(100vh - ","px);\n  display: grid;\n  grid-template-rows: 60px 1fr;\n  grid-template-columns: 240px 1fr 240px;\n  gap: 24px 0;\n"]);return p=function(){return n},n}var v=(0,i.iv)(p(),40,1280,1280,40),g=function(n,r,t,o){var u=n*r-t.reduce((function(n,r){return n+r}))-o,i=[];t.forEach((function(n,r){for(var t=0;t<n;t++)i.push(r+2)}));for(var e=0;e<o;e++)i.push(0);for(var a=0;a<u;a++)i.push(1);for(var c=i.length-1;c>0;c--){var f=Math.floor(Math.random()*(c+1)),s=i[c];i[c]=i[f],i[f]=s}return i},m=[10,9,8],x=function(){return(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)(c,{text:"New Game"}),(0,o.jsx)(l,{width:120,height:80,numRows:6,numColumns:6,board:g(6,6,m,1)})]})},w=function(){return(0,o.jsx)(x,{})}},5301:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(471)}])}},function(n){n.O(0,[402,774,888,179],(function(){return r=5301,n(n.s=r);var r}));var r=n.O();_N_E=r}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9636:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return F}});var o=t(5893),i=t(7261),e=t(7294),u=t(6221);function c(){var n=(0,i.Z)(["\n  border: none;\n  grid-row: 1;\n  grid-column: 2;\n  width: 180px;\n  height: 60px;\n  margin: auto;\n  font-size: 20px;\n  background-color: #70c1b3;\n  color: #000000;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return c=function(){return n},n}var a=(0,u.iv)(c()),l=function(n){var r=n.text,t=n.onClick;return(0,o.jsx)("button",{className:a,onClick:t,children:r})};function d(){var n=(0,i.Z)(["\n    background-color: ",";\n    width: ","px;\n    height: ","px;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      position: relative;\n      width: ","px;\n      height: ","px;\n      right: ","px;\n      bottom: ","px;\n      border: solid 4px #70c1b3;\n    }\n  "]);return d=function(){return n},n}var s=1.2,h=function(n){var r=n.color,t=n.width,i=n.height,e=(0,u.iv)(d(),r,t,i,t*s,i*s,t*(s-1)/2,i*(s-1)/2);return(0,o.jsx)("button",{className:e})},p=10,f=9,v=8;function x(){var n=(0,i.Z)(["\n    display: grid;\n    grid-template-rows: ",";\n    grid-template-columns: ",";\n    grid-gap: 8px;\n    margin: 0 auto;\n    grid-row: 2;\n    grid-column: 2;\n  "]);return x=function(){return n},n}var g=function(n){var r=n.width,t=n.height,i=n.board.flat().map((function(n,i){return(0,o.jsx)(h,{color:n.color,width:r,height:t},i)})),e=function(n,r){for(var t=[],o=0;o<n;o++)t.push("".concat(r,"px"));return t.join(" ")},c=(0,u.iv)(x(),e(6,t),e(6,r));return(0,o.jsx)("div",{className:c,children:i})},m={isSelected:!1,color:"#F25F5C",num:p},w={isSelected:!1,color:"#247BA0",num:f},b={isSelected:!1,color:"#FFE066",num:v},E={isSelected:!1,color:"#50514F",num:1},_={isSelected:!1,color:"#EEEEEE",num:36-p-f-v-1},N=function(){var n=[];return[m,w,b,E,_].forEach((function(r){for(var t=0;t<r.num;t++)n.push(r)})),j(n)},j=function(n){for(var r=n.length-1;r>0;r--){var t=Math.floor(Math.random()*(r+1)),o=n[r];n[r]=n[t],n[t]=o}return n};function k(){var n=(0,i.Z)(["\n  margin-top: ","px;\n  margin-left: calc((100vw - ","px) / 2);\n  width: ","px;\n  height: calc(100vh - ","px);\n  display: grid;\n  grid-template-rows: 60px 1fr;\n  grid-template-columns: 240px 1fr 240px;\n  gap: 24px 0;\n"]);return k=function(){return n},n}var C=(0,u.iv)(k(),40,1280,1280,40),S=function(){var n=(0,e.useState)(N()),r=n[0],t=n[1];return(0,o.jsxs)("div",{className:C,children:[(0,o.jsx)(l,{text:"New Game",onClick:function(){return t(N())}}),(0,o.jsx)(g,{width:120,height:80,board:r})]})},F=function(){return(0,o.jsx)(S,{})}},5301:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9636)}])}},function(n){n.O(0,[402,774,888,179],(function(){return r=5301,n(n.s=r);var r}));var r=n.O();_N_E=r}]);
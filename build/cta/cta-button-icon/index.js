(()=>{"use strict";var e,t={994:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,l=window.wp.blockEditor,i=window.wp.components,o=JSON.parse('{"u2":"create-block/cta-button-icon"}');(0,e.registerBlockType)(o.u2,{parent:["create-block/cta-block"],attributes:{buttonText:{type:"string",default:"Get started"},buttonLink:{type:"string",default:"#"},iconClass:{type:"string",default:""},alignValue:{type:"string",default:"left"},linkObject:{type:"object"}},edit:function({attributes:e,setAttributes:o}){const{buttonText:a,iconClass:s,alignValue:r}=e;return(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(i.PanelBody,{title:(0,n.__)("Button Settings","blox-site")},(0,t.createElement)(i.TextControl,{label:(0,n.__)("Button Text","blox-site"),value:a,onChange:e=>o({buttonText:e})})),(0,t.createElement)(i.PanelBody,{title:"Text Panel Settings"},(0,t.createElement)(i.TextControl,{label:"Enter FA Icon Class",value:s,onChange:e=>{o({iconClass:e})}}),(0,t.createElement)(i.RadioControl,{label:"Alignment options",selected:r,options:[{label:"Align Left",value:"align-left"},{label:"Align Right",value:"align-right"}],onChange:e=>{o({alignValue:e})}}))),(0,t.createElement)("div",{className:"rounded-md inline bg-indigo-600 px-4 mt-12 py-2 text-base font-semibold leading-7 text-white hover:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},s&&"align-left"===r?(0,t.createElement)("i",{className:`px-2 ${s}`}):"",(0,t.createElement)(l.RichText,{tagName:"span",value:a,placeholder:(0,n.__)("Enter button text","blox-site"),className:"",onChange:e=>o({buttonText:e})}),s&&"align-right"===r?(0,t.createElement)("i",{className:`px-2 ${s}`}):""))},save:function({attributes:e}){const{buttonText:n,buttonLink:i,iconClass:o,alignValue:a}=e;return(0,t.createElement)("div",{...l.useBlockProps.save({className:"not-prose rounded-md inline bg-indigo-600 px-4 mt-12 py-3 text-base no-underline font-semibold leading-7 text-white hover:text-white focus:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",href:i})},o&&"align-left"===a?(0,t.createElement)("i",{className:`px-2 ${o}`}):"",(0,t.createElement)(l.RichText.Content,{tagName:"a",value:n}),o&&"align-right"===a?(0,t.createElement)("i",{className:`px-2 ${o}`}):"")}})}},n={};function l(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,i,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,i,o]=e[u],s=!0,r=0;r<n.length;r++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[r])))?n.splice(r--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={846:0,916:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,s,r]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in s)l.o(s,i)&&(l.m[i]=s[i]);if(r)var u=r(l)}for(t&&t(n);c<a.length;c++)o=a[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},n=globalThis.webpackChunkblox_site=globalThis.webpackChunkblox_site||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=l.O(void 0,[916],(()=>l(994)));i=l.O(i)})();
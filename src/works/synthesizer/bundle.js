!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(4)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=["sine","triangle","square","sawtooth"],r=o[0],i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.context=t}return function(e,t,o){t&&n(e.prototype,t),o&&n(e,o)}(e,[{key:"init",value:function(){this.oscillator=this.context.createOscillator(),this.gainNode=this.context.createGain(),this.oscillator.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.oscillator.type=r}},{key:"play",value:function(e){this.init();var t=this.context.currentTime;this.oscillator.frequency.setValueAtTime(e,this.context.currentTime),this.gainNode.gain.setValueAtTime(3.5,this.context.currentTime),this.oscillator.start(this.context.currentTime),this.stop(t)}},{key:"stop",value:function(e){this.gainNode.gain.exponentialRampToValueAtTime(.001,e+1),this.oscillator.stop(e+1)}}]),e}(),a={C:261.63,D:293.66,E:329.63,F:349.23,G:392,A:440,B:493.88,'C"':523.26},c={C:277.18,D:311.13,F:369.99,G:415.3,A:466.16},u={C:83,D:68,E:70,F:71,G:72,A:74,B:75,'C"':76},l={C:69,D:82,F:89,G:85,A:73};!function(e,t){var n=document.querySelectorAll(".regular .button"),o=document.querySelectorAll(".sharps .button"),r=Object.keys(e),i=Object.keys(t);n.forEach(function(e,t){r[t]&&(e.innerText=r[t])}),o.forEach(function(e,t){i[t]&&(e.innerText="".concat(i[t],"#"))})}(a,c);!function(e,t){try{var n=document.querySelector(".notes"),o=new AudioContext,r=new i(o);r.init(),n.addEventListener("click",function(n){if("button"===n.target.classList[0]){var o,i=n.target.innerText;y(s,n.target),-1===i.indexOf("#")&&(o=e[i]),-1!==i.indexOf("#")&&(i=i.replace("#",""),console.log(i),o=t[i]),r.play(o)}});var a=Object.values(u),c=Object.keys(e),f=Object.values(l),d=Object.keys(l);window.addEventListener("keydown",function(n){if(console.log(n.keyCode),a.indexOf(n.keyCode)>=0){var o=a.indexOf(n.keyCode);console.log(n.keyCode);var i=c[o],u=p(!1,o);y(s,u);var l=e[i];r.play(l)}if(f.indexOf(n.keyCode)>=0){var v=f.indexOf(n.keyCode);console.log(n.keyCode);var b=d[v],h=p(!0,v);y(s,h);var m=t[b];r.play(m)}})}catch(e){console.log(e)}}(a,c);!function(e){var t=document.querySelector(".waveform-labels");document.querySelector(".sine").classList.add("activeWaveLabel"),t.addEventListener("click",function(t){var n=t.target.classList[0];-1!==e.indexOf(n)&&(d(),t.target.classList.add("activeWaveLabel"),f(n))})}(o);var s,f=function(e){var t=document.querySelector(".sticks"),n=document.querySelectorAll(".waveform");if(r!==e){var o=Array.prototype.filter.call(n,function(e){return e.getAttribute("data-wave")===r})[0],i=Array.prototype.filter.call(n,function(t){return t.getAttribute("data-wave")===e})[0];document.querySelector(".waveforms").appendChild(o),t.appendChild(i),r=e}},d=function(){document.querySelectorAll(".waveform-labels *").forEach(function(e){return e.classList.remove("activeWaveLabel")})},y=function(e,t){v(e),t.classList.add("activeButton"),s=t},v=function(e){e&&e.classList.remove("activeButton")},p=function(e,t){return e?document.querySelectorAll(".sharps .button")[t]:document.querySelectorAll(".regular .button")[t]}},function(e,t){},function(e,t,n){}]);
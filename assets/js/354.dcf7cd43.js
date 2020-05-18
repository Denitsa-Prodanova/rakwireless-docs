(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{689:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lora®-p2p-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lora®-p2p-mode"}},[t._v("#")]),t._v(" LoRa® P2P Mode")]),t._v(" "),a("p",[t._v("In this section, I’ll show how to use LoRa® P2P mode. We will be using EU868 as our frequency, although it is applicable to other standard bands.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First, find two "),a("strong",[t._v("RAK5205 LoRa® Tracker")]),t._v(" which can work on EU868 frequency and make sure their firmware version isn’t less than "),a("strong",[t._v("V3.0.0.1")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Next, connect these two RAK5205 LoRa® Tracker with PC through UART, and open two serial port tool on PC.")])]),t._v(" "),a("li",[a("p",[t._v("Now, configure them to both work in LoRaP2P mode as follow:")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:work_mode:1\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/qytvsg9mx3y4drl7pwrg.png",width:"60%","figure-number":"1",caption:"P2P Initialization"}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Then configure LoRaP2P parameters for both of them as follow for example:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lorap2p:869525000:7:0:1:5:5\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/fyoulppnh8gdz3vawjv7.jpg",width:"100%","figure-number":"2",caption:"Configuring P2P in both RAK5205 Nodes"}}),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("OK! Try to send a message from LoRa® Breakout Module 2 (the right one) to LoRa® Breakout Module 1 (the left one):")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+send"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lorap2p:1234567890\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/khjhkisjuxtjb5oxps94.png",width:"100%","figure-number":"3",caption:"Message sent and received status in the two Nodes"}}),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Successfully! Now, send more messages.")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+send"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lorap2p:12345678901234567890\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ckbymbjhypol3p0q1bjp.jpg",width:"100%","figure-number":"4",caption:"Succeeding Messages sent to the other Node"}}),t._v(" "),a("p",[t._v("Yehey! You have successfully finished your RAK5205 LPWAN Tracker Set Up. You are now ready to develop the coolest project that could potentially change the world.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);
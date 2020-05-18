(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{708:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"abp-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abp-mode"}},[t._v("#")]),t._v(" ABP Mode")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("To join the ABP mode, go to device settings and switch the activation method to "),a("strong",[t._v("ABP")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("strong",[t._v("Device Address")]),t._v(", "),a("strong",[t._v("Network Session Key")]),t._v(" and "),a("strong",[t._v("App Session Key")]),t._v(" will be generated automatically by default.")])])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ccjbidnd8e8hqvnjvc9g.png",width:"100%","figure-number":"1",caption:"Switching to ABP mode"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Save the mode change and return to the "),a("strong",[t._v("Device Overview page")]),t._v(". You can copy the keys by pressing the button after the value fields marked in red in Figure 2.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/dann1wr9tchabmot7dqe.png",width:"100%","figure-number":"2",caption:"ABP Parameters Screen"}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Now we need to update the RAK7200 configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:region:EU868\n")])])]),a("p",[t._v("As you can see in "),a("strong",[t._v("Figure 3")]),t._v(", as we were in the same region (EU868), there was no change.")]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/zarmjkdjh4o6fisc0rfq.jpg",width:"100%","figure-number":"3",caption:"Region Setup"}}),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Change the mode to "),a("strong",[t._v("ABP")]),t._v(" with the command:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:join_mode:1\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/t5mjuy5rxxolrtiin8tt.jpg",width:"100%","figure-number":"4",caption:"Join Mode Setup"}}),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Now that the mode has been changed, enter the parameters: "),a("strong",[t._v("Device Address, Network Session Key")]),t._v(", and "),a("strong",[t._v("Application Session Key")]),t._v(". Use the commands below. Remember to replace the "),a("strong",[t._v('"X"')]),t._v(" with the corresponding parameter value for your particular case (Figure 2 for reference of the parameters):")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:dev_addr:X\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:nwks_key:X\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:apps_key:X\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tacqtzuayki77cruuwqc.jpg",width:"100%","figure-number":"5",caption:"Setting up the RAK7200 ABP Parameters"}}),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Finally execute the join command:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+join\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/gc45ctfnhpmyurhjw7uj.jpg",width:"100%","figure-number":"6",caption:"Join Command"}}),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("You can test the connection by sending an uplink frame. Use the following for example:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("at+send"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:1:12345678\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/yzu8x3arcigsctbjjvws.jpg",width:"100%","figure-number":"7",caption:"Sending an Uplink Frame"}}),t._v(" "),a("p",[t._v("If you get a response in your TTN live data feed as in "),a("strong",[t._v("Figure 8")]),t._v(", than you are all set!")]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/sxccujhjtfgxjkthyvy6.png",width:"100%","figure-number":"8",caption:"Sending Data to TTN from RAK7200"}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);
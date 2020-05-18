(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{683:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"otaa-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),e("ol",[e("li",[t._v("To join ChirpStack in OTAA mode, select “"),e("strong",[t._v("DeviceProfile_OTAA")]),t._v("”.")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xjpytzbfs9a9bzjjqohr.png",width:"100%","figure-number":"1",caption:"Selecting OTAA Activation Mode in ChirpStack"}}),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Press “"),e("strong",[t._v("CREATE DEVICE")]),t._v("” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/hkmekngvrkk9goqid1pv.png",width:"100%","figure-number":"2",caption:"Application Key Generation"}}),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v('Click "'),e("strong",[t._v("SET DEVICE KEYS")]),t._v("” button. Now, you’ve completed the configuration on ChirpStack.")])]),t._v(" "),e("ul",[e("li",[t._v('The Device EUI which was set in the previous section to your RAK5205 WisTrio LPWAN Tracker as "dev_eui" is the same in the image highlighted below.')])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mdbj3th73unruqxl98zs.png",width:"100%","figure-number":"3",caption:"Device EUI Code"}}),t._v(" "),e("ul",[e("li",[t._v('Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.')])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xrmpjlafrry3ag479lnl.png",width:"100%","figure-number":"4",caption:"Application Key LoRaWAN®"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("The Application EUI which was into RAK5205 as “"),e("strong",[t._v("app_eui")]),t._v("” is not needed for ChirpStack.")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Next, let’s "),e("strong",[t._v("configure")]),t._v(" RAK5205 WisTrio LPWAN Tracker by using "),e("strong",[t._v("AT commands")]),t._v(". To do this, connect your RAK5205 WisTrio LPWAN Tracker to a PC, power it on and open "),e("strong",[t._v("RAK Serial Port Tool")]),t._v(" on your computer.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+version\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/fqw3e70otnu8ymgnmu79.png",width:"60%","figure-number":"5",caption:"RAK Serial Port Tool"}}),t._v(" "),e("ul",[e("li",[t._v("Now, let us join our RAK5205 using the OTAA activation mode.")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("If the join mode is not in OTAA, just set the LoRa® join mode to "),e("strong",[t._v("OTAA")]),t._v(" and LoRa® class to "),e("strong",[t._v("Class A")]),t._v(" by typing the AT commands shown in the picture below.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:join_mode:0\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config-lora:class:0\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mdjpe1uhxdmahhthbt8w.jpg",width:"100%","figure-number":"6",caption:"Setting of LoRaWAN® mode and class"}}),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Type the following AT command to set the:**Frequency/Region, Device EUI, Application EUI and Application Key.**Remember to replace the "),e("strong",[t._v('"XXX"')]),t._v(" and "),e("strong",[t._v('"XXXX"')]),t._v(" with the corresponding parameter value for your particular case:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:region:XXX\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:dev_eui:XXXX\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:app_eui:XXXX\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:app_key:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vugtbybavkertynte382.jpg",width:"100%","figure-number":"7",caption:"Setting of Frequency and Device EUI"}}),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rkeautvpyyd4oquhxvgq.jpg",width:"100%","figure-number":"8",caption:"Setting of Application EUI and Key"}}),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Then, "),e("strong",[t._v("join")]),t._v(" in OTAA mode.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+join\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xlebk2u3xe2ryxo5ss11.png",width:"60%","figure-number":"9",caption:"Joining in OTAA"}}),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Joined Successfully!")])])]),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[t._v('You can view the "'),e("strong",[t._v("JoinRequest")]),t._v('" and "'),e("strong",[t._v("JoinAccept")]),t._v('" on ChirpStack page:')])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/pvt7etzwzprp8nqebfqi.png",width:"100%","figure-number":"10",caption:"Join Request of the Device in the ChirpStack"}}),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Let’s try sending data from our RAK5205 WisTrio LPWAN Tracker to the ChirpStack by typing the command below in the serial port.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+send"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:2:1234567890\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/j7c4lszbgth963mh6kea.png",width:"60%","figure-number":"11",caption:"Sending Data to ChirpStack"}}),t._v(" "),e("p",[t._v("You can see the message on ChirpStack page:")]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/qk5n8nssmvinougxfqk6.png",width:"100%","figure-number":"12",caption:"Message Received in ChirpStack"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);
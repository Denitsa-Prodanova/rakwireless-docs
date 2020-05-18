(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{720:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"otaa-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),a("ol",[a("li",[t._v("To join ChirpStack in OTAA mode, select “"),a("strong",[t._v("DeviceProfile_OTAA")]),t._v("”.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/qyrvspezqeezlwewbw0t.png",width:"100%","figure-number":"1",caption:"Selecting OTAA Activation Mode in ChirpStack"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Press “"),a("strong",[t._v("CREATE DEVICE")]),t._v("” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ulkivutt3w112a4yegfs.png",width:"100%","figure-number":"2",caption:"Application Key Generation"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v('Click "'),a("strong",[t._v("SET DEVICE KEYS")]),t._v("” button. Now, you’ve completed the configuration on ChirpStack.")])]),t._v(" "),a("ul",[a("li",[t._v('The Device EUI which was set in the previous section to your RAK7204 LPWAN Environmental Sensor as "dev_eui" is the same in the image highlighted below.')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rrxmljx5q8k8f5t8eejc.png",width:"100%","figure-number":"3",caption:"Device EUI Code"}}),t._v(" "),a("ul",[a("li",[t._v('Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.')])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ulbg6ggoqsntsdmkck25.png",width:"100%","figure-number":"4",caption:"Application Key LoRaWAN®"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),a("p",[t._v("The Application EUI which was into RAK7204 LPWAN Environmental Sensor as “app_eui” is not needed for ChirpStack.")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Next, let’s "),a("strong",[t._v("configure")]),t._v(" RAK7204 LPWAN Environmental Sensor by using "),a("strong",[t._v("AT commands")]),t._v(". To do this, connect yourRAK7204 LPWAN Environmental Sensor to a PC, power it on and open "),a("strong",[t._v("RAK Serial Port Tool")]),t._v(" on your computer.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+version\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/fqw3e70otnu8ymgnmu79.png",width:"50%","figure-number":"5",caption:"RAK Serial Port Tool"}}),t._v(" "),a("ul",[a("li",[t._v("Now, let us join our RAK7204 using the OTAA activation mode.")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("If the join mode is not in OTAA, just set the LoRa® join mode to "),a("strong",[t._v("OTAA")]),t._v(" and LoRa® class to "),a("strong",[t._v("Class A")]),t._v(" by typing the AT commands shown in the picture below.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:join_mode:0\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config-lora:class:0\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mdjpe1uhxdmahhthbt8w.jpg",width:"100%","figure-number":"6",caption:"Setting of LoRaWAN® mode and class"}}),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Type the following AT command to set the: "),a("strong",[t._v("Frequency/Region, Device EUI, Application EUI and Application Key.")]),t._v(" Remember to replace the "),a("strong",[t._v('"XXXX"')]),t._v(" with the corresponding parameter value for your particular case:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:region:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:dev_eui:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:app_eui:XXXX\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+set_config=lora:app_key:XXXX\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vugtbybavkertynte382.jpg",width:"100%","figure-number":"7",caption:"Setting of Frequency and Device EUI"}}),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rkeautvpyyd4oquhxvgq.jpg",width:"100%","figure-number":"8",caption:"Setting of Application EUI and Key"}}),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Then, "),a("strong",[t._v("join")]),t._v(" in OTAA mode.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+join\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xlebk2u3xe2ryxo5ss11.png",width:"50%","figure-number":"9",caption:"Joining in OTAA"}}),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Joined Successfully! 🎉")])])]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[t._v('You can view the "'),a("strong",[t._v("JoinRequest")]),t._v('" and "'),a("strong",[t._v("JoinAccept")]),t._v('" on ChirpStack page:\n'),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/bomjx5d87s8b3dnk7wlc.png",width:"100%","figure-number":"10",caption:"Join Request of the Device in the ChirpStack"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Let’s try sending data from our RAK7204 LPWAN Environmental Sensor to the ChirpStack by typing the command below in the serial port.")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("at+send=lora:2:1234567890\n")])])]),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/j7c4lszbgth963mh6kea.png",width:"50%","figure-number":"11",caption:"Sending Data to ChirpStack"}}),t._v(" "),a("ul",[a("li",[t._v("You can see the message on ChirpStack page:")])]),t._v(" "),a("rk-img",{attrs:{src:t.$frontmatter.static_root+"/bomjx5d87s8b3dnk7wlc.png",width:"100%","figure-number":"12",caption:"Message Received in ChirpStack"}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);
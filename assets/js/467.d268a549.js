(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{802:function(t,o,i){"use strict";i.r(o);var e=i(19),r=Object(e.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"otaa-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),i("ol",[i("li",[t._v("To join ChirpStack in OTAA mode, select “"),i("strong",[t._v("DeviceProfile_OTAA")]),t._v("”.")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/o5jklje02ar3acrwxtor.png",width:"100%","figure-number":"1",caption:"Selecting OTAA Activation Mode in ChirpStack"}}),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[t._v("Press “"),i("strong",[t._v("CREATE DEVICE")]),t._v("” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mzzpzy776uiagdgddwcx.png",width:"100%","figure-number":"2",caption:"Application Key Generation"}}),t._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[t._v('Click "'),i("strong",[t._v("SET DEVICE KEYS")]),t._v("” button. Now, you’ve completed the configuration on ChirpStack.")])]),t._v(" "),i("ul",[i("li",[t._v("The "),i("strong",[t._v("Device EUI")]),t._v(' which was set in the previous section to your RAK811 LPWAN Evaluation Board as "'),i("strong",[t._v("dev_eui")]),t._v('" is the same in the image highlighted below.')])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/b8phlp7v8vvvfqffshmc.png",width:"100%","figure-number":"3",caption:"Device EUI Code"}}),t._v(" "),i("ul",[i("li",[t._v("Same with the "),i("strong",[t._v("Application Key")]),t._v(', which was set in the previous section as "'),i("strong",[t._v("app_key")]),t._v('" is the same with the image highlighted.')])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/dpgjv0ob4y7ujj0trkvh.png",width:"100%","figure-number":"4",caption:"Application Key LoRaWAN®"}}),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),i("p",[t._v("The "),i("strong",[t._v("Application EUI")]),t._v(" which was set into RAK811 LPWAN Evaluation Board as “"),i("strong",[t._v("app_eui")]),t._v("” is not needed for ChirpStack.")])]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("Next, let’s "),i("strong",[t._v("configure")]),t._v(" RAK811 LPWAN Evaluation Board by using "),i("strong",[t._v("AT commands")]),t._v(". To do this, connect your RAK811 LPWAN Evaluation Board to a PC, power it on and open "),i("strong",[t._v("RAK Serial Port Tool")]),t._v(" on your computer.")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/fqw3e70otnu8ymgnmu79.png",width:"60%","figure-number":"5",caption:"RAK Serial Port Tool"}}),t._v(" "),i("ul",[i("li",[t._v("Now, let us join our RAK811 using the OTAA activation mode.")])]),t._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[t._v("If the join mode is not in OTAA, just set the LoRa® join mode to "),i("strong",[t._v("OTAA")]),t._v(" and LoRa® class to "),i("strong",[t._v("Class A")]),t._v(" by typing the AT commands shown in the picture below.")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mdjpe1uhxdmahhthbt8w.jpg",width:"100%","figure-number":"6",caption:"Setting of LoRaWAN® Mode and Class"}}),t._v(" "),i("ol",{attrs:{start:"6"}},[i("li",[t._v("Type the following AT command to set the:"),i("strong",[t._v("Frequency/Region to EU868, Device EUI, Application EUI and Application Key")]),t._v(":")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vugtbybavkertynte382.jpg",width:"100%","figure-number":"7",caption:"Setting of Frequency and Device EUI"}}),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rkeautvpyyd4oquhxvgq.jpg",width:"100%","figure-number":"8",caption:"Setting of Application EUI and Key"}}),t._v(" "),i("ol",{attrs:{start:"7"}},[i("li",[t._v("Then, "),i("strong",[t._v("join")]),t._v(" in OTAA mode.")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xlebk2u3xe2ryxo5ss11.png",width:"60%","figure-number":"9",caption:"Joining in OTAA"}}),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Joined Successfully!")])])]),t._v(" "),i("ol",{attrs:{start:"8"}},[i("li",[t._v('You can view the "'),i("strong",[t._v("JoinRequest")]),t._v('" and "'),i("strong",[t._v("JoinAccept")]),t._v('" on ChirpStack page:')])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tnim0kbi0g0cebalhddc.png",width:"100%","figure-number":"10",caption:"Join Request of the Device in the ChirpStack"}}),t._v(" "),i("ol",{attrs:{start:"9"}},[i("li",[t._v("Let’s try sending data from our RAK811 LPWAN Evaluation Board to the ChirpStack by typing the command below in the serial port.")])]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/j7c4lszbgth963mh6kea.png",width:"60%","figure-number":"11",caption:"Sending Data to ChirpStack"}}),t._v(" "),i("p",[t._v("You can see the message on ChirpStack page:")]),t._v(" "),i("rk-img",{attrs:{src:t.$frontmatter.static_root+"/yjrvtdwmvydajevbvnov.png",width:"100%","figure-number":"12",caption:"Message Received in ChirpStack"}})],1)}),[],!1,null,null,null);o.default=r.exports}}]);
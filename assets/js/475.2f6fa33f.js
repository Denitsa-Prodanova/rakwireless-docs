(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{810:function(t,o,e){"use strict";e.r(o);var r=e(19),a=Object(r.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"interfacing-with-rak811-lpwan-evaluation-board"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interfacing-with-rak811-lpwan-evaluation-board"}},[t._v("#")]),t._v(" Interfacing with RAK811 LPWAN Evaluation Board")]),t._v(" "),e("p",[t._v("In order for you to be able to interface with the RAK811 LPWAN Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool "),e("strong",[e("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("⚠️ WARNING")]),t._v(" "),e("p",[t._v("Before powering the RAK811 LPWAN Evaluation Board , you should install the LoRa® antenna first . Not doing so might damage the board")])]),t._v(" "),e("ul",[e("li",[t._v("Using a standard "),e("strong",[t._v("Micro - USB Cable")]),t._v(", connect your RAK811 LPWAN Evaluation Board to your computer.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("If this is your first time to connect your RAK811 LPWAN Evaluation Board to your computer, it should automatically download the CH340 driver in order for them to communicate properly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step.")])]),t._v(" "),e("ul",[e("li",[t._v("Go to your "),e("strong",[t._v("Device Manager")]),t._v(" by pressing : "),e("strong",[t._v("Windows + R")]),t._v(" and type "),e("code",[t._v("devmgmt.msc")]),t._v(" or "),e("strong",[t._v("search in Start Menu")]),t._v(' or right click "'),e("strong",[t._v("My Computer")]),t._v('" or "'),e("strong",[t._v("This PC")]),t._v('" and click '),e("strong",[t._v("Manage")]),t._v(". Look for "),e("strong",[t._v("Other Devices.")])])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ojnphsuvfgrvwzd4dvu8.png",width:"100%","figure-number":"1",caption:"Missing Driver for the RAK811 LPWAN Evaluation Board"}}),t._v(" "),e("ul",[e("li",[t._v('Under "'),e("strong",[t._v("Other devices")]),t._v('" drop down list, an unknown '),e("strong",[t._v("USB2.0-Serial")]),t._v(' driver must appear. Right click into it and choose "'),e("strong",[t._v("Search automaticaly for updated driver software")]),t._v('". Again, before doing so, make sure to have an internet access or it will fail.')])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ejfeqklgjwmjjky5ewag.png",width:"100%","figure-number":"2",caption:"Automatic Driver Installation via Internet"}}),t._v(" "),e("ul",[e("li",[t._v('Wait for it to automatically download and install the missing driver. Once installation is done, "'),e("strong",[t._v("USB-SERIAL CH340")]),t._v('" must appear in the '),e("strong",[t._v("Ports (COM & LPT)")]),t._v(" drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB-SERIAL CH340 driver is "),e("strong",[t._v("COM4")]),t._v(".")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tfl6jmjcsapgpmagthvj.png",width:"100%","figure-number":"3",caption:"USB-SERIAL CH340 Driver Successfully Installed"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("In case the driver is still not installed upon doing the previous steps, kindly download the driver manually through this "),e("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("ul",[e("li",[t._v('Let us now test if your RAK811 LPWAN Evaluation Board can now communicate with the RAK Serial Port Tool. Connect with the RAK Serial Port Tool using the parameters listed below and click "'),e("strong",[t._v("Open")]),t._v('".')])]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("COM")]),t._v(": Choose the COM Port associated with the USB-SERIAL CH340 from the previous step. For this tutorial, the COM Port is COM4.")]),t._v(" "),e("li",[e("strong",[t._v("Baud Rate")]),t._v(": "),e("strong",[t._v("115200")]),t._v(" bps")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/q5ubbty2twyeocvnmttc.png",width:"100%","figure-number":"4",caption:"Connecting to the RAK Serial Port Tool"}}),t._v(" "),e("ul",[e("li",[t._v("To verify connectivity, let's try sending AT+Commands. In the RAK Serial Port Tool, there are built-in AT+Commands within it at the right side. Try sending the code below to check the firmware version of your RAK811 LPWAN Evaluation Board. If connection is successful, in the monitor panel at the left, the firmware version should appear same with the image shown below:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+version\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/px93o4onb4kxmiwvsumf.png",width:"100%","figure-number":"5",caption:"AT+Command Sample Serial Communication Test"}}),t._v(" "),e("p",[t._v("Congratulations! 🎉 You have just successfully interfaced your RAK811 LPWAN Evaluation Board with your computer! Go on to the next documentations to fully configure your RAK811 LPWAN Evaluation Board and Connect it to The Things Network (TTN).")])],1)}),[],!1,null,null,null);o.default=a.exports}}]);
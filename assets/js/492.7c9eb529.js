(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{827:function(t,r,e){"use strict";e.r(r);var o=e(19),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"device-firmware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#device-firmware-setup"}},[t._v("#")]),t._v(" Device Firmware Setup")]),t._v(" "),e("p",[t._v("An easy and quick way to have a fully functional "),e("strong",[t._v("RAK8212 iTracker Pro")]),t._v(" is by using a Pre-compiled Firmware Image provided. In this document are the step by step instructions on how to install the Image into your device.")]),t._v(" "),e("h2",{attrs:{id:"burn-the-latest-firmware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#burn-the-latest-firmware"}},[t._v("#")]),t._v(" Burn the latest Firmware")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("If you want to get a pre-compiled firmware instead of compiling the source code by\nyourself, you can find the latest firmware on RAK website "),e("strong",[e("a",{attrs:{href:"https://downloads.rakwireless.com/en/Cellular/RAK8212/Firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Download and install "),e("strong",[t._v("J-Link tool")]),t._v(" on your Windows PC. You can download it "),e("strong",[e("a",{attrs:{href:"https://downloads.rakwireless.com/en/Cellular/RAK8212/Tool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Connect the RAK8212 iTracker Pro with your PC through through your JTAG Emulator Kit as follows:")])])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/e85ljqeubbgacmtfqm6e.jpg",width:"100%","figure-number":"1",caption:"RAK8212 to Windows PC connection thru JTag Emulator Kit"}}),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Now, "),e("strong",[t._v("Open")]),t._v(" the program “"),e("strong",[t._v("J-Flash V6.41a")]),t._v("” which you just installed and click “"),e("strong",[t._v("Start J-Flash")]),t._v("”")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/pfxc6gdoyv8djlndcfgt.jpg",width:"100%","figure-number":"2",caption:"J-Flash Start Connection"}}),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Click the "),e("strong",[t._v("button")]),t._v(" marked with the "),e("strong",[t._v("red box")]),t._v(" in the image below labeled "),e("strong",[t._v("Figure 3")]),t._v(", then you can see the\nfollowing page as shown in "),e("strong",[t._v("Figure 4")]),t._v(" and in the table provided.")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ewkidffcazavmmscfdta.jpg",width:"100%","figure-number":"3",caption:"J-Flash Target Device Choosing"}}),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ydqhs7betd9x9vty0bwf.jpg",width:"100%","figure-number":"4",caption:"J-Flash Target Device Parameter"}}),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Parameter")])]),t._v(" "),e("th",[e("strong",[t._v("Value")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Manufacturer")]),t._v(" "),e("td",[t._v("Nordic Semiconductor")])]),t._v(" "),e("tr",[e("td",[t._v("Device")]),t._v(" "),e("td",[t._v("nRF52832_xxAA")])]),t._v(" "),e("tr",[e("td",[t._v("Core")]),t._v(" "),e("td",[t._v("Cortex-M4")])]),t._v(" "),e("tr",[e("td",[t._v("Flash Size")]),t._v(" "),e("td",[t._v("512 KB + 4 KB")])]),t._v(" "),e("tr",[e("td",[t._v("RAM Size")]),t._v(" "),e("td",[t._v("64 KB")])])])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Click "),e("strong",[t._v("OK")]),t._v(" and a window pops-up as shown in the image below:")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/rrdddufy1ykhtnoz85fm.jpg",width:"100%","figure-number":"5",caption:"J-Flash Target Device Parameter Selection Window"}}),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Now, connect to the RAK8212 iTracker Pro by navigating through "),e("strong",[t._v("Target>Connect")]),t._v(" in the "),e("strong",[t._v("Main Menu.")])])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/dh4mpqr9z45vcqlpb9xh.jpg",width:"100%","figure-number":"6",caption:"Connecting to the RAK8212 iTracker Pro"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("If connection is unsuccessful, please recheck the connections between the RAK8212 iTracker Pro, JTAG, and the connecting wires.")])]),t._v(" "),e("ol",[e("li",[t._v("Open the download firmware of the RAK8212 iTracker Pro by dragging it into the window as shown in the image below:")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/jrtcho26jvqd43gceelw.jpg",width:"100%","figure-number":"7",caption:"RAK8212 Firmware Opening"}}),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Before going into the firmware process, make sure to have the old firmware erased in the chip by navigating through "),e("strong",[t._v("Target>Manual Programming>Erase Chip")]),t._v(" in the "),e("strong",[t._v("Main Menu")]),t._v(" or by doing the process shown in the image below:")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/nqtp5abjixx7ejfvlu21.jpg",width:"100%","figure-number":"8",caption:"RAK8212 Old Firmware Data Erasing"}}),t._v(" "),e("ol",{attrs:{start:"10"}},[e("li",[e("p",[t._v("After the successful erasing of the old Firmware, you can start to burn the new firmware into RAK8212 iTracker Pro by navigating through "),e("strong",[t._v("Target>Production Programming")]),t._v(" in the "),e("strong",[t._v("Main Menu")]),t._v(' or by Pressing "'),e("strong",[t._v("F7")]),t._v('".')])]),t._v(" "),e("li",[e("p",[t._v("Wait for a couple of seconds and a notification pop-ups showing a successful burning of the updated firmware as shown in the image below:")])])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/eqagc4qeasa4xvpbypx9.jpg",width:"100%","figure-number":"9",caption:"RAK8212 Firmware Burning Successful"}}),t._v(" "),e("h2",{attrs:{id:"firmware-logs-checking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#firmware-logs-checking"}},[t._v("#")]),t._v(" Firmware Logs Checking")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("Open")]),t._v(" the program “"),e("strong",[t._v("J-Link\nRTT Viewer V6.41a")]),t._v("” which you just installed and click "),e("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Choose the parameters as shown in the image and in the table provided below and click "),e("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/dquesjm84olj0q61vidc.jpg",width:"100%","figure-number":"10",caption:"Firmware Log Checking Parameters"}}),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Parameter")])]),t._v(" "),e("th",[e("strong",[t._v("Value")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Manufacturer")]),t._v(" "),e("td",[t._v("Nordic Semiconductor")])]),t._v(" "),e("tr",[e("td",[t._v("Device")]),t._v(" "),e("td",[t._v("nRF52832_xxAA")])]),t._v(" "),e("tr",[e("td",[t._v("Core")]),t._v(" "),e("td",[t._v("Cortex-M4")])]),t._v(" "),e("tr",[e("td",[t._v("Flash Size")]),t._v(" "),e("td",[t._v("516 KB")])]),t._v(" "),e("tr",[e("td",[t._v("RAM Size")]),t._v(" "),e("td",[t._v("64 KB")])])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("Connect by navigating through "),e("strong",[t._v("File>Connect")]),t._v(" in the "),e("strong",[t._v("Main Menu")]),t._v(' or by pressing "'),e("strong",[t._v("F2")]),t._v('".')])]),t._v(" "),e("li",[e("p",[t._v("A sample log is shown in the image below:")])])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/n72yss9n4olrt2sqb1tv.jpg",width:"100%","figure-number":"11",caption:"Firmware Log Sample"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("If no logs are shown upon connecting, try resetting the RAK8212 iTracker Pro and redo the Firmware Logs Checking Section")])])],1)}),[],!1,null,null,null);r.default=a.exports}}]);
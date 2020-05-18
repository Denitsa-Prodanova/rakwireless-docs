(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{791:function(t,e,o){"use strict";o.r(e);var a=o(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"connecting-to-the-things-network-ttn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-things-network-ttn"}},[t._v("#")]),t._v(" Connecting to The Things Network (TTN)")]),t._v(" "),o("p",[t._v("The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network "),o("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("here")]),o("OutboundLink")],1),t._v(".\nIn this section, we’ll show you how to connect the RAK811 LPWAN Breakout Module with TTN.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("First, "),o("strong",[t._v("connect")]),t._v(" the RAK811 LPWAN Breakout Module to your PC and open the "),o("strong",[t._v("Serial Port Tool")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Select the appropriate COM port and "),o("strong",[t._v("open")]),t._v(" it as in the image:")])])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/lcvx0tpp0mvbqtfvveja.png",width:"100%","figure-number":"1",caption:"RAK811 Serial Port Tool"}}),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),o("p",[t._v("In this section, it is the assumption that you are within the coverage range of a TTN Gateway.")])]),t._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[t._v("Now go to the "),o("a",{attrs:{href:"https://www.thethingsnetwork.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TTN Website"),o("OutboundLink")],1),t._v(" and Log in.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xcnu0ubgglpnncjaxcxx.jpg",width:"100%","figure-number":"2",caption:"The Things Network Homepage"}}),t._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[t._v('Choose "'),o("strong",[t._v("Console")]),t._v('" located at the top right corner. Then, Click "'),o("strong",[t._v("Application")]),t._v('".')])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/dewhjv5kvji5cnwlb8q4.png",width:"100%","figure-number":"3",caption:"TTN Console page"}}),t._v(" "),o("h2",{attrs:{id:"adding-an-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-an-application"}},[t._v("#")]),t._v(" Adding an Application")]),t._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[t._v('Press the "'),o("strong",[t._v("add application")]),t._v('" button.')])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/q69iye4keg0wcwvllxq4.png",width:"100%","figure-number":"4",caption:"TTN Applications Page"}}),t._v(" "),o("p",[o("strong",[t._v("6.")]),t._v(" Create your own Application by filling in with correct contents.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),o("p",[t._v("The Application ID is an unique combination of lower case, alphanumerical characters, nonconsecutive - and _.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/kyllbiovwoj3dagerfw9.png",width:"100%","figure-number":"5",caption:"TTN Add Application Page"}}),t._v(" "),o("ol",{attrs:{start:"7"}},[o("li",[t._v("Then press the “"),o("strong",[t._v("Add application")]),t._v("” button at the bottom of this page, and you can see the following page:")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/ig62tkokbeyymlwpe1gr.png",width:"100%","figure-number":"6",caption:"TTN Application Information Page"}}),t._v(" "),o("ol",{attrs:{start:"8"}},[o("li",[t._v("At the middle of this page, you can find the box named “"),o("strong",[t._v("DEVICES")]),t._v("” and click “"),o("strong",[t._v("register device")]),t._v("”.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/jxfqlvwpvbe8irybx6sm.png",width:"100%","figure-number":"7",caption:"Registering Device in TTN"}}),t._v(" "),o("ol",{attrs:{start:"9"}},[o("li",[t._v('Fill in the "'),o("strong",[t._v('Device ID"')]),t._v(" . Click the icon in the "),o("strong",[t._v("“Device EUI")]),t._v("”, then a code is generated automatically.")])]),t._v(" "),o("p",[t._v("You can get the "),o("strong",[t._v("“Device EUI")]),t._v("” of your RAK811 with the following command, which will display all node parameters:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("at+get_config"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:status\n")])])]),o("p",[t._v("In case you have had TTN generate a new "),o("strong",[t._v("“Device EUI")]),t._v("” you can use the command below to import it into the RAK811 configuration parameters ("),o("strong",[t._v("XXXX is the Device_EUI you want to update")]),t._v("):")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("at+set_config"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:dev_eui:XXXX\n")])])]),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/izycmdjz16pclj4sbhtn.png",width:"100%","figure-number":"8",caption:"Filling in the Device Information"}}),t._v(" "),o("ol",{attrs:{start:"10"}},[o("li",[t._v("Then press the “"),o("strong",[t._v("Register")]),t._v("” button at the bottom of this page to finish.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/jbsjagixye7gonowplap.png",width:"100%","figure-number":"9",caption:"Device Overview in TTN"}}),t._v(" "),o("p",[t._v("Depending on which authentication method you want to use please proceed to either the "),o("strong",[t._v("OTAA mode")]),t._v(" or "),o("strong",[t._v("ABP mode")]),t._v(" section.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);
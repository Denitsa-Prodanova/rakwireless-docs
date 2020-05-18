(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{575:function(e,t,o){"use strict";o.r(t);var r=o(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"amazon-web-service-security"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-service-security"}},[e._v("#")]),e._v(" Amazon Web Service Security")]),e._v(" "),o("p",[e._v("By default, all inbound traffic to an AWS Instance is blocked, only port 22 (SSH) is open. You need to add a set of rules in order for the Gateway and LoRa® Network Server to be able to communicate:")]),e._v(" "),o("ul",[o("li",[e._v("The Semtech Packet Forwarder needs "),o("strong",[e._v("UDP port 1700;")])]),e._v(" "),o("li",[e._v("MQTT Bridge (unsecured) needs "),o("strong",[e._v("TCP port 1883")]),e._v(";")]),e._v(" "),o("li",[e._v("MQTT Bridge (secured) needs "),o("strong",[e._v("TCP port 8883")]),e._v(";")]),e._v(" "),o("li",[e._v("Chirpstack Web Ui needs "),o("strong",[e._v("TCP port 8080")]),e._v(".")])]),e._v(" "),o("ol",[o("li",[e._v("Open the Security Groups tab in the AWS Dashboard:")])]),e._v(" "),o("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/aws-sec-group.jpg",width:"100%","figure-number":"1",caption:"AWS Security Groups"}}),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Select your desired Security Group ("),o("strong",[e._v("Ubuntu Instance")]),e._v("). If you have multiple instances you can use the date and time of creation of the group as a guide to which is the one you want. Click the “"),o("strong",[e._v("Action")]),e._v("” button and from the drop-down menu select "),o("strong",[e._v("Edit Inbound Rules")]),e._v(":")])]),e._v(" "),o("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/inbound-rules.jpg",width:"100%","figure-number":"2",caption:"Security Group Inbound Rules"}}),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("In the opened window, press the “"),o("strong",[e._v("Add Rule")]),e._v("” button and add all the 4 rules mentioned before.")])]),e._v(" "),o("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/add-inbound-rules.jpg",width:"100%","figure-number":"3",caption:"Adding Inbound Rules"}}),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),o("p",[e._v("It is a good practice to name them in accordance with what each of them represents.")])]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[o("p",[e._v("Make sure to "),o("strong",[e._v("Save")]),e._v(" with the button in the lower right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Finally check if the rules you created are working by entering your instance Public IP address using port 8080 in a browser window. You should see the Login page of the Chirpstack Web UI (for example "),o("code",[e._v("3.120.237.38:8080")]),e._v(" as in the image below).")])])]),e._v(" "),o("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-login.jpg",width:"100%","figure-number":"4",caption:"Chirpstack Login Page"}}),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),o("p",[e._v("The log-in credentials are provided below. Additionally, there are profiles created in the RAKwireless Chirpstack installation, so you do not need to make those yourself and you can directly proceed to adding your Gateway.")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Username")]),e._v(": admin")]),e._v(" "),o("li",[o("strong",[e._v("Password")]),e._v(": admin")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
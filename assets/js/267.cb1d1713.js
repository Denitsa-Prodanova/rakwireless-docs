(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{602:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-the-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-gateway"}},[t._v("#")]),t._v(" Configuring the Gateway")]),t._v(" "),a("p",[t._v("Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gateway-config\n")])])]),a("p",[t._v("You will now then see a page like the following picture below")]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img1}}),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Set pi password")]),t._v(" - used to set/change the password of the Gateway.")]),t._v(" "),a("li",[a("strong",[t._v("Set up RAK Gateway LoRa® Concentrator")]),t._v(" - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the Gateway will work with.")]),t._v(" "),a("li",[a("strong",[t._v("Restart packet -forwarder")]),t._v(" - used to restart the LoRa® packet forwarded process.")]),t._v(" "),a("li",[a("strong",[t._v("Edit packet-forwarder config")]),t._v("- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.")]),t._v(" "),a("li",[a("strong",[t._v("Configure Wifi")]),t._v(" - used to configure the Wi-Fi settings in order to connect to a network.")]),t._v(" "),a("li",[a("strong",[t._v("Configure LAN")]),t._v(" - used to configure the Ethernet adapter settings.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),a("p",[t._v("A unique ID will be generated in for Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack)")])]),t._v(" "),a("p",[t._v('There is also another way to get your "Gateway ID", just enter the command below in the command line:')]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gateway-version\n")])])]),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img2}}),t._v(" "),a("h2",{attrs:{id:"setting-a-new-password-for-the-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-new-password-for-the-gateway"}},[t._v("#")]),t._v(" Setting a new password for the Gateway")]),t._v(" "),a("p",[t._v('It is a good security practice to change the default password "'),a("strong",[t._v("raspberry")]),t._v('" which is the same on all Raspberry Pi devices.')]),t._v(" "),a("ol",[a("li",[t._v('First, choose "'),a("strong",[t._v("1 Set pi password")]),t._v('" option referred on the image below.')])]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img3}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v('Next, press "'),a("strong",[t._v("Yes")]),t._v('" and you will be asked to enter your new password twice then press "'),a("strong",[t._v("Enter")]),t._v('".')])]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img4}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Alright, the success message for changing password will then pops up.")])]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img5}}),t._v(" "),a("h2",{attrs:{id:"setup-rak-gateway-lora®-concentrator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-rak-gateway-lora®-concentrator"}},[t._v("#")]),t._v(" Setup RAK Gateway LoRa® Concentrator")]),t._v(" "),a("p",[t._v('This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "'),a("strong",[t._v("2 Setup RAK Gateway LoRa® concentrator")]),t._v('"')]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img6}}),t._v(" "),a("p",[t._v("You can choose one of two supported LoRa® Servers here: "),a("strong",[t._v("TTN")]),t._v(" or "),a("strong",[t._v("ChirpStack")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"server-is-ttn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-is-ttn"}},[t._v("#")]),t._v(" Server is TTN")]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img7}}),t._v(" "),a("ul",[a("li",[a("strong",[t._v("TTN (The Things Network)")]),t._v(" - If you choose TTN as the LoRa® Server, you will see the following page. Visit this "),a("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),a("OutboundLink")],1),t._v(" for more information on your local TTN frequency plan. This will allow you to choose the correct plan.")])]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img8}}),t._v(" "),a("p",[t._v("After choosing the correct frequency, the success message will appear as shown below.")]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img9}}),t._v(" "),a("h3",{attrs:{id:"server-is-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-is-chirpstack"}},[t._v("#")]),t._v(" Server is Chirpstack")]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img10}}),t._v(" "),a("p",[a("strong",[t._v("ChirpStack")]),t._v(" - If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("ChirpStack Channel Plan Configuration")]),t._v(" - used to configure your Regional Frequency Band.")]),t._v(" "),a("li",[a("strong",[t._v("ChirpStack ADR Configure")]),t._v(" - used to enable/disable the Adaptive Data Rate (ADR) functionality.")])]),t._v(" "),a("p",[t._v('First, select "'),a("strong",[t._v("1 ChirpStack Channel-plan configuration")]),t._v('" for configuring your frequency channel. Then, set the IP address of the ChripStack.')]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img11}}),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img12}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),a("p",[t._v('The default IP Address is "'),a("code",[t._v("127.0.0.1")]),t._v('". If you want to use an external LoRaServer, you need to set it to its IP Address.')])]),t._v(" "),a("ul",[a("li",[t._v('If you have instead selected "'),a("strong",[t._v("Chirpstack ADR Configure")]),t._v('" you can enable/disable the Adaptive Data Rate (ADR) functionality:')])]),t._v(" "),a("rk-img",{attrs:{params:t.$page.frontmatter.params.img13}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);
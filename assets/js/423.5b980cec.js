(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{758:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"configuring-the-gateway"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-gateway"}},[t._v("#")]),t._v(" Configuring the Gateway")]),t._v(" "),r("p",[t._v("Assuming you have successfully logged into your Gateway using SSH. Enter the following command in the command line:")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gateway-config\n")])])]),r("p",[t._v("You will now then see a page like the following picture below:")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/01.ivnbudjlcg1xm2noagvl.png",width:"100%","figure-number":"1",caption:"Configuration Options for the Gateway"}}),t._v(" "),r("ol",[r("li",[r("strong",[t._v("Set pi password")]),t._v(" - used to set/change the password of the Gateway.")]),t._v(" "),r("li",[r("strong",[t._v("Set up RAK Gateway LoRa® Concentrator")]),t._v(" - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the gateway will work with.")]),t._v(" "),r("li",[r("strong",[t._v("Restart packet -forwarder")]),t._v(" - used to restart the LoRa® packet forwarded process.")]),t._v(" "),r("li",[r("strong",[t._v("Edit packet-forwarder config-")]),t._v(" used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.")]),t._v(" "),r("li",[r("strong",[t._v("Configure Wifi")]),t._v(" - used to configure the Wi-Fi settings in order to connect to a network.")]),t._v(" "),r("li",[r("strong",[t._v("Configure APN Name -")]),t._v(" used to configure the APN name of pppd.")]),t._v(" "),r("li",[r("strong",[t._v("Configure LTE Module -")]),t._v(" (Online for the Cellular Version) - used to configure automatic LTE network connection on startup.")]),t._v(" "),r("li",[r("strong",[t._v("Configure LAN")]),t._v(" - used to configure the Ethernet adapter settings.")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),r("p",[t._v("A unique ID will be generated in for Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack)")])]),t._v(" "),r("p",[t._v('There is also another way to get your "Gateway ID", just enter the command below in the command line:')]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gateway-version\n")])])]),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/02.8vfjxamrr5jnftl.png",width:"100%","figure-number":"2",caption:"Gateway ID using the command line"}}),t._v(" "),r("h2",{attrs:{id:"setting-a-new-password-for-the-gateway"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-new-password-for-the-gateway"}},[t._v("#")]),t._v(" Setting a new password for the Gateway")]),t._v(" "),r("p",[t._v('It is a good security practice to change the default password "'),r("strong",[t._v("raspberry")]),t._v('" which is the same on all Raspberry Pi devices.')]),t._v(" "),r("p",[r("strong",[t._v("1.")]),t._v(' First, choose "'),r("strong",[t._v("1 Set pi password")]),t._v('" option referred on the image below.')]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/03.lb4lcpcxk9vuhg8xxwkv.png",width:"100%","figure-number":"3",caption:"Set Pi Password"}}),t._v(" "),r("p",[r("strong",[t._v("2.")]),t._v(' Next, press "'),r("strong",[t._v("Yes")]),t._v('" and you will be asked to enter your new password twice then press "'),r("strong",[t._v("Enter")]),t._v('".')]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/04.puwtmxjqflai90ejzwj4.png",width:"100%","figure-number":"4",caption:"Confirm Password Change"}}),t._v(" "),r("p",[r("strong",[t._v("3.")]),t._v(" Alright, the success message for changing password will then pop up.")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/05.vm2z749vmvlt92sksnek.png",width:"100%","figure-number":"5",caption:"Successful Password Change"}}),t._v(" "),r("h2",{attrs:{id:"set-up-rak-gateway-lora®-concentrator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set-up-rak-gateway-lora®-concentrator"}},[t._v("#")]),t._v(" Set up RAK Gateway LoRa® Concentrator")]),t._v(" "),r("p",[t._v('This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "'),r("strong",[t._v("2 Setup RAK Gateway LoRa® concentrator")]),t._v('"')]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/06.ktnjwl2w33wsmzgth2oh.png",width:"100%","figure-number":"6",caption:"Choosing Setup RAK Gateway LoRa® concentrator"}}),t._v(" "),r("p",[t._v("You can choose one of two supported LoRa® Servers here: "),r("strong",[t._v("TTN")]),t._v(" or\n"),r("strong",[t._v("ChirpStack")]),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"server-is-ttn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-is-ttn"}},[t._v("#")]),t._v(" Server is TTN")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/07.ul588xl3su91f9xlqkd9.png",width:"100%","figure-number":"7",caption:"Server Is TTN"}}),t._v(" "),r("ul",[r("li",[r("strong",[t._v("TTN (The Things Network)")]),t._v(" - If you choose TTN as the LoRa® Server, you will see the following page. Visit this "),r("a",{attrs:{href:"https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),r("OutboundLink")],1),t._v(" for more information on your local TTN frequency plan. This will allow you to choose the correct plan.")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/08.n2dwbzss4hzqxsevyeqg.jpg",width:"100%","figure-number":"8",caption:"Selecting the TTN Channel Plan"}}),t._v(" "),r("p",[t._v("After choosing the correct frequency, the success message will appear as shown below.")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/09.oz0vetzytinpkrmnklmz.png",width:"100%","figure-number":"9",caption:"Successfully Changed the Frequency"}}),t._v(" "),r("h3",{attrs:{id:"server-is-chirpstack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-is-chirpstack"}},[t._v("#")]),t._v(" Server is Chirpstack")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/10.wxplmfajuroo8dcgaadk.png",width:"100%","figure-number":"10",caption:"Server Is TTN"}}),t._v(" "),r("p",[r("strong",[t._v("ChirpStack")]),t._v(" - If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("ChirpStack Channel Plan Configuration")]),t._v(" - used to configure your Regional Frequency Band.")]),t._v(" "),r("li",[r("strong",[t._v("ChirpStack ADR Configure")]),t._v(" - used to enable/disable the Adaptive Data Rate (ADR)\nfunctionality.")])]),t._v(" "),r("p",[t._v("First, select option 1 for configuring your Regional Frequency Band")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/11.sdcqyojrwjtpfe3mtj46.png",width:"100%","figure-number":"11",caption:"Regional Frequency Band Option"}}),t._v(" "),r("p",[t._v("Then, set the IP address of the ChirpStack which you want your Gateway to work with:")]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/12.cnm6bvyeuxzzj2uyoes0.png",width:"100%","figure-number":"12",caption:"Default LoRaServer IP Address"}}),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),r("p",[t._v("The default IP Address is "),r("strong",[r("code",[t._v("127.0.0.1")])]),t._v(" which means you will be using the Built-in LoRa® Server. If you want to use an independent LoRa® Server running on another device or a cloud based LoRa® Server, you need to set it to the corresponding IP address")])]),t._v(" "),r("ul",[r("li",[t._v('If you have instead selected "'),r("strong",[t._v("Chirpstack ADR Configure")]),t._v('" you can enable/disable the Adaptive Data Rate (ADR) functionality:')])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/13.brnbjhabtzzav0bnf52r.png",width:"100%","figure-number":"13",caption:"Chirpstack ADR Enable/Disable"}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{598:function(e,t,n){"use strict";n.r(t);var a=n(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"software-faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#software-faqs"}},[e._v("#")]),e._v(" Software FAQs")]),e._v(" "),n("p",[n("img",{attrs:{src:"/assets/images/faq/software/software-overview.png",alt:"Software FAQ Logo"}})]),e._v(" "),n("faq",{attrs:{"default-opened":""},scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n1. Why is the payload data received by the LoRaWAN® server garbled?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[n("img",{attrs:{src:"/assets/images/faq/software/item1.jpg",alt:"LoRaWAN® Encryption Method"}})]),e._v(" "),n("p",[e._v("Whenever the gateway receives data from the nodes, the payload data is encoded in base64 and encrypted before it is sent into the server. Upon arriving in the server, the data packet is automatically decrypted which will revert the data to its base64 encoded form. Manual decoding must be done by the user to have the base64 encoded data be similar to the payload sent by the node")])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n2. Why is Base64 encoding used for transmission?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("To effectively transmit all printable characters whether be in English, Chinese or other language, binary files, pictures and other files by the server or gateways, Base64 encoding is used. It is a method of representing binary data based on 64 printable characters. As an example, at the point when email was first used, it must be transmitted in English, however, as the quantity of clients expanded, clients in Chinese, Japanese and different dialects additionally requested, yet these characters couldn't be successfully handled by the server or gateways, so Base64 appeared. Alongside this, Base64 has likewise been utilized in few parallel records in URLs, cookies, and web pages.")])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n3. What are the Boot Options in RAK811?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("By changing the states in the "),n("strong",[e._v("BOOT0")]),e._v(" and "),n("strong",[e._v("BOOT1")]),e._v(" pins of the RAK811, the user can choose the boot mode after resetting the device. Provided below are the options as well as the pin state assignment.")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Main Flash memory (BOOT0: GND, BOOT1: 3V3 or GND)")]),e._v(": It is the built-in Flash of STM32 chip of the RAK811. Generally, when we use JTAG or SWD mode to download the firmware, it is downloaded to this chip in which would automatically starts after restarting.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("System memory (BOOT0: 3V3, BOOT1: GND)")]),e._v(": The default boot mode set the manufacturer is by booting from the system memory but is used less often. Boot memory consumes a specific memory inside a chip and cannot be modified upon leaving the factory during deployment In the STM32 Chip, a preset space is allocated for the BootLoader which is commonly termed as the “ISP” program. Upon choosing this boot mode, we are downloading the firmware to the system’s Flash through this BootLoader by means of Serial Port. Follow the steps provided below to have your device boot in system memory:")]),e._v(" "),n("ol",[n("li",[e._v("Set "),n("strong",[e._v("BOOT0: 3V3")]),e._v(" and "),n("strong",[e._v("BOOT1: GND")]),e._v(", and then press the reset button, so that the BootLoader can be started from the system memory.")]),e._v(" "),n("li",[e._v("Download the program to Flash through the serial port with the help of BootLoader.")]),e._v(" "),n("li",[e._v("After the program download is complete, it is necessary to set BOOT0 to GND and reset it manually. In this way, STM32 can be started from Flash.")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Built-in SRAM (BOOT0: 3V3, BOOT1: 3V3)")]),e._v(": Since SRAM, has no program storage capability,it is generally utilized for program debugging. Unlike in Flash wherein you would take time to entirely erase even in the slightest change in the code, you can consider using the SRAM for faster debugging. After all the changes in the code during the debugging using SRAM, you can then download it into the Flash.")])])])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n4. How does OTAA(Over-the-Air Activation) network join works?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("OTAA is a method of LoRaWAN® network access in the air. Upon powering up, the node needs to be networked with the server before it can initiate data transmission. The node initiates a request to enter the network which the server then agrees and sends the necessary information into the node. The node then parses the said information to obtain the necessary communication parameters to start communicating with the server.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The following are the parameters needed by the node before it can start to enter the network via OTAA:")]),e._v(" "),n("ul",[n("li",[e._v("APPEUI node custom 8-byte long address")]),e._v(" "),n("li",[e._v("Both the APPKEY of the server and the node are stored in advance and used to encrypt and decrypt the Join_acept message")]),e._v(" "),n("li",[e._v("DevNonce 2-byte random number, used to generate random AppSKey and NwkSKey")])])]),e._v(" "),n("li",[n("p",[e._v("The following steps is the detailed OTAA network join mode:")]),e._v(" "),n("ol",[n("li",[e._v("The node sends a join_request message.")]),e._v(" "),n("li",[e._v("The Gateway uploads this data to the Network Server. The Gateway does not parse the data at the MAC layer, but directly encodes it into base64 and then encapsulates it into a JSON package to upload to the Network Server.")]),e._v(" "),n("li",[e._v("The Network Server sends the device network access packet to the Application Server.")]),e._v(" "),n("li",[e._v("The Application Server agrees to join the network and replies to Network Server agrees to join the network.")]),e._v(" "),n("li",[e._v("The Network Server generates an Addr and sends the node information to the Application Server.")]),e._v(" "),n("li",[e._v("The Application Server generates a key and tells the relevant information to the Network Server.")]),e._v(" "),n("li",[e._v("The Network Server informs the gateway of the data, and the Gateway converts it into a MAC packet and sends it to the node.")]),e._v(" "),n("li",[e._v("The node parses the join_accept message part.")])])])])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n5. How to debug failures when RAK module cannot initiate P2P communication with LoRa® modules of other manufacturers?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("ul",[n("li",[e._v("Check whether the frequency plans of the two modules are identical")]),e._v(" "),n("li",[e._v("Check whether the bandwidth, spreading factor, coding rate, and preamble are the same on both modules")]),e._v(" "),n("li",[e._v("One of the modules must be on receiving mode while the other module sends data packets and vice versa")])])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n6. How does the SX1276 use DIOx pins? Do all DIOx pins need to be connected to the MCU?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("The most commonly used are transmit interrupts and receive interrupts, so at least "),n("strong",[e._v("DIO0")]),e._v(" and "),n("strong",[e._v("DIO1")]),e._v(" can be connected. In P2P mode, you can also use the polling register mode to receive and send data  without using the interrupt method. With such method, DIO are not necessarily connected to the MCU; only the 4-wire SPI pin and reset pin are required to be connected.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/assets/images/faq/software/item6.jpg",alt:"DIO Mapping LoRa® Mode"}})])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n7. How to remotely switch from CLASS A to CLASS C, or from CLASS C to CLASS A in LoRaWAN® through the server?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("In LoRaWAN® v1.0.2,  switching from Class A to Class C and vice versa can only be controlled by the application layer of the node. The network access category is determined by the specified parameters when the protocol stack is initialized. If the customer wants to remotely control A to C, or C to A switch from the server, it is recommended to control from the application logic layer.")])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n8. How long will the battery of LoRa® node last? How is it calculated?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("Battery life depends on the following factors:")]),e._v(" "),n("ul",[n("li",[e._v("Battery capacity")]),e._v(" "),n("li",[e._v("Frequency of Lora contract.")]),e._v(" "),n("li",[e._v("The current of sending packets (generally 120~130mA).")]),e._v(" "),n("li",[e._v("The data rate of sending packets.")]),e._v(" "),n("li",[e._v("Leakage current after Lora node enters sleep mode.")])]),e._v(" "),n("p",[n("strong",[e._v("Example")]),e._v(": The battery capacity used is "),n("strong",[e._v("2000mAH")]),e._v(", and the distribution frequency is **10 minutes per time.**The rate of delivery of LoRa® ultimately reflects the length of delivery time. If "),n("strong",[e._v("50 bytes")]),e._v(" are transmitted at "),n("strong",[e._v("SF7 rate")]),e._v(", it can be sent between "),n("strong",[e._v("100ms and 200ms")]),e._v(", calculated at 200ms. Sent at "),n("strong",[e._v("SF12 rate")]),e._v(" for about "),n("strong",[e._v("2.5s")]),e._v(". For RAK4200 module, the "),n("strong",[e._v("leakage current")]),e._v(" after sleep is "),n("strong",[e._v("1.5uA")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:"/assets/images/faq/software/item8.jpg",alt:"Battery Life Calculation"}})]),e._v(" "),n("p",[e._v("Seen from the above examples, in order to prolong the battery life, it is necessary to make the node work at a "),n("strong",[e._v("high rate")]),e._v(", at the same time to "),n("strong",[e._v("extend the packet interval")]),e._v(" and "),n("strong",[e._v("send as short data messages as possible.")])])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n9. How does ChirpStack LoRa® Server communicate with nodes through MQTT?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v("The MQTT integration publishes all the data it receives from the devices as JSON over MQTT. To receive data from your device, you therefore need to subscribe to its MQTT topic. For debugging, you could use a (command-line) tool like mosquitto_sub which is part of the "),n("a",{attrs:{href:"http://mosquitto.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mosquitto"),n("OutboundLink")],1),e._v(" MQTT broker.")]),e._v(" "),n("p",[e._v("Use + for a single-level wildcard, # for\na multi-level wildcard.")]),e._v(" "),n("p",[n("strong",[e._v("Examples")]),e._v(":")]),e._v(" "),n("ul",[n("li",[e._v("Considerations:\n"),n("ul",[n("li",[e._v("MQTT topics are case-sensitive")]),e._v(" "),n("li",[e._v("The ApplicationID can be retrieved using the API or from the web-interface. Take into consideration that it is not the same with Application EUI.")])])])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("mosquitto_sub -t "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application/123/#"')]),e._v(" -v  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#display everything for the given application ID")]),e._v("\nnmosquitto_sub -t "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application/123/device/+/rx"')]),e._v(" -v  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#display only the RX payloads for the given application ID"')]),e._v("\n")])])]),n("p",[n("strong",[e._v("Events")])]),e._v(" "),n("p",[e._v("The MQTT integration exposes all events as documented by "),n("a",{attrs:{href:"https://www.chirpstack.io/application-server/integrate/sending-receiving/#event-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Types"),n("OutboundLink")],1),e._v(". The following mapping to MQTT topics applies for the available events:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Uplink")]),e._v(": application/[applicationID]/device/[devEUI]/rx")]),e._v(" "),n("li",[n("strong",[e._v("Status")]),e._v(": application/[applicationID]/device/[devEUI]/status")]),e._v(" "),n("li",[n("strong",[e._v("Ack")]),e._v(": application/[applicationID]/device/[devEUI]/ack")]),e._v(" "),n("li",[n("strong",[e._v("Error")]),e._v(": application/[applicationID]/device/[devEUI]/error")]),e._v(" "),n("li",[n("strong",[e._v("Scheduling downlink data")]),e._v(": application/[applicationID]/device/[devEUI]/tx")])]),e._v(" "),n("ul",[n("li",[e._v("Considerations:\n"),n("ul",[n("li",[e._v('For versions before v1.0.0 ".../device/.." is configured as ".../node/...." Please refer to the '),n("a",{attrs:{href:"https://www.chirpstack.io/application-server/install/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("application_server.integration.mqtt configuration"),n("OutboundLink")],1),e._v(" for the correct topic.")]),e._v(" "),n("li",[e._v("The Application ID and Device EUI of the device will be taken from the topic.")])])])]),e._v(" "),n("p",[n("strong",[e._v("Example Payload:")])]),e._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"confirmed"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// whether the payload must be sent as confirmed data down or not")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fPort"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("                              "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// FPort to use (must be > 0)")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"...."')]),e._v("                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// base64 encoded data (plaintext, will be encrypted by ChirpStack Network Server)")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"object"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// decoded object (when application coded has been configured)")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"temperatureSensor"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// when providing the 'object', you can omit 'data'")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"humiditySensor"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]},proxy:!0}])}),e._v(" "),n("faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n10. How to revert back to Wi-Fi AP Mode when your Wi-Fi  SSID or Password is incorrect in Wi-Fi Client Mode?\n")]},proxy:!0},{key:"answer",fn:function(){return[n("p",[e._v('If you have set an incorrect SSID or Password for Wi-Fi Client Mode, insert the SD Card into your PC and in the boot disk, and create a new file "'),n("strong",[e._v("rak_ap")]),e._v('". Afterwhich, re-insert the SD Card into your Raspberry Pi based gateway and it should work again in Wi-Fi AP Mode.')]),e._v(" "),n("p",[n("img",{attrs:{src:"/assets/images/faq/software/item10.png",alt:"RAK_AP File"}})])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=o.exports}}]);
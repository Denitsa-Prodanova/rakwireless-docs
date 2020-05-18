(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{736:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"accessing-your-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-your-gateway"}},[e._v("#")]),e._v(" Accessing your Gateway")]),e._v(" "),a("p",[e._v("After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the "),a("strong",[e._v("RAK7243 LPWAN Developer Gateway")]),e._v(" and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway. In this section, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️WARNING")]),e._v(" "),a("p",[e._v("Before powering the RAK7243 LPWAN Developer Gateway you should install the LoRa® and GPS antennas. Not doing so might damage the boards.")])]),e._v(" "),a("h2",{attrs:{id:"wi-fi-ap-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wi-fi-ap-mode"}},[e._v("#")]),e._v(" Wi-Fi AP Mode")]),e._v(" "),a("p",[e._v('By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "'),a("strong",[e._v("Rakwireless_XXXX")]),e._v('" on your PC Wi-Fi Network List.')]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/wifi.jpg",width:"100%","figure-number":"1",caption:"RAKwireless Access Point"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE:")]),e._v(" "),a("p",[e._v("“XXXX” is the last 2 bytes of your RAK7243’s WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also  of the default IP address of the Gateway provided below as this will be needed in connecting via SSH.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Wi-Fi Password:")]),e._v(" rakwireless")]),e._v(" "),a("li",[a("strong",[e._v("Default IP Address:")]),e._v(" "),a("code",[e._v("192.168.230.1")])])])]),e._v(" "),a("h2",{attrs:{id:"via-the-ethernet-port-on-the-raspberry-pi-3b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#via-the-ethernet-port-on-the-raspberry-pi-3b"}},[e._v("#")]),e._v(" Via the Ethernet Port on the Raspberry Pi 3B+")]),e._v(" "),a("p",[e._v("You can also connect your PC with the Gateway through an Ethernet cable. By default, the IP address of the Gateway’s Ethernet interface is "),a("code",[e._v("192.168.10.10")]),e._v(", so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, "),a("code",[e._v("192.168.10.20")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click "),a("strong",[e._v("Ethernet")]),e._v(".")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/networ&sharing.png",width:"100%","figure-number":"2",caption:"Network and Sharing Center"}}),e._v(" "),a("ul",[a("li",[e._v("Click "),a("strong",[e._v("Properties")]),e._v(" then Choose "),a("strong",[e._v("Internet Protocol Version 4 (TCP/IPv4)")]),e._v(".")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/ethernetproperties.jpg",width:"100%","figure-number":"3",caption:"Ethernet Properties"}}),e._v(" "),a("ul",[a("li",[e._v('By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: '),a("code",[e._v("192.168.10.20")]),e._v(" and press OK.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/tcpipv4.jpg",width:"100%","figure-number":"4",caption:"TCP/IPv4 Properties"}}),e._v(" "),a("p",[e._v("Now , you should be able to access your Gateway from your PC successfully using the IP Address "),a("code",[e._v("192.168.10.10")]),e._v(" through SSH.")]),e._v(" "),a("h2",{attrs:{id:"log-into-the-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-into-the-gateway"}},[e._v("#")]),e._v(" Log into the Gateway")]),e._v(" "),a("h3",{attrs:{id:"_1-windows-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows-os"}},[e._v("#")]),e._v(" 1. Windows OS")]),e._v(" "),a("p",[e._v("SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely "),a("strong",[e._v("Putty")]),e._v(", "),a("strong",[e._v("BitVise SSH Client")]),e._v(", "),a("strong",[e._v("MobaXterm")]),e._v(" and many more. Feel free to choose one that fits your needs. You will be using Putty for this guide.")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/puttywindows.png",width:"75%","figure-number":"5",caption:"Putty Software for SSH in Windows"}}),e._v(" "),a("ul",[a("li",[e._v("If you have connected to the Gateway through "),a("strong",[e._v("Wi-Fi AP Mode")]),e._v(", the IP Address is "),a("code",[e._v("192.168.230.1")])]),e._v(" "),a("li",[e._v("If you have connected to the Gateway through "),a("strong",[e._v("Ethernet")]),e._v(", the IP Address is "),a("code",[e._v("192.168.10.10")])]),e._v(" "),a("li",[e._v("It will then prompt you to enter the username and password. The default username and password is provided below:\n"),a("ul",[a("li",[a("strong",[e._v("Username")]),e._v(": pi")]),e._v(" "),a("li",[a("strong",[e._v("Password")]),e._v(": raspberry")])])])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/commandline.png",width:"100%","figure-number":"6",caption:"Command line after log in"}}),e._v(" "),a("h3",{attrs:{id:"_2-mac-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mac-os"}},[e._v("#")]),e._v(" 2. Mac OS")]),e._v(" "),a("p",[e._v("Open the Terminal of Mac OS. Launch the "),a("strong",[e._v("Terminal")]),e._v(' application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting '),a("strong",[e._v("Command + Spacebar")]),e._v(" and typing “"),a("strong",[e._v("Terminal")]),e._v("” and then return:")]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/mac_terminal.jpg",width:"100%","figure-number":"7",caption:"Opening Terminal in Mac OS"}}),e._v(" "),a("p",[e._v("Open the terminal of Mac OS. Enter "),a("strong",[e._v("root mode")]),e._v(' by typing the following command: "'),a("code",[e._v("sudo -i")]),e._v('"')]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/sshmac.jpg",width:"100%","figure-number":"8",caption:"SSH in Mac OS"}}),e._v(" "),a("ul",[a("li",[e._v('If you are not in root mode, enter "'),a("code",[e._v("ssh pi@192.168.230.1")]),e._v('" in the terminal to login to your Gateway, the default password is "'),a("strong",[e._v("raspberry")]),e._v('".')]),e._v(" "),a("li",[e._v('If you connect your PC with the Gateway through Ethernet Cable, you should enter "'),a("code",[e._v("ssh pi@192.168.10.10")]),e._v('", the default password is "'),a("strong",[e._v("raspberry")]),e._v('".')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/4.accessing your gateway/loginsuccess.jpg",width:"100%","figure-number":"9",caption:"Log-in Successful Notification"}}),e._v(" "),a("h3",{attrs:{id:"_3-linux-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux-os"}},[e._v("#")]),e._v(" 3. Linux OS")]),e._v(" "),a("p",[e._v("If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
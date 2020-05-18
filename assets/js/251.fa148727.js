(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{586:function(e,t,n){"use strict";n.r(t);var a=n(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"openvpn-client-set-up-on-lora-gateway"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openvpn-client-set-up-on-lora-gateway"}},[e._v("#")]),e._v(" OpenVPN client Set-up on LoRa gateway")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("The procedure for generating the keys for the gateway is the same as the one for the Management PC, with the exception of a different Client name.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),n("p",[e._v("You can go through Section 1 and 2 of OpenVPN Management Client Set-up again, and do the same procedure. Don't forget to replace the “"),n("strong",[e._v("management")]),e._v("” name used for the Client with the one for the Gateway.")]),e._v(" "),n("ul",[n("li",[e._v("Used: "),n("strong",[e._v("rak7258-001")]),e._v(".")])])]),e._v(" "),n("p",[e._v("Once the certificates are assembled into a single file, you need to import the contents into the OpenVPN client section of your Gateway.")]),e._v(" "),n("ol",[n("li",[e._v("Log into the Gateway via the Web UI ("),n("strong",[e._v("locally")]),e._v(").")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("To access the WEB UI, make sure you still have local network access to your Gateway and connect to it.")])]),e._v(" "),n("li",[n("p",[e._v("In the sidebar menu section, go to the "),n("strong",[e._v("Services")]),e._v(" > "),n("strong",[e._v("OpenVPN Tunnels")]),e._v(" > "),n("strong",[e._v("Enter a name")]),e._v(" > choose “"),n("strong",[e._v("Custom Openvpn Configuration")]),e._v("” from the drop-down and the press "),n("strong",[e._v("Add")]),e._v(". Use Figure 1 as reference.")])])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/deployment-guide/gateway-remote-management-openvpn/creating-an-openvpn-tunnel.jpg",width:"100%","figure-number":"1",caption:"Creating an OpenVPN tunnel"}}),e._v(" "),n("ul",[n("li",[e._v("In the next window, simply "),n("strong",[e._v("copy/paste")]),e._v(" the content of the file you created in the beginning and click "),n("strong",[e._v("Save & Apply")]),e._v(". See Figure 2 below.")])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/deployment-guide/gateway-remote-management-openvpn/importing-the-openvpn-certificate-data.png",width:"100%","figure-number":"2",caption:"Importing the OpenVPN certificate data"}}),e._v(" "),n("ul",[n("li",[e._v("Shown in Figure 3, go back to the "),n("strong",[e._v("OpenVPN Tunnel")]),e._v("s section > tap "),n("strong",[e._v("Enable")]),e._v(" to on state > click "),n("strong",[e._v("Save & Apply")]),e._v(". This will finalize things and the Gateway should now be connected to the OpenVPN Server. The process might take a few minutes to complete.")])]),e._v(" "),n("rk-img",{attrs:{src:"/assets/images/deployment-guide/gateway-remote-management-openvpn/enabling-openvpn.png",width:"100%","figure-number":"3",caption:"Enabling OpenVPN"}}),e._v(" "),n("ul",[n("li",[e._v("Check again in the client list file on the OpenVPN Server for the IP address of the Gateway:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo nano /etc/openvpn/server/ip_pool.txt \n")])])]),n("rk-img",{attrs:{src:"/assets/images/deployment-guide/gateway-remote-management-openvpn/openvpn-connected-clients2.png",width:"100%","figure-number":"4",caption:"OpenVPN connected-clients 2"}}),e._v(" "),n("p",[e._v("The IP address of the Gateway should be in the second entry.")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Log into the Gateway ("),n("strong",[e._v("remotely")]),e._v(")")])]),e._v(" "),n("p",[e._v("You can now log into the Gateway by using the IP address, shown in figure 4, assigned to it by the OpenVPN Server. This can be utilized for an SSH2 connection or the Web UI (via a browser).")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);
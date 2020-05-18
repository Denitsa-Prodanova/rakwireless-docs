(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{589:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"openvpn-server-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openvpn-server-deployment"}},[e._v("#")]),e._v(" OpenVPN Server Deployment")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Before proceeding to this tutorial, make sure you already have an AWS EC2 Instance with Ubuntu Server 18.04 LTS running on it. Else, go back to "),a("RouterLink",{attrs:{to:"/en-us/deployment-guide/amazon-web-service/#amazon-web-service-configurations"}},[e._v("Amazon Web Service Configurations")]),e._v(" section.")],1),e._v(" "),a("p",[e._v("Assuming that it is already done, follow thoroughly the steps provided below:")]),e._v(" "),a("ol",[a("li",[e._v("Install OpenVPN.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install openvpn -y\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Download a certificate management tool suite: Easy RSA.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget https://github.com/OpenVPN/easy-rsa/archive/v3.0.6.tar.gz -O easyrsa.tar.gz\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Initialize Easy RSA to generate a CA certificate and a server certificate.")])]),e._v(" "),a("ul",[a("li",[e._v("Extract and copy easyrsa to /etc/openvpn/easyrsa/")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo mkdir -p /etc/openvpn/easyrsa \ntar zxvf easyrsa.tar.gz \nsudo cp -rf easy-rsa-3.0.6/easyrsa3/* /etc/openvpn/easyrsa/\n")])])]),a("ul",[a("li",[e._v("Initialize the pki.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /etc/openvpn/easyrsa\nsudo ./easyrsa init-pki\n")])])]),a("ul",[a("li",[e._v("Generate the CA certificate.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ./easyrsa build-ca\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("Enter the required information according to the prompt. When asked for a password, make sure to write it down as it will be required later on.")])]),e._v(" "),a("ul",[a("li",[e._v("Generate the Server certificate.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ./easyrsa build-server-full server nopass\n")])])]),a("ul",[a("li",[e._v("Generate the DH parameters file.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ./easyrsa gen-dh\n")])])]),a("ul",[a("li",[e._v("Generate the crl.pem file.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ./easyrsa gen-crl\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Generate the OpenVPN Server configuration and running files.")])]),e._v(" "),a("ul",[a("li",[e._v("Create the OpenVPN server configuration file and fill it in. The file must reside in:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo mkdir -p /etc/openvpn/server\n")])])]),a("ul",[a("li",[e._v("Open the created file for editing:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo nano /etc/openvpn/server/config.ovpn\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("Change the local "),a("code",[e._v("123.56.96.211")]),e._v(" IP address with your private AWS IP.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/gateway-remote-management-openvpn/aws-instance-private-ip.png",width:"100%","figure-number":"1",caption:"AWS Instance Private IP"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("Add an inbound rule in the AWS Security Group for "),a("strong",[e._v("UDP port 1194")]),e._v(".")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/gateway-remote-management-openvpn/security-group-inbound-rules.png",width:"100%","figure-number":"2",caption:"Security Group Inbound Rules"}}),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# openvpn server \ncd /etc/openvpn/server\ndaemon\ndev tap\nproto udp\n\n#local ipaddr to bind. Change it with Server IP.\nlocal 123.56.96.211 \nport 1194\n\nserver-bridge 10.0.8.1 255.255.255.0 10.0.8.11 10.0.8.100\nifconfig-pool-persist ip_pool.txt\n\nup interface-up.sh\n\nclient-to-client\nkeepalive 10 120\ncomp-lzo\nuser root\ngroup root\npersist-key\npersist-tun\n\nca /etc/openvpn/easyrsa/pki/ca.crt\ncert /etc/openvpn/easyrsa/pki/issued/server.crt\nkey /etc/openvpn/easyrsa/pki/private/server.key\ndh /etc/openvpn/easyrsa/pki/dh.pem\ncrl-verify /etc/openvpn/easyrsa/pki/crl.pem\n\n\nstatus /var/log/openvpn-status-server.log\nlog /var/log/openvpn-server.log\nverb 3\nscript-security 2\n")])])]),a("ul",[a("li",[e._v("Create a virtual tap interface and fill in the interface-up.sh.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo nano /etc/openvpn/server/interface-up.sh\n")])])]),a("ul",[a("li",[e._v("Fill in the content of the file with the lines below:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/bin/sh\n/sbin/ifconfig $1 10.0.8.1 netmask 255.255.255.0 broadcast 10.0.8.0\n")])])]),a("ul",[a("li",[e._v("Make the script executable:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo chmod +x /etc/openvpn/server/interface-up.sh\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Start OpenVPN.")])]),e._v(" "),a("ul",[a("li",[e._v("To run the instance startup in the OpenVPN, run the following command:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl enable openvpn\n")])])]),a("ul",[a("li",[e._v("Execute the following in order to get your tap interface up:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo openvpn --config /etc/openvpn/server/config.ovpn\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("If you want OpenVPN to execute the configuration file automatically, you should rename the "),a("strong",[e._v("config.ovpn to config.conf")]),e._v(" and move it to the "),a("strong",[e._v("/etc/openvpn folder")]),e._v(".")]),e._v(" "),a("p",[e._v("This way, if the Operating System is rebooted, OpenVPN will automatically load the tap interface.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /etc/openvpn/server\nsudo mv config.ovpn /etc/openvpn/config.conf\n")])])]),a("p",[e._v("You should see a similar output if the tap0 interface is up and running.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tap0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 10.0.8.1  netmask 255.255.255.0  broadcast 10.0.8.0\n        ether 3a:37:f6:5a:bb:32  txqueuelen 100  (Ethernet)\n        RX packets 45125  bytes 8292906 (7.9 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 16611  bytes 2205218 (2.1 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);
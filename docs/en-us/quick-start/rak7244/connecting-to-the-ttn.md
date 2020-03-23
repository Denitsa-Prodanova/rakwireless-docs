---
title: Connecting to The Things Network (TTN)

params:

  img1:
    src: /assets/images/quick-start-guide/rak7244/7.connecting to ttn/ttn_home_page.jpg
    width: 100%
    figureNumber: 1
    caption: The Things Network Home Page
  img2:
    src: /assets/images/quick-start-guide/rak7244/7.connecting to ttn/ttn_console.png
    width: 100%
    figureNumber: 2
    caption: The Things Network Console Page
  img3:
    src: /assets/images/quick-start-guide/rak7244/7.connecting to ttn/adding_gateway.png
    width: 100%
    figureNumber: 3
    caption: Adding a Gateway to TTN
  img4:
    src: /assets/images/quick-start-guide/rak7244/7.connecting to ttn/register_gateway.png
    width: 100%
    figureNumber: 4
    caption: Registering your Gateway
  img5:
    src: /assets/images/quick-start-guide/rak7244/7.connecting to ttn/gateway_id.png
    width: 100%
    figureNumber: 5
    caption: RAK7244 - LoRaWAN® Developer Gateway Gateway ID in SSH
  img6:
    src: /assets/images/quick-start-guide/rak7244/7.connecting to ttn/connection_success.png
    width: 100%
    figureNumber: 6
    caption: RAK7244 - LoRaWAN® Developer Gateway TTN Connection Success
---

# Connecting to the Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

* First, you should have connected your LoRaWAN® Gateway to the router in order to access the internet according to the method which has been introduced in the “Configure your LoRaWAN® Gateway” section of this document.
* Second, config your LoRaWAN® Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the Configuring the Gateway section.
* Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img :params="$page.frontmatter.params.img1" />

* Choose Console then Click Gateways.

<rk-img :params="$page.frontmatter.params.img2" />

* All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img :params="$page.frontmatter.params.img3" />

<rk-img :params="$page.frontmatter.params.img4" />

* **Gateway EUI** - refers to the Gatway ID you obtained from the previous steps. In case you forgot, just type `gateway-version` in the command line. This must be the same with the LoRaWAN® Gateway's True Gateway ID otherwise you will fail to register your LoRaWAN® Gateway on TTN.

<rk-img :params="$page.frontmatter.params.img5" />

:::tip Note:
:pencil: Make sure to select the "**I'm using the legacy packet forwarder**" check box.
:::

* **Description** - A human readable description of your LoRaWAN® Gateway.
* **Frequency Plan** - This is the frequency you want to use and it must be the same with LoRaWAN® Gateway and the LoRaWAN® Node.
* **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
* **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map.
* **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your LoRaWAN® Gateway is now connected to the The Things Network (TTN).

<rk-img :params="$page.frontmatter.params.img6" />
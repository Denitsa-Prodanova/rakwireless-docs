---
static_root: /assets/images/quick-start-guide/rak7244/1.main
rak_img: RAK7244.svg
rak_grp: lora-gateway
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?i=projects&q=rak7244
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak7244
      - name: RAK7244 with PoE Assembly Guide
        href: https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/Hardware-Specification/RAK7244P_Assembly_Guide.pdf
      - name: Environment Test Report
        href: https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/Hardware-Specification/RAK7244_Environment_Test_Report.pdf
      - name: Firmware
        href: https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/Firmware/RAK7244_Latest_Firmware.zip
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/
---

# RAK7244 LPWAN Developer Gateway

<rk-img
  :src="`${$frontmatter.static_root}/rak7244_overview.jpg`"
  width="75%"
  figure-number="1"
  caption="RAK7244 LPWAN Developer Gateway"
/>

## Product Background

The **RAK7244 - LPWAN Developer Gateway** is a complete and cost efficient Gateway Solution that will help you get started in developing a full LoRa® System. It is built with the **RAK2245 Pi Hat** stacked with the newest **Raspberry Pi 4**, along with the GPS module and Heat Sink, increasing its performance and thermal dissipation. The housing for the device is durable and entirely built from aluminum.

The gateway has a powerful LoRa® digital signal processing engine from Semtech SX1301 RF front end chip. It is capable of receiving up to 8 LoRa® packets simultaneously sent with different spreading factors on different channels. It is available in multiple variants to be accessible in all LoRa Alliance® frequency bands. This breakthrough allows innovative network architectures to be implemented that has a huge impact over other short range systems.

Overall, this gateway has various functionalities that are ideal for prototyping, proof-of-concept demonstrations and evaluation on future deployment scenarios. With its ready to use Raspbian based firmware, it is now possible to connect the Gateway to any standard LoRaWAN® Server. The device is capable of tackling applications related to Smart Grids, Intelligent Farms and other IoT Enterprise applications.

<rk-btn
  src="quick-start-guide"
  label="Set up Your RAK7244 LPWAN Developer Gateway"
/>

&nbsp;

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- Refreshed Case design with a new SBC (**Raspberry Pi 4**)
- Preassembled, functioning **Gateway**
- Full **LoRaWAN® 1.0.2** Stack support
- Supports for 8 channels and spreading factors (**SF7-SF12**)
- **Frequency band support**: 433MHz, 470MHz, 865MHz, 868MHz, 915MHz, 920MHz, 923MHz
- Tx Power: **27 dBm Max**
- Rx Sensitivity: **-139dBm**
- Integrates **Ublox MAX-7Q GPS module**

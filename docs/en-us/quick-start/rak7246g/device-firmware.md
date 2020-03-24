---
title: Device Firmware Setup
params:
  {
    img1:
      {
        src: "/assets/images/quick-start-guide/rak7246/balena.png",
        width: "100%",
        figureNumber: "1",
        caption: "Balena Etcher Software",
      }
  }

---

# Device Firmware Setup
An easy and quick way to have a fully functional gateway is by using a Precompiled Firmware Image provided. In this document, is the step by step instructions on how to install the Image into your SD Card used for the gateway.

## Burn the Latest Firmware

::: tip Note:
:pencil: If your RAK7246G - LoRaWAN™ Developer Gateway has the latest firmware image in the SD card, you can
skip this section.
:::
1. Download the latest firmware [here](https://downloads.rakwireless.com/en/LoRa/NeoPi-Gateway-RAK7246/Firmware/RAK7246_Latest_Firmware.zip), which is based on the Raspbian OS.
2. You need to use an image writing tool to install the firmware on the SD Card. For this, You will be using [Etcher](https://www.balena.io/etcher/), which is an open source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your Computer.
4. Open the Etcher Software, and select the downloaded image file thru the (**Label - 1**) button in the image below.

::: tip Note:
:pencil: Your SD Card should be automatically detected by the Etcher software in the Label - 2 of the
image below. If not, kindly ensure proper connection.
:::
<rk-img :params="$page.frontmatter.params.img1" />

Click **"Flash!"** and wait until the process completes automatically.


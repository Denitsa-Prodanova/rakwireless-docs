---
static_root: /assets/images/quick-start-guide/rak7243c/2.product-configuration/1.firmware-setup
next: accessing-your-gateway/
---

# Device Firmware Setup

An easy and quick way to have a fully functional gateway is by using a Precompiled Firmware Image provided. In this document, is the step by step instructions on how to install the Image into your SD Card used for the gateway.

## Burn the latest Firmware

1. Download the latest firmware **[here](https://downloads.rakwireless.com/en/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243C_Latest_Firmware.zip)**, which is based on the Raspbian OS.
2. You need to use an image writing tool to install the firmware on the SD Card. For this, You will be using **[Etcher](https://www.balena.io/etcher/),** which is an open source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your Computer.
4. Open the Etcher Software, and select the downloaded image file thru the ( **Label - 1** ) button in the image below.

::: tip 📝 NOTE:
 Your SD Card should be automatically detected by the Etcher software in the Label - 2 of the image below. If not, kindly ensure proper connection.
:::

Click Flash and wait for a couple of minutes until it displays "**Flash Complete.**"

<rk-img
  :src="`${$frontmatter.static_root}/1.htym80ccfx3xe5ycormf.png`"
  width="100%"
  figure-number="1"
  caption="Balena Etcher Software"
/>

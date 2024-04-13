---
categories: []
comments: true
date: 2024-04-09T08:30:41+0700
id: 836103b3-7ec7-4888-8411-60f38b5ca9da
tags: []
title: SP Flash Tool tips
updated: 2024-04-12T00:48:35+07:00
wordcount: 1319
---



when you're flashing `realme`, `oppo`, `vivo` devices, dont forget doing these things:

## bypass auth for mediatek

[read here](./mtk-bypass-auth-troubleshoot.md#rx-timeout)

## Partition checks

- **DONT** check `preloader`, `opporeserve2`, `cdt_engineering`
  > but, when flashing error try check the **preloader** partition

## Optional

- change options **UART**
  > when the **UART** options is disabled, you can skip these step
- select COM port same as `mct_bypass_rev4` port

<details>
  <summary><b>UART</b> description (click to expand)</summary>

  The UART (Universal Asynchronous Receiver-Transmitter) options in SP Flash Tool allow users to communicate with the device through its UART interface, typically for tasks like debugging or flashing firmware.

  The UART options in SP Flash Tool usually include settings for baud rate, data bits, stop bits, and parity. These settings must match the UART configuration of the device you are communicating with for successful communication.

  Here's a brief overview of the UART options you might find in SP Flash Tool:

  1.  **Baud Rate**: This specifies the speed at which data is transmitted between the computer and the device. Common baud rates include 9600, 115200, etc. The baud rate must be set the same on both the computer and the device for proper communication.

  2.  **Data Bits**: Data bits represent the number of bits in each character transmitted. Common values are 7 or 8 bits.

  3.  **Stop Bits**: Stop bits indicate the end of a data frame. Common values are 1 or 2 stop bits.

  4.  **Parity**: Parity is used for error checking during transmission. It can be set to None, Even, or Odd parity.

  These options are crucial for establishing a stable communication link between the computer and the device. Incorrect settings may result in communication failures or errors during the flashing process. Therefore, it's essential to ensure that the UART options are configured correctly based on the requirements of the device you are working with.
</details>



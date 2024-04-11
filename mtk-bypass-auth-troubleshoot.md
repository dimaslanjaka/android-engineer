---
title: MTK bypass auth troubleshooting
---

# install MT65xx_Preloader and QcommMtk_driver_setup

when you first installing driver you should use **Auth_Bypass_Tool_V6.0.0.1+libusb-win32-devel-filter-1.2.6.0.rar/MTK_Auth_Bypass_Tool_V6.0.0.1/mtksecbypass.exe** instead of **mtk_bypass_rev4.exe**

> [download files from github](https://github.com/dimaslanjaka/android-engineer/tree/master)

- connect your phone with holding **power** and **vol +** and **vol -** together
  > OR put phone to USB without battery, the **VCOM** driver will be shown in **device manager**
- then **click reload preloader** wait until phone reset the USB automatically
- then **click bypass** to install mtk driver automatically when phone connected on download mode.
- now you can flash the phone using **SP flash tool**

<!-- [video tutorial](https://www.youtube.com/watch?v=qRue5C1Drmw) -->

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/qRue5C1Drmw' frameborder='0' allowfullscreen></iframe></div>

## Rx Timeout

when you facing **RX timeout** while disabling auth USB, you should **take off** battery cable then re-insert it to reset USB configuration on the phone.
---
date: 2024-04-11T18:01:58.521Z
updated: 2024-04-12T01:11:41+07:00
title: Root Realme C25s RMX3195_11_C.08
description: How to root realme C25s RUI v3 Android 12 RMX3195_11_C.08 tested 12 april 2024
---

How to root realme C25s RUI v3 Android 12 RMX3195_11_C.08 tested 12 april 2024

## Requirements

- Unlocked Bootloader
- Make sure your phone version is started with **RMX3195_11_C.08**
- PC/Laptop
- USB Driver Installed [[download here]](https://github.com/dimaslanjaka/android-engineer/)
- Fasboot and Adb binary

  - *Download lastest Android platform tools*
    - Mac https://dl.google.com/android/repository/platform-tools-latest-darwin.zip
    - Linux https://dl.google.com/android/repository/platform-tools-latest-linux.zip
    - Windows https://dl.google.com/android/repository/platform-tools-latest-windows.zip

  - Unzip the folder to `platform-tools`
    - Use ADB with `./platform-tools/adb <COMMAND>` OR `open cmd.exe on the folder`

## Step to root

- Enable **USB Debugging** from Developer Settings
- Reboot into **fastboot**

```bash
fastboot flashing unlock
```

- after sending above command, your phone has confirmation dialog. Click **vol +** to confirm.
- flash **vbmeta**

```bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
fastboot --disable-verity --disable-verification flash vbmeta_system vbmeta_system.img
fastboot --disable-verity --disable-verification flash vbmeta_vendor vbmeta_vendor.img
```

- flash the magisk patched boot image for **RMX3195_11_C.08**

```bash
fastboot flash boot magisk_patched-23000_KuoRX.img
```

- reboot device

```bash
fastboot reboot
```
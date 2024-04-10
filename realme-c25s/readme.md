---
title: Realme C25s RMX3195
---

# Realme C25s RMX3195

## Stock recovery

[select your firmware version and download then extract](https://drive.google.com/drive/folders/190xREcWNzmEY1ZShuaaNRcWE1tpPPJ40)

```bash
fastboot devices
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
fastboot flash boot boot.img
fastboot flash recovery recovery.img
```

## Stock ROM

> stock ROM for **Realme C25s RMX3195** by version

- [A11 / 11 A.19 Android 11 RUI2](http://rms01.realme.net/SW/realme%20service/realme%20C25s/2167A/RMX3195export_11_A.19_2022030814430000.zip)
  > this version firmware has ability to install **TWRP** permanently

## TWRP

- [RMX3195_11.C.14](./twrp/C.14/readme.md)
- [RMX3195_11.C.16](./twrp/C.16/readme.md)

## How to flash Realme C25s RMX3195

- Download zip file of firmware
- extract `.ofp` file using [MCT_OFP_Extractor[pass evilicacelldotcom].rar](https://github.com/dimaslanjaka/android-engineer/raw/master/MCT_OFP_Extractor%5Bpass%20evilicacelldotcom%5D.rar) (extract the `rar` first)
- merge chunk images using `simg2img` [[read here]](../simg2img_win/readme.md)
- bypass USB mediatek auth [[read here]](../mtk-bypass-auth-troubleshoot.md)
- now you ready to flash **Realme C25s RMX3195** using [SP Flash Tool](../SP-Flash-Tools.md)

> flashing more than **4GB** firmware might take 1-3 hours, _please be patient_ :)

## DEADBOOT after downgrading

- open your **SP Flash Tool**
- select scatter `.txt` file
- check all partitions, uncheck **preloader**, **opporeserve2**
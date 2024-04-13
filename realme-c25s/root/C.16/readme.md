---
comments: true
date: 2024-04-10T10:48:55+0700
id: 085d5ca2-e8f4-4888-8c32-e8b374f0a4e2
tags:
  - RMX3195
  - root
categories:
  - mediatek
  - realme
title: Root realme C25s RMX3195_11.C.16
updated: 2024-04-13T14:48:41+07:00
wordcount: 190
---



Open phone app dial *#899#
Tap on software version
Check if it matches with mine.

⚠️ First create a backup folder and move these images ⚠️

1. Patch boot.img with Magisk app.
2. Unlock your bootloader. (In depth test
> Link: https://drive.google.com/file/d/1F43p7WggEYIIKe8CwilTg41su3W8S3du/view
3. Disable dm verity.
4. Flash patched boot image.

[download files here](https://github.com/dimaslanjaka/android-engineer/tree/master/realme-c25s/twrp/C.16)

device information

```log
9:50
Software version
V0.5
PCB Number
002167A11620093010AA02CZ
Build Time 2023/02/09 17:46
059
OTA Version
RMX3195_11.C.16_1160_202302211814
My Region Version
XOOLKOO
My Carrier Version N/A
Manifest:Image
55:55
Modem Version
40
Region:Operator
LK
Factory Version
RMX3195export_11_C.16_2023022118140000
```

![](./ota-version.png)
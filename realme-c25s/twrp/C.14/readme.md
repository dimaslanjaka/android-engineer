---
title: TWRP realme C25s RMX3195_11.C.14
---

OTA VERSION - **RMX3195_11.C.14_1140_202212171713**
Let me know if this works :)

1. Unlock bootloader.
2. Disable DM Verity. (Google)
3. Patch Boot.img with Magisk
4. Flash. (Google)

```bash
fastboot flash vbmeta vbmeta.img
fastboot flash vbmeta_system vbmeta_system.img
fastboot flash vbmeta_vendor vbmeta_vendor.img
fastboot flash boot boot.img
```

> to disable DM-verify `fastboot --disable-verity --disable-verification flash [partition] [image file]`

[download files here](https://github.com/dimaslanjaka/android-engineer/tree/master/realme-c25s/twrp/C.14)
## Stock recovery

[select your firmware version and download then extract](https://drive.google.com/drive/folders/190xREcWNzmEY1ZShuaaNRcWE1tpPPJ40)

```bash
fastboot devices
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
fastboot flash boot boot.img
fastboot flash recovery recovery.img
```
## Stock recovery

[select your firmware version and download then extract](https://drive.google.com/drive/folders/190xREcWNzmEY1ZShuaaNRcWE1tpPPJ40)

```bash
fastboot devices
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
fastboot flash boot boot.img
fastboot flash recovery recovery.img
```

## Stock ROM

- [A11 / 11 A.19 Android 11 RUI2](http://rms01.realme.net/SW/realme%20service/realme%20C25s/2167A/RMX3195export_11_A.19_2022030814430000.zip)
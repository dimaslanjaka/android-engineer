---
title: Advan Nasa Pro
description: Archive for advan nasa pro
date: 2024-12-04T10:54:44+07:00
updated: 2024-12-04T10:54:44+07:00
---

## Advan Nasa Pro 6202

Problem 1 : FRP
Problem 2 : TEE Keybox not write in
Bahan:

Download [ADVAN_NASA_Pro_V2.0_20220508.pac](https://drive.google.com/file/d/1sebfL0M1p7nbVPFfN2Rlu9udxMRDwGRI/view?fbclid=IwY2xjawG8sJNleHRuA2FlbQIxMAABHU3G71WBHyWBuG_kPawshvr3wwAsEySUHqhs17cYjcRvWT5kmuaKZIgtHw_aem_BbWoUj7pLZC8D5jtxlya0w)

Pengerjaan:

- Flash dengan ResearchDownload
- FRP langsung bablas, tapi ada masalah lain yang muncul berupa watermark **TEE KEYBOX NOT WRITE INI**

Kita atasi dengan:

- Aktifkan Opsi Pengembang Enable Debugging USB
- Install Minimal ADB (yang sudah langsung step berikutnya)
- Buka CMD (win+R)
- ketik `adb devices`
- ketik `adb shell`
- ketik `pm list packages`
- ketik `pm uninstall --user 0 com.unisoc.keyboxchecker`
- Restart, Done.
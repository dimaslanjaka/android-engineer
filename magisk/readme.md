---
title: Magisk utilities
updated: 2024-04-13T17:38:21+07:00
date: 2024-04-13T09:46:37.805Z
tags:
  - magisk
  - root
---

- install magisk manager app

```bash
adb install Magisk-v23.0.apk
```

- apply patch automatically after open magisk
- update the **magisk manager**

```bash
adb install MagiskManager-v6.0.1.apk
```

- open updated magisk
- then auto update popup will appear, click **yes**
- check root status using **root checker**

```bash
adb install root-checker-6-5-3.apk
```

## Troubleshoot

### Magisk always need install update

when magisk always need install update when start the magisk app

- click **cancel**
- tap **install** on magisk
- select **direct install (recommended)**
- wait and reboot the phone

## SafetyNet

### Fix Google Play Certification

- Install magisk modules **LSPosed-v1.9.2-7024-zygisk-release.zip**, **Shamiko-v1.0.1-300-release.zip**, **PlayIntegrityFix_v15.9.7.zip**
  > DONT Check **ENFORCE DENYLIST**
- Add banking apps into **DenyList** apps
- Clear data **Google Play** and **Google Play Services**
- Done

### SafetyNet Checker App

-  Play Integrity -> https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck
-  SafetyNet -> https://play.google.com/store/apps/details?id=rikka.safetynetchecker

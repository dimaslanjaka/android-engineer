---
title: Fastboot tips
date: 2024-04-24T19:29:56+07:00
---

## Reset data

factory reset through fastboot

```bash
fastboot -w 
fastboot erase cache 
fastboot erase config 
fastboot erase usrdata 
fastboot erase userdata 
fastboot reboot
```

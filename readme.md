# Android Engineer

my tested flash tools, drivers, support tools, etc

## Before ALL

- enter windows mode `disable driver signature enforcement`

## OFP flash file

- extract `ofp` file using `MCT OFP Extractor`
- merge chunk images using `simg2img`, see `super_map.csv` for the files spesific country ID or device model
- bypass auth mtk before doing flash mediatek devices

## Additional Informations

- [mtk bypass troubleshoot](./mtk-bypass-auth-troubleshoot.md)
- [SP flash tool tips](./SP-Flash-Tools.md)
- [simg2img windows](./simg2img_win/readme.md)
- [realme c25s](./realme-c25s/readme.md)

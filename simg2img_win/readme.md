simg2img_win
============

simg2img for windows users

This is a simple tool for android romer to convert simg to ext4.img.

Put your system.img file into the directory and run convert.bat, wait it finish and you would get system.ext4.img which could be read by ext2explore.

Tested with Samsung GT-I9502, Realme C25s RMX3195.

usage

- copy all files in this directory to extracted `ofp` directory
- open `super_map.csv` to get list of chunks
- select 1 line and copy all chunks filename, like below:

  from `csv`

  ```csv
  00110011,ID,super.0.56ddeced.img,super.1.6a39b1d6.img,super.2.211a4cce.img
  ```

  into `commands`

  ```bash
  simg2img.exe super.0.56ddeced.img super.1.6a39b1d6.img super.2.211a4cce.img super.img
  ```

  > merge all **chunks images** into single output image as `super.img`

  execute above command using `cmd.exe`

## Additional Information

to enable full download of `super.img` for **Realme**, you should edit `MTXXXXX_Android_scatter.txt`

- find substring like below:

```yaml
- partition_index: SYS43
  partition_name: super
  file_name: super.img
  is_download: false
  type: NORMAL_ROM
  linear_start_addr: 0x3c000000
  physical_start_addr: 0x3c000000
  partition_size: 0x260000000
  region: EMMC_USER
  storage: HW_STORAGE_EMMC
  boundary_check: true
  is_reserved: false
  operation_type: UPDATE
  is_upgradable: true
  empty_boot_needed: false
```

- replace `is_download: false` to `is_download: true`

[video tutorial](https://www.youtube.com/watch?v=i6rvuBauM4c)

**NOW YOU READY TO FLASH USING SP FLASH TOOL**
# baidu-image-spider

百度图片爬虫小工具 By Node.js.

## Usage

```sh
yarn global add baidu-image-spider
```

```sh
# example
bis -k '游戏手柄'
```

文件默认存储于 `tmp/images/关键字` 文件夹。

### Help

```sh
bis -h
```

```sh
Usage: bis [options]

Options:
  -V, --version                  output the version number
  -k, --keyword <keyword>        关键词 (default: "游戏手柄")
  -tp, --total-page <totalPage>  总页数 (default: 1)
  -pp, --per-page <perPage>      每页数量 (default: 30)
  -o, --output <output>          输出文件夹 (default: "tmp/images")
  -h, --help                     display help for command
```

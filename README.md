# baidu-image-spider

百度图片爬虫小工具 By Node.js.

> emm. 似乎百度图片增强了反爬机制，现在不大行。

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

## Ref

Ref [BaiduImageSpider](https://github.com/kong36088/BaiduImageSpider), but written with Node.js.

And I've optimized the readability of my code with axios params, and simplified some features and usage methods.

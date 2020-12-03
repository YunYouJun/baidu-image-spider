#!/usr/bin/env node
const { createCommand } = require("commander");
const axios = require("./axios");
const pkg = require("../package.json");
const yyj = require("@yunyoujun/utils");

const program = createCommand();

program.version(pkg.version);
program
  .option("-k, --keyword <keyword>", "关键词", "游戏手柄")
  .option("-tp, --total-page <totalPage>", "总页数", 1)
  .option("-pp, --per-page <perPage>", "每页数量", 30)
  .option("-o, --output <output>", "输出文件夹", "tmp/images");

program.parse();

/**
 * 百度图片爬虫类
 */
class BaiduImageSpider {
  constructor(options) {
    /**
     * 关键词
     */
    this.keyword = options.keyword;
    /**
     * 抓取的总页数
     */
    this.totalPage = options.totalPage;
    /**
     * 起始页数
     */
    this.startPage = 0;
    /**
     * 每页数量
     */
    this.perPage = options.perPage;
    this.output = options.output;
    /**
     * 抓取时间间隔 ms
     */
    this.interval = 100;

    this.downloadFolder = `${this.output}/${this.keyword}`;
    yyj.fs.checkFolderExists(this.downloadFolder);
  }

  /**
   * 获取图片
   */
  async getBaiduImages() {
    const keyword = this.keyword;
    const url = `https://image.baidu.com/search/acjson`;
    for (let page = 1; page <= this.totalPage; page++) {
      const pn = (page - 1) * this.perPage;
      const { data } = await axios.get(url, {
        params: {
          tn: "resultjson_com",
          ipn: "rj",
          ct: 201326592,
          fp: "result",
          ie: "utf-8",
          face: 0,
          istype: 2,
          queryWord: keyword,
          word: keyword,
          /**
           * 开始数量
           */
          pn,
          rn: this.perPage,
        },
      });

      const imgList = data.data;
      for (let i = 0; i < imgList.length; i++) {
        const img = imgList[i];
        const index = pn + i + 1;
        if (img.thumbURL) {
          yyj.http.downloadFile(
            img.thumbURL,
            `${this.downloadFolder}/${index}.jpg`
          );
          console.info(`已下载第 ${index} 张图片。`);
        }
        await yyj.common.sleep(this.interval);
      }
    }
  }
}

/**
 * 主程序
 */
function main() {
  const options = program.opts();
  const bis = new BaiduImageSpider(options);

  bis.getBaiduImages();
  return bis;
}

main();

const axios = require("axios").default;
axios.defaults.headers.common["User-Agent"] =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36";
module.exports = axios;

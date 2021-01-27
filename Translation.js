const axios = require("axios");

const Translation = (word) => {
  if (!word) return "";
  const requestUrl = `https://sp1.baidu.com/5b11fzupBgM18t7jm9iCKT-xh_/sensearch/selecttext?cb=callback&q=${encodeURIComponent(
    word
  )}`;
  return new Promise((resolve, reject) => {
    const callback = (data) => {
      if (!data || data.errno) return reject("[Error] Bad Request!");
      resolve(data.data);
    };
    axios
      .get(requestUrl)
      .then((res) => {
        try {
          eval(res.data);
        } catch (e) {
          reject(e);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

exports['default'] = Translation;
module.exports = exports['default'];
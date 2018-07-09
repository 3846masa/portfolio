---
title: cheerio-gasify
description: |
  Google Apps Script で使える DOM パーサ
published: 2015-07-28T00:00:00+09:00
tags:
  - Libraries
  - Google Apps Script
---

https://github.com/3846masa/cheerio-gasify

## 概要

Google Apps Script で [cheeriojs/cheerio] を使えるように変換したもの．

Google Apps Script 上でスクレイピングをするときに重宝するはず．

「リソース」→「ライブラリ」から `MU756IKHJ2hAYP1glQmzgA4ZBvzIux02r` を追加すると，次のように利用できる．

```js
var cheerio = cheerio_gasify.require('cheerio');

var response = UrlFetchApp.fetch("http://example.com/");
var $ = cheerio.load(response.getContentText());

Logger.log($('title').text());
```

実行には時間が少しかかるため，タイムアウトには気をつけて使う必要がある．

[cheeriojs/cheerio]: https://github.com/cheeriojs/cheerio
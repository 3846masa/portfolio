---
title: fdate
description: |
  Date 型を文字列にする高速で軽量なライブラリ
published: 2018-05-01T00:00:00+09:00
tags:
  - Libraries
  - Node.js
  - Datetime
  - Formatting
---

https://github.com/3846masa/fdate

## 概要

`Date()` 型を `2018-05-12` のような文字列に変えるためのライブラリです。

<iframe data-aspect="none" height="500" src="https://jsfiddle.net/3846masa/qmy704wL/3/embedded/result/dark/"></iframe>

Template literal を使ってテンプレートを作るのが特徴です。

```js
const format = fdate`${'YYYY'}/${'MM'}/${'DD'} ${'HH'}:${'mm'}`;
const now = new Date();
console.log(format(now));
```

テンプレートに関数を入れれば、多言語化もできます。

```js
const dow = ({ dayOfWeek }) => [...'日月火水木金土'][dayOfWeek];
const format = fdate`${'M'}月${'D'}日は${dow}曜日です`;
const now = new Date();
console.log(format(now));
```

[Styled Components](http://styled-components.com) から発想を得て作りました。

## リンク

- [3846masa/fdate: Light-weight, faster datetime formatter for modern browsers.](https://github.com/3846masa/fdate)

---
title: Kauntah SVG
description: |
  画像を貼るだけの世界一簡単なアクセスカウンタ
published: 2017-03-02T00:00:00+09:00
tags:
  - Products
  - Web Service
thumbnail:
  card: https://lh3.googleusercontent.com/-dbLTdsPSqPw/WvXTJbtUWeI/AAAAAAAAAGE/SLq2WojVKmEv490TVqbHN96RgtdB-kUrwCE0YBhgL/
---

<img src="https://lh3.googleusercontent.com/-dbLTdsPSqPw/WvXTJbtUWeI/AAAAAAAAAGE/SLq2WojVKmEv490TVqbHN96RgtdB-kUrwCE0YBhgL/" alt="Kauntah-SVG" width="450" height="112" />

https://kauntah-svg.mikumiku.moe

## 概要

`<img>` タグで読み込むだけのお手軽アクセスカウンター "[Kauntah](https://github.com/shimobayashi/kauntah)" のクローンです。

SVG によって画像を並べるため、サーバ側での画像結合が不要になり、サーバ負荷を低コストで運用できます。

<iframe data-aspect="none" height="150" src="https://hatenablog-parts.com/embed?url=https://github.com/3846masa/kauntah-svg"></iframe>

<iframe data-aspect="none" height="150" src="https://hatenablog-parts.com/embed?url=https://www.moongift.jp/2018/03/kauntah-svg-%E8%90%8C%E3%81%88%E7%B3%BB%E3%82%AB%E3%82%A6%E3%83%B3%E3%82%BF%E3%83%BC/"></iframe>

## 技術

- SVG の [`<defs>`](https://developer.mozilla.org/ja/docs/Web/SVG/Element/defs) と [`<use>`](https://developer.mozilla.org/ja/docs/Web/SVG/Element/use) を利用して画像を並べています
  - 0～9 の数字画像を `<defs>` で定義しておけば、加工ソフト無しで並べることができます
  - **SVG なので、テンプレートエンジンだけで軽量に動きます**

## リンク

- [Kauntah SVG](https://kauntah-svg.mikumiku.moe)
- [3846masa/kauntah-svg - GitHub](https://github.com/3846masa/kauntah-svg)

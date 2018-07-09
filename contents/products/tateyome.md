---
title: タテ読ミ
description: |
  綺麗な縦組みで Web 小説が読める PWA
published: 2018-03-24T00:00:00+09:00
tags:
  - Products
  - Web Service
  - Novel
thumbnail:
  card: https://lh3.googleusercontent.com/-EataRB46ZKQ/WvXTJUtRotI/AAAAAAAAAGE/LWyeFPLXBNclylZ-00eKwACdVSVtv-cfACE0YBhgL/
---

<img alt="タテ読ミ" src="https://lh3.googleusercontent.com/-yiM2k_W3_Vw/WvXTJfr96kI/AAAAAAAAAGI/vOaJ2wMwpD0uthduSF4fVvSR8xKFI7OXgCE0YBhgL/" width="300" height="364" />

https://tateyo.me/

## 概要

あらゆる Web サイトを縦書きで読むことができる Web アプリケーションです。

縦書きで読みたいサイトの URL 先頭に `https://tateyo.me/` をつけるだけで変換されます。

例えば、青空文庫にある「吾輩は猫である」は [`https://tateyo.me/https://www.aozora.gr.jp/cards/000148/files/789_14547.html`](https://tateyo.me/https://www.aozora.gr.jp/cards/000148/files/789_14547.html) から縦書きで読めるようになります。

<iframe src="https://www.youtube.com/embed/Q1TrGlqsROY" frameborder="0"></iframe>

## 特徴

- CSS writing-mode による実装
- より綺麗な縦書き組版（[jlreq] を参考に実装）
  - **ぶら下げ組み**
  - 禁則処理
- 横スクロール
  - ページ単位ではなく、通常の Web ページ同様にスクロールして読みます

[jlreq]: https://www.w3.org/TR/2012/NOTE-jlreq-20120403/ja/

## 技術

- PWA (Workbox)
  - アプリとしてインストールできます
- IndexedDB
  - 保存してオフライン時にも読めるようになります
  - [Dexie.js](http://dexie.org/)
- Dynamic subsetting
  - どのプラットフォームでも明朝体で表示できます
  - 必要な文字のみを配信するため、通信量が少ないです
- Intersection Observer
  - 画面外の文章のレンダリングを抑制します
- [mozilla/readability](https://github.com/mozilla/readability)
  - 多くのサイトから本文を読み込むことができます
- React
- MobX
- TypeScript
- Docker

## 出展

- 公益財団法人 クマ財団主催「[KUMA EXHIBITION 2018](https://kuma-foundation.org/exhibition2018/)」

<img alt="KUMA EXHIBITION 2018 縦読ミ 展示風景" src="https://lh3.googleusercontent.com/-qLZCkREVhco/WwHLFXHVQPI/AAAAAAAAAIE/Vss8nyZN6LYixsx41D9KG0JyZ2CIkgIvACE0YBhgL/" width="400" height="300" />

<img alt="KUMA EXHIBITION 2018 縦読ミ 展示端末" src="https://lh3.googleusercontent.com/-BGj4k0t0tkw/WwHJta8bDfI/AAAAAAAAAH0/3bt8lph3cng1cLDFR6rEwu-L_pEPxlFrwCE0YBhgL/" width="400" height="267" />

## リンク

- [縦読ミ](https://tateyo.me/)

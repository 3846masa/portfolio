---
title: Japont
description: |
  フリーフォントを Web で使うための配信ツール
published: 2015-04-08T00:00:00+09:00
tags:
  - Products
  - Web Service
  - Web Fonts
thumbnail:
  card: https://lh3.googleusercontent.com/-fNMqeypeN2Q/WvXTJRpKJAI/AAAAAAAAAGE/uXPGUzG-W9YWq8o607KBckqYdK8aS90YQCE0YBhgL/
---

https://japont.mikumiku.moe

ウェブサイト内の文字を**動的に解析**して、**必要な文字だけを抽出する**技術「**ダイナミックサブセッティング**」を実現できる OSS です。

<iframe data-aspect="none" height="150" src="https://hatenablog.com/embed?url=https://github.com/Japont/Japont-core"></iframe>

<iframe data-aspect="none" height="150" src="https://hatenablog.com/embed?url=https://www.moongift.jp/2015/04/japont-%E6%97%A5%E6%9C%AC%E8%AA%9Eweb-font%E3%82%92%E3%83%80%E3%82%A4%E3%83%8A%E3%83%9F%E3%83%83%E3%82%AF%E3%81%AB%E7%94%9F%E6%88%90/"></iframe>

## 概要

Web フォントは、**日本語などのCJK環境文字では文字数が多く、**データ量が大きく表示に時間がかかります。

**ダイナミックサブセッティング**では、サイトに必要な文字を解析して配信することで、**データ量を削減することができます**。

Japont は、**オープンライセンスなフォントでダイナミックサブセッティングをする**ためのツールです。

Heroku を使って建てることもでき、**ワンクリック & 無償**で利用できます。

<a href="https://heroku.com/deploy?template=https://github.com/Japont/Japont-core/tree/with-fonttools">
  <img alt="Deploy to Heroku" src="https://www.herokucdn.com/deploy/button.svg" width="147" height="32" />
</a>

## 特徴

- **オープンライセンスな**フォントを使えます
- 利用は生成された HTML を埋め込むだけです
  - ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/CustomElements.min.js"></script>
    <script src="https://japont.herokuapp.com/japont.min.js" async></script>
    <!-- 変更したいDOMのCSSセレクタをselectorとして指定する -->
    <japont-config src="mplus/mplus-1p-regular.woff" selector="h1"></japont-config>
    ```

## リンク

- [Japont](https://japont.mikumiku.moe)
- [Japont/Japont-core](https://github.com/Japont/Japont-core)

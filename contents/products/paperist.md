---
title: Paperist
description: |
  Markdown から論文や同人誌を作る執筆環境ツール
published: 2017-09-04T00:00:00+09:00
tags:
  - Products
  - Tools
thumbnail:
  card: https://lh3.googleusercontent.com/-nraEfb_XzuQ/WvXTJahyvjI/AAAAAAAAAGI/RfN76YN4B8EUpelUHHe8QKGdyDo1kR5qACE0YBhgL/
---

<img src="https://lh3.googleusercontent.com/-3cdGU9cgQnM/Wv1uyMd2I7I/AAAAAAAAAG0/fwNFyFYSUjQSQ_EtzYwtZVHrSdSlmvFQgCE0YBhgL/" alt="Paperist" width="500" height="263" />

https://paperist.mikumiku.moe/

## 概要

Markdown をベースとした論文・同人誌執筆環境キットです。

- [paperist/alpine-texlive-ja](https://hub.docker.com/r/paperist/alpine-texlive-ja/)
  - (u)pLaTeX 環境が入った軽量な Docker image
  - **約 400 MB** で日本語 LaTeX 環境が導入できます
- [@paperist/cli](https://www.npmjs.com/package/@paperist/cli)
  - Paperist の CLI ツール
    - テンプレートのインストール
    - ビルド（Watch 機能あり）

## 特徴

- **ローカルに LaTeX 環境が要らない**
  - Docker があれば利用できます
- 細かいテンプレート設定
  - [EJS](http://ejs.co/) で記述できます
- テンプレートの公開・インストール
  - テンプレートを Git Hosting Service (GitHub etc.) で公開できます
    - [Paperist/template-ipsj-techreport](https://github.com/Paperist/template-ipsj-techreport)
  - CLI からインストールできます
    - `paperist template install Paperist/template-ipsj-techreport`

## リンク

- [Welcome · Paperist - Write a paper with Markdown](https://paperist.mikumiku.moe/)

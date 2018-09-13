---
title: MEMI
description: |
  JavaScript で気軽に書ける JSer のためのタスクランナー
published: 2018-09-13T00:00:00+09:00
tags:
  - Tools
  - Node.js
  - JavaScript
  - Task Runner
---

[![NPM](https://nodei.co/npm/memi.png?compact=true)](https://www.npmjs.com/package/memi)

## 概要

JavaScript で気軽に書けるタスクランナーです。

**ES module で Function を export する** ことで、その Function を **タスクとして定義できます**。

```js
import fs from 'fs-extra';
import path from 'path';
import execa from 'execa';

export async function clean() {
  await fs.remove(path.join(__dirname, 'dist'));
}

export async function build() {
  await clean();
  await execa.shell('webpack');
}
```

大きな特徴として、 **依存モジュールを自動でインストールする機能があります**。

依存モジュールは `~/.memi` に保存されるため、グローバルや作業環境に影響せず使えます。

このツールは、 [mimorisuzuko/memi](https://github.com/mimorisuzuko/memi) から着想を得ました。

## 関連記事

<iframe data-aspect="none" height="150" src="https://hatenablog-parts.com/embed?url=https://qiita.com/3846masa/items/af06b39a538ba1d55c73"></iframe>

<iframe data-aspect="none" height="150" src="https://hatenablog-parts.com/embed?url=https://medium.com/@3846masa/memi-a-smart-task-runner-for-jser-de97df75607f"></iframe>

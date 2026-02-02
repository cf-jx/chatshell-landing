# 发布/部署操作手册（chatshell-landing）

本仓库是静态站点，部署目标是 GitHub Pages。本文将发布流程整理为可重复执行的清单。

## 1. 日常改动的本地自检

### 1.1 启动本地静态服务

```bash
python -m http.server 8000
```

打开 `http://127.0.0.1:8000` 做人工 QA（桌面与移动端断点、语言切换、支付/外链可用性等）。

### 1.2 运行翻译/文案一致性检查

```bash
node test-lang.js
node check-trans.js
```

### 1.3 运行 SEO 基础校验（meta/robots/sitemap）

```bash
node seo-audit.js
```

## 2. 部署方式（GitHub Pages）

### 2.1 自动部署触发条件

当你 push 到 `main` 分支时，会触发 GitHub Actions 工作流 `Deploy static content to Pages`。

工作流文件：

- `.github/workflows/static.yml`

### 2.2 部署产物范围

工作流会将以下文件复制到 `site/` 目录并作为 Pages artifact 上传（避免把开发脚本/笔记一起发布）：

- `index.html`
- `privacy.html`
- `terms.html`
- `style.css`
- `script.js`
- `logo.png`
- `robots.txt`
- `sitemap.xml`
- `assets/`（整目录）
- `CNAME`（如存在）

## 3. 提交与推送（最小步骤）

```bash
git status -sb
git add -A
git commit -m "chore: site update"
git push
```

push 完成后，在 GitHub Actions 中查看最新一次 `Deploy static content to Pages` 是否成功，并确认 Pages URL 渲染无误。

## 4. 常见问题排查

### 4.1 部署成功但页面未更新

优先确认：

1. 是否 push 到了 `main`（不是本地分支未推送）
2. Actions 是否跑到了 `Deploy to GitHub Pages` step
3. 浏览器是否被缓存影响（强制刷新或换无痕窗口）

### 4.2 文案更新后语言切换异常

通常是 `data-i18n` key 与 `script.js` 中的翻译 map 不一致导致。建议在提交前始终运行：

```bash
node test-lang.js
node check-trans.js
```


# 🎼 Spring Concert 2025

## 🎥 プロジェクト概要

Spring Concert 2025 は、キーボード操作で動画を切り替えながら再生できる Next.js 15 + TypeScript + TailwindCSS を使用した動画プレイヤーアプリです。

## ✨ 主な機能

- **キーボード操作** で動画を切り替え
- **クロスフェード** を用いたスムーズなトランジション
- **黒画面フェードイン・フェードアウト** を活用した美しい遷移
- **アスペクト比を維持しつつ画面にフィット**（黒帯は上下または左右のみ）
- **0キーで黒画面に切り替え**

## 📥 インストール方法

### 1️⃣ 必要な環境

- Node.js (最新バージョン推奨)
- npm または yarn
- GitHub CLI (`gh` コマンド)

### 2️⃣ クローン & セットアップ

```bash
# リポジトリをクローン
gh repo clone your-username/spring-concert-2025
cd spring-concert-2025

# 依存関係をインストール
npm install
```

### 3️⃣ 開発環境を起動

```bash
npm run dev
```

`http://localhost:3000` にアクセスすると、アプリが動作します。

## 🎹 キーボード操作

| キー | 動画ファイル    |
| ---- | --------------- |
| `1`  | 1\_\_These.mp4  |
| `Q`  | 1_Q.mp4         |
| `2`  | 2\_\_Pirate.mp4 |
| `W`  | 2_W.mp4         |
| `3`  | 3\_\_Conan.mp4  |
| `E`  | 3_E.mp4         |
| `4`  | 4\_\_Japan.mp4  |
| `R`  | 4_R.mp4         |
| `5`  | 5\_\_Disney.mp4 |
| `T`  | 5_T.mp4         |
| `0`  | 黒画面          |

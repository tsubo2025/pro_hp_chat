# プロテクトサービス × リユース三昧

PCサポートチャットボット「サポートちゃん」を搭載した、プロテクトサービスとリユース三昧の統合ウェブサイトです。

## 概要

このプロジェクトは、以下の2つの事業を紹介するウェブサイトです：

1. **プロテクトサービス**
   - HP制作
   - パソコン保守
   - プログラミング相談

2. **リユース三昧**
   - 中古PCの販売
   - 周辺機器の販売
   - パーツ販売

また、プロテクトサービスページには、PCサポート用のAIチャットボット「サポートちゃん」が組み込まれています。

## 技術スタック

- **フロントエンド**: Next.js, React, TailwindCSS
- **バックエンド**: Express.js
- **AI機能**: Mastra (AI対話エンジン)

## 機能

- レスポンシブデザインのウェブサイト
- 2つの事業（プロテクトサービス、リユース三昧）の紹介ページ
- AIチャットボット「サポートちゃん」によるPCサポート
- RAG（Retrieval Augmented Generation）を活用した専門知識の提供

## 開発環境のセットアップ

### 前提条件

- Node.js v16以上
- npm v7以上

### インストール手順

1. リポジトリをクローン

   ```bash
   git clone [リポジトリURL]
   cd customer_AI
   ```

2. 依存関係のインストール

   ```bash
   npm install
   ```

3. 環境変数の設定

   ```bash
   cp .env.example .env
   # .envファイルを編集して必要な環境変数を設定
   ```

4. 開発サーバーの起動

   ```bash
   npm run dev
   ```

5. ブラウザで以下のURLにアクセス
   ```
   http://localhost:3000
   ```

## プロジェクト構造

```
customer_AI/
├── public/                  # 静的ファイル
│   └── images/              # 画像ファイル
│       ├── logos/           # ロゴ画像
│       └── support-chan_AI.svg  # サポートちゃんのアバター
├── src/
│   ├── app/                 # Next.jsのApp Router
│   │   ├── api/             # APIルート
│   │   ├── protect-service/ # プロテクトサービスページ
│   │   ├── reuse/           # リユース三昧ページ
│   │   ├── globals.css      # グローバルスタイル
│   │   ├── layout.tsx       # ルートレイアウト
│   │   └── page.tsx         # トップページ
│   ├── components/          # Reactコンポーネント
│   │   ├── layout/          # レイアウトコンポーネント
│   │   └── ui/              # UIコンポーネント
│   └── mastra/              # Mastra AIエンジン
│       ├── agents/          # AIエージェント
│       ├── tools/           # AIツール
│       ├── workflows/       # AIワークフロー
│       └── index.ts         # Mastraエントリーポイント
├── .env                     # 環境変数
├── .gitignore               # Gitの除外ファイル設定
├── mastra-server.js         # Mastraサーバー
├── next.config.js           # Next.js設定
├── package.json             # プロジェクト設定
├── postcss.config.js        # PostCSS設定
├── tailwind.config.js       # Tailwind CSS設定
└── tsconfig.json            # TypeScript設定
```

## デプロイ

### Vercelへのデプロイ

1. [Vercel](https://vercel.com)にアクセスし、アカウントを作成
2. 「New Project」をクリック
3. GitHubリポジトリをインポート
4. 環境変数を設定
5. 「Deploy」をクリック

### 一般的なホスティングへのデプロイ

1. プロジェクトをビルド

   ```bash
   npm run build
   ```

2. 生成された`.next`ディレクトリとその他の必要なファイルをサーバーにアップロード

3. サーバーでNode.jsを使用してアプリケーションを起動
   ```bash
   npm start
   ```

## ライセンス

このプロジェクトは[ライセンス名]の下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 連絡先

- 開発者: tsubo2025
- メール: tsubotube2021@gmail.com
- ウェブサイト: https://github.com/tsubo2025/pro_hp_chat

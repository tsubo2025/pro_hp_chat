# HP修正手順書

## 1. 構成概要

- ページ本体: `src/app/`配下
- 共通レイアウト: `src/components/layout/`
- UI部品: `src/components/ui/`
- 画像: `public/images/`
- 設定ファイル: `next.config.js`, `tailwind.config.js` など

---

## 2. ページの修正

### 2.1 既存ページの編集

- ページごとに`src/app/`以下に`page.tsx`ファイルがあります。
- 例: トップページ → `src/app/page.tsx`
- サービス詳細 → `src/app/protect-service/page.tsx`
- プライバシーポリシー → `src/app/privacy-policy/page.tsx`

**修正方法:**
1. 対象ページの`page.tsx`を開く
2. JSX内のテキストやレイアウトを編集
3. 必要に応じて画像パス（`/public/images/`）を変更

---

### 2.2 新規ページの追加

1. `src/app/`配下に新しいフォルダを作成（例: `src/app/new-page/`）
2. `page.tsx`を作成し、必要なコンポーネントやレイアウトを記述
3. ルーティングは自動で反映されます

---

## 3. 共通レイアウト・部品の修正

- ヘッダー: `src/components/layout/Header.tsx`
- フッター: `src/components/layout/Footer.tsx`
- チャットボット等: `src/components/ui/ChatBot.tsx`

**修正方法:**
1. 対象のコンポーネントファイルを開く
2. JSXやスタイルを編集

---

## 4. 画像の追加・変更

- 画像は`public/images/`以下に配置
- 既存画像の差し替えは同名ファイルを上書き
- 新規画像は適切なフォルダに追加し、ページやコンポーネントから参照

---

## 5. スタイルの修正

- 全体CSS: `src/app/globals.css`
- Tailwind設定: `tailwind.config.js`
- ページ・コンポーネント内でTailwindクラスを利用

---

## 6. サーバー/APIの修正

- APIルート: `src/app/api/`以下
- 例: チャットAPI → `src/app/api/chat/route.ts`
- 必要に応じてロジックやレスポンスを編集

---

## 7. 動作確認

1. 修正後、ローカルサーバーを起動  
   ```bash
   npm run dev
   ```
2. ブラウザで表示を確認

---

## 8. よくある修正例

- テキスト変更: ページの`page.tsx`内のテキストを編集
- 画像差し替え: `public/images/`内の画像を上書き
- メニュー追加: `Header.tsx`のナビゲーション部分を編集
- サービス内容追加: `protect-service/page.tsx`や`services/page.tsx`を編集

---

## 9. 注意事項

- JSX/TypeScriptの文法に注意
- 画像パスは`/images/`から始める
- 変更後は必ず動作確認

---

以上がHP修正の基本手順です。  
ご不明点があれば、どのページ・どの部分を修正したいか具体的にご相談ください。

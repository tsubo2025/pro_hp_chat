const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.MASTRA_PORT || 3001;

app.use(cors());
app.use(express.json());

// デモ用のPCサポート応答
const demoResponses = [
  'こんにちは！PCの調子はどうですか？何かお手伝いできることはありますか？',
  'Windowsの起動が遅い場合は、スタートアップアプリを確認してみましょう！タスクマネージャーを開いて、「スタートアップ」タブで不要なアプリを無効にできますよ♪',
  'インターネット接続に問題がある場合は、まずルーターの再起動を試してみてください。電源を30秒ほど切ってから再度入れると解決することが多いです！',
  'ブラウザが重い時は、キャッシュのクリアが効果的ですよ。Ctrl+Shift+Deleteを押して、キャッシュデータを削除してみてください！',
  'パソコンの動作が全体的に遅い場合は、ディスククリーンアップを実行してみましょう。Cドライブを右クリックして「プロパティ」→「ディスククリーンアップ」で不要なファイルを削除できます！',
  'プリンターが認識されない場合は、一度電源を切って、USBケーブルを抜き差ししてみてください。それでも解決しない場合は、プリンタードライバーの再インストールが必要かもしれません！',
  'ウイルス対策は定期的なスキャンが大切です。Windows Defenderを使って、週に1回はフルスキャンを実行することをおすすめします！',
  'パソコンがフリーズする場合は、メモリ不足の可能性があります。タスクマネージャーでメモリ使用率を確認してみましょう。高すぎる場合は、不要なアプリを終了させてください！',
  'バッテリーの消費が早い場合は、バックグラウンドで動作しているアプリを確認してみましょう。また、画面の明るさを下げるだけでもバッテリー持ちが良くなりますよ！',
  'ファイルを誤って削除してしまった場合は、すぐにゴミ箱を確認してください。ゴミ箱にない場合でも、ファイル復元ソフトで復元できる可能性があります！'
];

// PCサポートワークフローのエンドポイント（デモ版）
app.post('/api/pc-support', async (req, res) => {
  try {
    const { description } = req.body;
    
    if (!description) {
      return res.status(400).json({ error: '問題の説明が必要です' });
    }

    // 入力に基づいて応答を選択（簡易的なキーワードマッチング）
    let response;
    
    if (description.includes('起動') || description.includes('立ち上がら')) {
      response = demoResponses[1];
    } else if (description.includes('インターネット') || description.includes('ネット') || description.includes('接続')) {
      response = demoResponses[2];
    } else if (description.includes('ブラウザ') || description.includes('重い')) {
      response = demoResponses[3];
    } else if (description.includes('遅い') || description.includes('動作')) {
      response = demoResponses[4];
    } else if (description.includes('プリンター') || description.includes('印刷')) {
      response = demoResponses[5];
    } else if (description.includes('ウイルス') || description.includes('セキュリティ')) {
      response = demoResponses[6];
    } else if (description.includes('フリーズ') || description.includes('固まる')) {
      response = demoResponses[7];
    } else if (description.includes('バッテリー') || description.includes('電池')) {
      response = demoResponses[8];
    } else if (description.includes('削除') || description.includes('ファイル')) {
      response = demoResponses[9];
    } else {
      // デフォルトの挨拶または適当な応答をランダムに選択
      response = demoResponses[Math.floor(Math.random() * demoResponses.length)];
    }

    // 少し遅延を入れて、AIが考えているように見せる
    setTimeout(() => {
      res.json({ response });
    }, 1000);
    
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Demo Mastra server running on port ${PORT}`);
});

// CommonJSのエクスポート
module.exports = app;
# Osaka × Kyoto Birthday Trip 2026 — しおりサイト

2026.09.05(Sat)〜09.07(Mon) 大阪・京都 誕生日サプライズ旅行のミニサイトです。

## 開き方
`index.html` をブラウザで直接開くだけで動作します（ビルド不要）。

## 内容の編集方法
サイトの文言・旅程・ホテル・持ち物・写真スポットは、すべて **[js/data.js](js/data.js)** の
`TRIP_DATA` オブジェクトを書き換えるだけで反映されます（HTML/CSSは触らなくてOK）。

- `meta`：ヒーローの宛名、日付表記、プロローグ文、誕生日メッセージ本文など
- `itinerary`：DAY1〜3の旅程（時間・タイトル・説明・地図検索キーワード）
- `hotels` / `transportation`：宿泊先・移動手段
- `packing`：持ち物チェックリストのカテゴリと項目
- `photoSpots`：写真スポットのカード（`gradient` はプレースホルダー配色）

**【○○】【未定】【要確認】** と書かれた箇所が仮情報です。確定次第そのまま上書きしてください。

## 写真を差し替える場合
現在 `photoSpots` はグラデーションのプレースホルダーです。実写真を使う場合は
[css/style.css](css/style.css) の `.photo-thumb` に `background-image` を追加するか、
`js/main.js` の `buildPhotoSpots()` 内で `<img>` タグに差し替えてください。

## ファイル構成
```
index.html      … ページ構造
css/style.css   … デザイン・アニメーション
js/data.js      … 編集用データ（ここを主に触る）
js/main.js      … 描画・演出ロジック
```

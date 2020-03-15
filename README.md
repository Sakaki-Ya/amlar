## Amlar（アムラー）とは

オンライン目覚まし時計です。  
[Amlar](https://amlar.onl/)

## 使用している主なライブラリやツール

- フレームワーク（[React](https://ja.reactjs.org/docs/getting-started.html)）
- ホスティング（[Netlify](https://www.netlify.com/)）
- グローバルステートの管理（[ReactN](https://github.com/CharlesStover/reactn)）
- アニメーション（[react-spring](https://www.react-spring.io/)）
- お問い合わせフォーム（[Netlify Forms](https://www.netlify.com/products/forms/)）
- テスト（[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)）
- 自動テスト（[CircleCI](https://circleci.com/)）
- CSS（[Emotion](https://emotion.sh/docs/introduction)）

## Amlar の特徴

<div align="center">
<img src="https://user-images.githubusercontent.com/48976713/76692551-765d2000-669b-11ea-97eb-f54ffe1e003d.gif" alt="デモ" title="デモ">
</div>

---

### 1. アラームを止めるボタン（以下ストップボタン）の位置が毎回ランダム

### 2. ストップボタンを長押しすることでアラームが止まる

上記の 2 点です。  
寝ぼけながら無意識でアラームを止められる可能性をできるだけ抑えられるように、また、目を開けて画面を確認してもらえるように上記の特徴を付与しました。

それぞれの特徴はそれぞれの難点を補っています。

### 1. の難点

ストップボタンの位置を確認せずとも、無作為に画面上をタップ（クリック）することでアラームを止められる。  
 **→ 特徴 2 により、画面上を無作為にタップ（クリック）してもアラームを止められない。**

### 2. の難点

例えばストップボタンの位置が画面の中央固定の場合、画面を確認せずとも画面の中央あたりをタップ（クリック）し続けることでアラームを止められる。  
 **→ 特徴 1 により、ストップボタンの位置を確認する必要が発生する。**

目覚まし時計は世界中で使用されていることから、外国人にも使ってもらいたいと考え、アプリの言語を英語にしています。

## Amlar の使い方

### 1. アラーム音を選択します。

![1](https://user-images.githubusercontent.com/48976713/73621733-7e787780-467a-11ea-9659-987c24831255.jpg)  
イラストを左右にフリック（ドラッグ）するか、イラストの両端にある矢印を押すことでアラーム音を選択できます。  
イラストの下にある「<u>Preview</u>」を押すことでアラーム音を試聴できます。  
試聴できるアラーム音は短いフレーズですが、アラーム発動時はループ再生します。

### 2. アラームを発動する時間を設定します。

![2](https://user-images.githubusercontent.com/48976713/73621734-7f110e00-467a-11ea-9164-400c79f65e44.jpg)  
左の白いフォームに時間を入力し、右のオレンジ色の「Set」ボタンを押すことで、アラームを発動させる時間を設定したことになります。

### 3. アラームが発動するまで待ちます。

![3](https://user-images.githubusercontent.com/48976713/73621735-7fa9a480-467a-11ea-8048-535936e2231f.jpg)  
アラームを発動させる時間を設定した後は、アラーム音の選択とアラームを発動させる時間の入力ができなくなります。  
青色の「Cancel」ボタンを押すことでアラーム音の選択が可能になり、アラームを発動する時間はリセットされ、時間の入力が可能になります。

### 4. アラームを止めます。

![4](https://user-images.githubusercontent.com/48976713/73622726-9998b680-467d-11ea-82bf-4b216a35cdd0.jpg)  
画面上のどこかに位置するストップボタンを長押しすることでアラームを止められます。

ストップボタンを長押ししている間は画面の下から青いオブジェクトが出現し、ストップボタンの長押しを止めると青いオブジェクトは下へ消えます。  
![5](https://user-images.githubusercontent.com/48976713/73622727-9998b680-467d-11ea-97f4-979adaa8cbf0.jpg)  
青いオブジェクトが画面全体を覆うと、アラームが止まり、元の画面に戻ります。

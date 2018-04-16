# Step.1 Reactアプリの雛形を作る。
今回は、Facebookが提供しているReactアプリの雛形を作るコマンドラインツール `create-react-app` を使用します。

まず、npmを使用してグローバルインストールをします。
```
$ npm install -g create-react-app
```

次に、作成する`#{アプリ名}`を決めて実行します。
下記コマンドを実行すると、実行したディレクトリ配下に`#{アプリ名}`がついたディレクトリにプロジェクトの雛形ができます。
```
$ create-react-app #{アプリ名}
```

雛形の使用方法は、作成したプロジェクトのREADME.mdに記載されています。

次に、Reduxを導入します。
作成したプロジェクトのディレクトリに移動し、下記コマンドでパッケージにReduxを追加します。
React-ReduxはReactとReduxを繋ぐ役割を果たしています。
```
$ npm install --save redux
$ npm install --save react-redux
```

以上で、ReactとReduxを使用する準備が整いました。

後は、Reduxのチュートリアルを進めていきます。

https://redux.js.org/introduction/examples

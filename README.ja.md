# iota-array

0からn-1までの連続した整数の配列を作成します。この機能は、[C++の `std::iota()`](http://www.sgi.com/tech/stl/iota.html) や、[APL](http://en.wikipedia.org/wiki/Iota) の同名の関数に似ています。

## インストール

```sh
npm install iota-array
```

## 使い方

このパッケージはESモジュールです。

```javascript
import iota from 'iota-array';

console.log(iota(3));
//=> [0, 1, 2]

console.log(iota(5));
//=> [0, 1, 2, 3, 4]

console.log(iota(0));
//=> []
```

## API

### `iota(n)`

0から始まる `n` 個の連続した整数を含む、長さ `n` の配列を生成します。

**パラメータ:**
- `n` (number): 生成する配列の長さとなる非負の整数。

**戻り値:** `Array<number>` `0` から `n-1` までの整数の配列。

## クレジット

作成者: [Mikola Lysenko](https://github.com/mikolalysenko)

## ライセンス

[MIT](LICENSE)

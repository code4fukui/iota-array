# iota-array

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Creates an array of consecutive integers from 0 to n-1. This functionality is similar to [C++'s `std::iota()`](http://www.sgi.com/tech/stl/iota.html) or the similarly named function in [APL](http://en.wikipedia.org/wiki/Iota).

## Install

```sh
npm install iota-array
```

## Usage

This package is an ES module.

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

Constructs an array of length `n` containing `n` sequential integers starting from 0.

**Parameters:**
- `n` (number): The non-negative integer length of the array to construct.

**Returns:** `Array<number>` An array of integers from `0` to `n-1`.

## Credits

Created by [Mikola Lysenko](https://github.com/mikolalysenko).

## License

[MIT](LICENSE)
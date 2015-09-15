## em-px [![Build Status](https://travis-ci.org/ciceropablo/em-px.svg)](https://travis-ci.org/ciceropablo/em-px)
> A module to convert EM in PX.

## Installation

```sh
$ [sudo] npm install --save em-px
```

## Usage

```js
var emPx = require('em-px');

emPx(0.667, 24, true)
  .then(function(px) {
    console.log(px); // 16px
  })
  .catch(function(err) {
    console.log(err.message);
  });
```

## API

### `emPx(em, [base], [format])`

Type: `number` or `string`

Returns a promise that resolves to the value converted.

#### `em`

*Required*  
Type: `number`

Pixel value to converting.

#### `base`

Type: `number`  
Default: `16`

Base value to converting.

#### `format`

Type: `boolean`  
Default: `false`

Format value to formatting.

## Related

See **[px-em](https://github.com/ciceropablo/px-em)** for the inverse.

## License

MIT © [Cícero Pablo](http://ciceropablo.github.io)

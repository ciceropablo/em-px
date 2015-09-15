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

TODO...

#### `em`

*Required*  
Type: `number`

TODO...

#### `base`

Type: `number`  
Default: `16`

TODO...

#### `format`

Type: `boolean`  
Default: `false`

TODO...

## License

MIT © [Cícero Pablo](http://ciceropablo.github.io)

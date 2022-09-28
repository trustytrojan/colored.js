# colored.js
my simple fork of https://github.com/chalk/chalk

i saw how chalk's API works and thought "hey wow this looks really easy to implement"

and boom

## Installation

```
npm i colored.js
```

## API

### `colored.<color>[.<attribute>](string)`

with `bg`, `bright`, and `bright_bg` variants of each color as well

- `bg` means background color. example: `colored.bg_red(string)`

- `bright` is literally self-explanatory. example: `colored.bright_blue(string)`

- `bright_bg` gives you a bright background color. example `colored.bright_bg_black(string)`

  - (by the way combining `bright` and `black` will result in a gray/grey color on most terminals)

or

### `colored.<attribute>(string)`

both will return `string` with the specified color and/or attribute applied

if using both a color and attribute, the order is always `color.attribute`

no ifs or buts just deal with it

### `colored.[bg_]rgb(r, g, b)[.<attribute>](string)`

pass numbers for `r`, `g`, `b`

attributes can be applied after the call to `rgb` or `hex` or their `bg` variants

### `colored.[bg_]hex('#ffffff')[.<attribute>](string)`

these two definitely do not work on a login shell / tty

## quick example

```js
const colored = require('colored.js')

console.log(colored.bright_bg_blue('my background is bright blue'))

console.log(colored.red.underline(`this text is red and underlined`))
```

# colored.js
my simple fork of https://github.com/chalk/chalk

i saw how chalk's API works and thought "hey wow this looks really easy to implement"

and boom

## Installation

```
npm i colored.js
```

## API

### colored.`<color>[.<attribute>](string)`

or

### colored.`<attribute>(string)`

both will return `string` with the specified color and/or attribute applied

if using both a color and attribute, the order is always `color.attribute`

no ifs or buts just deal with it

## quick example

```js
const colored = require('colored.js')

const str = colored.bright_bg_blue('my background is bright blue')

console.log(str)
```

const colors_nums = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  purple: 5,
  cyan: 6,
  white: 7,
}

const colors = {}

for(const c in colors_nums) {
  colors[c] = (30+colors_nums[c]).toString()
}

// default resets the color mode no matter if it's 39, 49, 99, or 109.
// so there's no need for a method like 'bright_bg_default'.

for(const c in colors_nums) {
  colors['bg_'+c] = (40+colors_nums[c]).toString()
}

for(const c in colors_nums) {
  colors['bright_'+c] = (90+colors_nums[c]).toString()
}

for(const c in colors_nums) {
  colors['bright_bg_'+c] = (100+colors_nums[c]).toString()
}

const attributes = {
  none: '0',
  bold: '1',
  dim: '2',
  italic: '3',
  underline: '4',
  blinking: '5',
  overline: '6',
  inverse: '7',
  invisible: '8',
  strikethrough: '9',
  dbl_underline: '21'
}

const base = '\033[A;Cm'
const reset_to_default = '\033[0;39m'

/**
 * Prepend a string with an ANSI escape sequence to set the terminal color. Append the reset sequence.
 * @param {string} str String to be colored
 * @param {string} color Color word. Can be one of: `black`, `gray`, `grey`, `red`, `green`, `yellow`, `blue`, `purple`, `cyan`, `white`, `default`. If `null` or `undefined`, only attributes will be applied.
 * @param {string} attr Attribute word. Can be one of: `bold`, `dim`, `italic`, `underline`, `blink`, `overline`, `inverse`, `invisible`, `strikethrough`, `dbl_underline`.
 * @returns {string} Colored `str`
 */
function colored_str(str, color, attr) {
  let esc = base // start with base escape sequence
  if(color && attr)
    esc = esc.replace('C', colors[color]).replace('A', attributes[attr])
  else if(color)
    esc = esc.replace('C', colors[color]).replace('A;', '')
  else if(attr)
    esc = esc.replace('C', '39').replace('A', attributes[attr])
  else
    return str
  return (esc+str+reset_to_default)
}

// create function properties in the export object for colors
// create function properties in the color function objects for attributes
for(const c in colors) {
  module.exports[c] = (x) => colored_str(x, c)
  for(const a in attributes)
    module.exports[c][a] = (x) => colored_str(x, c, a)
}
for(const a in attributes)
  module.exports[a] = (x) => colored_str(x, null, a)

// create functions in the export object for truecolor support
const rgb_base = '\033[A;F/G;2;R;G;Bm'
function rgb_function_generator(base) {
  return function(r, g, b) {
    const esc = base.replace('R', r.toString()).replace('G', g.toString()).replace('B', b.toString())
    const func = (x) => (esc.replace('A;', '') + x + reset_to_default)
    for(const a in attributes)
      func[a] = (x) => (esc.replace('A', attributes[a]) + x + reset_to_default)
    return func
  }
}
module.exports.rgb = rgb_function_generator(rgb_base.replace('F/G', '38'))
module.exports.rgb_bg = rgb_function_generator(rgb_base.replace('F/G', '48'))

const translation = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
}

for(let i = 0; i <= 9; ++i)
  translation[i.toString()] = i

function hex_function_generator(rgb_func) {
  return function(hex) {
    const r = translation[hex[0]] + 16*translation[hex[1]]
    const g = translation[hex[2]] + 16*translation[hex[3]]
    const b = translation[hex[4]] + 16*translation[hex[5]]
    return rgb_func(r, g, b)
  }
}
module.exports.hex = hex_function_generator(this.rgb)
module.exports.hex_bg = hex_function_generator(this.rgb_bg)

module.exports.colored_str = colored_str

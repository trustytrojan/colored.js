const colored = require('./colored')

const attribute_test = [
  colored.none('none'),
  colored.bold('bold'),
  colored.dim('dim'),
  colored.italic('italic'),
  colored.underline('underline'),
  colored.blinking('blinking (not widely supported)'),
  colored.overline('overline (not widely supported)'),
  colored.inverse('inverse'),
  colored.invisible('invisible'),
  colored.strikethrough('strikethrough'),
  colored.dbl_underline('double underline (not widely supported)')
]

console.log('\n**************************************** attribute test')
for(const str of attribute_test) {
  console.log(str)
}

const all_colors = [
  colored.black('black'),
  colored.red('red'),
  colored.green('green'),
  colored.yellow('yellow'),
  colored.blue('blue'),
  colored.purple('purple'),
  colored.cyan('cyan'),
  colored.white('white'),
  colored.bg_black('bg_black'),
  colored.bg_red('bg_red'),
  colored.bg_green('bg_green'),
  colored.bg_yellow('bg_yellow'),
  colored.bg_blue('bg_blue'),
  colored.bg_purple('bg_purple'),
  colored.bg_cyan('bg_cyan'),
  colored.bg_white('bg_white'),
  colored.bright_black('bright_black'),
  colored.bright_red('bright_red'),
  colored.bright_green('bright_green'),
  colored.bright_yellow('bright_yellow'),
  colored.bright_blue('bright_blue'),
  colored.bright_purple('bright_purple'),
  colored.bright_cyan('bright_cyan'),
  colored.bright_white('bright_white'),
  colored.bright_bg_black('bright_bg_black'),
  colored.bright_bg_red('bright_bg_red'),
  colored.bright_bg_green('bright_bg_green'),
  colored.bright_bg_yellow('bright_bg_yellow'),
  colored.bright_bg_blue('bright_bg_blue'),
  colored.bright_bg_purple('bright_bg_purple'),
  colored.bright_bg_cyan('bright_bg_cyan'),
  colored.bright_bg_white('bright_bg_white')
]

console.log('\n**************************************** all colors test')
for(const str of all_colors) {
  console.log(str)
}

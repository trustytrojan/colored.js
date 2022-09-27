// assuming i uploaded this to npm lol
const colored = required('colored.js')

console.log(colored.cyan('this text is cyan'))

console.log(colored.red.bold('this text is red and bolded'))

console.log(colored.purple.italic('this text is purple (or magenta) and italicized'))

console.log(colored.green.underline('this text is green and underlined'))

console.log(colored.bg_yellow('this text is has a yellow background'))

// not supported in all terminals
console.log(colored.bright_red.dbl_underline('this text is bright red and double underlined'))

console.log(colored.rgb(0, 255, 255)('this text is cyan but bright as hell'))

console.log(colored.rgb_bg(255, 0, 255)('this text has a bright ass magenta background'))

console.log(colored.hex('ff00ff')('this text has a bright ass magenta background just like the last line'))

console.log(colored.hex_bg('ffff00')('this text has a bright ass cyan background but specified with a hexadecimal color code'))

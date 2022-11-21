const fs = require ('fs')
const File = fs.readFileSync('test.txt', 'utf8')

//console.log(File)

fs.writeFileSync('test2.txt', 'New Content')
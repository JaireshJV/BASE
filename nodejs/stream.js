const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,'files','big_file.txt'),{encoding:"utf8"})
const ws = fs.createWriteStream(path.join(__dirname,'files','new_big_file.txt'))

rs.on('data',(dataChuck) =>{
    ws.write(dataChuck)
})

// rs.pipe(ws)           // Alternative and advanced way
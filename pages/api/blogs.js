import * as fs from 'fs'
import path from 'path'
export default function handler(req, res) {
  fs.readdir("./blogdata", (err, data) => {
    console.log(data);
    res.status(200).json(data[0].split('.')[0])
  })
}

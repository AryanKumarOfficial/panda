import { log } from 'console';
import * as fs from 'fs'
import path from 'path'
export default async function handler(req, res) {

  let data = await fs.promises.readdir('blogdata')
  data = data.slice(0, parseInt(req.query.count))
  let myFile;
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];


    // console.log(item);
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs)

  // fs.promises.readdir("./blogdata", (err, data) => {
  //   console.log(data);
  //   let allBlogs = []
  //   data.forEach(item => {
  //     console.log(item);
  //     fs.readFile(('blogdata/' + item), "utf-8", (err, d) => {
  //       allBlogs.push(d)
  //     })
  //   });
  //   res.status(200).json(allBlogs)
  // })
}

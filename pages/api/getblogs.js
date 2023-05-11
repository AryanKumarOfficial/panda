// http://localhost:3000/api/getblogs?slug=how-to-learn-django

import * as fs from 'fs'
import path from 'path'
export default function handler(req, res) {
  fs.readFile(`./blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such blog found " })

    }
    console.log(typeof (req.query.slug));
    res.status(200).json(JSON.parse(data))
  })
}

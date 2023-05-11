import * as fs from 'fs'

const aboutApi = async (req, res) => {
    if (req.method === "POST") {
        let data = await fs.promises.readdir('contactData');
        fs.promises.writeFile(`contactData/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json({ message: "Contact has been submitted" })
    } else {
        res.status(500).json({ message: "Internal server error" })

    }
}

export default aboutApi;
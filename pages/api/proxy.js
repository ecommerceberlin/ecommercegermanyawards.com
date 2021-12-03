
export default async function handler(req, res) {

    const {url} = req.query
    const json = await fetch(url).then(res => res.json())

    res.status(200).json(json)
    
}
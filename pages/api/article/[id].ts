import { NextApiRequest, NextApiResponse } from "next";


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const {method, query: {id}} = req

    switch (method) {
        case 'GET':
            const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            const article = await response.json()
            res.status(200).json(article)
            break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).json({msg: `${method} not allowed`})
            break;
    }


}
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if ( req.method !== 'GET' ) {
        return res.status(405).json({msg: `${req.method} not allowed`})
    }
    const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
    const articles = await response.json()
    res.status(200).json(articles)

    
}
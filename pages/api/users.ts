import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case 'GET':
            return res.json("getting");
        
        case 'POST':
            return res.json("getting");
        
        case 'DELETE':
            return res.json("getting");
        
        default:
            return res.status(400).json("invalid method")
    }

}
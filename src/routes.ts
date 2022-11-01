require('dotenv').config()
import { Request, Response, Router } from "express";

const router = Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

router.get('/', async (req: Request, res: Response) => {
    try {
        newsapi.v2.everything({
            q: 'nodejs',
        }).then((response: any) => {
            const newArray: any[] = response.articles.map((item: { author: any; title: any; description: any; }) => {
                const { author, title, description } = item
                return {
                    author,
                    title,
                    description
                }
            })
            console.log(newArray);
            return res.status(200).json(newArray)
        });
    } catch (err) {
        return res.status(404).json({ error: err, message: "Error fetching data " })
    }
})

export { router };

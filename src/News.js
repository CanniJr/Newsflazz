import React, { useEffect, useState } from 'react'
import SingleNews from './SingleNews.js'

function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=69a513d0971f40a48bb5c1f87c28b250';

        const fetchData = async () => {
            const result = await fetch(url)
                .then(resp => resp.json());
            setNews({ result });
        }
        fetchData();
    }, []);

    return (
        <div className='news'>
            {news.map(newObj => <SingleNews />)}
        </div>
    )
}

export default News

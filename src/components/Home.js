import React, { useEffect, useState } from "react";
import NewsItem from './NewsItem'
import Nav from './Nav'

const Home = () =>{
    const [articles, setArticles] = useState([])
    const newsData = async () =>{
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07ffa0087c7949348a2daee28111bdaa"
        let data = await fetch(url);
        let jsonData = await data.json()
        setArticles(jsonData.articles)
        console.log("jsondata ".concat(jsonData.articles))
    }
    useEffect(() => {
        newsData(); 
    }, [])

    return (
        <>
        <Nav/>
        {articles.length?(
            <div className="container-fluid back-dark">
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-lg-4 col-md-6" key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            </div>
    ):<h1 className="text-center mt-4">Free version "newsapi" only works on local host</h1>}
    </>

    );
}
export default Home;

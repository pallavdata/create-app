import React from 'react'
import "./News.css";

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card border border-5 border-secondary">
                    <div className="card-2">
                        <span className="scale-custom p-2 px-4 border border-1 border-secondary rounded-end rounded-top rounded-5 bg-dark"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="fst-italic">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-light">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
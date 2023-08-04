import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {ArticleContext} from "../context/ArticleContext";

const SingleArticle = () => {
  const {selectedArticle} = useContext(ArticleContext)

  const navigate = useNavigate()
  
  return (
    <div id="article-details">
      <button id="details-back-button" onClick={() => navigate('/')}><p>Back</p></button>
      <div>
        <h1>{selectedArticle.title}</h1>
        <p>Written by: {selectedArticle.author}</p>
        <img src={selectedArticle.urlToImage} alt={selectedArticle.title} />
        <p><span className="bold">{selectedArticle.publishedAt}</span></p>
        <p><span className="bold">Source: {selectedArticle.source.name}</span></p>
        <p>{selectedArticle.content}</p>
      </div>
    </div>
  )
}

export default SingleArticle

import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {Puff} from 'react-loader-spinner';
import {useNavigate} from 'react-router-dom';
import {ArticleContext} from '../context/ArticleContext';

const apiKey = import.meta.env.VITE_YOUR_API_KEY

const Home = () => {
    const {setSelectedArticle} = useContext(ArticleContext)
    const navigate = useNavigate()

    const [news, setNews] = useState([])

    // Set a state for loading
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [country, setCountry] = useState('us');
    const [language, setLanguage] = useState('en');
    const [topic, setTopic] = useState('general');

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`
                https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${topic}&q=${searchTerm}&pageSize=15&apiKey=${apiKey}
                `)
                const articles = response.data.articles.map((article) => {
                    return {
                        ...article,
                        onSelect: () => setSelectedArticle(article)
                    }
                })
                console.log(articles);
                setNews(articles);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchNews()
    }, [country, language, topic, searchTerm, apiKey])

    // Seperate instances for different card styles
    let newsGroupOne = news.slice(0,1).map((article) => {return article;});
    let newsGroupTwo = news.slice(1,7).map((article) => {return article;});
    let newsGroupRemainder = news.slice(7).map((article) => {return article;});

  return (
    <div id='home'>
      <div>
        <div className='greeting-home'>
          <div>
            <p><span className='bold'>August 1 2023</span></p>
            <h3>Hello World!</h3>
          </div>
          <div className='text-align-right'>
            <p>Weather forecast</p>
          </div>
        </div>
        <div className='filter-container'>
          <div>

            {/* Search Bar */}
            <div className='filter-settings'>
                <label htmlFor='search'><p>Search:</p></label>
                <input type='text' name='search' id='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  />
            </div>

            {/* Country Select */}
            <div className='filter-settings'>
                <label htmlFor='country'><p>Country:</p></label>
                <select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="ca">Canada</option>
                    <option value="nz">New Zealand</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                </select>
            </div>

            {/* Language Select */}
            <div className='filter-settings'>
                <label htmlFor="language"><p>Language:</p></label>
                <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>

            {/* Topic Select */}
            <div className='filter-settings'>
                <label htmlFor="topic"><p>Topic:</p></label>
                <select name="topic" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </div>

          </div>
        </div>
      </div>

      <div id='article-results'>
        <div className='top-article-container'>

          {loading ? (
            <Puff color='#00bfff' height={100} width={100} />
          ) : newsGroupOne.length === 0 ? (<p>No Articles</p>) : (
            newsGroupOne.map((item) => (
              <div key={item.url} className='top-article article-card' onClick={() => {
                item.onSelect()
                navigate('/article/')
                }
              }>
                <img src={item.urlToImage} alt={item.title} />
                <div>
                  {/* topics go here */}
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p className='author-name'>{item.author}</p>
                </div>
                
                <hr/>
              </div>
            ))
          )}

        </div>
        <div className='featured-articles-container'>

        {loading ? (<></>) : newsGroupTwo.length === 0 ? (<></>) : (
          newsGroupTwo.map((item) => (
            <div key={item.url} className='featured-articles article-card' onClick={() => {
              item.onSelect()
              navigate('/article/')
              }
            }>
              <img src={item.urlToImage} alt={item.title} />
              <div>
                {/* topics go here */}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className='author-name'>{item.author}</p>
              </div>
              
              <hr/>
            </div>
          ))
        )}

        </div>

        {loading ? (<></>) : newsGroupRemainder.length === 0 ? (<></>) : (
          newsGroupRemainder.map((item) => (
            <div key={item.url} className='articles article-card' onClick={() => {
              item.onSelect()
              navigate('/article/')
              }
            }>
              <img src={item.urlToImage} alt={item.title} />
              <div>
                {/* topics go here */}
                <h3>{item.title}</h3>
                <p className='mobile-hide'>{item.description}</p>
                <p className='author-name'>{item.author}</p>
              </div>
              
              <hr/>
            </div>
          ))
        )}

        </div>
    </div>
  )
}

export default Home

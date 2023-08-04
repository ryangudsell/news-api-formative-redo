# News App ([NewsApi.org](https://newsapi.org/))

### Practicing API, React, Vite and Github

This app allows me to use an API to collect JSON data of recent news top headlines. I used this to display a select amount using various parameters as well as open a separate page to inspect the article with greater detail.

# Npm Packages

### I used the following packages in my project:

> ### axios
>
> I used Axios to connect my code and webpage to an external API to allow my project to gather external real-world data to present as news articles in my design in a grid interface.
>
> ### react-loader-spinner
>
> I used react-loader-spinner in order to create a loading icon to help the users understand when the page is loading data to be displayed, in this case, while the news articles load onto the screen.
>
> ### react-router-dom
>
> I used react-router-dom to create links between my pages, via HashRouter, Routes and Route imports.

# Dependancies

## Dependancy - Dynamic API Call

I used an asynchronous function to get my data from the Api using various inputs such as my API Key, language, country, topic, and specific search term queries. I used 'try' and 'catch' to allow myself to see any errors that popped up in my console. The code below details how I've created the fetchNews function and used it to call other functions and get them ready for the incoming changes, like setLoading to continue loading while it gathers information, or setNews (and setLoading when it is set to 'false') when the data is gathered.

```js
const fetchNews = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`
                https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${topic}&q=${searchTerm}&pageSize=100&apiKey=${apiKey}
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
                console.log(error);
            }
        }
        fetchNews()
    }, [country, language, topic, searchTerm, apiKey])
```

## Dependancy - Context

This allows me to create a new react context and pass in any articles the user wants to inspect, by clicking the desired article's "Read More" button. The context is initially `null` but is replaced by the data when inspected. The context allows me to access or give access to other pages to get the desired data.

```js
export const ArticleContext = createContext();

export const ArticleContextProvider = ({ children }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
```

# Mockup

![Mockup image](/public/images/mockup.jpg)

> [Image by rawpixel.com](https://www.freepik.com/free-psd/computer-screen-mockup_3763755.htm#query=mockup&position=11&from_view=search&track=sph) on Freepik

# About the Developer

### Ryan Gudsell

I am a student web designer/developer working to become a full-time Full Stack Developer.

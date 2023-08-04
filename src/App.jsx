import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {ArticleContextProvider} from './context/ArticleContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import SingleArticle from './components/SingleArticle';

function App() {

  return (
    <HashRouter>
      <ArticleContextProvider>
        <Header />
          <main>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route path='/article/' element={<SingleArticle />} />
            </Routes>
          </main>
        <Footer />
      </ArticleContextProvider>
    </HashRouter>
  )
}

export default App

import React from 'react';
import './App.css';
import Home from './container/home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './container/contactUs';
import Post from './container/post';
import AboutUs from './container/aboutUs';
import SinglePostToRead from './container/single_post_to_read';
import Footer from '../src/components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/post" component={Post} />
          <Route path="/read-more" component={SinglePostToRead} />

        <Footer/>


      </div>
    </Router>
  );
}

export default App;

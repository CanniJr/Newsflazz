import React, { Component, useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleNews from './SingleNews.js'
import Home from './Home'

class News extends Component {
   state = {
       news: []
   }
    
    componentDidMount() {
        const url = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=69a513d0971f40a48bb5c1f87c28b250'
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({ news: data }))
            .catch(console.error());
    }


    clickHandler = () => {
        console.log(this.state.news)
    }

    render() {
        return (
            <Switch>
                <Router>
                    <Route path='/news'>
                        <div className='news'>
                            <button onClick={this.clickHandler}>Click me!</button>
                        </div>
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Router>
            </Switch>
        )
    }
}

export default News

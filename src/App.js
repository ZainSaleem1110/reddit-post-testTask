import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import './index.css'
import Header from './Components/header';
import Footer from './Components/footer';
import PostListing from './Components/postListing';
import SearchPost from './Components/searchPost';

export const postsContext = createContext({});

const App = () => {
    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    useEffect(async () => {
        await axios.get(`https://www.reddit.com/r/posts/.json`)
            .then(res => {
                const persons = res.data.data.children;
                setPosts(persons)
                setAllPosts(persons)
            })
    }, []);

    const setMyPosts = (posts) => {
        setPosts(posts)
    }

    return (
        <postsContext.Provider value={{ posts, allPosts, setMyPosts }}>
            <div className='body'>
                <div className='main'>
                    <Header />
                    <SearchPost />
                    <PostListing />
                    <Footer />
                </div>
            </div>
        </postsContext.Provider>
    );
}

export default App;

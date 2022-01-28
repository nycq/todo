import React, {useState} from 'react';
import CreateToDo from './CreateToDo';
import Note from './Note';
import Footer from './Footer';
import Header from './Header';

function App(){
    const [posts, setPosts] = useState([]);

function addPost(thePost){
    setPosts((prev) => {
        return [...prev, thePost];
    })
};



function deletePost(id) {
    setPosts((prev) => {
        return prev.filter((item, index) => {
            return index !== id
        })
    })
}

    return (
        <div>
        <Header />
        <CreateToDo addFunction={addPost}/>
        {posts.map((eachPost, index) => {
            return <Note key={index} content={eachPost.content} title={eachPost.title} id={index} delete={deletePost}/>
        })}
        <Footer />
        </div>
    )
}

export default App;
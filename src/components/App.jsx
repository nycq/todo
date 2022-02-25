import React, {useState, useEffect} from 'react';
import CreateToDo from './CreateToDo';
import Note from './Note';
import Footer from './Footer';
import Header from './Header';
import Axios from "axios";

function App(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        Axios.get("https://post-it-to-do.herokuapp.com/notes").then((response) => {
            setPosts(response.data)
        });
    }, []);

    const createPost = (thePost) => {
        Axios.post("https://post-it-to-do.herokuapp.com/createNote", {
            title: thePost.title,
            content: thePost.content
        }).then((response) => {
            setPosts([...posts, thePost]);
        });
    };



function deletePost(id) {
    Axios.delete(`https://post-it-to-do.herokuapp.com/delete/${id}`)

}

    return (
        <div>
        <Header />
        <CreateToDo addFunction={createPost}/>
        {posts.map((eachPost, index) => {
            return <Note key={eachPost._id} content={eachPost.content} title={eachPost.title} id={eachPost._id} delete={deletePost}/>
        })}
        <Footer />
        </div>
    )
}

export default App;
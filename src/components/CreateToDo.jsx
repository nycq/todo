import React, {useState} from 'react';

function CreateToDo(props) {
    const [input, setInput] = useState({
        title:"", content:""
    });


function handleChange(event){
    const {name, value} = event.target
    
    setInput(prev => {
     return {...prev, [name]:value}
 })
};

function handleClick(event){
    props.addFunction(input);
    setInput({title:"", content:""})
    event.preventDefault();
}


    return (
    <div>
    <form>
        <input
            onChange={handleChange}
            placeholder="Title"
            name="title"
            value={input.title}
        />
        <textarea 
        onChange={handleChange} 
        placeholder="Write a note..." name="content" value={input.content}/>
        <button 
        onClick={handleClick}
        >Post</button>
    </form>
    </div>
    );
}

export default CreateToDo;
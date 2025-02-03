import { useState } from 'react';
import './ToDoList.css';

export default function ToDoList() {
    const [data, setData] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState(''); 
    const [todoList, setTodoList] = useState([]);
  
    const handleAdd = () => {
        console.log("----------handleAdd------------");
        console.log(title);
        console.log(desc);  

        const newData = {
            title: title,
            description: desc
        };

        setData(newData);
        console.log(newData); 
        setTodoList([...todoList, newData]);     
    };

    return (
        <>
            <div className="container">
                <h1>
                    <u className='underLine'>To Do List</u>
                </h1>
                <div className='data-container'>
                    <div className="input">
                        <div>
                            <label>Title: </label>
                            <input type='text' placeholder='Type here ....'
                                   value={title} 
                                   required
                                   onChange={(e) => setTitle(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <label>Description: </label>
                            <input type='text' placeholder='Type here....' 
                                   value={desc}
                                   required 
                                   onChange={(e) => setDesc(e.target.value)}>
                            </input>
                        </div> 
                        <div>
                            <button onClick={handleAdd} >Add</button>
                        </div>
                    </div>
                    <div className='tododata-content'>
                        {todoList.length > 0 ? (
                            todoList.map((item, index) => (
                                <div key={index} className='todoData'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No items in the list</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
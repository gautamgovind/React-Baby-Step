import React, {useState, useEffect, useRef} from 'react';
import Counter from './Counter';

export const TodoFunction = (props)=>{

    const [todoList, setTodoList] = useState([]);
    const [todoVal, setTodoVal] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);
    const refContainer = useRef(null);
    // useEffect(()=>{
    //     if(todoList){
    //         setErrorFlag(true);
    //     }
    //     setTodoVal("");
    //     refContainer.current.focus();
    // },[todoList]);

    const [count, setCount] = useState(0);
    // Gets the previous value of count upon changes:
    const prevCountRef = useRef(0);

    const addList = (e)=>{
        setTodoVal(e.target.value);
    }

    const [prevCount, setPrevCount] = useState(count);
    useEffect(() => {
    prevCountRef.current = count;
    setPrevCount(prevCountRef.current);
    }, [count]);

function handleClick() { setCount(count + 1) }

    let arr = [];
    const addTodoList = (e)=> {
        e.preventDefault();
        arr = [...todoList, todoVal];
        setTodoList([...arr]);
        if(todoList){
            setErrorFlag(true);
        }
        setTodoVal("");
        refContainer.current.focus();
    }
    return(
        <div className="todo-container">
                <form>
                    <div className="todo-input-label">
                        <label htmlFor="add-word">Add your work here!</label>
                    </div>
                    <div className="todo-input">
                        <input type="text" value={todoVal} ref={refContainer} onChange={(e)=>addList(e)}  />
                        <button type="submit" onClick={addTodoList}>ADD</button>
                    </div>
                    {errorFlag && todoVal==="" ? <p className='error-msg'>oops, You haven't added anything in your todo list !!!</p>: ""}
                    
                </form>
                <ul className="list">
                    {todoList.map(item =>(
                        <li key={item}>{item} <span className="delete-todo" >X</span></li>
                    ))}
                </ul>

            <Counter />
        </div>
    )
}
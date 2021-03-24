/*
import React, {Component} from 'react';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.addList = this.addList.bind(this);
        this.state = {
            val: "",
            list: [],
            errorFlag: false
        }
    }

    addList(event) {
        this.setState({
            val: event.target.value
        })
    }

    addTodoList = (event)=> {
        event.preventDefault();
        const arr = [...this.state.list];
        this.state.val && arr.push(this.state.val);
        this.setState({
            list: arr
        });
        this.myRef.current.focus();
    }

    removeList = item =>{
        const newArr = this.state.list.filter(todo=>todo!==item);
        this.setState({
            list: newArr
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.val!==this.state.val) {
            this.setState({
                errorFlag: true
            })
        }
        
    }

    render() {
        return(
            <div className="todo-container">
                <form>
                    <div className="todo-input-label">
                        <label htmlFor="add-word">Add your work here!</label>
                    </div>
                    <div className="todo-input">
                        <input type="text" value={this.state.val} ref={this.myRef} onChange={this.addList}  />
                        <button type="submit" onClick={this.addTodoList}>ADD</button>
                    </div>
                    {this.state.errorFlag && this.state.val==="" ? <p className='error-msg'>oops, You haven't added anything in your todo list !!!</p>: ""}
                    
                </form>
                <ul className="list">
                    {this.state.list.map(item =>(
                        <li key={item}>{item} <span className="delete-todo" onClick={()=>this.removeList(item)}>X</span></li>
                    ))}
                </ul>
            </div>
        )
    }
}

*/



import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(){
        super();
        this.inputRef = React.createRef();
        this.state = {
            val:"",
            list: [], 
            count: 0,
        }
    }

    getTodoVal = e =>{
        this.setState({
            val:e.target.value
        })
    }

    addTodoList = ()=>{
        const {list, val, count} = this.state;
        let arr = [...list];
        if(val){
            arr.push({label:val, active:true, id: count});
             this.setState({
            list:arr,
            count: count+1,
        });
        }
       
        this.inputRef.current.focus();
        this.setState({
            val:"",
        });
    }

    todoDone = (item, id) =>{
        const newArr = [...this.state.list];
        newArr.map(todo=>{
            if(todo.label===item && todo.id === id){
                todo.active = !todo.active;
            }
        });

        this.setState({
            list:newArr
        });
    }

    getActiveCount =()=>{
        const activeList = this.state.list.filter(item=>(
            item.active === true
        ))
        return `${activeList.length} remaining out of ${this.state.list.length} tasks`;
    }


    render() {
        const {list, val} = this.state;
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <div>
                        <input type="text" value={val} onChange={this.getTodoVal} ref={this.inputRef} />
                        <button type="submit" onClick={this.addTodoList}> Add</button>
                    </div>
                    <div className="task-counter">
                    {this.getActiveCount()}
                    </div>
                    <ul>
                        {list.map((item, index)=>(
                            <li key={`${item.label}-${index}`} onClick={()=>this.todoDone(item.label, item.id)}
                            className={item.active? "": "is-done"}>
                            {item.label}</li>
                        ))}
                    </ul>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}

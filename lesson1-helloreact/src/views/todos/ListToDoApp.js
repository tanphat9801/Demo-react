import React from "react";
import AddToDo from "./AddToDo";
import "./listtodo.scss";
import { toast } from 'react-toastify';

class ListToDoApp extends React.Component{

    state={
        listToDo: [
            {id:'123', title:"doing homework"},
            {id:"456", title:"fixing bugs"},
            {id:"789", title:"relax and coffee"},
        ]
    }

    //add button
    addNewToDo = (todo) =>{
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })

        toast.success("Wow so easy!");
    }

    //delete item 
    handleDelete = (todo) =>{
        let currentTodos = this.state.listToDo;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listToDo: currentTodos
        })
        toast.success("Delete success");
        // console.log('check delete todo ' , todo);
    }


    render () {
        let {listToDo} = this.state
        return(
            <div className="list-todo-container">
                <AddToDo addNewToDo={this.addNewToDo}/>
                <div className="list-todo-content">
                    {listToDo&& listToDo.length > 0 && 
                        listToDo.map((item, index) => {
                        return(
                                <div className="todo-child" key={item.id}> 
                                    <span>{index + 1} {item.title}</span>
                                    <div className="css-btn">
                                        <button className="edit">Edit
                                        </button>
                                        <button className="delete"
                                        onClick={()=> this.handleDelete(item)}
                                        >Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

}

export default ListToDoApp;
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
addNewToDo = (todo) =>{
    this.setState({
        listToDo: [...this.state.listToDo, todo]
    })

    toast.success("Wow so easy!");
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
                                        <button className="delete">Delete
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
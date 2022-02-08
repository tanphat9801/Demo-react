import React from "react";
import AddToDo from "./AddToDo";
import "./listtodo.scss";
import { toast } from 'react-toastify';
import Color from "../HOC/color";

class ListToDoApp extends React.Component{

    state={
        listToDo: [
            {id:'123', title:"doing homework"},
            {id:"456", title:"fixing bugs"},
            {id:"789", title:"relax and coffee"},
        ], 
        editTodo: {}
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

    //edit button 
    handleEditTodo = (todo) =>{
        let {listToDo , editTodo} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        //save
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listToDoCopy = [...listToDo]

            let objIndex = listToDoCopy.findIndex((item => item.id === todo.id));

            listToDoCopy[objIndex].title = editTodo.title

            this.setState({
                listToDo: listToDoCopy,
                editTodo: {}
            })
            toast.success("Update Todo success");
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }

    // edit input 
    handleOnchangeEditTodo = (event) =>{
        let editToDoCopy = {...this.state.editTodo}
        editToDoCopy.title = event.target.value
        this.setState({
            editTodo : editToDoCopy
        })
    }


    render () {
        let {listToDo , editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        // console.log('check empty ojb ' , isEmptyObj)//khi chua nhan edit thi gtri bang trueva nguoc lai
        return(
            <div className="list-todo-container">
                <AddToDo addNewToDo={this.addNewToDo}/>
                <div className="list-todo-content">
                    {listToDo&& listToDo.length > 0 && 
                        listToDo.map((item, index) => {

                            return(

                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ? 
                                            <span>{index + 1} {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                <span>{index + 1} <input value={editTodo.title} 
                                                onChange={(event)=> this.handleOnchangeEditTodo(event)}/>
                                                </span>
                                                :
                                                <span>{index + 1} {item.title}</span>
                                                }
                                            </>
                                        }
                                            <div className="css-todo">    
                                                <button className="edit"
                                                onClick={()=> this.handleEditTodo(item)}
                                                >
                                                    {isEmptyObj === false && editTodo.id === item.id?
                                                    'Save' : 'Edit'    
                                                }
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

export default Color(ListToDoApp);
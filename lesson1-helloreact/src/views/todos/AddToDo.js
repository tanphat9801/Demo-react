import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component{

state={
    title:''
}

handleOnChangeTitle = (event) =>{
    this.setState({
        title: event.target.value
    })
}
handleAddToDo = () =>{
    if(!this.state.title){
       toast.error('Missing title');
        return;
    }
    let todo = {
        id : Math.floor(Math.random() * 10000),
        title: this.state.title
    }
    this.props.addNewToDo(todo);
    this.setState({
        title: ""
    })
}

    render(){

        let { title } = this.state
        return(
            <div className="add-todo">
            <input type='text' value={title} 
            onChange={ (event)=> this.handleOnChangeTitle(event)}
            />
            <button type="button" 
            onClick={()=> this.handleAddToDo()}
            >Add</button>
            </div>
        )
    }
}

export default AddToDo;

//function onchange se cap nhat lai moi khi ta nhap moi du lieu 
// if dung de kiem tra xem input co roi vao gtri rong hay undefine thi se tra ve gitr false nguoc lai thi se return chay code bth 


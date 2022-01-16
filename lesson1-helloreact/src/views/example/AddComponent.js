import React from "react";

class AddComponent extends React.Component {

    
    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({//cập nhật lại dữ liệu của state
            title: event.target.value
        })
    }

    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }
    
    handleClickButton = (event) =>{
        if(!this.state.title || !this.state.salary){
            alert('vui long nhap day du thong tin');
            return;
        }

        event.preventDefault()
        // console.log('show data :', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10001),
            title: this.state.title,
            salary: this.state.salary
        })// truyen nguoc tu com con len cha 

        this.setState({
            title: '',
            salary: ''
        })// sau khi goi input dua len com cha thanh cong thi iput thanh rong 
    }
    
    render() {
        return (
        <>
            <form>
            <label htmlFor="fname">Tilte Job</label>
            <br />
            <input
                type="text"
                value={this.state.title}
                onChange={(event) => this.handleChangeTitleJob(event)}
            />
            <br />
            <label htmlFor="lname">Salary:</label>
            <br />
            <input
                type="text"
                value={this.state.salary}
                onChange={(event) => this.handleChangeSalary(event)}
            />
            <br />
            <br />
            <input
                type="submit"
                onClick={(event) => this.handleClickButton(event)}
                value="submit"
            />
            </form>
        </>
        );
        
    }
}

export default AddComponent;

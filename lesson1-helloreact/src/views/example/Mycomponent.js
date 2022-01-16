import React from "react";
import AddComponent from "./AddComponent";
import Componentex1 from "./componentex1";

class Mycomponent extends React.Component {
    state = {
        arrJob:[
            {id: 'job1', title: 'dev', salary: '555'},
            {id: 'job2', title: 'manager', salary: '500'},
            {id: 'job3', title: 'testers', salary: '1000'}
        ]//muc dich nham co the truyen dc nhieu data bang cach dua ve bang nhung object data se dc load len tu api 
    }

    addNewJob = (job) =>{
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
        console.log('check child job' , job);
    }//truyen xuong addcomponent 


    render(){

        console.log("call re-render :" , this.state)
        //kiểm tra mỗi khi nhập dữ liệu thì lập tức component sẽ dc render lại
        return(
            <>

                <AddComponent
                addNewJob={this.addNewJob}//do func co gtri dau vao nen ko dung dau ()
                />
                <Componentex1 arrJob={this.state.arrJob}  /* day la mot prop truyen du liệu qua component con */ /> 
            </>
        )

    }

}

export default Mycomponent;




// cập nhật lại những thay đổi của cpmponent
//setState là hàm dùng để cap nhat lai state re-render lai 
// nesting component truyền dữ liệu giữa 2 component cha và con 
//prop : truyen data
//* prop chi truyen data tu cha sang con
//function component được sử dụng khi component khong can dung den state (nhận được prop từ component cha và render )
//*khi sử dụng arrow function thì ko dùng keyword this
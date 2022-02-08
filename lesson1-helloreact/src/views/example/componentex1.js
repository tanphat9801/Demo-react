import React from "react";

class Componentex1 extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs, // td no se gan nguoc lai
    });
  };

  render() {
    let { arrJob } = this.props;
    let { showJobs } = this.state;
    // console.log('check conditional ', this.state);
    //  console.log("check prop>>>:", this.props);
    return (
      <>
        {showJobs === false ? ( //? : cu phap rut gon cua dieu kien
          <div>
            <button onClick={() => this.handleShowHide()}>show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
      //hứng data truyền từ component cha
      //de render duoc arr tu component cha dung vong lap map()
    );
  }
}
export default Componentex1;

//function components

// const Componentex1 = ( props) => {//truyền prop vào để compoent nhận như một input đầu vào
//     let {age, name, arrJob} = props;

//             return(
//                 <>
//                     <div className='job-list'>

//                         {

//                             arrJob.map((item, index) => {

//                                 return(

//                                     <div key={item.id}>
//                                         {item.title} - {item.salary}
//                                     </div>

//                                 )

//                             })

//                         }

//                     </div>
//                     <div>
//                         {name}-{age}
//                     </div>
//                 </>
//                 //hứng data truyền từ component cha
//                 //de render duoc arr tu component cha dung vong lap map()
//             )
// }

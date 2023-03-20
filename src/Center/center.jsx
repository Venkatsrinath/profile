import "./center.css";
const center =()=>{
    return(
        <>
        <div className="container">
        <div className="centerdiv">
            <h3>Project Name : Assignment</h3>
            <p className="project"> Project Progress: </p>
{/* <label for="file">Downloading progress:</label> */}
<progress id="file" value="80" max="100"> 32% </progress>

            <p className="project">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet molestias libero quaerat. Molestiae cumque adipisci corrupti! Ad pariatur quae, illum laudantium consequatur sed unde est, odit vel repellendus inventore?</p>
        </div>
        <div className="flex-div">
            <h3>Tasks:</h3>
            {/* <div className="tablediv"> */}
            <div className="class">
            <table className="tablediv" >
                <tr>
                <th> Task name</th>
                <th> Total Working Hours</th>
                <th> Task Working Done</th>
                </tr>
                <tr>
                    <td>Task</td>
                    <td>10hours</td>
                    <td>Done</td>
                </tr>
            </table>
            <p className="project"> Project Progress: </p>
            <progress id="file" value="60" max="100"> 32% </progress><br></br>
            
            <p className="para"> Report Work Done</p>
            <input></input>
            <button>submit</button>
            </div>
            
            <div className="class">
            <table className="tablediv" >
                <tr>
                <th> Task name</th>
                <th> Total Working Hours</th>
                <th> Task Working Done</th>
                </tr>
                <tr>
                    <td>Task</td>
                    <td>10hours</td>
                    <td>Done</td>
                </tr>
            </table>
            <p className="project"> Project Progress: </p>
            <progress id="file" value="50" max="100"> 32% </progress><br></br>
            <p className="para"> Report Work Done</p>
            <input></input>
            <button>submit</button>
            </div>
           <div className="class">
            <table className="tablediv" >
                <tr>
                <th> Task name</th>
                <th> Total Working Hours</th>
                <th> Task Working Done</th>
                </tr>
                <tr>
                    <td>Task</td>
                    <td>10hours</td>
                    <td>Done</td>
                </tr>
            </table>
            <p className="project"> Project Progress: </p>
            <progress id="file" value="80" max="100"> 32% </progress><br></br>
            <p className="para"> Report Work Done</p>
            <input></input>
            <button>submit</button>
            </div>
            
            </div>
            </div>
        </>
    )
}
export default center;
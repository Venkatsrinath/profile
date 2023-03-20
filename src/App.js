
import './App.css';
import Header  from "../src/Header/header";
import Center from "../src/Center/center";
import Nag from "../src/Nag/nag";


function App() {
  return (
    <>
    <Header/>
    <div className="parent">
             <Nag/>
            <Center/>
            
        </div> 
  
    </>
  )
}

export default App;

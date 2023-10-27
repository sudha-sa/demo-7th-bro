/*10*/
// import './App.css';
// import React from 'react';
// import Name from './component/name/Name'

// class App extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             name: "Abhi",
     
//         };
//         this.increment = this.increment.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }



//     increment() {
//         this.setState((prev) => {
//             return {
//                 count: prev.count + 1,
//             }
//         })
//     }

//     handleChange(e) {
//         this.setState({
//             name: e.target.value,
//         })
//     }

//     render() {
//         return <div className='App'>
//             <input
//                 type='text'
//                 placeholder='enter your name'
//                 value={this.state.name}
//                 onChange={this.handleChange}/>
//             <p>{this.state.name}</p>
//             <Name/>
//         </div>
//     }
// }


/*11*/
/*life cycle*/ 

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About'
//componentDidMount
//shouldComponentUpdate
//componentDidUpdate
//componentWillUnmount

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            count:0,
        }
        this.increment = this.increment.bind(this)
    }
increment(){
    this.setState({
        count: this.state.count +1,
    })
    console.log(this.state.count)
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //          console.log("fetched")
    //     },2000);
    //   }
  

    // shouldComponentUpdate(){
    //     return true;
    // }

    // componentDidUpdate(){
    //     console.log("updated")
    // }

    // componentWillUnmount(){
    //     console.log("unmounting")
    // }

    render() {
                return 
                // <div className='App'>
                //     <Name name="aashi"/>

                //     <p>{this.state.count}</p>
                //     <button onClick={this.increment}>Add</button>
                // </div>


               <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                </Routes>
                </Router>
            }
}
export default App;
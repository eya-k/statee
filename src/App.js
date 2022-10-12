import React , {Component} from 'react'
import Profil from './Profil';
import './App.css';

export class App extends Component{

constructor(){
  super();
  this.state={
    show:false,
    
  }
}

toggel=()=>{
  this.setState({  show: !this.state.show  })
}


 render(){
  return (
    <div>
      
      <button className='butt' onClick={()=>this.toggel()} >Show-Hide</button>
      <h1>{this.state.name}</h1>
      {  this.state.show  &&  <Profil/>  }
     
      
    </div>
  )
}
}

export default App
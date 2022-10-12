import React , {Component} from 'react';
import OprahWinfrey from './OprahWinfrey.jpg';

export class Profil extends Component{

    constructor(){
        console.log('constructor()')
        super();
        this.state={
          timer:0,
          intervall : null
        }

        }
        
        componentDidMount(){
            console.log('componentDidMount()');
            this.setState({
                intervall: setInterval(
                    ()=>this.setState({  timer: this.state.timer +1  }), 1000
                )
            })

      }

   




 componentWillUnmount(){
    console.log('you killed me')
    clearInterval(this.state.intervall)
 }



//Profil +++++++++++++++++++++++++++++++++++++++++
 render(){
  return (
    <div className='card'>
   <div className='img'>
   <img src={OprahWinfrey} alt='opera'/> 
   </div>
   <div className='name'>
    <h1>Oprah Winfrey</h1>
   </div>
   <div className='pro'>
<h2>Professions :</h2>
<p>auteure, productrice de film, journaliste, animatrice de télévision, Femme d'affaires, Conférencière mativateur, comédienne voix-off, Productrice de télévision, Magnat des médias, Philanthrope</p>
   </div>
   <div className='bio'>
    <h2>Biographie :</h2>
    <p>Oprah Winfrey is a talk show host, media executive, actress and billionaire philanthropist. She's best known for being the host of her own, wildly popular program, The Oprah Winfrey Show, which aired for 25 seasons, from 1986 to 2011. In 2011, Winfrey launched her own TV network, the Oprah Winfrey Network (OWN).
</p>

   </div>
<div className='timer'>
<h3>Timer:</h3>
<p>{this.state.timer}</p>
</div>
    </div>
  )
}
}

export default Profil
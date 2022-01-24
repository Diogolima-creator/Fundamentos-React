import React, { Component} from 'react'
import Display from './Display'
import "./Contador.css"
import PassoForm from './PassoForm'
import Botoes from './Botoes'
export default class Contador extends Component {
    

       state = {
        passo: this.props.passo,
        valor: this.props.valor
    }
    
    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () =>{
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }
    render(){
        return(
            <div className="Contador">
            <h2>Contador</h2>

            <PassoForm passo={this.state.passo} 
            onPassoChange={this.mudarPasso}/>
            <Display valor={this.state.valor}/>
            <Botoes onInc = {this.inc}
            onDec = {this.dec}></Botoes>
                
            </div>
            
        )
    }
}
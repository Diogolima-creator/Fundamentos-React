import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFillhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/direta/Pai'
import Super from './components/comunicacao/direta/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Card from './components/layout/Card'
import Mega from './components/mega/Mega'
import './App.css'

export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className= "Cards">
            <Card titulo="Contador #10" color="#73503C">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="Contador #09" color="#293E6A">
                <Contador passo ={10} valor={100}></Contador>
            </Card>
            <Card titulo="Comunicação indireta #08" color="#9C0F5F">
                <Input></Input>
            </Card>
            <Card titulo="Comunicação indireta #07" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="Comunicação Direta #06" color="#4298B5">
                <Pai sobrenome = "Freitas"></Pai>
            </Card>
            <Card titulo="Condicional #05" color="#FA6900">
                <Condicional numero = {11}></Condicional>
            </Card>
            <Card titulo="Repetição #04" color="#E94C6F">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="Componente Com Filhos #03" color="#008BBA">
                <ComFillhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFillhos>
            </Card>
            <Card titulo="Componente com Parametro #02" color="#D96459">
                <ComParametro titulo = "Esse é o titulo" 
            subtitulo="Esse é o subtitulo"/>
            </Card>
            <Card titulo="Primeiro Componente #01" color="#92B06A">
                <Primeiro/>
            </Card>  
        </div>
             
    </div>)
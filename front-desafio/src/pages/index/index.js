import React, { Component } from 'react';
//import api from  '../../services/services';
import {Link} from 'react-router-dom';
import './index.css';

export default class Candidatos extends Component {
    state = {
        candidatos: [],
        candidatosInfo: {},
    }

    componentDidMount(){
        this.loadCandidatos();
    }

    loadCandidatos = async () => {
        //const response = await api.get('/candidatos');
        //const {docs, ...candidatosInfo} = response.data;
        //this.setState({candidatos: docs, candidatosInfo});
    }

    render(){
       // const {candidatos, candidatosInfo} = this.state;
        return (
            <div>
                <h2>Inscrições abertas</h2>
                <Link to="/CriarCandidato"> Clique aqui e inscreva-se agora!</Link>
            </div>
        );
    }
} 
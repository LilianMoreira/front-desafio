import React, { Component } from 'react';
import api from  '../../services/services';
import {Link} from 'react-router-dom';
import './details.css';


export default class Candidato extends Component{
    state = {
        candidato: {
            nome: "",
            contato:"",
            endereco: {
                endereco:"",
                cidade:"",
                estado:""
            },
            email:""
        }
    }

    async componentDidMount(){
        const{id} = this.props.match.params;
        const response = await api.get('/candidatos/:id');
        this.setState({candidato: response.data[0]});
    }

    render() {
        const {candidato} = this.state;

        return (
            <div className="candidato-info">
                <h1>Candidato cadastrado com sucesso!</h1><br/>
                <Link to={'/'}>Voltar</Link><br/>
            </div>
            
        );
    }
}
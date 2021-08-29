import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class CriarCandidato extends Component{

    constructor(){
        super();
        this.state = {
            candidato:{
                nome: "",
                cargo: "",
                nascimento: "",
                estadoCivil: "",
                sexo: "",
                endereco: {
                    endereco:"",
                    cidade:"",
                    bairro: "",
                    cep:"",
                  
                },
                telefone_a:"",
                telefone_b:"",
                celular:"",
                contato:"",
                email:"",
                rg:"",
                cpf:"",
                veiculo:"",
                habilitacao:""
            },
            Redirect: false
        }
    }

    render(){
        const{ redirect } = this.state;
        if(redirect){
            return <Redirect to='/DetailsCandidato'/>
        }else{
            return(
                <form onSubmit={this.handleSubmit}>
                     <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div className="candidato-insert">
                            <label htmlFor="nome">Nome Completo</label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="200"
                                required
                                value={this.state.candidato.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="cargo">Cargo Pretendido </label>
                            <br />
                            <input
                                type="text"
                                id="cargo"
                                name="cargo"
                                minLength="3"
                                maxLength="200"
                                placeholder="Cargo Pretendido"
                                value={this.state.candidato.cargo}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="nascimento">Data de Nascimento </label>
                            <br />
                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                placeholder="Data de Nascimento"
                                value={this.state.candidato.nascimento}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="estadoCivil">Estado Civil</label>
                            <br />
                            <select 
                                id="estadoCivil"
                                name="estadoCivil"
                                value={this.state.candidato.estadoCivil}
                                onChange={this.handleInputChange}
                            >
                                <option></option>
                                <option>Solteiro</option>
                                <option>Casado</option>
                                <option>Separado</option>
                                <option>Viúvo</option>
                            </select>
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="sexo">Sexo</label>
                            <br />
                            <select 
                                id="sexo"
                                name="sexo"
                                value={this.state.candidato.sexo}
                                onChange={this.handleInputChange}
                            >
                                <option></option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="endereco">Endereço </label>
                            <br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                placeholder="Endereco"
                                minLength="3"
                                maxLength="200"
                                required
                                value={this.state.candidato.endereco.endereco}
                                onChange={this.handleInputChangeEndereco}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="bairro">Bairro </label>
                            <br />
                            <input
                                type="text"
                                id="bairro"
                                name="bairro"
                                placeholder="Bairro"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.candidato.endereco.bairro}
                                onChange={this.handleInputChangeEndereco}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="cidade">Cidade </label>
                            <br />
                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                placeholder="Cidade"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.candidato.endereco.cidade}
                                onChange={this.handleInputChangeEndereco}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="cep">Cep </label>
                            <br />
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                placeholder="Cep"
                                minLength="2"
                                maxLength="17"
                                value={this.state.candidato.endereco.cep}
                                onChange={this.handleInputChangeEndereco}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="telefone_a">Tel. Fixo 1 </label>
                            <br />
                            <input
                                type="text"
                                id="telefone_a"
                                name="telefone_a"
                                placeholder="Tel. Fixo 1"
                                minLength="2"
                                maxLength="15"
                                value={this.state.candidato.telefone_a}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="telefone_b">Tel. Fixo 2 </label>
                            <br />
                            <input
                                type="text"
                                id="telefone_b"
                                name="telefone_b"
                                placeholder="Tel. Fixo 2"
                                minLength="2"
                                maxLength="15"
                                value={this.state.candidato.telefone_b}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="celular">Celular </label>
                            <br />
                            <input
                                type="text"
                                id="celular"
                                name="celular"
                                placeholder="Celular"
                                minLength="2"
                                maxLength="15"
                                value={this.state.candidato.celular}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="contato">Contato </label>
                            <br />
                            <input
                                type="text"
                                id="contato"
                                name="contato"
                                placeholder="Contato"
                                minLength="2"
                                maxLength="15"
                                value={this.state.candidato.contato}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="email">Email</label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                minLength="2"
                                maxLength="100"
                                value={this.state.candidato.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                     
                        <div className="candidato-insert"> 
                            <br/><h3>Documentos</h3>
                        </div>

                        <div className="candidato-insert">
                            <label htmlFor="rg">Identidade</label>
                            <br />
                            <input
                                type="text"
                                id="rg"
                                name="rg"
                                placeholder="Identidade"
                                minLength="2"
                                maxLength="100"
                                value={this.state.candidato.rg}
                                onChange={this.handleInputChange}
                            />
                        </div>


                        <div className="candidato-insert">
                            <label htmlFor="cpf">CPF</label>
                            <br />
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                placeholder="CPF"
                                minLength="3"
                                maxLength="20"
                                required
                                value={this.state.candidato.cpf}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="candidato-insert">
                            <label htmlFor="veiculo">Possui Veiculo</label>
                            <br />
                            <select 
                                id="veiculo"
                                name="veiculo"
                                value={this.state.candidato.veiculo}
                                onChange={this.handleInputChange}
                            >
                                <option></option>
                                <option>Sim</option>
                                <option>Nao</option>
                            </select>
                        </div>
                        <div className="candidato-insert">
                            <label htmlFor="habilitacao">Habilitação</label>
                            <br />
                            <select 
                                id="habilitacao"
                                name="habilitacao"
                                value={this.state.candidato.habilitacao}
                                onChange={this.handleInputChange}
                            >
                                <option></option>
                                <option>Sim</option>
                                <option>Nao</option>
                            </select>
                        </div><br/>

                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                        </button>
                    </fieldset>
                </form>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            candidato: { ...prevState.candidato, [name]: value }
        }));
    };

    handleInputChangeEndereco = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => {
            const candidato = { ...prevState.candidato };
            candidato.endereco[name] = value;
            return { candidato }
        })
    };

    handleSubmit = event => {
        fetch("http://localhost:8000/api/candidatos", {
            method: "post",
            body: JSON.stringify(this.state.candidato),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                    console.log(data);
                }
            })


        event.preventDefault();
    };
}

export default CriarCandidato;

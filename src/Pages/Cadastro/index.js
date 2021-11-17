import React from "react";
import Logo from "../../Components/Logo";
import Menu from "../../Components/Menu";
import FormGroup from "../../Components/FormGroup";
import FormGroupUf from "../../Components/FormGroupUf";
import "./Cadastro.css";
import GlobalStyle from "../../Components/styles/global"


export default function Cadastro() {
    function handleClick() {
    if (
      document.forms[0].email.value === "" ||
      document.forms[0].email.value.indexOf("@") === -1 ||
      document.forms[0].email.value.indexOf(".") === -1
    ) {
      alert("Por favor, informe um E-MAIL válido!");
      return false;
    }
    var seu_email = document.getElementById("seu_email").value;
    var nome = document.getElementById("nome").value;
    var Email = document.getElementById("Email").value;
    var telefone = document.getElementById("telefone").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var complemento = document.getElementById("complemento").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var uf = document.getElementById("uf").value;
    var cep = document.getElementById("CEP").value;
  
    const data = {
      seu_email: seu_email,
      nome: nome,
      email: Email,
      telefone: telefone,
      rua: rua,
      número: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      cep: cep,
    };
  
    fetch("https://estagio.eficazmarketing.com/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Success:");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  return (
    <div className="container-main Cadastro">
        <GlobalStyle/>
      <Logo />
      <div className="container-content">
        <Menu />
        <div className="container-data box-shadow">
          <div className="container-cadastro">
            <div className="title">
              <h2>CADASTRO</h2>

              <form action="">
                <div className="content-form">
                  <FormGroup
                    id="seu_email"
                    value="E-mail pessoal do candidatos"
                    type="email"
                    placeholder="E-mail pessoal do candidato"
                  />
                  <FormGroup
                    id="Email"
                    value="E-mail"
                    type="email"
                    placeholder="Digite Seu E-mail"
                  />
                  <FormGroup
                    id="rua"
                    value="Rua"
                    type="text"
                    placeholder="Digite Sua Rua"
                  />
                  <FormGroup
                    id="complemento"
                    value="Complemento"
                    type="text"
                    placeholder="Digite Seu Complemento"
                  />
                  <FormGroup
                    id="CEP"
                    value="CEP"
                    type="text"
                    placeholder="Digite Seu CEP"
                    funcao="onkeypress=mascara(this, '#####-###')"
                  />
                  <FormGroup
                    id="nome"
                    value="Nome Completo"
                    type="text"
                    placeholder="Digite Seu Nome Completo"
                  />
                  <FormGroup
                    id="Telefone"
                    value="Telefone (DDD)"
                    type="text"
                    placeholder="Digite um número de Telefone"
                  />
                  <FormGroup
                    id="numero"
                    value="Nº"
                    type="number"
                    placeholder="Digite o Número da sua residência"
                  />
                  <FormGroup
                    id="bairro"
                    value="Bairro"
                    type="text"
                    placeholder="Digite o Seu Bairro"
                  />
                  <div className="group-uf">
                    <FormGroupUf
                      id="cidade"
                      value="Cidade"
                      type="text"
                      placeholder="Digite a Sua Cidade"
                    />
                    <FormGroupUf
                      id="uf"
                      value="UF"
                      type="text"
                      placeholder="Unidade Federal"
                    />
                  </div>
                </div>
                <div className="button">
                  <button onClick={handleClick} className="cadastrar">Cadastrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

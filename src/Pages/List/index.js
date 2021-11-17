import React from "react";
import Logo from "../../Components/Logo";
import Menu from "../../Components/Menu";
import "./Lista.css";
import GlobalStyle from "../../Components/styles/global"

export default function Cadastro() {
//     // GET

// fetch("https://estagio.eficazmarketing.com/api/user")
// .then((response) => response.json())
// .then((data) => {
//   console.log(data)
  
//   for (let i = 0; i < data.length; i++) {
//     // if (i<10){  //limite de envio, para não sobrecarregar as páginas
//       var newRow = document.getElementsByTagName("tr");
//       var cols = "";
//       cols += `<td class="d-none"> ${data[i]["id"]} </td>`;
//       cols += `<td> ${data[i]["nome"]} </td>`;
//       cols += `<td class="data_email"> ${data[i]["email"]} </td>`;
//       cols += `<td> ${data[i]["rua"]},${data[i]["numero"]} <br> ${data[i]["bairro"]} <br> ${data[i]["cep"]} <br>  ${data[i]["cidade"]} -  ${data[i]["uf"]}</td>`;
      
//       cols += `<td> ${data[i]["telefone"]} </td>`;
//       cols += '<td class="group-button">';
//       cols += '<button class="bc-green">Alterar</button>'; 
//       cols += `<bUtton class="bc-red" onclick="del(${data[i]["id"]})">Excluir</bUtton>`; 
//       cols += '</td>';

//       newRow.append(cols);
//       document.getElementsByTagName("tbody").append(newRow);
//     // }
// }

// })
// .catch((error) => console.error('Whoops! Erro:', error.message || error))

  return (
    <div className="container-main Lista">
        <GlobalStyle/>
      <Logo />
      <div className="container-content">
        <Menu />
        <div className="container-data box-shadow">
        <div className="p-2">
                    <div className="container-data">
                        <p className="container-cadastro">
                            Lista de Cadastrados
                        </p>

                        <h2 className="container-cadastro">Filtros:</h2>
                    </div>
                    <table className="container-cadastro">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Endereço <br/> completo </th>
                                <th> Telefone </th>
                                <th> Ação </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
        </div>
      </div>
    </div>
  );
}

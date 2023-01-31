import axios from 'axios';

const urlApi = "http://localhost:3333/";

export async function getEmpresas(){
    try {
        const response = await axios.get(urlApi+'empresas');
        console.log(response);
        return response.data
      } catch (error) {
        console.error(error);
      }
}

export async function getOrcamentos(){
    try {
        const response = await axios.get(urlApi+'orcamentos-empresas');
        console.log(response);
        return response.data
      } catch (error) {
        console.error(error);
      }
}

  
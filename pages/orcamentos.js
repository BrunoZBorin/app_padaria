import { useState, useCallback, useEffect } from "react";
import Link from "next/link"
import { theme } from '../src/theme/theme';
import { Box, Text, Icon, Input, Button } from '../src/theme/components';
import Footer from "../src/components/patterns/Footer";
import {getOrcamentos} from '../service/request'

// export async function getServerSideProps(){
//     const url = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
//         const faq = await fetch(url)
//         .then((repostaUrl)=>{
//             return repostaUrl.json()
//         })
//         .then((resposta) =>{
//             let res = [];
//             resposta.map((pergunta)=>(
//                 res.push({
//                     key:pergunta.question,
//                     text:pergunta.answer,
//                     value:pergunta.answer
//                 })
//             ))
//             return res
//         })
//     return {
//         props:{*
//             faq
//         }
//     }
// }

export default function HomePage(){
    const [orcamentos, setOrcamentos] = useState([]);

    const listaOrcamentos = async () => {
        
        const response = await getOrcamentos();
        console.log(response)
        setOrcamentos(response)
    };
  
    useEffect(()=>{
        listaOrcamentos();
    },[])
    
    return(
    <Box>
      <Box>
            <h1>Orçamentos</h1>
            {/* <ul>{faq.map((pergunta)=>(
                <li key={pergunta.text}>{pergunta.value}</li>
            ))}
            </ul> */}
            {/* <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select> */}
            {/* <Dropdown
                placeholder='Localize faq'
                fluid
                search
                selection
                options={faq}
                clearable
            /> */}
        </Box>
        <Footer />
    </Box>
    )
}
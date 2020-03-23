//dados.js

import {Calculo, Numero} from './modelo'

const valor = new Calculo()
valor.adicione(new Numero(188))

const dados = {
    valor,
    numero
}

export {dados}
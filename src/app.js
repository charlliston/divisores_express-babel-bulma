import https from 'https'
import fs from 'fs'
import path from 'path'
import express from 'express'
import {consultaInicial, consultaDivisores} from './controle'

const porta = 3000
const msgNoAr = `Servidor no ar, porta ${porta}`
const opcoes = {
  key: fs.readFileSync(path.resolve(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../cert/cert.pem'))
}

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => consultaInicial(res))

app.get('/pesquiseDiv', (req, res) => consultaDivisores(req, res))

const server = https.createServer(opcoes, app)

server.listen(porta, () => console.log(msgNoAr))

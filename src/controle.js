// controle.js

/**
 * Função que gera a página inicial da aplicação.
 * @param http.ClientResponse res Objeto que conterá a resposta HTTP.
 * @param {numero} dados Dados usados na aplicação.
 */
function consultaInicial (res) {
  res.render('index')
}

/**
 * Função que gera a página que mostra apenas os atletas com uma altura mínima
 * @param  req Requisição HTTP enviada pelo usuário.
 * @param  res Resposta HTTP a ser enviada para o browser.
 */
function consultaDivisores (req, res) {
  const numero = parseInt(req.query.numero)
  const divisores = encontreDivsComNumero(numero)
  const resposta = {
    numero,
    divisores
  }
  res.render('resposta', resposta)
}
export {consultaInicial, consultaDivisores}

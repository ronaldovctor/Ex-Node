const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = x => x.pais === 'China'
const feminino = x => x.genero === 'F'
const menorSalario = (func, funcAtual) => {
   return func.salario > funcAtual.salario ? func : funcAtual 
}

axios.get(url).then(response => {
   const funcionarios = response.data
   const func = funcionarios.filter(chineses).filter(menorSalario).filter(feminino).reduce(menorSalario)

   console.log(func)
})
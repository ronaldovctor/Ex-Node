const sequence = {
   _id: 1,
   get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto){
   if(!produto.id) produto.id = sequence.id
   produtos[produto.id] = produto // Se não houver o produto vai ser criado, se ele já existir será atualizado.
   return produto
}

function getProduto(id){
   return produtos[id] || {}
}

function getProdutos(){
   return Object.values(produtos) 
}

function excluirProduto(id){
   const produto = produtos[id]
   delete produtos[id]
   return produto
}
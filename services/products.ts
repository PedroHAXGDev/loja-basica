import { data } from "../data";

//Função para pegar todos os produtos.
export const getAllProducts = () => {
    return data.products;
}

//Função para pegar um produto específico por ID.
export const getProductById = (id:number) => {
    return data.products.find(item => item.id === id);
}

//Função para pegar um produto de uma categoria específica.
export const getProductsByCategory = (idCategory:number) => {
    return data.products.filter(item => item.idCategory === idCategory)
}

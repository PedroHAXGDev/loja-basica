import { data } from "../data";

//Função para pegar uma categoria específica.
export const getCategoryById = (id:number) => {
    return data.categories.find(item => item.id === id);
}

//Função para pegar todas as categorias.
export const getAllCategories = () => {
    return data.categories;
}
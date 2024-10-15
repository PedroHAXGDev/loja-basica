import { data } from "../data";

//Função para pegar uma subcategoria específica.
export const getSubcategoryById = (id:number) => {
    return data.subcategory.find(item => item.id === id);
}

//Função para pegar todas as subcategorias.
export const getAllSubcategories = () => {
    return data.subcategory;
}
export type Subcategory = {
    id: number;
    title: string;
    atributos: {
        tamanhos?: string[];
        cores?: string[];
        estilos?: string[];
        material?: string[];
        tipo?: string[];
        comprimento?: string[];
    }
}
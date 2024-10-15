import { Category } from "../types/category";
import { Product } from "../types/product";
import { Subcategory } from "../types/subcategory";

type Data = {
    categories: Category[],
    products: Product[],
    subcategory: Subcategory[]
};

export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Roupas',
            cover: 'https://blog.bling.com.br/wp-content/uploads/2023/09/como-abrir-loja-de-roupas-masculinas-1024x576.png?x99143',
            subcategory: [
                {
                    id: 1,
                    title: "Camisetas",
                    atributos: {
                        tamanhos: ["P", "M", "G", "GG"],
                        cores: ["branco", "preto", "azul", "vermelho"],
                        estilos: ["básica", "estampada", "manga longa", "manga curta"],
                        material: ["algodão", "poliéster", "mistura"],
                    }
                },
                {
                    id: 2,
                    title: "Camisas",
                    atributos: {
                        tamanhos: ["P", "M", "G", "GG"],
                        cores: ["branco", "azul", "xadrez"],
                        estilos: ["casual", "formal"],
                        tipo: ["normal", "mandarim"],
                    }
                },
                {
                    id: 3,
                    title: "Calças",
                    atributos: {
                        tamanhos: ["38", "40", "42", "44"],
                        cores: ["azul", "preto", "bege"],
                        estilos: ["jeans", "chino", "jogger"],
                        comprimento: ["curtas", "longas"],
                    }
                },
                {
                    id: 4,
                    title: "Jaquetas e Casacos",
                    atributos: {
                        tamanhos: ["P", "M", "G", "GG"],
                        cores: ["preto", "cinza", "vermelho"],
                        estilos: ["casual", "esportivo", "formal"],
                        material: ["couro", "nylon", "algodão"],
                    }
                },
            ]
        },
        {
            id: 2,
            title: 'Calçados',
            cover: 'https://cdn.shopify.com/s/files/1/0065/1037/1798/products/vegan-leather-black-3_1024x1024.jpg?v=1599651134',
            subcategory: [
                {
                    id: 1,
                    title: "Tênis",
                    atributos: {
                        tamanhos: ["39", "40", "41", "42", "43"],
                        cores: ["branco", "preto", "azul", "vermelho"],
                        estilos: ["casual", "esportivo", "de caminhada"],
                        material: ["couro", "lona", "sintético"],
                    }
                },
                {
                    id: 2,
                    title: "Sapatos Sociais",
                    atributos: {
                        tamanhos: ["39", "40", "41", "42", "43"],
                        cores: ["preto", "marrom", "caramelo"],
                        estilos: ["oxford", "derby", "mocassim"],
                        material: ["couro", "sintético"],
                    }
                },
            ]
        },
        {
            id: 3,
            title: 'Acessórios',
            cover: 'https://cdn.shopify.com/s/files/1/0065/1037/1798/products/CINTO-PORTA-CHAVE-013_1024x1024.jpg?v=1600352751',
            subcategory: [
                {
                    id: 1,
                    title: "Cintos",
                    atributos: {
                        tamanhos: ["P", "M", "G"],
                        cores: ["preto", "marrom", "bege"],
                        estilos: ["tradicional", "casual"],
                        material: ["couro", "sintético"],
                    }
                },
                {
                    id: 2,
                    title: "Relógios",
                    atributos: {
                        tipo: ["analógico", "digital"],
                        estilos: ["casual", "esportivo"],
                        material: ["couro", "metal", "silicone"],
                    }
                },
            ]
        },
        {
            id: 4,
            title: 'Moda Íntima',
            cover: 'https://cdn.shopify.com/s/files/1/0065/1037/1798/products/cueca-masculina_1024x1024.jpg?v=1611789311',
            subcategory: [
                {
                    id: 1,
                    title: "Cuecas",
                    atributos: {
                        tamanhos: ["P", "M", "G", "GG"],
                        tipo: ["boxer", "slip", "samba-canção"],
                        material: ["algodão", "modal"],
                    }
                },
                {
                    id: 2,
                    title: "Meias",
                    atributos: {
                        tamanhos: ["P", "M", "G"],
                        estilos: ["casual", "social"],
                        comprimento: ["curtas", "longas"],
                        material: ["algodão", "poliéster"],
                    }
                },
            ]
        },
        {
            id: 5,
            title: 'Esportivos',
            cover: 'https://cdn.shopify.com/s/files/1/0065/1037/1798/products/camiseta-esportiva_1024x1024.jpg?v=1611789311',
            subcategory: [
                {
                    id: 1,
                    title: "Roupas de Treino",
                    atributos: {
                        tamanhos: ["P", "M", "G", "GG"],
                        estilos: ["camisetas", "calças", "shorts"],
                        material: ["dry fit", "algodão"],
                    }
                },
                {
                    id: 2,
                    title: "Calçados Esportivos",
                    atributos: {
                        tamanhos: ["39", "40", "41", "42", "43"],
                        tipo: ["corrida", "treino", "caminhada"],
                        material: ["mesh", "sintético"],
                    }
                },
            ]
        },
    ],
    products: [
        // Produtos para "Roupas"
        { id: 1, idCategory: 1, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/jrconfec/catalog/camiseta-masc-algodao/mockups-camisetas-lisas-jr-branca-costas.jpg', title: "Camiseta Básica Branca", description: "Camiseta branca de algodão, confortável e versátil.", price: 29.99 },
        { id: 2, idCategory: 1, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/locoiaoa/catalog/camisetas/camiseta-estampada-carta-rei-001.jpg', title: "Camiseta Estampada", description: "Camiseta estampada, ideal para o dia a dia.", price: 39.99 },
        { id: 3, idCategory: 1, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/onzacomb/catalog/produtos-casual/632-frente-royal.jpg', title: "Camisa Casual Azul", description: "Camisa casual azul, perfeita para ocasiões informais.", price: 89.99 },
        { id: 4, idCategory: 1, image: 'https://cdn.awsli.com.br/600x1000/2067/2067984/produto/1227766109d88cfad57.jpg', title: "Calça Jeans Slim", description: "Calça jeans slim, ideal para um look moderno.", price: 119.99 },
        { id: 5, idCategory: 1, image: 'https://vinncistore.com.br/cdn/shop/products/jaqueta-racer-de-couro-masculina-jaqueta-racer-de-couro-masculina-vinnci-store-preto-p-366485_600x.jpg?v=1685586999', title: "Jaqueta de Couro", description: "Jaqueta de couro, para um visual estiloso.", price: 249.99 },
    
        // Produtos para "Calçados"
        { id: 6, idCategory: 2, image: 'https://img.irroba.com.br/filters:fill(fff):quality(80)/atriasho/catalog/193/ambientadas/branco-branco-11.jpg', title: "Tênis Casual Branco", description: "Tênis casual branco, conforto e estilo no seu dia a dia.", price: 99.99 },
        { id: 7, idCategory: 2, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/dershoes/catalog/sapatofran/sap-bx2256/preto-branco/tenis-esportivo-masculino-preto-e-branco-sap-bx2256-preto-e-branco-1.jpg', title: "Tênis Esportivo Preto", description: "Tênis esportivo, ideal para atividades físicas.", price: 149.99 },
        { id: 8, idCategory: 2, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/outleeia/catalog/produtos/2312/2312-romana-preto-5.jpg', title: "Sapato Oxford Preto", description: "Sapato social, clássico e elegante.", price: 199.99 },
    
        // Produtos para "Acessórios"
        { id: 9, idCategory: 3, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/madokcom/catalog/loja/cinto-preto-jp.jpg', title: "Cinto de Couro Preto", description: "Cinto de couro, para complementar seu visual.", price: 79.99 },
        { id: 10, idCategory: 3, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/michelet/catalog/2023/relogio-edifice-preto-mi28693-micheletti-joias.jpg', title: "Relógio Analógico", description: "Relógio analógico, combina com qualquer estilo.", price: 199.99 },
    
        // Produtos para "Moda Íntima"
        { id: 11, idCategory: 4, image: 'https://cdn.awsli.com.br/600x700/1826/1826544/produto/87515275/02ee44d054.jpg', title: "Cueca Boxer Branca", description: "Conforto e qualidade em cada detalhe.", price: 29.99 },
        { id: 12, idCategory: 4, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/lojalaro/catalog/produtos/acessorios/meias/02155-2729/meia-casual-confort-2-cores-preta-01.jpg', title: "Meia Casual Preta", description: "Meia casual, ideal para uso diário.", price: 19.99 },
    
        // Produtos para "Esportivos"
        { id: 13, idCategory: 5, image: 'https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/calcadonet/media/uploads/produtos/foto/tgpbuvvk/file.png', title: "Camiseta de Treino", description: "Camiseta ideal para treinos intensos.", price: 49.99 },
        { id: 14, idCategory: 5, image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/ousyshoe/catalog/1317/masculino/dsc4959.JPG', title: "Calçado Esportivo Corrida", description: "Calçado ideal para corredores, leve e confortável.", price: 149.99 },
    ],
    
    subcategory: [
        // Subcategorias
        { id: 1, title: "Camisetas", atributos: { tamanhos: ["P", "M", "G", "GG"], cores: ["branco", "preto", "azul", "vermelho"], estilos: ["básica", "estampada", "manga longa", "manga curta"], material: ["algodão", "poliéster", "mistura"] }},
        { id: 2, title: "Camisas", atributos: { tamanhos: ["P", "M", "G", "GG"], cores: ["branco", "azul", "xadrez"], estilos: ["casual", "formal"], tipo: ["normal", "mandarim"] }},
        { id: 3, title: "Calças", atributos: { tamanhos: ["38", "40", "42", "44"], cores: ["azul", "preto", "bege"], estilos: ["jeans", "chino", "jogger"], comprimento: ["curtas", "longas"] }},
        { id: 4, title: "Jaquetas e Casacos", atributos: { tamanhos: ["P", "M", "G", "GG"], cores: ["preto", "cinza", "vermelho"], estilos: ["casual", "esportivo", "formal"], material: ["couro", "nylon", "algodão"] }},
        { id: 5, title: "Tênis", atributos: { tamanhos: ["39", "40", "41", "42", "43"], cores: ["branco", "preto", "azul", "vermelho"], estilos: ["casual", "esportivo", "de caminhada"], material: ["couro", "lona", "sintético"] }},
        { id: 6, title: "Sapatos Sociais", atributos: { tamanhos: ["39", "40", "41", "42", "43"], cores: ["preto", "marrom", "caramelo"], estilos: ["oxford", "derby", "mocassim"], material: ["couro", "sintético"] }},
        { id: 7, title: "Cintos", atributos: { tamanhos: ["P", "M", "G"], cores: ["preto", "marrom", "bege"], estilos: ["tradicional", "casual"], material: ["couro", "sintético"] }},
        { id: 8, title: "Relógios", atributos: { tipo: ["analógico", "digital"], estilos: ["casual", "esportivo"], material: ["couro", "metal", "silicone"] }},
        { id: 9, title: "Cuecas", atributos: { tamanhos: ["P", "M", "G", "GG"], tipo: ["boxer", "slip", "samba-canção"], material: ["algodão", "modal"] }},
        { id: 10, title: "Meias", atributos: { tamanhos: ["P", "M", "G"], estilos: ["casual", "social"], comprimento: ["curtas", "longas"], material: ["algodão", "poliéster"] }},
        { id: 11, title: "Roupas de Treino", atributos: { tamanhos: ["P", "M", "G", "GG"], estilos: ["camisetas", "calças", "shorts"], material: ["dry fit", "algodão"] }},
        { id: 12, title: "Calçados Esportivos", atributos: { tamanhos: ["39", "40", "41", "42", "43"], tipo: ["corrida", "treino", "caminhada"], material: ["mesh", "sintético"] }},
    ]
};

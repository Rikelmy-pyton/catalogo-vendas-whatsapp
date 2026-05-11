// ============================================================
// ARQUITETURA DE DADOS: Rikelmy - Web Design & Soluções Tech
// Proibida a reprodução para fins comerciais sem atribuição.
// ============================================================
// ==========================================
// SEU ESTOQUE - ESSÊNCIA & RENDA
// ==========================================

const listaDeProdutos = [
    // --- PERFUMARIA ---
    {
        marca: "Natura",
        categoria: "perfumaria",
        nome: "Kaiak Aero Perfume Masculino 100ml",
        preco: "189,90",
        fotos: [
            "https://a-static.mlcdn.com.br/800x560/kaiak-aero-desodorante-colonia-masculino-100-ml/chamegooutlet/5906f8621e9c11eda7df4201ac185019/6cfcde5d76fd48e6116da8d302032358.jpeg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 215
    },
    {
        marca: "Natura",
        categoria: "natura",
        nome: "Condicionador Lumina Nutrição e Reparação Profunda (Cabelos Secos) 300ml (2 unidades)",
        preco: "59,90",
        fotos: [
            "https://i.pinimg.com/originals/76/65/6c/76656c1239ccb58f966f3834c0cfb2f6.jpg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 74
    },

    // --- CORPO E BANHO ---
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Ekos Andiroba Polpa para as mãos 75g",
        preco: "59,90",
        fotos: [
            "https://a-static.mlcdn.com.br/800x560/natura-ekos-andiroba-polpa-hidratante-para-maos-75g/mtcosmetic/122484/35bef6af7c27d1a1b5b779b5c9ea46f4.jpeg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 128
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Fotoequilíbrio Facial / Protetor solar 50g",
        preco: "109,90",
        fotos: [
            "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lng7w37ubxd58b"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 95
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Desodorante Luna 75ml (2 unidades)",
        preco: "29,90",
        fotos: [
            "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdq5ithcinjt89"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 156
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Desodorante Kaiak Feminino 75ml (2 unidades)",
        opcoes: ["Kaiak Feminino", "Kaiak Oceano"],
        preco: "29,90",
        fotos: [
            "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lov7ib4t1g9113", 
            "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwc2631fd7/produto-joia/background/mobile/189391.jpg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 84
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Desodorante Homem Masculino 75ml (7 unidades)",
        opcoes: ["Essence", "Elo", "Dom", "Nós", "Tato"],
        preco: "29,90",
        fotos: [
            "https://static.wixstatic.com/media/295529_6af1adcea0d14a5b9e5d72e8fae94a8a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg", 
            "https://tse1.mm.bing.net/th/id/OIP.fZD3oMmsPraQ4Ct18X8LJgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", 
            "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2nvfslgnwet00", 
            "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwb7f537c4/NATBRA-152271_2.jpg", 
            "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwfb6dfad2/NATBRA-150222_2.jpg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 312
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Desodorante Kaiak Pulso Masculino 75ml (2 unidades)",
        preco: "29,90",
        fotos: [
            "https://static.wixstatic.com/media/295529_a096a00c4f8847a48dc683255b3cf211~mv2.jpg/v1/fill/w_1200,h_1200,al_c,q_85,enc_avif,quality_auto/295529_a096a00c4f8847a48dc683255b3cf211~mv2.jpg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 110
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Desodorante em Creme Tododia Feminino 80g",
        opcoes: ["Cereja e Avelã", "Leite de Algodão"],
        preco: "30,90",
        fotos: [
            "https://down-br.img.susercontent.com/file/985549a7f85c885012ff9dddddc8c079", 
            "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw29efe9f4/produto-joia/background/mobile/229966.jpg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 245
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Desodorante Tododia Feminino 70ml",
        preco: "29,90",
        opcoes: ["Acerola e Hibisco", "Macadamia", "Amora e Flor de Pêssego", "Cereja e Avelã"],
        fotos: [
            "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfv6u8lmc9a8eb", 
            "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m71kxuf7mb0ned", 
            "https://i.ebayimg.com/images/g/KWcAAeSwSpdpG7HM/s-l960.jpg", 
            "https://images.tcdn.com.br/img/img_prod/1241437/natura_tododia_cereja_e_avela_314_5_c8c8e978a0296b4d15075a4998c88ca5.jpg"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 198
    },
    {
        marca: "Natura",
        categoria: "corpo",
        nome: "Caixa de Sabonetes em Barra Tododia",
        preco: "34,90",
        opcoes: ["Tâmara e Canela", "Flor de Gengibre e Tangerina", "Limão Siciliano e Gardênia"], 
        fotos: [
            "https://http2.mlstatic.com/D_Q_NP_875968-MLB92276210114_092025-F.webp",
            "https://http2.mlstatic.com/D_Q_NP_875968-MLB92276210114_092025-F.webp", // Repeti a foto se não tiver individual
            "https://http2.mlstatic.com/D_Q_NP_875968-MLB92276210114_092025-F.webp"
        ],
        status: "✔️ Pronta Entrega",
        avaliacoes: 450
    }
];

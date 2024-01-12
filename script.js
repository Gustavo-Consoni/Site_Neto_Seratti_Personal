document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        open: null,
        scrolled: false,
        planos: [
            {
                nome: 'TRIMESTRAL',
                preco: '135',
                vantagens: [
                    'Renovação de 2 planilhas',
                    'Suporte pelo WhatsApp / Aplicativo',
                    'Atendimento personalizado',
                ],
                cores: 'from-[#00EBFF] to-[#172439]',
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=51582&page=51582',
            },
            {
                nome: 'SEMESTRAL',
                preco: '121',
                vantagens: [
                    '10% de desconto',
                    'Renovação de 4 planilhas',
                    'Suporte pelo WhatsApp / Aplicativo',
                    'Atendimento personalizado',
                ],
                cores: 'from-[#00EBAA] to-[#172439]',
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=51590&page=51582',
            },
            {
                nome: 'ANUAL',
                preco: '108',
                vantagens: [
                    '20% de desconto',
                    'Renovação de 8 planilhas',
                    'Suporte pelo WhatsApp / Aplicativo',
                    'Atendimento personalizado',
                ],
                cores: 'from-[#C91A40] to-[#172439]',
                link: 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=51591&page=51582',
            },
        ],
        depoimentos_video: [
            {
                link: 'arquivos/videos/depoimento1.mp4#t=0.001',
            },
            {
                link: 'arquivos/videos/depoimento2.mp4#t=0.001',
            },
            {
                link: 'arquivos/videos/depoimento3.mp4#t=0.001',
            },
        ],
        perguntas_frequentes: [
            {
                pergunta: 'QUANDO O TREINO ESTARÁ PRONTO?',
                resposta: 'Após a compra e o preenchimento de todas as informações, e o envio das fotos, você receberá o seu treino em 4 dias úteis.',
            },
            {
                pergunta: 'COMO SERÁ O ACOMPANHAMENTO?',
                resposta: 'Estarei acompanhando o seu desenvolvimento nos treinos através de feedback e farei os ajustes necessários no treino na semana, para que você possa alcançar seus objetivos.',
            },
            {
                pergunta: 'POR ONDE POSSO TIRAR AS MINHAS DÚVIDAS?',
                resposta: 'O treino será enviado pelo aplicativo, onde você pode tirar suas dúvidas, e também pelo WhatsApp. Você terá todo o meu suporte individualizado, onde responderei às suas dúvidas e perguntas.',
            },
            {
                pergunta: 'TERÁ DIETA JUNTO COM A PLANILHA DE TREINO?',
                resposta: 'A planilha de treino não incluirá uma dieta.',
            },
            {
                pergunta: 'POR QUE DEVO CONFIAR NO SEU TRABALHO?',
                resposta: 'Estarei acompanhando você passo a passo nos seus treinos para que você alcance seu objetivo. Sou um profissional altamente competente e trabalho nesse mercado há anos, transformando a vida de centenas de pessoas. Tenho um propósito claro em minha vida, que é impulsionar o seu processo com excelência, de maneira que o seu treino seja flexível e eficaz!',
            },
        ],
        depoimentos_rodape: [
            {
                nome: 'Marceli de Moraes Faria',
                depoimento: 'Comecei a treinar, e não via resultado, mas depois das orientações e ensinamentos sobre a consciência muscular, os resultados vieram.',
                imagem_perfil: 'arquivos/imagens/depoimento1.webp',
            },
            {
                nome: 'Bruno Fernando Faria',
                depoimento: 'Excelente profissional, consegue conciliar os meus objetivos, com o meu tempo disponivel para treinar, montando treinos específicos!',
                imagem_perfil: 'arquivos/imagens/depoimento2.webp',
            },
        ],

        updateScroll() {
            this.scrolled = window.scrollY > 0
        },

    }))
})

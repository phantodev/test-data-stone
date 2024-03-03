export default defineEventHandler((event) => {
  return {
    products: [
      {
        id: 1,
        name: "Web Development",
        description:
          "Sistemas complexos de ERP ou CRM você pode contar com a nossa equipe para desenvolver os melhores projetos para sua empresa!",
        active: true,
      },
      {
        id: 2,
        name: "Mobile Development",
        description:
          "Desenvolva os melhores aplicativos conosco. Seja uma startup nova ou um sistema para evoluir a organização da sua empresa.",
        active: true,
      },
      {
        id: 3,
        name: "Stone Station",
        description:
          " Alcance os seus resultados de forma simples e ágil. Deixe a sua empresa a um clique da informação que precisa. Nosso software é intuitivo, moderno, objetivo e inteligente, especialmente desenvolvido para áreas como cobrança, marketing & vendas.",
        active: true,
      },
      {
        id: 4,
        name: "Stone Lab",
        description:
          "O Stone Lab é o laboratório da Data Stone para desenvolvimento de projetos especiais e sob medida apoiados por tecnologias de ponta. ",
        active: false,
      },
    ],
  };
});

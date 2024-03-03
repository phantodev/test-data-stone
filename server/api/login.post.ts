export default defineEventHandler(async (event) => {
  // Simulando apenas uma lentidão na chamada com essa Promise.
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const body = await readBody(event);
  if (body.email === "datastone@datastone.com.br" && body.password === "1234") {
    return {
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        message: "Login efetuado com sucesso!",
        user: {
          name: "Eduardo Burko",
          email: "datastore@datastore.com.br",
          avatar: "eduardoburko.jpg",
        },
      },
    };
  } else {
    setResponseStatus(event, 401);
    return {
      data: {
        message: "Credenciais inválidas!",
      },
    };
  }
});

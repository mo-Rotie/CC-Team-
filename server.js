const Hapi = require("@hapi/hapi");
const routes = require("./src/routes/routes");

const init = async () => {
  const PORT = process.env.PORT || 5000;
  const server = Hapi.server({
    port: PORT,
    host: "0.0.0.0",
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();

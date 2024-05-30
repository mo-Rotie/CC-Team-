const { getAllMold, getMoldById } = require("../handler/handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: getAllMold,
  },
  {
    method: "GET",
    path: "/{id}",
    handler: getMoldById,
  },
];

module.exports = routes;

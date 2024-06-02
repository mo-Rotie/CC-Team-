const { getAllMold, getMoldByNama } = require("../handler/handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: getAllMold,
  },
  {
    method: "GET",
    path: "/{Nama}",
    handler: getMoldByNama,
  },
];

module.exports = routes;

const connectDB = require("../connection/connection");

const getAllMold = async (request, h) => {
  let connection;
  try {
    connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM mold_table");
    return {
      status: "success",
      data: {
        mold_table: rows,
      },
    };
  } catch (err) {
    console.error(err);
    return h
      .response({
        status: "fail",
        message: "Database query failed",
      })
      .code(500);
  } finally {
    if (connection) connection.end();
  }
};

const getMoldByNama = async (request, h) => {
  let connection;
  try {
    connection = await connectDB();
    let { Nama } = request.params;

    if (!Nama) {
      const response = h.response({
        status: "fail",
        message: "jamur dengan nama tersebut tidak ditemukan",
      });
      return response.code(404);
    }

    Nama = Nama.toLowerCase();

    const [rows] = await connection.execute(
      "SELECT * FROM mold_table WHERE Nama = ?",
      [Nama]
    );

    if (rows.length === 0) {
      const response = h.response({
        status: "fail",
        message: "Maaf, jamur tidak tersedia",
      });
      return response.code(404);
    }

    return {
      status: "success",
      data: {
        mold_table: rows,
      },
    };
  } catch (err) {
    console.error(err);
    return h
      .response({
        status: "fail",
        message: "Database query failed",
      })
      .code(500);
  } finally {
    if (connection) connection.end();
  }
};

module.exports = { getAllMold, getMoldByNama };

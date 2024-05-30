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

const getMoldById = async (request, h) => {
  let connection;
  try {
    connection = await connectDB();
    const { id } = request.params;
    const [rows] = await connection.execute(
      "SELECT * FROM mold_table WHERE id = ?",
      [id]
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

module.exports = { getAllMold, getMoldById };

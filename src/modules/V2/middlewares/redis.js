const client = require("../../../config/redis");
const { response } = require("../../../helper/response");

const hitCacheProductsDetail = async (req, res, next) => {
  const products_id = req.params.products_id;
  const products = await client.get(`products/${products_id}`);
  if (products) {
    return response(res, JSON.parse(products), 200, "get data dari redis");
  }
  next();
};
// const clearCacheProductDetial = (req, res, next) => {
//   const products_id = req.params.products_id;
//   client.del(`products/${products_id}`);
//   next();
// };

module.exports = {
  hitCacheProductsDetail,
  //   clearCacheProductDetial,
};

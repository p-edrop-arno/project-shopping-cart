require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const fetchProducts = async (product) => {
    const link = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  
    try {
      const products = await fetch(link);
      const response = await products.json();
      return response;
    } catch (error) {
      return error;
    }
  };
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchProducts,
    };
  }
  
});

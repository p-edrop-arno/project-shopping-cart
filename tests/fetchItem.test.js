require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  const fetchItem = async (itemID) => {
    const definedUrl = `https://api.mercadolibre.com/items/${itemID}`;
  
    try {
      const items = await fetch(definedUrl);
      const response = await items.json();
      return response;
    } catch (error) {
      return error;
    }
  };
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }
  
});

const fetchItem = async (item) => {
  try {
    const promise = await fetch(`https://api.mercadolibre.com/items/${item}`);
    const response = await promise.json();
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


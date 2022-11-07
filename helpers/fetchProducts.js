const fetchProducts = async (query) => {
  try {
    const promise = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const result = await promise.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

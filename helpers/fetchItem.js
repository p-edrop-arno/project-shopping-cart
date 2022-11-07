const fetchItem = async (id) => {
  try {
    const promise = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = promise.json();
    return result;
  } catch (error) {
    return error;
  };

  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }
}

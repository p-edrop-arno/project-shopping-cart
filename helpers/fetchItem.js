const fetchItem = async (id) => {
  if (id === undefined) {
    const error = new Error('You must provide an url');
    return error;
  }
  const promise = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const result = promise.json();
  return result;

  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }
}

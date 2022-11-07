require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testando se fechtProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Se ao executar a função com o argumento "computador", fetch é chamado', async() => {
    await fetchItem('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Se ao chamar a função fetchItem com o argumento "computador", o endpoint utilizado é "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async() => {
    await fetchItem('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('O retorno da função com o argumento "computador" é uma estrutura de dados como o objeto item', async() => {
    expect(await fetchItem ('computador')).toEqual(computadorSearch);
  });
  it('Se ao chamar a função sem argumento, retornar uma mensagem de erro: "You must provide an url"', async() => {
    expect(await fetchItem()).toEqual(new Error("You must provide an url"));
  });

});

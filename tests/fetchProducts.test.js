require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testando se fechtProducts é uma função', () => {
    expect(typeof fetchProducts).toBe("function");
  });
  it('Se ao executar a função com o argumento "computador", fetch é chamado', async() => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled(1);
  });
  it('Se ao chamar a função fetchProducts com o argumento "computador", o endpoint utilizado é "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async() => {
    await fetchProducts('computador');
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('O retorno da função com o argumento "computador" é uma estrutura de dados como o objeto computadorSearch', async() => {
    expect(await fetchProducts ("computador")).toEqual(computadorSearch);
  });
  it('Se ao chamar a função sem argumento, retornar uma mensagem de erro: "You must provide an url"', async() => {
    const fail = await fetchProducts()
    expect(fail).toEqual(new Error("You must provide an url"));
  });

});

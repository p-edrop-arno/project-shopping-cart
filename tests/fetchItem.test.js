require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testando se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe("function");
  });
  it('Se ao executar a função com o argumento "MLB1615760527", fetch é chamada', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled(1);
  });
  it('Se ao chamar a função fetchItem com o argumento "MLB1615760527", o endpoint utilizado é "https://api.mercadolibre.com/items/MLB1615760527"', async() => {
    await fetchItem('MLB1615760527');
    const url = "https://api.mercadolibre.com/items/MLB1615760527"
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('O retorno da função com o argumento "MLB1615760527" é uma estrutura de dados como o objeto item', async() => {
    expect(await fetchItem ("MLB1615760527")).toEqual(item);
  });
  it('Se ao chamar a função sem argumento, retornar uma mensagem de erro: "You must provide an url"', async() => {
    const fail =  await fetchItem();
    expect(fail).toBe(new Error('You must provide an url'));
  });

});

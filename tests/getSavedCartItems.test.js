const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const item = require('../mocks/item');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Se ao executar o getSavedCartItems, o localStorage.setItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(); 
  });
  it('Se ao executar getSavedCartItems, o localStorage.setItem é chamado com o "cartItems" como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  
});

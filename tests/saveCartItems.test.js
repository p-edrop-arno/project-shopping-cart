const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const item = require('../mocks/item');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Se ao executar saveCartItems com o argumento cartItem, o localStorage.setItem é chamado', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Se ao executar saveCartItems com o argumento cartItem, o localStorage.setItem possui 2 parâmetros, "cartItems" e o valor passado como argumento', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem');
  });

});

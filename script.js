// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
* Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
  };

  const totalPrice = document.querySelector('.total-price');

  const finalPrice = () => {
    const cartProducts = document.querySelectorAll('.cart__item');
    let sum = 0;
    cartProducts.forEach((product) => { 
      sum += product.price; 
    });
    totalPrice.innerText = sum;
  };

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 const secItems = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

const cartItemClickListener = (event) => {
  cartItems.removeChild(event.target);
  finalPrice();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.price = price;
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const cartProductInfo = async (id) => {
  const element = await fetchItem(id);
  cartItems.appendChild(createCartItemElement(element));
  finalPrice();
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const cartButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  cartButton.addEventListener('click', () => cartProductInfo(id));
  section.appendChild(cartButton);
  return section;
};

const clearCart = document.querySelector('.empty-cart');
clearCart.addEventListener('click', () => {
  cartItems.innerHTML = '';
  finalPrice();
});

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

 const addMessage = () => {
  const message = document.createElement('div');
  message.className = 'loading';
  message.innerText = 'carregando...';
  secItems.appendChild(message);
};

const deleteMessage = () => {
  const message = document.querySelector('.loading');
  secItems.removeChild(message);
};

const creatingList = async () => { 
  const products = await fetchProducts();
  products.results.forEach((product) => {
    secItems.appendChild(createProductItemElement(product));
 });
 deleteMessage();
};

addMessage();

window.onload = async () => {
  await creatingList();
  finalPrice();
};
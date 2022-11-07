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
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'clientItem';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};
/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
 const getIdFromProductItem = (product) => product.querySelector('.item_id').innerText;
 const holder = []; // Array para armazenar produtos do carrinho
 
 const list = (product) => {
   holder.push(product);
   savedCart(JSON.stringify(holder));
 };
 /**
  * Função responsável por criar e retornar um clientItem do carrinho.
  * @param {Object} product - Objeto do produto.
  * @param {string} product.id - ID do produto.
  * @param {string} product.title - Título do produto.
  * @param {string} product.price - Preço do produto.
  * @returns {Element} Elemento de um clientItem do carrinho.
  */
 const createCartItemElement = ({ id, title, price }) => {
   const li = document.createElement('li');
   li.className = 'cart__item';
   li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
   li.addEventListener('click', () => {
    li.remove();
  });
  return li;
};
const productRender = async () => {
  const prdcts = await fetchProducts('computador');
  const clientprodutc = document.querySelector('.items');
  prdcts.results.forEach((clientItem) => {
    clientprodutc.appendChild(createProductItemElement(clientItem));
  });
};

const cartRender = async (id) => {
  const clientItem = await fetchItem(id);
  list(clientItem);
  const clientCart = createCartItemElement(clientItem);
  document.querySelector('.cart__items').appendChild(clientCart);
};

const addToCart = () => {
  const addButton = document.querySelectorAll('.item__add');
  addButton.forEach((bttn) => bttn.addEventListener('click', async () => {
    const pageProduct = bttn.parentNode;
    cartRender(getIdFromProductItem(pageProduct));
  }));
};

const clientCart = (object) => {
  const clientProduct = document.querySelector('.cart__items');
  clientProduct.appendChild(createCartItemElement(object));
};

const emptyCart = () => {
  const clear = document.querySelector('.empty-cart');
  clear.addEventListener('click', () => {
    const cartStorage = document.querySelectorAll('.cart__item');
    cartStorage.forEach((clientItem) => {
      clientItem.remove();
    });
  });
};

window.onload = async () => {
  //  console.log(await fetchProducts('computador'));   
  await productRender();
  addToCart();
  emptyCart();

  if (localholder.length > 0) {
    const clientList = JSON.parse(getSavedcartStorage());
    clientList.forEach((unit) => {
      clientCart(unit);
    });
  }
};
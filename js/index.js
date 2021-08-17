// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  // DOMsubtotal.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  // return product * quantity;
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  // products.forEach((product) => {
  //   updateSubtotal(product);
  // });
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }
  
  let total = 0;
  products.forEach((product) => {
    let subtotal = Number(product.childNodes[7].childNodes[1].innerHTML);
    total += subtotal;
  })

  let totalH2 = document.getElementById('total-value');
  totalH2.innerHTML = `$${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

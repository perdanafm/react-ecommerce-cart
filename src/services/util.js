export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'IDR':
      return x.toFixed(0).replace(' ', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI = 'https://sisfo-24e52.firebaseio.com/products.json';
// export const productsAPI = "http://localhost:8001/api/products";

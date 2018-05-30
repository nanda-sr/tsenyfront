
const bbyUrl = `https://api.bestbuy.com/v1/products?format=json&pageSize=100&show=sku,name,largeImage,salePrice,shortDescription,type,categoryPath&apiKey=XkRaNXqTkmAdMAQlJx81XHAT`
// const catUrl= 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=XkRaNXqTkmAdMAQlJx81XHAT&pageSize=100&page=3&format=json'
const catUrl = 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0401000))?apiKey=XkRaNXqTkmAdMAQlJx81XHAT&pageSize=50&page=3&format=json'

export function getProducts(){
  return fetch(bbyUrl)
  .then(r=>r.json())
  .then(products=>products)
}

export function getProduct(sku){
  return fetch(bbyUrl + sku)
  .then(r=>r.json())
  .then(product=>product)
}

export function changePage(currentPage){
  return fetch(`https://api.bestbuy.com/v1/products?format=json&pageSize=100&page=${currentPage}&show=sku,name,largeImage,salePrice,shortDescription,type,categoryPath&apiKey=XkRaNXqTkmAdMAQlJx81XHAT`)
  .then(currentPage => {
    currentPage++;
  })
  .then(e=>console.log(e))
}

// export function getCategory(){
//   return fetch(catUrl)
//   .then(r=>r.json())
//   .then(electronics=>electronics)
// }

export function getCategory(id){
  return fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=${id}))?apiKey=XkRaNXqTkmAdMAQlJx81XHAT&pageSize=100&page=1&format=json`)
  .then(r=>r.json())
  .then(electronics=>electronics)
}

// `https://api.bestbuy.com/v1/products?format=json&pageSize=100&page=${currentPage}&show=sku,name,largeImage,salePrice,shortDescription,type,categoryPath&apiKey=XkRaNXqTkmAdMAQlJx81XHAT`
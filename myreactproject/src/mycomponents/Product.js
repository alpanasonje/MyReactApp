function Product()
{
    const products=[{id:1,name:"Laptop", price:34000}, {id:2, name:"Phone", price:23000}, {id:3,name:"Modem",price:8000}];
    const productList= products.map((product)=>(<h3 key={product.id}>{product.name} : {product.price}</h3>))
    return <div>
        {
          productList
        }
    </div>
}

export default Product;
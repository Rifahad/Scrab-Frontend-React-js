import { useEffect, useState } from 'react';
import ProductCard from '../../Components/Admin/ProductCard';
import axios from 'axios';


function ProductList() {
  const [product,setProduct] = useState([])

async function listProduct(){
  console.log('here');
  const response =  await axios.get('http://localhost:7000/Products')
  setProduct(response.data.adminCard)
}
useEffect(()=>{
  listProduct()
},[])
console.log(product,'data');

  return <ProductCard  data={product} />
}

export default ProductList

import { useEffect, useState } from 'react';
import ProductCard from '../../Components/Admin/ProductCard';
import axios from 'axios';
import axiosInstance from '../../instance/AxiosInstance';
import { useNavigate } from "react-router-dom";



function ProductList() {
  const navigate = useNavigate()
  const [product,setProduct] = useState([])

  async function listProduct() {
    const response = await axiosInstance.get('/adminProduct');
    setProduct(response.data.adminCard);
  }
useEffect(()=>{
  listProduct()
},[])


// product delete function 
const productdelete=(id)=>{
  try {
    console.log('  delete here',id);
    const response = axios.post(`http://localhost:7000/productdelete?id=${id}`)
    setProduct(product.filter(user => user._id !== id));

    console.log(response.status);
   
  } catch (error) {
    console.log(error,'error in product delete');
  }
} 

// product edit function 

const productedit = async(id)=>{
  try {
    navigate('/editProduct')
    console.log('id');

    const response = await  axios.get(`http://localhost:7000/editproduct?id=${id}`)
    console.log( 'new data',response.data.newdata);

    
  } catch (error) {
    console.log(error,'error in product edit ');
  }


}



return (
  <>
    <div className='flex flex-wrap gap-3'>
    
    {product.map(val => (
      <ProductCard key={val._id} data={val}     cardedit={productedit}  carddelete={productdelete} />
    ))}
    </div>
  </>
)

}

export default ProductList

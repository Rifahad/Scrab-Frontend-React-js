import { useEffect, useState } from 'react';
import ProductCard from '../../Components/Admin/ProductCard';
import axios from 'axios';
import axiosInstance from '../../instance/AxiosInstance';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';



function ProductList() {
const [newdata,setNewdata] =useState()

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
const productdelete = (id) => {
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
      if (result.isConfirmed) {
          try {
              console.log('delete here', id);
              const response = await axios.post(`http://localhost:7000/productdelete?id=${id}`);
              if (response.status === 200) {
                  setProduct(product.filter(user => user._id !== id));
                  Swal.fire(
                      'Deleted!',
                      'Your product has been deleted.',
                      'success'
                  );
              } else {
                  Swal.fire(
                      'Error!',
                      'There was an error deleting your product.',
                      'error'
                  );
              }
              console.log(response.status);
          } catch (error) {
              console.log(error, 'error in product delete');
              Swal.fire(
                  'Error!',
                  'There was an error deleting your product.',
                  'error'
              );
          }
      }
  });
};

// product edit function 

const productedit = async(id)=>{
  try {
    navigate('/editProduct')
    console.log('id');

    const response = await  axios.get(`http://localhost:7000/editproduct?id=${id}`)
    console.log( 'new data',response.data.newdata);
    setNewdata(response.data.newdata)

    
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

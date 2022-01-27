import React, { useEffect } from 'react';
import ProductComponents from './ProductComponents';
import { useDispatch } from "react-redux";
import { setProduct, fetchProducts } from "../redux/actions/productActions"

const ProductListing = () => {
    const dispatch = useDispatch()
    //   const fetchProducts = async () => {
//       try {
//           const res = await axios.get('https://fakestoreapi.com/products')
//         //   console.log(res.data)
//           dispatch(setProduct(res.data))
//       } catch (error) {
//           console.log(error);
//       }
//   }

    useEffect(() => {
        // fetchProducts();
        dispatch(fetchProducts())
    }, [])

  return <div className="ui grid container">
       <ProductComponents />
  </div>;
};

export default ProductListing;

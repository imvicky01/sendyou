import { Fragment, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from "../action/productsAction";
import MetaData from "./layout/MetaData";
import Loader from "./layout/Loader";
import Product from "./product/Product";
import { toast} from 'react-toastify';


export default function Home() {
  
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector((state) => state.productsState)

    useEffect(()=>{
        if(error){
         return toast.error ( error,{
          position : toast.POSITION.BOTTOM_CENTER
        })
      }
        dispatch(getProducts)

    }, [error])
  
  return (
    <Fragment>
      {loading ? <Loader/>:
          <Fragment>
        <MetaData title={'Buy Best Product'}/>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products && products.map(product => (
            <Product product={product}
            />
           ))}


        </div>
      </section>
          </Fragment>
      }
    </Fragment>
  )
}

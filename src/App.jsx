import './App.css'

// import Header from './concepts/18. Debouncing/HeaderWithoutDebounce';
import Header from './concepts/18. Debouncing/HeaderWithDebounce';

import ProductsAxios from "./concepts/13. FetchVsAxios/ProductsAxios";

export default function App() {

  return (
    <>   
      <Header />
      <ProductsAxios />
    </>
  );

}
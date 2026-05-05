import './App.css'

import { useEffect, useState } from 'react';
import Header from './concepts/17. LiftingStateUp/Header';
import Products from './concepts/17. LiftingStateUp/Products';

// import Header from './concepts/17. LiftingStateUp/WrongImplementation/Header';
// import Products from './concepts/17. LiftingStateUp/WrongImplementation/Products';

// export default function App() {

//   return (
//     <>
//       <Header />
//       <Products />
//     </>
//   );

// }

export default function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();

      const filtered = data.products.filter(product => 
        product.title.toLowerCase().includes(search.toLowerCase())
      );

      setProducts(filtered);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <>   
      <Header search={search} setSearch={setSearch} />
      <Products products={products} />
    </>
  );
}
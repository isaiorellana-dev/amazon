import { useEffect, useState, useMemo } from "react";
const axios = require('axios').default;


const useGetProducts = () => {


  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [search, setSearch] = useState('');
  const [filterCategories, setFilterCategories] = useState({
    "electronics": true,
    "jewelery": true,

  }
  )



  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {
        setCategories(res.data)
        console.log(res.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredProducts = useMemo(() =>
    products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }),
    [products, search]
  )


  const handleCategoriesFilter = (event) => {
    console.log(event.target)
  }
  const filteredCategories = useMemo(() =>
    products.filter((product) => {
      return product.category.includes(filterCategories);
    }),
    [products, search]
  )









  return {
    products,
    handleSearch,
    handleCategoriesFilter,
    search,
    filteredProducts,
    filteredCategories,
    categories
  };
}

export default useGetProducts;
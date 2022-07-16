import { useEffect, useState, useMemo } from "react"
const axios = require("axios").default

const useGetProducts = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [categoryFilter, setCategoryFilter] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data)
    })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase())
      }),
    [products, search]
  )



  const handleFilter = (c) => {
    if (categoryFilter.some((e) => e === c)) {
      setCategoryFilter(categoryFilter.filter((items) => items !== c))
    } else {
      setCategoryFilter([...categoryFilter, c])
    }
  }

  const filteredCategories = useMemo(
    () => products.filter(
      (product) => categoryFilter.some(e => e === product.category)
    ), [products, categoryFilter]
  )

  return {
    products,
    handleSearch,
    handleFilter,
    search,
    filteredProducts,
    filteredCategories,
    setCategoryFilter,
    categoryFilter,
    categories,
  }
}

export default useGetProducts

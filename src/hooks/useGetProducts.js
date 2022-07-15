import { useEffect, useState, useMemo } from "react"
const axios = require("axios").default

const useGetProducts = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

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

  const [categoryFilter, setCategoryFilter] = useState([])

  const handleFilter = (c) => {
    if (categoryFilter.some((e) => e === c)) {
      setCategoryFilter(categoryFilter.filter((items) => items !== c))
    } else {
      setCategoryFilter([...categoryFilter, c])
    }
  }

  const filteredCategories = products.filter(
    (product) => categoryFilter.some(e => e === product.category)

  )

  return {
    products,
    handleSearch,
    handleFilter,
    search,
    filteredProducts,
    filteredCategories,
    categories,
  }
}

export default useGetProducts

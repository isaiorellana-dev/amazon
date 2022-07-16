import { useEffect, useState, useMemo } from "react"
const axios = require("axios").default

const useGetProducts = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [categoryFilter, setCategoryFilter] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    async function getCategories() {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      )
      const data = await res.data
      setCategories(data)
    }
    getCategories()
  }, [])

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(`https://fakestoreapi.com/products`)
      const data = await res.data
      setProducts(data)
    }
    getProducts()
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
    () =>
      products.filter((product) =>
        categoryFilter.some((e) => e === product.category)
      ),
    [products, categoryFilter]
  )
  const [searchState, setSearchState] = useState([])

  const handleSearchState = () => {
    setSearchState(filteredProducts)
  }

  return {
    products,
    handleSearch,
    handleFilter,
    search,
    filteredProducts,
    filteredCategories,
    searchState,
    handleSearchState,
    setCategoryFilter,
    categoryFilter,
    categories,
  }
}

export default useGetProducts

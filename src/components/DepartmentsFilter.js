import { useEffect, useState } from 'react';
const axios = require('axios').default;
import "@styles/components/DepartmentsFilter.scss"


const DepartmentsFilter = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {
        setCategories(res.data)
      })
  }, [])


  console.log(categories)



  return (
    <aside className='departments-filter'>
      <p>Departament</p>
      <div className='departments-filter__departments-container'>
        {categories.map(c => (
          <label key={c} >
            <input type="checkbox" ></input>
            <span>{c}</span>
          </label>
        ))}
      </div>

    </aside>
  );
}

export default DepartmentsFilter;
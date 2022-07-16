import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import "@styles/components/DepartmentsFilter.scss"


const DepartmentsFilter = () => {

  const { categories, handleFilter, setCategoryFilter } = useContext(AppContext)

  useEffect(() => {
    setCategoryFilter([])
  }, [categories])

  return (
    <aside className='departments-filter'>
      <p>Departament</p>
      <div className='departments-filter__departments-container'>
        {categories.map(c => (
          <label key={c} >
            <input type="checkbox" onChange={() => handleFilter(c)} ></input>
            <span>{c}</span>
          </label>
        ))}
      </div>
      <p>Deal Type</p>
      <div className='departments-filter__deal-type-container'>
        <span>Oferta del Día</span>
        <span>Ofertas Relámpago</span>
        <span>Ofertas Destacadas</span>
        <span>Ofertas con acceso prioritario</span>
        <span>Prime</span>
      </div>
      <p>Availability</p>
      <div className='departments-filter__availability-container'>
        <label  >
          <input type="checkbox" defaultChecked ></input>
          <span>Disponibles</span>
        </label>
        <label  >
          <input type="checkbox" defaultChecked ></input>
          <span>Proximas</span>
        </label>
        <label  >
          <input type="checkbox" defaultChecked ></input>
          <span>Finalizadas</span>
        </label>

      </div>
    </aside>
  );
}

export default DepartmentsFilter;
import React from 'react'

const Sorting = ({setSort}) => {
  return (
<div className='bg-gray-100 my-5 p-5 flex item-center justify-end' >
    <select onChange={e => setSort(e.target.value) } className='bg-white py-3 px-3 ' >


    <option disabled value=''>Varsayılan Sıralama</option> 
    <option value='inc'>En Yüksek Fiyat</option>
    <option value='dec'>En Düşük Fiyat</option>

    </select>
</div>
  )
}

export default Sorting

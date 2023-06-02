import React from 'react'

const Sorting = () => {
  return (
<div className='bg-gray-100 my-5 p-5 flex item-center justify-end' >
    <select className='bg-white py-3 px-3 ' >

    <option disabled value=''>Varsayılan Sıralama</option> //disabled özelliği tıklanamaz yapar
    <option value='inc'>En Yüksek Fiyat</option>
    <option value='dec'>En Düşük Fiyat</option>

    </select>
</div>
  )
}

export default Sorting

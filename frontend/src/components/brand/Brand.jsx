import React from 'react'

const Brand = () => {
  return (
    <>
      {/* Section Title */}
      <div className='my-5 p-8'>
        <h4 className='px-[50px] text-[38px] font-[650] text-gray-700 uppercase tracking-widest'>Favourite Brands</h4>
      </div>

      {/* Brands Display Section */}
      <div className='py-7 h-[220px] flex items-center justify-center'>
        <div className='flex'> 
          {
            // Mapping over the Favourite_Brands array to display each brand's image
            Favourite_Brands.map(({ id, image }) => {
              return (
                <div className='cursor-pointer' key={id}>
                  <img src={image} alt="Brand" className='w-[210px]' />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Brand;

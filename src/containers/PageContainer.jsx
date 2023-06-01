import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='w-10/12 m-auto'>
      {children}  
    </div>

//bu sayfada aslında en geniş kapsamlı containeri oluşturmuş oluyoruz sağdan soldan boşluklar bırakar görünecek kısmı ortalamış oluruz. app.js de <PageContainer></PageContainer> ile çevreleldiğimiz için buraua gelen children parametresi direk ana sayfa olur.
  )
}

export default PageContainer

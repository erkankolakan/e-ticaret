import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetail } from '../redux/productSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading';

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    //useDispatch, Redux store'a eylem göndermek için kullanılan bir işlevi döndürür.
    //dispatch işlevine bir eylem nesnesi geçtiğinizde, Redux store'da kayıtlı olan reducer'lar bu eylemi işleyecek ve durumu güncelleyecektir.
    //useSelector, Redux store'dan belirli parçaları seçmek ve bu verilere erişmek için kullanılan bir işlevdir.
    const {productDetail,productDetailStatus} = useSelector(state => state.products)

    useEffect(() => {
      dispatch(getDetail(id))
    },[dispatch,id])
    



    
  return (
    <div>
      {
        productDetailStatus === "LOADING" ? <Loading/> : <DetailComp productDetail={productDetail}/>
      }
      
    </div>
  )
 

}

export default Detail

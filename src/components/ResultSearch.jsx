import React, { useEffect } from 'react'
import './ResultSearch.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSearch } from '../../redux-toolkit/reducers/productSlice'
import { Spin } from 'antd'
export default function ResultSearch() {
    const products = useSelector((state) => {
        return state.products;
    })
    const loading = useSelector((state) => {
        return state.loading;
    })
   
    
    return (
        <>
            {loading ?
                <Spin></Spin>
                :
                <ul className="list-unstyled result-search">
                    {/* {products.map((item) => {
                        return <>
                            <li className="d-flex">
                                <div className="flex-shrink-0">
                                    <img src={item.image} alt="" width="300" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="mt-0">{item.productName}</h5>
                                    <span>{item.unitPrice}</span>
                                </div>
                            </li>
                        </>
                    })} */}


                </ul>

            }

        </>
    )
}

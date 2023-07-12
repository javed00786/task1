import { useQuery } from "react-query";
import { getProductList } from "../../api/homeApi";
import React, { useState, useEffect } from 'react';
import { ClipPath } from "react-native-svg";

interface TListLength {
    total: number,
    items: number,
}

type TSearchFilter = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: { count: number, rate: number }
    title: string
}

export const useGetProductList = () => {
    const [searchFilter, setSearchFilter] = useState<[TSearchFilter]>()
    const [listLength, setListLength] = useState<TListLength>()
    const [allData, setAllData] = useState()
    const [showLoadMore, setShowLoadMore] = useState(false)

    useEffect(() => {
        getProductList().then((res) => {
            let temp: any = [...res?.slice(0, 10)]
            setSearchFilter(temp)
            setListLength({ total: res?.length, items: 10 })
            //for all data filter
            setAllData(res)
            res.length > 10 && setShowLoadMore(true)
        }).catch((err) => {
            console.log('err', err)
        })
    }, [])

    const onChangeSearch = (value: string) => {
        let temp = allData?.filter((el: any) => {
            return el?.title?.toLowerCase()?.includes(value.toLowerCase()) ||
                el?.category?.toLowerCase()?.includes(value.toLowerCase()) ||
                Math.round(el?.price) >= value ||
                el?.rating?.rate >= value
        })
        // console.log('temp', temp)
        //find total lenth og item which help in load more functionality not more than 10
        let temp2 = [...temp.slice(0, 10)]
        setSearchFilter(temp2)
        setShowLoadMore(() => temp.length > 10 ? true : false)
    }

    const handleLoadMoreDataBtn = () => {
        let lengthOfData = listLength?.items + 10
        let temp = allData.slice(0, lengthOfData)
        setSearchFilter(temp,)
        setListLength((prev) => {
            return { ...prev, items: lengthOfData }
        })
        setShowLoadMore(() => temp.length < listLength?.total ? true : false)
    }



    return { searchFilter, listLength, onChangeSearch, showLoadMore, handleLoadMoreDataBtn }
};
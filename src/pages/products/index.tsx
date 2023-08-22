import React from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '@/api-routes/products'
import Products from '@/components/products'
import { Product } from '@/types/products'
import { queryKeys } from '@/lib/queryKeys'

export default function ProductsPage() {

    const { isLoading , data, error, isSuccess, isFetched, status } = useQuery(queryKeys[0], getProducts)
  
  return (
    <>
        <Products data={data} />
    </>
  )
}

import { Data } from '@/types/data'
import { Product } from '@/types/products'
import React from 'react'

export default function Products({ data }: Data<Product[]>): React.JSX.Element {

    console.log(data)

  return (
    <div></div>
  )
}

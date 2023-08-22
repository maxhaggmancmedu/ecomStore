import { supabase } from "@/lib/supabaseClient"
import { Data } from "@/types/data"
import { Product } from "@/types/products"

export const getProducts = async (): Promise<Data<Product[]>> => {

    const { data, error } = await supabase
      .from('products')
      .select('*')

    return { data, error, status }
}
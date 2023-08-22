import { PostgrestError } from "@supabase/supabase-js";

export interface Data<T> {
    data: T | undefined | null,
    error: PostgrestError | null,
    status: string
}
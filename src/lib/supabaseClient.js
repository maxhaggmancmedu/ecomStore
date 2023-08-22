import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xvgnytiwacwqgoceyxxe.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2Z255dGl3YWN3cWdvY2V5eHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2OTc3MDksImV4cCI6MjAwODI3MzcwOX0.8S6PBI-SZlOkvOqTNT3pVRjSjnvdaXlVQW5KtPGmYNQ"
export const supabase = createClient(supabaseUrl, supabaseKey)

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://atmlfkuffeqbjmjhfxgw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0bWxma3VmZmVxYmptamhmeGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NTY2MTEsImV4cCI6MjAyMTEzMjYxMX0.ZAATK_1u9kxBLWCQzFfskCUHigjg_F5Bf8NI4OS5OGQ'
)
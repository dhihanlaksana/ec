import {serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.0";

const supabase = createClient (supUrl, supKey);

serve(async(req) => {
    const { } = await req.json()
})

import { createClient } from "@supabase/supabase-js";

// Falls back to a placeholder so a missing env var only breaks the sketch
// playground at runtime instead of crashing the entire site's build/prerender.
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"
);

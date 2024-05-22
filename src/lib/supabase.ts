import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

export const supabase = createClient<Database>(
  process.env.SUPABASE_PROJECT_URL as string,
  process.env.SUPABASE_API_KEY as string
);

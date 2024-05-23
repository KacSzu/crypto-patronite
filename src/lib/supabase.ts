import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";
export const createFetch =
  (options: Pick<RequestInit, "next" | "cache">) =>
  (url: RequestInfo | URL, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      ...options,
    });
  };

export const supabase = createClient<Database>(
  process.env.SUPABASE_PROJECT_URL as string,
  process.env.SUPABASE_API_KEY as string,
  {
    global: {
      fetch: createFetch({
        cache: "no-store",
      }),
    },
  }
);

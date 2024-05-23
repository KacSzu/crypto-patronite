import { supabase } from "@/lib/supabase";

export const getArtists = async () => {
  try {
    const { data, error } = await supabase
      .from("artists")
      .select(
        "full_name,description,id,total_earned,image_url,wallet,artist_type"
      );
    if (error) {
      throw new Error(error.message);
    }
    return { data, error: null };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: e.message };
  }
};

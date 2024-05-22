import PayButton from "@/components/buttons/pay-button";
import { supabase } from "@/lib/supabase";
interface IArtistPage {
  params: {
    id: string;
  };
}

async function ArtistPage({ params }: IArtistPage) {
  const data = await supabase.from("artists").select("*").eq("id", params.id);
  const artist = data?.data?.[0];
  if (!artist) return null;
  return (
    <div>
      {artist.name}
      <PayButton />
    </div>
  );
}

export default ArtistPage;

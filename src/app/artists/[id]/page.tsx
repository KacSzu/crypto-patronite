import PayButton from "@/components/buttons/pay-button";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
interface IArtistPage {
  params: {
    id: string;
  };
}

async function ArtistPage({ params }: IArtistPage) {
  const data = await supabase.from("artists").select("*").eq("id", params.id);
  const artist = data?.data?.[0];
  if (!artist) return <p>Artist not found.</p>;
  const {
    id,
    full_name,
    description,
    wallet,
    image_url,
    artist_type,
    total_earned,
  } = artist;
  return (
    <section className="min-h-screen max-w-5xl lg:max-w-6xl mx-auto px-4  py-4">
      <div className="grid grid-cols-12 space-y-5">
        <div className="flex justify-center col-span-12 lg:col-span-6">
          <Image
            src={image_url}
            alt="artist image"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="text-center space-y-6 col-span-12 lg:col-span-6 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="space-y-3">
            <h2 className="text-4xl font-thin tracking-tight">{full_name}</h2>
            <p className="uppercase  text-sm font-semibold tracking-tight">
              {artist_type.replace(/_/g, " ")}
            </p>
            <p className="text-base italic text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="space-y-2">
            <PayButton toWallet={wallet} />
            <div className="uppercase text-xs tracking-tight text-red-700    font-semibold space-y-1">
              <p>Base transaction value is 0.0001 ether</p>
              <p>
                Make sure you have at least 0.0001 ether, otherwise transation
                will be failed
              </p>
              <p>
                Please do not complete the transactions. The artists are
                creations of AI and the connected wallets are mine!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistPage;

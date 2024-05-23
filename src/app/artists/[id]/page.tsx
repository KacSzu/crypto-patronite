import PayButton from "@/components/buttons/pay-button";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { Artist } from "../../../../types/supabase";

interface IArtistPage {
  params: {
    id: string;
  };
}

interface IArtistDetails {
  full_name: string;
  artist_type: string;
  description: string;
  wallet: string;
}

const ArtistImage = ({ image_url }: { image_url: string }) => (
  <div className="flex justify-center col-span-12 lg:col-span-6">
    <Image
      src={image_url as string}
      alt="artist image"
      width={400}
      height={400}
      className="rounded-2xl shadow-xl"
    />
  </div>
);

const ArtistDetails = ({
  full_name,
  artist_type,
  description,
  wallet,
}: IArtistDetails) => (
  <div className="text-center space-y-6 col-span-12 lg:col-span-6 lg:flex lg:flex-col lg:items-center lg:justify-center">
    <div className="space-y-3">
      <h2 className="text-4xl font-thin tracking-tight">{full_name}</h2>
      <p className="uppercase text-sm font-semibold tracking-tight">
        {artist_type.replace(/_/g, " ")}
      </p>
      <p className="text-base italic text-muted-foreground">{description}</p>
    </div>
    <div className="space-y-2">
      <PayButton toWallet={wallet} />
      <div className="uppercase text-xs tracking-tight text-red-700 font-semibold space-y-1">
        <p>Base transaction value is 0.0001 ether</p>
        <p>
          Make sure you have at least 0.0001 ether, otherwise transaction will
          fail
        </p>
        <p>
          Please do not complete the transactions. The artists are creations of
          AI and the connected wallets are mine!
        </p>
      </div>
    </div>
  </div>
);

async function ArtistPage({ params }: IArtistPage) {
  const { data } = await supabase
    .from("artists")
    .select("*")
    .eq("id", params.id);
  const artist = data?.[0] as Artist | undefined;

  if (!artist) return <p>Artist not found.</p>;

  const { image_url, full_name, artist_type, description, wallet } = artist;

  return (
    <section className="min-h-screen max-w-5xl lg:max-w-6xl mx-auto px-4 py-4">
      <div className="grid grid-cols-12 space-y-5">
        <ArtistImage image_url={image_url} />
        <ArtistDetails
          full_name={full_name}
          artist_type={artist_type}
          description={description}
          wallet={wallet}
        />
      </div>
    </section>
  );
}

export default ArtistPage;

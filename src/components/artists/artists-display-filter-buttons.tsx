"use client";

interface IArtistsDisplayFilterButtons {
  filter: string;
  setFilter: (filter: string) => void;
}

const ArtistsDisplayFilterButtons = ({
  filter,
  setFilter,
}: IArtistsDisplayFilterButtons) => (
  <div className="text-center py-10">
    {["*", "painter", "photographer", "sculpturer", "digital_artist"].map(
      (cat) => (
        <button
          key={cat}
          className={`mx-2 text-base font-light uppercase ${
            filter === cat ? "text-foreground" : "opacity-50"
          }`}
          onClick={() => setFilter(cat)}
        >
          {cat === "*" ? "All" : cat}
        </button>
      )
    )}
  </div>
);

export default ArtistsDisplayFilterButtons;

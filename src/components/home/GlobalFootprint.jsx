// src/components/GlobalFootprint.jsx
import { useState } from 'react';

function latLngToPercent(lat, lng) {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { top: `${((90 - lat) / 180) * 100}%`, left: `${x}%` };
}

const rawLocations = [
  {
    name: 'India',
    lat: 30.726 - 6,
    lng: 76.683 - 9.5,
  },
  {
    name: 'UAE',
    lat: 25.076 - 8,
    lng: 54.897 - 9.5,
  },
  {
    name: 'USA',
    lat: 42.4806,
    lng: -83.4755,
  },
  {
    name: 'UK',
    lat: 51.5217,
    lng: -0.7192,
  },
  {
    name: 'Canada',
    lat: 43.7315,
    lng: -79.7624,
  },
  {
    name: 'Egypt',
    lat: 30.1122,
    lng: 31.3469,
  },
];

const locations = rawLocations.map((loc, index) => ({
  ...loc,
  ...latLngToPercent(loc.lat, loc.lng),
  id: index,
}));

export default function GlobalFootprint({ setStyle }) {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="section overflow-hidden" style={{ background: setStyle }}>
      <div className="maxwidth mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#01a69e]">
          Our <span className="halfHeading">Global Footprint</span>
        </h2>

        <div className="relative mx-auto aspect-[2/1] w-full">
          <img
            src="/world_map_outlines2.png"
            alt="World Map"
            className="absolute inset-0 z-0 h-full w-full object-contain opacity-50"
          />

          {locations.map((loc) => (
            <button
              key={loc.id}
              type="button"
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transform"
              title={loc.name}
              style={{ top: loc.top, left: loc.left }}
              onClick={() => setOpenId(loc.id)}
            >
              <span className="relative inline-flex h-2 w-2 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#f5690c] opacity-75 transition-transform duration-1000 ease-out"></span>
                <span className="relative h-2 w-2 rounded-full border-2 border-white bg-[#f5690c] shadow-md"></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* {locations.map(
        (loc) =>
          openId === loc.id && (
            <div
              key={`modal-${loc.id}`}
              className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black"
              onClick={() => setOpenId(null)}
            >
              <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#01a69e]">{loc.name}</h3>
                  <button onClick={() => setOpenId(null)} className="text-xl font-bold text-gray-500 hover:text-red-500">
                    &times;
                  </button>
                </div>
                <p className="text-sm font-semibold text-gray-700">{loc.city}</p>
                <p className="text-sm text-gray-600">{loc.address}</p>
              </div>
            </div>
          ),
      )} */}
    </section>
  );
}

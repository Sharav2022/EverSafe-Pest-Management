import type { StaticImageData } from "next/image";
import apartmentBuilding from "@/assets/photos/apartment-building.jpg";
import backyardGarden from "@/assets/photos/backyard-garden.jpg";
import bedroomBright from "@/assets/photos/bedroom-bright.jpg";
import bedroomCalm from "@/assets/photos/bedroom-calm.jpg";
import cabinAutumn from "@/assets/photos/cabin-autumn.jpg";
import commercialOffice from "@/assets/photos/commercial-office.jpg";
import commercialTowers from "@/assets/photos/commercial-towers.jpg";
import entryDusk from "@/assets/photos/entry-dusk.jpg";
import familyHome from "@/assets/photos/family-home.jpg";
import forestHouse from "@/assets/photos/forest-house.jpg";
import gardenTools from "@/assets/photos/garden-tools.jpg";
import heroHomeDusk from "@/assets/photos/hero-home-dusk.jpg";
import kitchenBright from "@/assets/photos/kitchen-bright.jpg";
import livingRoomDog from "@/assets/photos/living-room-dog.jpg";
import livingRoomFireplace from "@/assets/photos/living-room-fireplace.jpg";
import residentialHome from "@/assets/photos/residential-home.jpg";
import restaurant from "@/assets/photos/restaurant.jpg";
import rodentFarmhouse from "@/assets/photos/rodent-farmhouse.jpg";
import seedlings from "@/assets/photos/seedlings.jpg";
import suburbStreet from "@/assets/photos/suburb-street.jpg";
import termitePorchHome from "@/assets/photos/termite-porch-home.jpg";
import videoPoster from "@/assets/photos/video-poster.jpg";
import warehouse from "@/assets/photos/warehouse.jpg";
import woodlandHouse from "@/assets/photos/woodland-house.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** CSS object-position used when the image is cropped. */
  focus?: string;
};

// Illustrative brand photography (see src/assets/photos/CREDITS.md).
// None of these depict Ever Safe staff, customers or completed jobs.
export const photos = {
  heroHome: {
    src: heroHomeDusk,
    alt: "A timber-clad family home glowing with warm interior light at dusk",
    focus: "50% 60%",
  },
  residentialHome: {
    src: residentialHome,
    alt: "A brick two-storey suburban home with a double garage on a clear day",
    focus: "50% 55%",
  },
  livingRoomDog: {
    src: livingRoomDog,
    alt: "A bright, open living room with a dog resting on the rug",
    focus: "40% 70%",
  },
  livingRoomFireplace: {
    src: livingRoomFireplace,
    alt: "A calm living room with a fireplace, sofa and houseplants",
    focus: "50% 50%",
  },
  commercialOffice: {
    src: commercialOffice,
    alt: "A clean, glass-walled office corridor in a commercial building",
    focus: "50% 50%",
  },
  commercialTowers: {
    src: commercialTowers,
    alt: "Looking up at glass office towers against a pale sky",
    focus: "50% 40%",
  },
  termitePorchHome: {
    src: termitePorchHome,
    alt: "A wood-framed house with a covered front porch surrounded by autumn trees",
    focus: "50% 50%",
  },
  bedroomBright: {
    src: bedroomBright,
    alt: "A neatly made bed in a bright, quiet bedroom",
    focus: "50% 60%",
  },
  bedroomCalm: {
    src: bedroomCalm,
    alt: "A minimal white bedroom with soft morning light",
    focus: "50% 50%",
  },
  rodentFarmhouse: {
    src: rodentFarmhouse,
    alt: "A white clapboard farmhouse with a picket fence in autumn",
    focus: "50% 55%",
  },
  backyardGarden: {
    src: backyardGarden,
    alt: "A garden path lined with flowering shrubs in summer",
    focus: "50% 60%",
  },
  kitchenBright: {
    src: kitchenBright,
    alt: "A bright white kitchen with an island and bar stools",
    focus: "50% 55%",
  },
  seedlings: {
    src: seedlings,
    alt: "Young seedlings growing in rows of small pots",
    focus: "50% 50%",
  },
  woodlandHouse: {
    src: woodlandHouse,
    alt: "A brick house among tall trees in soft morning light",
    focus: "50% 50%",
  },
  cabinAutumn: {
    src: cabinAutumn,
    alt: "A log cabin set in a quiet forest clearing",
    focus: "50% 55%",
  },
  restaurant: {
    src: restaurant,
    alt: "The dining room of a busy restaurant with set tables",
    focus: "50% 50%",
  },
  forestHouse: {
    src: forestHouse,
    alt: "A wooden house with a deck surrounded by green forest",
    focus: "50% 50%",
  },
  suburbStreet: {
    src: suburbStreet,
    alt: "A residential street with houses, a lawn and a young tree",
    focus: "50% 55%",
  },
  familyHome: {
    src: familyHome,
    alt: "A father carrying two young children outside their home",
    focus: "50% 35%",
  },
  entryDusk: {
    src: entryDusk,
    alt: "The lit front entrance of a modern home at dusk",
    focus: "50% 55%",
  },
  warehouse: {
    src: warehouse,
    alt: "Tall shelving aisles inside an organised warehouse",
    focus: "50% 50%",
  },
  apartmentBuilding: {
    src: apartmentBuilding,
    alt: "A modern multi-unit residential building with balconies",
    focus: "50% 40%",
  },
  gardenTools: {
    src: gardenTools,
    alt: "A garden trowel resting in fresh soil",
    focus: "50% 50%",
  },
  videoPoster: {
    src: videoPoster,
    alt: "Opening frame of the Ever Safe film",
    focus: "50% 50%",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

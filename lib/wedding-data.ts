/**
 * MEMORIQA — AURELIA THEME DATA
 *
 * Aurelia is a reusable theme. Every field below is demonstration content
 * for "Aurelia Demo Couple" (per aurelia.md section 6). Replace every field
 * with a real couple's details before publishing; the components never
 * hardcode content, so this file is the only thing that needs to change.
 */

export type WeddingEvent = {
  id: string;
  name: string;
  dateDisplay: string;
  startTime: string;
  endTime?: string;
  venueName: string;
  address: string;
  dressCode?: string;
  photo?: { src: string; alt: string };
  mapQuery?: string;
  note?: string;
};

export type StoryMilestone = {
  title: string;
  passage: string;
  photo?: { src: string; alt: string };
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  size: "tall" | "wide" | "square";
};

export const WEDDING = {
  bride: "Aurelia",
  groom: "Demo Couple",
  initials: "A & D",

  weddingDateTimeISO: "2027-12-18T17:00:00+06:00",
  weddingDateDisplay: "Saturday, 18 December 2027",
  weddingDateShort: "18.12.2027",
  location: "Dhaka, Bangladesh",

  heroImage: {
    src: "https://picsum.photos/seed/aurelia-hero-golden-hour/1800/2200",
    alt: "Editorial placeholder of a couple at golden hour, replace with real wedding photography",
  },

  invitation: {
    eyebrow: "With the blessings of our families",
    line: "Two hearts, one beautiful beginning.",
    body: "Together with their families, Aurelia and their partner joyfully invite you to celebrate their wedding.",
    closing: "We would be honored to have you share in our joy.",
  },

  story: [
    {
      title: "The First Hello",
      passage: "Some of the most beautiful stories begin with an ordinary moment.",
      photo: { src: "https://picsum.photos/seed/aurelia-story-1/900/1100", alt: "Placeholder photograph for the first milestone" },
    },
    {
      title: "When We Knew",
      passage: "Somewhere along the way, ordinary days became our favorite memories.",
      photo: { src: "https://picsum.photos/seed/aurelia-story-2/900/1100", alt: "Placeholder photograph for the second milestone" },
    },
    {
      title: "The Proposal",
      passage: "One question, a thousand emotions, and the beginning of our next chapter.",
      photo: { src: "https://picsum.photos/seed/aurelia-story-3/900/1100", alt: "Placeholder photograph for the third milestone" },
    },
    {
      title: "Forever Begins",
      passage: "And now, we cannot wait to begin the rest of our story together.",
      photo: { src: "https://picsum.photos/seed/aurelia-story-4/900/1100", alt: "Placeholder photograph for the final milestone" },
    },
  ] as StoryMilestone[],

  events: [
    {
      id: "ceremony",
      name: "The Wedding Ceremony",
      dateDisplay: "Saturday, 18 December 2027",
      startTime: "5:00 PM",
      venueName: "The Grand Ballroom",
      address: "Dhaka, Bangladesh",
      mapQuery: "",
    },
    {
      id: "reception",
      name: "The Reception",
      dateDisplay: "Sunday, 19 December 2027",
      startTime: "7:00 PM",
      venueName: "The Garden Pavilion",
      address: "Dhaka, Bangladesh",
      mapQuery: "",
    },
  ] as WeddingEvent[],

  venue: {
    name: "The Grand Ballroom",
    address: "Dhaka, Bangladesh",
    description: "A warm welcome awaits. Arrive a little early to settle in before the ceremony begins.",
    mapQuery: "",
  },

  gallery: [
    { src: "https://picsum.photos/seed/aurelia-gallery-1/900/1300", alt: "Placeholder portrait photograph, replace with real wedding photography", size: "tall" },
    { src: "https://picsum.photos/seed/aurelia-gallery-2/900/700", alt: "Placeholder supporting photograph", size: "square" },
    { src: "https://picsum.photos/seed/aurelia-gallery-3/900/700", alt: "Placeholder supporting photograph", size: "square" },
    { src: "https://picsum.photos/seed/aurelia-gallery-4/1600/900", alt: "Placeholder landscape photograph", size: "wide" },
    { src: "https://picsum.photos/seed/aurelia-gallery-5/900/1300", alt: "Placeholder portrait photograph", size: "tall" },
    { src: "https://picsum.photos/seed/aurelia-gallery-6/900/1300", alt: "Placeholder portrait photograph", size: "tall" },
  ] as GalleryPhoto[],

  rsvp: {
    enabled: true,
    deadlineDisplay: "1 December 2027",
    // Integration point: no backend is connected yet. Submission currently
    // resolves locally and shows a success state for preview purposes only.
    // Wire `submitRsvp` in lib/rsvp.ts to a real endpoint (Formspree, a
    // serverless function, a sheet webhook) before this goes live.
  },

  music: {
    enabled: true,
    src: "/audio/song.mp3",
    srcOgg: "/audio/song.ogg",
    title: "Add Song Title",
  },
};

export type Wedding = typeof WEDDING;

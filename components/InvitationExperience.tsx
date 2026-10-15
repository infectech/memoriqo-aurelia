"use client";

import { useRef } from "react";
import { InvitationOpening } from "./InvitationOpening";
import { MusicControl, type MusicControlHandle } from "./MusicControl";
import { WeddingHero } from "./WeddingHero";
import { InvitationLetter } from "./InvitationLetter";
import { WeddingCountdown } from "./WeddingCountdown";
import { OurStory } from "./OurStory";
import { WeddingEvents } from "./WeddingEvents";
import { VenueSection } from "./VenueSection";
import { PhotoGallery } from "./PhotoGallery";
import { RSVPSection } from "./RSVPSection";
import { ClosingSection } from "./ClosingSection";

export function InvitationExperience() {
  const musicRef = useRef<MusicControlHandle>(null);

  return (
    <>
      <InvitationOpening musicRef={musicRef} />
      <MusicControl ref={musicRef} />

      <main>
        <WeddingHero />
        <InvitationLetter />
        <WeddingCountdown />
        <OurStory />
        <WeddingEvents />
        <VenueSection />
        <PhotoGallery />
        <RSVPSection />
      </main>
      <ClosingSection />
    </>
  );
}

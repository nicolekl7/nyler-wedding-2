import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import RoomCardsDisplay from "@/components/RoomCardsDisplay";
import RsvpFormEmbed from "@/components/RsvpFormEmbed";

const RsvpV2 = () => {
  const [accommodation, setAccommodation] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* The Pitch */}
      <section className="page-section w-[90%] max-w-[1400px] mx-auto">
        <FadeIn>
          <h1 className="heading-section text-center mb-4">
            Accommodations & RSVP
          </h1>
          <div className="w-12 h-px bg-primary mx-auto mb-12" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="max-w-[660px] mx-auto mb-16">
            <p className="body-editorial mx-auto text-center !leading-snug">
              We have exclusively reserved all of Borgo Laticastelli for our guests. If you are staying onsite, all meals and drinks are covered for the full three days—our treat! To get started, select your room below or let us know you'll be staying offsite. Once you've made your selection, you'll be taken directly to the RSVP for the weekend's events.
            </p>
            <p className="body-editorial mx-auto text-center mt-4 text-foreground font-normal !leading-snug">
              Rooms are available on a first-come, first-served basis. Prices are per room for the full three-night stay and cannot be prorated. Please note that reservations not paid within 48 hours will be released.
            </p>
          </div>
        </FadeIn>

        {/* Room Cards */}
        <RoomCardsDisplay
          selectedAccommodation={accommodation}
          onSelectAccommodation={setAccommodation}
          formRef={formRef}
        />
      </section>

      {/* RSVP Form */}
      <section ref={formRef} className="page-section w-[90%] max-w-[700px] mx-auto scroll-mt-24">
        <RsvpFormEmbed
          accommodation={accommodation}
          onAccommodationChange={setAccommodation}
        />
      </section>
    </Layout>
  );
};

export default RsvpV2;

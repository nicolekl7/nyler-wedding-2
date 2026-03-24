import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import RoomCardsDisplay from "@/components/RoomCardsDisplay";
import RsvpFormEmbed from "@/components/RsvpFormEmbed";

const RsvpV3 = () => {
  const [accommodation, setAccommodation] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <section className="page-section w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — Scrollable */}
          <div>
            <FadeIn>
              <h1 className="heading-section mb-4">
                The Borgo Laticastelli Experience
              </h1>
              <div className="w-12 h-px bg-primary mb-12" />
            </FadeIn>

            <FadeIn delay={100}>
              <div className="mb-16">
                <p className="body-editorial">
                  We have reserved the entire Borgo Laticastelli estate exclusively for our guests. If
                  you are staying on site with us, we are covering all your meals and drinks for all
                  3 days—don't worry about spending any additional money once you arrive.
                </p>
                <p className="body-editorial mt-4 text-foreground font-normal">
                  Please review the available rooms below and claim your space. Rooms are available on a
                  first-come, first-served basis.
                </p>
              </div>
            </FadeIn>

            <RoomCardsDisplay
              selectedAccommodation={accommodation}
              onSelectAccommodation={setAccommodation}
              formRef={formRef}
            />
          </div>

          {/* Right Column — Sticky RSVP Form */}
          <div ref={formRef} className="lg:sticky lg:top-24 lg:self-start scroll-mt-24">
            <RsvpFormEmbed
              accommodation={accommodation}
              onAccommodationChange={setAccommodation}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RsvpV3;

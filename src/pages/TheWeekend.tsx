import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
const itinerary = [
  {
    day: "Wednesday, September 16",
    title: "Welcome Pizza Party",
    description:
      "Join us under the stars for wood-fired pizza, Aperol Spritzes, and our official welcome to Tuscany.",
    attire:
      "La Dolce Vita Casual (Linens, summer dresses, effortless Italian style).",
  },
  {
    day: "Thursday, September 17",
    title: "The Wedding Day",
    description:
      "Our ceremony overlooking the Tuscan hills, followed by an evening of Aperitivo, dinner, and dancing the night away.",
    attire:
      "Tuscan Formal (Earth tones encouraged. Please note the grounds feature cobblestone and grass—block heels are highly recommended!).",
  },
  {
    day: "Friday, September 18",
    title: "La Dolce Far Niente Pool Party",
    description:
      "The art of doing nothing. Recover by the castle pools with lunch, drinks, and sunshine.",
    attire: "Vintage Resort Wear.",
  },
];

const faqs = [
  {
    q: "Which airport should I fly into?",
    a: "Florence (FLR) is the closest, roughly 1 hour away. Rome (FCO) is often cheaper for international flights and is a beautiful 2.5 hour drive or fast-train ride away!",
  },
  {
    q: "Will I need a rental car?",
    a: "Once you arrive at Borgo Laticastelli, you will not need a car for the 3 days of wedding events! However, if you are extending your trip to explore Tuscany, a rental car is highly recommended.",
  },
  {
    q: "Are gifts expected?",
    a: "Absolutely not. You traveling across the world to celebrate with us is the greatest gift we could ever ask for! Please, no formal gifts.",
  },
];

const TheWeekend = () => (
  <Layout>
    {/* Header */}
    <section className="page-section w-[90%] max-w-[1000px] mx-auto text-center">
      <FadeIn>
        <h1 className="heading-section mb-4">The Weekend</h1>
        <div className="w-12 h-px bg-primary mx-auto mb-8" />
        <p className="body-editorial mx-auto">
          Three days in the Tuscan countryside. Here's what to expect.
        </p>
      </FadeIn>
    </section>

    {/* Itinerary Timeline */}
    <section className="w-[90%] max-w-[800px] mx-auto pb-24">
      <div className="relative w-[90%] max-w-[900px] mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

        <div className="space-y-20">
          {itinerary.map((event, i) => (
            <FadeIn key={event.title} delay={i * 150}>
              <div className="relative pl-16">
                {/* Timeline marker */}
                <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full border-2 border-primary/40 bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <p className="heading-sub text-foreground mb-3">{event.day}</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4">
                  {event.title}
                </h2>
                <p className="body-editorial mb-4">{event.description}</p>
                <p className="font-body text-sm text-muted-foreground italic">
                  Attire: {event.attire}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Navigation buttons */}
    <section className="w-[90%] max-w-[900px] mx-auto px-6 md:px-12 pb-24">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/travel"
            className="inline-flex items-center justify-center gap-2 font-body text-sm tracking-widest uppercase border border-border px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Travel →
          </Link>
          <Link
            to="/local-guide"
            className="inline-flex items-center justify-center gap-2 font-body text-sm tracking-widest uppercase border border-border px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Local Guide →
          </Link>
        </div>
      </FadeIn>
    </section>
  </Layout>
);

export default TheWeekend;

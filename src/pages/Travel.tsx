import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import airImg from "@/assets/travel-fly.jpeg";
import trainImg from "@/assets/travel-train.jpg";
import carImg from "@/assets/travel-car.jpg";

const faqs = [
  {
    q: "What is the weather like in September?",
    a: "Late September in Tuscany is typically beautiful, with warm, sunny days (around 75°F / 24°C) and crisp, cool evenings (around 55°F / 13°C). We recommend bringing a light jacket, wrap, or shawl for the evening events. Don't forget a bathing suit!",
  },
  {
    q: "Will I need a rental car?",
    a: "Once you arrive at Borgo Laticastelli, you will not need a car for the 3 days of wedding events! However, if you are extending your trip to explore Tuscany, a rental car is highly recommended.",
  },
  {
    q: "Are gifts expected?",
    a: null,
  },
];

const sections = [
  {
    title: "By Air",
    subtitle: "INTERNATIONAL & DOMESTIC FLIGHTS",
    image: airImg,
    alt: "Aerial view of Florence at golden hour",
    body: "For the most direct route, we recommend flying into Florence Airport (FLR), which is a 1 hour and 15 minute drive to the estate. Pisa Airport (PSA) is another excellent Tuscan option, located about 1 hour and 50 minutes away. If you are flying internationally, Rome Fiumicino (FCO) is a fantastic choice. While slightly further at a 2.5 hour drive, it offers direct flights and a beautiful journey through the Italian countryside.",
  },
  {
    title: "By Train & Transfers",
    subtitle: "HIGH-SPEED ITALIAN RAIL",
    image: trainImg,
    alt: "Italian train winding through Tuscan countryside",
    body: "Italy's train system is an experience in itself. If you fly into Rome or Milan, you can take a high-speed train directly to Florence Santa Maria Novella, Siena, or Rapolano Terme.",
    extra:
      "If you choose to take the train into Siena or Rapolano Terme, please let us know your arrival time! We will happily coordinate and cover the cost of your private transfer or shuttle from those stations directly to the castle gates. (Please note: Transfers from airports or other cities will need to be arranged independently).",
  },
  {
    title: "By Car",
    subtitle: "DRIVERS & CAR RENTALS",
    image: carImg,
    alt: "Winding cypress-lined road through Tuscan hills",
    body: "While you will not need a car for the 3 days of wedding events on the estate, renting a car is highly recommended if you plan to extend your trip and explore the Chianti region.",
    address: true,
  },
];

const Travel = () => (
  <Layout>
    {/* Hero Header */}
    <section className="px-6 md:px-12 lg:px-24 pt-20 md:pt-32 pb-12 md:pb-20 w-[90%] max-w-[1000px] mx-auto text-center">
      <FadeIn>
        <p className="heading-sub mb-6">Your Journey Begins</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight mb-8">
          Getting to Borgo Laticastelli
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mb-10" />
        <p className="font-body text-base md:text-lg leading-[1.9] text-muted-foreground font-light max-w-2xl mx-auto">
          The journey to Tuscany is part of the magic. Whether you fly, take the train, or rent a car, every route leads through some of the most beautiful landscape in the world.
        </p>
      </FadeIn>
    </section>

    {/* Travel PSA */}
    <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24 w-[90%] max-w-[1400px] mx-auto">
      <FadeIn>
        <div className="border border-border bg-stone-light/40 px-8 py-8 md:px-12 md:py-10">
          <p className="heading-sub text-primary mb-4">A Few Things to Know</p>
          <p className="font-body text-base leading-[1.9] text-muted-foreground font-light">
            <strong className="text-foreground font-medium">Important:</strong> Italy requires your passport to be valid for at least six months beyond your planned date of departure. Please check your passport expiration date today! If it expires before March 2027, you will need to renew it before booking your flights.
          </p>
          <p className="font-body text-base leading-[1.9] text-muted-foreground font-light mt-4">
            Also, don't forget to pack Type C or Type L travel adapters.
          </p>
        </div>
      </FadeIn>
    </section>

    {/* Editorial Alternating Sections */}
    <div className="space-y-24 md:space-y-40 pb-16 md:pb-32">
      {sections.map((s, i) => (
        <section key={s.title} className="px-6 md:px-12 lg:px-24 w-[90%] max-w-[1400px] mx-auto">
          <FadeIn delay={i * 100}>
            <div
              className={`flex flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 md:gap-20 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-72 md:h-[28rem] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 space-y-5">
                <p className="font-body text-xs uppercase tracking-[0.35em] text-muted-foreground font-medium">
                  {s.subtitle}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                  {s.title}
                </h2>
                <div className="w-10 h-px bg-primary" />
                <p className="font-body text-base md:text-lg leading-[1.9] text-muted-foreground font-light">
                  {s.body}
                </p>
                {s.extra && (
                  <p className="font-body text-base md:text-lg leading-[1.9] text-muted-foreground font-light">
                    {s.extra}
                  </p>
                )}
                {s.address && (
                  <p className="font-serif text-lg text-foreground mt-6 italic leading-relaxed">
                    Laticastelli Country Relais, Via Laticastelli,
                    <br />
                    Rapolano Terme, Province of Siena, Italy
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        </section>
      ))}
    </div>

    {/* Divider */}
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="w-24 h-px bg-border" />
      <span className="font-serif text-sm italic text-muted-foreground/40">✦</span>
      <div className="w-24 h-px bg-border" />
    </div>

    {/* Concierge FAQs */}
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-28 w-[90%] max-w-[900px] mx-auto">
      <FadeIn>
        <p className="heading-sub text-center mb-4">Questions & Answers</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center text-foreground mb-4">
          Concierge FAQs
        </h2>
        <div className="w-12 h-px bg-primary mx-auto mb-16" />
      </FadeIn>

      <FadeIn delay={150}>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-border/50 px-0"
            >
              <AccordionTrigger className="font-serif text-lg sm:text-xl md:text-2xl text-foreground font-light py-5 sm:py-6 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                {faq.a ? (
                  <p className="font-body text-base md:text-lg leading-[1.9] text-muted-foreground font-light">
                    {faq.a}
                  </p>
                ) : (
                  <p className="font-body text-base md:text-lg leading-[1.9] text-muted-foreground font-light">
                    Absolutely not. You traveling across the world to celebrate with us is the greatest gift we could ever ask for! Please, no formal gifts. If you'd like to donate to our house fund, you can do so{" "}
                    <a href="#" className="text-primary underline hover:text-foreground transition-colors">here</a>.
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  </Layout>
);

export default Travel;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/index";
import TheWeekend from "./pages/TheWeekend";
import AccommodationsV2 from "./pages/AccommodationsV2";
import BookingSuccess from "./pages/BookingSuccess";
import Travel from "./pages/Travel";


import RSVP from "./pages/RSVP";
import RsvpV2 from "./pages/RsvpV2";
import RsvpV3 from "./pages/RsvpV3";
import LocalGuide from "./pages/LocalGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/the-weekend" element={<TheWeekend />} />
          <Route path="/reserve-lodging" element={<AccommodationsV2 />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/travel" element={<Travel />} />
          
          
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/rsvp-v2" element={<RsvpV2 />} />
          <Route path="/rsvp-v3" element={<RsvpV3 />} />
          <Route path="/local-guide" element={<LocalGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

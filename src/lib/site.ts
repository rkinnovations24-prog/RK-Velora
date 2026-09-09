import angleCock from "@/assets/p-angle-cock.jpg";
import basinMixer from "@/assets/p-basin-mixer.jpg";
import bibCock from "@/assets/p-bib-cock.jpg";
import healthFaucet from "@/assets/p-health-faucet.jpg";
import accessories from "@/assets/p-accessories.jpg";
import shower from "@/assets/p-shower.jpg";
import wallMixer from "@/assets/p-wall-mixer.jpg";
import bathtub from "@/assets/p-bathtub.jpg";
import pillarCock from "@/assets/p-pillar-cock.jpg";
import sinkCock from "@/assets/p-sink-cock.jpg";
import spares from "@/assets/p-spares.jpg";
import showerPanel from "@/assets/p-shower-panel.jpg";
import waterSoftener from "@/assets/p-water-softener.jpg";
import robotic from "@/assets/p-robotic.jpg";
import floorMat from "@/assets/p-floor-mat.jpg";

import g1 from "@/assets/g-1.jpg";
import g2 from "@/assets/g-2.jpg";
import g3 from "@/assets/g-3.jpg";
import g4 from "@/assets/g-4.jpg";
import g5 from "@/assets/g-5.jpg";
import g6 from "@/assets/g-6.jpg";
import g7 from "@/assets/g-7.jpg";
import g8 from "@/assets/g-8.jpg";

export const WHATSAPP_URL = "https://wa.me/917823911133";
export const INSTAGRAM_URL = "https://www.instagram.com/_velora_.co/";
export const ENQUIRY_EMAIL = "velorark26@gmail.com";

export const CONTACT = {
  phone: "+91 78239 11177",
  phoneHref: "tel:+917823911177",
  mobile: "+91 78239 11177",
  email: "rk.innovations24@gmail.com",
  emails: ["rk.innovations24@gmail.com", "velorark26@gmail.com"],
  addressLines: [
    "No. 5/2, (17/1),",
    "Gangai Amman Koil Street,",
    "Kodambakkam,",
    "Chennai – 600 024",
  ],
  address: "No. 5/2, (17/1), Gangai Amman Koil Street, Kodambakkam, Chennai – 600 024",
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
    { day: "Sunday", time: "Half Day" },
  ],
};

export type Category = { name: string; image: string; blurb: string };

export const categories: Category[] = [
  { name: "Angle Cocks", image: angleCock, blurb: "" },
  { name: "Basin Mixers", image: basinMixer, blurb: "" },
  { name: "Bib Cocks", image: bibCock, blurb: "" },
  { name: "Health Faucets", image: healthFaucet, blurb: "" },
  { name: "Bathroom Accessories", image: accessories, blurb: "" },
  { name: "Shower Collection", image: shower, blurb: "" },
  { name: "Wall Mixers", image: wallMixer, blurb: "" },
  { name: "Bath Tubs", image: bathtub, blurb: "" },
  { name: "Pillar Cocks", image: pillarCock, blurb: "" },
  { name: "Sink Cocks", image: sinkCock, blurb: "" },
  { name: "Spare Parts & Cartridges", image: spares, blurb: "" },
  { name: "Shower Panels", image: showerPanel, blurb: "" },
  { name: "Water Softeners", image: waterSoftener, blurb: "" },
  { name: "Robotic House Cleaners", image: robotic, blurb: "" },
  { name: "Kitchen & Bathroom Floor Mats", image: floorMat, blurb: "" },
];

export const homeCategories = categories.slice(0, 8);

export const galleryImages = [
  { src: g1, alt: "Marble vanity with backlit round mirror and gold tapware" },
  { src: g2, alt: "White marble bathroom with walk-in glass shower and brass fittings" },
  { src: g3, alt: "Dark tiled shower room with gold rain shower" },
  { src: g4, alt: "Double vanity bathroom with stone basins and brass taps" },
  { src: g5, alt: "Luxury kitchen with marble island and gold mixer tap" },
  { src: g6, alt: "Minimal powder room with floating basin and gold wall tap" },
  { src: g7, alt: "Black marble bathroom with freestanding tub and candles" },
  { src: g8, alt: "Spa bathroom with soft daylight and brass shower" },
];

export const faqs = [
  {
    q: "What products does Velora offer?",
    a: "Velora offers a complete range of kitchen and bathroom solutions — faucets, angle cocks, basin and wall mixers, health faucets, showers and shower panels, bath tubs, bathroom accessories, water softeners, robotic house cleaners and floor mats.",
  },
  {
    q: "Do your products come with warranty?",
    a: "Yes. Every Velora product carries a manufacturer warranty against manufacturing defects. Warranty duration varies by category and is confirmed on your invoice at the time of purchase.",
  },
  {
    q: "How can I request a quotation?",
    a: "Share your requirement through our contact form or message us on WhatsApp. Our team responds with a detailed quotation, usually within one working day.",
  },
  {
    q: "Do you supply commercial projects?",
    a: "Absolutely. We regularly supply hotels, apartments, hospitals and commercial developments with project pricing, consolidated delivery schedules and dedicated support.",
  },
  {
    q: "How can I contact Velora?",
    a: `Call us at ${CONTACT.phone}, email ${CONTACT.email}, or message us on WhatsApp for the fastest response.`,
  },
];

export const whyChoose = [
  { title: "Premium Quality", text: "Made from high-grade materials for a superior finish that lasts." },
  { title: "Modern Designs", text: "Contemporary silhouettes that elevate every interior." },
  { title: "Built To Last", text: "Engineered for durability and long-lasting performance." },
  { title: "Wide Product Range", text: "Complete solutions for kitchens, bathrooms and modern living." },
  { title: "Customer Support", text: "Dedicated support for a seamless, trusted experience." },
];
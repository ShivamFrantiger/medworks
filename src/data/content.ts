import type { FooterColumn, NavLink, Product, Step } from "@/types";
import {
  CArmRobotArt,
  CArmXrayArt,
  KeratometerArt,
  MicroscopeArt,
  UltrasoundArt,
} from "@/components/art";

export const BRAND = "MedWorks";
export const YEAR = new Date().getFullYear();

export const CONTACT = {
  address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
  email: "hello@medworks.example",
};

export const SECTION_IDS = [
  "home",
  "features",
  "technology",
  "how-it-works",
  "contact",
];

export const NAV: NavLink[] = [
  { label: "Home", href: "#home" },
  {
    label: "Technology",
    href: "#technology",
    children: [
      { label: "Our Features", href: "#features" },
      { label: "Qualified Technology", href: "#technology" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    label: "Product",
    href: "#technology",
    children: [
      { label: "Gemology Microscope", href: "#technology" },
      { label: "Refractor Keratometer", href: "#technology" },
      { label: "Doppler Ultrasound", href: "#technology" },
    ],
  },
  { label: "About", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES: Product[] = [
  {
    id: "carm-robot",
    name: "C-arm Robot Isometric",
    short: "C-arm Robot",
    blurb:
      "An isometric view of a futuristic C-arm robot designed for advanced medical imaging and surgical applications, showcasing precision technology in a modern care setting.",
    Art: CArmRobotArt,
  },
  {
    id: "carm-xray",
    name: "C-Arm X-Ray Machines",
    short: "C-Arm X-Ray",
    blurb:
      "C-Arm X-ray machines are advanced imaging devices used in medical diagnostics and surgical procedures. Named for their distinctive C-shaped arm, which holds the X-ray source and detector.",
    Art: CArmXrayArt,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "gemology",
    name: "Gemology Microscope",
    short: "Gemology Microscope",
    blurb:
      "A gemology microscope is a specialized tool used to examine and evaluate gemstones.",
    Art: MicroscopeArt,
  },
  {
    id: "keratometer",
    name: "Refractor Keratometer",
    short: "Refractor Keratometer",
    blurb:
      "A refractor keratometer is a device used in eye care to measure the cornea and determine refractive error.",
    Art: KeratometerArt,
  },
  {
    id: "doppler",
    name: "Doppler Ultrasound",
    short: "Doppler Ultrasound",
    blurb:
      "A Doppler ultrasound is a non-invasive imaging test that measures blood flow through blood vessels.",
    Art: UltrasoundArt,
  },
];

export const STEPS: Step[] = [
  {
    title: "Predictive Analytics",
    blurb:
      "Equipment data is turned into early signals so maintenance and care plans start before problems do.",
    Art: KeratometerArt,
  },
  {
    title: "Care Coordination",
    blurb:
      "Devices, clinicians and records stay in sync so every team member works from the same picture.",
    Art: UltrasoundArt,
  },
  {
    title: "Patient Engagement",
    blurb:
      "Clear results and guided follow-ups help patients understand their care and stay on track.",
    Art: MicroscopeArt,
  },
  {
    title: "Continuous Monitoring",
    blurb:
      "Always-on readings flag changes as they happen, giving clinicians time to act.",
    Art: CArmXrayArt,
  },
];

export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Home",
    links: [
      { label: "Features", href: "#features" },
      { label: "Technology", href: "#technology" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Gallery", href: "#technology" },
      { label: "FAQ", href: "#contact" },
      { label: "Contact us", href: "#contact" },
    ],
  },
];

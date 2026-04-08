"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Advantage"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Pass Your Motorcycle Licence With Confidence"
      description="Professional, patient training that gets real results — first time."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg?_wi=1",
          imageAlt: "Instructor guiding student",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg?_wi=1",
          imageAlt: "Training motorcycle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg?_wi=2",
          imageAlt: "Instructor guiding student",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg?_wi=2",
          imageAlt: "Training motorcycle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg?_wi=3",
          imageAlt: "Instructor guiding student",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg?_wi=3",
          imageAlt: "Training motorcycle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg?_wi=4",
          imageAlt: "Instructor guiding student",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg?_wi=4",
          imageAlt: "Training motorcycle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg?_wi=5",
          imageAlt: "Instructor guiding student",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg?_wi=5",
          imageAlt: "Training motorcycle",
        },
      ]}
      buttons={[
        {
          text: "Book Your Training",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:0437486318",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg",
          alt: "Instructor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg",
          alt: "Student",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg",
          alt: "Safety gear",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cyclist-riding-bmx-bike_107420-65687.jpg",
          alt: "Bike",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-biker-repairing-motorbike_273609-5503.jpg",
          alt: "Training",
        },
      ]}
      avatarText="Join 500+ successful riders"
      marqueeItems={[
        {
          type: "text",
          text: "Safety First",
        },
        {
          type: "text",
          text: "Expert Guidance",
        },
        {
          type: "text",
          text: "First-Time Success",
        },
        {
          type: "text",
          text: "Professional Standards",
        },
        {
          type: "text",
          text: "Confident Riding",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Training That Actually Cares About Your Success",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/young-energetic-cyclist-park_158595-2011.jpg",
          alt: "Instructor and student",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Motorcycle Licence Training",
          tags: [
            "Full Course",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165164.jpg?_wi=1",
        },
        {
          id: "f2",
          title: "Beginner Rider Training",
          tags: [
            "Start from zero",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-cool-old-woman-with-motorbike_23-2150647794.jpg?_wi=1",
        },
        {
          id: "f3",
          title: "Test Preparation Sessions",
          tags: [
            "Pass First Time",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/positive-woman-velvet-cap-eyeglasses-dreamily-poses-with-bicycle_197531-23813.jpg?_wi=1",
        },
        {
          id: "f4",
          title: "Refresher Lessons",
          tags: [
            "Stay Safe",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-boy-hand-riding-bicycle-photo-is-focused-nearest-hand_1150-6087.jpg?_wi=1",
        },
      ]}
      title="Professional Training Services"
      description="We focus on building confidence, structured training, and personalized guidance."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Rider Success Stories"
      description="See what our students are saying about their journey to passing their licence."
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          handle: "@sarahrides",
          testimonial: "The most patient instructor I've ever had. Passed first time!",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-woman-velvet-cap-eyeglasses-dreamily-poses-with-bicycle_197531-23813.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Mike D.",
          handle: "@miked99",
          testimonial: "Incredible structure and clear feedback. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-cool-old-woman-with-motorbike_23-2150647794.jpg?_wi=2",
        },
        {
          id: "t3",
          name: "Alex R.",
          handle: "@alexrider",
          testimonial: "Went from zero experience to fully licenced in weeks.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-boy-hand-riding-bicycle-photo-is-focused-nearest-hand_1150-6087.jpg?_wi=2",
        },
        {
          id: "t4",
          name: "Chloe B.",
          handle: "@chloebikes",
          testimonial: "The refresher lessons gave me the boost I needed to be safe on the road.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165164.jpg?_wi=2",
        },
        {
          id: "t5",
          name: "James P.",
          handle: "@jp_moto",
          testimonial: "Professional, knowledgeable, and genuinely fun training.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-cool-old-woman-with-motorbike_23-2150647794.jpg?_wi=3",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to Pass Your Motorcycle Licence? Let’s get you trained, confident, and test-ready. Call us at 043 748 6318."
      buttons={[
        {
          text: "Book Your Spot",
          href: "#",
        },
        {
          text: "Call 043 748 6318",
          href: "tel:0437486318",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Advantage"
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "101 Bonza Bay Rd",
              href: "#",
            },
            {
              label: "043 748 6318",
              href: "tel:0437486318",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Advantage Motorcycle Training. No website? You found us first."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

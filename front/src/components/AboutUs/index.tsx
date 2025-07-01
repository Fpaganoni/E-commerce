import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-slate-300 py-20 px-6 md:px-20 lg:px-32 flex flex-col gap-y-36 text-gray-800">
      <div className="text-center border-gray-200 p-8 rounded-lg bg-white shadow-md">
        <h2 className="text-4xl font-bold mb-6 tracking-[.5em] ">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-800">
          At <span className="font-semibold text-black">E-Commerce</span>, we
          are passionate about technology and design. Our platform brings
          together innovation and user experience to offer you the latest Apple
          products with top-notch service. We believe in simplicity, quality,
          and delivering a seamless online shopping journey. Our team is
          composed of tech enthusiasts, designers, and customer service
          professionals who truly care about what they do. We constantly update
          our catalog to reflect the newest Apple releases and ensure that each
          product is presented with care and clarity. More than a store, we aim
          to be a space where users feel confident, inspired, and well-informed.
          Whether you&rsquo;re a longtime Apple fan or just starting your
          journey with the brand, we&rsquo;re here to provide an experience that
          feels personal, thoughtful, and efficient. We value transparency,
          honesty, and building lasting relationships with our customers.
        </p>
      </div>

      <div className="text-center border-2 border-gray-200 p-8 rounded-lg bg-white shadow-md">
        <h2 className="text-4xl font-bold mb-6  tracking-[.5em] ">
          Our Mission
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-800">
          Our goal is to connect people with the technology they love. From
          iPhones and MacBooks to accessories like AirPods and Apple Watch, we
          handpick each product to ensure you receive the best experience
          possible. Fast delivery, easy navigation, and dedicated support are
          part of our DNA. We want our users to feel empowered by the tools they
          use. That&apos;s why we work hard to provide not just products, but
          also inspiration, education, and the confidence to make informed
          choices. Technology should never be intimidating — it should feel like
          a natural extension of your lifestyle. Whether you&apos;re upgrading
          your gear for work, creativity, or daily life, we aim to make the
          process smooth and enjoyable. Every element of our platform is
          designed to support your goals, from product comparisons to expert
          tips and responsive assistance whenever you need it.
        </p>
      </div>

      <div className="text-center border-gray-200 p-8 rounded-lg bg-white shadow-md">
        <h2 className="text-4xl font-bold mb-6  tracking-[.5em] ">
          What Sets Us Apart
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-800">
          We&apos;re more than just a tech store — we&apos;re a community.
          Whether you&apos;re a student, creative, entrepreneur, or someone
          discovering Apple for the first time, we&apos;re here to guide you.
          Our customer-first approach means every click, every delivery, and
          every message matters. What makes us different is the way we listen.
          We pay attention to your feedback and constantly improve based on what
          you need and expect. Our team invests time in testing and curating
          each product, so you&apos;re never overwhelmed by choices — only
          empowered. We also believe in accessibility, offering intuitive design
          and support that feels human, not robotic. From curated bundles to
          personalized recommendations, we&apos;re always thinking of ways to go
          beyond the ordinary. Shopping with us means being part of a brand that
          puts care, attention, and a personal touch into everything we do.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

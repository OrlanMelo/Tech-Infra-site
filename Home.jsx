import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ServiceMatrix from "@/components/site/ServiceMatrix";
import PaymentGateway from "@/components/site/PaymentGateway";
import CoverageMap from "@/components/site/CoverageMap";
import ContactFooter from "@/components/site/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <ServiceMatrix />
        <PaymentGateway />
        <CoverageMap />
        <ContactFooter />
      </main>
    </div>
  );
}
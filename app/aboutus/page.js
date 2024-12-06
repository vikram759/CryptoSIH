import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FormProvider } from 'react-hook-form';

const About = () => {
  return (
    <>
   <Navbar bool1={false}/>
   
   <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Enhancing transparency and accountability in cryptocurrency transactions.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            In today’s digital age, cryptocurrencies have revolutionized financial transactions, 
            offering speed, anonymity, and accessibility. However, these features have also given rise to challenges, 
            such as the misuse of cryptocurrencies for illicit activities, including transferring defrauded money. 
            Our mission is to bring transparency and accountability to cryptocurrency transactions 
            without compromising the core principles of privacy and decentralization.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our platform provides a secure mechanism for recording peer-to-peer cryptocurrency transactions, 
            enabling crypto exchanges to contribute data in a standardized, traceable manner. By bridging the gap 
            between on-chain transaction data and user-specific information provided by exchanges, we aim to address 
            critical challenges, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Identifying the beneficiaries of cryptocurrency transactions.</li>
            <li>Tracing the source and flow of funds.</li>
            <li>Facilitating investigations while adhering to regulatory compliance.</li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong>1. Data Collection:</strong> Crypto exchanges upload transaction data, including sender and 
              receiver details, transaction hashes, amounts, and timestamps, through a secure portal.
            </p>
            <p>
              <strong>2. Verification:</strong> The system validates the uploaded data with blockchain explorer APIs 
              to ensure integrity and accuracy.
            </p>
            <p>
              <strong>3. Traceability:</strong> Using advanced analytics, authorities can trace transaction paths and 
              identify suspicious patterns or wallet clustering.
            </p>
            <p>
              <strong>4. Privacy Assurance:</strong> Sensitive user data is encrypted and accessible only to authorized 
              entities, ensuring compliance with privacy laws.
            </p>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why It Matters</h2>
          <p className="text-gray-600 leading-relaxed">
            Cryptocurrency offers immense potential for innovation and financial inclusion. However, its misuse for 
            fraudulent activities undermines trust in the ecosystem. Our platform supports law enforcement and 
            regulators in tracing illegal activities, enabling a safer and more accountable crypto landscape.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where cryptocurrencies can be used freely and securely, without the risk of misuse. 
            By collaborating with crypto exchanges and leveraging technology, we aim to create a transparent ecosystem 
            that empowers legitimate users while deterring criminals.
          </p>
        </section>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default About;

// Faq.js
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import 'animate.css'; // For animations

const faqs = [
  {
    question: 'What is GeoTrust?',
    answer:
      'GeoTrust is a blockchain-based platform for secure, transparent, and fraud-free land ownership management. It allows users to tokenize their land using ERC721 tokens and store documents on IPFS, ensuring immutable and reliable records.',
  },
  {
    question: 'How does GeoTrust ensure secure transactions?',
    answer:
      'GeoTrust uses smart contracts to automate transactions. Every transaction is recorded on the blockchain, ensuring tamper-proof and transparent ownership transfers. We also integrate cryptographic signatures for added security.',
  },
  {
    question: 'What is the role of IPFS in GeoTrust?',
    answer:
      'IPFS (InterPlanetary File System) is a decentralized storage network used to store documents related to land ownership. By using IPFS, GeoTrust ensures that documents are accessible, securely stored, and resistant to tampering or loss.',
  },
  {
    question: 'How can I list my property on GeoTrust?',
    answer:
      'Listing a property on GeoTrust is simple. First, connect your crypto wallet, navigate to the seller dashboard, and fill in the necessary details about your property. You can also upload important documents, which will be securely stored on IPFS.',
  },
  {
    question: 'Is there a fee for using GeoTrust?',
    answer:
      'GeoTrust charges minimal gas fees for executing smart contract transactions. These fees are paid to the blockchain network and vary depending on the network’s current activity.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate__animated animate__fadeInDown">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 animate__animated animate__fadeInUp"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span className="text-gray-500">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <Collapse isOpened={activeIndex === index}>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

"use client";

import { useState, useEffect } from "react";
import QuoteIcon from "@/assets/quote.svg";
import Image from "next/image";
import MentalHealthQuotes from "@/data/mental-health-quotes.json";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Home = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Generate a random index and fetch a quote when the component mounts
    const randomIndex = Math.floor(Math.random() * MentalHealthQuotes.length);
    setQuote(MentalHealthQuotes[randomIndex]);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-10 min-h-screen gap-10 bg-slate-900">
      {!quote ? null : (
        <>
          <Image src={QuoteIcon} alt="Quote Icon" width={70} />
          <blockquote
            cite="https://dummyjson.com/quotes/random"
            className="text-[30px] text-center leading-tight normal-case max-w-[800px]"
          >
            {quote.quote}
          </blockquote>
          <h4 className="text-lg">-{quote.author}</h4>
        </>
      )}
    </div>
  );
};

export default Home;

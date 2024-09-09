import QuoteIcon from "@/assets/quote.svg";
import Image from "next/image";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Home = async () => {
  let quote: Quote | null = null;
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    quote = (await res.json()) as Quote;
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="flex justify-center items-center flex-col p-10 min-h-screen gap-10 bg-slate-900">
      {!quote ? (
        <h1 className="text-[30px]">Something went wrong, please try again</h1>
      ) : (
        <>
          <Image src={QuoteIcon} alt="Quote Icon" width={70} />
          <blockquote
            cite="https://dummyjson.com/quotes/random"
            className="text-[30px] text-center leading-tight normal-case max-w-[800px]"
          >
            {quote?.quote}
          </blockquote>
          <h4 className="text-lg">-{quote.author}</h4>
        </>
      )}
    </div>
  );
};

export default Home;

export const fetchCache = "force-no-store";

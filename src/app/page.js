import Footer from "@/(components)/Footer";
import { benefitsCardDetails } from "@/utils/constants";

function BenefitsCard({title, description}) {
  return (
    <div className="w-80 bg-white drop-shadow-lg rounded-md">
      <div className="h-28 bg-blue-600 rounded-t-md" />
      <div className="text-3xl text-blue-600 mt-8 px-5 font-semibold">
        {title}
      </div>
      <div className="mt-4 pb-20 px-5 leading-loose">
        {description}
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div>
      <div className="bg-yellow-500 pl-12 h-[70vh]">
        <div className="flex flex-col h-full justify-center font-bold text-5xl font-serif">
          Every review tells a Story...
          <div className="text-2xl font-semibold mt-5 w-[30%]">
            Our digital marketing platform is helping businesses, just like
            yours, grow faster everyday.
          </div>
          <div className="bg-black w-fit rounded-full font-sans font-semibold text-base text-white px-7 mt-8 py-3">
            Explore reviews
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <div className="text-5xl w-[40%] p-2 text-center">
          Google owns 91% of worldwide search
        </div>
        <div className="w-[50%] mt-5 text-xl text-gray-500 font-semibold text-center">
          Use HelpfulCrowd to rank higher and stand out from competitors in
          Google Organic search results and Google Shopping with customer review
          star ratings.
        </div>
      </div>

      <div className="flex mt-20 flex-wrap gap-20 justify-center">
        {benefitsCardDetails.map((benefit, index) => (
          <BenefitsCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>

      <div className="flex flex-col items-center mt-16 mb-11">
        <div className="text-5xl w-[40%] p-2 text-center">
          Grow your business
        </div>
        <div className="w-[30%] mt-5 text-xl text-gray-500 font-semibold text-center">
          Whether you&apos;re an established local business or an eCommerce
          start-up, HelpfulCrowd&apos;s industry-leading features help your
          business stand out from the crowd.
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Footer from "@/(components)/Footer";
import { benefitsCardDetails } from "@/utils/constants";
import Link from "next/link";

function BenefitsCard({ title, description }) {
  return (
    <div className="w-72 md:w-80 bg-white drop-shadow-xl hover:drop-shadow-2xl rounded-md">
      <div className="h-24 md:h-28 bg-blue-600 rounded-t-md" />
      <div className="text-2xl md:text-3xl text-blue-600 mt-5 md:mt-8 px-5 font-semibold">
        {title}
      </div>
      <div className="mt-4 pb-10 px-5 leading-relaxed">{description}</div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div>
      <div className="bg-blue-500 pt-5 flex flex-col-reverse lg:flex-row px-5 lg:pr-0 lg:pl-12 text-white h-[90vh]">
        <div className="flex flex-col h-full justify-center text-center items-center lg:text-left lg:items-start lg:ml-16 font-bold text-3xl lg:text-7xl">
          Every review tells a Story...
          <div className="text-base lg:text-xl font-semibold mt-5 lg:mt-10 w-[80%]">
            Our digital marketing platform is helping businesses, just like
            yours, grow faster everyday.
          </div>
          <Link
            href="/blog"
            className="bg-white mb-7 lg:mb-0 w-fit text-center rounded-full font-semibold text-base text-black px-7 mt-8 py-3"
          >
            Explore blogs
          </Link>
        </div>
        <div className="flex items-center justify-end mr-16">
          <img
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.svg"
            alt="landingPageIllustration"
            className="lg:z-10 w-[90%]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 items-center justify-between">
        <div className="flex items-center justify-center w-full">
          <img
            src="https://bootstrapmade.com/demo/templates/Logis/assets/img/hero-img.svg"
            alt="landingPageIllustration"
            className="w-[60%] h-[60%]"
          />
        </div>
        <div className="flex flex-col items-center mt-20">
          <div className="text-4xl sm:text-5xl w-[90%] sm:w-[70%] text-gray-700 font-semibold p-2 text-center">
            Google owns 91% of worldwide search
          </div>
          <div className="w-[90%] sm:w-[80%] mt-5 text-lg sm:text-xl text-gray-500 font-semibold text-center">
            Use Review Mate to rank higher and stand out from competitors in
            Google Organic search results and Google Shopping with customer
            review star ratings.
          </div>
        </div>
      </div>

      <div className="flex mt-16 sm:mt-32 flex-wrap gap-10 sm:gap-20 justify-center mx-5 lg:px-0">
        {benefitsCardDetails.map((benefit, index) => (
          <BenefitsCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 sm:my-20">
        <div className="flex flex-col items-center mt-16 mb-11">
          <div className="text-4xl sm:text-5xl w-[90%] sm:w-[70%] p-2 font-semibold text-gray-700 text-center">
            Grow your business
          </div>
          <div className="w-[85%] sm:w-[75%] mt-5 text-lg sm:text-xl text-gray-500 font-semibold text-center">
            Whether you&apos;re an established local business or an eCommerce
            start-up, Review Mate&apos;s industry-leading features help your
            business stand out from the crowd.
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <img
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features.png"
            alt="landingPageIllustration"
            className="w-[60%] h-[60%] h-64"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

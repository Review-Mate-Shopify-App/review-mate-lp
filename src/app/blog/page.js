import BlogCard from "@/(components)/BlogCard";
import Footer from "@/(components)/Footer";
import { blogData } from "@/utils/constants";

export default function Blog() {
  return (
    <div>
      <div className="bg-gray-100 w-full pb-5 px-8">
        {/* <div className="h-[60vh] bg-yellow-400"></div> */}
        <div className="place-items-center pt-14">
          <div className="flex flex-wrap gap-x-12 gap-y-10 px-5">
            {blogData.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  title={blog.title}
                  tag={blog.tag}
                  time={blog.time}
                  desc={blog.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

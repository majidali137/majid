import Heading from "../../ui/Heading";
import TestimonalCard from "./TestimonalCard";

export default function TestimonialSection() {
  return (
    <div className="relative bg-[#fefefe] px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 border-b">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <Heading
          subHeading="Awesome Testimonials"
          mainHeading="Recent Clients We’ve Worked With!"
          description="Recent Clients We've Worked With! These clients are satisfied with me and my work because I worked according to their requirement."
        />

        {/* Testimonal Card */}
        <div className="sm:flex sm:flex-wrap sm:-mx-4  ">
          <div className="lg:w-1/2 px-4 w-full">
            <TestimonalCard
              CoDescription="Power Funnels is a battle tested and proven digital marketing agency that powers your success no matter how competitive your industry or vertical is — one strategy, and award at a time."
              CoLogo="src\data\image\Image\pf-testimonial-logo.svg"
              CoName="Founder & CMO at Power Funnels"
              CoOwnerImg="src\data\image\image\images-image-2.png"
              CoOwnerName="Lee Futcher"
              CologClassName="max-w-[200px]"
            />
          </div>

          <div className="lg:w-1/2 px-4 w-full">
            <TestimonalCard
              CoDescription="We help you make sure everybody in your company knows what their role is, has the right processes and the best tools to deliver great outcomes consistently."
              CoLogo="src\data\image\Image\ASAMBY_Logo_yellow.png"
              CoName="Asamby"
              CoOwnerImg="src\data\image\image\images-image-1.png"
              CoOwnerName="Benjamin Lander"
              CologClassName="max-w-[150px]"
            />
          </div>
          <div className="lg:w-1/2 px-4 w-full">
            <TestimonalCard
              CoDescription="At Coppell Conservatory, we strive to provide the best possible music education for our students. We offer an excellent, experienced faculty committed to helping the student realize his  music."
              CoLogo="src\data\image\Image\coppellconservatory-logo-testimonial.png"
              CoName="Coppell Conservation"
              CoOwnerImg="src\data\image\Image\images-image-3.png"
              CoOwnerName="MRS. LIANA BRAMLETT"
              CologClassName="max-w-[150px]"
            />
          </div>
          <div className="lg:w-1/2 px-4 w-full">
            <TestimonalCard
              CoDescription="Our goal is simple: to revolutionize the way businesses and organizations manage their Standard Operating Procedures (SOPs) by offering a simple, accessible, and affordable SOP writing solution."
              CoLogo="src\data\image\Image\SOP-Heroes-testimoial-logo.svg"
              CoName="SOP Heroes"
              CoOwnerImg="src\data\image\Image\images-image-4.png"
              CoOwnerName="Adam Zielinski"
              CologClassName="max-w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

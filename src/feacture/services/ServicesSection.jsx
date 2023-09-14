import Card from "../../ui/Card";

import { SiReact } from "react-icons/si";
import { TbBrandJavascript, TbBrandHtml5, TbSeo } from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";
import Heading from "../../ui/Heading";

export default function ServicesSection() {
  return (
    <section  className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Heading
          subHeading="What I Offer?"
          mainHeading="My Services"
          description="I can provide these services for you. I specialize in these services. I have great experience and high level skills."
        />

        {/* Cards */}
        <div className=" sm:flex sm:space-x-6">
          <Card
            title="React"
            description=" I have great experience and huge knowledge in react. I can develop React website as per your requirement within your budget."
            icon={<SiReact className="inline-block h-20" />}
          />
          <Card
            title="On-site off-site SEO"
            description=" l am expert in on-site & off-site Seo. I do my best to transform your ideas into a perfect product. High-quality Seo services for your needs"
            icon={<TbSeo className="inline-block h-20" />}
          />
          <Card
            title="HTML / CSS"
            description=" I am also expert in HTML CSS. I can create a fully responsive website as per your requirement.
      "
            icon={<TbBrandHtml5 className="inline-block h-20" />}
          />
          <Card
            title="WordPress"
            description=" I can create a very beautiful and fully animated WordPress website as per your requirement with your budget.
            Built with the latest technology."
            icon={<FaWordpressSimple className="inline-block h-20" />}
          />
        </div>
      </div>
    </section>
  );
}

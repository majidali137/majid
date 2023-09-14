import PersonalInfo from "./PersonalInfo";
import PersonalImg from "./PersonalImg";

export default function HomeSection() {
  return (
    <section className="relative  xl:h-[700px] xl:flex lg:pt-10 pt-5 items-center z-10">
      <PersonalInfo/>
      <PersonalImg/>
    </section>
  );
}

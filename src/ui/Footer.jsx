import SocialIcon from "./SocialIcon";


export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className="bg-[#090e34] pt-24 pb-12"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl border-b border-[#222749] pb-8">
        <div className=" sm:flex ">
          <div className=" py-5 md:w-[33.3333%] px-4 ">
            <h3 className="text-5xl font-bold mb-5 text-white ">Let's Talk!</h3>
            <h2 className="text-xl font-bold text-[#adafbb] mb-2">
              Contact Info
            </h2>
            <p className="text-[#adafbb] mb-1">themajidpro@gmail.com</p>
            <p className="text-[#adafbb] mb-1">
              From Pakistan
            </p>
            <p className="text-[#adafbb] mb-1">+92 305 3006555</p>
          </div>

          <div className="py-5 md:w-[22.666%] px-4">
            <h3 className="text-xl font-semibold mb-9 text-white ">
              What I Do?
            </h3>
            <a href="/">
              <ul className="text-white">
                <li className="mb-3 text-[#adafbb]">The Studio</li>
                <li className="mb-3 text-[#adafbb]">Sponsoring</li>
                <li className="mb-3 text-[#adafbb]">Newsletter</li>
                <li className="mb-3 text-[#adafbb]">Contact Us</li>
              </ul>
            </a>
          </div>

          <div className="py-5 md:w-[22.666%] px-4">
            <h3 className="text-xl font-semibold mb-9 text-white ">
            News
            </h3>
            <a href="/">
              <ul className="text-white">
                <li className="mb-3 text-[#adafbb]">Hot Stuff</li>
                <li className="mb-3 text-[#adafbb]">Perfect Place</li>
                <li className="mb-3 text-[#adafbb]">Vintage</li>
                <li className="mb-3 text-[#adafbb]">Products</li>
              </ul>
            </a>
          </div>

          <div className="py-5 md:w-[22.666%] px-4">
            <h3 className="text-xl font-semibold mb-9 text-white ">
            Quick Links
            </h3>
            <a href="/">
              <ul className="text-white">
                <li className="mb-3 text-[#adafbb]">Style</li>
                <li className="mb-3 text-[#adafbb]">Health</li>
                <li className="mb-3 text-[#adafbb]">Relationship</li>
                <li className="mb-3 text-[#adafbb]">Legal & Privacy</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto py-8">
        <SocialIcon className="mx-auto justify-center fIcon"/>
        <p className="text-[#adafbb] pt-5 text-center ">All rights reserved by &copy; {currentYear} themajidpro</p>
      </div>
    </footer>
  );
}

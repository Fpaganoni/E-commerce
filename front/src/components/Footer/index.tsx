import "../../app/globals.css";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center py-8 bg-slate-300 text-black">
      <div className="w-full flex flex-col md:flex-row items-center md:items-baseline md:justify-around gap-9 bg-gray-50 py-10">
        <div className="w-1/4 flex gap-15 flex-col md:flex-row items-center md:items-baseline ">
          <div className="">
            <h2 className="font-bold tracking-wider text-lg mb-3">Company</h2>
            <ul className="text-sm flex flex-col gap-2">
              <li>Shop Electronic</li>
              <li>Gift Cards</li>
              <li>For Business</li>
              <li>Stores</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold tracking-wider text-lg mb-3">Follow us</h2>
            <ul className="text-sm flex flex-col gap-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold tracking-wider text-lg mb-3">Support</h2>
            <ul className="text-sm flex flex-col gap-2">
              <li>FAQ</li>
              <li>Chat with us</li>
              <li>Accessibility</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>
        </div>

        <div className="w-[90%] md:w-[40%] ml-4 md:ml-0 mt-3 md:mt-0">
          <h1 className="font-bold tracking-wider text-lg mb-3">
            Stay up to date with E-Commerce
          </h1>
          <p>
            Join the e-commerce family! Be the first to know about exclusive
            deals and latest arrivals.
          </p>
          <form className="w-full mt-5">
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="p-3 mr-5 bg-slate-300 w-[60%] rounded-md"
            />
            <button
              type="button"
              className="py-3 px-1 md:p-3 bg-[var(--buttons)] text-gray-50 w-[25%] rounded-md cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-[90%] flex flex-col md:flex-row gap-5 items-center justify-between text-sm  text-slate-500 mt-10">
        <ul className="flex gap-5 flex-col md:flex-row items-center ">
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms Of Use</li>
          <li>Accessibility Statement</li>
        </ul>
        <span className="align-middle">Patent - Copyright © 2025</span>
      </div>
    </footer>
  );
};

export default Footer;

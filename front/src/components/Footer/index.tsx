import "../../app/globals.css";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center py-8 bg-slate-300 text-black">
      <div className="w-full flex items-baseline justify-around gap-9 bg-gray-50 py-10">
        <div className="flex gap-15">
          <div>
            <h2 className="font-bold tracking-wider text-lg mb-3">Company</h2>
            <ul className="text-sm flex flex-col gap-2">
              <li>Shop Electronic</li>
              <li>Gift Cards</li>
              <li>For Business</li>
              <li>Stores</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold tracking-wider text-lg mb-3">Follow us</h2>
            <ul className="text-sm flex flex-col gap-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold tracking-wider text-lg mb-3">Support</h2>
            <ul className="text-sm flex flex-col gap-2">
              <li>FAQ</li>
              <li>Chat with us</li>
              <li>Accessibility</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>
        </div>

        <div className="w-[500px]">
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
              className="p-3 bg-[var(--buttons)] text-gray-50 w-[25%] rounded-md cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-[90%] flex justify-between text-sm  text-slate-500 mt-10">
        <span>
          <ul className="flex gap-5 ">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms Of Use</li>
            <li>Accessibility Statement</li>
          </ul>
        </span>
        <span>Patent - Copyright © 2025</span>
      </div>
    </footer>
  );
};

export default Footer;

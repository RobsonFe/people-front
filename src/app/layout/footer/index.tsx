export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/RobsonFe"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Fox Hound™
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="mailto:robson-ferreiradasilva@hotmail.com"
                target="_blank"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © {anoAtual}
          <a
            href="https://github.com/RobsonFe"
            target="_blank"
            className="hover:underline"
          >
            Fox Hound™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

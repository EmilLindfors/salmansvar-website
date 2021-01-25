export default function Footer() {
  return (
    <footer className="mt-10 text-gray-700 bg-white border-t body-font">
      <div className="border-t border-gray-200">
        <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
          <a className="flex items-center w-48 mb-4 font-medium text-gray-900 title-font md:mb-0">
            <img src="/logo.png" alt="" />
          </a>
          <div className="flex flex-wrap items-center justify-center mx-auto text-base ">
            <a
              href="/about"
              className="justify-center mr-5 text-sm text-center text-tertiary hover:text-primary"
            >
              About
            </a>
            <a
              href="/work-packages"
              className="justify-center mr-5 text-sm text-center text-tertiary hover:text-primary"
            >
              Work Packages
            </a>
            <a
              href="#"
              className="justify-center mr-5 text-sm text-center text-tertiary hover:text-primary"
            >
              Publications
            </a>
            <a
              href="#"
              className="justify-center mr-5 text-sm text-center text-tertiary hover:text-primary"
            >
                 Upcoming Events
            </a>
          </div>
          <div className="inline-flex items-center justify-center md:justify-start ">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a href="https://www.facebook.com/mohnsenteret" className="text-blue-807 hover:text-primary">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/MohnCentre" className="ml-4 text-blue-870 hover:text-primary">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center py-6 mx-auto text-base bg-blueGray-900 ">
          <p className="text-sm text-center text-gray-200 ">
            © Lindfors Foundry — 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

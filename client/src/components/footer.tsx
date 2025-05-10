import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="ri-magic-line text-primary text-2xl mr-2"></i>
              <span className="font-bold text-xl text-primary">HomeGenie</span>
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted partner for home services. Quality work, guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Plumbing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Electrical</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Cleaning</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">HVAC</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-600 hover:text-primary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/book">
                  <a className="text-gray-600 hover:text-primary">Book Service</a>
                </Link>
              </li>
              <li>
                <Link href="/appointments">
                  <a className="text-gray-600 hover:text-primary">Appointments</a>
                </Link>
              </li>
              <li>
                <Link href="/customer-care">
                  <a className="text-gray-600 hover:text-primary">Customer Care</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">123 Service St, City, State 12345</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">support@homegenie.com</span>
              </li>
              <li className="flex items-start">
                <i className="ri-time-line text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">Mon-Fri: 8am-8pm<br />Sat-Sun: 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HomeGenie. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-primary">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
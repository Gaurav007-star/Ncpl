import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaMeta } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const footerData = {
  company: {
    name: "NTNL Construction",
    description:
      "Professional construction services with over 15 years of experience. Building dreams into reality with quality and excellence.",
    socials: [
      { icon: "facebook", link: "#" },
      { icon: "twitter", link: "#" },
      { icon: "linkedin", link: "#" },
      { icon: "instagram", link: "#" },
    ],
  },
  services: [
    "Residential Construction",
    "Commercial Buildings",
    "Renovation & Remodeling",
    "Infrastructure Projects",
  ],
  companyLinks: [
    { label: "About Us", link: "#" },
    { label: "Our Projects", link: "#" },
    { label: "Careers", link: "#" },
    { label: "Blog & News", link: "#" },
  ],
  contact: [
    {
      icon: <MapPin className="w-4 h-4 text-orange-500" />,
      text: "P 28, Awas Vikas, Rudrapur, Udham Singh Nagar, Uttarakhand 263153",
    },
    {
      icon: <Phone className="w-4 h-4 text-orange-500" />,
      text: "+91 6396722144",
    },
    {
      icon: <Mail className="w-4 h-4 text-orange-500" />,
      text: "info@ntnlconstruction.com",
    },
    {
      icon: <Clock className="w-4 h-4 text-orange-500" />,
      text: "Mon - Fri: 8:00 AM - 6:00 PM",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Company Info */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-white text-xl font-clash mb-3">
            {footerData.company.name}
          </h2>
          <p className="font-plein text-sm leading-relaxed mb-4">
            {footerData.company.description}
          </p>
          <div className="flex gap-3">
            {footerData.company.socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500"
              >
                <i className={`fab fa-${social.icon} text-white`} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="text-white text-lg font-clash mb-3">Services</h3>
          <ul className="space-y-2 font-plein text-sm">
            {footerData.services.map((service, i) => (
              <li key={i}>
                <a href="#" className="hover:text-orange-400">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="text-white text-lg font-clash mb-3">Company</h3>
          <ul className="space-y-2 font-plein text-sm">
            {footerData.companyLinks.map((item, i) => (
              <li key={i}>
                <a href={item.link} className="hover:text-orange-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-white text-lg font-clash mb-3">Contact Info</h3>
          <ul className="space-y-3 font-plein text-sm">
            {footerData.contact.map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-5 border-t border-gray-700 flex flex-wrap justify-between text-sm font-plein text-gray-400">
        <p>© 2024 NTNL Construction. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-orange-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-orange-400">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

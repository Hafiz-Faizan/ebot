"use client";

import { useState, useEffect } from "react";
import { Disclosure, Dialog } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  LightBulbIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import DemoModal from "./HomePage/DemoModal";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Profile from "./profile";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
const services = [
  {
    name: "Financial Reporting",
    description: "Accurate financial record keeping",
    href: "/financial-reporting",
    icon: ChartPieIcon,
  },
  {
    name: "Tax",
    description: "Resolve your tax issues effectively",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "S/4 Finance Implementation",
    description: "Comprehensive SAP S/4 HANA implementations",
    href: "#",
    icon: LightBulbIcon,
  },

];


const financialServices = [
  { name: "Bookkeeping", href: "/financial-reporting/bookkeeping" },
  { name: "Accounting", href: "/financial-reporting/Accounting" },
  { name: "Fractional CFO", href: "/financial-reporting/Fractional_CFO" },
];


const taxServices = [
  { name: "Tax Planning", href: "/tax/TaxPlanning" },
  { name: "Tax Compliance", href: "/tax/TaxCompliance" },
  { name: "Tax Resolution", href: "/tax/TaxResolution" },
];


const s4FinanceServices = [
  { name: "Implementations", href: "/s4-finance/Implementations" },
  { name: "Central Finance (CFIN)", href: "/s4-finance/CentralFinance(CFIN)" },
  { name: "Support and Training", href: "/s4-finance/SupportandTraining" },
];

// Sub-services for Pricing
const pricingFinancialServices = [
  { name: "Bookkeeping Pricing", href: "/pricing-financial-reporting/bookkeeping" },
  { name: "Accounting Pricing", href: "/pricing-financial-reporting/Accounting" },
  { name: "Fractional CFO Pricing", href: "/pricing-financial-reporting/fractionalCFO" },
];

const pricingTaxServices = [
  { name: "Tax Planning Pricing", href: "/pricing-tax/TaxPlanning" },
  { name: "Tax Compliance Pricing", href: "/pricing-tax/TaxCompliance" },
  { name: "Tax Resolution Pricing", href: "/pricing-tax/TaxResolution" },
];

const pricingS4FinanceServices = [
  { name: "Implementations Pricing", href: "/pricing-s4-finance/Implementations" },
  { name: "Central Finance Pricing", href: "/pricing-s4-finance/CentralFinance(CFIN)" },
  { name: "Support and Training Pricing", href: "/pricing-s4-finance/SupportandTraining" },
];

// Pricing section
const pricing = [
  {
    name: "Financial Reporting",
    description: "Accurate financial record keeping",
    href: "#", // This will have a dropdown
    icon: ChartPieIcon,
  },
  {
    name: "Tax",
    description: "Resolve your tax issues effectively",
    href: "#", // This will have a dropdown
    icon: CursorArrowRaysIcon,
  },
  {
    name: "S/4 Finance Implementation",
    description: "Comprehensive SAP S/4 HANA implementations",
    href: "#", // This will have a dropdown
    icon: LightBulbIcon,
  },
  {
    name: "Extended Tax Dispute Pricing",
    description: "Special pricing for extended tax dispute resolution",
    href: "/Extended-Tax-Dispute-Pricing",
    icon: CurrencyDollarIcon,
  },
];

// Additional sections under "More"
const additionalSections = [
  {
    name: "FAQs - IRS Tax Resolutions",
    description: "Find answers to common tax resolution questions",
    href: "/FAQs",
    icon: ChartBarIcon,
  },
  {
    name: "Industry Insights",
    description: "Discover the latest trends in the industry",
    href: "#",
    icon: LightBulbIcon,
  },
  {
    name: "Reviews",
    description: "Check out what our clients have to say",
    href: "#",
    icon: UserGroupIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isFinancialServiceOpen, setIsFinancialServiceOpen] = useState(false); // Financial Reporting dropdown
  const [isTaxServiceOpen, setIsTaxServiceOpen] = useState(false); // Tax dropdown
  const [isS4FinanceServiceOpen, setIsS4FinanceServiceOpen] = useState(false); // S/4 Finance dropdown
  const [isPricingFinancialServiceOpen, setIsPricingFinancialServiceOpen] = useState(false); // Pricing dropdown for Financial Reporting
  const [isPricingTaxServiceOpen, setIsPricingTaxServiceOpen] = useState(false); // Pricing dropdown for Tax
  const [isPricingS4FinanceServiceOpen, setIsPricingS4FinanceServiceOpen] = useState(false); // Pricing dropdown for S/4 Finance
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const router = useRouter(); // Initialize the router
  useEffect(() => {
    // Function to fetch the cart total from localStorage
    const fetchCartTotal = () => {
      const total = localStorage.getItem("cartTotal");
      setCartTotal(total ? parseFloat(total) : 0);
    };

    // Fetch the cart total initially
    fetchCartTotal();

    // Add an event listener to listen for storage changes
    window.addEventListener('storage', fetchCartTotal);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', fetchCartTotal);
    };
  }, []);

  const handleCartClick = () => {
    // Redirect to payment page with total amount as a parameter
    router.push(`/payment?price=${encodeURIComponent(cartTotal)}`);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Set to true if user is logged in, false otherwise
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const pathname = usePathname();


  useEffect(() => {
    // Keep the Financial Reporting dropdown open if the current route matches any of its subitems
    if (pathname.includes("/financial-reporting")) {
      setIsFinancialServiceOpen(true);
    } else {
      setIsFinancialServiceOpen(false);
    }

    // Keep the Tax dropdown open if the current route matches any of its subitems
    if (pathname.includes("/tax")) {
      setIsTaxServiceOpen(true);
    } else {
      setIsTaxServiceOpen(false);
    }

    // Keep the S/4 Finance dropdown open if the current route matches any of its subitems
    if (pathname.includes("/s4-finance")) {
      setIsS4FinanceServiceOpen(true);
    } else {
      setIsS4FinanceServiceOpen(false);
    }
  }, [pathname]);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-6xl items-center justify-between p-6 py-8 lg:px-8 z-50">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/logo.svg" className="h-8 w-auto" />
          </Link>
        </div>


        <div className="flex lg:hidden">
          {isLoggedIn ? (
            <div></div>
          ) : (
            <>
              <p className="text-black pr-8 font-bold">Sign In</p>
            </>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {/* Services Dropdown */}
          <Disclosure>
            <Disclosure.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </Disclosure.Button>
            <Disclosure.Panel className="absolute left-1/2 z-20 mt-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {services.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-center">
                        <Link
                          href={item.href}
                          onClick={(e) => e.stopPropagation()}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                          </div>
                        </Link>

                        {/* Add Chevron Icon for Financial Reporting, Tax, and S/4 Finance */}
                        {(item.name === "Financial Reporting" || item.name === "Tax" || item.name === "S/4 Finance Implementation") && (
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-500 cursor-pointer"
                            onClick={() => {
                              if (item.name === "Financial Reporting") {
                                setIsFinancialServiceOpen(!isFinancialServiceOpen);
                              } else if (item.name === "Tax") {
                                setIsTaxServiceOpen(!isTaxServiceOpen);
                              } else if (item.name === "S/4 Finance Implementation") {
                                setIsS4FinanceServiceOpen(!isS4FinanceServiceOpen);
                              }
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      {/* Financial Reporting Dropdown */}
                      {item.name === "Financial Reporting" && isFinancialServiceOpen && (
                        <div className="mt-2 z-50 ml-8">
                          <ul className="mt-2 ml-4">
                            {financialServices.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tax Dropdown */}
                      {item.name === "Tax" && isTaxServiceOpen && (
                        <div className="mt-2 z-50 ml-8">
                          <ul className="mt-2 ml-4">
                            {taxServices.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* S/4 Finance Implementation Dropdown */}
                      {item.name === "S/4 Finance Implementation" && isS4FinanceServiceOpen && (
                        <div className="mt-2 z-50 ml-8">
                          <ul className="mt-2 ml-4">
                            {s4FinanceServices.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </Disclosure>

          {/* Pricing Dropdown */}
          <Disclosure>
            <Disclosure.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Pricing
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Disclosure.Button>
            <Disclosure.Panel className="absolute left-1/2 z-20 mt-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {pricing.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-center">
                        <Link
                          href={item.href}
                          onClick={(e) => e.stopPropagation()}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                          </div>
                        </Link>

                        {/* Add Chevron Icon for Pricing - Financial Reporting, Tax, and S/4 Finance */}
                        {(item.name === "Financial Reporting" || item.name === "Tax" || item.name === "S/4 Finance Implementation") && (
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-500 cursor-pointer"
                            onClick={() => {
                              if (item.name === "Financial Reporting") {
                                setIsPricingFinancialServiceOpen(!isPricingFinancialServiceOpen);
                              } else if (item.name === "Tax") {
                                setIsPricingTaxServiceOpen(!isPricingTaxServiceOpen);
                              } else if (item.name === "S/4 Finance Implementation") {
                                setIsPricingS4FinanceServiceOpen(!isPricingS4FinanceServiceOpen);
                              }
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      {/* Pricing Financial Reporting Dropdown */}
                      {item.name === "Financial Reporting" && isPricingFinancialServiceOpen && (
                        <div className="mt-2 z-50 ml-8">
                          <ul className="mt-2 ml-4">
                            {pricingFinancialServices.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Pricing Tax Dropdown */}
                      {item.name === "Tax" && isPricingTaxServiceOpen && (
                        <div className="mt-2 z-50 ml-8">
                          <ul className="mt-2 ml-4">
                            {pricingTaxServices.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Pricing S/4 Finance Dropdown */}
                      {item.name === "S/4 Finance Implementation" && isPricingS4FinanceServiceOpen && (
                        <div className="mt-2 z-50 ml-8">
                          <ul className="mt-2 ml-4">
                            {pricingS4FinanceServices.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <Link
                                  href={subItem.href}
                                  className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </Disclosure>

          {/* Additional Sections Dropdown */}
          <Disclosure>
            <Disclosure.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              More
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Disclosure.Button>
            <Disclosure.Panel className="absolute left-2/3 z-20 mt-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {additionalSections.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </Disclosure>

          <Link href="#about-us" className="text-sm font-semibold leading-6 text-gray-900">
            Training
          </Link>

          <Link href="#about-us" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoggedIn ? (
            <>   <div className="pr-10 items-center"> <button onClick={handleCartClick} className="relative">
              <span className="text-lg font-bold ">Cart</span>
              {cartTotal > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                  {cartTotal.toFixed(2)}$
                </span>
              )}
            </button></div>  <Profile /></>
          ) : (
            <>
              <Link
                href="/signup"
                className="bg-main text-white rounded-lg py-2 px-4 text-sm font-semibold leading-6"
              >
                Get Started
              </Link>
              <Link href="/login" className="text-sm py-2 px-4 font-semibold leading-6 text-gray-900 ml-8">
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img alt="Company Logo" src="/logo.svg" className="h-8 w-auto" />
            </Link>

            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {services.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Pricing
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {pricing.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    More
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {additionalSections.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>
              </div>

              {/* Mobile "About Us" Section */}
              <a href="#about-us" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 py-2">
                About Us
              </a>

              <div className="bg-main py-2 px-6 rounded-lg">
                {isLoggedIn ? (
                  <Profile />
                ) : (
                  <button onClick={openDemoModal} className="text-lg font-semibold leading-6 text-white ml-4">
                    Get Started
                  </button>
                )}
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </header>
  );
}

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
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Profile from "./profile";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from 'firebase/firestore';

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

const pricing = [
  {
    name: "Financial Reporting",
    description: "Accurate financial record keeping",
    href: "#",
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
  {
    name: "Extended Tax Dispute Pricing",
    description: "Special pricing for extended tax dispute resolution",
    href: "/Extended-Tax-Dispute-Pricing",
    icon: CurrencyDollarIcon,
  },
];

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
    href: "/Industry-Insights",
    icon: LightBulbIcon,
  },
  {
    name: "Reviews",
    description: "Check out what our clients have to say",
    href: "/reviews",
    icon: UserGroupIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openMainDropdown, setOpenMainDropdown] = useState(null);
  const [openSubDropdowns, setOpenSubDropdowns] = useState({
    FinancialService: false,
    TaxService: false,
    S4FinanceService: false,
    PricingFinancialService: false,
    PricingTaxService: false,
    PricingS4FinanceService: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu when pathname changes
    setMobileMenuOpen(false);

    // Determine which dropdowns should be open based on the current pathname
    if (pathname.includes("/financial-reporting")) {
      setOpenMainDropdown("Services");
      setOpenSubDropdowns(prev => ({ ...prev, FinancialService: true }));
    } else if (pathname.includes("/tax")) {
      setOpenMainDropdown("Services");
      setOpenSubDropdowns(prev => ({ ...prev, TaxService: true }));
    } else if (pathname.includes("/s4-finance")) {
      setOpenMainDropdown("Services");
      setOpenSubDropdowns(prev => ({ ...prev, S4FinanceService: true }));
    } else if (pathname.includes("/pricing-financial-reporting")) {
      setOpenMainDropdown("Pricing");
      setOpenSubDropdowns(prev => ({ ...prev, PricingFinancialService: true }));
    } else if (pathname.includes("/pricing-tax")) {
      setOpenMainDropdown("Pricing");
      setOpenSubDropdowns(prev => ({ ...prev, PricingTaxService: true }));
    } else if (pathname.includes("/pricing-s4-finance")) {
      setOpenMainDropdown("Pricing");
      setOpenSubDropdowns(prev => ({ ...prev, PricingS4FinanceService: true }));
    } else {
      // If not on a specific sub-page, close all dropdowns
      setOpenMainDropdown(null);
      setOpenSubDropdowns({
        FinancialService: false,
        TaxService: false,
        S4FinanceService: false,
        PricingFinancialService: false,
        PricingTaxService: false,
        PricingS4FinanceService: false,
      });
    }
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      if (user) {
        const cartRef = doc(db, "carts", user.uid);

        onSnapshot(cartRef, (snapshot) => {
          if (snapshot.exists()) {
            setCartItems(snapshot.data().items || []);
          } else {
            setCartItems([]);
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, [cartItems]);

  const handleMainDropdownToggle = (dropdownName) => {
    if (openMainDropdown === dropdownName) {
      setOpenMainDropdown(null);
    } else {
      setOpenMainDropdown(dropdownName);
    }
  };

  const handleSubDropdownToggle = (subDropdownName) => {
    setOpenSubDropdowns(prev => ({
      ...prev,
      [subDropdownName]: !prev[subDropdownName]
    }));
  };

  const handleCartClick = () => {
    router.push("/cart");
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
            <Link 
              href="/login"
              className="text-black pr-8 font-bold"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
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
            <Disclosure.Button 
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              onClick={() => handleMainDropdownToggle("Services")}
            >
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </Disclosure.Button>
            <Disclosure.Panel className={`absolute left-1/2 z-20 mt-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 ${openMainDropdown === "Services" ? '' : 'hidden'}`}>
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

                        {(item.name === "Financial Reporting" || item.name === "Tax" || item.name === "S/4 Finance Implementation") && (
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-500 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (item.name === "Financial Reporting") {
                                handleSubDropdownToggle("FinancialService");
                              } else if (item.name === "Tax") {
                                handleSubDropdownToggle("TaxService");
                              } else if (item.name === "S/4 Finance Implementation") {
                                handleSubDropdownToggle("S4FinanceService");
                              }
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      {item.name === "Financial Reporting" && openSubDropdowns.FinancialService && (
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

                      {item.name === "Tax" && openSubDropdowns.TaxService && (
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

                      {item.name === "S/4 Finance Implementation" && openSubDropdowns.S4FinanceService && (
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
              <Disclosure.Button 
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                onClick={() => handleMainDropdownToggle("Pricing")}
              >
                Pricing
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Disclosure.Button>
              <Disclosure.Panel className={`absolute left-1/2 z-20 mt-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 ${openMainDropdown === "Pricing" ? '' : 'hidden'}`}>
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
  
                          {(item.name === "Financial Reporting" || item.name === "Tax" || item.name === "S/4 Finance Implementation") && (
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-500 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (item.name === "Financial Reporting") {
                                  handleSubDropdownToggle("PricingFinancialService");
                                } else if (item.name === "Tax") {
                                  handleSubDropdownToggle("PricingTaxService");
                                } else if (item.name === "S/4 Finance Implementation") {
                                  handleSubDropdownToggle("PricingS4FinanceService");
                                }
                              }}
                              aria-hidden="true"
                            />
                          )}
                        </div>
  
                        {item.name === "Financial Reporting" && openSubDropdowns.PricingFinancialService && (
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
  
                        {item.name === "Tax" && openSubDropdowns.PricingTaxService && (
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
  
                        {item.name === "S/4 Finance Implementation" && openSubDropdowns.PricingS4FinanceService && (
                          <div className="mt-2 z-50 ml-8">
                            <ul className="mt-2 ml-4">
                              {pricingS4FinanceServices.map((subItem) => (
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
  
            {/* Additional Sections Dropdown */}
            <Disclosure>
              <Disclosure.Button 
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                onClick={() => handleMainDropdownToggle("More")}
              >
                More
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Disclosure.Button>
              <Disclosure.Panel className={`absolute left-2/3 z-20 mt-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 ${openMainDropdown === "More" ? '' : 'hidden'}`}>
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
  
            <Link href="/training" className="text-sm font-semibold leading-6 text-gray-900">
              Training
            </Link>
  
            <Link href="/aboutus" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </Link>
          </div>
  
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              <>   
                <div className="flex items-center text-gray-600 hover:text-red-500 ml-6"> 
                  <button onClick={handleCartClick} className="relative">
                    <span className="text-lg font-bold ">Cart</span>
                    {cartTotal > 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                        {cartTotal.toFixed(2)}$
                      </span>
                    )}
                  </button>
                </div>  
                <Profile />
              </>
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
              <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <img alt="Company Logo" src="/logo.svg" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* Services Dropdown */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Services
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 flex-none`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {services.map((item) => (
                            <Disclosure key={item.name} as="div" className="pl-6">
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className="group flex w-full items-center justify-between rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                    <ChevronDownIcon
                                      className={`${
                                        open ? 'rotate-180 transform' : ''
                                      } h-5 w-5 flex-none`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="mt-2 space-y-2">
                                    {item.name === "Financial Reporting" && financialServices.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                    {item.name === "Tax" && taxServices.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                    {item.name === "S/4 Finance Implementation" && s4FinanceServices.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
  
                  {/* Pricing Dropdown */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Pricing
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 flex-none`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {pricing.map((item) => (
                            <div key={item.name}>
                              {item.name === "Extended Tax Dispute Pricing" ? (
                                <Link
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <Disclosure as="div" className="pl-6">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      className="group flex w-full items-center justify-between rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                      {item.name}
                                      <ChevronDownIcon
                                        className={`${
                                          open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 flex-none`}
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="mt-2 space-y-2">
                                      {item.name === "Financial Reporting" && pricingFinancialServices.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          onClick={closeMobileMenu}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                      {item.name === "Tax" && pricingTaxServices.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          onClick={closeMobileMenu}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                      {item.name === "S/4 Finance Implementation" && pricingS4FinanceServices.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          onClick={closeMobileMenu}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            )}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* More Dropdown */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        More
                        <ChevronDownIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 flex-none`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {additionalSections.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Training Link */}
                <Link
                  href="/training"
                  onClick={closeMobileMenu}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Training
                </Link>

                {/* About Us Link */}
                <Link
                  href="/aboutus"
                  onClick={closeMobileMenu}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
              </div>

              {/* Authentication Section */}
              <div className="py-6">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center text-gray-600 hover:text-red-500 mb-4">
                      <button onClick={handleCartClick} className="relative">
                        <span className="text-lg font-bold">Cart</span>
                        {cartTotal > 0 && (
                          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                            {cartTotal.toFixed(2)}$
                          </span>
                        )}
                      </button>
                    </div>
                    <Profile />
                  </>
                ) : (
                  <>
                    <Link
                      href="/signup"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="/login"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Sign In
                    </Link>
                  </>
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
"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
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
import { doc, onSnapshot } from "firebase/firestore";
import CustomDropdown from './CustomDropdown';

// ... (keep all the constant arrays like services, financialServices, etc.)
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
  {
    name: "Bookkeeping Pricing",
    href: "/pricing-financial-reporting/bookkeeping",
  },
  {
    name: "Accounting Pricing",
    href: "/pricing-financial-reporting/Accounting",
  },
  {
    name: "Fractional CFO Pricing",
    href: "/pricing-financial-reporting/fractionalCFO",
  },
];

const pricingTaxServices = [
  { name: "Tax Planning Pricing", href: "/pricing-tax/TaxPlanning" },
  { name: "Tax Compliance Pricing", href: "/pricing-tax/TaxCompliance" },
  { name: "Tax Resolution Pricing", href: "/pricing-tax/TaxResolution" },
];

const pricingS4FinanceServices = [
  {
    name: "Implementations Pricing",
    href: "/pricing-s4-finance/Implementations",
  },
  {
    name: "Central Finance Pricing",
    href: "/pricing-s4-finance/CentralFinance(CFIN)",
  },
  {
    name: "Support and Training Pricing",
    href: "/pricing-s4-finance/SupportandTraining",
  },
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
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

  const handleCartClick = () => {
    router.push("/cart");
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const servicesSubItems = {
    "Financial Reporting": financialServices,
    "Tax": taxServices,
    "S/4 Finance Implementation": s4FinanceServices
  };

  const pricingSubItems = {
    "Financial Reporting": pricingFinancialServices,
    "Tax": pricingTaxServices,
    "S/4 Finance Implementation": pricingS4FinanceServices
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between p-6 py-8 lg:px-8 z-50"
      >
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
          <CustomDropdown title="Services" items={services} subItems={servicesSubItems} />
          <CustomDropdown title="Pricing" items={pricing} subItems={pricingSubItems} />
          <CustomDropdown title="More" items={additionalSections} subItems={{}} />

          <Link
            href="/training"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Training
          </Link>

          <Link
            href="/aboutus"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Blog
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
              <Link
                href="/login"
                className="text-sm py-2 px-4 font-semibold leading-6 text-gray-900 ml-8"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* ... (keep the existing mobile menu code) */}
      </Dialog>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </header>
  );
}
"use client";

import React from "react";
import { FaStar } from "react-icons/fa"; // Import FontAwesome icons

// Review data categorized
const reviewData = {
  "Tax Resolution Reviews": [
    {
      name: "Rachel M.",
      rating: 5,
      review:
        "ebotCPA saved me from the nightmare of dealing with the IRS! Their expertise and professionalism resolved my tax debt quickly and efficiently. Highly recommend!",
    },
    {
      name: "Mark K.",
      rating: 5,
      review:
        "ebotCPA's IRS resolution services were a game-changer. They navigated the complex process with ease, securing a favorable outcome. Their guidance and support were invaluable.",
    },
    {
      name: "Emily G.",
      rating: 5,
      review:
        "Facing an IRS audit was daunting, but ebotCPA's experts took charge and resolved the issue swiftly. Their knowledge and calming demeanor made the process stress-free.",
    },
    {
      name: "David L.",
      rating: 5,
      review:
        "ebotCPA's IRS resolution team worked tirelessly to reduce my tax liability. Their dedication and results exceeded expectations. I'm forever grateful!",
    },
    {
      name: "Karen T.",
      rating: 5,
      review:
        "ebotCPA demystified the IRS resolution process, providing clear communication and effective solutions. Their professionalism and empathy put me at ease. Highly recommended!",
    },
  ],
  "Bookkeeping Reviews": [
    {
      name: "Emily C.",
      rating: 5,
      review:
        "ebotCPA's bookkeeping services have streamlined our financial operations, freeing up time for growth initiatives. Accurate, efficient, and reliable!",
    },
    {
      name: "David K.",
      rating: 5,
      review:
        "Their bookkeeping expertise helped us identify and correct costly errors, saving us thousands. Thank you, ebotCPA!",
    },
    {
      name: "Rachel M.",
      rating: 5,
      review:
        "ebotCPA's bookkeeping team is responsive, knowledgeable, and detail-oriented. Our financial records have never been more organized!",
    },
    {
      name: "Mark S.",
      rating: 5,
      review:
        "We struggled with financial visibility until ebotCPA took over our bookkeeping. Now, we make informed decisions with confidence.",
    },
    {
      name: "Karen T.",
      rating: 5,
      review:
        "ebotCPA's bookkeeping services have reduced our financial stress, allowing us to focus on our core business. Excellent partnership!",
    },
  ],
  // Continue adding data for Accounting, Fractional CFO, Tax Planning, and Tax Compliance reviews
  "Accounting Reviews": [
    {
      name: "James L.",
      rating: 5,
      review:
        "ebotCPA's accounting expertise ensured our financial statements were accurate and compliant. Their guidance is invaluable!",
    },
    {
      name: "Emily G.",
      rating: 5,
      review:
        "Their accounting team identified areas for cost savings and optimized our financial processes. Impressive results!",
    },
    {
      name: "Michael T.",
      rating: 5,
      review:
        "ebotCPA's accounting services provided transparency and clarity, enabling better decision-making. Professional and knowledgeable!",
    },
    {
      name: "David L.",
      rating: 5,
      review:
        "We appreciate ebotCPA's proactive approach to accounting, always looking for ways to improve our financial performance.",
    },
    {
      name: "Rachel M.",
      rating: 5,
      review:
        "ebotCPA's accounting team is responsive, reliable, and expertly navigates complex financial issues. Trusted advisors!",
    },
  ],
  "Fractional CFO Reviews": [
    {
      name: "Mark K.",
      rating: 5,
      review:
        "ebotCPA's fractional CFO services brought strategic financial guidance to our table, driving growth and profitability.",
    },
    {
      name: "Emily C.",
      rating: 5,
      review:
        "Their CFO expertise helped us develop a comprehensive financial plan, aligning with our business goals.",
    },
    {
      name: "James L.",
      rating: 5,
      review:
        "ebotCPA's fractional CFO provided invaluable insights, identifying opportunities for cost reduction and revenue growth.",
    },
    {
      name: "Karen T.",
      rating: 5,
      review:
        "We leveraged ebotCPA's CFO expertise to navigate a critical financial transition. Expert guidance and peace of mind!",
    },
    {
      name: "David L.",
      rating: 5,
      review:
        "ebotCPA's fractional CFO services have become an integral part of our executive team, providing financial leadership and vision.",
    },
  ],
  "Tax Planning Reviews": [
    {
      name: "Emily C.",
      rating: 5,
      review: "ebotCPA's tax planning strategies saved us thousands in taxes. Their expertise is unparalleled!",
    },
    {
      name: "Mark K.",
      rating: 5,
      review:
        "Their proactive approach to tax planning ensured we took advantage of all eligible credits and deductions.",
    },
    {
      name: "Rachel M.",
      rating: 5,
      review: "ebotCPA's tax planning team helped us navigate complex tax laws, optimizing our financial position.",
    },
    {
      name: "David L.",
      rating: 5,
      review: "We appreciate ebotCPA's personalized tax planning, addressing our unique business needs.",
    },
    {
      name: "Karen T.",
      rating: 5,
      review:
        "ebotCPA's tax planning expertise freed us from tax worries, allowing us to focus on growth.",
    },
  ],
};

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={20} color={i < rating ? "#2b6cb0" : "#e0e0e0"} />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h1>

      {Object.keys(reviewData).map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reviewData[category].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <StarRating rating={review.rating} />
                <p className="mt-2 text-gray-700 italic">{review.review}</p>
                <p className="mt-4 text-gray-900 font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

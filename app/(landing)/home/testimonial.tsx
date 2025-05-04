import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "John Doe",
        role: "CEO at Example Corp",
        testimonial:
            "JustSmartShopping transformed the way I shop. The AI-powered product suggestions and price comparison are game changers!",
        rating: 5,
    },
    {
        name: "Jane Smith",
        role: "Product Manager at Tech Ltd",
        testimonial:
            "I love how easy it is to find the best deals. The personalized suggestions save me so much time and money.",
        rating: 4,
    },
    {
        name: "Alice Brown",
        role: "Designer at Creative Co",
        testimonial:
            "The AI assistant is a lifesaver. It helps me find products that perfectly match my preferences every time.",
        rating: 5,
    },
];

const TestimonialSection = () => {
    return (
        <div className="py-16 px-6 md:px-12  flex flex-col p-6 md:p-12 items-center gap-6 md:gap-12">

            <h1 className="text-xl md:text-4xl md:max-w-[650px] text-center font-semibold">
                Ce que nos utilisateurs disent
            </h1>

            {/* Testimonial Container */}
            <div className="w-full px-2 md:px-12 xl:px-20 2xl:px-40">
                <div
                    className="flex pb-6 no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory sm:overflow-visible sm:grid sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="snap-center bg-gray-50 w-full min-w-[260px] p-6 shadow-lg rounded-xl space-y-4 flex flex-col items-center"
                        >
                            <div className="flex justify-center">
                                <FaQuoteLeft className="text-gray-400 text-3xl"/>
                            </div>
                            <p className="text-gray-700 text-center italic">{testimonial.testimonial}</p>
                            <div className="flex justify-center items-center gap-1">
                                {Array.from({length: testimonial.rating}).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400"/>
                                ))}
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;

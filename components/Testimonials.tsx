import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const reviews = [
    {
        id: 1,
        text: "AiPodcastr is an exceptional platform for anyone interested in artificial intelligence. The podcast episodes cover a wide range of podcasts, from AI theory to real-world applications, with expert guests sharing invaluable insights...",
        author: "Founder of AIPodcastr",
        rating: 5,
        image: "https://avatars.githubusercontent.com/u/149306686?v=4"
    },
    {
        id: 2,
        text: "The website design is sleek, minimalistic, and user-friendly. Navigating through different podcasts is smooth, and the layout makes it easy to find relevant content. The use of colors is visually appealing and adds to the overall experience...",
        author: "Emma Johnson",
        rating: 4,
        image: "https://img.freepik.com/premium-photo/woman-stands-front-building-with-her-arms-crossed_862335-20782.jpg?ga=GA1.1.186633692.1706364820&semt=ais_hybrid-rr-similar"
    },
    {
        id: 3,
        text: "The variety of podcasts is impressive. Whether you're into deep technical dives or more casual discussions about AI's impact on society, there’s something for everyone. The interviews with industry leaders are particularly engaging...",
        author: "Michael Smith",
        rating: 5,
        image: "https://img.freepik.com/premium-photo/smiling-young-male-professional-standing-with-his-arms-crossed-making-eye-contact-against_951300-216.jpg?ga=GA1.1.186633692.1706364820&semt=ais_hybrid-rr-similar" // Add image URL
    }
];

const Testimonials = () => {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentReview]);

    const handlePrev = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleNext = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    return (
        <div>
            <section className="relative">
                {/* Background image */}
                {/* <div className="absolute inset-0 w-auto blur h-full bg-cover bg-center opacity-60 bg-[url('https://miro.medium.com/v2/resize:fit:1400/1*rdIw3X4gENs37giPHMJIig.png')]"></div> */}

                {/* Content */}
                <div className="relative items-center max-w-5xl mx-auto text-center py-10 px-4 sm:px-8">
                    <h2 className="font-sans italic text-lg text-white-1 mb-4">Our Customer Reviews</h2>
                    <h1 className="text-4xl font-serif text-gradient">What Our Clients Say</h1>

                    <div className="relative h-72">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`absolute inset-0 transition-opacity duration-700 transform scale-95 ${index === currentReview ? 'opacity-100 scale-100' : 'opacity-0'}`}
                            >
                                <div className="flex justify-center mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-2xl mb-6">{review.text}</p>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={review.image}
                                        alt={review.author}
                                        className="w-12 h-12 rounded-full mr-3"
                                    />
                                    <span className="font-medium text-yellow-50">{review.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 transition hover:scale-110"
                        aria-label="Previous Review"
                    >
                        <ChevronLeft className="w-auto text-gray-300 hover:text-scolor" />
                    </Button>
                    <Button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 transition hover:scale-110"
                        aria-label="Next Review"
                    >
                        <ChevronRight className="w-auto text-gray-300 hover:text-scolor" />
                    </Button>

                    {/* Indicator Dots */}
                    <div className="flex justify-center mt-6 gap-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentReview(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentReview ? 'bg-dark' : 'bg-light'}`}
                                aria-label={`Select review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
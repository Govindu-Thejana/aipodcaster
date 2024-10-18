import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Emma Johnson",
        username: "@emma_johnson",
        body: "Creating my podcast was a breeze! The AI voices are amazing!",
        img: "https://img.freepik.com/premium-photo/woman-stands-front-building-with-her-arms-crossed_862335-20782.jpg?ga=GA1.1.186633692.1706364820&semt=ais_hybrid-rr-similar",
    },
    {
        name: "Michael Smith",
        username: "@michael_smith",
        body: "The voice generation feature is a game changer. Love it!",
        img: "https://img.freepik.com/premium-photo/smiling-young-male-professional-standing-with-his-arms-crossed-making-eye-contact-against_951300-216.jpg?ga=GA1.1.186633692.1706364820&semt=ais_hybrid-rr-similar",
    },
    {
        name: "Pattrick",
        username: "@jack",
        body: "Amazing tool for podcasters! Free hosting is a huge plus!",
        img: "https://img.freepik.com/free-photo/man-wearing-waistcoat_1368-2886.jpg?semt=ais_hybrid",
    },
    {
        name: "Sophia",
        username: "@jill",
        body: "The thumbnail generator is so easy to use! Highly recommend!",
        img: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?semt=ais_hybrid",
    },
    {
        name: "William",
        username: "@john_doe",
        body: "Incredible platform! My podcasts have never sounded better!",
        img: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?semt=ais_hybrid",
    },
    {
        name: "Emma",
        username: "@Emma",
        body: "Engaging and informative! I’m hooked on the podcasts!",
        img: "https://img.freepik.com/free-photo/portrait-businesswoman-isolated-home_23-2148813223.jpg?semt=ais_hybrid",
    },
    {
        name: "Henry",
        username: "@jane_smith",
        body: "Every feature is user-friendly! I can't stop recommending it!",
        img: "https://img.freepik.com/free-photo/handsome-man-suit_144627-4069.jpg?semt=ais_hybrid",
    },
    {
        name: "Grace",
        username: "@jenny_lee",
        body: "Fantastic experience! Podcast creation has never been easier!",
        img: "https://img.freepik.com/free-photo/confident-young-woman-with-her-arms-crossed-looking-away_23-2148130373.jpg?semt=ais_hybrid",
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    body,
}: {
    img: string;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer border overflow-hidden rounded-xl  p-4",
                // light styles
                "border-/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-col bor">
                <div className="flex flex-row items-center gap-2">
                    <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                    </div>
                </div>
                <blockquote className="mt-2 text-base">{body}</blockquote>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative text-white-1 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
            <h2 className="font-sans italic text-lg text-white-1 mb-4">Our Customer Reviews</h2>
            <h1 className="text-4xl font-sans text-gradient mb-5">What Our Clients Say</h1>

            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}

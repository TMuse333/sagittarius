import { motion } from "framer-motion";

const HeroBannerAnimation = () => {
  const items = [
    "Attention-grabbing animations",
    "Clear value proposition",
    "Images of your business or logo",
    "Call to action",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-[5 font-bold mb-6 text-center">A HeroBanner Should Contain...</h1>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="text-4xl font-medium"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default HeroBannerAnimation;

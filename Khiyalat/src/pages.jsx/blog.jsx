import Header from "../Homepage/header";
import Footer from "../Homepage/footer";
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Thought Patterns with AI",
      excerpt: "Explore how Khiyalat's AI helps identify and analyze recurring thought patterns for better mental wellbeing.",
      date: "June 15, 2023",
      author: "Dr. Sarah Khan",
      category: "Cognitive Science"
    },
    {
      id: 2,
      title: "The Connection Between Emotions and Sleep",
      excerpt: "Learn how your emotional state affects sleep quality and how our tool can help improve your rest.",
      date: "July 2, 2023",
      author: "Dr. Michael Chen",
      category: "Sleep Health"
    },
    {
      id: 3,
      title: "Building Healthier Mental Habits",
      excerpt: "Practical techniques to reframe negative thoughts and develop positive cognitive patterns.",
      date: "August 10, 2023",
      author: "Amina Patel",
      category: "Self-Improvement"
    },
    {
      id: 4,
      title: "The Science Behind Emotional Support AI",
      excerpt: "How our technology provides compassionate responses that validate your feelings.",
      date: "September 5, 2023",
      author: "Dr. James Wilson",
      category: "Technology"
    },
    {
      id: 5,
      title: "Tracking Your Mental Health Progress",
      excerpt: "Using analytics to visualize your journey and celebrate small victories along the way.",
      date: "October 18, 2023",
      author: "Lisa Rodriguez",
      category: "Wellbeing"
    },
    {
      id: 6,
      title: "The Power of Community Support",
      excerpt: "How connecting with others who share similar experiences can accelerate healing.",
      date: "November 22, 2023",
      author: "David Kim",
      category: "Community"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Khiyalat <span className="text-red-500">Blog</span>
          </h2>
          <p className="text-xl md:text-2xl text-red-200 max-w-3xl mx-auto">
            Insights and research on mental wellbeing, AI technology, and personal growth
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/90 backdrop-blur-sm border border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
            >
              {/* Category label */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-xs font-semibold rounded-full z-10">
                {post.category}
              </div>

              <div className="p-6 h-full flex flex-col">
                {/* Meta information */}
                <div className="flex items-center space-x-4 text-red-300 text-sm mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-red-200 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors">
                  <span className="font-medium">Read more</span>
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-900/50 to-red-800/30 rounded-2xl p-8 border border-red-500/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-red-200 mb-6">
              Subscribe to our newsletter for mental wellbeing tips, product updates, and research findings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full bg-gray-800/70 text-white placeholder-red-300/70 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
const Blog = () => {
    return (
        <div>
            <Header />
            <BlogPage />
            <Footer />
        </div>
    )
}
export default Blog;
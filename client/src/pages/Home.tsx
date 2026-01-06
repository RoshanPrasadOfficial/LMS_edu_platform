import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useCourses } from "@/hooks/use-courses";
import { CourseCard, CourseCardSkeleton } from "@/components/CourseCard";
import { ArrowRight, BookOpen, Star, Award, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import { courses } from "@/lib/static-data";

export default function Home() {
  const isLoading = false;
  const error = null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center text-white max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm">
              <span className="text-accent font-bold text-sm tracking-wide uppercase">Unlock your potential</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Learn with Us,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Grow with Us.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Discover your potential with our expert-curated courses. Join thousands of students achieving their goals today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="accent" className="min-w-[200px] text-lg font-bold">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] text-lg font-bold border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-12 container-custom">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-2 font-display">Find your next course</h2>
            <p className="text-blue-100">Search through our catalog of high-quality educational content.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="w-full pl-10 pr-4 py-4 rounded-xl shadow-lg border-none focus:ring-2 focus:ring-accent focus:outline-none text-slate-900 placeholder:text-slate-400"
              />
              <Button className="absolute right-2 top-2 bottom-2" variant="accent">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 pb-24 container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 font-display mb-3">Our Popular Courses</h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Browse our wide range of courses and start learning today! Hand-picked by our experts.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {error ? (
          <div className="text-center py-20 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h3>
            <p className="text-red-500">We couldn't load the courses. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => <CourseCardSkeleton key={i} />)
              : courses?.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Courses
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
            Ready to start learning?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards your new career. It's free to get started.
          </p>
          <Button size="lg" variant="accent" className="text-lg px-12 py-6 rounded-xl font-bold">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

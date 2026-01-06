import { useCourse } from "@/hooks/use-courses";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ArrowLeft, Clock, Users, BookOpen, CheckCircle, PlayCircle, Lock } from "lucide-react";

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id);
  const { data: course, isLoading, error } = useCourse(courseId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-slate-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Course not found</h1>
          <p className="text-slate-500 mb-8">The course you are looking for does not exist or has been removed.</p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Course Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            {course.imageUrl && <img src={course.imageUrl} className="w-full h-full object-cover blur-sm" />}
        </div>
        <div className="container-custom relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-4">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Last updated Oct 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>1,234 students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* Floating Card for Desktop */}
            <div className="hidden md:block w-80 shrink-0">
               {/* This space intentionally left blank for layout, actual card is absolute positioned if we wanted complex layout, but sticking to simple flow for stability */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 flex flex-col lg:flex-row gap-12 -mt-10 relative z-20">
        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
            <h2 className="text-2xl font-bold font-display mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm">Understand core concepts of {course.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold font-display mb-6">Course Content</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((section) => (
                <div key={section} className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-50 p-4 font-bold text-slate-700 flex justify-between items-center">
                    <span>Section {section}: Introduction</span>
                    <span className="text-xs text-slate-500 font-normal">3 lectures • 15min</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                        <span className="text-slate-600 group-hover:text-primary">Welcome to the course</span>
                      </div>
                      <span className="text-xs text-slate-400">02:30</span>
                    </div>
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-slate-300" />
                        <span className="text-slate-600">Setting up your environment</span>
                      </div>
                      <span className="text-xs text-slate-400">05:15</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Sticky Card */}
        <div className="lg:w-96 shrink-0">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden sticky top-24">
            <div className="h-48 bg-slate-100 relative">
               {course.imageUrl ? (
                  <img src={course.imageUrl} className="w-full h-full object-cover" alt={course.title} />
               ) : (
                  <div className="flex items-center justify-center h-full text-slate-300">
                     <BookOpen className="w-16 h-16" />
                  </div>
               )}
               <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer">
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-lg opacity-90" />
               </div>
            </div>
            
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2 font-display">
                {course.isFree || course.price === 0 ? "Free" : `$${course.price}`}
              </div>
              <p className="text-slate-500 text-sm mb-6 line-through decoration-slate-400">
                {course.isFree || course.price === 0 ? "$49.99" : `$${course.price + 50}`}
              </p>

              <div className="space-y-3 mb-6">
                <Button className="w-full font-bold text-lg h-12">Enroll Now</Button>
                <Button variant="outline" className="w-full">Add to Wishlist</Button>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <p className="font-bold text-slate-900">This course includes:</p>
                <div className="flex items-center gap-3">
                  <PlayCircle className="w-4 h-4 text-slate-400" />
                  <span>14 hours on-demand video</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>3 downloadable resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "wouter";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { type Course } from "@shared/schema";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {course.imageUrl ? (
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-slate-300" />
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
          {course.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-display text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
          {course.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 mb-6 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>8 Weeks</span>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Price</span>
            <div className="text-lg font-bold text-primary">
              {course.isFree || course.price === 0 ? "Free" : `₹${course.price}`}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Link href={`/courses/${course.id}`}>
              <Button variant="outline" size="sm" className="h-9">
                Details
              </Button>
            </Link>
            <Button size="sm" className="h-9">
              Enroll <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-[450px]">
      <div className="h-48 bg-slate-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-slate-200 rounded w-3/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-slate-200 rounded w-2/3 animate-pulse" />
        </div>
        <div className="h-10 bg-slate-200 rounded mt-auto animate-pulse" />
      </div>
    </div>
  );
}

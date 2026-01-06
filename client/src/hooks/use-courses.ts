import { courses } from "@/lib/static-data";
import { type Course } from "@shared/schema";

export function useCourses() {
  return {
    data: courses as Course[],
    isLoading: false,
    error: null,
  };
}

export function useCourse(id: number) {
  const course = courses.find((c) => c.id === id);
  return {
    data: course as Course,
    isLoading: false,
    error: null,
  };
}

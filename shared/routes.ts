import { z } from 'zod';

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export const api = {
  courses: {
    list: {
      path: '/api/courses'
    },
    get: {
      path: '/api/courses/:id'
    }
  }
};

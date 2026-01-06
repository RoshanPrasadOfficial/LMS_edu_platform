# EduPlatform - Online Learning Platform

## Overview

EduPlatform is an online education platform built with a React frontend and Express backend. The application displays courses, allows users to browse course listings, and view detailed course information. It follows a monorepo structure with shared types between client and server, using TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Build Tool**: Vite with hot module replacement

Key frontend directories:
- `client/src/pages/` - Route components (Home, CourseDetails, NotFound)
- `client/src/components/` - Reusable UI components (Navbar, Footer, CourseCard, Button)
- `client/src/components/ui/` - shadcn/ui components
- `client/src/hooks/` - Custom React hooks (use-courses, use-toast, use-mobile)
- `client/src/lib/` - Utilities and static data

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Structure**: RESTful endpoints defined in `shared/routes.ts`
- **Build Process**: esbuild for server bundling, Vite for client

Key backend directories:
- `server/index.ts` - Express app setup and middleware
- `server/routes.ts` - API route registration
- `server/db.ts` - Database connection using node-postgres Pool
- `server/storage.ts` - Storage utilities (currently empty)
- `server/vite.ts` - Development server with Vite integration
- `server/static.ts` - Static file serving for production

### Shared Code
- `shared/schema.ts` - Drizzle database schema definitions (currently empty, to be populated)
- `shared/routes.ts` - API route contracts with Zod validation schemas

### Design Patterns
- **Type-safe API**: Zod schemas validate API responses, shared between frontend and backend
- **Path aliasing**: `@/` maps to client/src, `@shared/` maps to shared directory
- **CSS Variables**: Theme colors defined in CSS custom properties for easy theming
- **Component composition**: shadcn/ui pattern with Radix primitives and Tailwind styling

### Development vs Production
- Development: Vite dev server with HMR, proxied through Express
- Production: Static files served from `dist/public`, server bundled to `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe SQL query builder with schema migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Libraries
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library
- **class-variance-authority**: Component variant management

### Data Fetching
- **TanStack Query**: Server state management with caching
- **Zod**: Schema validation for API responses

### Build Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript bundler for server code
- **TypeScript**: Type checking across the entire codebase

### Fonts
- Google Fonts: Montserrat (display), Open Sans (body), DM Sans, Fira Code, Geist Mono
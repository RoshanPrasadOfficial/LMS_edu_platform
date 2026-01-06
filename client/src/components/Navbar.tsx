import { Link } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
            <GraduationCap className="w-8 h-8" />
            <span>EduPlatform</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-semibold hover:text-white/80 transition-colors">Faculty</a>
            <a href="#" className="font-semibold hover:text-white/80 transition-colors">Event</a>
            <div className="h-6 w-px bg-white/20 mx-2" />
            <Button variant="white" size="sm" className="font-bold text-primary">
              Login
            </Button>
            <Button variant="accent" size="sm" className="font-bold">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="container-custom py-6 flex flex-col space-y-4">
              <a href="#" className="font-semibold text-lg hover:text-white/80">Faculty</a>
              <a href="#" className="font-semibold text-lg hover:text-white/80">Event</a>
              <hr className="border-white/10" />
              <div className="flex gap-4">
                <Button variant="white" className="flex-1 font-bold">Login</Button>
                <Button variant="accent" className="flex-1 font-bold">Register</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client" 

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3 bg-purple-700 rounded-full shadow-xl w-full max-w-4xl relative z-10 border border-purple-600">
        
        <div className="flex items-center">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-8 w-8 bg-white rounded-xl flex items-center justify-center shadow-md">
              <svg 
                className="w-4 h-4 text-purple-700" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              iTask<span className="text-purple-300">.</span>
            </span>
          </motion.div>
        </div>
        
       
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "My Tasks", "Analytics"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`} 
              className="relative text-sm text-purple-100 hover:text-white transition-colors font-medium pb-1 group"
            >
              {item}
            
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

       
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium text-purple-100 hover:text-white transition-colors px-3 py-2">
            Log In
          </button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-purple-700 bg-white rounded-full hover:bg-purple-50 transition-colors shadow-sm"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        <motion.button 
          className="md:hidden flex items-center p-1 rounded-lg hover:bg-purple-600 transition-colors" 
          onClick={toggleMenu} 
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-4 top-24 bg-purple-800 border border-purple-600 rounded-3xl p-6 md:hidden shadow-2xl z-50"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-4">
              {["Home", "My Tasks", "Analytics"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`} 
                  className="text-base text-purple-100 hover:text-white font-medium py-2 border-b border-purple-700/50" 
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}

              <div className="flex flex-col gap-2 pt-4">
                <button 
                  className="w-full text-center font-medium text-purple-100 hover:text-white py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  Log In
                </button>
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 text-base font-semibold text-purple-700 bg-white rounded-full hover:bg-purple-50 transition-colors shadow-md"
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
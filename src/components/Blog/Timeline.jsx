import { useState } from "react";
import blogs from "../../constants/blogs.json";
import { TbArrowRightToArc, TbArrowLeftToArc } from "react-icons/tb";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Timeline() {
  blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]?.id || null);
  const currentBlog = blogs.find((blog) => blog.id === selectedBlog);
  const [side, setSide] = useState(false);

  return (
    // Changed to font-mono to match the rest of the site and removed dark backgrounds
    <div
      className="w-full min-h-screen bg-[#fafafa] font-mono text-slate-900 flex sm:flex-row flex-col p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6"
      id="timeline"
    >
      {/* Sidebar - Solid White Background, Heavy Border */}
      <motion.div
        className={`bg-white sm:overflow-y-scroll max-sm:overflow-x-scroll no-scrollbar sm:p-6 p-4 rounded-xl max-sm:flex max-sm:flex-row max-sm:gap-4 ${side ? "sm:w-24" : "sm:w-80"} w-full border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all duration-500 flex flex-col`}
      >
        {/* Header Area */}
        <div className="max-sm:hidden mb-6 pb-4 border-b-4 border-slate-900 flex flex-row justify-between items-center px-1">
          <AnimatePresence mode="wait">
            {side ? (
              <motion.div
                key="sidebar-line"
                initial={{ opacity: 1, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 1, rotate: -90 }}
                transition={{ duration: 0.1 }}
              >
                <TbArrowRightToArc
                  size={30}
                  className="cursor-pointer text-slate-900 hover:text-red-500 transition-colors"
                  onClick={() => setSide((prev) => !prev)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="sidebar-fill"
                initial={{ opacity: 1, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 1, rotate: 90 }}
                transition={{ duration: 0.1 }}
              >
                <TbArrowLeftToArc
                  size={30}
                  className="cursor-pointer text-slate-900 hover:text-red-500 transition-colors"
                  onClick={() => setSide((prev) => !prev)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            animate={{ opacity: side ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            // Prevent the logo from blocking clicks when sidebar is collapsed
            className={side ? "pointer-events-none" : "pointer-events-auto"}
          >
            <Link to="/" className="flex items-center group">
              {/* Filter added so logo matches the stark aesthetic */}
              <img
                src={"/favicon.ico"}
                alt="logo"
                className="h-8 object-contain mr-1 group-hover:scale-110 transition-all"
              />
            </Link>
          </motion.div>
        </div>

        {/* Blog Links - Brutalist Buttons */}
        <div className="flex flex-col gap-3">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`p-3 sm:p-4 border-4 rounded-lg cursor-pointer max-sm:min-w-[200px] transition-all font-bold uppercase tracking-widest text-xs sm:text-sm ${
                selectedBlog === blog.id
                  ? "bg-red-500 border-slate-900 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] translate-y-[-2px]"
                  : "bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200 hover:border-slate-900 hover:text-slate-900"
              }`}
              onClick={() =>
                setSelectedBlog(selectedBlog === blog.id ? null : blog.id)
              }
            >
              {side ? (
                <div className="text-center font-black">{index + 1}</div>
              ) : (
                <div className="truncate">{blog.title}</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main content area - Solid Yellow/White Box depending on state */}
      <div
        className={`flex-1 sm:p-12 p-6 rounded-xl overflow-y-auto no-scrollbar border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] ${currentBlog ? "bg-white" : "bg-[#facc15]"}`}
      >
        {currentBlog ? (
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {/* Stark Header Style */}
            <div className="border-b-4 border-slate-900 pb-6 mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                {currentBlog.title}
              </h2>
              <p className="text-red-500 font-bold tracking-widest uppercase text-sm sm:text-base">
                {currentBlog.date}
              </p>
            </div>

            {/* Content Body */}
            <div className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed font-medium prose prose-slate max-w-none">
              {currentBlog.content}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-900">
            <span className="font-black text-4xl sm:text-6xl uppercase tracking-tighter mix-blend-overlay opacity-50">
              Select A Post
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;

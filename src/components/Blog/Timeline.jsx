import { useState } from 'react'
import blogs from '../../constants/blogs.json'
import { RiSideBarLine, RiSideBarFill } from "react-icons/ri";
import { TbArrowRightToArc, TbArrowLeftToArc, } from "react-icons/tb";

import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import { motion, AnimatePresence } from 'framer-motion';

function Timeline() {
    blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    const [selectedBlog, setSelectedBlog] = useState(blogs[0]?.id || null);
    const currentBlog = blogs.find(blog => blog.id === selectedBlog);
    const [side, setSide] = useState(false);

    return (
        <div className='w-full h-screen bg-blog-pattern bg-cover bg-no-repeat flex sm:flex-row flex-col' id="timeline">
            {/* Sidebar with dates */}
            <motion.div 
                className={`backdrop-blur-xl sm:overflow-y-scroll max-sm:overflow-x-scroll no-scrollbar sm:p-4 p-1 bg-primary/40 sm:my-6 sm:ml-2 sm:rounded-3xl max-sm:flex max-sm:flex-row max-sm:gap-4 ${side?"sm:w-20":"sm:w-72"} w-full transition-all duration-700`}

                
            >
                <div className='max-sm:hidden mb-4 flex flex-row justify-between items-center  px-1'>
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
                                    size={35} 
                                    className="cursor-pointer" 
                                    onClick={() => setSide(prev => !prev)}
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
                                    size={35} 
                                    className="cursor-pointer" 
                                    onClick={() => setSide(prev => !prev)}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        animate={{ opacity: side ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="logo" className="h-7 object-cover mr-1" />
                        </Link>
                    </motion.div>
                </div>

                {blogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className={`sm:p-3 p-2 rounded-xl my-2 cursor-pointer max-sm:min-w-64 text-ellipsis ${
                            selectedBlog === blog.id
                                ? 'bg-primary/70 border-l-4 text-white border-white'
                                : 'bg-primary/20 hover:bg-primary/60 text-indigo-300'
                        }`}
                        onClick={() => setSelectedBlog(selectedBlog === blog.id ? null : blog.id)}
                    >
                        {side ? (
                            <div className='text-center'>{index}</div>
                        ) : (
                            <div className="truncate">{blog.title}</div>
                        )}
                    </div>
                ))}
            </motion.div>

            {/* Main content area */}
            <div className='flex-1 backdrop-blur-2xl sm:p-10 p-4 sm:mx-8 mx-4 sm:my-6 my-4 rounded-3xl overflow-y-auto bg-primary/40 no-scrollbar'>
                {currentBlog ? (
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-4xl text-center font-bold text-indigo-200 mb-4'>
                            {currentBlog.date}
                        </h2>
                        <div className='text-indigo-200/90 text-lg leading-relaxed'>
                            {currentBlog.content}
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-full text-white/50'>
                        Select a blog to view
                    </div>
                )}
            </div>
        </div>
    );
}

export default Timeline;

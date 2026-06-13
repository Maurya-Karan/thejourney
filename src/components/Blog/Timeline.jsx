import { useState, useEffect } from "react";
import blogs from "../../constants/blogs.json";
import { TbArrowRightToArc, TbArrowLeftToArc } from "react-icons/tb";

import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";

SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("c", c);
SyntaxHighlighter.registerLanguage("java", java);

function Timeline() {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const [side, setSide] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const urlPostId = searchParams.get("post");
  const selectedBlogId = urlPostId ? parseInt(urlPostId) : sortedBlogs[0]?.id;

  const currentBlog = sortedBlogs.find((blog) => blog.id === selectedBlogId);

  const [markdownContent, setMarkdownContent] = useState("");
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  useEffect(() => {
    if (!currentBlog || !currentBlog.contentUrl) return;

    const fetchContent = async () => {
      setIsLoadingContent(true);
      try {
        const response = await fetch(
          `${currentBlog.contentUrl}?t=${new Date().getTime()}`,
        );
        if (!response.ok) throw new Error("Failed to fetch content");

        let rawMarkdown = await response.text();
        setMarkdownContent(rawMarkdown);
      } catch (error) {
        setMarkdownContent(
          "## Error\nDocument retrieval failed. Please check the network connection.",
        );
      } finally {
        setIsLoadingContent(false);
      }
    };

    fetchContent();
  }, [currentBlog]);

  const handleBlogClick = (id) => {
    if (selectedBlogId !== id) {
      setSearchParams({ post: id });
    }
  };

  // --- MACRO PHYSICS ---
  const bootSpring = { type: "spring", bounce: 0.2, duration: 0.5 };

  // --- MICRO PHYSICS ---
  const readingEase = [0.22, 1, 0.36, 1];

  const varDrawerLeft = {
    hidden: { x: -80, opacity: 0 },
    visible: (customDelay) => ({
      x: 0,
      opacity: 1,
      transition: { ...bootSpring, delay: customDelay },
    }),
  };

  return (
    <div
      className="w-full h-screen font-mono text-slate-900 flex flex-col sm:flex-row p-2 sm:p-6 lg:p-8 gap-4 sm:gap-6 overflow-hidden"
      id="timeline"
    >
      {/* 1. SIDEBAR */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={varDrawerLeft}
        custom={0.01}
        className={`bg-white shrink-0 sm:h-full overflow-x-auto sm:overflow-y-auto no-scrollbar sm:p-6 p-3 rounded-xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all duration-500 flex sm:flex-col flex-row items-center sm:items-stretch gap-3 ${side ? "sm:w-24" : "sm:w-80"} w-full`}
      >
        <div className="hidden sm:flex mb-6 pb-4 border-b-4 border-slate-900 flex-row justify-between items-center px-1">
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
            className={side ? "pointer-events-none" : "pointer-events-auto"}
          >
            <Link to="/" className="flex items-center group">
              <img
                src={"/favicon.ico"}
                alt="logo"
                className="h-8 object-contain mr-1 group-hover:scale-110 transition-all"
              />
            </Link>
          </motion.div>
        </div>

        <Link
          to="/"
          className="sm:hidden shrink-0 bg-slate-900 p-2 rounded-md border-2 border-slate-900"
        >
          <img
            src={"/favicon.ico"}
            alt="logo"
            className="h-6 w-6 object-contain invert"
          />
        </Link>

        <div className="flex sm:flex-col flex-row gap-3">
          {sortedBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`p-2 sm:p-4 border-4 rounded-lg cursor-pointer whitespace-nowrap sm:whitespace-normal transition-all font-bold uppercase tracking-widest text-xs sm:text-sm flex-shrink-0 ${
                selectedBlogId === blog.id
                  ? "bg-red-500 border-slate-900 text-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] sm:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] sm:translate-y-[-2px]"
                  : "bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200 hover:border-slate-900 hover:text-slate-900"
              }`}
              onClick={() => handleBlogClick(blog.id)}
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

      {/* 2. MAIN CONTENT WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ...bootSpring, delay: 0.1 },
        }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.2 } }}
        className={`flex-1 relative h-full sm:p-12 p-6 rounded-xl overflow-y-auto no-scrollbar border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]  ${currentBlog ? "bg-white" : "bg-[#facc15]"}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        {currentBlog ? (
          <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-20 sm:pb-0 relative z-10">
            <div className="border-b-4 border-slate-900 pb-6 mb-6 mt-4 sm:mt-0">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-tight">
                {currentBlog.title}
              </h2>
              <p className="text-red-500 font-bold tracking-widest uppercase text-xs sm:text-sm">
                {currentBlog.date}
              </p>
            </div>

            {/* 3. DYNAMIC CONTENT SWAP */}
            <AnimatePresence mode="wait">
              {isLoadingContent ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <div className="animate-pulse flex flex-col gap-5 mt-4">
                    <div className="h-4 bg-slate-200 border-2 border-slate-300 w-full rounded"></div>
                    <div className="h-4 bg-slate-200 border-2 border-slate-300 w-11/12 rounded"></div>
                    <div className="h-4 bg-slate-200 border-2 border-slate-300 w-4/5 rounded"></div>
                    <div className="h-32 bg-slate-100 border-4 border-slate-300 w-full mt-4 mb-4 shadow-[4px_4px_0px_0px_rgba(203,213,225,1)]"></div>
                    <div className="h-4 bg-slate-200 border-2 border-slate-300 w-full rounded"></div>
                    <div className="h-4 bg-slate-200 border-2 border-slate-300 w-5/6 rounded"></div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`content-${currentBlog.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7, ease: readingEase }}
                  className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed font-medium prose prose-slate max-w-none"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // eslint-disable-next-line no-unused-vars
                      img: ({ node, ...props }) => {
                        let imageSrc = props.src;
                        if (imageSrc && !imageSrc.startsWith("http")) {
                          const baseUrl = currentBlog.contentUrl.replace(
                            "content.md",
                            "",
                          );
                          imageSrc = baseUrl + imageSrc.replace(/^\.\//, "");
                        }
                        return (
                          <div className="border-4 border-slate-900 bg-slate-100 p-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] my-6">
                            <img
                              {...props}
                              src={imageSrc}
                              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                        );
                      },
                      // eslint-disable-next-line no-unused-vars
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <div className="border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] my-6 rounded-lg overflow-hidden bg-[#1d1f21]">
                            <div className="w-full border-b-4 border-slate-900 p-2 flex gap-2 items-center bg-slate-800">
                              <div className="w-3 h-3 rounded-full bg-red-500 border border-slate-900"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500 border border-slate-900"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500 border border-slate-900"></div>
                              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest ml-2">
                                {match[1]}
                              </span>
                            </div>
                            {/* Fixed react/no-children-prop by nesting children */}
                            <SyntaxHighlighter
                              {...props}
                              style={atomDark}
                              language={match[1]}
                              PreTag="div"
                              customStyle={{
                                margin: 0,
                                padding: "1.5rem",
                                background: "transparent",
                                fontSize: "0.875rem",
                              }}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code
                            {...props}
                            className="bg-slate-200 text-red-500 font-bold px-1 py-0.5 rounded border border-slate-300"
                          >
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-900 relative z-10">
            <span className="font-black text-3xl sm:text-6xl uppercase tracking-tighter mix-blend-overlay opacity-50 text-center">
              Select A Post
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Timeline;

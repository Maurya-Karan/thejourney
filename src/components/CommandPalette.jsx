import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommandPalette = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // --- PALETTE COMMANDS ---
  const commands = [
    { name: "Go to About", action: () => scrollTo("about"), icon: "❯" },
    { name: "Go to Tech Stack", action: () => scrollTo("tech"), icon: "❯" },
    { name: "Go to Projects", action: () => scrollTo("work"), icon: "❯" },
    { name: "Go to Contact", action: () => scrollTo("contact"), icon: "❯" },
    {
      name: "Access System Logs (Blog)",
      action: () => {
        window.location.href = "/blogs"; // Hard redirect to your separate page
      },
      icon: "↗", // Use an 'up-right arrow' icon to signify leaving the current app
    },
    {
      name: "Download Resume",
      action: () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // Ensure the path matches!
        link.download = "KaranMaurya_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsPaletteOpen(false); // Close the palette after clicking
      },
      icon: "↓",
    },

    {
      name: "Copy Email Address",
      action: () => {
        navigator.clipboard.writeText("karanmaurya802@gmail.com");
        setIsPaletteOpen(false);
      },
      icon: "⎘",
    },
  ];

  // --- LOGIC: COMMAND PALETTE (Ctrl+K) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open palette on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
      // Close palette on Escape
      if (e.key === "Escape") {
        setIsPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Clear search query when palette closes
  useEffect(() => {
    if (!isPaletteOpen) {
      setTimeout(() => setSearchQuery(""), 200); // Slight delay for smooth exit animation
    }
  }, [isPaletteOpen]);

  const scrollTo = (id) => {
    setIsPaletteOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <AnimatePresence>
      {isPaletteOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-slate-900/50 backdrop-blur-sm p-4"
          onClick={() => setIsPaletteOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing it
            className="w-full max-w-xl bg-slate-800 rounded-xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden font-mono flex flex-col"
          >
            {/* Palette Header / Input */}
            <div className="flex items-center gap-3 p-4 border-b-4 border-slate-900 bg-slate-900">
              <span className="text-[#3b82f6] font-bold text-lg">❯</span>
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white placeholder-slate-500 caret-[#facc15]"
              />
              <div className="flex gap-1">
                <kbd className="px-2 py-1 bg-slate-800 rounded border-2 border-slate-700 text-[10px] font-black text-slate-400">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Command List */}
            <div className="max-h-[40vh] overflow-y-auto p-2 scrollbar-hide">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={idx}
                    onClick={cmd.action}
                    className="w-full flex items-center gap-3 p-3 text-left text-slate-300 hover:bg-slate-700 hover:text-white group transition-colors rounded-lg"
                  >
                    <span className="text-slate-500 group-hover:text-[#22c55e] transition-colors">
                      {cmd.icon}
                    </span>
                    <span className="font-bold">{cmd.name}</span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-slate-500 text-xs">
                  No commands found.
                </div>
              )}
            </div>

            {/* Palette Footer */}
            <div className="p-2 bg-slate-900 flex justify-between items-center text-[10px] text-slate-500 border-t-2 border-slate-800">
              <span>System Protocol Palette</span>
              <span>karan.sys_kernel</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

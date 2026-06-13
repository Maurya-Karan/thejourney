import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// IMPORT YOUR LOCAL DATABASE
import blogsData from "../constants/blogs.json";

import photo2 from "../assets/karan3.png";

// THE DYNAMIC LOG FETCHER COMPONENT
const LiveLogFetcher = () => {
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Process the JSON data to find the newest post

    const sortedBlogs = [...blogsData].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    const latestPost = sortedBlogs[0];

    // 2. Simulate a brief network delay for the terminal aesthetic
    setTimeout(() => {
      setLog({
        title: latestPost.title,
        url: `/blogs`,
        date: latestPost.date,
      });
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <span className="text-[#facc15] animate-pulse">
        Pinging local database...
      </span>
    );
  }

  return (
    <div className="flex flex-col gap-2 text-slate-300 mt-1">
      <span className="text-[#facc15] font-bold border-b border-slate-700 w-max pr-4 mb-1">
        --- LATEST SYSTEM LOG ---
      </span>
      <a
        href={log.url}
        className="hover:text-[#22c55e] transition-colors group flex items-center gap-2"
      >
        <span className="text-[#3b82f6]">❯</span>
        <span className="group-hover:underline">{log.title}</span>
        <span className="text-slate-500 text-[10px] ml-2 font-mono">
          [{log.date}]
        </span>
      </a>
      <span className="text-slate-500 italic text-xs mt-1">
        Run <span className="text-[#3b82f6] font-bold">ssh blogs</span> to
        access full repository.
      </span>
    </div>
  );
};

const Terminal = () => {
  const [history, setHistory] = useState([
    { cmd: "", output: "SysOS v2.0.4 initialized. System optimal." },
    {
      cmd: "",
      output:
        'Type "help" for a list of available commands, or press Ctrl+K for global telemetry.',
    },
  ]);
  const [input, setInput] = useState("");
  const [pwd, setPwd] = useState("~");

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  // HELPER: Smooth scroll to page sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return <span className="text-[#22c55e]">Navigating to {id}...</span>;
    }
    return (
      <span className="text-[#ef4444]">
        Error: Section &apos;{id}&apos; not found in DOM.
      </span>
    );
  };

  const COMMANDS = {
    help: () => (
      <div className="text-slate-400 flex flex-col gap-1 mt-1">
        <div className="text-[#facc15] font-bold text-[10px] mb-1 border-b border-slate-700 w-max pr-4">
          --- NAVIGATION ---
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">about</span> - Go
          to About section
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">tech</span> - Go to
          Tech Stack
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">work</span> - Go to
          Projects/Work
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">contact</span> - Go
          to Contact form
        </div>

        <div className="text-[#facc15] font-bold text-[10px] mt-2 mb-1 border-b border-slate-700 w-max pr-4">
          --- SYSTEM ---
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">whoami</span> -
          Display user profile
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">projects</span> -
          Output development targets
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">resume</span> -
          Download executable binary (PDF)
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">ls</span> - List
          directory contents
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">cat [file]</span>-
          Read file contents
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">history</span> -
          Display command history
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">clear</span> -
          Clear terminal output
        </div>

        <div className="text-[#facc15] font-bold text-[10px] mt-2 mb-1 border-b border-slate-700 w-max pr-4">
          --- REMOTE ---
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">logs</span> - Fetch
          latest system logs (Blog)
        </div>
        <div>
          <span className="text-[#3b82f6] w-24 inline-block">ssh [host]</span> -
          Connect to remote server (try &apos;ssh blogs&apos;)
        </div>
      </div>
    ),

    // --- DIRECT PAGE NAVIGATION COMMANDS ---
    about: () => scrollToSection("about"),
    tech: () => scrollToSection("tech"),
    work: () => scrollToSection("work"),
    contact: () => scrollToSection("contact"),

    whoami: () => (
      <div className="text-slate-300">
        <p className="text-white font-bold mb-1">
          Karan Maurya{" "}
          <span className="text-slate-500 font-normal">[ID: 24MCA0260]</span>
        </p>
        <p>
          Systems Engineer & MCA Student. Advocate for the Linux ecosystem and
          minimalist digital environments.
        </p>
      </div>
    ),

    projects: () => (
      <div className="flex flex-col gap-3 text-slate-300">
        <div>
          <span className="text-[#22c55e] font-bold">
            ❯ Distinguishability-based Structural Log Parsing
          </span>
          <p className="ml-4 text-slate-400">
            Go-based framework for structural anomaly detection.
          </p>
        </div>
      </div>
    ),

    ls: () => (
      <div className="flex gap-4 text-[#3b82f6] font-bold">
        <span>src/</span>
        <span>public/</span>
        <span className="text-slate-300 font-normal">resume.pdf</span>
        <span className="text-emerald-400">profile.jpg</span>
      </div>
    ),

    // ... existing commands ...

    cat: (args) => {
      if (args.length === 0)
        return (
          <span className="text-[#ef4444]">cat: missing file operand</span>
        );
      const file = args[0].toLowerCase();

      if (file === "resume.pdf") {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "KaranMaurya_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return (
          <span className="text-[#22c55e]">
            Downloading binary: KaranMaurya_Resume.pdf...
          </span>
        );
      }

      // NEW: The Photo Easter Egg
      if (file === "profile.jpg" || file === "./profile.jpg") {
        return (
          <div className="flex flex-col gap-3 mt-2 mb-2">
            <div className="flex flex-col text-[10px] text-[#facc15] font-bold">
              <span>cat: warning: profile.jpg is a binary file.</span>
              <span className="animate-pulse">
                Initiating X11 frame buffer override to render GUI element...
              </span>
            </div>

            {/* The Brutalist Image Frame */}
            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 3.5, ease: "linear", type: "tween" }}
              className="w-48 h-48 sm:w-64 sm:h-64 border-4 border-slate-700 bg-slate-900 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]  transition-transform duration-300"
            >
              <img
                src={photo2} // Use the imported variable here!
                alt="Karan Maurya"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <span className="text-[#22c55e] text-[10px] uppercase">
              Render complete.
            </span>
          </div>
        );
      }

      return (
        <span className="text-[#ef4444]">
          cat: {file}: No such file or directory
        </span>
      );
    },

    // ALIAS: In case they use 'open' or 'feh' (Linux image viewer) instead of 'cat'
    open: (args) => COMMANDS.cat(args),
    feh: (args) => COMMANDS.cat(args),

    // NEW: The direct 'resume' prompt
    resume: () => {
      return (
        <div className="flex flex-col gap-2 text-slate-300">
          <span>
            Found executable binary:{" "}
            <span className="text-[#3b82f6]">resume.pdf</span>
          </span>
          <span className="text-slate-400">
            Do you want to download this file? (y/n)
          </span>
          <div className="flex gap-4 mt-1">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf"; // Make sure your PDF is in the 'public' folder!
                link.download = "KaranMaurya_Resume.pdf";
                link.click();
              }}
              className="px-3 py-1 bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e] hover:bg-[#22c55e] hover:text-slate-900 transition-colors"
            >
              [Y] Download
            </button>
            <button
              onClick={() => {
                // We can't easily push a new line to history from inside a button click without passing the setter,
                // so we just visually dismiss or do nothing.
                alert("Download aborted.");
              }}
              className="px-3 py-1 bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444] hover:bg-[#ef4444] hover:text-white transition-colors"
            >
              [N] Cancel
            </button>
          </div>
        </div>
      );
    },

    ssh: (args) => {
      if (args.length === 0) {
        return (
          <div className="flex flex-col text-[#ef4444]">
            <span>ssh: missing hostname</span>
            <span className="text-slate-400 mt-1">Usage: ssh [hostname]</span>
            <span className="text-slate-400">
              Known hosts:{" "}
              <span className="text-[#3b82f6] font-bold">blogs</span>
            </span>
          </div>
        );
      }

      const target = args[0].toLowerCase();

      if (target === "blogs") {
        setTimeout(() => (window.location.href = "/blogs"), 1200);
        return (
          <div className="flex flex-col text-[#22c55e]">
            <span>Resolving hostname {target}...</span>
            <span>Establishing secure connection via RSA...</span>
            <span className="animate-pulse mt-1 text-[#facc15]">
              Handshake successful. Redirecting terminal...
            </span>
          </div>
        );
      }

      return (
        <div className="flex flex-col text-[#ef4444]">
          <span>
            ssh: Could not resolve hostname {target}: Name or service not known
          </span>
          <span className="text-slate-400 mt-1">
            Hint: Try &apos;ssh blogs&apos;
          </span>
        </div>
      );
    },

    logs: () => <LiveLogFetcher />,

    override: () => {
      // Broadcast the breach to the entire application
      window.dispatchEvent(new CustomEvent("system-breach"));

      // Auto-recover terminal text after 5 seconds
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            cmd: "",
            output: (
              <span className="text-[#22c55e] font-bold">
                System reboot successful. Protocols restored.
              </span>
            ),
          },
        ]);
      }, 5000);

      return (
        <span className="text-[#ef4444] font-black animate-pulse">
          CRITICAL: GLOBAL OVERRIDE INITIATED...
        </span>
      );
    },

    cd: (args) => {
      if (args.length === 0 || args[0] === "~") {
        setPwd("~");
        return "";
      }
      if (args[0] === "..") {
        setPwd("~");
        return "";
      }
      const validDirs = ["src", "public", "projects", "bin"];
      const target = args[0].replace("/", "");

      if (validDirs.includes(target)) {
        setPwd(`~/${target}`);
        return "";
      }
      return (
        <span className="text-[#ef4444]">
          cd: {args[0]}: No such file or directory
        </span>
      );
    },

    pwd: () => (
      <span className="text-slate-300">/home/guest/{pwd.replace("~", "")}</span>
    ),

    history: () => {
      const typedCommands = history.filter((h) => h.cmd !== "");
      return (
        <div className="flex flex-col text-slate-400">
          {typedCommands.map((h, i) => (
            <span key={i}>
              <span className="text-slate-600 mr-4">{i + 1}</span> {h.cmd}
            </span>
          ))}
        </div>
      );
    },

    curl: (args) => {
      if (args.length === 0)
        return (
          <span className="text-[#ef4444]">
            curl: try &apos;curl --help&apos; for more information
          </span>
        );
      const endpoint = args[0].toLowerCase();
      if (
        endpoint === "karan.api/status" ||
        endpoint === "localhost:8080/health"
      ) {
        return (
          <div className="text-[#22c55e] flex flex-col gap-1">
            <span>{"{"}</span>
            <span className="ml-4">
              &quot;status&quot;: &quot;online&quot;,
            </span>
            <span className="ml-4">
              &quot;coffee_level&quot;: &quot;critical&quot;,
            </span>
            <span className="ml-4">&quot;available_for_hire&quot;: true</span>
            <span>{"}"}</span>
          </div>
        );
      }
      return (
        <span className="text-slate-300">
          curl: (6) Could not resolve host: {endpoint}
        </span>
      );
    },

    decrypt: () => {
      const hexLines = Array.from({ length: 5 }).map(() => {
        const hex = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
        const mem = Math.floor(Math.random() * 9999)
          .toString()
          .padStart(4, "0");
        return `0x${hex} ... [MEM_ADDR: ${mem}] ... DECRYPTED.`;
      });
      return (
        <div className="text-[#22c55e] flex flex-col font-mono text-[10px] opacity-80 mt-1">
          <span className="text-[#facc15] mb-1">
            Initiating brute force protocol...
          </span>
          {hexLines.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
          <span className="text-white font-bold mt-1">
            Payload extracted. Do not share.
          </span>
        </div>
      );
    },

    // --- NEW EASTER EGGS ---
    sudo: () => (
      <span className="text-[#ef4444]">
        guest is not in the sudoers file. This incident will be reported to
        Karan.
      </span>
    ),

    rm: (args) => {
      if (args.join(" ") === "-rf /") {
        return (
          <span className="text-[#ef4444] font-black animate-pulse">
            NICE TRY. Core system protected by Semantic Guard.
          </span>
        );
      }
      return <span className="text-[#ef4444]">rm: missing operand</span>;
    },

    coffee: () => (
      <span className="text-[#facc15]">
        Error 418: I&apos;m a teapot. (I run on Go and caffeine).
      </span>
    ),
  };

  const handleCommand = (e) => {
    // Removed the ghost isBreached check that was causing the crash

    if (e.key === "Enter") {
      e.preventDefault();
      const rawInput = input.trim();

      if (rawInput === "") {
        setHistory((prev) => [...prev, { cmd: input, output: "" }]);
        setInput("");
        return;
      }

      if (rawInput.toLowerCase() === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const args = rawInput.split(/\s+/);
      const commandName = args[0].toLowerCase();
      const commandArgs = args.slice(1);

      const execute = COMMANDS[commandName];
      const response = execute ? (
        execute(commandArgs)
      ) : (
        <span className="text-[#ef4444]">
          bash: {commandName}: command not found
        </span>
      );

      setHistory((prev) => [...prev, { cmd: rawInput, output: response }]);
      setInput("");
    }
  };

  return (
    <>
      {/* THE TERMINAL UI */}
      <div
        className="w-full bg-slate-800 rounded-xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative flex flex-col overflow-hidden text-xs sm:text-sm font-mono cursor-text"
        onClick={() => document.getElementById("cli-input").focus()}
      >
        <div className="w-full border-b-4 border-slate-900 p-2 sm:p-3 flex gap-2 items-center bg-slate-900 z-10 sticky top-0">
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <span className="text-[#facc15] font-bold text-[10px] uppercase tracking-widest ml-2">
            sys.interactive_cli // type &quot;help&quot; to begin
          </span>
        </div>

        <div
          ref={scrollRef}
          className="p-4 sm:p-6 flex-1 overflow-y-auto flex flex-col gap-2 scrollbar-hide"
        >
          {history.map((line, index) => (
            <div key={index} className="flex flex-col gap-1 mb-2">
              {line.cmd && (
                <div className="flex gap-2 text-white items-center">
                  <span className="text-[#22c55e]">❯</span>
                  <span className="font-bold">{line.cmd}</span>
                </div>
              )}
              {line.output && (
                <div className="text-slate-300 ml-4 leading-relaxed">
                  {line.output}
                </div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex gap-2 text-white items-center mt-1 w-full">
            <span className="text-[#22c55e] font-bold shrink-0">
              guest@karan-sys:<span className="text-[#3b82f6]">{pwd}</span>$
            </span>
            <input
              id="cli-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className={`bg-transparent border-none outline-none flex-1 text-white caret-[#facc15] w-full }`}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;

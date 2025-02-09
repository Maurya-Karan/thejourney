
export default function Resume() {



    return (
        <div className="max-w-4xl mx-auto shadow-lg p-6 rounded-lg print:m-3 print:bg-white" id="resume">
            <div  className="p-6 " >
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white print:text-black  ">KARAN MAURYA</h1>
                    <p className="text-gray-600">7985593854 | karanmaurya802@gmail.com</p>
                    <p className="text-blue-500">
                        <a href="https://karanmaurya.vercel.app" target="_blank" rel="noopener noreferrer">
                            karanmaurya.vercel.app
                        </a>
                    </p>
                </header>

                <p className="text-gray-700 text-center mb-6">
                    Motivated software developer with hands-on experience in Java and the MERN stack. Passionate about developing innovative software solutions and continuously improving my skills. Seeking an opportunity to grow professionally and contribute to cutting-edge projects.
                </p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold border-b pb-2 text-white print:text-black ">Projects</h2>
                    <div className="mt-3">
                        <h3 className="text-lg font-medium text-white print:text-black ">ASCII (2022-Present)</h3>
                        <p className="text-gray-700">
                            Developed a MERN-based platform fostering collaboration and interaction between students and teachers. The platform enables knowledge sharing and discussions in a monitored, inclusive, and secure learning environment.
                        </p>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-medium text-white print:text-black ">The Journey (2024-Present)</h3>
                        <p className="text-gray-700">
                            Designed and developed a responsive portfolio website to showcase projects and skills. Implemented modern UI/UX using HTML, CSS, TailwindCSS, React, and Framer. Deployed on Vercel for easy accessibility.
                        </p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold border-b pb-2 text-white print:text-black ">Education & Achievements</h2>
                    <div className="mt-3">
                        <p className="font-medium text-white print:text-black ">Bachelor of Computer Applications</p>
                        <p className="text-gray-600">DAV College, Bathinda (2020 – 2023) | CGPA: 7.7</p>
                        <p className="text-gray-600">Vice President, ASCII Club</p>
                    </div>
                    <div className="mt-3">
                        <p className="font-medium text-white print:text-black ">Master of Computer Applications</p>
                        <p className="text-gray-600">Vellore Institute of Technology, Vellore (2024 – 2026) | GPA: 7.8</p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold border-b pb-2 text-white print:text-black ">Skills</h2>
                    <ul className="grid grid-cols-2 gap-2 mt-3 text-gray-700">
                        <li>Programming Languages: C, C++, Java</li>
                        <li>Web Development: JavaScript, HTML, CSS</li>
                        <li>Frontend Frameworks: React.js, Next.js, TailwindCSS</li>
                        <li>Full-Stack Development: MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                        <li>Database Management: SQL, NoSQL</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>Cloud Computing: AWS</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold border-b pb-2 text-white print:text-black ">Soft Skills</h2>
                    <p className="mt-3 text-gray-700">Demonstrated problem-solving, self-motivation, teamwork, effective communication, and adaptability in software development and leadership roles.</p>
                </section>
            </div>

        </div>
    );
}

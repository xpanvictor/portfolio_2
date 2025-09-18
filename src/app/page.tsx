
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 px-4 py-8 flex flex-col items-center" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
      <div className="max-w-2xl w-full">
        {/* Header / Name / Japanese scent */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Victor Oladunjoye, Xpan</h1>
          <p className="text-lg text-gray-600 mb-2">Software Engineer</p>
          <span className="text-sm text-gray-400">戦え、戦え… (Fight, fight...)</span>
          <p className="mt-4 text-base text-gray-700">I&apos;m a systems engineer that thrives in designing efficient and scalable systems—backend, distributed, embedded, and AI platforms. From architecting components to layering implementation. </p>
        </header>

        {/* Quotes */}
        <section className="mb-8">
          <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4 mb-2">
            &quot;People with talent often have the wrong impression that things will go as they think.&quot;<br />
            <span className="text-xs text-gray-400">— Kiyotaka Ayanokoji</span>
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
            &quot;If you want to move forward, you have to take risks.&quot;<br />
            <span className="text-xs text-gray-400">— Senku Ishigami (Dr. Stone)</span>
          </blockquote>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Some experiences:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Xarvis</strong> <a href="https://github.com/xpanvictor/xarvis" className="underline" target="_blank" rel="noopener noreferrer">(GitHub)</a> — Real-world Jarvis system, Go concurrency, hardware integration.</li>
            <li><strong>Multiagent AI</strong> <a href="https://cleverfolks.ai" className="underline" target="_blank" rel="noopener noreferrer">(cleverfolks.ai)</a> — Centralized query engine, agentic orchestration.</li>
            <li><strong>Oracle Engine</strong> — Distributed price feed oracle, backend lead.</li>
            <li><strong>Xzam</strong> <a href="https://github.com/xpanvictor/xzam" className="underline" target="_blank" rel="noopener noreferrer">(GitHub)</a> — Shazam paper in Rust.</li>
            <li><strong>Missionsync</strong> — High-scale backend with soa for business execution management.</li>
            <li><strong>Cryptosmart</strong> <a href="https://bitsave.io/" className="underline" target="_blank" rel="noopener noreferrer">(bitsave.io)</a> — Smart contracts for decentralized savings, Python/Solidity/Rust with live users.</li>
            <li><strong>Fintech Remittance Platform</strong> — B2B remittance platform, undisclosed fintech role.</li>
            <li><strong>Dukia</strong> — Web3 NFT marketplace frontend, wagmi/ethers.js/nextjs.</li>
            <li><strong>eClass</strong> — Digital classroom, MERN stack.</li>
            <li><strong>MNIST digit recg. in rust</strong> <a href="https://github.com/xpanvictor/neurlr" className="underline" target="_blank" rel="noopener noreferrer">(GitHub)</a> — Rust MNIST digit recognition.</li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Writing</h2>
          <p className="text-gray-700">Blog: <a href="https://xpanvictor.github.io/" className="underline" target="_blank" rel="noopener noreferrer">Jekyll</a> | <a href="https://medium.com/@xpanvictor" className="underline" target="_blank" rel="noopener noreferrer">Medium</a> | <a href="https://xpan.notion.site/Bitcask-fffab182e35380a38b62f8eaf97fa926" className="underline" target="_blank" rel="noopener noreferrer">Bitcask</a></p>
        </section>

        {/* Resume Download */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a
            href="/docs/Victor-Oladunjoye-FlowCV-Resume-20250918.pdf"
            className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
            download
          >
            Download PDF
          </a>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Email: <a href="mailto:xpanvictor@gmail.com" className="underline">xpanvictor@gmail.com</a></p>
          <p className="text-gray-700">Portfolio: <a href="https://www.xpan9.tech/" className="underline" target="_blank" rel="noopener noreferrer">xpan9.tech</a></p>
          <p className="text-gray-700">GitHub: <a href="https://github.com/xpanvictor" className="underline" target="_blank" rel="noopener noreferrer">github.com/xpanvictor</a></p>
          <p className="text-gray-700">Medium: <a href="https://medium.com/@xpanvictor" className="underline" target="_blank" rel="noopener noreferrer">medium.com/@xpanvictor</a></p>
        </section>
        {/* Skills & Interests */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills & Interests</h2>
          <p className="text-gray-700">
            <strong>Go, Python, Rust, C/C++:</strong> Distributed systems, backend, agentic/AI, smart contracts.<br />
            <strong>MERN:</strong> Fullstack web apps.<br />
            <strong>Agentic & Orchestration:</strong> LLMs, MCP, RAG.<br />
            <strong>Interests:</strong> AI, STEM, Blockchain, Music, <a href="https://www.goodreads.com/user/show/165229002-null-pan" className="underline" target="_blank" rel="noopener noreferrer">Reading</a>
          </p>
        </section>
      </div>
      <footer className="mt-12 text-xs text-gray-400 text-center">&copy; 2025 Victor Oladunjoye</footer>
    </div>
  );
}

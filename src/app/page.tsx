
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 flex flex-col items-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="max-w-2xl w-full">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Victor Oladunjoye</h1>
          <p className="text-sm text-gray-500 mb-4">Systems Engineer — Distributed Systems, Backend, AI/Agents</p>
          <p className="text-sm text-gray-700 leading-relaxed">Designing efficient, scalable solutions. Backend infrastructure, distributed systems, agentic platforms.</p>
        </header>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Projects</h2>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">LESS</span> <a href="https://less-av.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(GitHub)</a>
              <p className="text-gray-600">Retrofit vehicle autonomy stack with Rust/Embassy firmware and a crowdsourced road-conditions routing platform for Lagos.</p>
            </div>
            <div className="text-sm">
              <span className="font-medium">Xarvis</span> <a href="https://github.com/xpanvictor/xarvis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(GitHub)</a>
              <p className="text-gray-600">Real-world Jarvis system with Go concurrency and hardware integration.</p>
            </div>
            <div className="text-sm">
              <span className="font-medium">Multiagent AI</span> <a href="https://cleverfolks.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(cleverfolks.ai)</a>
              <p className="text-gray-600">Agentic orchestration engine with LLM query handling.</p>
            </div>
            <div className="text-sm">
              <span className="font-medium">hinet</span> <a href="https://github.com/xpanvictor/hinet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(GitHub)</a>
              <p className="text-gray-600">Decentralized communication layer built on libp2p.</p>
            </div>
            <div className="text-sm">
              <span className="font-medium">Oracle Engine</span>
              <p className="text-gray-600">Distributed price feed oracle system.</p>
            </div>
            <div className="text-sm">
              <span className="font-medium">Cryptosmart</span> <a href="https://bitsave.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(bitsave.io)</a>
              <p className="text-gray-600">Smart contracts for decentralized savings (Python/Solidity/Rust).</p>
            </div>
            <div className="text-sm">
              <span className="font-medium">Xzam</span> <a href="https://github.com/xpanvictor/xzam" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(GitHub)</a>
              <p className="text-gray-600">Shazam-inspired audio recognition in Rust.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Stack</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-medium">Languages:</span> Rust, Go, Python, C/C++, TypeScript<br />
            <span className="font-medium">Focus:</span> Distributed systems, backend infrastructure, agentic AI, smart contracts<br />
            <span className="font-medium">Interests:</span> AI, blockchain, systems design
          </p>
        </section>

        {/* Links */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Links</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:xpanvictor@gmail.com" className="text-blue-600 hover:underline">Email</a>
            <a href="https://github.com/xpanvictor" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://medium.com/@xpanvictor" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medium</a>
            <a href="https://xpanvictor.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Blog</a>
            <a href="https://www.linkedin.com/in/victoroladunoye/" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="/docs/Victor-Oladunjoye-09-26.pdf" className="text-blue-600 hover:underline">Resume</a>
          </div>
        </section>
      </div>

      <footer className="mt-12 text-xs text-gray-400 text-center">&copy; 2025 Victor Oladunjoye</footer>
    </div>
  );
}

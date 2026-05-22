export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="/" className="text-base font-700 text-navy">
          차민수<span className="text-brand">.</span>
        </a>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="/#about" className="hover:text-brand transition-colors duration-150">About</a>
          <a href="/#tech" className="hover:text-brand transition-colors duration-150">Tech Stack</a>
          <a href="/#projects" className="hover:text-brand transition-colors duration-150">Projects</a>
          <a href="/#contact" className="hover:text-brand transition-colors duration-150">Contact</a>
        </div>
      </div>
    </nav>
  )
}

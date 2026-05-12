import { Menu } from 'lucide-react'
import Button from '../common/Button'

export default function Navbar() {

  const navLinks = [
    'Interface',
    'Capabilities',
    'Verified Outcomes',
    'Operators',
    'Initiate',
    'Infrastructure',
  ]

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/80
        bg-white/80
        backdrop-blur-xl
      "
    >
      <div className="container-custom">
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                text-white
                font-bold
              "
            >
              S
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-black
                  tracking-tight
                "
              >
                SYSTOLAB
              </h2>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                href="/"
                className="
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:text-blue-700
                "
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>
              Initiate Inquiry →
            </Button>
          </div>

          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              lg:hidden
            "
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}
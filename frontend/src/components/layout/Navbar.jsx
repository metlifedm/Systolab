import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

import Button from '../common/Button'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const navItems = [
    {
      label: 'Interface',
      path: '/',
    },

    {
      label: 'Capabilities',
      path: '/capabilities',
    },

    {
      label: 'Field Results',
      path: '/field-results',
    },

    {
      label: 'Operators',
      path: '/operators',
    },

    {
      label: 'Initiate',
      path: '/initiate',
    },

    {
      label: 'Infrastructure',
      path: '/infrastructure',
    },
  ]

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/80
        bg-white/90
        backdrop-blur-xl
      "
    >
      <div className="container-custom">

        <div
          className="
            flex
            h-24
            items-center
            justify-between
          "
        >
          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <div
              className="
                blue-gradient
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                text-2xl
                font-black
                text-white
                shadow-lg
              "
            >
              S
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-950
                "
              >
                SYSTOLAB
              </h2>
            </div>
          </Link>

          <nav
            className="
              hidden
              items-center
              gap-10
              lg:flex
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `
                  relative
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-slate-700 hover:text-blue-700'
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span
                        className="
                          absolute
                          -bottom-3
                          left-0
                          h-[2px]
                          w-full
                          rounded-full
                          bg-blue-700
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>
              Initiate Inquiry
              <ArrowRight size={18} />
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              lg:hidden
            "
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div
            className="
              border-t
              border-slate-200
              py-8
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    text-lg
                    font-semibold

                    ${
                      isActive
                        ? 'text-blue-700'
                        : 'text-slate-700'
                    }
                  `
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4">
                <Button className="w-full justify-center">
                  Initiate Inquiry
                  <ArrowRight size={18} />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
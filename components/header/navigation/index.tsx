import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const tabs = [
  { id: 0, name: 'Home', slug: '/' },
  { id: 1, name: 'Search', slug: '/jobs' },
  { id: 2, name: 'Resume', slug: '/cv' },
]

const AnimatedTabsWithUnderline = () => {
  const [selected, setSelected] = useState(tabs[0].id)

  return (
    <div className="hidden items-center gap-x-2 md:flex">
      {tabs.map((tab) => (
        <Link
          href={tab.slug}
          key={tab.id}
          onClick={() => setSelected(tab.id)}
          className={`${
            selected === tab.id ? '' : 'hover:opacity-90'
          } relative rounded-full px-3 py-1.5 text-sm font-medium transition`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}>
          {selected === tab.id && (
            <motion.span
              layoutId="underline"
              className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          <span className="relative z-10 uppercase tracking-tight drop-shadow-sm transition duration-500">
            {tab.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default AnimatedTabsWithUnderline

import Link from 'next/link'
import { Works } from 'utils'

type Props = { sidebarData: Works }

function Sidebar({ sidebarData }: Props) {
  return (
    <nav id="sidebar" className="w-80 h-screen">
      <div className="sticky top-0 flex items-center h-18 bg-white text-2xl font-bold tracking-wide">
        THANYATHON
      </div>
      <ul className="overflow-y-auto space-y-1 h-screen-18 py-8 space-y-8">
        {sidebarData.map((item) => (
          <li key={item.header} className="space-y-2">
            <h5 className="font-medium tracking-wider">{item.header}</h5>
            <ul className="space-y-2">
              {item.content.map((name) => (
                <li key={name} className="tracking-wider">
                  <Link href={`/works/${name}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Sidebar }

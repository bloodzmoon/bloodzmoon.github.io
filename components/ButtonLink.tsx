import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href: string
}

function ButtonLink({ children, href }: Props) {
  return (
    <Link href={href}>
      <a className="w-40 h-14 border-2 rounded-full flex justify-center items-center tracking-widest text-gray-600 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
        {children}
      </a>
    </Link>
  )
}

export { ButtonLink }

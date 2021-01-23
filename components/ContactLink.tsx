import { IconType } from 'react-icons'

type Props = {
  Icon: IconType
  href: string
}

function ContactLink({ Icon, href }: Props) {
  return (
    <a
      href={href}
      className="w-14 h-14 border-2 rounded-full flex justify-center items-center text-gray-300 text-2xl hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Icon />
    </a>
  )
}

export { ContactLink }

import { IconType } from 'react-icons'

type Props = { Icon: IconType }

function CircleIcon({ Icon }: Props) {
  return (
    <span className="w-14 h-14 border-2 rounded-full flex justify-center items-center">
      <Icon className="text-gray-300 text-3xl" />
    </span>
  )
}

export { CircleIcon }

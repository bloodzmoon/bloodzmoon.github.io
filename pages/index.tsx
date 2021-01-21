import Link from 'next/link'
import {
  FiMail,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiHeart,
} from 'react-icons/fi'
import { Layout, Button, CircleIcon } from 'components'

function HomePage() {
  return (
    <Layout title="Thanyathon">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <div className="mt-8 w-80 flex justify-evenly">
          <Link href="mailto:thanyathon.dev@gmail.com">
            <a target="_blank" rel="noreferrer noopener">
              <CircleIcon Icon={FiMail} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/i.thanthann/">
            <a target="_blank" rel="noreferrer noopener">
              <CircleIcon Icon={FiFacebook} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/i.thann">
            <a target="_blank" rel="noreferrer noopener">
              <CircleIcon Icon={FiInstagram} />
            </a>
          </Link>
          <Link href="https://github.com/bloodzmoon">
            <a target="_blank" rel="noreferrer noopener">
              <CircleIcon Icon={FiGithub} />
            </a>
          </Link>
        </div>
        <hr className="w-full border-t-2 my-10" />
        <img src="/img/me.jpg" width={373} height={248} />
        <div className="flex flex-col items-center my-8">
          <span className="text-4xl font-medium tracking-wider text-gray-700 mb-2">
            THANYATHON
          </span>
          <span className="text-xl tracking-widest-x text-gray-600">
            PORNSAWATCHAI
          </span>
        </div>
        <hr className="w-16 border-t-2" />
        <p className="my-8 text-lg text-gray-600 text-center">
          Hello! I am a full stack developer. A junior computer engineering
          @KMITL.
          <br />
          Nice to meet you 'w' /
        </p>
        <div className="w-96 flex justify-evenly">
          <Button>
            <Link href="/works">WORKS</Link>
          </Button>
          <Button>
            <Link href="/resume">RESUME</Link>
          </Button>
        </div>
        <hr className="w-full border-t-2 my-10" />
        <div className="inline-flex text-gray-300 mb-8">
          ( Code with <FiHeart className="self-center mx-2" /> by me )
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

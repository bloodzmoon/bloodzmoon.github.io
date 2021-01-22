import {
  FiMail,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiHeart,
} from 'react-icons/fi'
import { Layout, ButtonLink, ContactLink } from 'components'

function HomePage() {
  return (
    <Layout title="Thanyathon">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <div className="mt-8 w-80 flex justify-evenly">
          <ContactLink href="mailto:thanyathon.dev@gmail.com" Icon={FiMail} />
          <ContactLink
            href="https://www.facebook.com/i.thanthann"
            Icon={FiFacebook}
          />
          <ContactLink
            href="https://www.instagram.com/i.thann"
            Icon={FiInstagram}
          />
          <ContactLink href="https://github.com/bloodzmoon" Icon={FiGithub} />
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
        <p className="my-8 tracking-wide text-gray-600 text-center">
          Hello! I am a full stack developer. A junior computer engineering
          @KMITL.
          <br />
          Nice to meet you 'w' /
        </p>
        <div className="w-96 flex justify-evenly">
          <ButtonLink href="/works">WORKS</ButtonLink>
          <ButtonLink href="/resume">RESUME</ButtonLink>
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

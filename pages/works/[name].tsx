import { GetStaticProps, GetStaticPaths } from 'next'
import { works } from 'utils'

function WorksPage({ repoData }) {
  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white h-18 mx-8 border-b flex justify-between items-center">
        <div>Quick search for anything</div>
        <div>Github</div>
      </div>
      <div className="m-8">
        <a
          href={repoData}
          target="_blank"
          className="text-xl text-blue-400 hover:underline"
        >
          {repoData}
        </a>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const repoName = ctx.params.name
  const repo = await fetch(
    `https://api.github.com/repos/bloodzmoon/${repoName}`
  )
  const repoData = await repo.json()

  return {
    props: {
      title: `${repoName} - Thanyathon`,
      layoutClassName: 'flex',
      sidebarData: works,
      repoData: repoData.html_url,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works
    .flatMap((data) => data.content)
    .map((path) => `/works/${path}`)

  return { paths, fallback: false }
}

export default WorksPage

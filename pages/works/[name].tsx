import { GetServerSideProps } from 'next'
import { Works } from 'api/works'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(process.env.API + '/works')
  const sidebarData: Works = await res.json()
  const title = ctx.query.name

  const res2 = await fetch(process.env.API + '/repo?name=' + title)
  const repoData = await res2.text()

  return {
    props: {
      title: `${title} - Thanyathon`,
      layoutClassName: 'flex',
      sidebarData,
      repoData,
    },
  }
}

export default WorksPage

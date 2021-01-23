import { GetStaticProps } from 'next'
import { works } from 'utils'

function WorksIndexPage() {
  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white h-18 mx-8 border-b flex justify-between items-center">
        <div>Quick search for anything</div>
        <div>Github</div>
      </div>
      <div className="m-8">Index</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      title: 'Works - Thanyathon',
      layoutClassName: 'flex',
      sidebarData: works,
    },
  }
}

export default WorksIndexPage

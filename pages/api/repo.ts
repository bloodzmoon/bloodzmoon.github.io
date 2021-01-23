import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const owner = 'bloodzmoon'
  const repoName = req.query.name
  const repo = await fetch(`https://api.github.com/repos/${owner}/${repoName}`)
  const repoData = await repo.json()

  // const branch = repoData.default_branch
  // const readme = await fetch(
  //   `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/README.md`
  // )
  // const readmeData = await readme.text()
  res.statusCode = 200
  res.send(repoData.html_url)
}

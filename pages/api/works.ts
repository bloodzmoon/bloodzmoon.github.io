import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json(works)
}

export type Works = { header: string; content: string[] }[]

const works: Works = [
  {
    header: 'FEATURES',
    content: ['bloodzmoon.github.io', 'checkit', 'onu', 'soul-eater'],
  },
  {
    header: 'PLAYGROUND',
    content: [
      'react-todo',
      'vue-todo',
      'angular-todo',
      'simple-todoapp',
      'maker-uno',
      'react-todo',
      'vue-todo',
      'angular-todo',
      'simple-todoapp',
      'maker-uno',
      'react-todo',
      'vue-todo',
      'angular-todo',
      'simple-todoapp',
      'maker-uno',
      'react-todo',
      'vue-todo',
      'angular-todo',
      'simple-todoapp',
      'maker-uno',
    ],
  },
  {
    header: 'SCHOOL WORKS',
    content: ['com-org', 'digital-assignment', 'itc', 'matlab', 'data-struct'],
  },
]

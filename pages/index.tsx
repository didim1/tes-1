import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Data } from '../interface'

interface Props {
  articles: Data[]
}

const Home = ({ articles }: Props) => {
  return (
    <div className="container mx-auto">
      <div className='text-center'>
        <h1 className='font-bold text-3xl'>Articles</h1>
        <div>
          <ul>
            {articles.map((article) => (
              <li key={article.id} className='hover:underline cursor-pointer'>
                <Link href={`/article/${article.id}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
  const articles = await res.json()

  return {
    props: { articles }
  }
}

export default Home

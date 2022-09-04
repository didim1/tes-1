import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { Data } from '../../interface'
import axios from 'axios'

interface Props {
    article: Data
}

const Detail = ({ article }: Props) => {
    return (
        <div className="container">
            <Link href='/'>
                <a>Back</a>
            </Link>
            <div className="text-center">
                <h1 className="font-bold text-3xl">Detail Article</h1>
                <div>
                    <p>id: {article.id} </p>
                    <p>title: {article.title} </p>
                    <a href={article.url} target='_blank' rel='noreferrer'>url: {article.url} </a>
                    <p>imageUrl: {article.imageUrl} </p>
                    <p>newsSite: {article.newsSite} </p>
                    <p>summary: {article.summary} </p>
                    <p>publishedAt: {article.publishedAt} </p>
                    <p>updatedAt: {article.updatedAt} </p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const res = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    const article = res.data

    return {
        props: { article }
    }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
//     const articles: Data[] = await res.json()

//     const paths = articles.map((article) => ({
//         params: { id: article.id?.toString() }
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const res = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params?.id}`)
//     const article = await res.json()
//     return {
//         props: { article },
//         revalidate: 5
//     }

// }

export default Detail
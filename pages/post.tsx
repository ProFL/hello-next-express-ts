import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import { IShow } from '../interfaces/IShowsResponse';

const Post = (props: { show: IShow }) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
)

Post.getInitialProps = async function (context: { query: { id: string } }) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show: IShow = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
}

export default Post;

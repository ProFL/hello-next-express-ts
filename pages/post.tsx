import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import { Show } from '../interfaces/ShowsResponse';

const Post = (props: { show: Show }) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
)

Post.getInitialProps = async function (context: { query: { id: string } }) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show: Show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
}

export default Post;

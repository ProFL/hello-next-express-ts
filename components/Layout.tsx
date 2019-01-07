import Header from './Header';

const styles = {
    layoutStyle: {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD'
    }
}

const Layout = (props: any) => {
    const { layoutStyle } = styles;

    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    );
}

export default Layout;

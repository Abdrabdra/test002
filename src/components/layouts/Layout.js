import Header from "../layouts/Header/Header";
import Main from "../templates/Main/Main";


const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
        </div>
    );
};

export default Layout;

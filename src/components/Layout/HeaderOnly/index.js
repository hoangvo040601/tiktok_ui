import Header from '../components/Header'


function DefaultLayout({ children }) {
    return (
        <div>
            <div className="Header">
                <Header />
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
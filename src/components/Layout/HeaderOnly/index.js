import Header from '../components/Header'


function HeaderOnly({ children }) {
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

export default HeaderOnly;
import Header from '../components/Header'
import Sidebar from './Sidebar'


function DefaultLayoout({children}) {
    return ( 
        <div>
            <div className="Header">
            <Header/>
            </div>
            <div className="container">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoout;
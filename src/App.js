import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from './route';
import { DefaultLayout } from './components/Layout'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          {
            publicRoute.map((route, index) => {
              const Page = route.component;
              // const Layout = route.layout===null ? Fragment : DefaultLayout
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              }
              else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route key={index} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
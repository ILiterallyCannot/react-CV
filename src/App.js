import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to='/'>Home</Link>}>
            <Navigation>
                <a href="/resume">Resume</a>
                <a href="/aboutme">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>}>
            <Navigation>
                <a href="/resume">Resume</a>
                <a href="/aboutme">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

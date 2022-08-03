import React from "react";
import ReactGA from "react-ga"; 
import { createBrowserHistory } from 'history';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';
import './i18n/config';
import { useTranslation } from 'react-i18next';


function App() {

    const history = createBrowserHistory();
    const { t } = useTranslation();

    // Initialize google analytics page view tracking
    history.listen(location => {
      ReactGA.initialize('G-60J3B94QPR');
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });

  return (
    <div>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to='/'>{t('router.main')}</Link>}>
            <Navigation>
                <a href="/resume">{t('router.resume')}</a>
                <a href="/aboutme">{t('router.about')}</a>
                <a href="/projects">{t('router.projects')}</a>
                <a href="/contact">{t('router.contact')}</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to='/'>{t('router.main')}</Link>}>
            <Navigation>
                <a href="/resume">{t('router.resume')}</a>
                <a href="/aboutme">{t('router.about')}</a>
                <a href="/projects">{t('router.projects')}</a>
                <a href="/contact">{t('router.contact')}</a>
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

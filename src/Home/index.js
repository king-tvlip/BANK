import React, { PureComponent } from 'react';
import SearchPanelBank from '../components/SearchPanelBank';
import HeaderBank from '../components/HeaderBank';
import NavigationBank from '../components/NavigationBank';
import ContentBank from '../components/ContentBank';
import MainPageBank from './components/MainPageBank';
import FooterBank from '../components/Footer';

class Home extends PureComponent {
    render() {
        return (
            <>
                <HeaderBank>
                    <SearchPanelBank />
                </HeaderBank>
                <ContentBank>
                    <NavigationBank />
                    <MainPageBank />
                </ContentBank>
                <FooterBank />
            </>
        );
    }
}
export default Home;

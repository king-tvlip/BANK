import React, { PureComponent } from 'react';
import SearchPanelBank from '../components/SearchPanelBank';
import HeaderBank from '../components/HeaderBank';

class Home extends PureComponent {
    render() {
        return (
            <>
                <HeaderBank>
                    <SearchPanelBank/>
                </HeaderBank>
                {/* <NavigationBank /> */}
                {/* <ContentBank /> */}
                {/* <FooterBank /> */}
            </>
        );
    }
}
export default Home;

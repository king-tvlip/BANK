import React from 'react';
import SearchPanelBank from '../components/SearchPanelBank';
import HeaderBank from '../components/HeaderBank';
import NavigationBank from '../components/NavigationBank';
import ContentBank from '../components/ContentBank';
import FooterBank from '../components/Footer';
import CreditForm from './components/CreditForm';

const Credit = props => {
    return (
        <>
            <HeaderBank>
                <SearchPanelBank />
            </HeaderBank>
            <ContentBank>
                <NavigationBank />
                <CreditForm />
            </ContentBank>
            <FooterBank />
        </>
    );
};

export default Credit;

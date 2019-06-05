import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

const mapStateToProps = state => {
    return {
        isSubmitting: state.formReducer.isSubmitting
    };
};

export default withRouter(
    connect(
        mapStateToProps
    )(Credit)
);


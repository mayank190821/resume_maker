import React from 'react';
import Details from './Deatils';
import NavBar from '../navbar';
import styled from 'styled-components';
function DetailsPage() {
    return (
        <Page>
            <NavBar/>
            <Details />
        </Page>
    )
}

const Page = styled.div`
    // border:1px solid red;
    display:flex;
    flex-direction:column;
    gap:2rem;
`;

export default DetailsPage
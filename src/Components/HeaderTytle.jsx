import React from 'react';
import {Helmet} from "react-helmet";
const HeaderTytle = ({title}) => {
    return (
    <Helmet>
        <title>TestHalal - {title}</title>
    </Helmet>
    );
};

export default HeaderTytle;
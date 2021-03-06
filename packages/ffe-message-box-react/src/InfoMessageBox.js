import React from 'react';
import InfoSirkelIkon from '@sb1/ffe-icons-react/lib/info-sirkel-ikon';
import MessageBox from './MessageBox';

const iconStyles = {
    width: '40px',
    height: '40px',
};
const InfoMessage = props => (
    <MessageBox
        type="info"
        icon={<InfoSirkelIkon style={iconStyles} />}
        {...props}
    />
);

export default InfoMessage;

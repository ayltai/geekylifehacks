import { Tooltip, Typography, } from 'antd';
import type { FC, } from 'react';

import { InfoTextProps, } from './InfoText.types';

const InfoText : FC<InfoTextProps> = ({
    title,
    children,
    ...props
}) => {
    const { style, ...rest } = props;

    return (
        <Tooltip title={title}>
            <Typography.Text
                style={{
                    textDecorationLine  : 'underline',
                    textDecorationStyle : 'dashed',
                    ...(style ?? []),
                }}
                {...rest}>
                {children}
            </Typography.Text>
        </Tooltip>
    );
};

export default InfoText;

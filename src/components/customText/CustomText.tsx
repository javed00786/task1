import React, { ReactNode } from 'react';

import {
    StyleProp,
    Text,
    TextProps,
    TextStyle
} from 'react-native';

import { COLOR } from '../../const/COLOR';


type TCustomText = {
    color?: keyof typeof COLOR | object;
    fontSize?: number;
    style?: StyleProp<TextStyle>;
    restProps?: TextProps;
    numberOfLines?: number;
    children: ReactNode;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    marginBottom?: number;
    flex?: number;
    fontWeight?: any;
};

const CustomText = ({
    children,
    color = 'black',
    style,
    restProps,
    textAlign,
    fontSize = 14,
    flex,
    marginBottom,
    fontWeight,
    numberOfLines
}: TCustomText) => {
    return (
        <>
            <Text
                style={[
                    {
                        color: COLOR[color],
                        textAlign: textAlign ?? 'left',
                        fontSize,
                        flex,
                        marginBottom,
                        fontWeight,
                    },
                    style,
                ]}
                numberOfLines={numberOfLines}
                {...restProps}
            >{children}</Text>
        </>
    )
}

export default CustomText
import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { MyIcon } from '../../assets/icons'
import { COLOR } from '../../const/COLOR'

type TCustomInput = {
    placeholder: string,
    onChangeText?: (e?: any) => void;
}


const CustomInput = ({
    placeholder = 'Search Product',
    onChangeText,
}: TCustomInput) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                <MyIcon name="search"
                    style={{
                        marginLeft: 20,
                    }}
                />
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: COLOR.white,
        marginLeft: 20,
        borderRadius: 5,
    },
    searchContainer: {
        backgroundColor: COLOR.light,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    input: {
        fontSize: 14,
        flex: 1,
        color: COLOR.black,
        padding: 4,
        paddingLeft: 5
    },
})
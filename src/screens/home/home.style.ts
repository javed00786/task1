import { StyleSheet } from 'react-native';
import { COLOR } from '../../const/COLOR';

export const homeStyles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingTop: 20,

    },
    searchView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    filterView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },

})
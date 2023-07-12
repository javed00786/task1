import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { MyIcon } from '../../assets/icons'
import Card from '../../components/card/Card'
import CustomInput from '../../components/customInput/CustomInput'
import CustomText from '../../components/customText/CustomText'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../const/deviceInfo'
import { homeStyles } from './home.style'
import { useGetProductList } from './useGetProductList'


const Home = ({ navigation }: any) => {
    const { navigate } = useNavigation()
    const { searchFilter,
        listLength,
        onChangeSearch,
        showLoadMore,
        handleLoadMoreDataBtn
    } = useGetProductList();
    // console.log('data', data)
    // let searchFilter = [1, 2]
    // let listLength = {}
    return (
        <View style={homeStyles.homeContainer}>
            <View style={homeStyles.searchView}>
                <MyIcon name='drawer' />
                <CustomInput
                    onChangeText={onChangeSearch}
                />
            </View>
            <View style={homeStyles.filterView}>
                <CustomText
                    fontSize={25}
                    fontWeight={800}
                >
                    Sneakers
                </CustomText>
                <Pressable onPress={() => console.log('first')}>
                    <MyIcon name='filter' />
                </Pressable>
            </View>
            <CustomText
                style={{
                    paddingHorizontal: 20,
                    paddingBottom: 5
                }}
            >
                20 Products found
            </CustomText>
            {/* card */}

            <FlatList
                numColumns={2}
                data={searchFilter}
                renderItem={({ item }) => {
                    return <Card
                        item={item}
                        onPress={() => navigation.navigate('detail', { item })}
                    />
                }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginBottom: SCREEN_WIDTH / 20,
                }}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 40,
                    paddingTop: 10,
                }}
                ListFooterComponent={
                    showLoadMore && <TouchableOpacity
                        style={{ justifyContent: 'center', flexDirection: 'row' }}
                        onPress={() => handleLoadMoreDataBtn(10)}
                    >
                        <CustomText>Click for load more data</CustomText>
                    </TouchableOpacity>
                }
                ListEmptyComponent={<View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: SCREEN_HEIGHT / 2
                }}>
                    {!searchFilter?.length && <ActivityIndicator size={'large'} />}
                </View>
                }
            />
            <MyIcon name='homeBar' />
        </View>
    )
}

export default Home
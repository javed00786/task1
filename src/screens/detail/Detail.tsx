import { View, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyIcon } from '../../assets/icons';
import { COLOR } from '../../const/COLOR';
import { SCREEN_WIDTH } from '../../const/deviceInfo';
import CustomText from '../../components/customText/CustomText';
import { useNavigation } from '@react-navigation/native';

const Detail = ({ route }: any) => {
    const { goBack } = useNavigation();
    const { item } = route.params;

    return (
        <View style={{
            backgroundColor: COLOR.white,
            flex: 1
        }}>
            <View
                style={{
                    backgroundColor: COLOR.white,
                    alignItems: 'center',
                    // elevation: 1,
                    paddingBottom: 20
                }}
            >
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 20,
                        width: '100%'
                    }}>
                    <Pressable onPress={() => goBack()}>
                        <MyIcon name='arr' />
                    </Pressable>

                    <MyIcon name='heart' />
                </View>
                <Image
                    source={{ uri: item?.image }}
                    resizeMode='stretch'
                    style={{
                        height: 200,
                        width: 200,
                        marginTop: 15,
                    }}
                />
            </View>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 20
                }}>
                    {[1, 2, 3, 4].map((el) => {
                        return <View style={{
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: COLOR.grey,
                            padding: 5,
                            borderRadius: 5
                        }}>
                            <Image
                                source={{ uri: item?.image }}
                                resizeMode='stretch'
                                style={{
                                    height: 50,
                                    width: 50,
                                }}
                            />

                        </View>
                    })}
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginBottom: 10
                }}>

                    <CustomText
                        fontSize={23}
                        fontWeight={800}
                        numberOfLines={1}
                        style={{ width: 150 }}
                    >
                        {item?.title}
                    </CustomText>
                    <CustomText
                        fontSize={20}
                        fontWeight={400}
                    >
                        ${Math.round(item?.price)}
                    </CustomText>

                </View>

                <CustomText
                    fontSize={16}
                    fontWeight={'800'}
                    numberOfLines={1}
                    style={{
                        paddingBottom: 10,
                        borderBottomWidth: 2,
                        borderBottomColor: COLOR.grey,
                        fontStyle: 'italic',
                        marginBottom: 20

                    }}
                >
                    Air Force 1 Shadow Beige Pale Ivory
                </CustomText>
                <CustomText
                    fontSize={13}
                    fontWeight={'400'}
                    numberOfLines={4}
                    style={{
                        paddingBottom: 10,
                        borderBottomWidth: 2,
                        borderBottomColor: COLOR.grey,
                        marginBottom: 20
                    }}
                >
                    {item?.description}
                </CustomText>

                <CustomText
                    fontSize={15}
                    fontWeight={600}
                    marginBottom={5}
                >
                    Rating
                </CustomText>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    {[1, 2, 3, 4].map((el) => <MyIcon name='star' fill='#FDE50F' style={{ marginRight: 5 }} />)}
                    <MyIcon name='star' fill='#D9D9D9' style={{ marginRight: 5 }} />
                    <CustomText>{`(${item?.rating?.count})`}</CustomText>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLOR.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10,
                        marginBottom: 20,
                        borderRadius: 10
                    }}
                >
                    <CustomText
                        color={'white'}
                        fontWeight={700}
                        fontSize={16}
                    >
                        Add TO CART
                    </CustomText>
                </TouchableOpacity>

            </ScrollView >

        </View>
    )
}

export default Detail
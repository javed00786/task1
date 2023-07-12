import { View, Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/COLOR'
import { MyIcon } from '../../assets/icons'
import CustomText from '../customText/CustomText'
import { SCREEN_WIDTH } from '../../const/deviceInfo'

type TCart = {
    item: {
        id: number
        title: string
        price: number
        description: string
        category: string
        image: string
        rating: {
            rate: number
            count: number
        }
    },
    onPress: () => void
    // onRemoveCart: () => void
}

const Card = ({ item, onPress }: TCart) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                width: SCREEN_WIDTH * 0.42, //
                height: 240, //
                backgroundColor: COLOR.white,
                elevation: 5,
                borderRadius: 10,
                padding: 10,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    alignItems: 'center',
                    marginBottom: 10
                }}
            >
                <MyIcon
                    name='heart'
                    style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                        zIndex: 1
                    }}
                />
                <Image
                    source={{ uri: item?.image }}
                    resizeMode='stretch'
                    style={{
                        height: 100,
                        width: 100,
                        marginTop: 15
                    }} />
            </View>
            <CustomText
                fontSize={16}
                fontWeight={500}
                marginBottom={10}
                numberOfLines={1}
                style={{ marginRight: 20 }}
            >
                {item?.title}
            </CustomText>
            <CustomText
                fontSize={13}
                fontWeight={400}
                marginBottom={10}
                numberOfLines={2}
            >
                {item?.description}
            </CustomText>
            <CustomText
                fontSize={16}
                fontWeight={500}
                numberOfLines={1}
            >
                ${Math.round(item?.price)}
            </CustomText>

        </TouchableOpacity>
    )
}

export default Card

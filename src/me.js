import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const me = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <View>
                    <Image
                        style={{ height: 70, width: 70, borderRadius: "50%", borderColor: "gray", borderWidth: 1 }}
                        resizeMode='contain'
                        source={require("../assets/avatar.jpg")}
                    />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Lê Duy Khánh458</Text>
                        <Image
                            resizeMode='contain'
                            style={{ height: 29, width: 110, marginLeft: 10 }}
                            source={require("../assets/joincapcut.png")}
                        />
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}>ID:1236007534</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>0</Text>
                    <Text>Following</Text>
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>0</Text>
                    <Text>Followers</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                <Image
                    resizeMode='contain'
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/pen.png")}
                />
                <Text style={{ marginLeft: 10, fontWeight: '500' }}>Tap to add bio</Text>

            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                <Pressable
                    style={{ borderWidth: 1, height: 30, width: 290, borderRadius: 5, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray" }}

                >
                    <Text style={{ marginLeft: 10, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Edit profile</Text>
                </Pressable>
                <Pressable
                    style={{ borderRadius: 5, height: 30, width: 30, borderWidth: 1, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray", marginLeft: 10 }}
                >
                    <Image
                        style={{ height: 28, width: 28 }}
                        resizeMode='contain'
                        source={require("../assets/share.png")}
                    />
                </Pressable>
                <Pressable
                    style={{ borderRadius: 5, height: 30, width: 30, borderWidth: 1, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray", marginLeft: 10 }}
                >
                    <Image
                        style={{ height: 28, width: 28 }}
                        resizeMode='contain'
                        source={require("../assets/expard.png")}
                    />
                </Pressable>
            </View>
            <View style={{ marginTop: 15 }}>
                <Pressable
                    style={{ borderRadius: 5, height: 50, width: 370, borderWidth: 1, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray", marginLeft: 10 }}
                >


                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                style={{ height: 28, width: 28, marginLeft: 18, marginTop: 8 }}
                                resizeMode='contain'
                                source={require("../assets/dongho.png")}
                            />
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ marginLeft: 10, fontWeight: '500' }}>View history</Text>
                            <Text style={{ marginLeft: 10, color: "gray" }}>Recently viewed templated</Text>
                        </View>
                        <View style={{ marginTop: 8 }}>

                            <Image
                                style={{ height: 28, width: 28, marginLeft: 110, marginTop: 5 }}

                                source={require("../assets/phai.png")}
                            />
                        </View>
                    </View>
                </Pressable>

            </View>
            <View>
                <Pressable>


                    
                </Pressable>

            </View>
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                <Pressable
                    style={{ width: "100px", height: "70px", backgroundColor: "White", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                    onPress={() =>
                        navigation.navigate("edit")}
                >

                    <Image
                        source={require("../assets/edit_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() =>
                        navigation.navigate('template')

                    }
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                >
                    <Image
                        source={require("../assets/template_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('inbox')}
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                >
                    <Image
                        source={require("../assets/inbox_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('me')}
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                >

                    <Image
                        source={require("../assets/me_true.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>


            </View>

        </View>
    )
}

export default me
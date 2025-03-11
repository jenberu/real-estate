import images from "@/constants/images";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
const signIn = () => {
  const handleLogin = () => {
    // handle login with google
    console.log("login with google");
  };
  return (
    <SafeAreaView  className="bg-white h-full ">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="w-full h-[400px]"
        />
     
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200 ">
            {" "}
            Welcome to Restate{" "}
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2 ">
            {" "}
            Let's Get Closer To {"\n"}
            <Text className="text-primary-300">Your Ideal Home </Text>
          </Text>
          <Text className="text-lg font-rubik text-center mt-12">
            Login to Restate with Google
          </Text>
        </View>
        <TouchableOpacity
          
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
            <Image
                source={icons.google}
                className="w-5 h-5 "
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;

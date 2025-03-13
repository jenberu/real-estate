import { Text, View, Image } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
export default function Index() {
  return (
    <SafeAreaView>
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-s">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black ">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-meduim ">Jemberu</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  );
}

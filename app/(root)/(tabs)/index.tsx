import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { FeaturedCard, Card } from "@/components/Cards";
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card/>}
      />

      <View className="px-5">
        <View
          className="flex flex-row items-center 
        justify-between mt-s"
        >
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
      <View className="my-5">
        <View
          className="
        flex flex-row items-center justify-between 
        "
        >
          <Text className="text-xl font-rubik-bold text-black-300">
            {" "}
            Featured
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Filters />
      </View>
    </SafeAreaView>
  );
}

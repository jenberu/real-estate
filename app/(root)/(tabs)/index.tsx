import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold font-rubik text-3xl my-10 ">
        {" "}
        Welcpme to realestate
      </Text>{" "}
      <View className="flex-col gap-3">
        <Link className="bg-green-600 p-2 " href="/sign-in">
          <Text> Sign In</Text>
        </Link>
        <Link href="/explore">
          <Text>Explore</Text>
        </Link>
        <Link href="/profile">
          <Text>profile</Text>
        </Link>
        <Link href="/properties/1">
          <Text>Property </Text>
        </Link>
      </View>
    </View>
  );
}

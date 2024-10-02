import { global } from "@/constants/Globals";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={global.container}>
        <Text>This screen doesn't exist.</Text>
      </View>
    </>
  );
}

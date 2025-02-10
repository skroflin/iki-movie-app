import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/old_fart.webp")}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Why does one hate thyself
          <HelloWave />
        </ThemedText>
      </ThemedView>
      <Collapsible title="Reason 1">
        <ThemedText>Number 1: this app...</ThemedText>
      </Collapsible>
      <Collapsible title="Reason 2">
        <ThemedText>This app...</ThemedText>
      </Collapsible>
      <Collapsible title="Reason 3">
        <ThemedText>This app...</ThemedText>
      </Collapsible>
      <Collapsible title="Reason 4">
        <ThemedText>This app...</ThemedText>
      </Collapsible>
      <Collapsible title="Reason 5">
        <ThemedText>Guess it boy...</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

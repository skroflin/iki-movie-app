import { Image, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MovieList from "@/components/MovieList";
import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  const HeaderComponent = () => (
    <ThemedView>
      <Image
        source={require("@/assets/images/popcorn.jpg")}
        style={styles.headerImage}
        resizeMode="cover"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Moj 13. razlog zašto
        </ThemedText>
        <HelloWave />
      </ThemedView>
    </ThemedView>
  );

  return <MovieList HeaderComponent={HeaderComponent} />;
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontStyle: "italic",
  },
});

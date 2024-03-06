import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { AnimatedScrollview } from "animated-scrollview";

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedScrollview
        style={styles.animatedScrollview}
        config={{
          "simple-slide-1": {
            animation: {
              order: ["translateX"],
              translateX: { start: -100, end: 0, unit: "%" },
            },
            relativeOffsetFromBottom: 20,
          },
          "simple-slide-2": {
            animation: {
              order: ["translateX"],
              translateX: { start: -100, end: 0, unit: "%" },
            },
            relativeOffsetFromBottom: 20,
          },
          "simple-slide-3": {
            animation: {
              order: ["translateX"],
              translateX: { start: 100, end: 0, unit: "%" },
            },
            relativeOffsetFromBottom: 20,
          },
          "simple-slide-4": {
            animation: {
              opacity: { start: 0, end: 1 },
            },
            relativeOffsetFromBottom: 20,
          },
          "simple-slide-5": {
            animation: {
              order: ["translateX", "rotate"],
              translateX: { start: -100, end: 0, unit: "%" },
              rotate: { start: -400, end: 0 },
            },
            relativeOffsetFromBottom: 20,
          },
          "simple-slide-6": {
            animation: {
              order: ["scale"],
              scale: { start: 0, end: 1 },
            },
            relativeOffsetFromBottom: 20,
          },
          "simple-slide-7": {
            animation: {
              order: ["scale"],
              scale: { start: 5, end: 1 },
              opacity: { start: 0, end: 1 },
            },
            relativeOffsetFromBottom: 20,
          },
        }}
      >
        <View key="header-container" style={styles.headerContainer}>
          <Text style={styles.headerText1}>This is a demo for</Text>
          <Text style={styles.headerTitle}>animated-scrollview</Text>
          <Text style={styles.headerText2}>
            ⬇ scroll down to see some action ⬇
          </Text>
        </View>
        <View key="simple-slide-1" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530622/milk-tea.svg"}
          />
        </View>
        <View key="simple-slide-2" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530632/airplane.svg"}
          />
        </View>
        <View key="simple-slide-3" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530628/surf.svg"}
          />
        </View>
        <View key="simple-slide-4" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530619/polaroid.svg"}
          />
        </View>
        <View key="simple-slide-5" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530627/sunbathing.svg"}
          />
        </View>
        <View key="simple-slide-6" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530625/take-a-bath.svg"}
          />
        </View>
        <View key="simple-slide-7" style={[styles.debug, styles.row]}>
          <Image
            style={styles.debug}
            source={"https://www.svgrepo.com/show/530624/coconut-tree.svg"}
          />
        </View>
        <View key="last" style={styles.last}>
          <></>
        </View>
      </AnimatedScrollview>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedScrollview: { width: "100%" },
  headerContainer: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText1: {},
  headerTitle: { fontWeight: "bold", fontStyle: "italic" },
  headerText2: {},
  debug: { width: 80, height: 80 },
  row: {
    height: 180,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  last: {
    height: 500,
  },
});

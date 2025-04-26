import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
// import { theme } from "../../utils/theme";

const BessaButton = ({
  anchor,
  variant,
  accessoryRight,
  isLoading,
  color = "neutral",
  size = "medium",
  isControl,
  style,
  containerStyle,
  textStyle,
  ...props
}) => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TouchableOpacity
        {...props}
        style={[
          styles.base,
          styles[size],
          {
            // backgroundColor:
            //   variant === "ghost"
            //     ? "transparent"
            //     : isControl
            //       ? theme.colors[colorScheme].neutral[50]
            //       : theme.colors[colorScheme][color][500],
            // ...style,
          },
        ]}
      >
        <View style={styles.row}>
          {anchor && (
            <Text
              style={[
                styles.text,
                {
                  // color:
                  //   variant === "ghost"
                  //     ? theme.colors[colorScheme][color][950]
                  //     : isControl
                  //       ? theme.colors[colorScheme].neutral[950]
                  //       : theme.colors[colorScheme][color][50],
                  // fontSize:
                  //   theme.spacings.md +
                  //   (size === "small" ? -2 : size === "large" ? 2 : 0),
                },
                { ...textStyle },
              ]}
            >
              {anchor}
            </Text>
          )}
          {!isLoading && accessoryRight}
        </View>
        {isLoading && (
          <ActivityIndicator
            size={"small"}
            // color={
            //   variant === "ghost" || isControl
            //     ? theme.colors[colorScheme][color][950]
            //     : theme.colors[colorScheme][color][50]
            // }
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Standard Styles
  container: {
    // borderRadius: theme.radius.full,
    overflow: "hidden",
  },
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // gap: theme.spacings.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // gap: theme.spacings.sm }
  },
  text: { fontFamily: "Inter_600SemiBold" },
  // Sizes
  small: {
    // paddingVertical: theme.spacings.sm,
    // paddingHorizontal: theme.spacings.md,
  },
  medium: {
    // paddingVertical: theme.spacings.md,
    // paddingHorizontal: theme.spacings.lg,
  },
  large: {
    // paddingVertical: theme.spacings.lg,
    // paddingHorizontal: theme.spacings.xl,
  },
});

export default BessaButton;

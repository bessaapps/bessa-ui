import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { useBessaUI } from "../BessaUIContext";

interface BessaButtonProps {
  children?: React.ReactNode;
  colorTheme?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  isLoading?: boolean;
  style?: any;
  containerStyle?: any;
  textStyle?: any;
}

const BessaButton: React.FC<BessaButtonProps> = ({
  children,
  colorTheme = "teal",
  size = "md",
  radius = "xl",
  isLoading,
  style,
  containerStyle,
  textStyle,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const { theme } = useBessaUI();

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        {...props}
        style={[
          styles.base,
          {
            backgroundColor: theme.colors[colorScheme]?.[colorTheme][500],
            paddingVertical: theme.spacings[size],
            paddingHorizontal: theme.spacings[size] * 2,
          },
          style,
        ]}
      >
        {children && (
          <Text
            style={[
              {
                color: theme.colors[colorScheme]?.[colorTheme][50],
              },
              textStyle,
            ]}
          >
            {children}
          </Text>
        )}
        {isLoading && <ActivityIndicator size={"small"} color={"red"} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BessaButton;

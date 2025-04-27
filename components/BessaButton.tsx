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
  isLoading?: boolean;
  style?: any;
  containerStyle?: any;
  textStyle?: any;
}

const BessaButton: React.FC<BessaButtonProps> = ({
  children,
  colorTheme = "teal",
  isLoading,
  style,
  containerStyle,
  textStyle,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const { theme } = useBessaUI();

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        {...props}
        style={[
          styles.base,
          { backgroundColor: theme.colors[colorScheme]?.[colorTheme][500] },
          style,
        ]}
      >
        {children && (
          <Text
            style={[
              textStyle,
              { color: theme.colors[colorScheme]?.[colorTheme][50] },
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
  container: {
    overflow: "hidden",
  },
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

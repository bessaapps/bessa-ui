import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

interface BessaButtonProps {
  children?: any;
  isLoading?: boolean;
  style?: any;
  containerStyle?: any;
  textStyle?: any;
  props?: any;
}

const BessaButton: React.FC<BessaButtonProps> = ({
  children,
  isLoading,
  style,
  containerStyle,
  textStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity {...props} style={[styles.base, style]}>
        {children && <Text style={textStyle}>{children}</Text>}
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

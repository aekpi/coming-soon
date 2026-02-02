import { View, Text } from "reshaped";

export default function Home() {
  return (
    <View direction="column" padding={4}>
      <View direction="row" align="center" justify="space-between">
        <View gap={4} direction="row" align="center">
          <Text variant="title-6">Hello</Text>
        </View>
      </View>
    </View>
  );
}

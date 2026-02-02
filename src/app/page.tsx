import { Form } from "@/components/Form";
import Image from "next/image";
import { View, Text } from "reshaped";

export default function Home() {
  return (
    <View
      direction="column"
      justify="center"
      attributes={{ style: { height: "100%" } }}
    >
      <View
        direction="column"
        align="center"
        justify="center"
        gap={10}
        padding={4}
      >
        <Image
          src="logo_512.svg"
          height={512}
          width={512}
          alt="aekpi logo"
          style={{ height: "20vh", maxWidth: "50vw" }}
        />
        <View maxWidth={160} gap={4}>
          <Text variant="featured-1">
            Replace Discounts with Shared Incentives
          </Text>
          <Text variant="body-2">
            For more living, dynamic cities. By <b>aligning incentives</b>{" "}
            around activity, visibility, and engagement, aekpi create space for
            not only small and large actors but also niche subcultures and broad
            commercial concepts to coexist and contribute on equal terms. <br />
            - Value should stay where it’s created.
          </Text>
        </View>
        <View width={160} maxWidth="300px">
          <Form />
        </View>
      </View>
    </View>
  );
}

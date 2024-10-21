import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

// Libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}

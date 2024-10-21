import { useState } from "react";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

// Libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Button, ButtonIcon } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <GluestackUIProvider mode={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={
            {
              // headerRight: () => (
              //   <Button
              //     variant="outline"
              //     size="sm"
              //     className="p-3"
              //     onPress={() =>
              //       setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              //     }
              //   >
              //     <ButtonIcon as={theme === "light" ? MoonIcon : SunIcon} />
              //   </Button>
              // ),
            }
          }
        >
          <Stack.Screen name="index" options={{ title: "PokeDex" }} />
        </Stack>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSelector = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
      <Text>Dark Mode</Text>
    </HStack>
  )
}
export default ColorModeSelector
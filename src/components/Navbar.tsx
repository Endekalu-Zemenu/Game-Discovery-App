import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSelector from "./ColorModeSelector"

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="40px" />
      <ColorModeSelector />
    </HStack>
  )
}
export default Navbar
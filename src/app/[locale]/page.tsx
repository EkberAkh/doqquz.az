import { NavigationLink } from "@/components/NavigationLink";
import { Spacer } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
    <h1>DOQQUZ.AZ</h1>
    <NavigationLink href='/about'>About</NavigationLink>
    <Spacer/>
    <NavigationLink href='/jobs'>Jobs</NavigationLink>
    </>
  )
}

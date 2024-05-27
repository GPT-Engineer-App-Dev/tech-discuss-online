import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const categories = [
  { name: "Programming", description: "Discuss coding, algorithms, and best practices." },
  { name: "Hardware", description: "Talk about the latest in computer hardware and gadgets." },
  { name: "Software", description: "Share insights on software development and applications." },
  { name: "Networking", description: "Discuss network setups, protocols, and security." },
  { name: "AI & ML", description: "Dive into artificial intelligence and machine learning topics." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.700" color="white" p={4} mb={8} alignItems="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="/" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#categories" _hover={{ textDecoration: "none", color: "blue.300" }}>Categories</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">Discussion Categories</Heading>
        <VStack id="categories" spacing={4} align="stretch">
          {categories.map((category) => (
            <Box key={category.name} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{category.name}</Heading>
              <Text mt={4}>{category.description}</Text>
              <Link href={`/${category.name.toLowerCase()}`} color="blue.500" mt={2} display="block">View Discussions</Link>
            </Box>
          ))}
        </VStack>
      </VStack>

      <Box as="footer" bg="gray.700" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
            <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
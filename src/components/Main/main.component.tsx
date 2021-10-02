import { Box, Button, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <>
      <Box as="section">
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading
            my="4"
            as="h2"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="1.2"
          >
            Looking for a{' '}
            <Text
              display={{ base: 'block', lg: 'inline' }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              React{' '}
            </Text>
            or{' '}
            <Text
              display={{ base: 'block', lg: 'inline' }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              React Native{' '}
            </Text>
            Developer?
          </Heading>
          <Text fontSize="lg" maxW="xl" mx="auto">
            Maybe I can help you! Over the past 9 years, I’ve worked with big
            companies and up-and-coming startups to successfully help them reach
            their full potential through well designed and testable code.
          </Text>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            my={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: 'left', md: 'center' }}
          >
            <Button
              as="a"
              href="http://bit.ly/linkedin-pauloluan"
              size="lg"
              colorScheme="linkedin"
              leftIcon={<FaLinkedin />}
            >
              Linkedin
            </Button>
            <Button
              as="a"
              href="http://bit.ly/pauloluan-github"
              size="lg"
              colorScheme="blackAlpha"
              leftIcon={<FaGithub />}
            >
              Github
            </Button>
            <Button
              as="a"
              href="http://bit.ly/pauloluan-insta"
              size="lg"
              colorScheme="pink"
              leftIcon={<FaInstagram />}
              variant="outline"
            >
              Instagram
            </Button>
          </Stack>
          <Text fontSize="sm" maxW="xl" mt="5" mx="auto">
            * Feel free to reach out to me any time. I prefer to talk over
            messages (Linkedin DM or e-mail), especially since we may be a few
            time zones away.
          </Text>
        </Box>
      </Box>
    </>
  )
}

export { Main }

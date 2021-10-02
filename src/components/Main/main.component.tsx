import { Heading } from '@chakra-ui/react'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <>
      <Heading as="h1" size="4xl">
        Paulo Luan, o brabo.
      </Heading>
    </>
  )
}

export { Main }

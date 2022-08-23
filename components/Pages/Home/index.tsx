import { useForm } from 'react-hook-form'
import {
  Stack,
  Heading,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Home = () => {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()

  const onSubmit = async (values: any) => {
      const request = await fetch(`http://localhost:3000/api/v1/post/new?userId=0d3fe7e6-3891-4a22-b4f5-c4e5c03bd69c`, 
      { 
        method: 'POST', 
        body: JSON.stringify(values),
        headers: new Headers({
          'Authorization': 'Bearer ',
          'Content-Type': 'application/json'
        })
      })
      const result = await request.json()
      console.log(result)
  }

  return (
    <Stack mt={4} w='full' px={4}>
      {
        isSubmitSuccessful && (
        <Alert status='success'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
        )
      }
      <Heading>Upload a Post</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mt={3} isInvalid={Boolean(errors.name)}>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input
            id='title'
            placeholder='Title'
            {...register('title', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
            {Boolean(errors.title) && String(errors.title?.message)}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={3} isInvalid={Boolean(errors.name)}>
          <FormLabel htmlFor='content'>Content</FormLabel>
          <Textarea
            id='content'
            placeholder='Whats on your mind...'
            {...register('content', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
            {Boolean(errors.content) && String(errors.content?.message)}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
    </Stack>
  )
}

export default Home

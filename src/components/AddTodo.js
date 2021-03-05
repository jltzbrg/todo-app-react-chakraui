import { useState } from 'react';
import { Button, HStack, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(content);
    const todo = {
      id: nanoid(),
      body: content,
    };
    //console.log(todo);
    addTodo(todo);
    setcontent('');
  }

  const [content, setcontent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='learning chakraui with todo app'
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;

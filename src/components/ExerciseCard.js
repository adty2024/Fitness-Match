import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link
    className='exercise-card'
    to={`/exercise/${exercise.id}`}
    >
      <img src = {exercise.gifUrl} alt={exercise.name} Loading="lazy" />
      <Stack direction="row">
        <Button
        sx={{
            ml:'21px', fontSize: '14px',
            color: '#fff', borderRadius: '20px',
            background: '#5476e8', textTransform: 'capitalize'
        }}
        >
            {exercise.bodyPart}
        </Button>
        
        <Button
        sx={{
            ml:'21px', fontSize: '14px',
            color: '#fff', borderRadius: '20px',
            background: '#5476e8', textTransform: 'capitalize'
        }}
        >
            {exercise.target}
        </Button>
      </Stack>

      <Typography
      ml="21px" pb="10px"
      color="#000" textTransform="capitalize"
      fontWeight="bold"
      mt="11px" fontSize="22px"

      >
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
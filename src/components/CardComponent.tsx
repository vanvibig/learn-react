import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import PrimaryLabel from './PrimaryLabel'
import { Box } from '@mui/system'
import StarIcon from '@mui/icons-material/Star'

const CardComponent: React.FC = () => {
  const [isPrimary, setIsPrimary] = useState(false)

  const onSetPrimary = () => setIsPrimary(!isPrimary)

  return (
    <Card sx={{ bgcolor: 'grey.100' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <PrimaryLabel visible={isPrimary} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.main',
            color: 'white',
            padding: '4px 8px',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          <IconButton
            size="small"
            onClick={onSetPrimary}
          >
            <StarIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ py: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
          >
            Card Title
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Some content for the card.
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button
          size="small"
          onClick={onSetPrimary}
        >
          Set as primary
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardComponent

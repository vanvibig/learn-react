import { Box, Typography } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors'

interface PrimaryLabelProps {
  visible: boolean
}

const PrimaryLabel: React.FC<PrimaryLabelProps> = ({ visible = false }) => {
  if (!visible) return null

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        bgcolor: red[400],
        padding: '4px 8px',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Typography variant="body2">Primary</Typography>
    </Box>
  )
}

export default PrimaryLabel

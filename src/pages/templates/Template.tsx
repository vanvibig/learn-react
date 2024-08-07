import { Container } from '@mui/material'
import Button from '@mui/material/Button'
import CardComponent from '../../components/CardComponent'

const Template = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ py: 5 }}
      >
        <CardComponent />
        <div className="container mx-auto p-5">
          <Button variant="contained">Hello world</Button>
        </div>
      </Container>
    </>
  )
}

export default Template

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card className="box">
    <Image src='http://i0.wp.com/teatroclub.pe/portal/wp-content/uploads/2018/02/Celular-Teatro-Club.jpg?fit=2000%2C1165' />
    <Card.Content>
      <Card.Header>
        Teatro-Celular
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard

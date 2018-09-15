import React from 'react'
import {Grid, Card} from 'semantic-ui-react'
import './Station.css'

const Station = (props) => {
    return (
        <Card className='Station'>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <div>Number</div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div>{props.name}</div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={2}>
                        <div>Distance</div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div>Buses</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card>
    )
}

export default Station;
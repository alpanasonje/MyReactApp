import React from "react";

import {Card, CardBody, CardText} from "reactstrap";

const PlacementOne=({place})=>{
    return(
        <Card>
            <CardBody>
                <CardText>{place.id}</CardText>
                <CardText>{place.name}</CardText>
                <CardText>{place.college}</CardText>
                <CardText>{place.qualification}</CardText>
                <CardText>{place.year}</CardText>
            </CardBody>
        </Card>

    )
}

export default PlacementOne;

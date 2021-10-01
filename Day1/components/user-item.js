import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import { useRouter } from "next/router";

export default function UserItem ({ user }) {
     const router = useRouter()
     const onLinkClick = (id) => {
          router.push(`userDetail/${id}`)
     }

     return (
          <Col md={4}>
               <Card onClick={()=> onLinkClick(user.id)}>
                    <Card.Img variant="top" src= {user.avatar} />
                    <Card.Body>
                         <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                         <Card.Text>
                              {user.email}
                         </Card.Text>
                    </Card.Body>
               </Card>
          </Col>
     );
}

//  UserItem;
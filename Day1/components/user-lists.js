import React from 'react';
import {Row} from 'react-bootstrap';
import UserItem from './user-item';

export default function UserLists ({ users }) {
     return (
          <Row  className="gy-3">
               {/* Looping untuk setiap User yang ada */}
               {users.map((user) => (
                    <UserItem user={user} key={user.id} />
               ))}
          </Row>
     );
}

// UserLists;
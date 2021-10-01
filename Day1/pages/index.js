import Layout from '../layouts/Layout';
import {host} from '../configs';
import UserLists from '../components/user-lists';
import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';

export default function Home({usersApi}) {
  // const data = users.data;
  const [users, setUsers] = React.useState(usersApi.data);
  const funcFilter = (e) => {
    const value = e.target.value;

    //filter data
    const filterData = users.filter((user) => {
      return (
        user.first_name.toLowerCase().search(value.toLowerCase()) != -1 ||
        user.last_name.toLowerCase().search(value.toLowerCase()) != -1
      );
    });

    if (value.length == 0) {
      (async function () {
        const res = await host.get("users?page=2");
        const { data } = res.data;
        setUsers(data);
      })();
    }

    setUsers(filterData);
  };

  return (
    <Layout>
      <Row className="justify-content-md-end nb-3 mb-3">
        <Col md={5}>
          <Form.Control type="text" placeholder="Search Users ..." onChange={funcFilter} />
        </Col>
      </Row>
      <UserLists users = {users}/>
    </Layout>
  );
}

//copy dari next js data fetching > getserversideprops
export async function getServerSideProps(context) {
  const res = await host.get('users?page=2');
  const data = res.data;

  return {
    props: { usersApi: data }, // will be passed to the page component as props
  };
} 

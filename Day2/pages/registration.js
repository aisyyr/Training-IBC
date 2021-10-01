import React from "react";
import Layout from "../layout/index.js";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "../components/Registration/registration.module.css";
import Image from "next/image";

function registration() {
  return (
    <div>
      <Layout>
        <Container>
          <h1 className={styles.title}>Ini Halaman Registration</h1>
          <Row>
            <Col xs={12} md={6}>
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <Form.Label>Alamat</Form.Label>
              <Form.Control as="textarea" size="3" type="text" placeholder="" />
            </Col>
          </Row>

        </Container>
      </Layout>
    </div>
  );
}

export default registration;

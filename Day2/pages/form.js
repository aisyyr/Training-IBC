import React from "react";
import Layout from "../layout/index.js";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "../components/Form/form.module.css";
import Image from "next/image";

function form1() {
  return (
    <div>
      <Layout>
        <Container>
          <h1 className={styles.judul}>Ini Halaman Form</h1>
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

          <Row>
            <Col xs={12} md={6}>
              <Form.Label>Kelurahan</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Kecamatan</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Label>Kota</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Provinsi</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Nomor Handphone</Form.Label>
              <Form.Control size="sm" type="text" placeholder="" />
            </Col>
          </Row>

        </Container>
      </Layout>
    </div>
  );
}

export default form1;

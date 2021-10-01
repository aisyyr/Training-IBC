import React, { useState} from "react";
import { Table, Tag, Space, Modal, Button, Input, Form, message, Checkbox } from 'antd'
import "antd/dist/antd.css";

export default function AntdContoh () {

  const dataSource = [
    {
      key: '1',
      name: 'Jisoo',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Jennie',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Lisa',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'Rose',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'Yeji',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'Lia',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'Chaeryong',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'Yuna',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'Ryujin',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'Jihyo',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '11',
      name: 'Sana',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '12',
      name: 'Momo',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '13',
      name: 'Dahyun',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '14',
      name: 'Neyon',
      age: 26,
      address: '10 Downing Street',
    },
    {
      key: '15',
      name: 'Tzuyu',
      age: 26,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];


  const { confirm } = Modal;
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
 
const showModal = () => {
  setIsModalVisible(true);
};

const editData = () => {
  setIsModalVisibleEdit(true);
};

function alertEdit(){
  message.info('message: Data Updated');
  setIsModalVisibleEdit(true);
}

function alertAdd(){
  message.info('message: Data Tersimpan');
  setIsModalVisible(false);
}

function deleteData() {
  confirm({
    title: 'Konfirmasi Penghapusan Data',
    content: 'anda ingin menghapus data ini?',
    onOk() {
      message.info('message: Data Deleted');
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
const handleOkEdit = () => {
  setIsModalVisibleEdit(false);
};

const handleCancelEdit = () => {
  setIsModalVisibleEdit(false);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

function alertSearch(){
  message.info('message: Data Search');
  setIsModalVisible(false);
};






 
    return (
    <div className="container">
      <Button type="primary" onClick={showModal}>+ Tambah data</Button>

      <Modal title="Data Pribadi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <p>Masukan Nama</p>
      <Input placeholder="Nama Anda" />
      <br/>
      <br/>
      <p>Masukan Alamat</p>
      <TextArea 
          rows={3} 
          placeholder="Alamat Anda" 
          showCount maxLength={300}
          />
          <br/>
      <Button type="primary" onClick={alertAdd} >Submit</Button>
      </Modal>

      <Form className="mt-3">
      <Table dataSource={dataSource} columns={columns} />;
      </Form>
    </div>
    );
}

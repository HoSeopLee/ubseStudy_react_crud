import React, { useState } from 'react';
import { Modal } from 'antd';

const UserList = props => {
  const { user } = props;
  const { handleDelete, handleEdit } = props;
  const [userEdit, setUserEdit] = useState('');
  const [visible, setVisible] = useState(false);

  const updateUser = e => {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value
    });
  };

  const handleOk = async e => {
    await handleEdit(userEdit);
    await setUserEdit('');
    setVisible(false);
  };
  const handleCancel = e => {
    setUserEdit('');
    setVisible(false);
  };

  return (
    <div style={{ margin: '1% 0' }}>
      <div style={styles.divContainer}>
        <div style={styles.divState}>ID</div>
        <div style={styles.divState}>Name</div>
        <div style={styles.divState}>Email</div>
        <div style={styles.divState}>수정/삭제</div>
      </div>
      {user.map((element, index) => (
        <div key={index} style={styles.divContainer}>
          <div style={styles.divState}>{element.id}</div>
          <div style={styles.divState}>{element.userName}</div>
          <div style={styles.divState}>{element.userEmail}</div>
          <div
            style={{
              ...styles.divState,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{ ...styles.buttonStyle, backgroundColor: 'blue' }}
              onClick={() => {
                setUserEdit(element);
                setVisible(true);
              }}
            >
              수정
            </div>
            /
            <div
              style={{ ...styles.buttonStyle, backgroundColor: 'red' }}
              onClick={() => handleDelete(element.id)}
            >
              삭제
            </div>
          </div>
        </div>
      ))}
      <Modal
        title="Users Edit"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{userEdit.id}</p>
        <div>
          <input
            placeholder={props.placeholder}
            type="text"
            style={styles.inputBar}
            name="userName"
            value={userEdit.userName}
            onChange={updateUser}
          />
        </div>
        <p>
          <input
            placeholder={props.placeholder}
            type="text"
            style={styles.inputBar}
            name="userEmail"
            value={userEdit.userEmail}
            onChange={updateUser}
          />
        </p>
      </Modal>
    </div>
  );
};

const styles = {
  divContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  divState: {
    width: '30%',
    border: '1px solid black'
  },
  buttonStyle: {
    width: '20%',
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    color: '#ffffff'
  }
};

UserList.defaultProps = {
  user: [],
  handleDelete: () => {}
};

export default UserList;

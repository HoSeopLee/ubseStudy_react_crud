import React, { useState } from 'react';

const Input = props => {
  const { handleInsert } = props;

  const [people, setPeople] = useState({ userName: '', userEmail: '' });
  console.log(people);
  const _handleOnChange = e => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };
  return (
    <div style={styles.divContainer}>
      <div>Name</div>
      <div>
        <input
          placeholder={props.placeholder}
          style={styles.InputBar}
          type="text"
          name="userName"
          onChange={_handleOnChange}
        />
      </div>
      <div>Email</div>
      <div>
        <input
          placeholder={props.placeholder}
          style={styles.InputBar}
          type="text"
          name="userEmail"
          onChange={_handleOnChange}
        />
      </div>
      <div
        style={{ ...styles.InputBar, backgroundColor: 'red', margin: '0 1%' }}
        onClick={() => handleInsert(people)}
      >
        버튼
      </div>
    </div>
  );
};

const styles = {
  divContainer: {
    widht: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  InputBar: {
    widht: '20%',
    height: 25,
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 25,
    border: '1px soild #f3f3f3'
  }
};

Input.defaultPorps = {
  handleInsert: () => {}
};

export default Input;

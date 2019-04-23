import React from 'react';

const AboutUs = (props) => {
  console.log('+++++', props.menuClose);
  return (<div className={(props.menuClose == true ? "col-md-11" : "col-sm-9")}
    style={{ backgroundColor: '#ccc', padding: '10px', margin: 0 }} >
    <div style={{ backgroundColor: '#eee', height: '100%', textAlign: 'center' }}>
      <h1>About Us</h1>

    </div>
  </div>);
}

export default AboutUs;
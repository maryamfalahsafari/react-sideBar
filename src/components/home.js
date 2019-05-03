import React from 'react';

const Home = (props) => {
  return (<div className={(props.menuClose == true ? "col-md-11" : "col-sm-9")}
    style={{ backgroundColor: '#f5f5f5', padding: '0px', margin: 0 }} >
    <div style={{ height: '6rem', width: '100%' }}>
      <div className="header" >
        <h2>maryam</h2>
      </div>
      <div style={{ height: '100%', textAlign: 'center' }}>

        {/* <h1>Hi Maryam!!!!</h1> */}
      </div>

    </div>
  </div>);
}

export default Home;
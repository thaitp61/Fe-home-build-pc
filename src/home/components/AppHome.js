import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppHome() {
  const [component, setComponent] = useState({});

  useEffect(() => {
    axios.get('https://server-buildingpc.herokuapp.com/component/allComponent') // lấy sản phẩm có id là 1
      .then(response => {
        setComponent(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {component.map(component => (
          <li key={component.componentID}>{component.componentName}</li>
        ))}
      </ul>
    </div>
  );
}
export default AppHome;

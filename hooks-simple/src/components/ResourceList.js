import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResource] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResource(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, []);

  return <div>{resources.length}</div>;
};

export default ResourceList;

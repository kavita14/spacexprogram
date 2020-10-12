import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import SpaceXLaunch from './spaceXLaunch';

export default (props) => {
  const {location, location: {search}={}, history, initialData=[]} = props;
  const [launchData, setLaunchData] = React.useState(initialData);
  const applyFilter = (filterType, filterVal) => {
  const query = queryString.parse(location.search);
  const modifiedQuery = {
   ...query,
   [filterType]: filterVal
   };
    history.replace({
    pathname: location.pathname,
    search: queryString.stringify(modifiedQuery)
  })
  }
  React.useEffect(()=> {
    const filters = queryString.parse(location.search);
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100&${queryString.stringify(filters)}`)
      .then(res => {
          setLaunchData(res.data);
      })
      .catch(function (error) {
      });
  }, [location])
  return <SpaceXLaunch launchData={launchData} applyFilter={applyFilter} />;
};

import React from 'react';

const YEAR_FILTER = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

const SpaceXLaunch = (props) => {
  const { applyFilter, launchData } = props;
  return (
    <div className="App">
    <body>
    <h1> SpaceX Launch Programs</h1>
    <div className="py-5">
    <div className="container">
    <div className="row">
      <div className="col-md-2">
      <div className="row">
      <div>Launch Year</div><br />
      {YEAR_FILTER.map((val)=>(<div onClick={()=>{applyFilter('launch_year',val);}} className="filterColor col-md-6 col-xs-12 col-sm-12">{val}</div>))}
      </div>
      <div className="row">
      Successful Launch
      <div onClick={()=>{applyFilter('launch_success',true);}} className="filterColor col-md-6 col-xs-12 col-sm-12">
      True
      </div>
      <div onClick={()=>{applyFilter('launch_success',false);}} className="filterColor col-md-6 col-xs-12 col-sm-12">
      False
      </div>
      </div>
      <div className="row">
      Successful Landing
      <div onClick={()=>{applyFilter('land_success',true);}} className="filterColor col-md-6 col-xs-12 col-sm-12">
      True
      </div>
      <div onClick={()=>{applyFilter('land_success',false);}} className="filterColor col-md-6 col-xs-12 col-sm-12">
      False
      </div>
      </div>
      </div>
      <div className="col-md-10">
      <div className="row hidden-md-up">
      {launchData && launchData.length>0 && launchData.map((dataObj, idx)=>(
        <div className="paddingTop10 col-md-4 col-xs-12 col-sm-6">
          <div className="card">
          <img height="200" className="card-img-top" src={dataObj.links.mission_patch} alt="Card image" />
            <div className="card-block">
              <h4 className="card-title">{dataObj.mission_name}</h4>
              <p className="card-text p-y-1"><b>Mission Ids : </b>{dataObj.mission_id.join(",")}</p>
              <p className="card-text p-y-1"><b>Launch Year : </b>{dataObj.launch_year}</p>
              {dataObj.launch_success && <p className="card-text p-y-1"><b>Successful Launch : </b>{dataObj.launch_success.toString()}</p>}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  </div>
  </div>
</body>
    </div>
  );
}

export default SpaceXLaunch;

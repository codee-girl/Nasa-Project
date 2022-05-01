const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  filghtNumber: 100,
  mission: 'Kepler Exploration X',
  rocket:'Explore IS1',
  launchDate: new Date('December 27, 2030'), 
  target:'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true, 
  success: true,
};

launches.set(launch.filghtNumber, launch);

function existsLaunchWithId(launchId){
  return launches.has(launchId);
}  

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewlaunch(launch){
  latestFlightNumber++;
  launches.set(
    launch.filghtNumber, 
    Object.assign(launch, {
     success: true, 
     upcoming: true, 
     customer: ['ZTM', 'NASA'], 
     filghtNumber: latestFlightNumber,
  })
 );
}

function abortLaunchById(launchId){
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports={
    existsLaunchWithId,
    getAllLaunches,
    addNewlaunch,
    abortLaunchById,
   
};
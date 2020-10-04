import React, { useState, useEffect } from 'react';
import { BROADCASTER, fetchData } from './utils/apis';

export default function Admin() {
  const [broadcasterStatus, setBroadcasterStatus] = useState({});
  let getStatusIntervalId = null;


  const getBroadcastStatus = async () =>  {
    try {
      const result = await fetchData(BROADCASTER);
      const active = !!result.broadcaster;

      setBroadcasterStatus({ ...result, active });
    } catch(error) {
      setBroadcasterStatus({ ...broadcasterStatus, message: error.message });
    };

    
  };

  useEffect(() => { getBroadcastStatus(); }, []);


  console.log("============",broadcasterStatus)
  // getStatusIntervalId = setInterval(getBroadcastStatus, 15000);
  return (
    <div>
      {JSON.stringify(broadcasterStatus)}
    </div>
  );
}
import { Navigate} from "react-router-dom";
import {useState} from 'react';



export default function Admin() {
  const [user, setUser] = useState(false);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return(
    <h1>this is admin</h1>
  )
}
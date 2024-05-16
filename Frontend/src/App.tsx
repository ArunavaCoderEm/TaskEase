import { useEffect } from "react";
import Page from "./Page";
import { useDispatch } from 'react-redux';
import { existData } from '../src/Dataassets/Primary';

export default function App() : React.ReactNode {

  const disp = useDispatch();
  useEffect(() => {
    const sessionid:any = sessionStorage.getItem("id");
    if(sessionid) disp(existData.login());
  },[])

  return (
    <>
      <Page/>
    </>
  )
}
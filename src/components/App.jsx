import { Routes, Route, Navigate } from 'react-router-dom';
// import AboutMe from './AboutMe/AboutMe';
// import Home from './Home/Home';
import Contacts from 'pages/Contacts';
import Works from 'pages/Works';
import Welcome from 'pages/Welcome';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    // <div>
    //   {/* <Home /> */}
    //   <AboutMe />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/works" element={<Works />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

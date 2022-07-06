import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Navbar from './Navbar';
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import AdminHome from "./pages/admin/AdminHome";
import AddParkinglot from "./pages/admin/AddParkinglot";
import AddParkingSlot from "./pages/admin/AddParkingSlot";

const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-image: '';
`;
const ContentRegister = styled.div`
    max-width: 900px;
    margin: 40px auto;
`;
const AppContent = styled.div`
    /* background-size: contain;
    background:url(${'black'});  */
`;

function App() {
  // const title = 'SMART PARKING';

  return (
    <AppContent>
      <BrowserRouter>
        <Navbar />
        <Content>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/AdminHome" element={<AdminHome />} /> */}
            {/* <Route path="/" element={<AddParkinglot />} /> */}
            <Route path="/" element={<AddParkingSlot />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />}/> */}
          </Routes>
        </Content>
        <ContentRegister>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </ContentRegister>
      </BrowserRouter>
    </AppContent>
  );
}

export default App;

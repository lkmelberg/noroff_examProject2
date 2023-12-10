import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";

// venue
import { VenueList } from "./pages/VenueList";
import { Venue } from "./pages/Venue";
import { CreateVenue } from "./pages/CreateVenue";
import { UpdateVenue } from "./pages/UpdateVenue";
import { ManagerVenues } from "./pages/ManagerVenues";

// bookings
import { CustomerBookings } from "./pages/CustomerBookings";
import { VenueBookings } from "./pages/VenueBookings";
// profile
import { Profile } from "./pages/Profile";
import { EditAvatar } from "./pages/EditAvatar";

// auth
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VenueList />} />
          <Route path="Venues/:id" element={<Venue />} />
          <Route path="CreateVenue" element={<CreateVenue />} />
          <Route path="UpdateVenue/:id" element={<UpdateVenue />} />
          <Route path="ManagerVenues" element={<ManagerVenues />} />
          <Route path="VenueBookings/:id" element={<VenueBookings />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="EditAvatar" element={<EditAvatar />} />
          <Route path="CustomerBookings" element={<CustomerBookings />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";

// venue
import { VenueList } from "./pages/Venues/VenueList";
import { Venue } from "./pages/Venues/Venue";
import { CreateVenue } from "./pages/Venues/CreateVenue";
import { UpdateVenue } from "./pages/UpdateVenue";
import { ManagerVenues } from "./pages/Venues/ManagerVenues";

// bookings
import { BookingConfirm } from "./pages/bookings/BookingConfirm";
import { CustomerBookings } from "./pages/bookings/CustomerBookings";
import { ManagerBookings } from "./pages/bookings/ManagerBookings";

// profile
import { Profile } from "./pages/profiles/Profile";
import { EditAvatar } from "./pages/profiles/EditAvatar";

// auth
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VenueList />} />
          <Route path="venues/:id" element={<Venue />} />
          <Route path="CreateVenue" element={<CreateVenue />} />
          <Route path="UpdateVenue" element={<UpdateVenue />} />
          <Route path="ManagerVenues" element={<ManagerVenues />} />
          <Route path="ManagerBookings" element={<ManagerBookings />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="EditAvatar" element={<EditAvatar />} />
          <Route path="BookingConfirm" element={<BookingConfirm />} />
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

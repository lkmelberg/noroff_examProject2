import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";

// venue
import { VenueList } from "./pages/Venues/VenueList";
import { Venue } from "./pages/Venues/Venue";
import { CreateVenue } from "./pages/Venues/CreateVenue";
import { UpdateVenue } from "./pages/Venues/UpdateVenue";
import { ManagerVenues } from "./pages/Venues/ManagerVenues";

// bookings
import { BookingConfirm } from "./pages/bookings/BookingConfirm";
import { CustomerBookings } from "./pages/bookings/CustomerBookings";
import { ManagerBookings } from "./pages/bookings/ManagerBookings";

// profile
import { CustomerProfile } from "./pages/profiles/CustomerProfile";
import { ManagerProfile } from "./pages/profiles/ManagerProfile";
import { ProfileAvatar } from "./pages/profiles/ProfileAvatar";

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
          <Route path="ManagerBookingss" element={<ManagerBookings />} />
          <Route path="ManagerProfile" element={<ManagerProfile />} />
          <Route path="CustomerProfile" element={<CustomerProfile />} />
          <Route path="BookingConfirm" element={<BookingConfirm />} />
          <Route path="CustomerBookingss" element={<CustomerBookings />} />
          <Route path="ProfileAvatar" element={<ProfileAvatar />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

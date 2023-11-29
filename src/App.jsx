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
import { ProfilePage } from "./pages/profiles/ProfilePage";
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
          <Route path="venues/:venueId" element={<Venue />} />
          <Route path="CreateVenue" element={<CreateVenue />} />
          <Route path="UpdateVenue" element={<UpdateVenue />} />
          <Route path="ManagerVenues" element={<ManagerVenues />} />
          <Route path="BookingConfirm" element={<BookingConfirm />} />
          <Route path="CustomerBookingss" element={<CustomerBookings />} />

          <Route path="ManagerBookingss" element={<ManagerBookings />} />

          <Route path="ProfilePage" element={<ProfilePage />} />
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

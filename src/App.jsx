import GuestList from "../components/GuestList";
import GuestDetails from "../components/GuestDetails";
import { useState } from "react";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState();
  return (
    <>
      <header></header>
      <main>
        <h1>Guest List</h1>
        {selectedGuest ? (
          <GuestDetails
            guestInfo={selectedGuest}
            setSelectedGuest={setSelectedGuest}
          />
        ) : (
          <GuestList setSelectedGuest={setSelectedGuest} />
        )}
      </main>
    </>
  );
}

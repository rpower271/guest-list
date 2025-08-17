import { useEffect, useState } from "react";
import Guest from "./Guest.jsx";

const GuestList = ({setSelectedGuest}) => {
  const [loading, setLoading] = useState(false);
  const [guests, setGuests] = useState([]);
//   const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-Richard/guests"
        );
        const data = await res.json();

        setGuests(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);
  console.log(guests);
  return (
    <div>
      {guests.map((guestObj, index) => (
        <Guest
          key={index}
          guestInfo={guestObj}
          setSelectedGuest={setSelectedGuest}
        />
      ))}
    </div>
  );
};

export default GuestList;

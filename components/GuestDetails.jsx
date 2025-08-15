const GuestDetails = ({ guestInfo, setSelectedGuest }) => {
  console.log(guestInfo);

  return (
    <div>
      <div>
        <p>Name: {guestInfo.name}</p>
        <p>Email: {guestInfo.email}</p>
        <p>Phone: {guestInfo.phone}</p>
        <p>Bio: {guestInfo.bio}</p>
        <p>Job: {guestInfo.job}</p>
      </div>

      <button onClick={() => setSelectedGuest(null)}>Back</button>
    </div>
  );
};

export default GuestDetails;

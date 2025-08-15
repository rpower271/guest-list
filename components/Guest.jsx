const Guest = ({ guestInfo, setSelectedGuest }) => {
  const selectGuest = () => {
    if (typeof setSelectedGuest === "function") {
      setSelectedGuest(guestInfo);
    } else {
      console.error(
        "setSelectedGuest prop is not a function:",
        setSelectedGuest
      );
    }
  };

  return (
    <div onClick={selectGuest}>
      {guestInfo.name} | {guestInfo.email} | {guestInfo.phone}
    </div>
  );
};

export default Guest;

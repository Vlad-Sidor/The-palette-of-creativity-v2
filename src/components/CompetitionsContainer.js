import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./CompetitionsFilter";
import CompetitionsList from "./CompetitionsList";

function CompetitionsContainer({ context }) {
  const { loading, sortedRooms, competitions } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CompetitionsList competitions={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(CompetitionsContainer);

//<RoomsList rooms={sortedRooms} />
//<RoomsFilter rooms={rooms} />

// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, setRoom, sortedRooms,rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} setRoom={setRoom} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
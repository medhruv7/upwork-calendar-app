import Navbar from './Navbar/Navbar'
import './App.css'
import DateBar from './DateBar/DateBar';
import BottomBar from './BottomBar/BottomBar';
import RoomBar from './RoomBar/RoomBar';
import BookingModal from './BookingModal/BookingModal';

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <div className="date-bar">
        <DateBar />
      </div>
      <div>
        <RoomBar />
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
      <div>
        <BookingModal />
      </div>
    </div>
  );
}

export default App;

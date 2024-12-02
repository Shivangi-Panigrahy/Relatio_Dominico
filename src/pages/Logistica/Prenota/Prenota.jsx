import ReactBigCalendar from "../../../component/LogisticaCalendar/Calendar"
import Header from "../../../component/header/Header"

const Prenota = () => {
  return (
    <>
      <Header/>
      <div className="pageTemplate">
      <div className="calenderCard">
          {/* Calendar Component */}
          <ReactBigCalendar />
        </div>

      </div>
    </>
  )
}

export default Prenota

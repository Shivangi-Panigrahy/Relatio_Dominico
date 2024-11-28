import ReactBigCalendar from "../../../component/AdministrationCalendar/Calendar"
import Header from "../../../component/header/Header"

const AmministrazioneScadenzario = () => {
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

export default AmministrazioneScadenzario

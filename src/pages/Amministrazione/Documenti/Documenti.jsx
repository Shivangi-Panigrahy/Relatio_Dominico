import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"

const AmministrazioneDocumenti = () => {
  return (
    <>
   <Header />
   <div className="pageTemplate">
   <InvoiceDashboard amministrazioneDocumenti={true}/>
   </div>
    </>
  )
}

export default AmministrazioneDocumenti

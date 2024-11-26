import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"

const AmministrazioneImposte = () => {
  return (
    <>
    <Header />
    <div className="pageTemplate">
    <InvoiceDashboard amministrazioneDocumenti={true}/>
    </div>
     </>
  )
}

export default AmministrazioneImposte

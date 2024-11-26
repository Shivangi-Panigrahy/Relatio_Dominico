import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"

const AmministrazioneAsset = () => {
  return (
    <>
    <Header />
    <div className="pageTemplate">
    <InvoiceDashboard amministrazioneAsset={true}/>
    </div>
     </>
  )
}

export default AmministrazioneAsset

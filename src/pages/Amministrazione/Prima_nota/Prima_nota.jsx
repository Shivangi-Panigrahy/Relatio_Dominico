import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"

const Prima_nota = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <InvoiceDashboard primaNota={true} />
      </div>
    </>
  )
}

export default Prima_nota

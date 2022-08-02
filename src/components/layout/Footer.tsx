import { SITE_TITLE } from "../../constants/constants"

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white text-center py-4">
      <p className="mb-1">{SITE_TITLE} &copy;</p>
      <p>Developed by Stephania Mwikali</p>
    </footer>
  )
}

export default Footer
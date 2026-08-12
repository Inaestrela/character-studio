import { ArrowLeft, UserRound } from 'lucide-react'

function HeaderSection() {
  return (
    <header className="header-section">
      {/* Header left */}
      <div className="header-left">
        <button className="icon-button" aria-label="Back">
            <ArrowLeft size={22} />
        </button>
      </div>

      {/* Header title */}
      <div className="header-title">
        CHARACTER <span>STUDIO</span>
      </div>

      {/* Header right */}
      <div className="header-right">
        <button className="login-button">
            <UserRound size={16} />
             LOGIN
        </button>
      </div>
    </header>
  )
}

export default HeaderSection

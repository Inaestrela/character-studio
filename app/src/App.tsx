import HeaderSection from './components/HeaderSection'
import ModelMenu from './components/ModelMenu'
import ModelInventoryPanel from './components/ModelInventoryPanel'
import ColorPanel from './components/ColorPanel'
import Actions from './components/Actions'
import Stage from './components/Stage'

function App() {
  return (
    <div className="app">

      {/* Header */}
      <HeaderSection />

      {/* Model categories */}
      <ModelMenu />

      {/* Left inventory */}
      <div className="float-left">
        <ModelInventoryPanel />
      </div>

      {/* Right panels */}
      <div className="float-right">
        <ColorPanel />
        <Actions />
      </div>

      {/* 3D stage */}
      <Stage />

    </div>
  )
}

export default App
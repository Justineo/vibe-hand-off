import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ExpressionShift from './components/ExpressionShift'
import Iceberg from './components/Iceberg'
import SpatialVsTemporal from './components/SpatialVsTemporal'
import SemanticGap from './components/SemanticGap'
import ComparisonTable from './components/ComparisonTable'
import IllusionOfCompleteness from './components/IllusionOfCompleteness'
import Strengths from './components/Strengths'
import Recommendation from './components/Recommendation'
import Conclusion from './components/Conclusion'

function App() {
  return (
    <div className="relative bg-navy-950 min-h-screen">
      <Navigation />

      <div id="hero">
        <Hero />
      </div>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="expression-shift">
        <ExpressionShift />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="iceberg">
        <Iceberg />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="spatial-temporal">
        <SpatialVsTemporal />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="semantic-gap">
        <SemanticGap />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="comparison">
        <ComparisonTable />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="illusion">
        <IllusionOfCompleteness />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="strengths">
        <Strengths />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="recommendation">
        <Recommendation />
      </div>

      <div className="max-w-xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div id="conclusion">
        <Conclusion />
      </div>
    </div>
  )
}

export default App

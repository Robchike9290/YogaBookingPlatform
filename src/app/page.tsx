'use client'

import { useState, useEffect } from 'react'
import CurrentStudioAndSelection from './currentStudioAndSelection'
import RootLayout from './layout'
import AboutStudio from '@/components/AboutStudio'
import PricingPlans from '@/components/PricingPlans'

export default function Home() {
  const [backendStatus, setBackendStatus] = useState('Checking...')

  useEffect(() => {
    // Check backend connection
    fetch('http://localhost:8080/api/health')
      .then(response => response.json())
      .then(data => setBackendStatus(data.status))
      .catch((error) => setBackendStatus(`Backend not available: ${error}`))
  }, [])

  return (
    <RootLayout>
      <div className="grid grid-cols-5 grid-rows-3">
        <CurrentStudioAndSelection />
        <PricingPlans />
        <AboutStudio studioName={'Bouldin'} />
      </div>
    </RootLayout>
  )
}

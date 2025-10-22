'use client'

import { useState, useEffect } from 'react'
import NavBar from './navBar'
import CurrentStudioAndSelection from './currentStudioAndSelection'
import PricingPlans from './pricingPlans'
import TitleBar from '@/components/TitleBar'
import RootLayout from './layout'
import AboutStudio from './AboutStudio'

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
    <RootLayout className="bg-blue-800">
      <TitleBar />
      <br />
      <NavBar />
      <div className="grid grid-cols-5 grid-rows-3">
        <CurrentStudioAndSelection />
        <PricingPlans />
        <AboutStudio studioName={'Bouldin'} />
      </div>
    </RootLayout>
  )
}

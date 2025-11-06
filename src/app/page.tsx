'use client'

import { useState, useEffect } from 'react'
import AboutStudio from '@/app/_components/AboutStudio'
import PricingPlans from '@/app/_components/PricingPlans'
import CurrentStudioAndSelection from '@/app/_components/CurrentStudioAndSelection'

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
    <div className="grid grid-cols-5 grid-rows-3">
      <CurrentStudioAndSelection />
      <PricingPlans />
      <AboutStudio studioName={'Bouldin'} />
    </div>
  )
}

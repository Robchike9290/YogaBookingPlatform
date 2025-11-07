'use client'

import { useState, useEffect } from 'react'
import AboutStudio from '@/app/_components/AboutStudio'
import PricingPlans from '@/app/_components/PricingPlans'
import CurrentStudioAndSelection from '@/app/_components/CurrentStudioAndSelection'
import { v4 } from 'uuid'

export default function Home() {
  // TODO: Update this to be actual DB data.  Have it update upon page load by withdrawing it from the DB.
  const [allStudios, setAllStudios] = useState([
    {
      id: v4(),
      name: 'Crestview'
    },
    {
      id: v4(),
      name: 'Bouldin'
    },
    {
      id: v4(),
      name: 'Riata'
    },
    {
      id: v4(),
      name: 'Downtown'
    },
    {
      id: v4(),
      name: 'Mueller'
    }
  ])
  
  const [backendStatus, setBackendStatus] = useState('Checking...')
  const [currentStudioName, setCurrentStudioName] = useState(allStudios[0].name)

  useEffect(() => {
    // Check backend connection
    fetch('http://localhost:8080/api/health')
      .then(response => response.json())
      .then(data => setBackendStatus(data.status))
      .catch((error) => setBackendStatus(`Backend not available: ${error}`))
  }, [])

  return (
    <div className="grid grid-cols-5 grid-rows-3">
      <CurrentStudioAndSelection 
        allStudios={allStudios}
        setCurrentStudioName={setCurrentStudioName} 
      />
      <PricingPlans />
      <AboutStudio currentStudioName={currentStudioName} />
    </div>
  )
}

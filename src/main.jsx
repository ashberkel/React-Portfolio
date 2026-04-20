import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppMobile from './AppMobile.jsx'
import AppFull from './AppFull.jsx'

const RootComponent = window.innerWidth < 768 ? AppMobile : AppFull;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);


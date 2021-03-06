import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppWithReactQuery from './AppWithReactQuery'

import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AppWithReactQuery />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

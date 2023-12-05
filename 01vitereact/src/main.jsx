import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai or Coffee ??</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google </a>
)

const anotherUser = "Chai aur code"

const reactElement =  React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click ME to Visit Google | ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  // reactElement
  // anotherElement
  reactElement
)
 
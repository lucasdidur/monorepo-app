import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('monorepo-app', () => App)
AppRegistry.runApplication('monorepo-app', {
  rootTag: document.getElementById('root'),
})

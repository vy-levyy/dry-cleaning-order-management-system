import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import UserDetails from './components/User/UserDetails'
import Users from './containers/Users/Users'
import UserAddEdit from './components/UserAddEdit/UserAddEditForm'

import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

toast.configure({ autoClose: 2000, draggable: false })

function App() {
  let routes = (
    <Switch>
      <Route path="/users/add" exact component={UserAddEdit} />
      <Route path="/users/:id" exact render={props => <UserDetails {...props} />} />
      <Route path="/users/:id/edit" exact render={props => <UserAddEdit {...props} />} />
      <Route path="/users" component={Users} />
      <Redirect to="/users" />
    </Switch>
  )

  return routes
}

export default App

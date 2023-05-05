//react
import React from 'react';
//end react

//react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//end react-router-dom

//components
import HomePage from './routes/Home_Route/HomePage';
import ErrorPage from './routes/Error_Route/ErrorPage';
import EmployeesPage from './routes/Employees_Route/EmployeesPage';
import VehiclesPage from './routes/Vehicles_Route/VehiclesPage';
import ProfileRoute from './routes/Profile_Route/Profile_Route';
import MessengerRoute from './routes/Messenger_Route/Messenger_Route';
import AdminDashboards from './routes/Dashboard_Route/Dashboards_admin';
import PrivateRoute from './routes/Private_Route/PrivateRoute';
//end components

//redux
import { dataActions, uiActions } from './store/ui_slice';
import storage from './store/redux';
//end redux

//firebase
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './services/config';
import MapPage from './routes/Map_Route/map_dashboard/map_dashboard';
//end firebase

onAuthStateChanged(auth, async (user) => {
  try {
    if (user) {
      const docRef = doc(db, "USERS_INFO", auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        storage.dispatch(dataActions.setUser(docSnap.data()))
      }
      if (storage.getState().ui.isLoadingVisible === true) {
        storage.dispatch(uiActions.toggleLoading()) //turn off loading screen 
      }
    }
    else {
      storage.dispatch(dataActions.setUser({}))
      if (storage.getState().ui.isLoadingVisible === true) {
        storage.dispatch(uiActions.toggleLoading()) //turn off loading screen 
      }
    }
  }
  catch (error) {
    console.log(error)
  }
})



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboards" element={(<PrivateRoute><AdminDashboards /></PrivateRoute>)} />
        <Route path="/dashboards/map" element={<PrivateRoute><MapPage /></PrivateRoute>} />
        <Route path="/dashboards/employees" element={<PrivateRoute><EmployeesPage /></PrivateRoute>} />
        <Route path="/dashboards/vehicles" element={<PrivateRoute><VehiclesPage /></PrivateRoute>} />
        <Route path="/dashboards/messengers" element={<PrivateRoute><MessengerRoute /></PrivateRoute>} />
        <Route path="/dashboards/profile" element={<PrivateRoute><ProfileRoute /></PrivateRoute>} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

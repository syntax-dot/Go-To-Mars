import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TechnologyPage from '../views/TechnologyPage.vue'
import FlightSchedulePage from '../views/FlightSchedulePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import GuaranteesPage from '../views/GuaranteesPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: HomePage, name: 'home' },
  { path: '/Technology', component: TechnologyPage, name: 'technology' },
  { path: '/FlightSchedule', component: FlightSchedulePage, name: 'flightSchedule' },
  { path: '/Guarantees', component: GuaranteesPage, name: 'guarantees' },
  { path: '/AboutPage', component: AboutPage, name: 'about' },
  { path: '/ContactsPage', component: ContactsPage, name: 'contacts' },
]

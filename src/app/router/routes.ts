import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TechnologyPage from '../views/TechnologyPage.vue'
import FlightSchedulePage from '../views/FlightSchedulePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import GuaranteesPage from '../views/GuaranteesPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: HomePage, name: 'home' },
  { path: '/technology', component: TechnologyPage, name: 'technology' },
  { path: '/schedule', component: FlightSchedulePage, name: 'flightSchedule' },
  { path: '/guarantees', component: GuaranteesPage, name: 'guarantees' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contacts', component: ContactsPage, name: 'contacts' },
]

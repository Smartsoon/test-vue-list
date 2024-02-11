import { createRouter, createWebHistory } from 'vue-router'
import CharactersCardsListPage from '@/pages/CharactersCardsListPage.vue'
const CharacterItemPage = () => import('@/pages/CharacterItemPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CharactersCardsListPage
    },
    {
      path: '/character/:id',
      component: CharacterItemPage
    },
  ]
})

export default router

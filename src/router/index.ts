import { createRouter, createWebHistory } from 'vue-router'

const CharacterItemPage = () => import('@/pages/CharacterItemPage.vue')
const CharactersCardsListPage = () => import('@/pages/CharactersCardsListPage.vue')

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
    }
  ]
})

export default router

import { defineStore } from "pinia"
import { getHomeHotSuggests, getHomeCategories } from "@/services"
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategorysData() {
      const res = await getHomeCategories()
      this.categories = res.data
    }
  }
})

export default useHomeStore
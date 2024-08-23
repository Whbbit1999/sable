export function useRefresh() {
  const router = useRouter()
  const tabStore = useTabStore()

  async function refresh() {
    await tabStore.refresh(router)
  }
  return {
    refresh,
  }
}

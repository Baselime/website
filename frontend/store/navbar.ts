export const state = () => ({
  isOpen: false,
})

export const mutations = {
  toggle(state: any, val: boolean) {
    state.isOpen = val;
  }
}

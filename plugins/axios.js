export default function ({ app: { $axios } }) {
  $axios.setToken('token '+process.env.token)
}

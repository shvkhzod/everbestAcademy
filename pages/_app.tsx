import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Wrapper, Status } from "@googlemaps/react-wrapper"


const render = (status: Status) => {
  return <h1>{status}</h1>
}
export default function App({ Component, pageProps }: AppProps) {
  return (
  <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
     <Component {...pageProps} />
  </Wrapper>)
}

import Layout from "../layout/Layout";
import "../styles/globals.css";
import { AuthContextProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;

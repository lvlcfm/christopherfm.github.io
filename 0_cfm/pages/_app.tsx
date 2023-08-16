import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['christopher.fm', 'www.christopher.fm'],
      });
    }

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

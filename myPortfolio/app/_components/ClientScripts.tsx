'use client';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export default function ClientScripts() {
  return (
    <>
      <GoogleAnalytics gaId="G-MHLY1LNGY5" />
      <Script id="hotjar" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:6380611,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
    </>
  );
} 
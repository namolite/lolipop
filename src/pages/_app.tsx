import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'

import Preloader from '@/components/preloader/preloader';
import Layout from '@/components/layout/layout'

import '@/styles/globals.css'



export default function App({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    // 模拟数据加载
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 假设加载需要2秒
  }, []);

  return (
    <>
      {!loadingComplete && <Preloader setLoadingComplete={setLoadingComplete} />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}
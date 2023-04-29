import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Header />

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 bg-primary`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
      <Footer />
    </Layout>
  );
}

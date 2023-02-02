import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { groq } from "next-sanity";
import { client } from "../sanity";

const Home: NextPage = ({ products }: any) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#dedede]">
      <Head>
        <title>Shoes Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Banner />

      <Products products={products} />

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const query = groq`*[_type == "product"]`;
  const products: IProduct[] = await client.fetch(query);

  return {
    props: { products },
  };
}
export default Home;

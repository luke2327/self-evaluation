import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import self from "../assets/md/self-ev.md";
import ReactMarkdown from "react-markdown";

const Home: NextPage<{
  source: any;
}> = ({ source }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MDXRemote {...source} />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = self;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

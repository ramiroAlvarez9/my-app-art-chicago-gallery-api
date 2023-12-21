import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string
  stargazers_count: number
  data: any 

};

export const getServerSideProps = (
    async () => {
 
      // Fetch data from external API
        const res = await fetch(`https://api.artic.edu/api/v1/artworks?fields=id,title,image_id`);
        const repo: Repo = await res.json();
      // Pass data to the page via props'
      return { props: {repo, } };

}) satisfies GetServerSideProps<{ repo: Repo  }>;

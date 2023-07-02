import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ParsedUrlQuery } from "querystring";
import Header from "@/components/Header";
import MarkdownRenderer from "@/components/Markdown";
import { Box, Stack } from "@mui/material";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface BlogPageProps {
  blogId: string;
}

const BlogPage: NextPage<BlogPageProps> = ({ blogId }) => {
  const router = useRouter();

  useEffect(() => {
    if (!blogId) {
      router.push('/404'); // Redirect to a custom 404 page if blog ID is not found
    }
  }, [blogId, router]);

  return (
    <div>
      <Header/>
      <Box
        display="flex"
        alignItems="left"
        justifyContent="left"
        marginTop={5}
        sx={{ textAlign: "left", fontFamily: "Monospace" }}
      >
      <Stack direction="column" spacing={1} alignItems="left">
      <MarkdownRenderer markdownFile={"/blogs/" + blogId + ".md"} />
      </Stack>
      </Box>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ params }) => {
  const { id } = params as Params;
  // Fetch data based on the dynamic ID
  // Here you can use the ID to query a database or an API
  // For demonstration purposes, we'll just return the ID itself
  return {
    props: {
      blogId: id as string,
    },
  };
};

export default BlogPage;

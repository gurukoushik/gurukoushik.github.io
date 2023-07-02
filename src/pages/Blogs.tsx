import * as React from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import Header from "@/components/Header";
import MarkdownRenderer from "@/components/Markdown";

export default function BlogsPage() {
  React.useEffect(() => {
    document.title = "Blog - Guru Senthil";
  }, []);

  const blogs = [
    {
      id: 1,
      title: "My First Blog",
      date: "2023/07/02",
      mdFile: "blogs/blog1.md",
    },
    {
      id: 2,
      title: "My Second Blog",
      date: "2023/07/03",
      mdFile: "blogs/blog2.md",
    },
  ];

  return (
    <>
      <Header />

      <Box
        display="flex"
        alignItems="left"
        justifyContent="left"
        marginTop={5}
        sx={{ textAlign: "left", fontFamily: "Monospace" }}
      >
        <Stack direction="column" spacing={1} alignItems="left">
          <Typography
            variant="h4"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            Blogs
          </Typography>
          {blogs.map((blog, index) => (
            <Link key={index} href={'/blog/' + blog.id}>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
              >
                [{blog.date}] {blog.title}
              </Typography>
            </Link>
          ))}
          <Typography
            variant="h4"
            sx={{ fontFamily: "Monospace", fontWeight: "bold", pt: 4 }}
          >
            Snippets
          </Typography>
          <MarkdownRenderer markdownFile="/blogs/snippets.md" />
        </Stack>
      </Box>
    </>
  );
}

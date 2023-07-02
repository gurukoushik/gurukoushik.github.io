import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  markdownFile: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownFile }) => {
  const [markdownContent, setMarkdownContent] = React.useState<string>('');

  React.useEffect(() => {
    // Read the Markdown file and set the content
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [markdownFile]);

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
};

export default MarkdownRenderer;

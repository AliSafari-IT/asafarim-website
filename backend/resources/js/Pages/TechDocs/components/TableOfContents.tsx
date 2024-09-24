// resources/js/components/TableOfContents.tsx
import { MarkdownHeadingType } from '@/types';
import React from 'react';

interface TableOfContentsProps {
  headings: MarkdownHeadingType[];
  activeHeading: string | null;
  onHeadingClick: (headingId: string, headingText: string, headingLevel: number) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings, activeHeading, onHeadingClick }) => {
  return (
    <aside className="table-of-contents">
      <h2 className="toc-heading">Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.headingId}
            className={`toc-level-${heading.level} ${activeHeading === heading.headingId ? 'active' : ''}`}
          >
            <a href="#" onClick={() => onHeadingClick(heading.headingId, heading.headingText, heading.level)}>
              {heading.headingText}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;

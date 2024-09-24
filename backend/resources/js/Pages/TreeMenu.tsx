import { TreeNode } from '@/types';
import React, { useState } from 'react';

interface TreeNodeProps {
  node: TreeNode; // A single node passed to the TreeNode component
}

interface TreeMenuProps {
  data: TreeNode[]; // Array of nodes for the TreeMenu component
}

// Recursive TreeNode component
const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node }) => {
  const [isOpen, setIsOpen] = useState(node.expanded || false); // Use node's expanded state or default to false

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li key={node.key} className="tree-node">
      {node.nodes && node.nodes.length > 0 ? (
        <>
          <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {isOpen ? '▼' : '►'} {node.label}
          </span>
          {isOpen && (
            <ul>
              {node.nodes.map((childNode) => (
                <TreeNodeComponent key={childNode.key} node={childNode} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <span
          onClick={() => {
            if (node.url) {
              window.open(node.url, '_blank');
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          {node.label}
        </span>
      )}
    </li>
  );
};

// Main TreeMenu component
const TreeMenuComponent: React.FC<TreeMenuProps> = ({ data }) => {
  return (
    <ul className="tree-menu">
      {data.map((node) => (
        <TreeNodeComponent key={node.key} node={node} />
      ))}
    </ul>
  );
};

export default TreeMenuComponent;

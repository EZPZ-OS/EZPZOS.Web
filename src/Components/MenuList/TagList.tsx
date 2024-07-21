// File: src/Components/TagList.tsx
import React from "react";

interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-side-bar-gradient text-white text-[10px] px-1 py-[1.5px] rounded-sm mr-1"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;

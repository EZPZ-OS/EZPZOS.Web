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
					className="inline-block bg-side-bar-gradient text-white text-[12px] px-2 py-[2px] rounded-sm mr-2"
				>
					#{tag}
				</span>
			))}
		</div>
	);
};

export default TagList;

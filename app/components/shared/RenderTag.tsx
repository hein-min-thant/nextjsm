import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface Props {
  _id: number;
  name: string;
  totalQuestion?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestion, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        id={_id.toString()}
        className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase"
      >
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestion}</p>
      )}
    </Link>
  );
};

export default RenderTag;

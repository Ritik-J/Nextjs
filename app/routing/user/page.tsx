import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      nesting route routing user
      <ul>
        <li>
          <Link href={"/routing/user/1"}>User 1</Link>
        </li>
        <li>
          <Link href={"/routing/user/2"}>User 2</Link>
        </li>
        <li>
          <Link href={"/routing/user/3"}>User 3</Link>
        </li>
        <li>
          <Link href={"/routing/user/4"}>User 4</Link>
        </li>
        <li>
          <Link href={"/routing/user/5"}>User 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeleton() {
  return (
    <SkeletonTheme baseColor="#B8B8B8" highlightColor="#C8C8C8">
      {[...Array(20)].map((e, i) => (
        <div className="scroller_wrap" style={{margin: "5px 10px"}}>
          <span key={i}>
            <Skeleton duration={2} direction="ltr" height={225} width={150} />
          </span>
          <span key={i}>
            <Skeleton duration={2} direction="ltr" count={3}/>
          </span>
        </div>
      ))}
    </SkeletonTheme>
  );
}

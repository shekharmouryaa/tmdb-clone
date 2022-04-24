import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeleton() {
  return (
    <SkeletonTheme baseColor="#B8B8B8" highlightColor="#C8C8C8">
      {[...Array(20)].map((e, i) => (
        <div key={i} className="scroller_wrap" style={{margin: "5px 10px"}}>
          <span >
            <Skeleton duration={2} direction="ltr" height={225} width={150} />
          </span>
          <span >
          <Skeleton width={30} height={30} duration={2} direction="ltr" circle={true} count={1}/>
            <Skeleton duration={2} direction="ltr" count={2}/>
            
          </span>
        </div>
      ))}
    </SkeletonTheme>
  );
}

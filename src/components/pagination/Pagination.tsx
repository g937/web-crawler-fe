import { useEffect, useState } from "react";
import {
  Pagination as SemPagination,
  StrictPaginationProps as SemPaginationProps,
} from "semantic-ui-react";

interface PaginationProps
  extends Omit<SemPaginationProps, "firstItem" | "lastItem" | "siblingRange"> {}

function isMobileSize() {
  const { innerWidth: width } = window;
  return width < 600;
}
const Pagination = (props: PaginationProps) => {
  const [isMobile, setIsMobile] = useState(isMobileSize());

  useEffect(() => {
    const setMobile = () => {
      setIsMobile(isMobileSize());
    };

    window.addEventListener("resize", setMobile);

    return () => {
      window.removeEventListener("resize", setMobile);
    };
  }, []);

  return (
    <SemPagination
      {...props}
      boundaryRange={isMobile? 0 : undefined}
      siblingRange={isMobile ? 0 : 1}
      lastItem={isMobile ? false : undefined}
      firstItem={isMobile ? false : undefined}
    />
  );
};

export default Pagination;
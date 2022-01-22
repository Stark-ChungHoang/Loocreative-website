import React, { useEffect, useMemo } from 'react';

export default function MenuNav() {

    const handleActiveMenuNav = (dataPage: string) => {
        const listNav = document.querySelectorAll<HTMLElement>(".menu_nav > div");
        const listNavArray = Array.from(listNav);
        listNavArray.forEach((item) => {
            if (item.getAttribute("data-page") === dataPage) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    };

    const handleScroll = (e: Event) => {
        const scrollY = window.scrollY;
        const pageTwoOffset =
            document.querySelector<HTMLElement>("#page-two")?.offsetTop;
        const pageThreeOffset =
            document.querySelector<HTMLElement>("#page-three")?.offsetTop;
        const pageFourOffset =
            document.querySelector<HTMLElement>("#page-four")?.offsetTop;
        const pageFiveOffset =
            document.querySelector<HTMLElement>("#page-five")?.offsetTop;
        if (pageTwoOffset && pageThreeOffset && pageFourOffset && pageFiveOffset) {
            if (scrollY < pageTwoOffset) {
                window.location.hash = "#firstPage";
                handleActiveMenuNav("firstPage");
            } else if (scrollY < pageThreeOffset) {
                handleActiveMenuNav("secondPage");
                window.location.hash = "#secondPage";
            } else if (scrollY < pageFourOffset) {
                window.location.hash = "#thirdPage";
                handleActiveMenuNav("thirdPage");
            } else if (scrollY < pageFiveOffset) {
                handleActiveMenuNav("fourthPage");
                window.location.hash = "#fourthPage";
            } else if (scrollY >= pageFiveOffset) {
                handleActiveMenuNav("fifthPage");
                window.location.hash = "#fifthPage";
            }
        }
    };
    const handleScrollMemo = useMemo(() => handleScroll, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollMemo);
    }, []);

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handleScrollMemo);
        };
    }, []);

    return <nav className="menu_nav">
        <div
            data-page="firstPage"
            className="active"
            onClick={() => {
                window.scroll(0, 0);
                handleActiveMenuNav("firstPage");
            }}
        >
            {" "}
        </div>
        <div
            data-page="secondPage"
            onClick={() => {
                const pageTwoOffset =
                    document.querySelector<HTMLElement>("#page-two")?.offsetTop;
                if (pageTwoOffset) {
                    window.scroll(0, pageTwoOffset);
                    handleActiveMenuNav("secondPage");
                }
            }}
        >
            {" "}
        </div>
        <div
            data-page="thirdPage"
            onClick={() => {
                const pageThreeOffset =
                    document.querySelector<HTMLElement>("#page-three")?.offsetTop;
                if (pageThreeOffset) {
                    window.scroll(0, pageThreeOffset);
                    handleActiveMenuNav("thirdPage");
                }
            }}
        >
            {" "}
        </div>
        <div
            data-page="fourthPage"
            onClick={() => {
                const pageFourOffset =
                    document.querySelector<HTMLElement>("#page-four")?.offsetTop;
                if (pageFourOffset) {
                    window.scroll(0, pageFourOffset);
                    handleActiveMenuNav("fourthPage");
                }
            }}
        >
            {" "}
        </div>
        <div
            data-page="fifthPage"
            onClick={() => {
                const pageFiveOffset =
                    document.querySelector<HTMLElement>("#page-five")?.offsetTop;
                if (pageFiveOffset) {
                    window.scroll(0, pageFiveOffset);
                    handleActiveMenuNav("fifthPage");
                }
            }}
        >
            {" "}
        </div>
    </nav>;
}

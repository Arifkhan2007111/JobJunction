import React, { useRef } from "react";

const center = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    fontWeight: "900",
    color: "white"
}

const Scroll =() =>{

        const section1 = useRef()
        const section2 = useRef()
        const section3 = useRef()
        const section4 = useRef()
        const section5 = useRef()
        const section6 = useRef()

        const scrollHandler = (elemRef) =>{
            // console.log(elemRef)
            window.scrollTo({top: elemRef.current.offsetTop, behavior: "smooth"})
        }

    return (
        <>
            <div>
                <header>
                    <ul style={{
                        width: "100%",
                        color: "white",
                        display: "flex",
                        justifyContent:"center",
                        alignItems: "center",
                        gap: "100px",
                        listStyle: "none",
                        cursor: "pointer",
                        position: "fixed"
                    }}>
                        <li onClick={() => scrollHandler(section1)}>SECTION 1</li>
                        <li onClick={() => scrollHandler(section2)}>SECTION 2</li>
                        <li onClick={() => scrollHandler(section3)}>SECTION 3</li>
                        <li onClick={() => scrollHandler(section4)}>SECTION 4</li>
                        <li onClick={() => scrollHandler(section5)}>SECTION 5</li>
                        <li onClick={() => scrollHandler(section6)}>SECTION 6</li>
                    </ul>
                </header>

                <div ref={section1} style={{
                    ...center,
                    backgroundColor: "gray"
                }}>SECTION 1</div>

                <div ref={section2} style={{
                    ...center,
                    backgroundColor: "blue"
                }}>SECTION 2</div>

                <div ref={section3} style={{
                    ...center,
                    backgroundColor: "red"
                }}>SECTION 3</div>

                <div ref={section4} style={{
                    ...center,
                    backgroundColor: "green"
                }}>SECTION 4</div>

                <div ref={section5} style={{
                    ...center,
                    backgroundColor: "pink"
                }}>SECTION 5</div>

                <div ref={section6} style={{
                    ...center,
                    backgroundColor: "black"
                }}>SECTION 6</div>

            </div>
        </>
    )
}

export default Scroll
import Container from "@/components/elements/container";

export default function layout({children} : {children : React.ReactNode}){

    return <Container >
        <div >{children}</div>
    </Container>
}


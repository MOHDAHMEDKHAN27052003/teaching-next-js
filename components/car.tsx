import { CarProps } from "@/app/car/page";

export default function Car(props: CarProps) {
    return (
        <>
            <h2>I am a {props.brand} Car, {props.model} model!</h2>
        </>
    );
}
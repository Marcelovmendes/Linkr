import { Link } from "react-router-dom";
import TextGroup from "./Components/TextGroup";
import { Button, FormStyle, Input, MainComponentStyle } from "./Components/styles";
import { useState } from "react";

export default function SignUp() {
    const [form, setForm] = useState({})

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    return (
        <MainComponentStyle>
            <TextGroup/>
            <FormStyle onSubmit={() => alert("ainda não ta pronto aaaaaa")}>
                <Input placeholder="e-mail" name="email" onChange={(e) => handleForm(e)} />
                <Input placeholder="password" name="password" onChange={(e) => handleForm(e)} />
                <Input placeholder="username" name="name" onChange={(e) => handleForm(e)} />
                <Input placeholder="picture url" name="picture_url" onChange={(e) => handleForm(e)} />
                <Button type="submit" value="Sign Up" />
                <Link to="/">Switch back to log in</Link>
            </FormStyle>
        </MainComponentStyle>
    )
}
import { Link, useNavigate } from "react-router-dom";
import TextGroup from "./Components/TextGroup";
import { Button, FormStyle, Input, MainComponentStyle } from "./Components/styles";
import { useState } from "react";
import { login } from "../../services/api";

export default function SignIn() {
    const [form, setForm] = useState({})
    const navigate = useNavigate();
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }
    function handleSubmit(e) {
        e.preventDefault()
        login(form)
            .then(res => {
                alert(res.data)
                navigate('/timeline')
            }
            )
            .catch(err => {
                alert(err);
            });
    }
    return (
        <MainComponentStyle>
            <TextGroup />
            <FormStyle onSubmit={handleSubmit}>
                <Input placeholder="e-mail" name="email" onChange={(e) => handleForm(e)} />
                <Input placeholder="password" type="password" name="password" onChange={(e) => handleForm(e)} />
                <Button type="submit" value="Log In" />
                <Link to="/sign-up">First time? Create an account!</Link>
            </FormStyle>
        </MainComponentStyle>
    )
}
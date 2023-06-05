import { Link, useNavigate } from "react-router-dom";
import TextGroup from "./Components/TextGroup";
import { Button, FormStyle, Input, MainComponentStyle } from "./Components/styles";
import { useState } from "react";
import { logUp } from "../../services/api";

export default function SignUp() {
    const [form, setForm] = useState({})
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()


    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }
    function handleSubmit(e) {
        e.preventDefault();
        let empty = '';
        if(!form.email) empty += 'email, ';
        if(!form.password) empty += 'password, ';
        if(!form.name) empty += 'name, ';
        if(!form.picture_url) empty += 'picture_url';
        if(empty) return alert(`Preencha os campos: ${empty}`);
        setDisabled(!disabled);
        logUp(form)
            .then(res => {
                alert(res.data)
                navigate('/')
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
                <Input placeholder="username" name="name" onChange={(e) => handleForm(e)} />
                <Input placeholder="picture url" name="picture_url" onChange={(e) => handleForm(e)} />
                <Button type="submit" value="Sign Up" disabled={disabled} />
                <Link to="/">Switch back to log in</Link>
            </FormStyle>
        </MainComponentStyle>
    )
}
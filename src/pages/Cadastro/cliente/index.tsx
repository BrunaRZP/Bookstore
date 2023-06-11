
import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { mainApiJson } from "../../Login/mainApi/config";
import NavbarNavigation from "../../../components/Navbar/NavbarNavigatio";

import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";

export default function CadastroCliente() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  async function criarCadastro(e: FormEvent) {
    try {
      e.preventDefault();

      const res = await mainApiJson.post("/user", {

      const res = await axios.post("https://api-ecommerce-livraria.onrender.com/user", {

        name,
        email,
        password,
      }, { headers: { "Content-Type": "application/json" } });
      if (res.status === 201) {
        alert("Usuário cadastrado");
      }
    } catch (error: any | AxiosError) {
      alert(error.response.data);
    }
  }

  return (
    <>
      <NavbarNavigation />
      
      <form onSubmit={(e) => criarCadastro(e)}>
        <input
          name="name"
          type="text"
          placeholder="Nome"
          required={true}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          name="confirm-password"
          type="password"
          placeholder="Confirme sua senha"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" disabled={password !== confirmPassword}>
          Cadastrar
        </button>
      </form>
    </>
  );
}
    <form onSubmit={(e) => criarCadastro(e)}>
      <input
        name="name"
        type="text"
        placeholder="Nome"
        required={true}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        name="confirm-password"
        type="password"
        placeholder="Confirme sua senha"
        required={true}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" disabled={password !== confirmPassword}>
        Cadastrar
      </button>
    </form>
  );
}

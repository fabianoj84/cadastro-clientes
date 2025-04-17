"use client";

import { useState } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function CadastroCliente() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    idade: "",
    observacoes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "clientes"), form);
      alert("Cliente cadastrado com sucesso!");
      setForm({
        nome: "",
        telefone: "",
        email: "",
        idade: "",
        observacoes: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar cliente: ", error);
      alert("Erro ao cadastrar cliente.");
    }
  };

  return (
    <main style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={form.idade}
          onChange={handleChange}
        />
        <textarea
          name="observacoes"
          placeholder="Observações"
          value={form.observacoes}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

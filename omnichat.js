import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cep: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchAddress = async () => {
    if (formData.cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
        setFormData({ ...formData, address: response.data.logradouro });
      } catch (error) {
        console.error("Erro ao buscar endereço");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96 p-4 shadow-lg">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Criar Conta</h2>
          <Input
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            className="mb-2"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-2"
          />
          <Input
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
            onBlur={fetchAddress}
            className="mb-2"
          />
          <Input
            name="address"
            placeholder="Endereço"
            value={formData.address}
            disabled
            className="mb-2"
          />
          <Button className="w-full mt-2">Criar Conta</Button>
        </CardContent>
      </Card>
    </div>
  );
}

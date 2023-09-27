"use client";

import FormStoppage from "@/components/forms";

export default function Home() {
  return (
    <div className="container mx-auto p-4 mt-12 mb-11 gap-3 flex flex-col">
        <h1 className="font-bold mb-4 flex justify-center text-center text-white text-4xl">Formulário de parada de equipamento</h1>
      <FormStoppage />
    </div>
  );
}

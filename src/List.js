import React, { useState } from 'react';

// Componente List
function List() {
  const [people, setPeople] = useState([]); // Estado para armazenar as pessoas
  const [personName, setPersonName] = useState(''); // Estado para o nome da pessoa a ser adicionada

  // Função para adicionar uma pessoa à lista
  const addPerson = () => {
    if (personName.trim() !== '') {
      setPeople([...people, personName]);
      setPersonName(''); // Limpa o campo de entrada após adicionar
    } else {
      alert('Por favor, insira um nome válido.');
    }
  };

  // Função para deletar uma pessoa da lista
  const deletePerson = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h1>Lista 1- Listagem de Pessoas</h1>
      <div>
        <input
          type="text"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          placeholder="Digite o nome da pessoa"
        />
        <button onClick={addPerson}>Adicionar</button>
      </div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person}
            <button onClick={() => deletePerson(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

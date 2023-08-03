import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [nameparticipant, setNameparticipant] = useState('')

  function handleParticipantAdd() {
    setParticipants(prevState => [...prevState, nameparticipant]);
    setNameparticipant('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sábado, 5 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNameparticipant}
          value={nameparticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={participant => participant}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            handleParticipantRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem registrado para o evento ainda.
          </Text>
        )}
      />
    </View>
  );
}
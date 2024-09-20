import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';

import styles from './assets/style/main';
import dados from './assets/style/dadosCliente';
import resumo from './assets/style/resumoCliente';
import footer from './assets/style/footer';

import { useState } from 'react';


export default function App() {

  const [nome, setNome] = useState();
  const [placa, setPlaca] = useState();
  const [carro, setCarro] = useState();
  const [dia, setDia] = useState();
  const [valor, setValor] = useState();
  const [resumoDados, setResumoDados] = useState({});

  const [resumoClass, setResumoClass] = useState(resumo.displayNone);

  function Cacular(){
    const dias = parseInt(dia);
    const valorDiaria = parseFloat(valor);
    let total = dias * valorDiaria;
    let valorR = total;

    if(total>150){
      valorR = (total-(total*0.10));
      valorR = `Valor com desconto: ${valorR.toFixed(2)}`;
      setResumoClass(resumo.resumoContainer);
    }else if(total>0 && total<=150){
      valorR = `Valor sem desconto: ${valorR.toFixed(2)}`;
      setResumoClass(resumo.resumoContainer);
    }else{
      alert('DIGITE CORRETAMENTE')
    }

    setResumoDados({nome, placa, carro, dia, valor, valorR});
  }

function Limpar(){
  setNome('RESETANDO');
  setPlaca('RESETANDO');
  setCarro('RESETANDO');
  setDia('RESETANDO');
  setValor('RESETANDO');
  setResumoDados({});

  setTimeout(function(){
    setResumoClass(resumo.displayNone);
    setNome('');
    setPlaca('');
    setCarro('');
    setDia('');
    setValor('');
    setResumoDados({});
  },1500)
}

function Sair(){
  fechar = function Fechar(){
    setNome('SAINDO');
    setPlaca('SAINDO');
    setCarro('SAINDO');
    setDia('SAINDO');
    setValor('SAINDO');
    setResumoDados({});
    alert('VOLTE SEMPRE');
    setResumoClass(resumo.displayNone);
    setTimeout(function AutoClose(){
      window.open('https://www.youtube.com/watch?v=Hv3st70Rmpk');
      window.close();
      setResumoClass(resumo.displayNone);
      setNome('');
      setPlaca('');
      setCarro('');
      setDia('');
      setValor('');
      setResumoDados({});
    }, 1500)
  };

  setTimeout(fechar,1000)
}

function abrirGitHub() {
    Linking.openURL('https://github.com/RhoanBarioni');
}

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.bodyContainer}>
        <View style={styles.containerLogo}>
          <Image source={require('./assets/img/estacionamentologo.png')} style={styles.logo} />
          <Text style={styles.textLogo}>
            Estacionamento do jorge
          </Text>
        </View>


        <View style={dados.dadosContainer}>
          <Text style={dados.dadosTitle}>Dados do Cliente</Text>
          <View style={dados.containerInput}>
            <TextInput placeholder='Digite o nome do Cliente' style={dados.inputText} value={nome} onChangeText={setNome} />
            <View style={dados.inputRow}>
              <TextInput placeholder='Placa' style={dados.inputText} value={placa} onChangeText={setPlaca} />
              <TextInput placeholder='Carro' style={dados.inputText} value={carro} onChangeText={setCarro} />
            </View>
            <View style={dados.inputRow}>
              <TextInput placeholder='Dias' style={dados.inputText} value={dia} onChangeText={setDia} />
              <TextInput placeholder='Valor da Diária' keyboardType="numeric" style={dados.inputText} value={valor} onChangeText={setValor} />
            </View> 
          </View>
        </View>


        <View style={resumoClass} value={resumo}>
          <Text style={resumo.resumoTitle}>Resumo</Text>
          <View style={resumo.containerInput}>
            <TextInput placeholder='Digite o nome do Cliente' style={resumo.inputText} value={resumoDados.nome} editable={false} />
            <View style={resumo.inputRow}>
              <TextInput placeholder='Placa' style={resumo.inputText} value={resumoDados.placa} editable={false} />
              <TextInput placeholder='Carro' style={resumo.inputText} value={resumoDados.carro} editable={false} />
            </View>
            <View style={resumo.inputRow}>
              <TextInput placeholder='Dias' style={resumo.inputText} value={resumoDados.dia} editable={false} />
              <TextInput placeholder='Valor da Diária' keyboardType="numeric" style={resumo.inputText} value={resumoDados.valor} editable={false} />
            </View> 
            <TextInput placeholder='Valor da Diária com Desconto' keyboardType="numeric" style={resumo.inputText} value={resumoDados.valorR} editable={false} />
          </View>
        </View>

        <View style={resumo.buttonContainer}>
          <TouchableOpacity style={resumo.button} onPress={Cacular} >Cacular</TouchableOpacity>
          <TouchableOpacity style={resumo.button} onPress={Limpar}>Limpar</TouchableOpacity>
          <TouchableOpacity style={resumo.button} onPress={Sair}>Sair</TouchableOpacity>
        </View>
      </View>
      

      <View style={footer.footerContainer}>
        <Text style={footer.footerText} onPress={abrirGitHub}>Made by Rhoan</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
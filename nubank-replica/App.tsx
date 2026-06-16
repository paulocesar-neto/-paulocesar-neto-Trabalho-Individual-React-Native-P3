import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { styles } from './styles';
import Eu from './assets/Eu.jpeg';
import olho1 from './assets/olho1.png';
import olho2 from './assets/olho2.png';
import seta from './assets/seta.png';
import Pix from './assets/Pix.png';
import recarga from './assets/recarga.png';
import pagar from './assets/pagar.png';
import emprestimo from './assets/emprestimo.png';
import caixinha from './assets/caixinha.png';
import ajuda from './assets/ajuda.png';
import card from './assets/card.png';
import info from './assets/info.png';
import options from './assets/options.png';
import { useState } from 'react';

export default function App() {
  const [showSaldo, setShowSaldo] = useState(false);
  const [search,setSearch]= useState('')
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.images}>
          <Image style={styles.photoPerfil}
            source={Eu} />
          <View style={styles.navIcon}>
            <TextInput 
              style={styles.searchInput}
            placeholder="Buscar"
            value={search}
            onChangeText={setSearch}
            />
            <TouchableOpacity 
              onPress={() => setShowSaldo (!showSaldo)}>
                <Image style={styles.eyeIcon}
                source={showSaldo ? olho1 : olho2} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.eyeIcon}
                source={info} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.eyeIcon}
                source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.welcomeText}>
          Olá, Bruce Wayne
        </Text>
      </View>
      <View style={styles.infoConta}>

        <TouchableOpacity>
          <View style={styles.txtIconContainer}>
            <Text style={styles.txtAccount}>
              Saldo em conta
            </Text>
            <Image style={styles.setaIcon}
              source={seta} />
          </View>
          <Text style={styles.accountValue}>
            {showSaldo ? 'R$ Ficou Pobre': '••••••••'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsDiv}>
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttons}>

          <TouchableOpacity style={styles.buttonsIcons}>
            <View style={styles.buttonNav}>
              <Image style={styles.imgIcon}
                source={Pix} />
            </View>
            <Text style={styles.buttonTxt}>
              Área Pix e Transferir
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsIcons}>

            <View style={styles.pagarButton}>
              <View style={styles.buttonNav}>
                <Image style={styles.pagarIcon}
                  source={pagar} />
              </View>
              <Text style={styles.buttonTxt}>
                Pagar
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsIcons}>
            <View style={styles.buttonNav}>
              <Image style={styles.imgIcon}
                source={emprestimo} />
            </View>
            <Text style={styles.buttonTxt}>
              Pegar emprestado
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsIcons}>
            <View style={styles.buttonNav}>
              <Image style={styles.imgIcon}
                source={ajuda} />
            </View>
            <Text style={styles.buttonTxt}>
              Ajuda financeira
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsIcons}>
            <View style={styles.buttonNav}>
              <Image style={styles.imgIcon}
                source={recarga} />
            </View>
            <Text style={styles.buttonTxt}>
              Recarga de celular
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsIcons}>
            <View style={styles.buttonNav}>
              <Image style={styles.imgIcon}
                source={caixinha} />
            </View>
            <Text style={styles.buttonTxt}>
              Caixinhas e Investir
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.cardDiv}>
          <Image style={styles.imgCard}
            source={card} />
          <Text style={styles.cardTxt}>
            Meus cartões
          </Text>
        </TouchableOpacity>
        <View style={styles.line}>
        </View>
      </View>

      <View style={styles.infoCard}>
        <TouchableOpacity>
          <View style={styles.txtIconContainer2}>
            <Text style={styles.txtCard}>
              Cartão de crédito
            </Text>
            <Image style={styles.setaIcon}
              source={seta} />
          </View>
        </TouchableOpacity>
          <Text style={styles.cardInfo}>
            Fatura atual
          </Text>
        <Text  style={styles.cardValue} >
          {showSaldo ? 'R$ Devendo a Liga': '••••••••'}
        </Text>
        <Text style={styles.cardInfo}>
            Limite disponível de {showSaldo ? 'R$ - Negativo' : '••••••••'}
          </Text>
          <View style={styles.line}>
        </View>
           <TouchableOpacity>
          <View style={styles.txtIconContainer2}>
            <Text style={styles.txtCard}>
              Empréstimo
            </Text>
            <Image style={styles.setaIcon}
              source={seta} />
          </View>
        </TouchableOpacity>
          <Text style={styles.cardInfo}>
            Até R$ {showSaldo ? 'R$ 0,00': '••••••••'} disponível para você
          </Text>
            <View style={styles.line}>
        </View>
           <TouchableOpacity>
          <View style={styles.txtIconContainer2}>
            <Text style={styles.txtCard}>
              Seguro de Vida
            </Text>
            <Image style={styles.setaIcon}
              source={seta} />
          </View>
        </TouchableOpacity>
          <Text style={styles.cardInfo}>
          Um seguro completo que cabe no bolso
          </Text>
             <View style={styles.line}>
        </View>
           <TouchableOpacity>
          <View style={styles.txtIconContainer2}>
            <Text style={styles.txtCard}>
              Investimento
            </Text>
            <Image style={styles.setaIcon}
              source={seta} />
          </View>
        </TouchableOpacity>
          <Text style={styles.cardInfo}>
          Conheça nossos fundos de investimentos
          </Text>
               <View style={styles.line}>
        </View>
           <TouchableOpacity>
          <View style={styles.txtIconContainer2}>
            <Text style={styles.txtCard}>
              Shopping
            </Text>
            <Image style={styles.setaIcon}
              source={seta} />
          </View>
        </TouchableOpacity>
          <Text style={styles.cardInfo}>
            Vantagens exclusivas das nossas marcas preferidas
          </Text>
          

      </View>
      
    </View>
    </ScrollView>
  );
}



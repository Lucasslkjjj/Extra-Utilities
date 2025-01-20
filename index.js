import readlinesync from 'readline-sync';
import fs from 'fs';
import chalk from 'chalk';
let res;                                    let cpf = [];                             let data;                                  let ano;                                  let mes;                                  let dia;                                  let number_phone = [];                     let cep;                                  let cep_obj;                               let age;                                  let senha;                                let digitos_num_cartao = [];              let person_name;                          let user_birth;                             let user_state;                           let user_city;                              let rua;                                  let data_vencimento;                      let user_cvv;                             let user_bank;                              let user_ddd;                               let user_formed_email;                    let user_senha;                             let genero;                               let quantidade_pessoas = 1;                 let person_obj;                           let dados_das_pessoas = [{}];               let num_of_generations;                     let first_person_name;                    let last_person_name;

async function encurtador(url_user) {
  //Função para processar a url do usuário e encurtar ela.
  try {
    console.log(`processando a url ${url_user}`);
  const encurtador_http = await fetch(`https://api.encurtador.dev/encurtamentos`,{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
   },
    body:JSON.stringify({url: url_user})
    
  });
  console.log('obtendo dados...');
  if(!encurtador_http.ok) {
    return console.error(`houve um erro de conexão com a url ${url_user}.`);
  }
  const encurtador_obj = await encurtador_http.json();
  console.log('alterando formatação...');
  return console.log(`Sucesso! link encurtado:${encurtador_obj.urlEncurtada}`);
} catch(err) {
  console.error('erro ao processar o link.Por favor certifique-se de que inseriu correramente.',err);
}
   }
  
async function options(){
  //Função criada para registrar o json que obtém o arquivo .JSON com as opções das moedas disponíveis.
  const options = './Coins.json';
fs.readFile(options, 'utf8', (err, data) => {
  
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log('Moedas disponíveis:\n',jsonData);
    if(res === "1") {
      console.clear();
      const moeda_de_origem = readlinesync.question("Digite a sigla da moeda de origem:").toUpperCase();
      const moeda_de_destino = readlinesync.question("insira a moeda de destino:").toUpperCase();
      Price(moeda_de_origem,moeda_de_destino);
      console.clear();
    }
    if(res === "2") {
      console.clear();
  const original_coin = readlinesync.question('Insira a sigla da moeda de origem para realizar a conversão:').toUpperCase();
  const moeda_conversora = readlinesync.question('Insira a moeda conversora:').toUpperCase();
  conversor(original_coin,moeda_conversora);
    }
  } catch (parseErr) {
    console.error('JSON error', parseErr);
  }
});
}

 async function conversor(moeda_original,moeda_para_converter) {
   //Função para realizar a conversão entre as moedas.
   console.log('processando dados...');
     const api_price = await fetch(`https://economia.awesomeapi.com.br/last/${moeda_original}-${moeda_para_converter}`);
     
     if(!api_price.ok) {
       return condole.log(`erro ao reconhecer as moedas!`);
     }
     const price_api_obj = await api_price.json();
     const name_coins = moeda_original + moeda_para_converter;
     const valor_moeda_original = parseInt(readlinesync.question(`insira o valor da moeda ${moeda_original}:`));
    const valor_convertido = valor_moeda_original / parseFloat(price_api_obj[name_coins].bid).toFixed(2);
    console.log(`em uma conversão entre ${price_api_obj[name_coins].name},R$ ${valor_moeda_original} ${moeda_original} equivale a  ${valor_convertido} ${moeda_para_converter}`);
}

async function Price(moeda_referencia,moeda_alvo) {
  //Função criada para mostrar o preço entre as moedas.
  process.stdout.write('\x1B[2J\x1B[0f');
  const api_conversora = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda_referencia}-${moeda_alvo}`);
  
  if(!api_conversora.ok) {
    return console.error(`erro ao obter os dados das moedas ${moeda_referencia} e ${moeda_alvo}`);
  }
  const nome_das_moedas = moeda_referencia + moeda_alvo;
  const api_conversora_obj = await api_conversora.json();
  console.log('--------------------------------------------------------------');
  console.log(`\nInformações das moedas ${api_conversora_obj[nome_das_moedas].name}:\n\n -Valor atualmente:${api_conversora_obj[nome_das_moedas].bid}\n\n -Valor máximo:${api_conversora_obj[nome_das_moedas].high}\n\n -Valor mínimo:${api_conversora_obj[nome_das_moedas].low}\n\n -Variação:${api_conversora_obj[nome_das_moedas].varBid}\n\n -Porcetagem de variaçáo:${api_conversora_obj[nome_das_moedas].pctChange}%\n\n -Ultima data de negociação:${api_conversora_obj[nome_das_moedas].create_date}\n`);
  console.log('--------------------------------------------------------------');
}

function gerar_cpf() {
  //Função para simular um cpf válido.
  console.log('Gerando cpf falso...');
  
  if(quantidade_pessoas > 1) {
    //if criado para previnir erro enquanto a função estiver em um loop,resetando o valor atual e o tipo dela para novamente um array vazio.
  cpf = [];
  }
  for(let numbers_cpf = 1; numbers_cpf <=4;numbers_cpf++) {
    
    if(numbers_cpf === 4) {
      //Para os dois últimos digitos do cpf.
      const digito_final = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
      cpf.push(digito_final); cpf = String(cpf); cpf = cpf.split(",");
      break;
    }
    const digito_cpf = Math.floor(Math.random() * (999 - 100 + 1)) + 100; //Para os 3 digitos do CPF.
    cpf.push(digito_cpf);
  }
  cpf = `${cpf[0]}.${cpf[1]}.${cpf[2]}-${cpf[3]}`;
  console.log('Sucesso!');
}

function data_nascimento() {
  //Função para gerar de maneira aleatória a data de nascimento da pessoa.
  console.log('Gerando data de nascimento...');
     ano = Math.floor(Math.random() * (2007 - 1940 + 1)) + 1940;
    mes = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    switch(mes) {
      //switch para colocar valor máximo dos dias dependendo do mês e caso for Fevereiro,fazer o cálculo do ano bissexto.
      case 2:
     if(ano % 4 === 0 && ano % 100 !== 0 || ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0 ) {
        dia = Math.floor(Math.random() * (29 - 1 + 1)) +1;
        break;
    }
    
     else if(ano % 4 !== 0 || ano % 4 === 0 && ano % 100 === 0 && ano % 400 !== 0) {
        dia = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
        }
        break;
        
       case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
          dia = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
          break;
       case 4: case 6: case 9: case 11: 
            dia = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
          break;
            
}
//Obtendo a data atual.
const data_atual = new Date();let mes_atual = data_atual.getMonth(); const dia_atual = data_atual.getDate(); const ano_atual = data_atual.getFullYear();mes_atual++;
age = ano_atual - ano;

if(dia_atual - dia === 0 && mes_atual - mes === 0) {
  //If para acrescentar mais 1 na idade da pessoa caso seja o aniversário dela.
  age++;
   }
 user_birth = `${dia}/${mes}/${ano}`;
 console.log('Data gerada!');
 
}

  function email(name,surname) {
    
    //Função para gerar um email baseado no nome e no sobrenome gerado por ela.
    console.log('Gerando email...');
    const sufixo_num = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const options_sufixos_email = ['@gmail.com','@yahoo.com','@outlook.com'];
   const sufixo_email = Math.floor(Math.random() * (options_sufixos_email.length));
   const user_email = options_sufixos_email[sufixo_email];
   const options_symbol = ["_","-","."];
   const symbol = Math.floor(Math.random() * (options_symbol.length));
   const user_symbol = options_symbol[symbol]
    user_formed_email = `${name}${user_symbol}${surname}${sufixo_num}${user_email}`;
   console.log('Email gerado!');
   
  }
  
  function user_password() {
    
    //Função para gerar uma senha do email.
    console.log('Gerando senha...');
    let senha = []
    const caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","@","#","$","&","*","?","!",";","+","(","-","%","~","="]
    
    for(let i = 1;i <=8;i++) {
      const caracter_senha = Math.floor(Math.random() * (caracteres.length));
      senha.push(caracteres[caracter_senha]);
    }

       user_senha = senha.join('');
  }
  
  function validar_num_cartao() {
    
    //Função para validar os números do cartão,utilizando o algoritmo de Luhn para ser o mais próximo possível de um real.
    digitos_num_cartao = [];
    console.log('Gerando digitos do cartão...');
    
    for(let a = 1; a <=4;a++) {
      const digitos_do_cartao = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
      digitos_num_cartao.push(digitos_do_cartao);
    }
    
      const digitos_invertidos =
      String([`${digitos_num_cartao[3]},${digitos_num_cartao[2]},${digitos_num_cartao[1]},${digitos_num_cartao[0]}`]);
     let grupos_num = digitos_invertidos.split(",");
      let num_individuais = grupos_num.join("").split("");
      let numeros_invertidos = [];
      
      for(let f = 15; f <=num_individuais.length;f-- ) {
        
      if(f < 0) {   
        break;   
     }
        let num_invertido =  num_individuais[f];
        num_invertido = parseInt(num_invertido);
        
        if(f % 2 === 1) {
          num_invertido = num_invertido * 2;
          if(num_invertido > 9) {
            num_invertido -= 9
          }
        }
     numeros_invertidos.push(num_invertido);
         }
         
    let soma = 0;
    for(let nums of numeros_invertidos) {
      soma += nums;
    }
    if(soma % 10 === 0) {
      console.log(`Número de cartão válido!`);
   digitos_num_cartao = String( digitos_num_cartao);
    }
    let contador_de_erros = 0;
     if(soma % 10 !== 0) {
      if(contador_de_erros === 0 || contador_de_erros % 50 === 0) {
        console.log('tentando novamente...');
        //Um contador de erros para reduzir a quantidade de logs gerados no terminal.
      }
      contador_de_erros++;
      validar_num_cartao();
    }
  }
  
  function dados_cartao() {
    
    //Função para obter dados bancários gerais.
    console.log('gerando dados de banco falso...');
    const bancos = ["Banco Solaris","Banco Nexus","Banco Futuro","Banco Infinity","Banco Avante"];
    const escolher_banco = Math.floor(Math.random() * (bancos.length));
     user_bank = bancos[escolher_banco];
    const mes_validade = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log('Gerando validade...');
    console.log('gerando ano')
    const ano_validade = Math.floor(Math.random() * (35 - 25 + 1)) + 25;
    console.log('gerando ano...');
     data_vencimento = `${mes_validade}/${ano_validade}`;
    user_cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    console.log('Tudo certo!');
 }
  
 async  function gerar_cep() {
   
   //Função criada para gerar um cep aleatório e ser fornecido em uma api,com o intuito de simular um endereço.
   let i = 0;
   try{
   cep = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    const http_cep = await fetch(`https://cep.awesomeapi.com.br/${cep}`);
    
     if(!http_cep.ok) {
      i++;
      if(i % 25 === 0 || i === 0) {
        console.log('buscando Informações...');
      }
     return gerar_cep();
    }
    
    if(http_cep.ok) {
    cep_obj = await http_cep.json();
     user_ddd = cep_obj.ddd;
    user_state = cep_obj.state;
    user_city = cep_obj.city;
    rua = cep_obj.address;
    }
    
   } catch(err) {
     i++;
     if(i % 50 === 0) {
       //Mais um contador de erros com objetivo semelhante que o anterior.
     console.error('Um erro inesperado aconteceu,tentando novamente...');
      }
   } 
}

  function number_creator(ddd) {
    
    //Função criada para gerar um número de telefone aleatório com base no ddd fornecido pelo cep.
    console.log('gerando número de telefone...');
    const number1 = Math.floor(Math.random() * (9999 - 1000 + 1)) +1000;
    const number2 = Math.floor(Math.random() * (9999 - 1000 + 1)) +1000;
    number_phone = `+55 ${ddd} ${number1}-${number2}`
    console.log('Número gerado!');
}
  function information() {
 
 //Função criada apenas para exibir as informações finais no terminal.
 console.log("-------------------------------------------------------------")
    console.log(`\nIdentificação: \n -Nome da pessoa:${person_name}\n -CPF:${cpf}\n -Data de nascimento:${user_birth}\n -Idade:${age} \n \n Contato:\n -Email:${user_formed_email}\n -Senha:${user_senha}\n -Número de telefone:${number_phone}\n\n Endereço:\n -País:Brasil \n -Estado:${user_state} \n  -Cidade:${user_city}\n -Endereço:${rua}\n\n Dados bancários:\n -Banco:${user_bank}\n -Número do cartão:${digitos_num_cartao}\n -Data de vencimento:${data_vencimento}\n -CVV:${user_cvv}`);
  console.log("-------------------------------------------------------------");
}
function transformar_em_arquivo_json() {
  
  //Função para transformar as informações da pessoa gerada em um arquivo .JSON
  const resposta_sobre_json = readlinesync.question(`Você deseja transformar as informações de pessoa em um arquivo json?\n [ 1 ] Sim\n [ 2 ] Não\n -`)

  if(resposta_sobre_json !== "1" && resposta_sobre_json !== "2") {
    console.log(`Erro ao detectar a opção ${resposta_sobre_json}.`);
  }
  
  else if(resposta_sobre_json === "1") {
   let person_json = JSON.stringify(dados_das_pessoas,null,2);
   fs.writeFile('Pessoas.json',person_json,err => {
     if(err) {
       console.error('Houve um erro ao gerar o json,por favor tente novamente.',err);
     } else {
       console.log('Objeto json gerado!');
     }
   });
  }
  
 else if(resposta_sobre_json === "2") {
   console.log('Programa finalizado com sucesso!');
 }
}

function get_person() {
  //Função para transfomar os dados obtidos em um objeto JavaScript.
  
  console.log('executando get person');
  person_obj = [{
      pessoa: {
      Identificação:{
        Nome: person_name,
        CPF: cpf,
        "Data de nascimento": user_birth,
        Idade: age
      },
      Contato:{
       Email: user_formed_email,
       Senha: user_senha,
       "Número de telefone": number_phone
      },
      Endereço:{
      País: "Brasil",
      Estado: user_state,
      Cidade: user_city,
      Endereço: rua
      },
      "Dados bancários":{
      Banco: user_bank,
      "Números do cartão": digitos_num_cartao,
      "Data de vencimento" : data_vencimento,
      CVV: user_cvv
      }
    }
  }];
  dados_das_pessoas.push(person_obj); //Registrando a pessoa em um array para no final se transformar em um arquivo .json
}

async function ghost_person(gender,amount) {
  //Função que,com base com o que o usuário forneceu,gerar um nome falso de acordo com o sexo e a quantidade de pessoas que é para gerarem.
  
  const api_person = await fetch(`https://randomuser.me/api/?inc=name,gender,nat&gender=${gender}&nat=br&results=${amount}`);
  const api_person_obj = await api_person.json();const user = api_person_obj.results[0];
   first_person_name = user.name.first;
   last_person_name = user.name.last;
  person_name = `${first_person_name} ${last_person_name}`;
}

function gerar_mais_de_uma_pessoa(amount) {
  //Função para caso se o usuário quiser criar mais de uma pessoa,criar um loop com base no número que ele escolher.
  
  console.log('gerando...');
  for(quantidade_pessoas;quantidade_pessoas <= amount;quantidade_pessoas++) {
    console.log(quantidade_pessoas)
    obter_resultados();
  }
}

 async function obter_resultados() {
   
   //Função para chamar todas as outras e fazerem a alteração das variáveis do início.
   
   process.stdout.write('\x1B[2J\x1B[0f');
   await gerar_cep();
  await number_creator(user_ddd);
  await ghost_person(genero,num_of_generations);
  email(first_person_name,last_person_name);
  user_password();   
  data_nascimento();                 
  gerar_cpf();
  validar_num_cartao(); 
  dados_cartao();
   get_person();
   process.stdout.write('\x1B[2J\x1B[0f');
    information();
    await transformar_em_arquivo_json();
}
let space = " ";

for(let h = 0; h<=61; h++) {
  if(h===61) { 
  process.stdout.write("_\n");
  break;
  }
  process.stdout.write('_');
}
for(let i = 0; i <=5; i++) {
  switch(i) {
    case 0:
  console.log(`| ${space.repeat(18)} ${chalk.green('Extra Utilities')}`);
  break;
  case 1:
    console.log(`| ${chalk.blue(`Nome do projeto:`)} ${chalk.yellow('Extra Utilities')}`);
    break;
  case 2:
      console.log(`| ${chalk.blue(`Descrição:`)} ${chalk.yellow('Projeto multifuncional incluindo cotação de moedas e gerador de dados de uma pessoa falsa.')}`);
     break;
  case 3:
      console.log(`| ${chalk.blue(`GitHub:`)} ${chalk.yellow('Lucasslkjjj')}${space}`);
      break;
  }
  if(i === 5) {
    for(let x = 0; x<=60; x++) {
  process.stdout.write("_");
  }
  }
}
const option = parseInt(readlinesync.question('\n\n Insira uma das três opções:\n [ 1 ] Encurtar um URL.\n [ 2 ] Ver cotação das moedas/converter\n [ 3 ] Gerar uma pessoa falsa.\n -'));
  
  if(option !== 1 &&option !== 2 && option !== 3) { 
    console.log(`erro ao detectar a opção ${option}.`); 
  }
process.stdout.write('\x1B[2J\x1B[0f');
  switch(option) {
  case 1:
      const url_user = readlinesync.question('insira uma url válida:\n -'); 
      encurtador(url_user); 
      break;
  case 2:
      res =readlinesync.question('escolha:\n [ 1 ] Ver a cotação de alguma moeda.\n  [ 2 ]Fazer conversão de uma moeda para outra.\n -');
    if(res === "1" || res === "2") { 
       options();
       }
      break;
  case 3:
        genero = readlinesync.question('escolha um gênero:\n 1-Homem\n 2-Mulher\n -');
    if(genero === "1") {
        genero = 'male';
        num_of_generations = readlinesync.question('insira a quantidade que você deseja gerar:\n 1- Somente uma pessoa.\n 2- Mais de uma pessoa.\n -');
    if(num_of_generations !== "1" && num_of_generations !== "2") {
        console.log(`Erro ao detectar a opção ${num_of_generations}.`);
           break;
         }
    else if(num_of_generations === "1") {
        obter_resultados();
         }
    else if(num_of_generations === "2") {
        let int_num_of_generations = parseInt(readlinesync.question("Insira o número de pessoas que deseja gerar(Máximo 5) \n -"));
         
    if(!(int_num_of_generations <=5)) {
        console.log('O limite é 5! Insira uma resposta correta');
             break;
           }
           
    else if(int_num_of_generations<=5) {
        num_of_generations = String(int_num_of_generations);
        gerar_mais_de_uma_pessoa(num_of_generations);
           }
        }
     }
       
    if(genero === "2") {
        genero = 'female';
        let num_of_generations = readlinesync.question('insira a quantidade que você deseja gerar:\n 1- Somente uma pessoa.\n 2- Mais de uma pessoa.\n -');
    if(num_of_generations !== "1" && num_of_generations !== "2") {
        console.log(`Erro ao detectar a opção ${num_of_generations}.`);
           break;
         }
      
    if(num_of_generations === "1") {
         obter_resultados();
         }
    if(num_of_generations === "2") {
        let int_num_of_generations = parseInt(readlinesync.question("Insira o número de pessoas que deseja gerar(Máximo 10) \n -"));
     if(!(int_num_of_generations<=10)) {
        console.log('O limite é 10! Insira uma resposta correta');
             break;
           }
    if(int_num_of_generations <=10) {
        num_of_generations = String(int_num_of_generations);
         gerar_mais_de_uma_pessoa(num_of_generations);
           }
         }
      }
      break;

       }
     if(genero !== "1" && genero !== "2") {
     if(genero === "male" || genero === "female") {
        console.log('Opções validas...');
    }else{
         console.log(`erro ao detectar a opcão ${genero}`);
         }
       }